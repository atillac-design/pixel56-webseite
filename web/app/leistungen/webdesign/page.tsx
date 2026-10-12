import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  ClientMarquee,
  StatusPanel,
  WaMock,
  CloseCta,
  FaqList,
  Reviews,
  RefCard,
  Stepper,
  type RefItem,
} from "@/components/ui";
import { Funnel2 } from "@/components/mocks";
import { site } from "@/lib/site";
import { projectPath, routes, serviceRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Webdesign Agentur Koblenz für Unternehmen",
  description:
    "Pixel56 entwickelt schnelle, individuelle Websites für Unternehmen in Koblenz und deutschlandweit: Strategie, Design, Entwicklung und SEO-Basis aus einer Hand.",
  alternates: { canonical: serviceRoutes.webdesign },
  openGraph: {
    title: "Webdesign Agentur Koblenz für Unternehmen | Pixel56",
    description:
      "Individuelle Websites, die Vertrauen aufbauen und Interessenten zur Anfrage führen — aus Bendorf bei Koblenz.",
    url: serviceRoutes.webdesign,
  },
};

const serviceUrl = `${site.url}${serviceRoutes.webdesign}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: "Webdesign für Unternehmen und Selbstständige",
      serviceType: "Webdesign, Website-Relaunch und Landingpages",
      description:
        "Strategisches Webdesign für Unternehmen und Selbstständige: Konzeption, Texte, individuelles Design, technische Entwicklung, SEO-Grundlagen und Betreuung.",
      url: serviceUrl,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        telephone: site.phoneIntl,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hüttenstraße 100",
          postalCode: "56170",
          addressLocality: "Bendorf",
          addressRegion: "Rheinland-Pfalz",
          addressCountry: "DE",
        },
      },
      areaServed: [
        { "@type": "City", name: "Koblenz" },
        { "@type": "AdministrativeArea", name: "Rheinland-Pfalz" },
        { "@type": "Country", name: "Deutschland" },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Unternehmen aller Branchen und Selbstständige",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Webdesign-Leistungen",
        itemListElement: [
          "Strategie und Seitenstruktur",
          "SEO-Texte",
          "Individuelles Webdesign",
          "Responsive Entwicklung",
          "Technisches SEO und Performance",
          "Wartung und Betreuung",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${site.url}/dienstleistung` },
        { "@type": "ListItem", position: 3, name: "Webdesign", item: serviceUrl },
      ],
    },
  ],
};

const statusRows = [
  { label: "Viele Besucher, kaum Anfragen", tag: "Conversion" },
  { label: "Bei Google nicht sichtbar", tag: "SEO" },
  { label: "Auf dem Handy mühsam", tag: "Mobil" },
  { label: "Austauschbare Baukasten-Optik", tag: "Marke" },
  { label: "Leistungen bleiben unklar", tag: "Inhalt" },
  { label: "Änderungen dauern zu lange", tag: "Betreuung" },
];

const scope = [
  {
    nr: "01",
    title: "Strategie & Seitenstruktur",
    text: "Wir ordnen Zielgruppen, Leistungen und Suchintentionen, bevor Design oder Texte entstehen.",
  },
  {
    nr: "02",
    title: "Texte mit Suchintention",
    text: "Verständliche Inhalte beantworten echte Kundenfragen und geben Google ein klares Seitenthema.",
  },
  {
    nr: "03",
    title: "Individuelles Webdesign",
    text: "Ein Auftritt passend zur Marke — keine Vorlage, die bei fünf anderen Unternehmen genauso aussieht.",
  },
  {
    nr: "04",
    title: "Schnelle Entwicklung",
    text: "Saubere, responsive Technik mit kurzen Ladezeiten und klarer Bedienung auf jedem Gerät.",
  },
  {
    nr: "05",
    title: "SEO beim Relaunch",
    text: "Bestehende URLs, Weiterleitungen, Metadaten, interne Links und Indexierung werden mitgeplant.",
  },
  {
    nr: "06",
    title: "Messung & Betreuung",
    text: "Anfragen, Klickwege und Sichtbarkeit werden nachvollziehbar — und die Website entwickelt sich weiter.",
  },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse", text: "Ziele, Zielgruppen, bestehende Daten und Wettbewerb bilden die Grundlage." },
  { nr: "02", tag: "Phase 2", title: "Struktur & Text", text: "Wir planen Suchintentionen, Seitenwege und Inhalte bis zur Anfrage." },
  { nr: "03", tag: "Phase 3", title: "Design", text: "Das visuelle System macht die Marke wiedererkennbar und verständlich." },
  { nr: "04", tag: "Phase 4", title: "Technik & SEO", text: "Entwicklung, Performance, Tracking und die SEO-Migration greifen ineinander." },
  { nr: "05", tag: "Phase 5", title: "Launch & Wachstum", text: "Nach Qualitätscheck und Launch messen, lernen und verbessern wir weiter." },
];

