/**
 * Zentrale aus Kundensicht: eine isometrische Beispielkarte, in der das eigene
 * Unternehmen in der Mitte steht und jeder Bereich (Marketing, Funnel,
 * Mitarbeitersuche, Automatisierung …) ein Gebäude mit Fortschritt ist.
 * Reine Illustration, alle Werte sind Platzhalter.
 */

const U = 105; // Kantenlänge einer Kachel in Pixeln
const OX = 400;
const OY = 228;
const C = 0.866;

function iso(x: number, y: number, z = 0): [number, number] {
  return [OX + (x - y) * U * C, OY + (x + y) * U * 0.5 - z];
}
function pts(list: [number, number][]): string {
  return list.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
}

type Gebaeude = {
  x: number;
  y: number;
  h: number;
  farbe: string;
  name: string;
  status: string;
  anteil: number;
  mitte?: boolean;
};

/** Kacheln von (0,0) bis (3,3); jedes Gebäude belegt 0,8 × 0,8 einer Kachel. */
const gebaeude: Gebaeude[] = [
  { x: 0, y: 0, h: 42, farbe: "#6b5bd6", name: "Marketing & Anzeigen", status: "läuft · 1 offener Punkt", anteil: 0.7 },
  { x: 1, y: 0, h: 48, farbe: "#3f80fd", name: "Website & Google", status: "läuft · neue Seite online", anteil: 0.55 },
  { x: 2, y: 0, h: 50, farbe: "#f08a2e", name: "Funnel & Anfragen", status: "läuft · 2 offene Punkte", anteil: 0.45 },
  { x: 0, y: 2, h: 40, farbe: "#2f9e8f", name: "Mitarbeitersuche", status: "startet nächste Woche", anteil: 0.2 },
  { x: 1, y: 1, h: 72, farbe: "#d82f49", name: "Dein Unternehmen", status: "Hauptziel · mehr Anfragen", anteil: 0.6, mitte: true },
  { x: 2, y: 2, h: 56, farbe: "#8b5cf6", name: "Automatisierung (KI)", status: "läuft · Anfragen vorsortiert", anteil: 0.8 },
  { x: 1, y: 2, h: 36, farbe: "#e06a8a", name: "Content & Social", status: "nächster Dreh geplant", anteil: 0.35 },
];

function dunkler(hex: string, f: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 255) * f);
  const g = Math.round(((n >> 8) & 255) * f);
  const b = Math.round((n & 255) * f);
  return `rgb(${r},${g},${b})`;
}

