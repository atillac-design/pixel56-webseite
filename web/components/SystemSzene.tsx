"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Interaktive Isometrie-Szene „Das Pixel56-System“: vier Bausteine rund um den
 * Betrieb, animierte Flüsse dazwischen, Detailkarte je Baustein. Reine SVG- und
 * CSS-Umsetzung ohne Bibliotheken; alle Zustände sind Beispielabläufe, keine
 * Live-Daten. Respektiert prefers-reduced-motion.
 */

type ModulId = "website" | "content" | "kampagnen" | "ki" | "betrieb";

type Modul = {
  id: ModulId;
  nr: string;
  titel: string;
  kurz: string;
  status: string;
  lead: string;
  punkte: string[];
  href: string;
  linkText: string;
  /** Grundfläche in Szenen-Einheiten (x, y, Breite) und Höhe. */
  x: number;
  y: number;
  w: number;
  h: number;
};

const MODULE: Modul[] = [
  {
    id: "website",
    nr: "01",
    titel: "Klarer Auftritt",
    kurz: "Website & Positionierung",
    status: "online",
    lead: "Die Website ist der Ort, an dem aus Interesse eine Anfrage wird. Sie erklärt in Sekunden, was du für wen tust, und macht den nächsten Schritt leicht.",
    punkte: ["Eine Seite je Leistung, mit den Suchbegriffen deiner Kunden", "Schnell und sauber auf dem Handy", "Formular, Anruf und Terminbuchung an jeder Stelle"],
    href: "/webdesign",
    linkText: "Webdesign ansehen",
    x: 20, y: 20, w: 150, h: 28,
  },
  {
    id: "kampagnen",
    nr: "03",
    titel: "Gezielte Reichweite",
    kurz: "Meta Ads & Google Ads",
    status: "Kampagne aktiv",
    lead: "Anzeigen bringen Menschen auf die Website, die sonst nie von dir gehört hätten. Bei Google, wenn jemand sucht. Bei Meta, bevor jemand sucht.",
    punkte: ["Zielgruppen nach Ort, Alter und Interessen", "Jede Anzeige führt auf eine passende Zielseite", "Tracking bis zur Anfrage, nicht nur bis zum Klick"],
    href: "/facebook-meta-ads",
    linkText: "Meta Ads ansehen",
    x: 410, y: 20, w: 150, h: 28,
  },
  {
    id: "content",
    nr: "02",
    titel: "Relevanter Content",
    kurz: "Reels, Fotos & Creatives",
    status: "nächstes Reel geplant",
    lead: "Echte Einblicke aus dem Betrieb liefern das Material für Social Media und Anzeigen. Keine Stockfotos, sondern dein Team, deine Arbeit, deine Kunden.",
    punkte: ["Reels und Fotos aus dem Alltag", "Creatives, die in Kampagnen weiterlaufen", "Fester Rhythmus statt Zufall"],
    href: "/social-media-content",
    linkText: "Social Content ansehen",
    x: 20, y: 410, w: 150, h: 28,
  },
  {
    id: "ki",
    nr: "04",
    titel: "Smarte Abläufe",
    kurz: "KI-Prozesse & Automatisierung",
    status: "sortiert Anfragen vor",
    lead: "Wenn Anfragen kommen, muss der Rest nicht von Hand laufen. Abläufe, die sich wiederholen, übernehmen Werkzeuge, die rund um die Uhr arbeiten.",
    punkte: ["Anfragen vorsortieren und sofort beantworten", "Angebote aus Vorlagen vorbereiten", "Bewertungsbitte nach dem Auftrag, automatisch"],
    href: "/ki-automatisierung",
    linkText: "KI-Prozesse ansehen",
    x: 410, y: 410, w: 150, h: 28,
  },
  {
    id: "betrieb",
    nr: "",
    titel: "Dein Betrieb",
    kurz: "Hier kommt alles an",
    status: "Posteingang im Griff",
    lead: "Alle Bausteine laufen auf einen Punkt zu: Anfragen, Bewerbungen und Aufträge, die bei dir ankommen, ohne dass du jedem Kanal hinterherlaufen musst.",
    punkte: ["Jede Anfrage hat einen klaren Weg", "Du siehst, was woher kommt", "Ein Ansprechpartner für das ganze System"],
    href: "/kontakt",
    linkText: "Kostenloses Erstgespräch",
    x: 205, y: 205, w: 170, h: 58,
  },
];

/** Reihenfolge der Auswahl-Chips: nach Nummer, der Betrieb zuletzt. */
const LEGENDE = [...MODULE].sort((a, b) => (a.nr || "99").localeCompare(b.nr || "99"));