const referenzen: RefItem[] = [
  { variant: "ic-4", barWidth: 55, img: "/bilder/projekt-gm-dachdecker.webp", href: projectPath("gm-dachdecker"), cat: "GM-Dachdecker Meisterbetrieb", title: "Handwerkskunst digital erlebbar gemacht", text: "Neue Website inklusive Karriereportal — Bewerber laden Unterlagen direkt hoch, ohne E-Mail.", tag: "Webdesign · Karriereportal · 2023" },
  { variant: "ic-3", barWidth: 60, img: "/bilder/projekt-stark-ins-neue-2.webp", href: projectPath("stark-ins-neue"), cat: "Stark ins Neue gGmbH", title: "Vertrauen für eine Bildungsinitiative", text: "Kompletter Relaunch mit klarer Nutzerführung, SEO-Grundlage und angebundenen Anmeldeprozessen.", tag: "Webdesign · SEO · 2025" },
  { variant: "ic-1", barWidth: 48, img: "/bilder/projekt-oktay-coemertler.webp", href: projectPath("oktay-coemertler"), cat: "Oktay Cömertler", title: "Eine Marke für Abbruch, Tief- und Kanalbau", text: "Branding und Webdesign auf Basis einer umfassenden Markt- und Unternehmensanalyse.", tag: "Branding · Webdesign · 2018–2023" },
  { variant: "ic-2", barWidth: 70, img: "/bilder/projekt-ma-transporte.webp", href: projectPath("ma-transporte"), cat: "MA-Transporte", title: "Dienstleistungsqualität digital sichtbar gemacht", text: "Ein repräsentativer Webauftritt mit einer klaren Darstellung von Unternehmen und Leistungen.", tag: "Webdesign · Social Media · seit 2019" },
];

const faqs = [
  { q: "Was kostet professionelles Webdesign?", a: "Der Preis hängt von Seitenumfang, Textarbeit, Funktionen, Bildmaterial und Integrationen ab. Nach einem kurzen Erstgespräch erhältst du einen klar abgegrenzten Leistungsumfang statt einer offenen Stundenabrechnung ohne Ziel." },
  { q: "Wie lange dauert es, eine Website erstellen zu lassen?", a: "Eine fokussierte Unternehmenswebsite ist häufig in vier bis zehn Wochen realistisch. Umfangreiche Inhalte, Schnittstellen oder lange Freigabeschleifen verlängern den Ablauf. Zu Beginn erhältst du deshalb einen verbindlichen Projektplan." },
  { q: "Übernehmt ihr Texte und Suchmaschinenoptimierung?", a: "Ja. Seitenstruktur, Texte, technische SEO-Grundlagen, Metadaten, interne Links und strukturierte Daten werden gemeinsam geplant. Für dauerhaft umkämpfte Suchbegriffe kann nach dem Launch eine laufende SEO-Betreuung sinnvoll sein." },
  { q: "Verliere ich bei einem Website-Relaunch meine Google-Rankings?", a: "Ein Relaunch muss bestehende Signale nicht unnötig verlieren. Wir erfassen wertvolle URLs, übernehmen sie möglichst unverändert und richten für tatsächlich geänderte Adressen dauerhafte Weiterleitungen ein. Zusätzlich prüfen wir Canonicals, interne Links, Sitemap und Indexierung." },
  { q: "Kann ich Inhalte später selbst ändern?", a: "Ja. Je nach Projekt erhältst du ein passendes Redaktionssystem für Texte, Bilder und Referenzen. Wenn du die Pflege auslagern möchtest, übernehmen wir Updates und technische Betreuung." },
  { q: "Arbeitet Pixel56 nur in Koblenz?", a: "Nein. Unser Standort ist in Bendorf bei Koblenz, wodurch persönliche Termine in der Region unkompliziert sind. Projekte setzen wir für KMU und Handwerksbetriebe in ganz Deutschland um." },
  { q: "Ist eine individuelle Website besser als ein Baukasten?", a: "Nicht automatisch. Für sehr einfache Anforderungen kann ein Baukasten genügen. Individuelles Webdesign lohnt sich, wenn Positionierung, mehrere Leistungen, SEO, besondere Funktionen oder messbare Kundengewinnung wichtig sind." },
];

const reviews = [
  { text: "Maßgeschneidert, professionell, auf den Punkt — genau das haben wir gebraucht.", who: "Oktay Cömertler", img: "/bilder/person-oktay-coemertler.webp" },
  { text: "Wir haben unsere neue Website mit Pixel56 umgesetzt und sind sehr zufrieden.", who: "Bewertung eines Webdesign-Kunden" },
  { text: "Schnell, zuverlässig und auch nach dem Launch immer erreichbar.", who: "Colak GmbH", img: "/bilder/person-nalan-colak.webp" },
];

