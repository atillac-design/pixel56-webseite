import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Standorte: Pixel56 rund um Koblenz | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Standorte",
    titel: "Pixel56 rund um Koblenz",
    text: "Pixel56 aus Bendorf bei Koblenz: vor Ort in Koblenz, Neuwied, Andernach, Montabaur, Mayen und Limburg, per Video-Call in ganz Deutschland.",
    motiv: "seo",
  });
}
