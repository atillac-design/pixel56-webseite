import { ogBild, ogContentType, ogGroesse } from "@/lib/og-bild";

export const alt = "Blog: Marketing-Wissen für KMU und Handwerk | Pixel56";
export const size = ogGroesse;
export const contentType = ogContentType;

export default function Image() {
  return ogBild({
    kicker: "Blog",
    titel: "Marketing-Wissen für KMU und Handwerk",
    text: "Praxisnahe Tipps zu Webdesign, SEO, Google und Meta Ads und Social Media für KMU, Handwerker und Selbstständige. Der Pixel56-Blog.",
    motiv: "wachstum",
  });
}
