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


function SeoZeitverlauf() {
  // Schematische Kurven über zwölf Monate: Technik schnell, Inhalte mittel, Vertrauen langsam.
  const monate = [0, 2, 4, 6, 8, 10, 12];
  const x = (m: number) => 60 + (m / 12) * 620;
  return (
    <svg className="bg-seo-zeit" viewBox="0 0 720 260" role="img" aria-label="Schema: Technische Verbesserungen wirken in den ersten Wochen, Inhalte nach Monaten, Vertrauen baut sich über ein Jahr auf.">
      <line x1="60" y1="210" x2="690" y2="210" className="bgsz-achse" />
      <line x1="60" y1="30" x2="60" y2="210" className="bgsz-achse" />
      {monate.map((m) => (
        <g key={m}>
          <line x1={x(m)} y1="210" x2={x(m)} y2="215" className="bgsz-achse" />
          <text x={x(m)} y="232" textAnchor="middle" className="bgka-t2">{m === 0 ? "Start" : `Monat ${m}`}</text>
        </g>
      ))}
      <text x="60" y="20" className="bgka-t2">Wirkung</text>
      <path className="bgsz-kurve bgsz-technik" d="M60 200 C 110 120, 150 95, 200 90 S 500 80, 690 78" />
      <path className="bgsz-kurve bgsz-inhalt" d="M60 205 C 160 205, 220 190, 300 150 S 500 95, 690 70" />
      <path className="bgsz-kurve bgsz-vertrauen" d="M60 207 C 250 205, 400 180, 520 140 S 650 95, 690 85" />
      <g className="bgsz-legende">
        <rect x="470" y="22" width="220" height="62" rx="10" />
        <line x1="482" y1="38" x2="506" y2="38" className="bgsz-kurve bgsz-technik bgsz-mini" /><text x="514" y="42" className="bgka-t2">Technik: Wochen</text>
        <line x1="482" y1="56" x2="506" y2="56" className="bgsz-kurve bgsz-inhalt bgsz-mini" /><text x="514" y="60" className="bgka-t2">Inhalte: Monate</text>
        <line x1="482" y1="74" x2="506" y2="74" className="bgsz-kurve bgsz-vertrauen bgsz-mini" /><text x="514" y="78" className="bgka-t2">Vertrauen: ein Jahr</text>
      </g>
      <g className="bgsz-marke">
        <line x1={x(3)} y1="30" x2={x(3)} y2="210" />
        <text x={x(3) + 6} y="46" className="bgka-t3">Hier geben die meisten auf</text>
      </g>
    </svg>
  );
}

function BewerberWeg() {
  const schritte = [
    { x: 10, t1: "Anzeige", t2: "echte Kollegen, klarer Ort" },
    { x: 192, t1: "Kurzformular", t2: "fünf Felder, in der App" },
    { x: 374, t1: "Rückruf", t2: "am selben Tag" },
    { x: 556, t1: "Kennenlernen", t2: "Probetag, Entscheidung" },
  ];
  return (
    <svg className="bg-bewerber-weg" viewBox="0 0 720 200" role="img" aria-label="Vier Schritte einer Bewerberkampagne: Anzeige, Kurzformular, Rückruf am selben Tag, Kennenlernen. Zwischen den Schritten gehen Bewerber verloren, wenn der nächste Schritt zu lange dauert.">
      {schritte.map((s, i) => (
        <g key={s.t1}>
          <rect x={s.x} y="60" width="154" height="70" rx="14" className={i === 2 ? "bgbw-box bgbw-wichtig" : "bgbw-box"} />
          <text x={s.x + 16} y="88" className="bgka-t1">{s.t1}</text>
          <text x={s.x + 16} y="110" className="bgka-t2">{s.t2}</text>
          {i < 3 && <path className="bgbw-pfeil" d={`M${s.x + 156} 95 L${s.x + 190} 95`} />}
          {i < 3 && <text x={s.x + 173} y="152" textAnchor="middle" className="bgka-t3">{i === 1 ? "hier verlieren viele" : "Abbruch möglich"}</text>}
        </g>
      ))}
      <circle className="bgka-punkt" r="6">
        <animateMotion dur="4s" repeatCount="indefinite" path="M20 95 L 700 95" />
      </circle>
      <text x="360" y="30" textAnchor="middle" className="bgka-t2">Vom Scrollen zum Probearbeiten, jeder Schritt gemessen</text>
    </svg>
  );
}

const grafiken: Record<string, () => React.JSX.Element> = {
  "ki-antwort": KiAntwort,
  "klick-verlauf": KlickVerlauf,
  "seo-zeitverlauf": SeoZeitverlauf,
  "bewerber-weg": BewerberWeg,
};

export const grafikNamen = Object.keys(grafiken);

export default function BlogGrafik({ name }: { name: string }) {
  const G = grafiken[name];
  if (!G) return null;
  return <G />;
}
