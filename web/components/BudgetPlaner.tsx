"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { getMetaBranche, metaBranchen } from "@/lib/meta-ads-branchen";

/**
 * Budget-Planer für Anzeigen: rechnet ausschließlich mit den Angaben des
 * Besuchers (Auftragswert, Wunschaufträge, Werbeanteil, Anfragen je Auftrag).
 * Er nennt keine Branchenwerte und verspricht keine Ergebnisse; er zeigt den
 * Rahmen, in dem sich Anzeigen für den Betrieb rechnen, und die Rechnung dazu.
 */

type Feld = { key: keyof Werte; label: string; hinweis: string; min: number; max: number; schritt: number; einheit: string };
type Werte = { auftragswert: number; auftraege: number; anteil: number; anfragenJeAuftrag: number };

const FELDER: Feld[] = [
  { key: "auftragswert", label: "Was ist dir ein neuer Auftrag im Schnitt wert?", hinweis: "Umsatz je Auftrag, grob geschätzt.", min: 100, max: 50000, schritt: 100, einheit: "€" },
  { key: "auftraege", label: "Wie viele zusätzliche Aufträge pro Monat willst du?", hinweis: "Nur die, die über Anzeigen kommen sollen.", min: 1, max: 50, schritt: 1, einheit: "" },
  { key: "anteil", label: "Wie viel vom Auftragswert darfst du für Werbung ausgeben?", hinweis: "Viele Betriebe setzen hier einen festen Anteil an.", min: 1, max: 40, schritt: 1, einheit: "%" },
  { key: "anfragenJeAuftrag", label: "Wie viele Anfragen brauchst du für einen Auftrag?", hinweis: "Aus deiner Erfahrung: Wie viele Gespräche führen zu einem Abschluss?", min: 1, max: 20, schritt: 1, einheit: "" },
];

const START: Werte = { auftragswert: 2500, auftraege: 3, anteil: 10, anfragenJeAuftrag: 4 };

const euro = (n: number) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: n < 100 ? 2 : 0 }).format(n);
const zahl = (n: number) => new Intl.NumberFormat("de-DE").format(n);
const euroGanz = (n: number) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

