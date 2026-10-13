import { ogBild, ogContentType, ogGroesse, motivFuerLeistung } from "@/lib/og-bild";

export const alt = "Pixel56 Standort";
export const size = ogGroesse;
export const contentType = ogContentType;
import { getLegacyLocation, legacyLocations } from "@/lib/legacy-locations";
import { getStandortLeistung } from "@/lib/standort-inhalte";
import { stadtAnzeige } from "@/lib/standorte";

export function generateStaticParams() {
  return legacyLocations.map((location) => ({ slug: location.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLegacyLocation(slug);
  if (!location) return ogBild({ kicker: "Standorte", titel: "Pixel56 rund um Koblenz", motiv: "seo" });
  const stadt = stadtAnzeige(location);
  const leistung = getStandortLeistung(location.leistung);
  return ogBild({
    kicker: `${leistung.kurz} · ${stadt}`,
    titel: `${leistung.kurz} in ${stadt}: ${leistung.heroLine.replace(/\.$/, "")}`,
    text: leistung.heroText(stadt),
    motiv: motivFuerLeistung(location.leistung),
    fuss: `Für Betriebe in ${stadt} und Umgebung`,
  });
}