export default function ZentraleSzene() {
  const sortiert = [...gebaeude].sort((a, b) => a.x + a.y - (b.x + b.y));
  const mitte = gebaeude.find((g) => g.mitte)!;
  const mitteTop = iso(mitte.x + 0.5, mitte.y + 0.5, mitte.h);
  return (
    <svg className="zentrale-szene" viewBox="0 0 800 600" role="img" aria-label="Beispiel einer Betriebs-Zentrale: Dein Unternehmen in der Mitte, drumherum Marketing, Website, Funnel, Mitarbeitersuche, Automatisierung und Content als Gebäude mit Fortschritt">
      <style>{`
        .zentrale-szene .zs-fluss { stroke-dasharray: 6 5; animation: zs-lauf 1.6s linear infinite; }
        @keyframes zs-lauf { to { stroke-dashoffset: -22; } }
        @media (prefers-reduced-motion: reduce) { .zentrale-szene .zs-fluss { animation: none; } }
      `}</style>
      <rect width="800" height="600" rx="18" fill="#0d0d14" />
      {/* Bodenplatte */}
      <polygon points={pts([iso(-0.35, -0.35), iso(3.35, -0.35), iso(3.35, 3.35), iso(-0.35, 3.35)])} fill="#15131d" stroke="rgba(255,255,255,0.08)" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} stroke="rgba(255,255,255,0.07)">
          <line x1={iso(i, -0.35)[0]} y1={iso(i, -0.35)[1]} x2={iso(i, 3.35)[0]} y2={iso(i, 3.35)[1]} />
          <line x1={iso(-0.35, i)[0]} y1={iso(-0.35, i)[1]} x2={iso(3.35, i)[0]} y2={iso(3.35, i)[1]} />
        </g>
      ))}
      {/* Verbindungen vom Unternehmen zu jedem Bereich */}
      {gebaeude.filter((g) => !g.mitte).map((g) => {
        const t = iso(g.x + 0.5, g.y + 0.5, g.h);
        const akzent = g.name.startsWith("Funnel");
        return <line key={g.name} className={akzent ? "zs-fluss" : undefined} x1={mitteTop[0]} y1={mitteTop[1]} x2={t[0]} y2={t[1]} stroke={akzent ? "#ff5d75" : "rgba(255,255,255,0.22)"} strokeWidth={akzent ? 2 : 1.2} strokeDasharray={akzent ? undefined : "4 4"} />;
      })}
      {/* Gebäude, von hinten nach vorn */}
      {sortiert.map((g) => {
        const x0 = g.x + 0.1, y0 = g.y + 0.1, x1 = g.x + 0.9, y1 = g.y + 0.9;
        const top = [iso(x0, y0, g.h), iso(x1, y0, g.h), iso(x1, y1, g.h), iso(x0, y1, g.h)];
        const links = [iso(x0, y1, g.h), iso(x1, y1, g.h), iso(x1, y1, 0), iso(x0, y1, 0)];
        const rechts = [iso(x1, y0, g.h), iso(x1, y1, g.h), iso(x1, y1, 0), iso(x1, y0, 0)];
        const [cx, cy] = iso(g.x + 0.5, g.y + 0.5, g.h);
        // Karten seitlich versetzen, damit sie sich nicht gegenseitig und nicht das Unternehmen verdecken
        const kw = g.mitte ? 160 : 140;
        const seite = g.x === g.y ? 0 : g.x > g.y ? 1 : -1;
        const kx = seite === 0 ? cx - kw / 2 : seite > 0 ? cx + 10 : cx - kw - 10;
        const ky = cy - 62;
        return (
          <g key={g.name}>
            <polygon points={pts(links)} fill={dunkler(g.farbe, 0.55)} />
            <polygon points={pts(rechts)} fill={dunkler(g.farbe, 0.72)} />
            <polygon points={pts(top)} fill={g.farbe} stroke={g.mitte ? "#ffb3bf" : "rgba(255,255,255,0.35)"} strokeWidth={g.mitte ? 1.5 : 0.8} />
            {/* Fenster-Andeutung */}
            {[0.3, 0.55].map((f) => (
              <rect key={f} x={iso(x1, y0 + f * 0.8, g.h * 0.55)[0] - 3} y={iso(x1, y0 + f * 0.8, g.h * 0.55)[1]} width="6" height="4" fill="rgba(255,255,255,0.35)" />
            ))}
            {/* Beschriftungskarte */}
            <g>
              <rect x={kx} y={ky} width={kw} height="42" rx="10" fill="#1b1a26" stroke={g.mitte ? "#ff5d75" : "rgba(255,255,255,0.14)"} strokeWidth={g.mitte ? 1.6 : 1} />
              <circle cx={kx + 13} cy={ky + 14} r="3.5" fill={g.farbe} />
              <text x={kx + 22} y={ky + 18} fill="#f5f4f2" fontSize={g.mitte ? 12.5 : 11.5} fontWeight="800">{g.name}</text>
              <text x={kx + 22} y={ky + 30} fill="rgba(245,244,242,0.62)" fontSize="8.5" letterSpacing="0.04em">{g.status.toUpperCase()}</text>
              <rect x={kx + 22} y={ky + 35} width={kw - 32} height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
              <rect x={kx + 22} y={ky + 35} width={(kw - 32) * g.anteil} height="3" rx="1.5" fill={g.farbe} />
            </g>
          </g>
        );
      })}
      {/* Kopfzeile: Hauptziel und Tagesfrage */}
      <g>
        <rect x="18" y="16" width="250" height="60" rx="12" fill="#15131d" stroke="rgba(255,255,255,0.12)" />
        <rect x="18" y="16" width="4" height="60" rx="2" fill="#d82f49" />
        <text x="34" y="36" fill="#ff5d75" fontSize="9.5" fontWeight="800" letterSpacing="0.12em">HAUPTZIEL</text>
        <text x="34" y="55" fill="#f5f4f2" fontSize="14" fontWeight="800">Mehr Anfragen aus der Region</text>
        <rect x="34" y="63" width="218" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
        <rect x="34" y="63" width="130" height="4" rx="2" fill="#d82f49" />
      </g>
      <g>
        <rect x="560" y="16" width="222" height="30" rx="15" fill="#15131d" stroke="rgba(255,255,255,0.12)" />
        <circle cx="578" cy="31" r="4" fill="#3ddc84" />
        <text x="590" y="35" fill="#f5f4f2" fontSize="11.5" fontWeight="700">Live</text>
        <text x="622" y="35" fill="rgba(245,244,242,0.6)" fontSize="11">Stand gespeichert</text>
        <rect x="560" y="52" width="222" height="32" rx="10" fill="#2a1f5e" stroke="#6b5bd6" />
        <text x="671" y="73" fill="#d6ccff" fontSize="12.5" fontWeight="800" textAnchor="middle">Was steht heute an?</text>
      </g>
      <text x="18" y="586" fill="rgba(245,244,242,0.45)" fontSize="10" letterSpacing="0.06em">BEISPIELANSICHT · WERTE SIND PLATZHALTER</text>
    </svg>
  );
}
