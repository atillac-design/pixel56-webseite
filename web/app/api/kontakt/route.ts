import { NextResponse } from "next/server";

/**
 * Kontaktanfragen: legt den Kontakt mit Name/Telefon in MailerLite an
 * (Standardfelder name/phone, Feld quelle = "kontaktanfrage"), sodass eine
 * MailerLite-Automation die Benachrichtigung an Pixel56 auslösen kann.
 */
export async function POST(request: Request) {
  let body: { name?: string; email?: string; telefon?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const email = (body.email ?? "").trim();
  const name = (body.name ?? "").trim().slice(0, 120);
  const telefon = (body.telefon ?? "").trim().slice(0, 40);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { error: "Bitte gib eine gültige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Die Anfrage kann gerade nicht gesendet werden — erreich uns direkt per WhatsApp oder Telefon." },
      { status: 503 }
    );
  }

  const payload: Record<string, unknown> = {
    email,
    fields: { name, phone: telefon, quelle: "kontaktanfrage" },
  };
  if (process.env.MAILERLITE_GROUP_ID) payload.groups = [process.env.MAILERLITE_GROUP_ID];

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
      { error: "Senden fehlgeschlagen — erreich uns direkt per WhatsApp oder Telefon." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
