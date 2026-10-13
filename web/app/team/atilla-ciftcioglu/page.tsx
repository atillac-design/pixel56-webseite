import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  ClientMarquee,
  CloseCta,
  ContactStrip,
  FaqList,
  RefCard,
  Reviews,
  type RefItem,
} from "@/components/ui";
import { site } from "@/lib/site";
import { getFallstudie } from "@/lib/projekte";
import { verifiedProjectVoices, verifiedReviews } from "@/lib/verified-reviews";
import { projectPath, routes, serviceRoutes } from "@/lib/routes";
import atillaImage from "@/public/bilder/team-atilla.webp";

const canonical = "/team/atilla-ciftcioglu";

export const metadata: Metadata = {
  title: "Atilla Ciftcioglu: Gründer von Pixel56 und dein fester Ansprechpartner",
  description:
    "Atilla Ciftcioglu ist Gründer von Pixel56 in Bendorf bei Koblenz. Er verantwortet Strategie, Webdesign, Kampagnen und KI-Prozesse selbst und bleibt über das ganze Projekt dein Ansprechpartner.",
  alternates: { canonical },
  openGraph: {
    title: "Atilla Ciftcioglu, Gründer von Pixel56",
    description: "Strategie, Webdesign und Marketing ohne stille Post: ein Ansprechpartner von der Analyse bis zur Betreuung.",
    url: canonical,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}${canonical}#person`,
  name: "Atilla Ciftcioglu",
  jobTitle: "Gründer von Pixel56",
  worksFor: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url },
  url: `${site.url}${canonical}`,
  image: `${site.url}/bilder/team-atilla.webp`,
  knowsAbout: ["Webdesign", "Meta Ads", "Social-Media-Content", "KI-Automatisierung", "Suchmaschinenoptimierung"],
};

const felder = [
  { title: "Strategie & Konzeption", text: "Zuhören, Ziel klären, den Baustein mit dem größten Hebel finden. Jedes Projekt beginnt mit dieser Frage, nicht mit einem Tool." },
  { title: "Webdesign & Technik", text: "Struktur, Texte, Design und Umsetzung aus einer Hand, inklusive sauberer Migration bei einem Relaunch." },
  { title: "Kampagnen & Content", text: "Meta Ads, Google Ads und Social Content, die zur Website passen und auf ein klares Ziel einzahlen." },
  { title: "KI-Prozesse", text: "Wiederkehrende Abläufe im Betrieb vereinfachen, vom Anfragen-Erstkontakt bis zur Wissensdatenbank." },
];

const arbeitsweise = [
  { problem: "Erst das Ziel, dann das Werkzeug", answer: "Kein Projekt startet mit „Wir brauchen eine Website“. Es startet mit „Wir brauchen mehr Anfragen“ oder „Wir finden keine Leute“. Daraus ergibt sich, was gebaut wird." },
  { problem: "Ein Ansprechpartner, auch wenn Partner dazukommen", answer: "Für Dreh, Schnitt oder Entwicklung holt Atilla Spezialisten aus einem festen Netzwerk. Du merkst davon nur, dass die Qualität stimmt. Dein Kontakt bleibt derselbe." },
  { problem: "Zwischenstände, die man anfassen kann", answer: "Statt Konzept-PDFs bekommst du Links: eine klickbare Seite, ein Anzeigenentwurf, ein geschnittener Clip. So lässt sich Feedback konkret geben." },
  { problem: "Ehrlich, auch wenn es unbequem ist", answer: "Wenn eine Idee dein Ziel nicht erreicht, sagt Atilla das im Gespräch. Lieber eine klare Antwort vorher als ein stilles Projekt nachher." },
];

