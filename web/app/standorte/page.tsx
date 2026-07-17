import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { PulseField, CloseCta } from "@/components/ui";
import { standorte } from "@/lib/standorte";

export const metadata: Metadata = {
  title: "Standorte — Webdesign & Marketing in deiner Stadt",
  description:
    "Webdesign, Google & Meta Ads und Social-Media-Content in deiner Nähe — für KMUs, Handwerker und Dienstleister. Persönlich, digital & lokal.",
};

export default function StandorteUebersicht() {
  return (
    <div className="sheet">
      <SiteNav crumb={{ section: "Pixel56", page: "Standorte" }} />

      <header className="hero" style={{ minHeight: "60vh" }}>
        <PulseField label1="// BENDORF BEI KOBLENZ" label2="// DEUTSCHLANDWEIT IM EINSATZ" />
        <div className="hero-eyebrow">STANDORTE</div>
        <h1>
          <span className="in"><span>Vor Ort verwurzelt.</span></span>
          <span className="in"><span>Überall wirksam.</span></span>
        </h1>
        <p className="hero-sub">
          Unser Zuhause ist Bendorf bei Koblenz — betreut werden Kunden in der
          ganzen Region und darüber hinaus. Hier findest du unsere Angebote in
          deiner Nähe.
        </p>
      </header>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="band-head reveal">
          <div>
            <span className="band-tag">Regionen</span>
            <h2 className="band-title">
              Webdesign in <em>deiner Stadt</em>
            </h2>
          </div>
          <p className="band-note">
            Weitere Städteseiten sind in Arbeit — die Liste wächst laufend.
          </p>
        </div>
        <div className="kontakt-kanaele reveal">
          {standorte.map((s) => (
            <Link className="kanal" href={`/standorte/${s.slug}`} key={s.slug}>
              <span className="kl">Region</span>
              <b>Webdesign in {s.stadt}</b>
              <span>
                Webdesign, Google &amp; Meta Ads und Content für Unternehmen in{" "}
                {s.stadt} und Umgebung.
              </span>
            </Link>
          ))}
          <a className="kanal" href="https://calendly.com/pixel56/15min" target="_blank" rel="noopener">
            <span className="kl">Nicht dabei?</span>
            <b>Wir arbeiten ortsunabhängig</b>
            <span>
              Video-Call, Telefon, WhatsApp — dein Standort ist kein Hindernis.
              Jetzt Erstgespräch buchen →
            </span>
          </a>
        </div>
      </section>

      <CloseCta>
        Lass uns über deine <em>Sichtbarkeit</em> sprechen.
      </CloseCta>

      <SiteFooter />
    </div>
  );
}
