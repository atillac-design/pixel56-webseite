import Link from "next/link";
import { indexableLocations, regionStaedte, stadtAnzeige } from "@/lib/standorte";
import { locationPath, routes } from "@/lib/routes";

/**
 * Verlinkt von einer Leistungsseite auf die indexierbaren Standortseiten
 * derselben Leistung (13 Städte im Einzugsgebiet), sortiert nach Entfernung.
 */
export default function RegionLinks({ leistung, kurz }: { leistung: string; kurz: string }) {
  const reihenfolge = new Map(regionStaedte.map((r) => [r.stadt, r.entfernungKm]));
  const seiten = indexableLocations
    .filter((location) => location.leistung === leistung)
    .sort((a, b) => (reihenfolge.get(a.stadt) ?? 999) - (reihenfolge.get(b.stadt) ?? 999));
  if (!seiten.length) return null;

  return (
    <section className="band theme-light" id="region" aria-labelledby="region-title">
      <div className="band-head reveal">
        <div>
          <span className="band-tag">Regional</span>
          <h2 className="band-title" id="region-title">
            {kurz} <em>in deiner Stadt</em>
          </h2>
        </div>
        <p className="band-note">
          Im Einzugsgebiet von Bendorf bei Koblenz kommen wir für Kennenlernen,
          Fotos und Drehs zu dir. Alles andere läuft deutschlandweit per
          Video-Call.
        </p>
      </div>
      <div className="region-links reveal">
        {seiten.map((location) => (
          <Link href={locationPath(location.slug)} key={location.slug}>
            {kurz} in {stadtAnzeige(location)}
          </Link>
        ))}
        <Link href={routes.locations} className="region-links-all">Alle Standorte →</Link>
      </div>
    </section>
  );
}
