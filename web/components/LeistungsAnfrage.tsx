"use client";

import { useState } from "react";
import type { Fragebogen } from "@/lib/fragebogen";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Klick-Fragebogen einer Leistung: eine Frage pro Schritt, Antworten als
 * Knöpfe, danach Kontaktdaten. Antworten werden erst beim Absenden
 * übertragen (/api/anfrage), vorher bleibt alles im Browser.
 */
export default function LeistungsAnfrage({ bogen }: { bogen: Fragebogen }) {
  const n = bogen.fragen.length;
  const [schritt, setSchritt] = useState(0); // 0..n-1 Fragen, n Kontakt, n+1 fertig
  const [antworten, setAntworten] = useState<(number | null)[]>(bogen.fragen.map(() => null));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [firma, setFirma] = useState("");
  const [einwilligung, setEinwilligung] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fehler, setFehler] = useState("");

  const istFrage = schritt < n;
  const istKontakt = schritt === n;
  const fertig = schritt > n;
  const frage = istFrage ? bogen.fragen[schritt] : null;
  const gewaehlt = istFrage ? antworten[schritt] : null;

  function waehle(i: number) {
    setAntworten((alt) => alt.map((v, k) => (k === schritt ? i : v)));
    const hatHinweis = Boolean(bogen.fragen[schritt].optionen[i].hinweis);
    // Kurze Pause, damit die Wahl sichtbar wird; bei einem Hinweis bleibt die Frage offen.
    if (!hatHinweis) window.setTimeout(() => setSchritt((s) => (s === schritt ? s + 1 : s)), 260);
  }

  async function absenden(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setFehler("");
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leistung: bogen.key,
          antworten: bogen.fragen.map((f, i) => ({ frage: f.frage, antwort: antworten[i] === null ? "" : f.optionen[antworten[i] as number].text })),
          name,
          email,
          telefon,
          firma,
          einwilligung,
          website,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setFehler(typeof data.error === "string" ? data.error : "Senden fehlgeschlagen.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setSchritt(n + 1);
    } catch {
      setFehler("Senden fehlgeschlagen. Bitte schreib uns direkt per E-Mail oder WhatsApp.");
      setStatus("error");
    }
  }

  const zusammenfassung = bogen.fragen
    .map((f, i) => (antworten[i] === null ? null : { frage: f.frage, antwort: f.optionen[antworten[i] as number].text }))
    .filter(Boolean) as { frage: string; antwort: string }[];

  return (
    <div className="anfrage" data-schritt={schritt}>
      <div className="anfrage-kopf">
        <span className="anfrage-tag">{fertig ? "Fertig" : istKontakt ? "Letzter Schritt" : `Frage ${schritt + 1} von ${n}`}</span>
        <div className="anfrage-fortschritt" aria-hidden="true">
          {[...Array(n + 1)].map((_, i) => (
            <i key={i} className={i < schritt || fertig ? "voll" : i === schritt ? "aktiv" : ""} />
          ))}
        </div>
      </div>

      {frage && (
        <div className="anfrage-frage" key={frage.id}>
          <h3>{frage.frage}</h3>
          {frage.erklaerung && <p className="anfrage-erklaerung">{frage.erklaerung}</p>}
          <div className="anfrage-optionen" role="group" aria-label={frage.frage}>
            {frage.optionen.map((o, i) => (
              <button
                type="button"
                key={o.text}
                className={`anfrage-option${gewaehlt === i ? " gewaehlt" : ""}`}
                aria-pressed={gewaehlt === i}
                onClick={() => waehle(i)}
              >
                <span>{o.text}</span>
              </button>
            ))}
          </div>
          {gewaehlt !== null && frage.optionen[gewaehlt].hinweis && (
            <p className="anfrage-hinweis" role="note">{frage.optionen[gewaehlt].hinweis}</p>
          )}
          <div className="anfrage-nav">
            {schritt > 0 ? (
              <button type="button" className="anfrage-zurueck" onClick={() => setSchritt((s) => s - 1)}>← Zurück</button>
            ) : <span />}
            {gewaehlt !== null && (
              <button type="button" className="btn-primary anfrage-weiter" onClick={() => setSchritt((s) => s + 1)}>
                Weiter →
              </button>
            )}
          </div>
        </div>
      )}

      {istKontakt && (
        <form className="anfrage-kontakt" onSubmit={absenden} noValidate={false}>
          <h3>Wohin dürfen wir die Einschätzung schicken?</h3>
          <ul className="anfrage-zusammenfassung" aria-label="Deine Antworten">
            {zusammenfassung.map((z) => (
              <li key={z.frage}><b>{z.antwort}</b></li>
            ))}
          </ul>
          <div className="anfrage-felder">
            <label>
              <span>Name *</span>
              <input type="text" required minLength={2} maxLength={120} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              <span>E-Mail *</span>
              <input type="email" required maxLength={254} autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <span>Telefon (für den Rückruf)</span>
              <input type="tel" maxLength={40} autoComplete="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)} />
            </label>
            <label>
              <span>Unternehmen</span>
              <input type="text" maxLength={120} autoComplete="organization" value={firma} onChange={(e) => setFirma(e.target.value)} />
            </label>
          </div>
          <div className="form-honeypot" aria-hidden="true">
            <label>Website<input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label>
          </div>
          <label className="anfrage-einwilligung">
            <input type="checkbox" required checked={einwilligung} onChange={(e) => setEinwilligung(e.target.checked)} />
            <span>
              Pixel56 darf mich zu meiner Anfrage kontaktieren. Details in der <a href="/datenschutz">Datenschutzerklärung</a>.
            </span>
          </label>
          <div className="anfrage-nav">
            <button type="button" className="anfrage-zurueck" onClick={() => setSchritt((s) => s - 1)}>← Zurück</button>
            <button className="btn-primary" type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Wird gesendet …" : "Einschätzung anfordern"}
            </button>
          </div>
          {status === "error" && <div className="form-error" role="alert">{fehler}</div>}
          <p className="anfrage-fuss">Kostenlos und unverbindlich. Deine Antworten gehen direkt an Atilla, nicht in eine Warteschlange.</p>
        </form>
      )}

      {fertig && (
        <div className="anfrage-danke" role="status">
          <h3>Danke, {name.split(" ")[0] || "dir"}. Deine Antworten sind angekommen.</h3>
          <p>Atilla meldet sich innerhalb eines Werktags mit einer ehrlichen Einschätzung. Wenn du schneller reden willst: Termin direkt wählen.</p>
          <ul className="anfrage-zusammenfassung">
            {zusammenfassung.map((z) => (
              <li key={z.frage}><span>{z.frage}</span><b>{z.antwort}</b></li>
            ))}
          </ul>
          <div className="anfrage-nav">
            <a className="btn-text" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Per WhatsApp ergänzen</a>
            <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">Termin direkt wählen →</a>
          </div>
        </div>
      )}
    </div>
  );
}
