import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Leistungen: Webdesign, Ads, Content & KI | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Leistungen",
    titel: "Webdesign, Ads, Content & KI",
    text: "Alle Leistungen von Pixel56: Webdesign, Meta Ads, Social Content, KI-Prozesse, Landingpages, Mitarbeitergewinnung, Google Ads und SEO. Aus Koblenz.",
    motiv: "webdesign",
  });
}
