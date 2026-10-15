import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SystemSzene from "@/components/SystemSzene";
import LeistungsFinder from "@/components/LeistungsFinder";
import { leistungenSzene } from "@/lib/system-szene";
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
import { services, site } from "@/lib/site";
import { getFallstudie } from "@/lib/projekte";
import { verifiedReviews } from "@/lib/verified-reviews";
import { projectPath, resourceRoutes, routes, serviceRoutes } from "@/lib/routes";
import seoFreebieImage from "@/public/bilder/freebie-seo-ebook-transparent.webp";
import kiFreebieImage from "@/public/bilder/freebie-ki-ebook.webp";

const canonical = "/dienstleistung";

export const metadata: Metadata = {
  title: "Leistungen: Webdesign, Ads, Content & KI",
  description:
    "Alle Leistungen von Pixel56: Webdesign, Meta Ads, Social Content, KI-Prozesse, Landingpages, Mitarbeitergewinnung, Google Ads und SEO. Aus Koblenz.",
  alternates: { canonical },
  openGraph: {
    title: "Leistungen von Pixel56: acht Bausteine, ein System",
    description: "Websites, Kampagnen, Content und KI-Prozesse, die zusammenpassen. Ein Ansprechpartner, ein Ziel: mehr Anfragen.",
    url: canonical,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${site.url}${canonical}#list`,
  name: "Leistungen von Pixel56",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${site.url}${service.href}`,
  })),
};

const kernleistungen = [
  {
    nr: "01",
    code: "WEB",
    title: "Webdesign",
    href: serviceRoutes.webdesign,
    text: "Websites, die nicht nur gut aussehen, sondern Besucher zur Anfrage führen: klare Struktur, schnelle Technik, saubere SEO-Basis. Beim Relaunch nehmen wir bestehende Rankings und Adressen mit, statt sie zu verlieren.",
    tags: ["Strategie", "UX & Design", "Entwicklung", "SEO-Basis"],
    outcome: "Aus Besuchern werden Anfragen.",
  },
  {
    nr: "02",
    code: "ADS",
    title: "Meta Ads",
    href: serviceRoutes["meta-ads"],
    text: "Facebook- und Instagram-Kampagnen für neue Kunden oder Bewerber. Mit Creatives, die im Feed auffallen, einer Zielseite, die das Versprechen der Anzeige einlöst, und Tracking, das zeigt, was wirklich funktioniert.",
    tags: ["Zielgruppen", "Creatives", "Tracking", "Optimierung"],
    outcome: "Aus Reichweite wird Nachfrage.",
  },
  {
    nr: "03",
    code: "REC",
    title: "Social Content & Reels",
    href: serviceRoutes["content-produktion"],
    text: "Du schickst uns Rohmaterial, wir schneiden es. Oder wir drehen bei dir im Betrieb und liefern fertige Reels, Fotos und Beiträge, die zeigen, wie ihr wirklich arbeitet. Mit einem festen Rhythmus, der auch ohne dich läuft.",
    tags: ["Videoschnitt", "Reels", "Vor-Ort-Dreh", "Redaktionsplan"],
    outcome: "Aus Betriebsalltag wird Content.",
  },
  {
    nr: "04",
    code: "AI",
    title: "KI-Prozesse & Automatisierung",
    href: serviceRoutes["ki-automatisierung"],
    text: "Wir suchen die Stellen, an denen in deinem Betrieb jeden Tag dieselbe Arbeit anfällt, und bauen dafür KI-Workflows, die zuverlässig laufen. Prozess zuerst, Werkzeug danach. Keine Spielerei, die nach zwei Wochen niemand mehr öffnet.",
    tags: ["Prozessanalyse", "KI-Assistenten", "Workflows", "Anbindung"],
    outcome: "Aus Routine wird Zeit.",
  },
];

const ergaenzend = [
  {
    tag: "05 · Landingpages & Funnels",
    title: "Eine Seite, ein Ziel",
    text: "Für Kampagnen, Aktionen oder Kursanmeldungen: eine fokussierte Seite ohne Ablenkung, die das Versprechen der Anzeige einlöst und zur Anfrage führt.",
    when: "Sinnvoll, wenn du Anzeigen schaltest und die Website zu viele Wege bietet.",
    href: serviceRoutes["landingpages-funnels"],
  },
  {
    tag: "06 · Mitarbeitergewinnung",
    title: "Bewerber, die nicht auf Jobbörsen suchen",
    text: "Karriereseite mit einfacher Bewerbung, Kampagnen im Feed und Inhalte, die zeigen, wie es im Betrieb wirklich zugeht.",
    when: "Sinnvoll, wenn Stellenanzeigen ins Leere laufen und die Bewerbung per E-Mail abschreckt.",
    href: serviceRoutes.mitarbeitergewinnung,
  },
  {
    tag: "07 · Google Ads",
    title: "Sichtbar im Moment der Suche",
    text: "Anzeigen bei Google für Menschen, die jetzt nach deiner Leistung suchen. Mit Suchbegriffen, Zielseiten und Tracking, die zum Angebot passen.",
    when: "Sinnvoll, wenn deine Leistung aktiv gesucht wird und die Website Anfragen aufnehmen kann.",
    href: serviceRoutes["google-ads"],
  },
  {
    tag: "08 · SEO-Grundlagen",
    title: "Gefunden werden, ohne dafür zu zahlen",
    text: "Technisches Fundament, saubere Struktur, Inhalte mit Suchintention und ein gepflegtes Google-Unternehmensprofil. Kein Rankingversprechen, aber eine Basis, die trägt.",
    when: "Sinnvoll als Grundlage jeder Website und bei jedem Relaunch.",
    href: serviceRoutes.seo,
  },
];

const zielPfade = [
  { ziel: "„Wir wollen mehr Anfragen aus der Region.“", empfehlung: "Website mit klarer Leistungsstruktur, gepflegtes Google-Unternehmensprofil und bei Bedarf Google Ads auf die Suchbegriffe, die in deiner Region tatsächlich genutzt werden." },
  { ziel: "„Unsere Kunden wissen noch nicht, dass sie uns brauchen.“", empfehlung: "Meta Ads mit Creatives aus dem Betrieb und einer Landingpage, die das Angebot in einer Minute erklärt. Reichweite dort, wo Menschen entdecken statt suchen." },
  { ziel: "„Wir finden keine Mitarbeiter.“", empfehlung: "Karriereseite mit Bewerbung in wenigen Minuten, Recruiting-Kampagnen im Feed und Content, der den Betrieb zeigt, bevor jemand den Lebenslauf hochlädt." },
  { ziel: "„Wir sollten auf Social Media sichtbar sein, haben aber keine Zeit.“", empfehlung: "Social Content mit festem Rhythmus: Du lieferst Material oder wir drehen vor Ort, wir schneiden, texten und planen. Es läuft auch, wenn du auf der Baustelle bist." },
  { ziel: "„Im Büro geht zu viel Zeit für dieselben Aufgaben drauf.“", empfehlung: "KI-Prozesse für das, was jeden Tag gleich abläuft: Anfragen vorsortieren, Antworten vorbereiten, Wissen auffindbar machen. Die Freigabe bleibt beim Menschen." },
  { ziel: "„Die Website ist alt, aber die Rankings sollen bleiben.“", empfehlung: "Relaunch mit URL-Migration als eigenem Arbeitsschritt: Inventar, Bewertung, Weiterleitungen, Kontrolle. Neue Seite, alte Sichtbarkeit." },
];

const ablauf = [
  { nr: "01", title: "Erstgespräch", text: "Kostenlos und unverbindlich. Du beschreibst, wo du stehst und was sich ändern soll. Wir hören zu und fragen nach.", gets: "Du bekommst: eine ehrliche erste Einschätzung" },
  { nr: "02", title: "Baustein wählen", text: "Wir sagen, welche Leistung den größten Hebel hat, und beschreiben den Weg. Das Angebot nennt Umfang, Ablauf und Preis.", gets: "Du bekommst: ein Angebot, das zum Ziel passt" },
  { nr: "03", title: "Umsetzung", text: "Feste Abstimmungstermine, Zwischenstände zum Anklicken, Feedback direkt an die Person, die umsetzt.", gets: "Du bekommst: Zwischenstände, die du prüfen kannst" },
  { nr: "04", title: "Betreuung & Ausbau", text: "Nach dem Start beobachten wir, was ankommt, und passen an. Weitere Bausteine kommen nur dazu, wenn sie das Ziel voranbringen.", gets: "Du bekommst: Einordnung statt Zahlenfriedhof" },
];

const kosten = [
  { title: "Einmalig oder laufend", text: "Websites, Landingpages und KI-Prozesse werden einmalig angeboten. Kampagnen und Content laufen monatlich, kündbar statt gebunden." },
  { title: "Werbebudget getrennt", text: "Budget für Meta oder Google geht direkt an die Plattform und bleibt in deinem Werbekonto nachvollziehbar. Unsere Betreuung wird separat ausgewiesen." },
  { title: "Angebot nach Gespräch", text: "Preise entstehen aus Umfang und Ziel, nicht aus einer Preisliste. Deshalb gibt es sie nach dem Erstgespräch, konkret und ohne versteckte Posten." },
  { title: "Alles gehört dir", text: "Domain, Website, Werbekonten und Inhalte laufen auf deinen Namen. Wenn du die Zusammenarbeit beendest, nimmst du alles mit." },
];

const resources = [
  { tag: "Checkliste · PDF", title: "SEO-Checkliste", text: "30 Prüfpunkte in drei Bereichen, dieselben, die wir bei jedem Kundenprojekt durchgehen. Zum Selbst-Abhaken, ohne Vorkenntnisse.", href: resourceRoutes["seo-checkliste"], image: seoFreebieImage },
  { tag: "Checkliste · PDF", title: "KI-Agenten-Checkliste", text: "Wo KI im Betriebsalltag wirklich Zeit spart und wo sie nur Spielerei ist. Ehrlich eingeordnet, mit konkreten Einsatzfällen.", href: resourceRoutes["ki-agenten-checkliste"], image: kiFreebieImage },
  { tag: "Vorlage · PDF", title: "Tagesplaner", text: "Ein Blatt pro Tag, drei Prioritäten, feste Zeitblöcke. Die Vorlage, mit der wir selbst arbeiten.", href: resourceRoutes.tagesplaner, image: null },
];

const faqs = [
  { q: "Muss ich alle Leistungen buchen?", a: "Nein. Jede Leistung funktioniert für sich. Im Erstgespräch klären wir, welcher Baustein den größten Hebel hat, und starten dort. Weitere kommen nur dazu, wenn sie das Ziel voranbringen." },
  { q: "Womit sollte ich anfangen?", a: "Meist mit dem Punkt, an dem Anfragen heute verloren gehen. Wer Besucher hat, aber keine Anfragen, startet bei der Website. Wer eine gute Website hat, aber keine Besucher, startet bei Anzeigen oder Sichtbarkeit." },
  { q: "Arbeitet ihr auch mit bestehenden Websites und Werbekonten?", a: "Ja. Wir übernehmen bestehende Konten und Systeme, wenn sie tragfähig sind, und sagen offen, wenn ein Neuaufbau günstiger ist als eine Reparatur." },
  { q: "Wie schnell sehe ich Ergebnisse?", a: "Das hängt vom Baustein ab. Anzeigen liefern innerhalb von Wochen erste Daten, eine neue Website braucht einige Wochen Umsetzung, organische Sichtbarkeit wächst über Monate. Wir nennen realistische Zeiträume, keine Versprechen." },
  { q: "Was kostet das?", a: "Das Angebot entsteht nach dem Erstgespräch aus Umfang und Ziel. Werbebudgets werden getrennt ausgewiesen, laufende Leistungen sind kündbar. Versteckte Posten gibt es nicht." },
  { q: "Arbeitet ihr nur in der Region Koblenz?", a: "Wir arbeiten aus Koblenz, Vor-Ort-Drehs machen wir in der Region. Alles andere läuft per Video-Call, Telefon und WhatsApp mit Kunden in ganz Deutschland." },
];

export default function DienstleistungenPage() {
  const referenzProjekte = ["gm-dachdecker", "van-den-berg", "stark-ins-neue"]
    .map((slug) => getFallstudie(slug))
    .filter((projekt): projekt is NonNullable<typeof projekt> => Boolean(projekt));

  const referenzen: RefItem[] = referenzProjekte.map((projekt) => ({
    variant: projekt.variant,
    img: projekt.bild,
    href: projectPath(projekt.slug),
    cat: projekt.kunde,
    title: projekt.titel,
    text: projekt.teaser,
    tag: `${projekt.tags.join(" · ")} · ${projekt.jahr}`,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium services-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Pixel56", page: "Leistungen" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">LEISTUNGEN FÜR KLEINE UND MITTELSTÄNDISCHE UNTERNEHMEN · DEUTSCHLANDWEIT · DACH-REGION</div>
              <h1>
                <span>Vier Bausteine.</span>
                <span className="service-hero-accent">Ein System.</span>
                <span>Ein Ansprechpartner.</span>
              </h1>
              <p>
                Website, Anzeigen, Content und KI-Prozesse, die ineinandergreifen.
                Du startest mit dem Baustein, der dein Ziel am schnellsten
                erreicht. Vier ergänzende Leistungen kommen nur dazu, wenn sie
                etwas bringen.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Kostenloses Erstgespräch <ArrowIcon />
                </a>
                <Link className="btn-text" href="#kernleistungen">
                  Leistungen ansehen ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Leistungen auf einen Blick">
                <span>Vier Kernleistungen</span>
                <span>Vier ergänzende Bausteine</span>
                <span>Ein Ansprechpartner</span>
                <span>Koblenz</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Zusammenspiel der Leistungen">
              <div className="web-board-top">
                <span>PIXEL56 · LEISTUNGSSYSTEM</span>
                <i>LIVE</i>
              </div>
              <div className="system-flow" aria-hidden="true">
                <div><span>01</span><b>Klarer Auftritt</b><small>Webdesign &amp; Positionierung</small></div>
                <div><span>02</span><b>Relevanter Content</b><small>Reels, Fotos &amp; Creatives</small></div>
                <div><span>03</span><b>Gezielte Reichweite</b><small>Meta Ads, Google Ads &amp; Kampagnen</small></div>
                <div><span>04</span><b>Smarte Abläufe</b><small>KI-Prozesse &amp; Automatisierung</small></div>
              </div>
              <div className="web-board-signals">
                <div><span>01</span><b>Website</b><small>nimmt auf</small></div>
                <div><span>02</span><b>Content</b><small>zeigt</small></div>
                <div><span>03</span><b>Anzeigen</b><small>bringen</small></div>
                <div><span>04</span><b>KI</b><small>entlastet</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Leistungen auf einen Blick">
          <div>
            <span>Kernleistungen</span>
            <strong>Webdesign, Meta Ads, Content, KI</strong>
          </div>
          <div>
            <span>Ergänzend</span>
            <strong>Landingpages, Recruiting, Google Ads, SEO</strong>
          </div>
          <div>
            <span>Für wen</span>
            <strong>Handwerk, Mittelstand, Dienstleister, Vereine</strong>
          </div>
          <div>
            <span>Arbeitsweise</span>
            <strong>Ein Ansprechpartner, alles aus einer Hand</strong>
          </div>
        </section>

        <section className="premium-statement band reveal theme-light light-opening">
          <span className="band-tag">01 — Woran es meistens liegt</span>
          <p>
            Die meisten Unternehmen haben kein Marketing-Problem. Sie haben
            <em> Einzelteile, die nicht zusammenspielen.</em>
          </p>
        </section>

        <section className="band theme-light light-services" id="kernleistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Kernleistungen</span>
              <h2 className="band-title">
                Vier Disziplinen. <em>Ein Anspruch.</em>
              </h2>
            </div>
            <p className="band-note">
              Jede Leistung funktioniert für sich. Richtig stark wird sie, wenn
              Botschaft, Gestaltung und Ausspielung aus einer Hand kommen und
              zusammenpassen.
            </p>
          </div>
          <div className="premium-services reveal">
            {kernleistungen.map((service) => (
              <Link className="premium-service-card" href={service.href} key={service.code}>
                <div className="premium-service-top">
                  <span>{service.nr}</span>
                  <i>{service.code}</i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul aria-label={`Bausteine von ${service.title}`}>
                  {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="premium-service-outcome">
                  {service.outcome} <ArrowIcon />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="ergaenzend">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Ergänzende Bausteine</span>
              <h2 className="band-title">
                Vier Leistungen, <em>die je nach Ziel dazukommen</em>
              </h2>
            </div>
            <p className="band-note">
              Nicht jedes Unternehmen braucht sie. Aber wenn das Ziel danach
              verlangt, machen sie den Unterschied zwischen Reichweite und
              Anfrage.
            </p>
          </div>
          <div className="audience-grid cols-4 reveal">
            {ergaenzend.map((item) => (
              <Link className="audience-card" href={item.href} key={item.tag}>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.when}</small>
              </Link>
            ))}
          </div>
        </section>

        <section className="band system-section dark-stage service-dark-stage" id="system">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Alles greift ineinander</span>
              <h2 className="band-title">
                Acht Bausteine, <em>ein System</em>
              </h2>
            </div>
            <p className="band-note">
              Keine Leistung steht für sich. Anzeigen brauchen Zielseiten, Zielseiten
              brauchen Content, und jede Anfrage braucht einen Ablauf dahinter. Tippe
              auf einen Baustein und sieh, was er im Zusammenspiel leistet.
            </p>
          </div>
          <div className="reveal">
            <SystemSzene konfig={leistungenSzene} />
          </div>
        </section>

        <section className="band theme-light" id="ziele">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Welcher Baustein zu welchem Ziel passt</span>
              <h2 className="band-title">
                Sechs Ziele, <em>sechs Empfehlungen</em>
              </h2>
            </div>
            <p className="band-note">
              So ungefähr läuft das Erstgespräch: Du nennst das Ziel, wir nennen
              den Weg. Hier sind die häufigsten Fälle vorab.
            </p>
          </div>
          <div className="friction-list advice reveal">
            {zielPfade.map((item, index) => (
              <div className="friction-row" key={item.ziel}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.ziel}</h3>
                <p>{item.empfehlung}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="finder">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">Leistungs-Finder · vier Fragen</span>
              <h2 className="band-title">
                Womit solltest du <em>anfangen?</em>
              </h2>
            </div>
            <p className="band-note">
              Vier kurze Fragen, dann siehst du, welcher Baustein für deinen Betrieb
              als Erstes sinnvoll ist und was dazu passt. Unverbindlich, ohne Eingabe
              von Kontaktdaten.
            </p>
          </div>
          <div className="reveal">
            <LeistungsFinder />
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="ablauf">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — So läuft die Zusammenarbeit</span>
              <h2 className="band-title">
                Vier Schritte, <em>bei jeder Leistung gleich</em>
              </h2>
            </div>
            <p className="band-note">
              Ob Website, Kampagne oder KI-Prozess: Du weißt jederzeit, wo das
              Projekt steht, was als Nächstes passiert und was es kostet.
            </p>
          </div>
          <div className="premium-process reveal">
            {ablauf.map((step) => (
              <article key={step.nr}>
                <span>{step.nr}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <small>{step.gets}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="kosten">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">07 — Kosten &amp; Transparenz</span>
              <h2 className="band-title">
                Wie Preise <em>bei uns entstehen</em>
              </h2>
            </div>
            <p className="band-note">
              Keine Preisliste, aber klare Regeln. Damit du vor dem Gespräch
              weißt, wie wir rechnen.
            </p>
          </div>
          <div className="mini-grid cols-4 reveal">
            {kosten.map((item) => (
              <div key={item.title}>
                <b>{item.title}</b>
                <small>{item.text}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="referenzen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — Ausgewählte Arbeiten</span>
              <h2 className="band-title">
                Drei Projekte, <em>drei Leistungen</em>
              </h2>
            </div>
            <p className="band-note">
              Website und Recruiting für einen Meisterbetrieb, laufende Meta
              Ads für eine Unternehmensgruppe, Landingpage und Kampagne für eine
              Bildungsinitiative.
            </p>
          </div>
          <div className="ref-grid-3 reveal">
            {referenzen.map((item) => (
              <RefCard key={item.cat} item={item} />
            ))}
          </div>
          <div className="section-link-row reveal">
            <Link className="body-link" href={routes.projects}>
              Alle Kundenprojekte ansehen <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="band theme-light light-reviews" id="stimmen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">09 — Kundenstimmen</span>
              <h2 className="band-title">
                Was Kunden <em>über die Zusammenarbeit sagen</em>
              </h2>
            </div>
            <p className="band-note">
              Wir zeigen nur Aussagen, die unsere Kunden so veröffentlicht haben.
              Keine erfundenen Bewertungen, keine geschönten Zahlen.
            </p>
          </div>
          <Reviews reviews={verifiedReviews} items={verifiedReviews} />
        </section>

        <section className="band theme-light" id="ressourcen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">10 — Kostenlose Ressourcen</span>
              <h2 className="band-title">
                Zum Selbermachen, <em>bevor du uns brauchst</em>
              </h2>
            </div>
            <p className="band-note">
              Drei Vorlagen aus unserer eigenen Arbeit. Kostenlos als PDF, ohne
              Haken.
            </p>
          </div>
          <div className="resource-grid reveal">
            {resources.map((resource) => (
              <Link className="resource-card" href={resource.href} key={resource.title}>
                {resource.image ? (
                  <div className="resource-mockup">
                    <Image src={resource.image} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" />
                  </div>
                ) : (
                  <div className="resource-mockup resource-mockup-placeholder" aria-hidden="true"><i /></div>
                )}
                <span>{resource.tag}</span>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <em>Kostenlos herunterladen <ArrowIcon /></em>
              </Link>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">11 — Häufige Fragen</span>
              <h2 className="band-title">
                Was du vorher <em>wissen willst</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <ContactStrip />
          <CloseCta>Welche Leistung bringt dich <em>jetzt am weitesten?</em></CloseCta>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
