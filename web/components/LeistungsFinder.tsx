"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { serviceRoutes } from "@/lib/routes";

/**
 * Leistungs-Finder: vier Fragen, eine Empfehlung aus den acht Leistungen.
 * Die Zuordnung ist eine einfache Gewichtung; das Ergebnis ist ein Startpunkt
 * fürs Erstgespräch, kein Angebot.
 */

type Leistung = keyof typeof serviceRoutes;
type Option = { text: string; punkte: Partial<Record<Leistung, number>> };
type Frage = { frage: string; optionen: Option[] };

const FRAGEN: Frage[] = [
  {
    frage: "Was soll als Erstes passieren?",
    optionen: [
      { text: "Mehr Anfragen von Kunden", punkte: { webdesign: 2, "google-ads": 2, "meta-ads": 1, "landingpages-funnels": 1 } },
      { text: "Bewerbungen von Fachkräften", punkte: { mitarbeitergewinnung: 3, "meta-ads": 1, "content-produktion": 1 } },
      { text: "Bekannter werden in der Region", punkte: { "meta-ads": 2, "content-produktion": 2, seo: 1 } },
      { text: "Weniger Zeit im Alltag verlieren", punkte: { "ki-automatisierung": 3, "landingpages-funnels": 1 } },
    ],
  },
  {
    frage: "Wie steht deine Website heute da?",
    optionen: [
      { text: "Es gibt keine, oder sie ist veraltet", punkte: { webdesign: 3, seo: 1 } },
      { text: "Sie ist okay, bringt aber keine Anfragen", punkte: { seo: 2, "landingpages-funnels": 2, "google-ads": 1 } },
      { text: "Sie ist gut, mir fehlt Reichweite", punkte: { "meta-ads": 2, "google-ads": 2, "content-produktion": 1 } },
    ],
  },
  {
    frage: "Wie dringend ist es?",
    optionen: [
      { text: "In den nächsten Wochen soll etwas laufen", punkte: { "google-ads": 2, "meta-ads": 2, "landingpages-funnels": 1 } },
      { text: "In den nächsten Monaten planbar aufbauen", punkte: { seo: 2, webdesign: 1, "content-produktion": 1 } },
      { text: "Langfristig, ohne Druck", punkte: { seo: 2, "content-produktion": 1, "ki-automatisierung": 1 } },
    ],
  },
  {
    frage: "Was hast du selbst an Material?",
    optionen: [
      { text: "Fotos und Videos aus dem Betrieb", punkte: { "content-produktion": 1, "meta-ads": 1 } },
      { text: "Wenig, das muss erst entstehen", punkte: { "content-produktion": 2 } },
      { text: "Ich weiß nicht, was man braucht", punkte: { webdesign: 1, seo: 1 } },
    ],
  },
];

const LEISTUNGEN: Record<Leistung, { titel: string; warum: string }> = {
  webdesign: { titel: "Webdesign", warum: "Ohne eine Website, die erklärt und zur Anfrage führt, verpufft jede andere Maßnahme. Hier beginnt es." },
  "meta-ads": { titel: "Meta Ads", warum: "Facebook und Instagram erreichen Menschen in deiner Region, bevor sie suchen. Schnell startbar, gut steuerbar." },
  "content-produktion": { titel: "Social Content & Reels", warum: "Echte Einblicke aus dem Betrieb sind das Material, das Reichweite und Anzeigen überhaupt erst tragen." },
  "ki-automatisierung": { titel: "KI-Prozesse & Automatisierung", warum: "Wiederkehrende Abläufe wie Anfragen, Angebote und Nachfassen laufen von allein, du gewinnst Stunden pro Woche." },
  "landingpages-funnels": { titel: "Landingpages & Funnels", warum: "Eine Seite für ein Angebot, auf die Anzeigen führen. Der kürzeste Weg von Interesse zu Anfrage." },
  mitarbeitergewinnung: { titel: "Mitarbeitergewinnung", warum: "Karriereseite und Kampagnen erreichen Fachkräfte, die gerade nicht aktiv suchen, aber wechseln würden." },
  "google-ads": { titel: "Google Ads", warum: "Wer bei Google sucht, hat Bedarf. Anzeigen bringen dich genau in diesem Moment nach vorn." },
  seo: { titel: "SEO-Grundlagen & Sichtbarkeit", warum: "Dauerhaft gefunden werden, ohne für jeden Klick zu zahlen. Braucht Monate, wirkt dann über Jahre." },
};

