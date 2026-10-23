import type { Fragebogen } from "@/lib/fragebogen";
import { site } from "@/lib/site";

/**
 * Bestätigungsmail an den Besucher, direkt nach dem Klick-Fragebogen.
 * Ziel: Der Besucher wählt selbst einen 15-Minuten-Termin, sonst kündigt die
 * Mail den Anruf an. Preise und Angebot bleiben dem Gespräch vorbehalten.
 */

export type Antwort = { frage: string; antwort: string };

export function vornameAus(name: string): string {
  return name.trim().split(/\s+/)[0] ?? "";
}

/** Thema der Anfrage: beim allgemeinen Bogen das gewählte Thema, sonst die Leistung. */
export function themaAus(bogen: Fragebogen, antworten: Antwort[]): string {
  if (bogen.key !== "allgemein") return bogen.leistung;
  return antworten.find((a) => a.frage === bogen.fragen[0].frage)?.antwort || "dein Anliegen";
}

/** Bis zu drei Reaktionssätze zu den gewählten Antworten, in Fragenreihenfolge. */
export function reaktionenAus(bogen: Fragebogen, antworten: Antwort[]): string[] {
  const saetze: string[] = [];
  for (const frage of bogen.fragen) {
    const gewaehlt = antworten.find((a) => a.frage === frage.frage)?.antwort;
    const reaktion = frage.optionen.find((o) => o.text === gewaehlt)?.reaktion;
    if (reaktion) saetze.push(reaktion.trim());
    if (saetze.length === 3) break;
  }
  return saetze;
}

export function baueKundenMail(input: { bogen: Fragebogen; name: string; telefon: string; antworten: Antwort[] }): { subject: string; text: string } {
  const { bogen, name, telefon, antworten } = input;
  const vorname = vornameAus(name);
  const thema = themaAus(bogen, antworten);
  const reaktionen = reaktionenAus(bogen, antworten);
  const whatsappNummer = "0178 5282464";
  const zeilen = antworten.map((a) => `${a.frage}\n→ ${a.antwort || "keine Angabe"}`).join("\n\n");

  const einordnung = reaktionen.length
    ? ["Was mir an deinen Antworten auffällt:", ...reaktionen.map((r) => `– ${r}`)].join("\n")
    : "Deine Antworten geben mir ein gutes erstes Bild.";

  const rueckruf = telefon
    ? `Du magst lieber angerufen werden? Dann antworte kurz mit einer Uhrzeit, sonst rufe ich dich innerhalb eines Werktags unter ${telefon} an.`
    : "Du magst lieber angerufen werden? Dann antworte kurz mit Telefonnummer und Uhrzeit, sonst melde ich mich innerhalb eines Werktags per E-Mail.";

  const text = [
    `Hallo${vorname ? ` ${vorname}` : ""},`,
    "",
    `danke für deine Anfrage zum Thema ${thema}. Deine Antworten sind bei mir angekommen.`,
    "",
    einordnung,
    "",
    "So geht es weiter:",
    "Such dir 15 Minuten aus, dann besprechen wir, was bei dir sinnvoll ist und was es kostet.",
    site.calendly,
    "",
    rueckruf,
    "",
    "Deine Antworten:",
    zeilen,
    "",
    "Bis bald",
    "Atilla Ciftcioglu",
    `Pixel56 · WhatsApp ${whatsappNummer} · ${site.email} · pixel56.de`,
  ].join("\n");

  return { subject: `Deine Anfrage bei Pixel56: ${thema}`, text };
}
