import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { CloseCta, PulseField } from "@/components/ui";
import { ressourcen } from "@/lib/ressourcen";
import { resourcePath } from "@/lib/routes";

const canonical = "/category/digitale-produkte";

export const metadata: Metadata = {
  title: "Digitale Produkte – Vorlagen & Freebies",
  description:
    "Digitale Vorlagen, Checklisten und Freebies von Pixel56 für KMUs, Selbstständige und Dienstleister.",
  alternates: { canonical },
};

export default function DigitaleProduktePage() {
  return (
    <main className="service-premium service-suite page-suite page-suite-products">
      <div className="sheet">
      <SiteNav crumb={{ section: "Ressourcen", page: "Digitale Produkte" }} />
      <header className="hero service-suite-hero" style={{ minHeight: "58vh" }}>
        <PulseField label1="// VORLAGEN & CHECKLISTEN" label2="// SOFORT EINSETZBAR" />
        <div className="hero-eyebrow">DIGITALE PRODUKTE</div>
        <h1>
          <span className="in"><span>Vorlagen, die</span></span>
          <span className="in"><span>Arbeit abnehmen.</span></span>
        </h1>
        <p className="hero-sub">Checklisten und Planungsvorlagen für mehr Sichtbarkeit, Struktur und Fokus im Betriebsalltag.</p>
      </header>
      </div>

      <div className="editorial-shell service-editorial">
        <div className="sheet">
      <section className="band" style={{ paddingTop: 40 }}>
        <div className="freebie-grid reveal">
          {ressourcen.map((ressource) => (
            <div className="freebie" key={ressource.slug}>
              <span className="fl">{ressource.docTag} · {ressource.docPages}</span>
              <h4>{ressource.docTitle}</h4>
              <p>{ressource.heroSub}</p>
              <Link className="fbtn" href={resourcePath(ressource.slug)}>Kostenlos öffnen →</Link>
            </div>
          ))}
          <div className="freebie">
            <span className="fl">Canva-Vorlagen · Set</span>
            <h4>Produktivitäts-Set</h4>
            <p>Tagesplaner und To-do-Liste – editierbar, druckbar und sofort einsatzbereit.</p>
            <Link className="fbtn" href="/product/tagesplaner-to-do-liste-set">Produkt ansehen →</Link>
          </div>
        </div>
      </section>

        </div>
      </div>

      <div className="sheet service-ending">
        <CloseCta>Du brauchst etwas <em>Individuelles?</em></CloseCta>
        <SiteFooter />
      </div>
    </main>
  );
}
