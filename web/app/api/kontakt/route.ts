import { NextResponse } from "next/server";

const leistungen = new Set([
  "Webdesign", "Meta Ads", "Social Content & Reels", "KI-Prozesse", "Mehrere Leistungen", "Anderes",
]);

function stringFeld(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    if (Number(request.headers.get("content-length") ?? 0) > 12000) {
      return NextResponse.json({ error: "Die Nachricht ist zu lang." }, { status: 413 });
    }
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (stringFeld(body.website, 100)) return NextResponse.json({ ok: true });

  const name = stringFeld(body.name, 120);
  const email = stringFeld(body.email, 254);
  const telefon = stringFeld(body.telefon, 40);
  const leistung = stringFeld(body.leistung, 80);
  const nachricht = stringFeld(body.nachricht, 3000);
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || !leistungen.has(leistung) || nachricht.length < 10) {
    return NextResponse.json({ error: "Bitte fülle Name, E-Mail, Leistung und Projektbeschreibung aus." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.PIXEL56_CONTACT_FROM;
  const to = process.env.PIXEL56_CONTACT_TO;
  if (!apiKey || !from || !to) {
    return NextResponse.json({ error: "Das Formular ist derzeit nicht verfügbar. Bitte nutze E-Mail, WhatsApp oder Telefon." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Pixel56 Anfrage: ${leistung}`,
        text: `Neue Projektanfrage\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${telefon || "nicht angegeben"}\nLeistung: ${leistung}\n\n${nachricht}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error("Kontaktzustellung fehlgeschlagen:", response.status);
      throw new Error("Delivery failed");
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Kontaktzustellung nicht abgeschlossen:", error);
    return NextResponse.json({ error: "Senden fehlgeschlagen. Bitte schreib uns direkt per E-Mail oder WhatsApp." }, { status: 502 });
  }
}
