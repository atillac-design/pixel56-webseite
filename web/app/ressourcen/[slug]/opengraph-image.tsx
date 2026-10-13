import { ogBild, ogContentType, ogGroesse, type OgMotiv } from "@/lib/og-bild";

export const alt = "Pixel56 Ressource";
export const size = ogGroesse;
export const contentType = ogContentType;
import { getRessource, ressourcen } from "@/lib/ressourcen";

export function generateStaticParams() {
  return ressourcen.map((r) => ({ slug: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRessource(slug);
  if (!r) return ogBild({ kicker: "Ressourcen", titel: "Checklisten und Vorlagen", motiv: "marketing-tools" });
  const motiv: OgMotiv = slug.includes("seo") ? "seo" : slug.includes("ki") ? "kunstliche-intelligenz" : "marketing-tools";
  return ogBild({
    kicker: r.eyebrow.replace(/FREEBIE/i, "Kostenlos"),
    titel: `${r.titleStart}${r.titleEm}`,
    text: r.heroSub,
    motiv,
    fuss: "Kostenlos als PDF · pixel56.de",
  });
}
