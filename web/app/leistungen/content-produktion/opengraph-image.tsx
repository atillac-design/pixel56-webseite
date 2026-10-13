import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Leistung bei Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;
import { services } from "@/lib/site";

const leistung = services.find((s) => s.slug === "content-produktion")!;

export default function Image() {
  return ogBild({
    kicker: `Leistung ${leistung.nr}`,
    titel: leistung.title,
    text: leistung.short,
    motiv: "soziale-medien",
  });
}
