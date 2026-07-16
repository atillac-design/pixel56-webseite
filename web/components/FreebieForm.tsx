"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

/** E-Mail-Formular der Freebie-Seiten — legt den Kontakt via /api/lead in MailerLite an. */
export default function FreebieForm({ quelle, label }: { quelle: string; label: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, quelle }),
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
        <b>Fast geschafft!</b> Schau in dein Postfach — {label} ist unterwegs
        an <b>{email}</b>.
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <label className="form-label" htmlFor="freebie-email">
        Wohin dürfen wir {label} schicken?
      </label>
      <input
        id="freebie-email"
        className="form-field"
        type="email"
        name="email"
        placeholder="deine@email.de"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Wird gesendet…" : "Kostenlos herunterladen"}
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 2v9M4 7l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {status === "error" && <div className="form-error" role="alert">{error}</div>}
      <div className="form-privacy">
        Kein Spam. Abmeldung jederzeit mit einem Klick. Datenschutz gilt.
      </div>
    </form>
  );
}
