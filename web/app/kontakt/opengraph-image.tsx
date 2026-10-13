import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Kontakt: Kostenloses Erstgespräch in Koblenz | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Kontakt",
    titel: "Kostenloses Erstgespräch in Koblenz",
    text: "Erreich Pixel56 per WhatsApp, Telefon oder E-Mail oder buch dein kostenloses Erstgespräch. Antwort innerhalb eines Werktags, ehrliche Einschätzung.",
    motiv: "marketing-tools",
  });
}
