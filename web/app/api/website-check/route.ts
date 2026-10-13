import { NextResponse } from "next/server";
import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

/**
 * Website-Schnellcheck: lädt die Startseite einer öffentlichen Website und
 * prüft Grundlagen (HTTPS, Antwortzeit, Titel, Beschreibung, H1, Viewport,
 * Sprache, Bild-Alternativtexte, Impressum, Kontakt, Vorschaubild).
 * Schutz: nur http(s), keine privaten Adressen (auch nach Weiterleitungen),
 * Zeitlimit, Größenlimit, einfache Ratenbegrenzung je Absender.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 1_500_000;
const TIMEOUT_MS = 9000;
const MAX_REDIRECTS = 5;

type Status = "gut" | "mittel" | "schlecht";
export type Pruefpunkt = { key: string; titel: string; status: Status; befund: string; tipp?: string };

const anfragen = new Map<string, { n: number; bis: number }>();
function limitiert(ip: string): boolean {
  const jetzt = Date.now();
  const e = anfragen.get(ip);
  if (!e || e.bis < jetzt) {
    anfragen.set(ip, { n: 1, bis: jetzt + 10 * 60_000 });
    return false;
  }
  e.n += 1;
  return e.n > 12;
}

function privateAdresse(ip: string): boolean {
  if (isIP(ip) === 4) {
    const [a, b] = ip.split(".").map(Number);
    return a === 10 || a === 127 || a === 0 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127);
  }
  const v6 = ip.toLowerCase();
  return v6 === "::1" || v6 === "::" || v6.startsWith("fc") || v6.startsWith("fd") || v6.startsWith("fe80") || v6.startsWith("::ffff:");
}

async function urlErlaubt(u: URL): Promise<string | null> {
  if (u.protocol !== "http:" && u.protocol !== "https:") return "Nur http- und https-Adressen sind möglich.";
  if (u.username || u.password) return "Adressen mit Zugangsdaten sind nicht möglich.";
  const host = u.hostname.toLowerCase();
  if (!host.includes(".") || host.endsWith(".local") || host.endsWith(".internal") || host === "localhost") return "Bitte gib eine öffentliche Website-Adresse ein.";
  if (isIP(host)) return "Bitte gib einen Domainnamen ein, keine IP-Adresse.";
  try {
    const adressen = await lookup(host, { all: true });
    if (adressen.length === 0 || adressen.some((a) => privateAdresse(a.address))) return "Diese Adresse ist nicht öffentlich erreichbar.";
  } catch {
    return "Die Domain konnte nicht aufgelöst werden. Ist sie richtig geschrieben?";
  }
  return null;
}

async function laden(start: URL): Promise<{ html: string; url: URL; ttfbMs: number; dauerMs: number; status: number; bytes: number; umleitungen: number }> {
  let url = start;
  let umleitungen = 0;
  const t0 = performance.now();
  for (;;) {
    const fehler = await urlErlaubt(url);
    if (fehler) throw new Error(fehler);
    const res = await fetch(url, {
      redirect: "manual",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Pixel56-WebsiteCheck/1.0; +https://www.pixel56.de/website-check)", Accept: "text/html,application/xhtml+xml" },
    });
    const ttfbMs = performance.now() - t0;
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
      umleitungen += 1;
      if (umleitungen > MAX_REDIRECTS) throw new Error("Zu viele Weiterleitungen.");
      url = new URL(res.headers.get("location")!, url);
      await res.body?.cancel();
      continue;
    }
    const typ = res.headers.get("content-type") ?? "";
    if (!typ.includes("html")) {
      await res.body?.cancel();
      throw new Error("Unter dieser Adresse liegt keine HTML-Seite.");
    }
    const reader = res.body?.getReader();
    const teile: Uint8Array[] = [];
    let bytes = 0;
    if (reader) {
      for (;;) {
        const { done, value } = await reader.read();
        if (done || !value) break;
        bytes += value.byteLength;
        teile.push(value);
        if (bytes > MAX_BYTES) {
          await reader.cancel();
          break;
        }
      }
    }
    const html = new TextDecoder("utf-8", { fatal: false }).decode(Buffer.concat(teile.map((t) => Buffer.from(t))));
    return { html, url, ttfbMs, dauerMs: performance.now() - t0, status: res.status, bytes, umleitungen };
  }
}

const entschaerfen = (s: string) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
function meta(html: string, name: string): string {
  const m = html.match(new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]*>`, "i"));
  if (!m) return "";
  const c = m[0].match(/content=["']([^"']*)["']/i);
  return c ? entschaerfen(c[1]) : "";
}

function pruefen(d: Awaited<ReturnType<typeof laden>>): Pruefpunkt[] {
  const { html, url } = d;
  const head = html.slice(0, 200_000);
  const titel = entschaerfen((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i) ?? [])[1] ?? "");
  const beschreibung = meta(head, "description");
  const h1 = (html.match(/<h1[\s>]/gi) ?? []).length;
  const viewport = /<meta[^>]+name=["']viewport["']/i.test(head);
  const lang = (head.match(/<html[^>]*\slang=["']([a-zA-Z-]+)["']/i) ?? [])[1] ?? "";
  const bilder = html.match(/<img\b[^>]*>/gi) ?? [];
  const ohneAlt = bilder.filter((img) => !/\salt=/i.test(img)).length;
  const impressum = /href=["'][^"']*impressum[^"']*["']/i.test(html) || /impressum/i.test(entschaerfen(html).slice(-6000));
  const kontakt = /href=["']tel:/i.test(html) || /href=["'][^"']*kontakt[^"']*["']/i.test(html) || /href=["']mailto:/i.test(html);
  const ogBild = Boolean(meta(head, "og:image"));
  const noindex = /<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(head);
  const kb = Math.round(d.bytes / 1024);

  const p: Pruefpunkt[] = [];
  p.push(url.protocol === "https:"
    ? { key: "https", titel: "Verschlüsselung (HTTPS)", status: "gut", befund: "Die Seite wird verschlüsselt ausgeliefert." }
    : { key: "https", titel: "Verschlüsselung (HTTPS)", status: "schlecht", befund: "Die Seite läuft ohne HTTPS.", tipp: "Browser warnen vor unverschlüsselten Seiten, und Google bevorzugt HTTPS. Ein Zertifikat ist bei fast jedem Anbieter kostenlos." });
  const s = d.ttfbMs;
  p.push({
    key: "antwortzeit",
    titel: "Antwortzeit des Servers",
    status: s < 800 ? "gut" : s < 1800 ? "mittel" : "schlecht",
    befund: `Der Server hat nach ${(s / 1000).toFixed(1).replace(".", ",")} Sekunden geantwortet${d.umleitungen ? `, nach ${d.umleitungen} Weiterleitung${d.umleitungen > 1 ? "en" : ""}` : ""}.`,
    tipp: s >= 800 ? "Langsame Antworten kosten Besucher, bevor die Seite überhaupt sichtbar wird. Hosting, Caching und Weiterleitungen prüfen." : undefined,
  });
  p.push(!titel
    ? { key: "titel", titel: "Seitentitel", status: "schlecht", befund: "Es gibt keinen Seitentitel.", tipp: "Der Titel ist die Überschrift bei Google. Leistung und Ort gehören hinein." }
    : titel.length > 65 || titel.length < 15
      ? { key: "titel", titel: "Seitentitel", status: "mittel", befund: `„${titel.slice(0, 80)}“ (${titel.length} Zeichen).`, tipp: "Zwischen 15 und 60 Zeichen, mit Leistung und Ort, wird bei Google vollständig angezeigt." }
      : { key: "titel", titel: "Seitentitel", status: "gut", befund: `„${titel.slice(0, 80)}“ (${titel.length} Zeichen).` });
  p.push(!beschreibung
    ? { key: "beschreibung", titel: "Seitenbeschreibung", status: "schlecht", befund: "Es gibt keine Meta-Beschreibung.", tipp: "Google zeigt sonst einen beliebigen Textausschnitt. Zwei Sätze, die zum Klick einladen, reichen." }
    : beschreibung.length < 50 || beschreibung.length > 165
      ? { key: "beschreibung", titel: "Seitenbeschreibung", status: "mittel", befund: `Vorhanden, ${beschreibung.length} Zeichen.`, tipp: "Zwischen 50 und 160 Zeichen wird sie vollständig angezeigt." }
      : { key: "beschreibung", titel: "Seitenbeschreibung", status: "gut", befund: `Vorhanden, ${beschreibung.length} Zeichen.` });
  p.push(h1 === 1
    ? { key: "h1", titel: "Hauptüberschrift (H1)", status: "gut", befund: "Genau eine Hauptüberschrift." }
    : h1 === 0
      ? { key: "h1", titel: "Hauptüberschrift (H1)", status: "schlecht", befund: "Keine H1-Überschrift gefunden.", tipp: "Die H1 sagt Besuchern und Google, worum es auf der Seite geht." }
      : { key: "h1", titel: "Hauptüberschrift (H1)", status: "mittel", befund: `${h1} H1-Überschriften gefunden.`, tipp: "Eine H1 je Seite, weitere Abschnitte als H2 und H3." });
  p.push(viewport
    ? { key: "mobil", titel: "Mobile Darstellung", status: "gut", befund: "Viewport-Angabe vorhanden, die Seite kann sich an Handys anpassen." }
    : { key: "mobil", titel: "Mobile Darstellung", status: "schlecht", befund: "Keine Viewport-Angabe gefunden.", tipp: "Ohne sie wird die Seite auf dem Handy winzig dargestellt. Google bewertet die mobile Version." });
  p.push(lang
    ? { key: "sprache", titel: "Sprachangabe", status: "gut", befund: `Sprache ist als „${lang}“ angegeben.` }
    : { key: "sprache", titel: "Sprachangabe", status: "mittel", befund: "Keine Sprachangabe im HTML.", tipp: "Hilft Vorlesefunktionen und Suchmaschinen, die Seite richtig einzuordnen." });
  p.push(bilder.length === 0
    ? { key: "alt", titel: "Bild-Alternativtexte", status: "mittel", befund: "Keine Bilder im HTML gefunden.", tipp: "Oft laden Baukästen Bilder erst per Skript nach; dann kann die Prüfung sie nicht sehen." }
    : ohneAlt === 0
      ? { key: "alt", titel: "Bild-Alternativtexte", status: "gut", befund: `Alle ${bilder.length} Bilder haben einen Alternativtext.` }
      : { key: "alt", titel: "Bild-Alternativtexte", status: ohneAlt > bilder.length / 2 ? "schlecht" : "mittel", befund: `${ohneAlt} von ${bilder.length} Bildern ohne Alternativtext.`, tipp: "Alternativtexte beschreiben Bilder für Google und Vorlesefunktionen." });
  p.push(impressum
    ? { key: "impressum", titel: "Impressum verlinkt", status: "gut", befund: "Ein Impressum ist verlinkt." }
    : { key: "impressum", titel: "Impressum verlinkt", status: "schlecht", befund: "Kein Impressum-Link gefunden.", tipp: "In Deutschland Pflicht und abmahnfähig. Der Link gehört auf jede Seite." });
  p.push(kontakt
    ? { key: "kontakt", titel: "Kontaktmöglichkeit", status: "gut", befund: "Telefon, E-Mail oder Kontaktseite sind verlinkt." }
    : { key: "kontakt", titel: "Kontaktmöglichkeit", status: "mittel", befund: "Kein Telefon-, E-Mail- oder Kontaktlink gefunden.", tipp: "Eine anklickbare Telefonnummer und ein sichtbarer Kontaktweg bringen Anfragen." });
  p.push(ogBild
    ? { key: "vorschau", titel: "Vorschaubild beim Teilen", status: "gut", befund: "Ein Vorschaubild für WhatsApp, Facebook und LinkedIn ist hinterlegt." }
    : { key: "vorschau", titel: "Vorschaubild beim Teilen", status: "mittel", befund: "Kein Vorschaubild hinterlegt.", tipp: "Beim Teilen des Links erscheint sonst nur Text. Ein Bild mit Logo und Leistung wirkt deutlich besser." });
  if (noindex) p.push({ key: "noindex", titel: "Sichtbarkeit für Google", status: "schlecht", befund: "Die Seite ist für Suchmaschinen gesperrt (noindex).", tipp: "Wenn das nicht Absicht ist, taucht die Seite bei Google nicht auf." });
  p.push({ key: "groesse", titel: "Größe des HTML", status: kb < 300 ? "gut" : kb < 900 ? "mittel" : "schlecht", befund: `${kb} KB HTML${d.bytes >= MAX_BYTES ? " (Prüfung nach 1,5 MB abgebrochen)" : ""}.`, tipp: kb >= 300 ? "Sehr große Seiten laden auf dem Handy langsam. Oft stecken Skripte und eingebettete Inhalte dahinter." : undefined });
  return p;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "unbekannt";
  if (limitiert(ip)) return NextResponse.json({ error: "Zu viele Prüfungen in kurzer Zeit. Bitte versuche es in ein paar Minuten noch einmal." }, { status: 429 });

  let eingabe = "";
  try {
    const body: unknown = await request.json();
    if (body && typeof body === "object" && typeof (body as { url?: unknown }).url === "string") eingabe = (body as { url: string }).url.trim().slice(0, 500);
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }
  if (!eingabe) return NextResponse.json({ error: "Bitte gib eine Website-Adresse ein." }, { status: 400 });
  if (!/^https?:\/\//i.test(eingabe)) eingabe = `https://${eingabe}`;

  let url: URL;
  try {
    url = new URL(eingabe);
  } catch {
    return NextResponse.json({ error: "Das sieht nicht nach einer gültigen Adresse aus." }, { status: 400 });
  }
  const fehler = await urlErlaubt(url);
  if (fehler) return NextResponse.json({ error: fehler }, { status: 400 });

  try {
    const daten = await laden(url);
    if (daten.status >= 400) return NextResponse.json({ error: `Die Seite antwortet mit Fehler ${daten.status}.` }, { status: 422 });
    const punkte = pruefen(daten);
    const gut = punkte.filter((x) => x.status === "gut").length;
    return NextResponse.json({ url: daten.url.toString(), punkte, gut, gesamt: punkte.length, geprueft: new Date().toISOString() });
  } catch (e) {
    const text = e instanceof Error ? e.message : "";
    const bekannt = ["Nur http", "Adressen mit", "Bitte gib", "Diese Adresse", "Die Domain", "Zu viele", "Unter dieser"].some((s) => text.startsWith(s));
    if (bekannt) return NextResponse.json({ error: text }, { status: 400 });
    return NextResponse.json({ error: "Die Seite konnte nicht geladen werden. Ist die Adresse erreichbar? Manche Seiten blockieren automatische Prüfungen." }, { status: 422 });
  }
}
