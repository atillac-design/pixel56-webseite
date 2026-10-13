"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { SzeneIcon, SzeneKonfig, SzeneModul } from "@/lib/system-szene";

/**
 * Interaktive Isometrie-Szene: Bausteine rund um den Betrieb, animierte Flüsse,
 * Detailkarte je Baustein. Reine SVG- und CSS-Umsetzung ohne Bibliotheken;
 * alle Zustände sind Beispielabläufe. Respektiert prefers-reduced-motion.
 */

type Platz = { x: number; y: number; w: number; h: number };
type Baustein = SzeneModul & Platz;

/** Isometrische Projektion der Szene (Einheiten → SVG-Koordinaten). */
const OX = 500, OY = 160, CX = 0.866, CY = 0.5;
const PLANE = 580;
function iso(x: number, y: number, z = 0): [number, number] {
  return [OX + (x - y) * CX, OY + (x + y) * CY - z];
}
const pt = (p: [number, number]) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
/** Sichtbarer Ausschnitt (eng um Board und Karten). */
const VB = { x: 30, y: 96, w: 940, h: 628 };

/** Platz im 3×3-Raster: Zelle → Grundfläche. */
function platz(zelle: [number, number], layout: SzeneKonfig["layout"], zentrum = false): Platz {
  const zellenBreite = PLANE / 3;
  if (zentrum) {
    const w = layout === "acht" ? 150 : 170;
    return { x: zellenBreite + (zellenBreite - w) / 2, y: zellenBreite + (zellenBreite - w) / 2, w, h: layout === "acht" ? 54 : 58 };
  }
  const w = layout === "acht" ? 116 : 150;
  const rand = layout === "acht" ? (zellenBreite - w) / 2 : 20;
  const [c, r] = zelle;
  const x = c === 0 ? rand : c === 1 ? zellenBreite + (zellenBreite - w) / 2 : PLANE - rand - w;
  const y = r === 0 ? rand : r === 1 ? zellenBreite + (zellenBreite - w) / 2 : PLANE - rand - w;
  return { x, y, w, h: layout === "acht" ? 26 : 28 };
}
const mitte = (b: Platz): [number, number] => iso(b.x + b.w / 2, b.y + b.w / 2, b.h);
const pinLaenge = (b: Baustein) => (b.id === "betrieb" ? (b.h > 55 ? 76 : 70) : 44);

function Prisma({ b, aktiv }: { b: Baustein; aktiv: boolean }) {
  const { x, y, w, h } = b;
  const top = [iso(x, y, h), iso(x + w, y, h), iso(x + w, y + w, h), iso(x, y + w, h)];
  const links = [iso(x, y + w, h), iso(x + w, y + w, h), iso(x + w, y + w, 0), iso(x, y + w, 0)];
  const rechts = [iso(x + w, y, h), iso(x + w, y + w, h), iso(x + w, y + w, 0), iso(x + w, y, 0)];
  const inset = Math.round(w * 0.12);
  const innen = [iso(x + inset, y + inset, h), iso(x + w - inset, y + inset, h), iso(x + w - inset, y + w - inset, h), iso(x + inset, y + w - inset, h)];
  return (
    <g className={`iso-prisma${aktiv ? " aktiv" : ""}${b.id === "betrieb" ? " betrieb" : ""}`}>
      <polygon className="f-links" points={links.map(pt).join(" ")} />
      <polygon className="f-rechts" points={rechts.map(pt).join(" ")} />
      <polygon className="f-top" points={top.map(pt).join(" ")} />
      <polygon className="f-innen" points={innen.map(pt).join(" ")} />
    </g>
  );
}

