import Link from "next/link";
import { BrowserMock } from "@/components/ui";
import { fallstudien, type Fallstudie } from "@/lib/projekte";
import { projectPath } from "@/lib/routes";

/** Ein Projekt in der kompakten Detail-Ansicht: Bild, Einordnung, Umsetzung in Punkten, Link. */
export type DetailEintrag = {
  kicker: string;
  titel: string;
  text: string;
  punkte: string[];
  bild?: string;
  bildAlt?: string;
  /** Farb-Variante für das Browser-Mockup, wenn kein Bild vorliegt. */
  variant?: string;
  href?: string;
  linkText?: string;
  extern?: boolean;
  /** Kleine Einordnung unter den Punkten, z. B. „Eigenes Produkt, Pilotphase“. */
  hinweis?: string;
};

/** Baut aus einer Fallstudie den Detail-Eintrag: Teaser, Umsetzung, Link zur Projektseite. */
export function detailAusFallstudie(f: Fallstudie): DetailEintrag {
  return {
    kicker: `${f.kunde} · ${f.branche} · ${f.jahr}`,
    titel: f.loesung.titel,
    text: f.teaser,
    punkte: f.loesung.punkte.slice(0, 4),
    bild: f.bild,
    bildAlt: `${f.kunde}: ${f.titel}`,
    variant: f.variant,
    href: projectPath(f.slug),
    linkText: "Zum Projekt",
  };
}

/**
 * Wählt weitere Projekte für den Abschnitt „Ein Projekt im Detail“: zuerst die
 * bevorzugten Slugs, dann Projekte mit passendem Tag, nie das Spotlight selbst.
 */
export function weitereDetails(ausser: string[], bevorzugt: string[], tags: string[] = [], n = 2): DetailEintrag[] {
  const gewaehlt: Fallstudie[] = [];
  for (const slug of bevorzugt) {
    const f = fallstudien.find((p) => p.slug === slug);
    if (f && !ausser.includes(slug) && !gewaehlt.includes(f)) gewaehlt.push(f);
  }
  for (const f of fallstudien) {
    if (gewaehlt.length >= n) break;
    if (ausser.includes(f.slug) || gewaehlt.includes(f)) continue;
    if (tags.length && !f.tags.some((t) => tags.includes(t))) continue;
    gewaehlt.push(f);
  }
  return gewaehlt.slice(0, n).map(detailAusFallstudie);
}

export default function DetailReihe({ eintraege, titel = "Weitere Projekte im Detail" }: { eintraege: DetailEintrag[]; titel?: string | null }) {
  if (!eintraege.length) return null;
  return (
    <div className="detail-reihe reveal" aria-label={titel ?? undefined}>
      {titel ? <p className="detail-reihe-titel">{titel}</p> : null}
      {eintraege.map((e) => {
        const link = e.href
          ? e.extern
            ? <a className="body-link" href={e.href} target="_blank" rel="noopener noreferrer">{e.linkText ?? "Ansehen"} ↗</a>
            : <Link className="body-link" href={e.href}>{e.linkText ?? "Zum Projekt"} →</Link>
          : null;
        return (
          <article className="detail-eintrag" key={e.titel}>
            <div className="detail-bild">
              {e.bild ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={e.bild} alt={e.bildAlt ?? e.titel} loading="lazy" decoding="async" />
              ) : (
                <div className="detail-mock"><BrowserMock variant={e.variant ?? "ic-2"} barWidth={62} /></div>
              )}
            </div>
            <div className="detail-text">
              <span className="detail-kicker">{e.kicker}</span>
              <h3>{e.titel}</h3>
              <p>{e.text}</p>
              <ul>
                {e.punkte.map((p) => <li key={p}>{p}</li>)}
              </ul>
              {e.hinweis ? <small className="detail-hinweis">{e.hinweis}</small> : null}
              {link}
            </div>
          </article>
        );
      })}
    </div>
  );
}
