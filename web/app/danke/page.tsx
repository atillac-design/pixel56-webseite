import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, PulseField } from "@/components/ui";

export const metadata: Metadata = {
  title: "Danke — Anfrage erfolgreich",
  description: "Deine Anfrage war erfolgreich. Wir melden uns oder senden dir die gewünschten Inhalte per E-Mail.",
  robots: { index: false },
};

/** Zielseite nach Formular-Absendungen (z. B. aus MailerLite-Automationen). */
export default function DankePage() {
  return (
    <div className="sheet">
      <SiteNav crumb={{ section: "Pixel56", page: "Danke" }} />
      <header className="hero" style={{ minHeight: "70vh" }}>
        <PulseField label1="// ANFRAGE ANGEKOMMEN" label2="// WIR MELDEN UNS" />
        <div className="hero-eyebrow">GESCHAFFT</div>
        <h1>
          <span className="in"><span>Danke —</span></span>
          <span className="in"><span>hat geklappt.</span></span>
        </h1>
        <p className="hero-sub">
          Deine Anfrage war erfolgreich. Wir melden uns zeitnah oder senden dir
          die gewünschten Inhalte per E-Mail — schau auch in den Spam-Ordner.
        </p>
        <div className="hero-actions">
          <Link className="btn-primary" href="/">
            Zur Startseite <ArrowIcon />
          </Link>
          <Link className="btn-text" href="/blog">
            Solange stöbern? Zum Blog →
          </Link>
        </div>
      </header>
      <SiteFooter />
    </div>
  );
}