export default function WebdesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium webdesign-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Leistungen", page: "Webdesign" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">WEBDESIGN AGENTUR · KOBLENZ · DEUTSCHLANDWEIT</div>
              <h1>
                <span>Webdesign aus Koblenz.</span>
                <span className="service-hero-accent">Für Unternehmen,</span>
                <span>die mehr vorhaben.</span>
              </h1>
              <p>
                Pixel56 entwickelt individuelle Websites für Unternehmen aller
                Branchen. Strategisch geplant, hochwertig gestaltet, schnell
                umgesetzt und so aufgebaut, dass aus Aufmerksamkeit Vertrauen
                und aus Vertrauen eine Anfrage werden kann.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Website-Projekt besprechen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#referenzen">
                  Ausgewählte Websites ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Webdesign-Leistungen auf einen Blick">
                <span>Individuelles Design</span>
                <span>Schnelle Technik</span>
                <span>SEO-sicherer Relaunch</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Darstellung eines klaren, anfrageorientierten Webauftritts">
              <div className="web-board-top">
                <span>PIXEL56 · WEB EXPERIENCE</span>
                <i>LIVE</i>
              </div>
              <div className="web-browser-stage">
                <div className="web-browser-bar" aria-hidden="true">
                  <span /><span /><span />
                  <b>deine-marke.de</b>
                </div>
                <div className="web-browser-content">
                  <small>KLARER AUFTRITT · KLARER NÄCHSTER SCHRITT</small>
                  <strong>Deine Leistung.<br />Auf den Punkt.</strong>
                  <div className="web-browser-lines" aria-hidden="true"><i /><i /><i /></div>
                  <em>Projekt anfragen →</em>
                </div>
              </div>
              <div className="web-board-signals">
                <div><span>01</span><b>Marke</b><small>eigenständig</small></div>
                <div><span>02</span><b>Technik</b><small>schnell</small></div>
                <div><span>03</span><b>SEO</b><small>sauber</small></div>
                <div><span>04</span><b>Anfragen</b><small>messbar</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Webdesign auf einen Blick">
          <div>
            <span>Für wen</span>
            <strong>Unternehmen aller Branchen</strong>
          </div>
          <div>
            <span>Standort</span>
            <strong>Bendorf bei Koblenz</strong>
          </div>
          <div>
            <span>Geeignet für</span>
            <strong>Neue Websites &amp; Relaunches</strong>
          </div>
          <div>
            <span>Ziel</span>
            <strong>Mehr passende Anfragen</strong>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Ausgangslage</span>
              <h2 className="band-title">
                Wenn die Website gut aussieht, aber <em>nicht verkauft</em>
              </h2>
              <p className="lead">
                Eine Unternehmenswebsite muss in wenigen Sekunden erklären, was
                du anbietest, für wen es gedacht ist und warum man dir vertrauen
                kann. Fehlt diese Klarheit, geht der nächste Klick zur Konkurrenz.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="Typische Bremsen im Webauftritt" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="leistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Website erstellen lassen</span>
              <h2 className="band-title">
                Vom ersten Gedanken bis zum <em>messbaren Webauftritt</em>
              </h2>
            </div>
            <p className="band-note">
              Kein Weiterreichen zwischen Texter, Designer und Entwickler. Die
              sechs Bausteine werden von Anfang an gemeinsam geplant.
            </p>
          </div>
          <div className="scope-grid reveal">
            {scope.map((item) => (
              <article className="scope-card" key={item.nr}>
                <span>{item.nr}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="koblenz">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">03 — Webdesign Agentur Koblenz</span>
              <h2 className="band-title">
                Lokal erreichbar. <em>Deutschlandweit wirksam.</em>
              </h2>
              <p className="lead">
                Unser Büro liegt in Bendorf, wenige Minuten von Koblenz entfernt.
                Für Unternehmen aus der Region bedeutet das: persönliche
                Workshops sind genauso möglich wie schnelle digitale Abstimmungen.
              </p>
              <ul className="lines">
                <li>Direkter Ansprechpartner statt anonymer Agenturstruktur.</li>
                <li>Erfahrung mit KMU, Handwerk, Bildung und Dienstleistungen.</li>
                <li>Webdesign und <Link href={serviceRoutes.seo}>Suchmaschinenoptimierung</Link> greifen ineinander.</li>
                <li>Bestehende Google-Signale werden beim Relaunch systematisch geschützt.</li>
              </ul>
              <Link className="body-link" href={routes.contact}>
                Projekt in Koblenz besprechen <ArrowIcon />
              </Link>
            </div>
            <div className="reveal">
              <div className="web-project-collage" aria-label="Ausgewählte Webdesign-Projekte von Pixel56">
                <figure className="web-project-collage-main">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bilder/projekt-gm-dachdecker.webp"
                    alt="Responsive Website des GM Dachdecker Meisterbetriebs auf Desktop, Tablet und Smartphone"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption><span>GM Dachdecker</span><b>Website &amp; Karriereportal</b></figcaption>
                </figure>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bilder/projekt-webdesign-detail-1.webp"
                    alt="Website-Referenz Schlüsselfertig Immobilien"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption><span>Immobilien</span><b>Markenauftritt</b></figcaption>
                </figure>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bilder/projekt-webdesign-detail-2.webp"
                    alt="Website-Referenz M und A Transporte"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption><span>Logistik</span><b>Leistungswebsite</b></figcaption>
                </figure>
              </div>
              <address className="local-address">
                <span>// PIXEL56 STUDIO</span>
                <strong>Hüttenstraße 100 · 56170 Bendorf</strong>
                <span>Region Koblenz · Rheinland-Pfalz</span>
              </address>
            </div>
          </div>
        </section>

        <section className="band theme-light" id="referenzen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Webdesign-Referenzen</span>
              <h2 className="band-title">
                Reale Projekte statt <em>leerer Versprechen</em>
              </h2>
            </div>
            <p className="band-note">
              Vier unterschiedliche Unternehmen — jeweils mit eigener
              Positionierung, Nutzerführung und technischer Lösung.
            </p>
          </div>
          <div className="ref-grid-2 reveal">
            {referenzen.map((reference) => (
              <RefCard item={reference} key={reference.cat} />
            ))}
          </div>
          <div className="section-link-row reveal">
            <Link className="body-link" href={routes.projects}>
              Alle Kundenprojekte ansehen <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Landingpages &amp; Funnels</span>
              <h2 className="band-title">
                Für Kampagnen braucht es <em>einen klaren nächsten Schritt</em>
              </h2>
            </div>
            <p className="band-note">
              Wer Google- oder Meta-Anzeigen auf eine allgemeine Startseite
              schickt, lässt Potenzial liegen. Eine Landingpage verbindet eine
              Suchabsicht mit genau einem Angebot.
            </p>
          </div>
          <Funnel2
            nodes={[
              { tag: "Suchanfrage", label: "Konkreter Bedarf" },
              { tag: "Landingpage", label: "Ein Angebot, ein Ziel", hot: true },
              { tag: "Ergebnis", label: "Anfrage oder Anruf" },
            ]}
          />
          <div className="section-link-row reveal">
            <Link className="body-link" href={serviceRoutes["landingpages-funnels"]}>
              Landingpages &amp; Funnels im Detail <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="band theme-light">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Unser Prozess</span>
              <h2 className="band-title">
                Fünf Phasen. <em>Ein gemeinsames Ziel.</em>
              </h2>
            </div>
            <p className="band-note">
              Du weißt jederzeit, was als Nächstes passiert, welche Entscheidung
              gebraucht wird und wann der Launch geplant ist.
            </p>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band dark-stage service-dark-stage">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">07 — Warum Pixel56</span>
              <h2 className="band-title">
                Kein Baukasten. <em>Kein Projekt auf Autopilot.</em>
              </h2>
              <p className="lead">
                Wir verbinden Gestaltung, Marketing und Technik. So entsteht
                keine isolierte Designfläche, sondern ein belastbarer
                Vertriebskanal, den dein Unternehmen weiterentwickeln kann.
              </p>
              <ul className="lines">
                <li>Individuelle Strategie statt austauschbarer Branchenvorlage.</li>
                <li>Klare Aussagen statt Fachjargon und Textwüsten.</li>
                <li>Technische Qualität, SEO und Datenschutz von Anfang an mitgedacht.</li>
                <li>Betreuung nach dem Launch, wenn Inhalte oder Ziele sich ändern.</li>
              </ul>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Können wir die neue Leistung heute ergänzen?" },
                  { from: "out", text: "Ja. Schick mir die Eckdaten — wir kümmern uns um Text, Aufbau und Veröffentlichung." },
                  { from: "in", text: "Perfekt, genau so hatten wir uns die Betreuung vorgestellt." },
                ]}
                footer="Direkter Austausch während des Projekts und danach"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="bewertungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — Kundenstimmen</span>
              <h2 className="band-title">
                Zusammenarbeit, die <em>in Erinnerung bleibt</em>
              </h2>
            </div>
          </div>
          <Reviews reviews={reviews} />
        </section>

        <section className="band theme-light">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">09 — Häufige Fragen</span>
              <h2 className="band-title">
                Antworten vor dem <em>ersten Gespräch</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <CloseCta ctaLabel="Website-Projekt kostenlos besprechen">
            Soll deine Website endlich <em>Kunden gewinnen?</em>
          </CloseCta>

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
