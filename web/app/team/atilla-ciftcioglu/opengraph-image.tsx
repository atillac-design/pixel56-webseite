import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Team: Atilla Ciftcioglu: Gründer von Pixel56 | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Team",
    titel: "Atilla Ciftcioglu: Gründer von Pixel56",
    text: "Atilla Ciftcioglu, Gründer von Pixel56 in Koblenz, verantwortet Strategie, Webdesign, Kampagnen und KI-Prozesse selbst.",
    motiv: "wachstum",
  });
}
