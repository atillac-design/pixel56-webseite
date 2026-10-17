import { NextResponse } from "next/server";
import { frageboegen, type FragebogenKey } from "@/lib/fragebogen";

/**
 * Nimmt den Klick-Fragebogen einer Leistung entgegen: Antworten + Kontakt.
 * Zustellung per Resend an Pixel56 (Pflicht), zusätzlich Kontakt in
 * MailerLite mit Feldern (optional, Fehler dort blockieren nichts).
 */

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    if (Number(request.headers.get("content-length") ?? 0) > 12000) {
      return NextResponse.json({ error: "Die Anfrage ist zu lang." }, { status: 413 });
    }
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (text(body.website, 100)) return NextResponse.json({ ok: true });

  const key = text(body.leistung, 40) as FragebogenKey;
  const bogen = frageboegen[key];
  const name = text(body.name, 120);
  const email = text(body.email, 254);
  const telefon = text(body.telefon, 40);
  const firma = text(body.firma, 120);
  const einwilligung = body.einwilligung === true;
  const roh = Array.isArray(body.antworten) ? body.antworten.slice(0, 10) : [];
  const antworten = roh
    .map((a) => (a && typeof a === "object" ? { frage: text((a as Record<string, unknown>).frage, 200), antwort: text((a as Record<string, unknown>).antwort, 200) } : null))
    .filter((a): a is { frage: string; antwort: string } => Boolean(a && a.frage));

  if (!bogen || name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || !einwilligung) {
    return NextResponse.json({ error: "Bitte Name, E-Mail und die Einwilligung ausfüllen." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.PIXEL56_CONTACT_FROM;
  const to = process.env.PIXEL56_CONTACT_TO;
  if (!apiKey || !from || !to) {
    return NextResponse.json({ error: "Das Formular ist derzeit nicht verfügbar. Bitte nutze E-Mail, WhatsApp oder Telefon." }, { status: 503 });
  }

  const zeilen = antworten.map((a) => `${a.frage}\n→ ${a.antwort || "keine Angabe"}`).join("\n\n");
  // Interne Markierungen (z. B. kleines Budget) nur für Pixel56, nie für den Besucher.
  const markierungen = antworten
    .map((a) => bogen.fragen.find((f) => f.frage === a.frage)?.optionen.find((o) => o.text === a.antwort)?.intern)
    .filter((m): m is string => Boolean(m));
  const betreffZusatz = markierungen.length ? ` · ${[...new Set(markierungen)].join(", ")}` : "";
  // Beim allgemeinen Fragebogen (Kontaktseite) steht das gewählte Thema im Betreff.
  const thema = bogen.key === "allgemein" ? antworten.find((a) => a.frage === bogen.fragen[0].frage)?.antwort : "";
  const betreffLeistung = thema ? `${bogen.leistung} · ${thema}` : bogen.leistung;
  const mail = [
    `Neue Anfrage über den Fragebogen „${bogen.leistung}“`,
    "",
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${telefon || "nicht angegeben"}`,
    `Unternehmen: ${firma || "nicht angegeben"}`,
    "",
    "Antworten:",
    zeilen,
    markierungen.length ? `\nHinweis: ${[...new Set(markierungen)].join(", ")}` : "",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Pixel56 Anfrage ${betreffLeistung}: ${name}${betreffZusatz}`, text: mail }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error(`Resend ${response.status}`);
  } catch (error) {
    console.error("Anfrage-Zustellung fehlgeschlagen:", error);
    return NextResponse.json({ error: "Senden fehlgeschlagen. Bitte schreib uns direkt per E-Mail oder WhatsApp." }, { status: 502 });
  }

  // MailerLite: Kontakt mit Feldern anlegen, Fehler nur protokollieren.
  const mlKey = process.env.MAILERLITE_API_KEY;
  if (mlKey) {
    const felder: Record<string, string> = { name, quelle: bogen.quelle, leistung: bogen.leistung };
    if (telefon) felder.phone = telefon;
    if (firma) felder.company = firma;
    for (const a of antworten) {
      const id = bogen.fragen.find((f) => f.frage === a.frage)?.id;
      if (id) felder[`anfrage_${id}`] = a.antwort;
    }
    const groupId = process.env.MAILERLITE_GROUP_KONTAKTANFRAGE ?? process.env.MAILERLITE_GROUP_ID;
    const payload: Record<string, unknown> = { email, fields: felder };
    if (groupId) payload.groups = [groupId];
    try {
      const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${mlKey}` },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(6000),
      });
      if (!res.ok) console.error("MailerLite-Anlage fehlgeschlagen:", res.status);
    } catch (error) {
      console.error("MailerLite nicht erreichbar:", error);
    }
  }

  return NextResponse.json({ ok: true });
}
