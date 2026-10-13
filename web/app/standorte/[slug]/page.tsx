import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPage from "@/components/LocationPage";
import { getLegacyLocation, legacyLocations } from "@/lib/legacy-locations";
import { getStandortLeistung } from "@/lib/standort-inhalte";
import { isIndexableLocation, stadtAnzeige } from "@/lib/standorte";
import { locationPath } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

/** Alle 291 alten Standort-URLs bleiben 1:1 erreichbar. */
export function generateStaticParams() {
  return legacyLocations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLegacyLocation(slug);
  if (!location) return {};
  const canonical = locationPath(location.slug);

  if (!isIndexableLocation(location)) {
    // Außerhalb des Einzugsgebiets: erreichbar, aber nicht indexierbar.
    return {
      title: { absolute: location.titel },
      description: location.beschreibung,
      alternates: { canonical },
      robots: { index: false, follow: true },
    };
  }

  const stadt = stadtAnzeige(location);
  const leistung = getStandortLeistung(location.leistung);
  return {
    title: `${leistung.kurz} ${stadt}: ${leistung.heroLine.replace(/\.$/, "")}`,
    description: leistung.heroText(stadt),
    alternates: { canonical },
    openGraph: {
      title: `${leistung.kurz} in ${stadt} | Pixel56`,
      description: leistung.heroText(stadt),
      url: canonical,
    },
  };
}

export default async function StandortPage({ params }: Props) {
  const { slug } = await params;
  const location = getLegacyLocation(slug);
  if (!location) notFound();
  return <LocationPage location={location} />;
}
