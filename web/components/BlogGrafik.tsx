/**
 * Im Code gezeichnete Grafiken für Blogartikel (Block { typ: "grafik", name }).
 * Alles SVG mit CSS-Animation, ohne externe Bilder, ohne Skript. Bei
 * „Bewegung reduzieren“ stehen die Grafiken still (siehe globals.css).
 * Neue Grafik: Komponente unten ergänzen und in `grafiken` eintragen.
 */

function KiAntwort() {
  const quellen = [
    { y: 40, label: "Google-Unternehmensprofil", sub: "Adresse, Bewertungen, Fotos" },
    { y: 110, label: "Deine Website", sub: "Leistungen, Preise, Fragen" },
    { y: 180, label: "Belege von außen", sub: "Innung, Verzeichnisse, Presse" },
  ];
  return (
    <svg className="bg-ki-antwort" viewBox="0 0 720 240" role="img" aria-label="Drei Quellen fließen in eine KI-Antwort: Unternehmensprofil, Website und Belege von außen.">
      <defs>
        <linearGradient id="bgka-strom" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#ff3951" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ff3951" />
          <stop offset="1" stopColor="#ff3951" stopOpacity="0" />
        </linearGradient>
      </defs>
      {quellen.map((q, i) => (
        <g key={q.label} className="bgka-quelle" style={{ animationDelay: `${i * 0.6}s` }}>
          <rect x="8" y={q.y} width="228" height="54" rx="12" />
          <text x="24" y={q.y + 24} className="bgka-t1">{q.label}</text>
          <text x="24" y={q.y + 43} className="bgka-t2">{q.sub}</text>
          <path className="bgka-linie" d={`M236 ${q.y + 27} C 330 ${q.y + 27}, 330 120, 420 120`} />
          <circle className="bgka-punkt" r="5" style={{ animationDelay: `${i * 0.6}s` }}>
            <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${i * 0.6}s`} path={`M236 ${q.y + 27} C 330 ${q.y + 27}, 330 120, 420 120`} />
          </circle>
        </g>
      ))}
      <g className="bgka-ki">
        <rect x="420" y="78" width="110" height="84" rx="16" />
        <text x="475" y="113" textAnchor="middle" className="bgka-t1">KI liest</text>
        <text x="475" y="135" textAnchor="middle" className="bgka-t2">und vergleicht</text>
      </g>
      <path className="bgka-linie bgka-linie-aus" d="M530 120 L 560 120" />
      <g className="bgka-antwort">
        <rect x="560" y="60" width="152" height="120" rx="16" />
        <text x="576" y="88" className="bgka-t1">Antwort</text>
        <text x="576" y="110" className="bgka-t2">„Empfehlenswert ist</text>
        <text x="576" y="128" className="bgka-t2">Müller Bedachungen:</text>
        <text x="576" y="146" className="bgka-t2">4,9 Sterne, Flachdach,</text>
        <text x="576" y="164" className="bgka-t2">Meisterbetrieb …“</text>
      </g>
    </svg>
  );
}

function KlickVerlauf() {
  // Schematisch, keine Messwerte: Wissensfragen verlieren Klicks, lokale Fragen behalten Anfragen.
  return (
    <svg className="bg-klick-verlauf" viewBox="0 0 720 260" role="img" aria-label="Schema: Bei Wissensfragen sinken die Klicks auf Websites, bei lokalen Fragen bleibt der Anruf beim genannten Betrieb.">
      <g className="bgkv-spalte">
        <rect x="10" y="10" width="340" height="240" rx="16" />
        <text x="30" y="42" className="bgka-t1">Wissensfrage</text>
        <text x="30" y="64" className="bgka-t2">„Wie oft Dachrinne reinigen?“</text>
        <rect x="30" y="86" width="300" height="40" rx="10" className="bgkv-box" />
        <text x="46" y="111" className="bgka-t2">KI-Übersicht beantwortet es direkt</text>
        <path className="bgkv-pfeil bgkv-schwach" d="M180 126 L180 164" />
        <rect x="30" y="166" width="300" height="40" rx="10" className="bgkv-box bgkv-blass" />
        <text x="46" y="191" className="bgka-t2">Klick auf eine Website: seltener</text>
        <text x="30" y="236" className="bgka-t3">Weniger Besucher, aber auch vorher kaum Aufträge</text>
      </g>
      <g className="bgkv-spalte">
        <rect x="370" y="10" width="340" height="240" rx="16" />
        <text x="390" y="42" className="bgka-t1">Lokale Frage</text>
        <text x="390" y="64" className="bgka-t2">„Wer macht das in Koblenz?“</text>
        <rect x="390" y="86" width="300" height="40" rx="10" className="bgkv-box" />
        <text x="406" y="111" className="bgka-t2">KI nennt zwei, drei Betriebe mit Quelle</text>
        <path className="bgkv-pfeil" d="M540 126 L540 164" />
        <rect x="390" y="166" width="300" height="40" rx="10" className="bgkv-box bgkv-stark" />
        <text x="406" y="191" className="bgka-t2">Anruf beim genannten Betrieb</text>
        <text x="390" y="236" className="bgka-t3">Wer genannt wird, bekommt den Auftrag</text>
      </g>
    </svg>
  );
}

const grafiken: Record<string, () => React.JSX.Element> = {
  "ki-antwort": KiAntwort,
  "klick-verlauf": KlickVerlauf,
};

export const grafikNamen = Object.keys(grafiken);

export default function BlogGrafik({ name }: { name: string }) {
  const G = grafiken[name];
  if (!G) return null;
  return <G />;
}
