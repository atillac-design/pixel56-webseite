import legacyLocationData from "@/data/legacy-locations.json";

export type LegacyLocationBlock = { typ: "h2" | "p"; text: string };

export type LegacyLocation = {
  slug: string;
  stadt: string;
  leistung: string;
  titel: string;
  beschreibung: string;
  heroLead: string;
  body: LegacyLocationBlock[];
};

export const legacyLocations = legacyLocationData as LegacyLocation[];

export function getLegacyLocation(slug: string): LegacyLocation | undefined {
  return legacyLocations.find((location) => location.slug === slug);
}