const ICONS: Record<SzeneIcon, React.ReactNode> = {
  website: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="7" y1="13" x2="13" y2="13" /></svg>,
  content: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M10.5 9.5v5l4-2.5z" fill="currentColor" stroke="none" /></svg>,
  kampagnen: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" /></svg>,
  ki: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="3" /><rect x="9.5" y="9.5" width="5" height="5" rx="1.2" /><path d="M9 2.5v3.5M15 2.5v3.5M9 18v3.5M15 18v3.5M2.5 9h3.5M2.5 15h3.5M18 9h3.5M18 15h3.5" /></svg>,
  betrieb: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11.5 12 4l8.5 7.5" /><path d="M6 10v10h12V10" /><rect x="10" y="14" width="4" height="6" /></svg>,
  google: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><line x1="15.5" y1="15.5" x2="21" y2="21" /><path d="M8 10.5h5" /></svg>,
  suche: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="6" rx="3" /><path d="M6 15h5M6 19h9" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>,
  funnel: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18l-7 8v6l-4 2v-8z" /></svg>,
  team: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.5c3 0 5.5 2 5.5 5" /></svg>,
};

export default function SystemSzene({ konfig }: { konfig: SzeneKonfig }) {
  const [gewaehlt, setGewaehlt] = useState<string | null>(null);
  const [schritt, setSchritt] = useState(0);
  const [pause, setPause] = useState(false);
  const [ruhig, setRuhig] = useState(false);

  const bausteine = useMemo<Baustein[]>(() => {
    const module = konfig.module.map((m) => ({ ...m, ...platz(m.zelle, konfig.layout) }));
    const betrieb: Baustein = { ...konfig.betrieb, nr: "", icon: "betrieb", zelle: [1, 1], ...platz([1, 1], konfig.layout, true) };
    return [...module, betrieb];
  }, [konfig]);
  const kompakt = konfig.layout === "acht";

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setRuhig(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (ruhig || pause || gewaehlt) return;
    const t = window.setInterval(() => setSchritt((s) => (s + 1) % konfig.ereignisse.length), 3400);
    return () => window.clearInterval(t);
  }, [ruhig, pause, gewaehlt, konfig.ereignisse.length]);

  const ereignis = konfig.ereignisse[schritt % konfig.ereignisse.length];
  const aktivId = gewaehlt ?? ereignis.modul;
  const aktiv = bausteine.find((b) => b.id === aktivId) ?? bausteine[bausteine.length - 1];
  const betrieb = bausteine[bausteine.length - 1];
  const bz = mitte(betrieb);
  const finde = (id: string) => bausteine.find((b) => b.id === id);

  const raster: string[] = [];
  for (let i = 0; i <= PLANE; i += PLANE / 10) {
    raster.push(`M${pt(iso(i, 0))} L${pt(iso(i, PLANE))}`);
    raster.push(`M${pt(iso(0, i))} L${pt(iso(PLANE, i))}`);
  }
  const fluesse = bausteine
    .filter((b) => b.id !== "betrieb")
    .map((b) => {
      const a = mitte(b);
      return { id: b.id, d: `M${pt(a)} L${pt(bz)}`, laenge: Math.hypot(bz[0] - a[0], bz[1] - a[1]) };
    });
  const neben = konfig.nebenwege
    .map(([von, nach]) => {
      const a = finde(von), b = finde(nach);
      if (!a || !b) return null;
      return { id: `${von}-${nach}`, von, nach, d: `M${pt(mitte(a))} L${pt(mitte(b))}` };
    })
    .filter((n): n is NonNullable<typeof n> => n !== null);
  const legende = [...bausteine].sort((a, b) => (a.nr || "99").localeCompare(b.nr || "99"));

  return (
    <div className={`iso-wrap${ruhig ? " ruhig" : ""}${kompakt ? " kompakt" : ""}`} onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
      <div className="iso-scene" style={{ aspectRatio: `${VB.w} / ${VB.h}` }}>
        <svg className="iso-svg" viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <radialGradient id="iso-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#6a35ff" stopOpacity="0.28" />
              <stop offset="1" stopColor="#6a35ff" stopOpacity="0" />
            </radialGradient>
            <filter id="iso-dot-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <ellipse cx={OX} cy={OY + 290} rx="520" ry="260" fill="url(#iso-glow)" />
          <path className="iso-raster" d={raster.join(" ")} />
          <polygon className="iso-boden" points={[iso(0, 0), iso(PLANE, 0), iso(PLANE, PLANE), iso(0, PLANE)].map(pt).join(" ")} />

          {neben.map((n) => (
            <path key={n.id} className={`iso-fluss neben${aktivId === n.von || aktivId === n.nach ? " aktiv" : ""}`} d={n.d} />
          ))}
          {fluesse.map((f) => (
            <g key={f.id} className={`iso-fluss-g${aktivId === f.id ? " aktiv" : ""}`}>
              <path className="iso-fluss" d={f.d} />
              {!ruhig && (
                <circle className="iso-dot" r="5" filter="url(#iso-dot-glow)">
                  <animateMotion dur={`${Math.max(1.6, f.laenge / 110).toFixed(1)}s`} repeatCount="indefinite" path={f.d} />
                </circle>
              )}
            </g>
          ))}

          {bausteine.map((b) => (
            <Prisma key={b.id} b={b} aktiv={aktivId === b.id} />
          ))}
          {bausteine.map((b) => {
            const a = mitte(b);
            return (
              <g key={`pin-${b.id}`} className={`iso-pin${aktivId === b.id ? " aktiv" : ""}`}>
                <line x1={a[0]} y1={a[1]} x2={a[0]} y2={a[1] - pinLaenge(b)} />
                <circle cx={a[0]} cy={a[1]} r="4" />
              </g>
            );
          })}
        </svg>

        {bausteine.map((b) => {
          const a = mitte(b);
          return (
            <button
              type="button"
              key={`karte-${b.id}`}
              className={`iso-karte${aktivId === b.id ? " aktiv" : ""}${b.id === "betrieb" ? " betrieb" : ""}`}
              style={{ left: `${((a[0] - VB.x) / VB.w) * 100}%`, top: `${((a[1] - pinLaenge(b) - VB.y) / VB.h) * 100}%` }}
              onClick={() => setGewaehlt((g) => (g === b.id ? null : b.id))}
              onFocus={() => setPause(true)}
              onBlur={() => setPause(false)}
              aria-pressed={gewaehlt === b.id}
              aria-label={`${b.titel}: ${b.kurz}`}
              title={kompakt ? b.titel : undefined}
            >
              <span className="ik-icon">{ICONS[b.icon]}</span>
              <span className="ik-text">
                <b>{kompakt && b.nr ? b.nr : b.titel}</b>
                {!kompakt && <small><i /> {b.status}</small>}
              </span>
            </button>
          );
        })}
      </div>

      <aside className="iso-panel" aria-live="polite">
        <div className="ip-head">
          <span className="ip-nr">{aktiv.nr ? `Baustein ${aktiv.nr}` : "Mittelpunkt"}</span>
          <span className="ip-status"><i /> {aktiv.status}</span>
        </div>
        <h3>{aktiv.titel}</h3>
        <p className="ip-kurz">{aktiv.kurz}</p>
        <p className="ip-lead">{aktiv.lead}</p>
        <ul>
          {aktiv.punkte.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <Link className="btn-text ip-link" href={aktiv.href}>
          {aktiv.linkText} →
        </Link>
        <div className="iso-legende" role="tablist" aria-label="Bausteine wählen">
          {legende.map((b) => (
            <button
              type="button"
              key={`chip-${b.id}`}
              role="tab"
              aria-selected={aktivId === b.id}
              className={`iso-chip${aktivId === b.id ? " aktiv" : ""}`}
              onClick={() => setGewaehlt((g) => (g === b.id ? null : b.id))}
            >
              {b.nr ? `${b.nr} ` : ""}{b.titel}
            </button>
          ))}
        </div>
      </aside>

      <div className="iso-ticker">
        <span className="it-label">Beispielablauf</span>
        <span className="it-text" key={schritt}>{ereignis.text}</span>
        <span className="it-note">Kein Live-System, nur zur Veranschaulichung.</span>
      </div>
    </div>
  );
}
