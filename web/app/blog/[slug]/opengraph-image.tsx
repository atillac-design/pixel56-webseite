import { ogBild, ogContentType, ogGroesse, type OgMotiv } from "@/lib/og-bild";

export const alt = "Pixel56 Blog";
export const size = ogGroesse;
export const contentType = ogContentType;
import { artikel, getArtikel, kategorieVonArtikel } from "@/lib/blog";

export function generateStaticParams() {
  return artikel.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArtikel(slug);
  if (!a) return ogBild({ kicker: "Blog", titel: "Marketing-Wissen für KMU und Handwerk", motiv: "wachstum" });
  const kategorie = kategorieVonArtikel(a);
  return ogBild({
    kicker: `Blog · ${kategorie.label}`,
    titel: a.titel,
    text: a.teaser,
    motiv: kategorie.slug as OgMotiv,
    fuss: `${a.lesezeit} Min. Lesezeit · pixel56.de/blog`,
  });
}
