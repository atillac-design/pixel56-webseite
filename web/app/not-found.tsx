import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, PulseField } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="sheet">
      <SiteNav crumb={{ section: "Fehler", page: "404" }} />
      <header className="hero" style={{ minHeight: "70vh" }}>
        <PulseField label1="// SIGNAL VERLOREN" label2="// SEITE NICHT GEFUNDEN" />
        <div className="hero-eyebrow">FEHLER 404</div>
        <h1>
          <span className="in"><span>Diese Seite</span></span>
          <span className="in"><span>ist unsichtbar.</span></span>
          <span className="in"><span>Deine muss es nicht sein.</span></span>
        </h1>
        <p className="hero-sub">
          Die angeforderte Seite existiert nicht oder wurde verschoben — zurück
          zur Startseite geht es hier entlang.
        </p>
        <div className="hero-actions">
          <Link className="btn-primary" href="/">
            Zur Startseite <ArrowIcon />
          </Link>
          <Link className="btn-text" href="/#kontakt">
            Oder direkt schreiben →
          </Link>
        </div>
      </header>
      <SiteFooter />
    </div>
  );
}
