import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Kundenprojekte: Websites, Branding & Kampagnen | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Kundenprojekte",
    titel: "Websites, Branding & Kampagnen",
    text: "Echte Kundenprojekte von Pixel56 aus Handwerk, Transport, Bildung und Non-Profit: Ausgangslage, Umsetzung und unser Beitrag, ohne erfundene Zahlen.",
    motiv: "webdesign",
  });
}
