import type { Fragebogen } from "@/lib/fragebogen";
import { site } from "@/lib/site";

/**
 * Bestätigungsmail an den Besucher, direkt nach dem Klick-Fragebogen.
 * Schlicht gehalten: Anfrage angekommen, Anruf in den nächsten Werktagen,
 * WhatsApp für Eilige, Antworten zur Erinnerung. Preise und Angebot bleiben
 * dem Gespräch vorbehalten.
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

export function baueKundenMail(input: { bogen: Fragebogen; name: string; telefon: string; antworten: Antwort[] }): { subject: string; text: string } {
  const { bogen, name, telefon, antworten } = input;
  const vorname = vornameAus(name);
  const thema = themaAus(bogen, antworten);
  const whatsappNummer = "0178 5282464";
  const zeilen = antworten.map((a) => `${a.frage} – ${a.antwort || "keine Angabe"}`).join("\n");

  const text = [
    `Hallo${vorname ? ` ${vorname}` : ""},`,
    "",
    `danke für deine Anfrage zum Thema ${thema}. Sie ist bei uns angekommen.`,
    "",
    `Wir melden uns in den nächsten Werktagen telefonisch bei dir unter ${telefon}.`,
    "",
    `Soll es schneller gehen? Schreib uns kurz per WhatsApp an ${whatsappNummer}, dann finden wir direkt eine Zeit für das Telefonat.`,
    "",
    "Zur Erinnerung, deine Angaben:",
    zeilen,
    "",
    "Bis bald",
    "Atilla Ciftcioglu",
    `Pixel56 · ${site.email} · pixel56.de`,
  ].join("\n");

  return { subject: `Deine Anfrage bei Pixel56 ist angekommen`, text };
}
