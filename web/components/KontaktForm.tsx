"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

/** Kontaktformular — legt die Anfrage via /api/kontakt in MailerLite an. */
export default function KontaktForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
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
        body: JSON.stringify({ name, email, telefon }),
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
        <b>Anfrage angekommen!</b> Wir melden uns innerhalb eines Werktags bei
        dir — meist deutlich schneller.
      </div>
    );
  }

  return (
    <form className="kontakt-form" onSubmit={submit} noValidate>
      <label className="form-label" htmlFor="k-name">
        Wie heißt du?
      </label>
      <input
        id="k-name"
        className="form-field"
        type="text"
        placeholder="Vor- und Nachname"
        autoComplete="name"
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        id="k-telefon"
        className="form-field"
        type="tel"
        placeholder="Telefon (optional)"
        autoComplete="tel"
        value={telefon}
        onChange={(e) => setTelefon(e.target.value)}
      />
      <button className="btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Wird gesendet…" : "Erstgespräch anfragen"}
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      {status === "error" && <div className="form-error" role="alert">{error}</div>}
      <div className="form-privacy">
        Unverbindlich & kostenlos. Deine Daten werden nur für die Kontaktaufnahme genutzt.
      </div>
    </form>
  );
}
