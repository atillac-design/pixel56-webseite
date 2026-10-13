/**
 * Datenschicht für die Standortseiten (/locations/<slug>).
 *
 * Alle 291 alten Standort-URLs bleiben 1:1 erreichbar (siehe
 * data/legacy-locations.json). Indexiert werden aber nur die Städte im echten
 * Einzugsgebiet von Bendorf bei Koblenz: Für sie liegen lokale Fakten vor, und
 * nur dort kann Pixel56 Vor-Ort-Termine glaubwürdig anbieten. Alle anderen
 * Städte (Hamburg, Wien, Zürich …) werden mit `noindex, follow` ausgeliefert
 * und stehen nicht in der Sitemap. Das vermeidet Doorway-/Thin-Content-Signale.
 *
 * Die Liste ist bewusst klein und per GSC-Daten erweiterbar: Zeigt die Search
 * Console für eine weitere Stadt echte Impressionen und Klicks, kommt sie mit
 * eigenen lokalen Angaben hierher und wird damit automatisch indexierbar.
 */

import { legacyLocations, type LegacyLocation } from "@/lib/legacy-locations";

export type RegionStadt = {
  /** Schreibweise exakt wie im Feld `stadt` von data/legacy-locations.json. */
  stadt: string;
  /** Anzeigename, falls er von der Datenschreibweise abweicht. */
  anzeige?: string;
  landkreis: string;
  /** Straßenentfernung ab Hüttenstraße 100, Bendorf (gerundet). */
  entfernungKm: number;
  fahrzeitMin: number;
  /** Zwei Sätze lokaler Kontext, ohne erfundene Zahlen. */
  kontext: string;
};

