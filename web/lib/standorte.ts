/**
 * Datenschicht für die Standortseiten. Später kommen diese Einträge aus dem
 * CMS (Sanity) — die Seiten-Vorlage in app/standorte/[slug]/ bleibt gleich.
 *
 * Achtung (siehe README): Bei ~166 Städten droht Thin-Content. Jede Stadt
 * braucht individuelle Text-Bausteine, bevor sie live geht.
 */

export type Standort = {
  slug: string;
  stadt: string;
  koordinaten: string;
  heroSub: string;
  warumJetztLead: string;
  /** Optionales Stadtmotiv im Hero (Pfad unter public/). */
  heroBild?: string;
};

export const standorte: Standort[] = [
  {
    slug: "koblenz",
    stadt: "Koblenz",
    koordinaten: "50.3569° N, 7.5890° O",
    heroSub:
      "Eine Website ist kein Prospekt. Sie ist der Moment, in dem jemand entscheidet, ob er anruft — oder weiterscrollt.",
    warumJetztLead:
      "Bevor ein Kunde in Koblenz anruft, sucht er zuerst online. Er vergleicht, urteilt in Sekunden und merkt sich niemanden zweimal. Eine Website, die das nicht mitdenkt, verliert nicht morgen — sie verliert heute, nur unbemerkt.",
    heroBild: "/bilder/koblenz-rhein.webp",
  },
];

export function getStandort(slug: string): Standort | undefined {
  return standorte.find((s) => s.slug === slug);
}
