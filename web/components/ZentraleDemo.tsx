"use client";

import { useMemo, useState, type CSSProperties } from "react";
import ZentraleSzene, { type SzeneBereich } from "@/components/ZentraleSzene";

/**
 * Klickbare Beispiel-Zentrale: ein erfundener Dachdeckerbetrieb mit sechs
 * Bereichen, Aufgaben, Zuständigkeiten und Anbindungen. Bereich antippen,
 * Aufgaben abhaken, „Was steht heute an?“ erzeugt einen Tagesplan aus den
 * offenen Aufgaben. Alle Daten sind erfunden und so gekennzeichnet.
 */

type Aufgabe = { id: string; text: string; wer: string; bis: string; prio: 1 | 2 | 3; erledigt: boolean };
type Bereich = {
  id: string;
  name: string;
  farbe: string;
  x: number;
  y: number;
  h: number;
  mitte?: boolean;
  karte?: SzeneBereich["karte"];
  verantwortlich: string;
  ziel: string;
  anbindungen: string[];
  aufgaben: Aufgabe[];
};

const START: Bereich[] = [
  {
    id: "unternehmen", name: "Dein Unternehmen", farbe: "#d82f49", x: 1, y: 1, h: 72, mitte: true,
    verantwortlich: "Inhaber", ziel: "Mehr Anfragen aus der Region, ohne dass der Tag länger wird.",
    anbindungen: ["Kalender", "E-Mail-Postfach", "Buchhaltung"],
    aufgaben: [
      { id: "u1", text: "Angebot für Familie K. nachfassen", wer: "Inhaber", bis: "heute", prio: 1, erledigt: false },
      { id: "u2", text: "Rechnungen der Woche freigeben", wer: "Büro", bis: "Freitag", prio: 2, erledigt: false },
      { id: "u3", text: "Teamrunde: nächste Baustellen verteilen", wer: "Inhaber", bis: "Montag", prio: 3, erledigt: true },
    ],
  },
  {
    id: "marketing", name: "Marketing & Anzeigen", farbe: "#6b5bd6", x: 0, y: 0, h: 42,
    verantwortlich: "Agentur", ziel: "Anzeigen laufen konstant, der Betrieb gibt nur noch frei.",
    anbindungen: ["Meta Ads", "Google Business Profile"],
    aufgaben: [
      { id: "m1", text: "Neue Anzeigenmotive freigeben", wer: "Inhaber", bis: "Mittwoch", prio: 2, erledigt: false },
      { id: "m2", text: "Budget für den Monat bestätigen", wer: "Inhaber", bis: "erledigt", prio: 3, erledigt: true },
      { id: "m3", text: "Auswertung vom Vormonat lesen", wer: "Inhaber", bis: "diese Woche", prio: 3, erledigt: true },
    ],
  },
  {
    id: "website", name: "Website & Google", farbe: "#3f80fd", x: 1, y: 0, h: 48, karte: "rechts",
    verantwortlich: "Agentur", ziel: "Bei Google gefunden werden, Bewertungen beantworten, Seite aktuell halten.",
    anbindungen: ["Search Console", "Google Business Profile", "Bewertungen"],
    aufgaben: [
      { id: "w1", text: "Drei Fotos von der Baustelle Neuwied schicken", wer: "Meister", bis: "Freitag", prio: 2, erledigt: false },
      { id: "w2", text: "Öffnungszeiten für den Feiertag eintragen", wer: "Büro", bis: "erledigt", prio: 3, erledigt: true },
      { id: "w3", text: "Zwei neue Bewertungen beantworten", wer: "Inhaber", bis: "heute", prio: 2, erledigt: false },
    ],
  },
  {
    id: "funnel", name: "Funnel & Anfragen", farbe: "#f08a2e", x: 2, y: 0, h: 50, karte: "rechts",
    verantwortlich: "Büro", ziel: "Jede Anfrage bekommt am selben Tag eine Antwort.",
    anbindungen: ["Kontaktformular", "WhatsApp", "CRM"],
    aufgaben: [
      { id: "f1", text: "Vier neue Anfragen sichten und zuordnen", wer: "Büro", bis: "heute", prio: 1, erledigt: false },
      { id: "f2", text: "Rückruf Herr M. wegen Angebot Dachfenster", wer: "Inhaber", bis: "heute", prio: 1, erledigt: false },
      { id: "f3", text: "Angebotsvorlage Dachfenster aktualisieren", wer: "Büro", bis: "erledigt", prio: 3, erledigt: true },
    ],
  },
  {
    id: "recruiting", name: "Mitarbeitersuche", farbe: "#2f9e8f", x: 0, y: 2, h: 40, karte: "links",
    verantwortlich: "Inhaber", ziel: "Ein Dachdecker und ein Azubi bis zum Frühjahr.",
    anbindungen: ["Bewerbungsformular", "E-Mail", "Meta Ads"],
    aufgaben: [
      { id: "r1", text: "Stellenanzeige Dachdecker freigeben", wer: "Inhaber", bis: "Donnerstag", prio: 2, erledigt: false },
      { id: "r2", text: "Gespräch mit Bewerber L. am Donnerstag", wer: "Inhaber", bis: "Donnerstag", prio: 2, erledigt: false },
      { id: "r3", text: "Fotos vom Team für die Anzeige", wer: "Meister", bis: "nächste Woche", prio: 3, erledigt: false },
    ],
  },
  {
    id: "automatisierung", name: "Automatisierung (KI)", farbe: "#8b5cf6", x: 2, y: 2, h: 56,
    verantwortlich: "Agentur", ziel: "Anfragen vorsortiert, Antworten vorbereitet, Bericht jeden Montag.",
    anbindungen: ["Make", "MailerLite", "KI-Assistent", "E-Mail-Postfach"],
    aufgaben: [
      { id: "a1", text: "Vorsortierung der Anfragen prüfen", wer: "Büro", bis: "erledigt", prio: 3, erledigt: true },
      { id: "a2", text: "Antwortvorlagen für drei Leistungen freigeben", wer: "Inhaber", bis: "diese Woche", prio: 2, erledigt: false },
      { id: "a3", text: "Wochenbericht einrichten", wer: "Agentur", bis: "erledigt", prio: 3, erledigt: true },
    ],
  },
  {
    id: "content", name: "Content & Social", farbe: "#e06a8a", x: 1, y: 2, h: 36, karte: "unten",
    verantwortlich: "Agentur", ziel: "Zwei Reels im Monat aus dem echten Arbeitsalltag.",
    anbindungen: ["Instagram", "TikTok", "Google Business Profile"],
    aufgaben: [
      { id: "c1", text: "Drehtermin Baustelle Vallendar bestätigen", wer: "Meister", bis: "Mittwoch", prio: 2, erledigt: false },
      { id: "c2", text: "Zwei Reels freigeben", wer: "Inhaber", bis: "diese Woche", prio: 3, erledigt: false },
      { id: "c3", text: "Beitrag zum Azubi-Start veröffentlicht", wer: "Agentur", bis: "erledigt", prio: 3, erledigt: true },
    ],
  },
];