/** Beispielabläufe für die Ereigniszeile (keine Live-Daten). */
const EREIGNISSE: { modul: ModulId; text: string }[] = [
  { modul: "content", text: "Reel aus der Werkstatt veröffentlicht" },
  { modul: "kampagnen", text: "Anzeige geklickt, Zielseite geladen" },
  { modul: "website", text: "Formular ausgefüllt, Anfrage im Posteingang" },
  { modul: "ki", text: "Anfrage vorsortiert, Rückruf vorbereitet" },
  { modul: "betrieb", text: "Auftrag bestätigt, Bewertungsbitte folgt automatisch" },
];

/** Isometrische Projektion der Szene (Einheiten → SVG-Koordinaten). */
const OX = 500, OY = 160, CX = 0.866, CY = 0.5;
/** Sichtbarer Ausschnitt der SVG-Koordinaten (eng um Board und Karten). */
const VB = { x: 30, y: 96, w: 940, h: 628 };
/** Pin-Länge über dem Baustein (der Betrieb ist höher). */
const pinLaenge = (m: Modul) => (m.id === "betrieb" ? 76 : 44);
function iso(x: number, y: number, z = 0): [number, number] {
  return [OX + (x - y) * CX, OY + (x + y) * CY - z];
}
const pt = (p: [number, number]) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;

function Prisma({ m, aktiv }: { m: Modul; aktiv: boolean }) {
  const { x, y, w, h } = m;
  const top = [iso(x, y, h), iso(x + w, y, h), iso(x + w, y + w, h), iso(x, y + w, h)];
  const links = [iso(x, y + w, h), iso(x + w, y + w, h), iso(x + w, y + w, 0), iso(x, y + w, 0)];
  const rechts = [iso(x + w, y, h), iso(x + w, y + w, h), iso(x + w, y + w, 0), iso(x + w, y, 0)];
  const inset = 18;
  const innen = [iso(x + inset, y + inset, h), iso(x + w - inset, y + inset, h), iso(x + w - inset, y + w - inset, h), iso(x + inset, y + w - inset, h)];
  return (
    <g className={`iso-prisma${aktiv ? " aktiv" : ""}${m.id === "betrieb" ? " betrieb" : ""}`}>
      <polygon className="f-links" points={links.map(pt).join(" ")} />
      <polygon className="f-rechts" points={rechts.map(pt).join(" ")} />
      <polygon className="f-top" points={top.map(pt).join(" ")} />
      <polygon className="f-innen" points={innen.map(pt).join(" ")} />
    </g>
  );
}

const ICONS: Record<ModulId, React.ReactNode> = {
  website: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="7" y1="13" x2="13" y2="13" /></svg>
  ),
  content: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M10.5 9.5v5l4-2.5z" fill="currentColor" stroke="none" /></svg>
  ),
  kampagnen: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" /></svg>
  ),
  ki: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="3" /><rect x="9.5" y="9.5" width="5" height="5" rx="1.2" /><path d="M9 2.5v3.5M15 2.5v3.5M9 18v3.5M15 18v3.5M2.5 9h3.5M2.5 15h3.5M18 9h3.5M18 15h3.5" /></svg>
  ),
  betrieb: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11.5 12 4l8.5 7.5" /><path d="M6 10v10h12V10" /><rect x="10" y="14" width="4" height="6" /></svg>
  ),
};

