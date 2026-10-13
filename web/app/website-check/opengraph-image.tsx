import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Website-Check: Startseite in Sekunden prüfen | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Kostenlos · Website-Check",
    titel: "Wie gut ist deine Website?",
    text: "Adresse eingeben und zwölf Grundlagen der Startseite prüfen lassen: HTTPS, Antwortzeit, Titel, Mobilansicht, Impressum und mehr.",
    motiv: "webseite",
    fuss: "Ohne Anmeldung · pixel56.de/website-check",
  });
}
