"use client";

import { useEffect, useState } from "react";

/**
 * Abspielbarer Beispielablauf für die KI-Vorsortierung von Anfragen. Kunde,
 * Betrieb und Nachrichten sind erfunden; die Schritte entsprechen dem, was wir
 * für Handwerk und Dienstleister bauen. Respektiert prefers-reduced-motion.
 */

type Schritt = {
  tag: string;
  titel: string;
  text: string;
  art: "kunde" | "system" | "mensch" | "betrieb" | "ablage";
  inhalt: string | string[];
};

const SCHRITTE: Schritt[] = [
  {
    tag: "Eingang",
    titel: "Eine Anfrage kommt über die Website",
    text: "Frei formuliert, ohne Adresse, ohne Fotos. So sehen die meisten Anfragen aus.",
    art: "kunde",
    inhalt: "Hallo, bei uns tropft es bei Regen durch die Decke im Obergeschoss. Können Sie sich das anschauen und ein Angebot machen? Wann hätten Sie Zeit?",
  },
  {
    tag: "KI bereitet vor",
    titel: "Das System erkennt, worum es geht",
    text: "Leistung, Dringlichkeit und fehlende Angaben werden erkannt, ein Antwortentwurf im Ton des Betriebs entsteht.",
    art: "system",
    inhalt: ["Leistung: Dachreparatur", "Dringlichkeit: hoch, Wassereintritt", "Fehlt: Adresse, Fotos der Stelle", "Vorschlag: zwei Termine anbieten, Fotos erbitten"],
  },
  {
    tag: "Mensch prüft",
    titel: "Ein Blick, eine Korrektur, freigeben",
    text: "Der Mitarbeiter sieht Zusammenfassung und Entwurf in einem Bild. Niemand antwortet automatisch an Kunden, ohne dass ein Mensch es gesehen hat.",
    art: "mensch",
    inhalt: "Entwurf passt. Donnerstag ist voll, ich tausche gegen Freitag früh. Freigeben.",
  },
  {
    tag: "Antwort",
    titel: "Die Antwort geht innerhalb von Minuten raus",
    text: "Nicht am nächsten Tag, nicht nach Feierabend. Der Kunde bekommt Termine, solange er noch sucht.",
    art: "betrieb",
    inhalt: "Guten Tag, danke für Ihre Nachricht. Bei Wassereintritt kommen wir zeitnah vorbei. Passt Ihnen Mittwoch 8 Uhr oder Freitag 7:30 Uhr? Bitte schicken Sie uns noch Ihre Adresse und, wenn möglich, zwei Fotos der nassen Stelle. Viele Grüße, Ihr Dachdeckerteam",
  },
  {
    tag: "Ablage",
    titel: "Alles landet dort, wo das Team arbeitet",
    text: "Anfrage, Antwort und Status stehen im Postfach, in der Tabelle oder im CRM. Nichts geht verloren, nichts wird doppelt erfasst.",
    art: "ablage",
    inhalt: ["Status: Termin vorgeschlagen", "Zuständig: Büro", "Wiedervorlage: in zwei Tagen, falls keine Antwort", "Nach Auftrag: Bewertungsbitte automatisch"],
  },
];

export default function AblaufSimulator() {
  const [schritt, setSchritt] = useState(0);
  const [laeuft, setLaeuft] = useState(false);
  const [ruhig, setRuhig] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setRuhig(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!laeuft) return;
    if (schritt >= SCHRITTE.length - 1) {
      setLaeuft(false);
      return;
    }
    const t = window.setTimeout(() => setSchritt((s) => s + 1), ruhig ? 2600 : 2200);
    return () => window.clearTimeout(t);
  }, [laeuft, schritt, ruhig]);

  const start = () => {
    setSchritt(0);
    setLaeuft(true);
  };
  const aktuell = SCHRITTE[schritt];

  return (
    <div className={`ablauf${ruhig ? " ruhig" : ""}`}>
      <div className="ab-kopf">
        <div className="ab-leiste" role="tablist" aria-label="Schritte des Beispielablaufs">
          {SCHRITTE.map((s, i) => (
            <button
              type="button"
              key={s.tag}
              role="tab"
              aria-selected={i === schritt}
              className={`ab-schritt${i === schritt ? " aktiv" : ""}${i < schritt ? " erledigt" : ""}`}
              onClick={() => { setLaeuft(false); setSchritt(i); }}
            >
              <i>{i + 1}</i>
              <span>{s.tag}</span>
            </button>
          ))}
        </div>
        <div className="ab-steuerung">
          {laeuft ? (
            <button type="button" className="btn-text" onClick={() => setLaeuft(false)}>Pause</button>
          ) : (
            <button type="button" className="btn-primary" onClick={start}>
              {schritt >= SCHRITTE.length - 1 ? "Noch einmal abspielen" : "Ablauf abspielen"}
            </button>
          )}
          {!laeuft && schritt < SCHRITTE.length - 1 && (
            <button type="button" className="btn-text" onClick={() => setSchritt((s) => s + 1)}>Nächster Schritt →</button>
          )}
        </div>
      </div>

      <div className="ab-buehne">
        <div className="ab-verlauf" aria-live="polite">
          {SCHRITTE.slice(0, schritt + 1).map((s, i) => (
            <div className={`ab-nachricht ${s.art}${i === schritt ? " neu" : ""}`} key={s.tag}>
              <span className="ab-von">
                {s.art === "kunde" ? "Kunde (erfunden)" : s.art === "system" ? "KI-Vorbereitung" : s.art === "mensch" ? "Mitarbeiter" : s.art === "betrieb" ? "Betrieb an Kunde" : "Ablage"}
              </span>
              {Array.isArray(s.inhalt) ? (
                <ul>
                  {s.inhalt.map((z) => <li key={z}>{z}</li>)}
                </ul>
              ) : (
                <p>{s.inhalt}</p>
              )}
            </div>
          ))}
        </div>
        <aside className="ab-erklaerung">
          <span className="ab-tag">Schritt {schritt + 1} von {SCHRITTE.length}</span>
          <h3>{aktuell.titel}</h3>
          <p>{aktuell.text}</p>
          <small>Beispielablauf mit erfundenem Kunden und erfundenen Nachrichten. Zeiten und Termine sind Platzhalter.</small>
        </aside>
      </div>
    </div>
  );
}
