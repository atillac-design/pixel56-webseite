"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Fragebogen } from "@/lib/fragebogen";
import { site } from "@/lib/site";
import atillaBild from "@/public/bilder/team-atilla-quadrat.webp";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Klick-Fragebogen einer Leistung: links das Versprechen und der Beweis,
 * rechts eine Frage pro Schritt mit Antwortknöpfen, danach Kontaktdaten.
 * Antworten werden erst beim Absenden übertragen (/api/anfrage).
 */
export default function LeistungsAnfrage({ bogen, google }: { bogen: Fragebogen; google?: { bewertung: number; anzahl: number } }) {
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
  const vorherige = schritt > 0 && schritt <= n ? bogen.fragen[schritt - 1] : null;
  const reaktion = vorherige && antworten[schritt - 1] !== null ? vorherige.optionen[antworten[schritt - 1] as number].reaktion : undefined;

  function waehle(i: number) {
    setAntworten((alt) => alt.map((v, k) => (k === schritt ? i : v)));
    const hatHinweis = Boolean(bogen.fragen[schritt].optionen[i].hinweis);
    if (!hatHinweis) window.setTimeout(() => setSchritt((s) => (s === schritt ? s + 1 : s)), 320);
  }

  // Tastatur: Ziffern wählen eine Antwort, Enter geht weiter, Backspace zurück.
  useEffect(() => {
    if (!istFrage) return;
    function onKey(e: KeyboardEvent) {
      const ziel = e.target as HTMLElement | null;
      if (ziel && (ziel.tagName === "INPUT" || ziel.tagName === "TEXTAREA")) return;
      const nr = Number(e.key);
      if (nr >= 1 && nr <= (frage?.optionen.length ?? 0)) waehle(nr - 1);
      else if (e.key === "Enter" && gewaehlt !== null) setSchritt((s) => s + 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schritt, gewaehlt, istFrage]);

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
          name, email, telefon, firma, einwilligung, website,
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
  const vorname = name.trim().split(/\s+/)[0];
  const prozent = Math.round((Math.min(schritt, n + 1) / (n + 1)) * 100);

  return (
    <div className={`anfrage${fertig ? " ist-fertig" : ""}`}>
      <aside className="anfrage-rail">
        <span className="anfrage-rail-tag">Kostenlose Einschätzung</span>
        <h3>{bogen.versprechen}</h3>
        <ul>
          <li>Sechs kurze Fragen, nichts zum Tippen</li>
          <li>Antwort persönlich von Atilla, innerhalb eines Werktags</li>
          <li>Kein Newsletter, kein Verkaufsdruck</li>
        </ul>
        <div className="anfrage-person">
          <Image src={atillaBild} alt="Atilla Ciftcioglu" width={52} height={52} />
          <div>
            <b>Atilla Ciftcioglu</b>
            <span>Gründer · antwortet dir persönlich</span>
          </div>
        </div>
        {google && (
          <div className="anfrage-proof" aria-label={`${google.bewertung.toLocaleString("de-DE", { minimumFractionDigits: 1 })} Sterne bei Google`}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.5-1.1 2.8-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.2v3.1C3.2 21.3 7.3 24 12 24z"/><path fill="#FBBC05" d="M5.3 14.3c-.3-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3V6.6H1.2C.4 8.2 0 10 0 12s.4 3.8 1.2 5.4l4.1-3.1z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C18 1.2 15.2 0 12 0 7.3 0 3.2 2.7 1.2 6.6l4.1 3.1c.9-2.9 3.6-4.9 6.7-4.9z"/></svg>
            <span className="anfrage-sterne" aria-hidden="true">★★★★★</span>
            <span>{google.bewertung.toLocaleString("de-DE", { minimumFractionDigits: 1 })} · {google.anzahl} Bewertungen</span>
          </div>
        )}
      </aside>

      <div className="anfrage-buehne">
        <div className="anfrage-kopf">
          <span className="anfrage-tag">{fertig ? "Angekommen" : istKontakt ? "Letzter Schritt" : `Frage ${schritt + 1} von ${n}`}</span>
          <div className="anfrage-balken" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={prozent}>
            <i style={{ width: `${Math.max(prozent, 6)}%` }} />
          </div>
          {!fertig && <span className="anfrage-rest">{istKontakt ? "30 Sekunden" : `noch ca. ${Math.max(1, n - schritt)} Min.`}</span>}
        </div>

        {reaktion && !fertig && (
          <div className="anfrage-reaktion" key={`r-${schritt}`}>
            <Image src={atillaBild} alt="" width={28} height={28} />
            <p>{reaktion}</p>
          </div>
        )}

        {frage && (
          <div className="anfrage-schritt" key={frage.id}>
            <h4>{frage.frage}</h4>
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
                  <kbd>{i + 1}</kbd>
                  <span>{o.text}</span>
                  <svg className="anfrage-check" viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d="M4 10.5l4 4 8-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              ))}
            </div>
            {gewaehlt !== null && frage.optionen[gewaehlt].hinweis && (
              <p className="anfrage-hinweis" role="note">{frage.optionen[gewaehlt].hinweis}</p>
            )}
            <div className="anfrage-nav">
              {schritt > 0 ? (
                <button type="button" className="anfrage-zurueck" onClick={() => setSchritt((s) => s - 1)}>← Zurück</button>
              ) : <span className="anfrage-tipp">Tipp: Zahlentasten wählen, Enter geht weiter</span>}
              {gewaehlt !== null && (
                <button type="button" className="btn-primary anfrage-weiter" onClick={() => setSchritt((s) => s + 1)}>Weiter →</button>
              )}
            </div>
          </div>
        )}

        {istKontakt && (
          <form className="anfrage-schritt anfrage-kontakt" onSubmit={absenden}>
            <h4>Fast geschafft. Wohin darf die Einschätzung?</h4>
            <p className="anfrage-erklaerung">Du bekommst keine Vorlage, sondern eine Antwort auf genau diese Antworten:</p>
            <ul className="anfrage-chips" aria-label="Deine Antworten">
              {zusammenfassung.map((z) => <li key={z.frage}>{z.antwort}</li>)}
            </ul>
            <div className="anfrage-felder">
              <label><span>Name *</span><input type="text" required minLength={2} maxLength={120} autoComplete="name" placeholder="Vor- und Nachname" value={name} onChange={(e) => setName(e.target.value)} /></label>
              <label><span>E-Mail *</span><input type="email" required maxLength={254} autoComplete="email" placeholder="name@firma.de" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
              <label><span>Telefon <small>für den Rückruf</small></span><input type="tel" maxLength={40} autoComplete="tel" placeholder="+49 …" value={telefon} onChange={(e) => setTelefon(e.target.value)} /></label>
              <label><span>Unternehmen</span><input type="text" maxLength={120} autoComplete="organization" placeholder="Optional" value={firma} onChange={(e) => setFirma(e.target.value)} /></label>
            </div>
            <div className="form-honeypot" aria-hidden="true">
              <label>Website<input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label>
            </div>
            <label className="anfrage-einwilligung">
              <input type="checkbox" required checked={einwilligung} onChange={(e) => setEinwilligung(e.target.checked)} />
              <span>Pixel56 darf mich zu meiner Anfrage kontaktieren. Details in der <a href="/datenschutz">Datenschutzerklärung</a>.</span>
            </label>
            <div className="anfrage-nav">
              <button type="button" className="anfrage-zurueck" onClick={() => setSchritt((s) => s - 1)}>← Zurück</button>
              <button className="btn-primary" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Wird gesendet …" : "Kostenlose Einschätzung anfordern →"}
              </button>
            </div>
            {status === "error" && <div className="form-error" role="alert">{fehler}</div>}
            <p className="anfrage-fuss">Unverbindlich. Deine Daten gehen an Pixel56, an niemanden sonst.</p>
          </form>
        )}

        {fertig && (
          <div className="anfrage-schritt anfrage-danke" role="status">
            <div className="anfrage-haken" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="48" height="48"><circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2.5" /><path d="M14 25l7 7 13-14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h4>Danke{vorname ? `, ${vorname}` : ""}. Das ist angekommen.</h4>
            <p className="anfrage-erklaerung">Du bekommst gleich eine Bestätigung per E-Mail. Der schnellste Weg: Such dir direkt 15 Minuten aus, dann besprechen wir, was bei dir sinnvoll ist. Sonst meldet sich Atilla innerhalb eines Werktags.</p>
            <ul className="anfrage-protokoll">
              {zusammenfassung.map((z) => <li key={z.frage}><span>{z.frage}</span><b>{z.antwort}</b></li>)}
            </ul>
            <div className="anfrage-nav">
              <a className="anfrage-zurueck" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Per WhatsApp ergänzen</a>
              <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">Termin direkt wählen →</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