export default function LeistungsFinder() {
  const [antworten, setAntworten] = useState<(number | null)[]>(FRAGEN.map(() => null));
  const fertig = antworten.every((a) => a !== null);
  const aktuelleFrage = antworten.findIndex((a) => a === null);

  const rangliste = useMemo(() => {
    const summe: Record<string, number> = {};
    antworten.forEach((a, i) => {
      if (a === null) return;
      Object.entries(FRAGEN[i].optionen[a].punkte).forEach(([k, v]) => {
        summe[k] = (summe[k] ?? 0) + (v ?? 0);
      });
    });
    return (Object.keys(LEISTUNGEN) as Leistung[])
      .map((k) => ({ key: k, punkte: summe[k] ?? 0 }))
      .sort((a, b) => b.punkte - a.punkte);
  }, [antworten]);

  const erste = rangliste[0];
  const weitere = rangliste.slice(1, 3).filter((r) => r.punkte > 0);

  return (
    <div className="finder">
      <ol className="finder-fragen">
        {FRAGEN.map((f, i) => {
          const offen = i === aktuelleFrage || antworten[i] !== null;
          return (
            <li key={f.frage} className={`finder-frage${antworten[i] !== null ? " beantwortet" : ""}${i === aktuelleFrage ? " aktiv" : ""}`}>
              <span className="finder-nr">{String(i + 1).padStart(2, "0")}</span>
              <div className="finder-inhalt">
                <b>{f.frage}</b>
                {offen && (
                  <div className="finder-optionen" role="group" aria-label={f.frage}>
                    {f.optionen.map((o, j) => (
                      <button
                        type="button"
                        key={o.text}
                        className={`finder-option${antworten[i] === j ? " gewaehlt" : ""}`}
                        aria-pressed={antworten[i] === j}
                        onClick={() => setAntworten((alt) => alt.map((v, k) => (k === i ? j : v)))}
                      >
                        {o.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <aside className={`finder-ergebnis${fertig ? " fertig" : ""}`} aria-live="polite">
        {fertig ? (
          <>
            <span className="finder-tag">Unsere Empfehlung für den Start</span>
            <h3>{LEISTUNGEN[erste.key].titel}</h3>
            <p>{LEISTUNGEN[erste.key].warum}</p>
            {weitere.length > 0 && (
              <div className="finder-weitere">
                <span>Dazu passt</span>
                {weitere.map((w) => (
                  <Link key={w.key} href={serviceRoutes[w.key]}>{LEISTUNGEN[w.key].titel} →</Link>
                ))}
              </div>
            )}
            <div className="finder-aktionen">
              <Link className="btn-primary" href={serviceRoutes[erste.key]}>{LEISTUNGEN[erste.key].titel} ansehen</Link>
              <Link className="btn-text" href="/kontakt">Im Erstgespräch besprechen →</Link>
            </div>
            <button type="button" className="finder-reset" onClick={() => setAntworten(FRAGEN.map(() => null))}>
              Von vorn beginnen
            </button>
            <small>Eine Einschätzung aus vier Antworten, kein Angebot. Was wirklich passt, klären wir im Gespräch.</small>
          </>
        ) : (
          <>
            <span className="finder-tag">Leistungs-Finder</span>
            <h3>Vier Fragen, eine Empfehlung</h3>
            <p>Beantworte die Fragen links, dann siehst du hier, womit du am sinnvollsten anfängst und was dazu passt.</p>
            <div className="finder-fortschritt" aria-hidden="true">
              {FRAGEN.map((_, i) => (
                <i key={i} className={antworten[i] !== null ? "voll" : ""} />
              ))}
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