const faqs = [
  { q: "Macht Atilla alles selbst?", a: "Strategie, Konzeption, Texte, Design und die meiste Umsetzung, ja. Für Dreh, Schnitt oder spezielle Entwicklung kommen Partner aus einem festen Netzwerk dazu. Die Verantwortung für das Ergebnis bleibt bei ihm." },
  { q: "Kann ich ihn direkt anrufen?", a: "Ja. Während der Zusammenarbeit erreichst du Atilla per Telefon, WhatsApp oder Video-Call. Für ein erstes Kennenlernen ist der Termin über Calendly der einfachste Weg." },
  { q: "Kommt er auch in den Betrieb?", a: "In der Region Koblenz, Neuwied und Montabaur gern, besonders für Content-Produktionen. Alles andere läuft ortsunabhängig, auch mit Kunden in anderen Bundesländern." },
  { q: "Wie läuft ein Erstgespräch mit ihm ab?", a: "15 bis 30 Minuten, kostenlos und unverbindlich. Du beschreibst deine Situation, er stellt Fragen und gibt eine erste Einschätzung. Ein Angebot kommt erst danach, wenn beide Seiten das wollen." },
];

export default function AtillaCiftciogluPage() {
  const projekte = ["gm-dachdecker", "cass-schulungen", "stark-ins-neue"]
    .map((slug) => getFallstudie(slug))
    .filter((projekt): projekt is NonNullable<typeof projekt> => Boolean(projekt));

  const referenzen: RefItem[] = projekte.map((projekt) => ({
    variant: projekt.variant,
    img: projekt.bild,
    href: projectPath(projekt.slug),
    cat: projekt.kunde,
    title: projekt.titel,
    text: projekt.teaser,
    tag: `${projekt.tags.join(" · ")} · ${projekt.jahr}`,
  }));

  const stimmen = [verifiedProjectVoices["gm-dachdecker"], verifiedProjectVoices["cass-schulungen"], verifiedReviews[0]];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium about-premium team-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Team", page: "Atilla Ciftcioglu" }} />

          <header className="service-premium-hero about-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">TEAM · GRÜNDER · PIXEL56</div>
              <h1>
                <span>Atilla</span>
                <span className="service-hero-accent">Ciftcioglu.</span>
                <span>Gründer von Pixel56.</span>
              </h1>
              <p>
                Strategie, Webdesign und Marketing ohne stille Post. Atilla
                verbindet Gestaltung, Technik und Kampagnen zu einem System, das
                Anfragen bringt, und bleibt von der ersten Analyse bis zur
                laufenden Betreuung dein Ansprechpartner.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Persönlich kennenlernen <ArrowIcon />
                </a>
                <Link className="btn-text" href={routes.about}>
                  Mehr über Pixel56 →
                </Link>
              </div>
              <div className="premium-proof" aria-label="Atilla Ciftcioglu auf einen Blick">
                <span>Gründer</span>
                <span>Bendorf bei Koblenz</span>
                <span>Strategie bis Umsetzung</span>
                <span>Direkt erreichbar</span>
              </div>
            </div>

            <div className="founder-visual about-hero-visual reveal">
              <div className="founder-frame">
                <Image src={atillaImage} alt="Atilla Ciftcioglu, Gründer von Pixel56" priority sizes="(max-width: 1080px) 92vw, 520px" />
              </div>
              <span>// ATILLA CIFTCIOGLU · GRÜNDER · STRATEGIE &amp; UMSETZUNG</span>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Atilla Ciftcioglu auf einen Blick">
          <div>
            <span>Rolle</span>
            <strong>Gründer &amp; fester Ansprechpartner</strong>
          </div>
          <div>
            <span>Standort</span>
            <strong>Bendorf bei Koblenz</strong>
          </div>
          <div>
            <span>Fokus</span>
            <strong>Websites, Kampagnen, Content, KI</strong>
          </div>
          <div>
            <span>Arbeitsweise</span>
            <strong>Direkt, ehrlich, umsetzungsnah</strong>
          </div>
        </section>

        <section className="band theme-light" id="felder">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">01 — Was Atilla macht</span>
              <h2 className="band-title">
                Kein Umweg zwischen <em>Idee und Umsetzung</em>
              </h2>
              <p className="lead">
                Bei vielen Agenturen sitzt zwischen dir und dem Ergebnis ein
                Vertrieb, ein Projektmanager und ein Team, das du nie siehst. Bei
                Pixel56 sprichst du mit Atilla. Er ordnet Entscheidungen ein,
                plant die Umsetzung und setzt sie zum großen Teil selbst um.
              </p>
              <p className="lead">
                Das hält die Wege kurz und sorgt dafür, dass im Ergebnis genau
                das steckt, was im Gespräch besprochen wurde.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Arbeitsfelder">
              {felder.map((feld) => (
                <div key={feld.title}>
                  <b>{feld.title}</b>
                  <small>{feld.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="arbeitsweise">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Wie er arbeitet</span>
              <h2 className="band-title">
                Vier Gewohnheiten, <em>die jedes Projekt prägen</em>
              </h2>
            </div>
            <p className="band-note">
              Keine Methodik mit Namen, sondern Regeln, die sich in der Arbeit
              mit Handwerksbetrieben, Dienstleistern und Vereinen bewährt haben.
            </p>
          </div>
          <div className="friction-list checklist reveal">
            {arbeitsweise.map((item, index) => (
              <div className="friction-row" key={item.problem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.problem}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="projekte">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Projekte, die er betreut hat</span>
              <h2 className="band-title">
                Drei Beispiele <em>aus der Praxis</em>
              </h2>
            </div>
            <p className="band-note">
              Ein Handwerksbetrieb mit Karriereportal, ein Schulungsanbieter
              mit neuer Website und Social Media, eine gemeinnützige
              Bildungsinitiative mit Website und SEO.
            </p>
          </div>
          <div className="ref-grid-3 reveal">
            {referenzen.map((item) => (
              <RefCard key={item.cat} item={item} />
            ))}
          </div>
          <div className="section-link-row reveal">
            <Link className="body-link" href={routes.projects}>
              Alle Kundenprojekte <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="band theme-light light-reviews" id="stimmen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Kundenstimmen</span>
              <h2 className="band-title">
                Was Kunden <em>über die Zusammenarbeit sagen</em>
              </h2>
            </div>
            <p className="band-note">
              Wir zeigen nur Aussagen, die unsere Kunden so veröffentlicht haben.
            </p>
          </div>
          <Reviews reviews={verifiedReviews} items={stimmen} />
        </section>

        <section className="band theme-light" id="leistungen">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">05 — Womit du zu ihm kommst</span>
              <h2 className="band-title">
                Ein Ziel reicht. <em>Den Weg planen wir gemeinsam.</em>
              </h2>
              <p className="lead">
                Du musst nicht wissen, ob du eine Website, eine Kampagne oder
                einen KI-Prozess brauchst. Es reicht, wenn du sagst, was sich
                ändern soll: mehr Anfragen, bessere Bewerber, weniger Routine im
                Büro.
              </p>
            </div>
            <div className="reveal">
              <ul className="lines">
                <li><Link href={serviceRoutes.webdesign}>Neue Website oder Relaunch</Link></li>
                <li><Link href={serviceRoutes["meta-ads"]}>Anfragen über Meta Ads</Link></li>
                <li><Link href={serviceRoutes.mitarbeitergewinnung}>Mitarbeiter finden</Link></li>
                <li><Link href={serviceRoutes["content-produktion"]}>Social Content &amp; Reels</Link></li>
                <li><Link href={serviceRoutes["ki-automatisierung"]}>KI-Prozesse im Betrieb</Link></li>
                <li><Link href={serviceRoutes.seo}>SEO-Grundlagen &amp; Sichtbarkeit</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Häufige Fragen</span>
              <h2 className="band-title">
                Was Kunden <em>vorher fragen</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <ContactStrip />
          <CloseCta>Lass uns über deine <em>Ziele</em> sprechen.</CloseCta>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
