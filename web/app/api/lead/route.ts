import { NextResponse } from "next/server";

/**
 * Nimmt Freebie-/Newsletter-Anmeldungen entgegen und legt den Kontakt in
 * MailerLite an. Benötigt MAILERLITE_API_KEY (und optional
 * MAILERLITE_GROUP_ID) als Umgebungsvariable — der Versand der PDFs läuft
 * dann über die jeweilige MailerLite-Automation.
 */
export async function POST(request: Request) {
  let body: { email?: string; quelle?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

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

  const groupId = process.env.MAILERLITE_GROUP_ID;
  const payload: Record<string, unknown> = {
    email,
    fields: { quelle },
  };
  if (groupId) payload.groups = [groupId];

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
