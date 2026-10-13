import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Digitale Produkte: Vorlagen und Checklisten | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Digitale Produkte",
    titel: "Vorlagen und Checklisten",
    text: "Digitale Vorlagen, Checklisten und Freebies von Pixel56 für KMU, Selbstständige und Dienstleister. Kostenlos als PDF, sofort einsetzbar.",
    motiv: "marketing-tools",
  });
}