function fortschritt(b: Bereich): number {
  const n = b.aufgaben.length;
  return n ? b.aufgaben.filter((a) => a.erledigt).length / n : 0;
}
function offene(b: Bereich): Aufgabe[] {
  return b.aufgaben.filter((a) => !a.erledigt);
}
function statusText(b: Bereich): string {
  const n = offene(b).length;
  return n === 0 ? "alles erledigt" : n === 1 ? "1 offene Aufgabe" : `${n} offene Aufgaben`;
}
const dringlichkeit = (a: Aufgabe) => (a.bis === "heute" ? 0 : 1) * 10 + a.prio;

export default function ZentraleDemo() {
  const [bereiche, setBereiche] = useState<Bereich[]>(START);
  const [aktiv, setAktiv] = useState("unternehmen");
  const [plan, setPlan] = useState<"aus" | "denkt" | "fertig">("aus");

  const szene: SzeneBereich[] = bereiche.map((b) => ({ id: b.id, x: b.x, y: b.y, h: b.h, farbe: b.farbe, name: b.name, mitte: b.mitte, karte: b.karte, status: statusText(b), anteil: fortschritt(b) }));
  const alle = bereiche.flatMap((b) => b.aufgaben.map((a) => ({ ...a, bereich: b })));
  const gesamtAnteil = alle.length ? alle.filter((a) => a.erledigt).length / alle.length : 0;
  const gewaehlt = bereiche.find((b) => b.id === aktiv) ?? bereiche[0];

  const heute = useMemo(
    () => alle.filter((a) => !a.erledigt).sort((a, b) => dringlichkeit(a) - dringlichkeit(b)).slice(0, 4),
    [alle],
  );
  const personen = useMemo(() => {
    const karte = new Map<string, typeof alle>();
    for (const a of alle) if (!a.erledigt) karte.set(a.wer, [...(karte.get(a.wer) ?? []), a]);
    return Array.from(karte.entries()).sort((x, y) => y[1].length - x[1].length);
  }, [alle]);

  function umschalten(bid: string, aid: string) {
    setBereiche((prev) => prev.map((b) => (b.id !== bid ? b : { ...b, aufgaben: b.aufgaben.map((a) => (a.id !== aid ? a : { ...a, erledigt: !a.erledigt })) })));
    setPlan("aus");
  }
  function tagesplan() {
    setPlan("denkt");
    const sofort = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setPlan("fertig"), sofort ? 0 : 900);
  }

  const erledigtZahl = gewaehlt.aufgaben.filter((a) => a.erledigt).length;

  return (
    <div className="zd">
      <div className="zd-kopf">
        <small>Beispielbetrieb: Dachdeckerei Muster (erfunden) · Inhaber, Büro, Meister, Agentur</small>
        <button type="button" className="zd-knopf" onClick={tagesplan} disabled={plan === "denkt"}>
          {plan === "denkt" ? "KI sortiert …" : "Was steht heute an?"}
        </button>
      </div>

      {plan !== "aus" && (
        <div className="zd-plan" role="status" aria-live="polite">
          <span className="zd-kicker">KI-Vorschlag · Beispiel</span>
          {plan === "denkt" ? (
            <p>Schaut auf offene Aufgaben, Termine und Dringlichkeit …</p>
          ) : (
            <>
              <p><b>{heute.length === 0 ? "Alles erledigt. Heute bleibt Zeit für die Baustelle." : `${["Keine", "Eine Sache", "Zwei Dinge", "Drei Dinge", "Vier Dinge"][heute.length]}, die heute zählen:`}</b></p>
              {heute.length > 0 && (
                <ol>
                  {heute.map((a) => (
                    <li key={a.id}>
                      <button type="button" className="zd-planlink" onClick={() => setAktiv(a.bereich.id)}>{a.text}</button>
                      <small> · {a.wer} · {a.bereich.name}{a.bis === "heute" ? " · heute" : ""}</small>
                    </li>
                  ))}
                </ol>
              )}
              <small>In der echten Zentrale kommt dieser Vorschlag von der KI aus deinen Aufgaben, Terminen und Anfragen. Hake oben etwas ab und frag noch einmal.</small>
            </>
          )}
        </div>
      )}

      <div className="zd-buehne">
        <div className="zd-karte">
          <ZentraleSzene bereiche={szene} aktiv={aktiv} onWahl={setAktiv} hauptzielAnteil={gesamtAnteil} fuss="Beispiel-Daten · zum Durchklicken" />
          <div className="zd-chips" role="tablist" aria-label="Bereich wählen">
            {bereiche.map((b) => (
              <button type="button" key={b.id} className="zd-chip" style={{ "--c": b.farbe } as CSSProperties} aria-pressed={aktiv === b.id} onClick={() => setAktiv(b.id)}>
                <i aria-hidden="true" />
                {b.name}
                {offene(b).length > 0 && <span>{offene(b).length}</span>}
              </button>
            ))}
          </div>
        </div>

        <aside className="zd-panel" style={{ "--c": gewaehlt.farbe } as CSSProperties} aria-live="polite">
          <span className="zd-kicker">{gewaehlt.mitte ? "Übersicht · alle Bereiche" : `Bereich · verantwortlich: ${gewaehlt.verantwortlich}`}</span>
          <h3>{gewaehlt.name}</h3>
          <p>{gewaehlt.ziel}</p>
          <div>
            <div className="zd-balken"><b style={{ width: `${Math.round((gewaehlt.mitte ? gesamtAnteil : fortschritt(gewaehlt)) * 100)}%` }} /></div>
            <div className="zd-zeile">
              <span>{gewaehlt.mitte ? `${alle.filter((a) => a.erledigt).length} von ${alle.length} Aufgaben erledigt` : `${erledigtZahl} von ${gewaehlt.aufgaben.length} erledigt`}</span>
              <span>{gewaehlt.mitte ? "gesamt" : statusText(gewaehlt)}</span>
            </div>
          </div>

          {gewaehlt.mitte && (
            <>
              <span className="zd-ueberschrift">Bereiche</span>
              <ul className="zd-liste">
                {bereiche.filter((b) => !b.mitte).map((b) => (
                  <li key={b.id}>
                    <button type="button" onClick={() => setAktiv(b.id)} style={{ "--c": b.farbe } as CSSProperties}>
                      <span>{b.name}</span>
                      <span className="zd-klein">{statusText(b)}</span>
                      <span className="zd-balken"><b style={{ width: `${Math.round(fortschritt(b) * 100)}%` }} /></span>
                    </button>
                  </li>
                ))}
              </ul>
              <span className="zd-ueberschrift">Wer macht was diese Woche</span>
              <ul className="zd-personen">
                {personen.map(([wer, liste]) => (
                  <li key={wer}>
                    <b>{wer}</b>
                    <span>{liste.length === 1 ? "1 offene Aufgabe" : `${liste.length} offene Aufgaben`}: {liste.slice(0, 2).map((a) => a.text).join(", ")}{liste.length > 2 ? " …" : ""}</span>
                  </li>
                ))}
                {personen.length === 0 && <li><span>Alles erledigt.</span></li>}
              </ul>
            </>
          )}

          <span className="zd-ueberschrift">{gewaehlt.mitte ? "Aufgaben der Geschäftsführung" : "Aufgaben"}</span>
          <ul className="zd-aufgaben">
            {gewaehlt.aufgaben.map((a) => (
              <li key={a.id}>
                <button type="button" className={`zd-aufgabe${a.erledigt ? " erledigt" : ""}`} aria-pressed={a.erledigt} onClick={() => umschalten(gewaehlt.id, a.id)}>
                  <i aria-hidden="true">{a.erledigt ? "✓" : ""}</i>
                  <span>
                    {a.text}
                    <small>{a.wer} · {a.erledigt ? "erledigt" : `bis ${a.bis}`}</small>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <span className="zd-ueberschrift">Angebunden (Beispiel)</span>
          <div className="zd-tags">
            {gewaehlt.anbindungen.map((t) => <span className="zd-tag" key={t}>{t}</span>)}
          </div>
        </aside>
      </div>
      <p className="zd-fuss">Alle Namen, Aufgaben und Anbindungen sind erfunden. Für deinen Betrieb kommen deine Bereiche, deine Leute und die Programme rein, die du schon nutzt.</p>
    </div>
  );
}
