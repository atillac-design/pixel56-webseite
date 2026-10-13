"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type ProjektKarte = {
  slug: string;
  href: string;
  kunde: string;
  titel: string;
  teaser: string;
  branche: string;
  tags: string[];
  jahr: string;
  bild?: string;
  variant: string;
};

/** Filterbare Projektübersicht: Chips für Branche und Leistung, Karten wie bisher. */
export default function ProjektFilter({ projekte }: { projekte: ProjektKarte[] }) {
  const [branche, setBranche] = useState<string | null>(null);
  const [leistung, setLeistung] = useState<string | null>(null);

  const branchen = useMemo(() => Array.from(new Set(projekte.map((p) => p.branche))).sort((a, b) => a.localeCompare(b, "de")), [projekte]);
  const leistungen = useMemo(() => {
    const zaehler = new Map<string, number>();
    projekte.forEach((p) => p.tags.forEach((t) => zaehler.set(t, (zaehler.get(t) ?? 0) + 1)));
    return Array.from(zaehler.entries()).sort((a, b) => b[1] - a[1]).map(([t]) => t);
  }, [projekte]);

  const sichtbar = projekte.filter((p) => (!branche || p.branche === branche) && (!leistung || p.tags.includes(leistung)));

  return (
    <div className="projekt-filter">
      <div className="pf-leiste" role="group" aria-label="Projekte filtern">
        <div className="pf-gruppe">
          <span>Branche</span>
          <button type="button" className={`pf-chip${branche === null ? " aktiv" : ""}`} aria-pressed={branche === null} onClick={() => setBranche(null)}>Alle</button>
          {branchen.map((b) => (
            <button type="button" key={b} className={`pf-chip${branche === b ? " aktiv" : ""}`} aria-pressed={branche === b} onClick={() => setBranche(branche === b ? null : b)}>{b}</button>
          ))}
        </div>
        <div className="pf-gruppe">
          <span>Leistung</span>
          <button type="button" className={`pf-chip${leistung === null ? " aktiv" : ""}`} aria-pressed={leistung === null} onClick={() => setLeistung(null)}>Alle</button>
          {leistungen.map((t) => (
            <button type="button" key={t} className={`pf-chip${leistung === t ? " aktiv" : ""}`} aria-pressed={leistung === t} onClick={() => setLeistung(leistung === t ? null : t)}>{t}</button>
          ))}
        </div>
        <p className="pf-anzahl" aria-live="polite">
          {sichtbar.length === projekte.length ? `Alle ${projekte.length} Projekte` : `${sichtbar.length} von ${projekte.length} Projekten`}
          {(branche || leistung) && (
            <button type="button" className="pf-reset" onClick={() => { setBranche(null); setLeistung(null); }}>Filter zurücksetzen</button>
          )}
        </p>
      </div>

      {sichtbar.length === 0 ? (
        <p className="pf-leer">Für diese Kombination gibt es noch kein Projekt. Vielleicht wird deins das erste: <Link href="/kontakt">Erstgespräch vereinbaren</Link>.</p>
      ) : (
        <div className="proj-grid">
          {sichtbar.map((p) => (
            <Link className="proj-card" href={p.href} key={p.slug}>
              {p.bild ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img className="pc-img" src={p.bild} alt={`${p.kunde}: ${p.titel}`} loading="lazy" decoding="async" />
              ) : (
                <>
                  <div className="ic-chrome">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={`ic-body ${p.variant}`}>
                    <div className="ic-bar ic-bar-lg" />
                    <div className="ic-bar ic-bar-sm" />
                    <div className="ic-bar ic-bar-sm" style={{ width: "60%" }} />
                    <div className="ic-btn" />
                  </div>
                </>
              )}
              <div className="pc-body">
                <span className="rc-cat">{p.kunde}</span>
                <h3>{p.titel}</h3>
                <p>{p.teaser}</p>
                <div className="rc-tag">
                  <span>{p.tags.join(" · ")}</span>
                  <span>{p.jahr}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
