import { site } from "@/lib/site";

/** Feste Kontaktleiste am unteren Rand auf kleinen Bildschirmen: Anrufen, WhatsApp, Termin. */
export default function KontaktLeiste() {
  return (
    <nav className="kontakt-leiste" aria-label="Schnellkontakt">
      <a href={`tel:${site.phoneIntl}`}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" /></svg>
        Anrufen
      </a>
      <a href={site.whatsapp} target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a4 4 0 0 1-2-2l1-1-1-2z" /></svg>
        WhatsApp
      </a>
      <a href={site.calendly} target="_blank" rel="noopener" className="termin">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
        Termin
      </a>
    </nav>
  );
}
