import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, PulseField } from "@/components/ui";

export const metadata: Metadata = {
  title: "Bestätigt — dein Download ist unterwegs",
  description: "Vielen Dank für deine Bestätigung. Dein kostenloses PDF ist auf dem Weg zu dir.",
  robots: { index: false },
};

/** Zielseite nach Double-Opt-in-Bestätigung (MailerLite). */
export default function BestaetigtPage() {
  return (
    <div className="sheet">
      <SiteNav crumb={{ section: "Pixel56", page: "Bestätigt" }} />
      <header className="hero" style={{ minHeight: "70vh" }}>
        <PulseField label1="// BESTÄTIGT" label2="// PDF UNTERWEGS" />
        <div className="hero-eyebrow">FAST GESCHAFFT</div>
        <h1>
          <span className="in"><span>Bestätigt —</span></span>
          <span className="in"><span>dein PDF kommt.</span></span>
        </h1>
        <p className="hero-sub">
          Danke für deine Bestätigung! Dein kostenloses PDF ist auf dem Weg in
          dein Postfach. Falls es nicht ankommt: Spam-Ordner prüfen oder uns
          kurz per WhatsApp schreiben.
        </p>
        <div className="hero-actions">
          <Link className="btn-primary" href="/">
            Zur Startseite <ArrowIcon />
          </Link>
          <Link className="btn-text" href="/blog">
            Mehr Wissen? Zum Blog →
          </Link>
        </div>
      </header>
      <SiteFooter />
    </div>
  );
}