export const regionStaedte: RegionStadt[] = [
  { stadt: "Bendorf", landkreis: "Landkreis Mayen-Koblenz", entfernungKm: 0, fahrzeitMin: 0, kontext: "Bendorf ist unser Sitz. Die Hüttenstraße 100 liegt wenige Minuten vom Rhein entfernt, zwischen Vallendar und Neuwied. Betriebe aus Bendorf, Sayn und Mülhofen erreichen uns zu Fuß oder mit dem Auto in wenigen Minuten." },
  { stadt: "Koblenz", landkreis: "Kreisfreie Stadt Koblenz", entfernungKm: 10, fahrzeitMin: 15, kontext: "Koblenz ist das Oberzentrum der Region, am Zusammenfluss von Rhein und Mosel. Hier konkurrieren Dienstleister, Handwerksbetriebe, Praxen und Kanzleien um dieselben Suchanfragen, und ein klarer Auftritt entscheidet, wer angefragt wird." },
  { stadt: "Vallendar", landkreis: "Landkreis Mayen-Koblenz", entfernungKm: 4, fahrzeitMin: 8, kontext: "Vallendar liegt direkt neben Bendorf am rechten Rheinufer, bekannt durch die WHU. Viele kleine Betriebe und Selbstständige arbeiten hier eng mit Koblenz verzahnt und brauchen einen Auftritt, der in der ganzen Region gefunden wird." },
  { stadt: "Neuwied", landkreis: "Landkreis Neuwied", entfernungKm: 6, fahrzeitMin: 10, kontext: "Neuwied ist Kreisstadt und mit seinen Stadtteilen am Rhein ein eigener Markt mit Handel, Handwerk und Industrie. Wer hier gesucht wird, konkurriert mit Anbietern aus Koblenz und Andernach um dieselben Kunden." },
  { stadt: "Andernach", landkreis: "Landkreis Mayen-Koblenz", entfernungKm: 15, fahrzeitMin: 20, kontext: "Andernach am linken Rheinufer ist Gewerbe- und Industriestandort mit vielen Handwerks- und Baubetrieben. Für Recruiting-Kampagnen in der Region ist die Stadt ein wichtiger Einzugsbereich." },
  { stadt: "Höhr-Grenzhausen", landkreis: "Westerwaldkreis", entfernungKm: 9, fahrzeitMin: 15, kontext: "Höhr-Grenzhausen ist das Zentrum des Kannenbäckerlands, geprägt von Keramik, Handwerk und Mittelstand. Viele Betriebe arbeiten überregional, werden aber lokal gesucht." },
  { stadt: "Ransbach-Baumbach", landkreis: "Westerwaldkreis", entfernungKm: 14, fahrzeitMin: 18, kontext: "Ransbach-Baumbach liegt verkehrsgünstig an A3 und A48 im Kannenbäckerland. Produzierende Betriebe, Logistik und Handwerk sind hier stark vertreten." },
  { stadt: "Montabaur", landkreis: "Westerwaldkreis", entfernungKm: 24, fahrzeitMin: 25, kontext: "Montabaur ist Kreisstadt des Westerwaldkreises, mit ICE-Halt und Outlet ein Anziehungspunkt für die ganze Region. Dienstleister und Handwerker aus dem Westerwald werden hier und in Koblenz gesucht." },
  { stadt: "Lahnstein", landkreis: "Rhein-Lahn-Kreis", entfernungKm: 15, fahrzeitMin: 22, kontext: "Lahnstein liegt an der Mündung der Lahn in den Rhein, südlich von Koblenz. Betriebe aus Lahnstein bedienen oft Kunden bis Koblenz und ins Rhein-Lahn-Tal." },
  { stadt: "Mülheim-Kärlich", landkreis: "Landkreis Mayen-Koblenz", entfernungKm: 10, fahrzeitMin: 15, kontext: "Mülheim-Kärlich hat eines der größten Gewerbegebiete der Region. Handel, Handwerk und Dienstleister sitzen hier Tür an Tür und konkurrieren um Kunden aus dem gesamten Raum Koblenz." },
  { stadt: "Weissenthurm", anzeige: "Weißenthurm", landkreis: "Landkreis Mayen-Koblenz", entfernungKm: 12, fahrzeitMin: 18, kontext: "Weißenthurm liegt am linken Rheinufer gegenüber von Neuwied, mit Gewerbe entlang der B9. Viele Betriebe hier arbeiten für Kunden auf beiden Rheinseiten." },
  { stadt: "Mayen", landkreis: "Landkreis Mayen-Koblenz", entfernungKm: 32, fahrzeitMin: 30, kontext: "Mayen am Rand der Eifel ist Mittelzentrum für ein großes Umland. Handwerk, Bau und regionale Dienstleister sind hier stark vertreten und werden meist lokal gesucht." },
  { stadt: "Limburg", landkreis: "Landkreis Limburg-Weilburg (Hessen)", entfernungKm: 50, fahrzeitMin: 40, kontext: "Limburg an der Lahn ist Kreisstadt mit ICE-Anschluss und ein eigener Wirtschaftsraum zwischen Westerwald und Taunus. Die Zusammenarbeit läuft hier meist per Video-Call, Vor-Ort-Termine sind nach Absprache möglich." },
];

const regionByStadt = new Map(regionStaedte.map((r) => [r.stadt, r]));

export function getRegionStadt(stadt: string): RegionStadt | undefined {
  return regionByStadt.get(stadt);
}

export function stadtAnzeige(location: Pick<LegacyLocation, "stadt">): string {
  return getRegionStadt(location.stadt)?.anzeige ?? location.stadt;
}

/** Indexierbar sind nur Standortseiten aus dem Einzugsgebiet. */
export function isIndexableLocation(location: Pick<LegacyLocation, "stadt">): boolean {
  return regionByStadt.has(location.stadt);
}

export const indexableLocations = legacyLocations.filter(isIndexableLocation);
export const noindexLocations = legacyLocations.filter((location) => !isIndexableLocation(location));

/** Alle Standortseiten derselben Stadt (für die Querverlinkung). */
export function locationsOfCity(stadt: string): LegacyLocation[] {
  return legacyLocations.filter((location) => location.stadt === stadt);
}

/** Dieselbe Leistung in den anderen Städten des Einzugsgebiets. */
export function neighbouringLocations(location: LegacyLocation): LegacyLocation[] {
  return indexableLocations.filter((other) => other.leistung === location.leistung && other.stadt !== location.stadt);
}
