import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Über uns: Digitalagentur in Koblenz | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Über uns",
    titel: "Digitalagentur in Koblenz",
    text: "Gründergeführte Digitalagentur in Koblenz: Websites, Meta Ads, Content und KI aus einer Hand, mit einem festen Ansprechpartner.",
    motiv: "wachstum",
  });
}
