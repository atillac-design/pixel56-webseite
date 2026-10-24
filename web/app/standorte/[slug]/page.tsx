import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPage from "@/components/LocationPage";
import StandortSeite from "@/components/StandortSeite";
import { getLegacyLocation, legacyLocations } from "@/lib/legacy-locations";
import { getStandortLeistung } from "@/lib/standort-inhalte";
import { getStandortText } from "@/lib/standort-texte";
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
  const text = getStandortText(location.slug);
  if (text) {
    // Individuell geschriebene Seite: Titel und Beschreibung kommen aus dem Text.
    return {
      title: text.title,
      description: text.meta,
      alternates: { canonical },
      openGraph: { title: `${leistung.kurz} in ${stadt} | Pixel56`, description: text.heroText, url: canonical },
    };
  }
  // Titel höchstens 50 Zeichen vor dem Zusatz " | Pixel56".
  const titleCandidates = [
    `${leistung.kurz} ${stadt}: ${leistung.heroLine.replace(/\.$/, "")}`,
    `${leistung.kurz} ${stadt}: ${leistung.titleShort}`,
    `${leistung.kurz} ${stadt}`,
  ];
  const title = titleCandidates.find((candidate) => candidate.length <= 50) ?? titleCandidates[2];
  return {
    title,
    description: leistung.metaText(stadt),
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
  const text = getStandortText(location.slug);
  if (text) return <StandortSeite location={location} text={text} />;
  return <LocationPage location={location} />;
}
