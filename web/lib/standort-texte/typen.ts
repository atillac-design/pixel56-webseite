/**
 * Individuelle Texte für die indexierbaren Standortseiten.
 *
 * Jede Stadt bekommt eine eigene Datei mit fünf Seiten (Webdesign, Google Ads,
 * Meta Ads, SEO, Social Media). Nichts davon ist eine Vorlage mit eingesetztem
 * Stadtnamen: Lage, Wirtschaft, typische Fragen und passende Projekte sind pro
 * Seite geschrieben. Regeln: keine erfundenen Zahlen, keine Kundennamen aus der
 * Stadt, die wir nicht belegen können, kein Hinweis auf Besucher vor Ort.
 */

export type StandortFakt = { b: string; small: string };
export type StandortPunkt = { title: string; text: string };
export type StandortFrage = { q: string; a: string };

export type StandortText = {
  /** Seitentitel, höchstens 50 Zeichen vor „ | Pixel56“. */
  title: string;
  /** Meta-Beschreibung, höchstens 155 Zeichen. */
  meta: string;
  /** Dritte Zeile der Überschrift, ein kurzer Satz mit Punkt. */
  heroLine: string;
  heroText: string;
  /** Vier kurze Stichworte unter der Überschrift. */
  proof: string[];
  /** 01 — Die Stadt und ihre Ausgangslage für diese Leistung. */
  ort: { tag: string; title: string; em: string; absaetze: string[]; fakten: StandortFakt[] };
  /** 02 — Wo es hakt und was wir dagegen tun. */
  bedarf: { tag: string; title: string; em: string; absaetze: string[]; punkte: string[] };
  /** 03 — Was wir in dieser Stadt konkret machen, vier Karten. */
  konkret: { title: string; em: string; note: string; punkte: StandortPunkt[] };
  /** 04 — Projekt-Slugs aus lib/projekte.ts und ein Satz, warum genau diese. */
  referenzen: { slugs: string[]; note: string };
  /** Index in verifiedProjectVoices-Reihenfolge, damit nicht jede Seite dieselben Stimmen zeigt. */
  stimmen: string[];
  /** Vier Fragen, die zu Stadt und Leistung passen. */
  faqs: StandortFrage[];
};

/** Schlüssel: Slug der Standortseite (z. B. „koblenz-google-ads“). */
export type StadtTexte = Record<string, StandortText>;
