import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, CloseCta, PulseField } from "@/components/ui";
import { site } from "@/lib/site";

const canonical = "/stellenangebote/pixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in";

export const metadata: Metadata = {
  title: "Vertrieb bei Pixel56 – Karriere",
  description:
    "Du interessierst dich für Vertrieb bei Pixel56? Frag direkt nach aktuellen Möglichkeiten in der Region Koblenz.",
  alternates: { canonical },
};

export default function VertriebsprofiPage() {
  return (
    <div className="sheet">
      <SiteNav crumb={{ section: "Karriere", page: "Vertriebsprofi/in" }} />
      <header className="hero" style={{ minHeight: "62vh" }}>
        <PulseField label1="// KARRIERE BEI PIXEL56" label2="// REGION KOBLENZ" />
        <div className="hero-eyebrow">STELLENANGEBOT · VERTRIEB</div>
        <h1>
          <span className="in"><span>Vertriebsprofi/in</span></span>
          <span className="in"><span>bei Pixel56.</span></span>
        </h1>
        <p className="hero-sub">
          Du verstehst die Herausforderungen von KMUs, hörst genauer zu als du
          verkaufst und kannst digitale Leistungen verständlich auf den Punkt bringen?
          Dann schreib uns. Wir sagen dir offen, ob und in welcher Form aktuell eine Zusammenarbeit möglich ist.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href={`mailto:${site.email}?subject=Bewerbung%20Vertrieb%20bei%20Pixel56`}>
            Möglichkeiten anfragen <ArrowIcon />
          </a>
          <Link className="btn-text" href="/karriere">Alle Karriereinfos →</Link>
        </div>
      </header>
      <section className="band tint-amber">
        <div className="band-head">
          <div>
            <span className="band-tag">Was zählt</span>
            <h2 className="band-title">Beratung vor <em>Druck</em></h2>
          </div>
        </div>
        <ul className="lines">
          <li>Du kommunizierst klar, zuverlässig und auf Augenhöhe.</li>
          <li>Du erkennst, welche Leistung einem Betrieb tatsächlich hilft.</li>
          <li>Du arbeitest eigenständig und hältst Zusagen konsequent ein.</li>
        </ul>
      </section>
      <CloseCta>Passt das zu dir? <em>Melde dich direkt.</em></CloseCta>
      <SiteFooter />
    </div>
  );
}
