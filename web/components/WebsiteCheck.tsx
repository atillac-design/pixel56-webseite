"use client";

import Link from "next/link";
import { useState } from "react";

type Punkt = { key: string; titel: string; status: "gut" | "mittel" | "schlecht"; befund: string; tipp?: string };
type Ergebnis = { url: string; punkte: Punkt[]; gut: number; gesamt: number };

/** Website-Schnellcheck: Adresse eingeben, Grundlagen der Startseite prüfen lassen. */
export default function WebsiteCheck({ kompakt = false }: { kompakt?: boolean }) {
  const [url, setUrl] = useState("");
  const [laden, setLaden] = useState(false);
  const [fehler, setFehler] = useState("");
  const [ergebnis, setErgebnis] = useState<Ergebnis | null>(null);

  async function pruefen(e: React.FormEvent) {
    e.preventDefault();
    if (laden) return;
    setLaden(true);
    setFehler("");
    setErgebnis(null);
    try {
      const res = await fetch("/api/website-check", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setFehler(data.error ?? "Die Prüfung ist fehlgeschlagen. Bitte versuche es erneut.");
        return;
      }
      setErgebnis(data as Ergebnis);
    } catch {
      setFehler("Keine Verbindung. Bitte versuche es erneut.");
    } finally {
      setLaden(false);
    }
  }

  const schlecht = ergebnis?.punkte.filter((p) => p.status === "schlecht").length ?? 0;
  const mittel = ergebnis?.punkte.filter((p) => p.status === "mittel").length ?? 0;

  return (
    <div className={`website-check${kompakt ? " kompakt" : ""}`}>
      <form className="wc-form" onSubmit={pruefen}>
        <label htmlFor="wc-url">Adresse deiner Website</label>
        <div className="wc-zeile">
          <input
            id="wc-url"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="z. B. www.dein-betrieb.de"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            maxLength={300}
          />
          <button type="submit" className="btn-primary" disabled={laden}>
            {laden ? "Prüfe …" : "Jetzt prüfen"}
          </button>
        </div>
        <small>Automatische Schnellprüfung der Startseite. Kein vollständiges Audit, keine Speicherung deiner Adresse.</small>
        {fehler && <p className="wc-fehler" role="alert">{fehler}</p>}
      </form>

      {ergebnis && (
        <div className="wc-ergebnis" aria-live="polite">
          <div className="wc-kopf">
            <div>
              <span className="wc-tag">Ergebnis für</span>
              <b>{ergebnis.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</b>
            </div>
            <div className="wc-score">
              <b>{ergebnis.gut}</b>
              <span>von {ergebnis.gesamt} Punkten in Ordnung</span>
            </div>
          </div>
          <ul className="wc-liste">
            {ergebnis.punkte.map((p) => (
              <li key={p.key} className={`wc-${p.status}`}>
                <i aria-hidden="true" />
                <div>
                  <b>{p.titel}</b>
                  <span>{p.befund}</span>
                  {p.tipp && <small>{p.tipp}</small>}
                </div>
                <em>{p.status === "gut" ? "OK" : p.status === "mittel" ? "Prüfen" : "Handeln"}</em>
              </li>
            ))}
          </ul>
          <div className="wc-fazit">
            <p>
              {schlecht === 0 && mittel === 0
                ? "Die Grundlagen stimmen. Was dieser Check nicht sieht: Ladezeit im Browser, Inhalte, Struktur und Rankings. Genau das schauen wir uns im Erstgespräch an."
                : schlecht > 0
                  ? `${schlecht === 1 ? "Ein Punkt" : `${schlecht} Punkte`} ${schlecht === 1 ? "kostet" : "kosten"} dich wahrscheinlich Besucher oder Anfragen. Was dieser Check nicht sieht: Ladezeit im Browser, Inhalte und Rankings.`
                  : "Nichts Dramatisches, aber Luft nach oben. Was dieser Check nicht sieht: Ladezeit im Browser, Inhalte, Struktur und Rankings."}
            </p>
            <div className="wc-aktionen">
              <Link className="btn-primary" href="/kontakt">Ausführliche Einschätzung im Erstgespräch</Link>
              <Link className="btn-text" href="/checkliste-seo">SEO-Checkliste herunterladen →</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
