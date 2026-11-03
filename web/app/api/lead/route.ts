import { NextResponse } from "next/server";
import { pruefeFormular } from "@/lib/formschutz";

/**
 * Nimmt Freebie-/Newsletter-Anmeldungen entgegen und legt den Kontakt in
 * MailerLite an. Benötigt MAILERLITE_API_KEY (und optional
 * MAILERLITE_GROUP_ID) als Umgebungsvariable — der Versand der PDFs läuft
 * dann über die jeweilige MailerLite-Automation.
 *
 * Bot-Schutz: siehe lib/formschutz.ts (Herkunft, Mindestzeit, Honigfalle,
 * Drossel). Zusätzlich: Eine Adresse, die in MailerLite noch unbestätigt
 * ist, wird nicht erneut angelegt, damit Fremde nicht mehrfach die
 * Bestätigungs-Mail bekommen.
 */
export async function POST(request: Request) {
  let body: { email?: string; quelle?: string; website?: string; t?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const schutz = pruefeFormular(request, body as Record<string, unknown>);
  if (schutz === "stumm") return NextResponse.json({ ok: true });
  if (schutz) return NextResponse.json({ error: schutz.error }, { status: schutz.status });

  const email = (body.email ?? "").trim();
  const quelle = (body.quelle ?? "unbekannt").slice(0, 64);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { error: "Bitte gib eine gültige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Der Versand ist noch nicht eingerichtet. Bitte versuche es später erneut." },
      { status: 503 }
    );
  }

  // Gruppen-Zuordnung je Freebie: MAILERLITE_GROUP_SEO_CHECKLISTE usw.,
  // sonst die allgemeine MAILERLITE_GROUP_ID.
  const envKey = `MAILERLITE_GROUP_${quelle.toUpperCase().replace(/-/g, "_")}`;
  const groupId = process.env[envKey] ?? process.env.MAILERLITE_GROUP_ID;
  const payload: Record<string, unknown> = {
    email,
    fields: { quelle },
  };
  if (groupId) payload.groups = [groupId];

  // Schon vorhanden und noch unbestätigt? Dann keine zweite Bestätigungs-Mail.
  try {
    const vorhanden = await fetch(`https://connect.mailerlite.com/api/subscribers/${encodeURIComponent(email)}`, {
      headers: { Accept: "application/json", Authorization: `Bearer ${apiKey}` },
      signal: AbortSignal.timeout(4000),
    });
    if (vorhanden.ok) {
      const daten = (await vorhanden.json().catch(() => ({}))) as { data?: { status?: string } };
      if (daten.data?.status === "unconfirmed") return NextResponse.json({ ok: true });
    }
  } catch {
    // Prüfung ist Komfort, kein Muss.
  }

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok && res.status !== 200 && res.status !== 201) {
    return NextResponse.json(
      { error: "Anmeldung fehlgeschlagen. Bitte versuche es später erneut." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
