import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Karriere: Jobs bei Pixel56 in Koblenz und remote | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Karriere",
    titel: "Jobs bei Pixel56, remote und in Koblenz",
    text: "Jobs bei Pixel56 in Webdesign, Online-Marketing und Content für KMU-Projekte, remote mit Treffen in der Region Koblenz. Unkompliziert bewerben.",
    motiv: "soziale-medien",
  });
}
