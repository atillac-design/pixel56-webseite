"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

/** Kontaktformular — sendet eine Projektanfrage an /api/kontakt. */
export default function KontaktForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [leistung, setLeistung] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, telefon, leistung, nachricht, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Etwas ist schiefgelaufen. Bitte versuche es erneut.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Keine Verbindung. Bitte versuche es erneut.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <b>Danke für deine Anfrage!</b> Deine Nachricht wurde an Pixel56 übermittelt.
      </div>
    );
  }

  return (
    <form className="kontakt-form" onSubmit={submit}>
      <label className="form-label" htmlFor="k-name">
        Wie heißt du?
      </label>
      <input
        id="k-name"
        className="form-field"
        type="text"
        placeholder="Vor- und Nachname"
        autoComplete="name"
        required
        maxLength={120}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="form-label" htmlFor="k-email">
        Wie erreichen wir dich?
      </label>
      <input
        id="k-email"
        className="form-field"
        type="email"
        placeholder="deine@email.de"
        autoComplete="email"
        required
        maxLength={254}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="form-label" htmlFor="k-telefon">Telefon (optional)</label>
      <input
        id="k-telefon"
        className="form-field"
        type="tel"
        placeholder="Telefon (optional)"
        autoComplete="tel"
        maxLength={40}
        value={telefon}
        onChange={(e) => setTelefon(e.target.value)}
      />
      <label className="form-label" htmlFor="k-leistung">Wobei können wir helfen?</label>
      <select id="k-leistung" className="form-field" required value={leistung} onChange={(e) => setLeistung(e.target.value)}>
        <option value="">Bitte auswählen</option>
        <option value="Webdesign">Webdesign</option>
        <option value="Meta Ads">Meta Ads</option>
        <option value="Social Content & Reels">Social Content &amp; Reels</option>
        <option value="KI-Prozesse">KI-Prozesse</option>
        <option value="Mehrere Leistungen">Mehrere Leistungen</option>
        <option value="Anderes">Anderes</option>
      </select>
      <label className="form-label" htmlFor="k-nachricht">Erzähl uns kurz von deinem Vorhaben</label>
      <textarea id="k-nachricht" className="form-field" required minLength={10} maxLength={3000} rows={4} placeholder="Was möchtest du erreichen?" value={nachricht} onChange={(e) => setNachricht(e.target.value)} />
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="k-website">Website</label>
        <input id="k-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <button className="btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Wird gesendet…" : "Erstgespräch anfragen"}
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      {status === "error" && <div className="form-error" role="alert">{error}</div>}
      <div className="form-privacy">
        Unverbindlich &amp; kostenlos. Details zur Datenverarbeitung findest du in unserer <a href="/datenschutz">Datenschutzerklärung</a>.
      </div>
    </form>
  );
}