export default function BudgetPlaner() {
  const [w, setW] = useState<Werte>(START);
  const [angepasst, setAngepasst] = useState(false);
  const [brancheId, setBrancheId] = useState("");
  const id = useId();
  const branche = getMetaBranche(brancheId);

  const budget = w.auftraege * w.auftragswert * (w.anteil / 100);
  const anfragen = w.auftraege * w.anfragenJeAuftrag;
  const maxJeAnfrage = anfragen > 0 ? budget / anfragen : 0;
  const tag = budget / 30;

  const setze = (key: keyof Werte, wert: number) => {
    setAngepasst(true);
    setW((alt) => ({ ...alt, [key]: wert }));
  };

  return (
    <div className="budget-planer">
      <form className="bp-eingaben" onSubmit={(e) => e.preventDefault()}>
        <div className="bp-kopf">
          <span className="bp-tag">Budget-Planer</span>
          <span className={`bp-hinweis${angepasst ? "" : " beispiel"}`}>
            {angepasst ? "Deine Angaben" : "Beispielwerte, bitte anpassen"}
          </span>
        </div>
        <div className="bp-feld">
          <label htmlFor={`${id}-branche`}>Deine Branche, zum Vergleich mit veröffentlichten Richtwerten</label>
          <select id={`${id}-branche`} className="bp-select" value={brancheId} onChange={(e) => setBrancheId(e.target.value)}>
            <option value="">Keine Auswahl</option>
            {metaBranchen.map((b) => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
          <small>Optional. Die Richtwerte stammen aus fremden Veröffentlichungen, nicht aus unseren Kampagnen.</small>
        </div>
        {FELDER.map((f) => {
          const feldId = `${id}-${f.key}`;
          return (
            <div className="bp-feld" key={f.key}>
              <label htmlFor={feldId}>{f.label}</label>
              <div className="bp-zeile">
                <input
                  type="range"
                  id={feldId}
                  min={f.min}
                  max={f.max}
                  step={f.schritt}
                  value={w[f.key]}
                  onChange={(e) => setze(f.key, Number(e.target.value))}
                />
                <div className="bp-wert">
                  <input
                    type="number"
                    aria-label={`${f.label} (Zahl)`}
                    min={f.min}
                    max={f.max}
                    step={f.schritt}
                    value={w[f.key]}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      if (Number.isFinite(v)) setze(f.key, Math.min(f.max, Math.max(f.min, v)));
                    }}
                  />
                  {f.einheit && <span>{f.einheit}</span>}
                </div>
              </div>
              <small>{f.hinweis}</small>
            </div>
          );
        })}
      </form>

      <div className="bp-ergebnis" aria-live="polite">
        <span className="bp-tag">Dein Rahmen</span>
        <div className="bp-zahl">
          <b>{euro(budget)}</b>
          <span>Werbebudget pro Monat, bei dem sich {zahl(w.auftraege)} {w.auftraege === 1 ? "Auftrag" : "Aufträge"} für dich rechnen</span>
        </div>
        <dl className="bp-liste">
          <div>
            <dt>Anfragen, die du dafür brauchst</dt>
            <dd>{zahl(anfragen)} pro Monat</dd>
          </div>
          <div>
            <dt>Was eine Anfrage höchstens kosten darf</dt>
            <dd>{euro(maxJeAnfrage)}</dd>
          </div>
          <div>
            <dt>Entspricht etwa</dt>
            <dd>{euro(tag)} pro Tag</dd>
          </div>
        </dl>
        <p className="bp-rechnung">
          Rechnung: {zahl(w.auftraege)} × {euro(w.auftragswert)} × {zahl(w.anteil)} % = {euro(budget)}. Geteilt durch {zahl(anfragen)} Anfragen ergibt {euro(maxJeAnfrage)} je Anfrage.
        </p>
        {branche ? (
          <div className={`bp-vergleich ${maxJeAnfrage < branche.spanneVon ? "unter" : maxJeAnfrage > branche.spanneBis ? "ueber" : "innerhalb"}`}>
            <b>
              Veröffentlichte Richtwerte für {branche.name}: etwa {euroGanz(branche.spanneVon)} bis {euroGanz(branche.spanneBis)} je {branche.zielTyp}.
            </b>
            <span>
              {maxJeAnfrage < branche.spanneVon
                ? `Dein Höchstpreis von ${euro(maxJeAnfrage)} liegt darunter. Dann müssen Auftragswert, Werbeanteil oder Abschlussquote besser werden, bevor Anzeigen sich rechnen.`
                : maxJeAnfrage > branche.spanneBis
                  ? `Dein Höchstpreis von ${euro(maxJeAnfrage)} liegt darüber. Das lässt Spielraum, heißt aber nicht, dass Anfragen automatisch günstiger werden.`
                  : `Dein Höchstpreis von ${euro(maxJeAnfrage)} liegt innerhalb der Spanne. Realistisch, wenn Angebot, Zielseite und Creatives stimmen.`}
            </span>
            <small>{branche.einordnung} Quellen stehen im Abschnitt „Worauf es je Branche ankommt“.</small>
          </div>
        ) : null}
        <p className="bp-note">
          Das ist dein Rahmen, kein Versprechen. Ob Anfragen in deiner Branche und Region darunter liegen, hängt von Angebot, Zielseite und Creatives ab. Die Betreuung durch uns kommt als fester Betrag dazu, nicht als Prozent vom Budget.
        </p>
        <Link className="btn-primary bp-cta" href="/kontakt">
          Rahmen im Erstgespräch prüfen
        </Link>
      </div>
    </div>
  );
}
