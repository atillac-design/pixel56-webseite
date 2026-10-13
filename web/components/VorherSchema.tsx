import type { VorherArt } from "@/lib/projekte";

/**
 * Schematische Darstellung der Ausgangslage für den Vorher-nachher-Vergleich.
 * Kein Screenshot und kein nachgebautes Design eines Kunden, sondern eine
 * neutrale Skizze: keine Website, veralteter Auftritt oder nur Social Media.
 */
export default function VorherSchema({ art, kunde }: { art: VorherArt; kunde: string }) {
  if (art === "keine-website") {
    return (
      <div className="vs vs-suche" aria-hidden="true">
        <div className="vs-suchleiste"><i /><span>{kunde}</span></div>
        <div className="vs-treffer">
          <div className="vs-zeile"><b>Branchenverzeichnis</b><span /><span className="kurz" /></div>
          <div className="vs-zeile"><b>Kartendienst, nur Adresse</b><span /><span className="kurz" /></div>
          <div className="vs-zeile fremd"><b>Mitbewerber mit eigener Website</b><span /><span className="kurz" /></div>
          <div className="vs-zeile fremd"><b>Mitbewerber mit eigener Website</b><span /><span className="kurz" /></div>
        </div>
        <div className="vs-callout">
          <b>Kein eigener Auftritt</b>
          <span>Wer sucht, findet Verzeichnisse und Mitbewerber, aber keine Seite des Betriebs. Aufträge kommen nur über Empfehlung und Telefon.</span>
        </div>
      </div>
    );
  }
  if (art === "social") {
    return (
      <div className="vs vs-social" aria-hidden="true">
        <div className="vs-profil"><i /><div><b /><span /></div></div>
        <div className="vs-kacheln"><span /><span /><span /><span /><span /><span /></div>
        <div className="vs-callout">
          <b>Nur eine Social-Media-Seite</b>
          <span>Beiträge ohne Leistungsübersicht, ohne Anfrageweg, ohne Auffindbarkeit bei Google. Wer nicht folgt, sieht nichts.</span>
        </div>
      </div>
    );
  }
  return (
    <div className="vs vs-alt" aria-hidden="true">
      <div className="vs-alt-kopf"><span /><em>Willkommen auf unserer Homepage</em></div>
      <div className="vs-alt-nav"><span /><span /><span /><span /><span /><span /></div>
      <div className="vs-alt-body">
        <div className="vs-alt-text"><span /><span /><span /><span className="kurz" /><span /><span /><span className="kurz" /></div>
        <div className="vs-alt-seite"><span /><span className="kurz" /><span /></div>
      </div>
      <div className="vs-marken">
        <span>Nicht für Handys gebaut</span>
        <span>Kontakt versteckt</span>
        <span>Keine Leistungsseiten</span>
      </div>
    </div>
  );
}
