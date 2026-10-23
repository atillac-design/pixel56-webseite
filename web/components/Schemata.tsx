/**
 * Schematische Schaubilder ohne echte Zahlen: zeigen, wo auf einer
 * Suchergebnisseite was passiert. Kein Foto, keine KI-Grafik, kein Stock.
 */

type Marke = { nr: string; titel: string; text: string };

function Legende({ punkte }: { punkte: Marke[] }) {
  return (
    <ol className="schema-legende">
      {punkte.map((p) => (
        <li key={p.nr}>
          <span>{p.nr}</span>
          <div>
            <b>{p.titel}</b>
            <small>{p.text}</small>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Google Ads: Aufbau einer guten Suchanzeige. */
export function AnzeigenSchema() {
  const punkte: Marke[] = [
    { nr: "1", titel: "Suchbegriff mit Auftrag", text: "„Dachdecker Koblenz“ sucht jemand, der einen Dachdecker braucht. Darauf bieten wir, nicht auf „Dach selber decken“." },
    { nr: "2", titel: "Überschrift greift die Suche auf", text: "Ort und Leistung stehen wörtlich drin. Das hebt die Relevanz und senkt den Klickpreis." },
    { nr: "3", titel: "Ein konkretes Versprechen", text: "Rückruf am selben Tag, Festpreis, Notdienst: etwas, das der Betrieb wirklich hält." },
    { nr: "4", titel: "Erweiterungen", text: "Anrufknopf, Unterseiten, Standort. Mehr Fläche, mehr Klicks, oft ohne Mehrkosten." },
    { nr: "5", titel: "Zielseite passt zur Anzeige", text: "Wer auf „Dachsanierung“ klickt, landet auf der Dachsanierungs-Seite mit Formular, nicht auf der Startseite." },
  ];
  return (
    <figure className="schema-figur" aria-label="Schematischer Aufbau einer Suchanzeige">
      <div className="schema-serp" aria-hidden="true">
        <div className="schema-suche"><i /> <span>dachdecker koblenz</span><em className="schema-marke">1</em></div>
        <div className="schema-anzeige">
          <div className="schema-zeile-klein"><b>Anzeige</b> · musterdach.de</div>
          <div className="schema-titel">Dachdecker in Koblenz · Rückruf am selben Tag<em className="schema-marke">2</em></div>
          <div className="schema-text">Reparatur, Sanierung, Neueindeckung. Meisterbetrieb aus der Region, Festpreis nach Besichtigung.<em className="schema-marke">3</em></div>
          <div className="schema-erweiterungen">
            <span>Dachsanierung</span><span>Reparatur</span><span>Notdienst</span><span className="schema-anruf">Anrufen</span>
            <em className="schema-marke">4</em>
          </div>
        </div>
        <div className="schema-pfeil" />
        <div className="schema-zielseite">
          <div className="schema-zeile-klein">musterdach.de/dachsanierung</div>
          <div className="schema-balken lang" />
          <div className="schema-balken" />
          <div className="schema-formular">Angebot anfordern<em className="schema-marke">5</em></div>
        </div>
      </div>
      <Legende punkte={punkte} />
      <figcaption>Schematische Darstellung, kein echtes Suchergebnis. Betrieb und Adresse sind erfunden.</figcaption>
    </figure>
  );
}

/** SEO: die drei Plätze auf einer lokalen Suchergebnisseite. */
export function LokaleSucheSchema() {
  const punkte: Marke[] = [
    { nr: "1", titel: "Anzeigen", text: "Nur sichtbar, solange Budget läuft. Das ist Google Ads, nicht SEO." },
    { nr: "2", titel: "Kartenansicht: drei Betriebe", text: "Hier entscheiden Unternehmensprofil, Bewertungen und Nähe. Der Hebel, den kleine Betriebe am ehesten bewegen können." },
    { nr: "3", titel: "Organische Treffer", text: "Dauerhaft, ohne Klickpreis. Hier wirken Inhalte, Technik und saubere Seitenstruktur." },
  ];
  return (
    <figure className="schema-figur" aria-label="Schematischer Aufbau einer lokalen Suchergebnisseite">
      <div className="schema-serp" aria-hidden="true">
        <div className="schema-suche"><i /> <span>dachdecker in der nähe</span></div>
        <div className="schema-block gedimmt">
          <div className="schema-zeile-klein"><b>Anzeige</b></div>
          <div className="schema-balken lang" /><div className="schema-balken" />
          <em className="schema-marke">1</em>
        </div>
        <div className="schema-block hervorgehoben">
          <div className="schema-zeile-klein">Unternehmen in der Nähe</div>
          <div className="schema-karte" />
          {["Betrieb A", "Betrieb B", "Betrieb C"].map((n) => (
            <div className="schema-lokal" key={n}><b>{n}</b><span>★★★★★ · Bewertungen · Website · Route</span></div>
          ))}
          <em className="schema-marke">2</em>
        </div>
        <div className="schema-block hervorgehoben">
          <div className="schema-balken lang" /><div className="schema-balken" />
          <div className="schema-balken lang" /><div className="schema-balken kurz" />
          <em className="schema-marke">3</em>
        </div>
      </div>
      <Legende punkte={punkte} />
      <figcaption>Schematische Darstellung, kein echtes Suchergebnis. Sterne und Betriebe sind Platzhalter.</figcaption>
    </figure>
  );
}
