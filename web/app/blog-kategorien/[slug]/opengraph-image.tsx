import { ogBild, ogContentType, ogGroesse, type OgMotiv } from "@/lib/og-bild";

export const alt = "Pixel56 Blog: Thema";
export const size = ogGroesse;
export const contentType = ogContentType;
import { artikelInKategorie, blogKategorien, getBlogKategorie } from "@/lib/blog";

export function generateStaticParams() {
  return blogKategorien.map((k) => ({ slug: k.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kategorie = getBlogKategorie(slug);
  if (!kategorie) return ogBild({ kicker: "Blog", titel: "Marketing-Wissen für KMU und Handwerk", motiv: "wachstum" });
  const anzahl = artikelInKategorie(slug).length;
  return ogBild({
    kicker: "Blog · Thema",
    titel: `${kategorie.label}: ${anzahl === 1 ? "ein Artikel" : `${anzahl} Artikel`} aus der Praxis`,
    text: kategorie.beschreibung,
    motiv: kategorie.slug as OgMotiv,
  });
}
