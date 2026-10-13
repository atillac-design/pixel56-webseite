import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Stellenangebot: Vertriebsprofi/in bei Pixel56 in Koblenz | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Stellenangebot",
    titel: "Vertriebsprofi/in bei Pixel56 in Koblenz",
    text: "Vertrieb bei Pixel56 in der Region Koblenz: Erstgespräche mit Handwerkern und KMU, Leistungen verständlich erklären, beraten. Umfang nach Absprache.",
    motiv: "wachstum",
  });
}
