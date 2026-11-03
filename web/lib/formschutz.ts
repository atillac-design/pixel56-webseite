/**
 * Gemeinsamer Schutz der Formular-Schnittstellen (/api/lead, /api/anfrage)
 * gegen einfache Bots, ohne Captcha und ohne Hürde für echte Besucher:
 *
 * 1. Herkunft: Browser schicken bei fetch-POSTs immer einen Origin-Header.
 *    Fehlt er oder zeigt er auf eine fremde Seite, wird abgelehnt.
 * 2. Mindestzeit: Das Formular schickt mit, wann die Seite geladen wurde.
 *    Absenden unter zwei Sekunden danach ist kein Mensch (die Uhr startet,
 *    sobald das Formular im Browser aktiv ist).
 * 3. Honigfalle: Ein unsichtbares Feld „website“. Ist es gefüllt, antworten
 *    wir freundlich mit ok, tun aber nichts.
 * 4. Drossel je Adresse: höchstens fünf Absendungen in zehn Minuten pro
 *    Besucher-IP (gilt je laufender Funktionsinstanz, also nur grob).
 */

const erlaubteHosts = new Set([
  "www.pixel56.de",
  "pixel56.de",
  "pixel56-neue-seite.netlify.app",
  "localhost:3000",
  "localhost:3077",
  "127.0.0.1:3000",
]);

export function herkunftErlaubt(request: Request): boolean {
  const quelle = request.headers.get("origin") || request.headers.get("referer");
  if (!quelle) return false;
  try {
    const host = new URL(quelle).host;
    return erlaubteHosts.has(host) || host.endsWith("--pixel56-neue-seite.netlify.app");
  } catch {
    return false;
  }
}

const MINDESTZEIT_MS = 2000;
const HOECHSTALTER_MS = 24 * 60 * 60 * 1000;

/** `t` ist der Zeitstempel (ms), den das Formular beim Laden gesetzt hat. */
export function zeitPlausibel(t: unknown): boolean {
  const start = typeof t === "number" ? t : Number(t);
  if (!Number.isFinite(start)) return false;
  const alter = Date.now() - start;
  return alter >= MINDESTZEIT_MS && alter <= HOECHSTALTER_MS;
}

export function honigfalleGefuellt(wert: unknown): boolean {
  return typeof wert === "string" && wert.trim().length > 0;
}

const FENSTER_MS = 10 * 60 * 1000;
const MAX_JE_FENSTER = 5;
const zaehler = new Map<string, number[]>();

export function besucherIp(request: Request): string {
  return (
    request.headers.get("x-nf-client-connection-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unbekannt"
  );
}

export function drosselErreicht(ip: string): boolean {
  const jetzt = Date.now();
  const liste = (zaehler.get(ip) ?? []).filter((z) => jetzt - z < FENSTER_MS);
  if (liste.length >= MAX_JE_FENSTER) {
    zaehler.set(ip, liste);
    return true;
  }
  liste.push(jetzt);
  zaehler.set(ip, liste);
  if (zaehler.size > 5000) zaehler.clear();
  return false;
}

/** Antwort, wenn eine der Prüfungen fehlschlägt; null, wenn alles passt. */
export function pruefeFormular(request: Request, body: Record<string, unknown>): { status: number; error: string } | "stumm" | null {
  if (honigfalleGefuellt(body.website)) return "stumm";
  if (!herkunftErlaubt(request)) return { status: 403, error: "Bitte das Formular direkt auf pixel56.de verwenden." };
  if (!zeitPlausibel(body.t)) return { status: 400, error: "Bitte lade die Seite neu und versuche es noch einmal." };
  if (drosselErreicht(besucherIp(request))) return { status: 429, error: "Zu viele Anfragen in kurzer Zeit. Bitte versuche es in ein paar Minuten erneut." };
  return null;
}