export default function SystemSzene() {
  const [gewaehlt, setGewaehlt] = useState<ModulId | null>(null);
  const [schritt, setSchritt] = useState(0);
  const [pause, setPause] = useState(false);
  const [ruhig, setRuhig] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Bewegung nur, wenn das System es erlaubt.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setRuhig(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Beispielablauf: wandert durch die Bausteine, solange niemand eingreift.
  useEffect(() => {
    if (ruhig || pause || gewaehlt) return;
    const t = window.setInterval(() => setSchritt((s) => (s + 1) % EREIGNISSE.length), 3400);
    return () => window.clearInterval(t);
  }, [ruhig, pause, gewaehlt]);

  const ereignis = EREIGNISSE[schritt];
  const aktivId: ModulId = gewaehlt ?? ereignis.modul;
  const aktiv = useMemo(() => MODULE.find((m) => m.id === aktivId)!, [aktivId]);
  const betrieb = MODULE.find((m) => m.id === "betrieb")!;
  const bz = iso(betrieb.x + betrieb.w / 2, betrieb.y + betrieb.w / 2, betrieb.h);

  // Bodenraster
  const raster: string[] = [];
  for (let i = 0; i <= 580; i += 58) {
    raster.push(`M${pt(iso(i, 0))} L${pt(iso(i, 580))}`);
    raster.push(`M${pt(iso(0, i))} L${pt(iso(580, i))}`);
  }

  const fluesse = MODULE.filter((m) => m.id !== "betrieb").map((m) => {
    const a = iso(m.x + m.w / 2, m.y + m.w / 2, m.h);
    // Fluss läuft vom Baustein zum Betrieb; für Content und Kampagnen zusätzlich untereinander.
    return { id: m.id, d: `M${pt(a)} L${pt(bz)}`, laenge: Math.hypot(bz[0] - a[0], bz[1] - a[1]) };
  });
  const kampagnen = MODULE.find((m) => m.id === "kampagnen")!;
  const content = MODULE.find((m) => m.id === "content")!;
  const website = MODULE.find((m) => m.id === "website")!;
  const seite = (m: Modul) => iso(m.x + m.w / 2, m.y + m.w / 2, m.h);
  const neben = [
    { id: "content-kampagnen", d: `M${pt(seite(content))} L${pt(iso(content.x + content.w / 2, kampagnen.y + kampagnen.w / 2, 0))} L${pt(seite(kampagnen))}`, von: "content", nach: "kampagnen" },
    { id: "kampagnen-website", d: `M${pt(seite(kampagnen))} L${pt(seite(website))}`, von: "kampagnen", nach: "website" },
  ];

  return (
    <div
      className={`iso-wrap${ruhig ? " ruhig" : ""}`}
      ref={wrapRef}
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
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
          <polygon className="iso-boden" points={[iso(0, 0), iso(580, 0), iso(580, 580), iso(0, 580)].map(pt).join(" ")} />

          {neben.map((n) => (
            <path key={n.id} className={`iso-fluss neben${aktivId === n.von || aktivId === n.nach ? " aktiv" : ""}`} d={n.d} />
          ))}
          {fluesse.map((f) => (
            <g key={f.id} className={`iso-fluss-g${aktivId === f.id ? " aktiv" : ""}`}>
              <path className="iso-fluss" d={f.d} />
              {!ruhig && (
                <circle className="iso-dot" r="5" filter="url(#iso-dot-glow)">
                  <animateMotion dur={`${(f.laenge / 110).toFixed(1)}s`} repeatCount="indefinite" path={f.d} />
                </circle>
              )}
            </g>
          ))}

          {MODULE.map((m) => (
            <Prisma key={m.id} m={m} aktiv={aktivId === m.id} />
          ))}

          {MODULE.map((m) => {
            const a = iso(m.x + m.w / 2, m.y + m.w / 2, m.h);
            return (
              <g key={`pin-${m.id}`} className={`iso-pin${aktivId === m.id ? " aktiv" : ""}`}>
                <line x1={a[0]} y1={a[1]} x2={a[0]} y2={a[1] - pinLaenge(m)} />
                <circle cx={a[0]} cy={a[1]} r="4" />
              </g>
            );
          })}
        </svg>

        {MODULE.map((m) => {
          const a = iso(m.x + m.w / 2, m.y + m.w / 2, m.h);
          return (
            <button
              type="button"
              key={`karte-${m.id}`}
              className={`iso-karte${aktivId === m.id ? " aktiv" : ""}${m.id === "betrieb" ? " betrieb" : ""}`}
              style={{ left: `${((a[0] - VB.x) / VB.w) * 100}%`, top: `${((a[1] - pinLaenge(m) - VB.y) / VB.h) * 100}%` }}
              onClick={() => setGewaehlt((g) => (g === m.id ? null : m.id))}
              onFocus={() => setPause(true)}
              onBlur={() => setPause(false)}
              aria-pressed={gewaehlt === m.id}
              aria-label={`${m.titel}: ${m.kurz}`}
            >
              <span className="ik-icon">{ICONS[m.id]}</span>
              <span className="ik-text">
                <b>{m.titel}</b>
                <small><i /> {m.status}</small>
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
          {LEGENDE.map((m) => (
            <button
              type="button"
              key={`chip-${m.id}`}
              role="tab"
              aria-selected={aktivId === m.id}
              className={`iso-chip${aktivId === m.id ? " aktiv" : ""}`}
              onClick={() => setGewaehlt((g) => (g === m.id ? null : m.id))}
            >
              {m.nr ? `${m.nr} ` : ""}{m.titel}
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
