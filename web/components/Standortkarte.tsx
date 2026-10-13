"use client";

import Link from "next/link";
import { useState } from "react";

export type KartenOrt = { name: string; lat: number; lon: number; km: number; min: number; href: string; sitz?: boolean };

/**
 * Schematische Karte des Einzugsgebiets: Städte nach Koordinaten platziert,
 * Flüsse als vereinfachte Linien. Hover oder Fokus zeigt Entfernung und
 * Fahrzeit, Klick führt zur Stadtseite. Keine Straßenkarte, nur Orientierung.
 */
const LON = [7.17, 8.11], LAT = [50.25, 50.49];
const W = 1000, H = 360, PAD = 40;
function xy(lat: number, lon: number): [number, number] {
  const x = PAD + ((lon - LON[0]) / (LON[1] - LON[0])) * (W - 2 * PAD);
  const y = H - PAD - ((lat - LAT[0]) / (LAT[1] - LAT[0])) * (H - 2 * PAD);
  return [x, y];
}
const p = (lat: number, lon: number) => xy(lat, lon).map((v) => v.toFixed(1)).join(",");

// Vereinfachte Flussläufe: Rhein, Mosel, Lahn.
const RHEIN = `M${p(50.49, 7.37)} L${p(50.44, 7.40)} L${p(50.42, 7.45)} L${p(50.40, 7.48)} L${p(50.37, 7.55)} L${p(50.36, 7.59)} L${p(50.33, 7.60)} L${p(50.30, 7.61)} L${p(50.26, 7.64)}`;
const MOSEL = `M${p(50.36, 7.59)} L${p(50.33, 7.52)} L${p(50.30, 7.45)} L${p(50.27, 7.35)} L${p(50.25, 7.25)}`;
const LAHN = `M${p(50.30, 7.61)} L${p(50.31, 7.72)} L${p(50.33, 7.85)} L${p(50.37, 7.98)} L${p(50.39, 8.06)}`;

/** Beschriftung je Stadt: Richtung relativ zum Punkt, damit sich nahe Orte nicht überlagern. */
const BESCHRIFTUNG: Record<string, "rechts" | "links" | "oben" | "unten"> = {
  Bendorf: "oben",
  Andernach: "links",
  Neuwied: "oben",
  Weißenthurm: "unten",
  "Höhr-Grenzhausen": "unten",
  "Ransbach-Baumbach": "oben",
  Limburg: "links",
  Mayen: "links",
};

export default function Standortkarte({ orte }: { orte: KartenOrt[] }) {
  const [aktiv, setAktiv] = useState<string | null>(null);
  const sitz = orte.find((o) => o.sitz);
  const gezeigt = orte.find((o) => o.name === aktiv) ?? sitz ?? orte[0];
  return (
    <div className="karte-wrap">
      <div className="karte-scroll">
      <svg className="karte" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Schematische Karte der Region um Koblenz mit den Städten des Einzugsgebiets">
        <defs>
          <radialGradient id="karte-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#ff3951" stopOpacity="0.18" />
            <stop offset="1" stopColor="#ff3951" stopOpacity="0" />
          </radialGradient>
        </defs>
        {sitz && <circle cx={xy(sitz.lat, sitz.lon)[0]} cy={xy(sitz.lat, sitz.lon)[1]} r="150" fill="url(#karte-glow)" />}
        <g className="karte-fluss">
          <path d={RHEIN} />
          <path d={MOSEL} />
          <path d={LAHN} />
        </g>
        <g className="karte-flussname">
          <text x={xy(50.26, 7.64)[0] + 10} y={xy(50.26, 7.64)[1]}>Rhein</text>
          <text x={xy(50.25, 7.25)[0] - 8} y={xy(50.25, 7.25)[1] + 16}>Mosel</text>
          <text x={xy(50.39, 8.06)[0] - 50} y={xy(50.39, 8.06)[1] - 10}>Lahn</text>
        </g>
        {sitz && orte.filter((o) => !o.sitz).map((o) => {
          const a = xy(sitz.lat, sitz.lon), b = xy(o.lat, o.lon);
          return <line key={`l-${o.name}`} className={`karte-linie${aktiv === o.name ? " aktiv" : ""}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />;
        })}
        {orte.map((o) => {
          const [x, y] = xy(o.lat, o.lon);
          const richtung = BESCHRIFTUNG[o.name] ?? "rechts";
          const tx = richtung === "links" ? x - 12 : richtung === "rechts" ? x + 12 : x;
          const ty = richtung === "oben" ? y - 12 : richtung === "unten" ? y + 20 : y + 4;
          const anker = richtung === "links" ? "end" : richtung === "rechts" ? "start" : "middle";
          return (
            <Link
              key={o.name}
              href={o.href}
              className={`karte-ort${o.sitz ? " sitz" : ""}${aktiv === o.name ? " aktiv" : ""}`}
              onMouseEnter={() => setAktiv(o.name)}
              onMouseLeave={() => setAktiv(null)}
              onFocus={() => setAktiv(o.name)}
              onBlur={() => setAktiv(null)}
              aria-label={`${o.name}${o.sitz ? ", unser Sitz" : `, rund ${o.km} km, ${o.min} Minuten Fahrzeit`}: Seite öffnen`}
            >
              {o.sitz && <circle className="karte-puls" cx={x} cy={y} r="14" />}
              <circle className="karte-punkt" cx={x} cy={y} r={o.sitz ? 8 : 6} />
              <text x={tx} y={ty} textAnchor={anker}>{o.name}</text>
            </Link>
          );
        })}
      </svg>
      </div>
      <div className="karte-info" aria-live="polite">
        <b>{gezeigt.name}</b>
        <span>{gezeigt.sitz ? "Unser Sitz in Bendorf bei Koblenz" : `Rund ${gezeigt.km} km von Bendorf · etwa ${gezeigt.min} Minuten Fahrzeit`}</span>
        <small>Schematische Darstellung, keine Straßenkarte. Entfernungen gerundet.</small>
      </div>
    </div>
  );
}
