import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  PulseField,
  ClientMarquee,
  StatusPanel,
  MetricMock,
  WaMock,
  CloseCta,
  FaqList,
  Reviews,
  RefCard,
  Stepper,
  type RefItem,
} from "@/components/ui";
import { ReelMock } from "@/components/mocks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Content-Produktion & Social Media",
  description:
    "Reels, Fotos & Social-Media-Content direkt aus deinem Alltag — echt statt gestellt. Für KMUs & Handwerker deutschlandweit. Mehr Reichweite & Vertrauen. Kostenlose Beratung buchen.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Content-Produktion",
  serviceType: "Content-Produktion",
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  areaServed: "DE",
  url: `${site.url}/leistungen/content-produktion`,
};

const statusRows = [
  { label: "Keine Zeit für Content nebenbei", tag: "Zeit" },
  { label: "Wirkt gestellt statt echt", tag: "Stil" },
  { label: "Jede Plattform für sich", tag: "Konsistenz" },
  { label: "Ein Dreh, ein einziger Beitrag", tag: "Verwertung" },
  { label: "Unregelmäßig gepostet", tag: "Rhythmus" },
  { label: "Keine Ahnung, was ankommt", tag: "Auswertung" },
];

const formate = [
  { fl: "Format 1", title: "Reels & Kurzvideo", text: "Für Instagram, TikTok und Co. — direkt aus dem echten Betriebsalltag." },
  { fl: "Format 2", title: "Fotografie", text: "Team, Arbeit, Räume — Bildmaterial für Website, Social Media und Google Business." },
  { fl: "Format 3", title: "Social-Content-Wochenpakete", text: "Laufende Produktion in festem Rhythmus, statt einmaliger Aktionen." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Content-Strategie", text: "Welche Formate und welcher Rhythmus zu euch passen." },
  { nr: "02", tag: "Phase 2", title: "Vor-Ort-Termin", text: "Dreh oder Fotoshooting direkt bei euch, im echten Umfeld." },
  { nr: "03", tag: "Phase 3", title: "Schnitt & Bearbeitung", text: "Aus dem Rohmaterial entstehen mehrere Formate." },
  { nr: "04", tag: "Phase 4", title: "Veröffentlichung", text: "Inhalte im geplanten Rhythmus, statt unregelmäßig." },
  { nr: "05", tag: "Phase 5", title: "Auswertung", text: "Was Reichweite bringt, wird gezielt ausgebaut." },
];

const referenzen: RefItem[] = [
  { variant: "ic-4", barWidth: 55, href: "/projekte/burgerfabrik", cat: "Burgerfabrik", title: "Reels direkt aus dem echten Betrieb", text: "Kurzvideos aus dem laufenden Ladenalltag statt gestellter Werbeaufnahmen.", tag: "Reels · Social Content" },
  { variant: "ic-2", barWidth: 65, img: "/bilder/projekt-ma-transporte.webp", href: "/projekte/ma-transporte", cat: "MA-Transporte", title: "Laufende Social-Media-Betreuung", text: "Kontinuierliche Content-Produktion neben der neuen Website, seit 2019.", tag: "Social Media · seit 2019" },
];

const faqs = [
  { q: "Müssen wir für den Dreh unseren Alltag unterbrechen?", a: "Möglichst wenig. Wir planen die Termine so, dass sie sich in den laufenden Betrieb einfügen — oft entstehen die besten Aufnahmen genau während der normalen Arbeit." },
  { q: "Brauchen wir professionelle Ausrüstung oder ein Model?", a: "Nein. Wir bringen die Ausrüstung mit, und echte Mitarbeiter oder Inhaber wirken meist glaubwürdiger als gebuchte Models." },
  { q: "Wie oft sollten wir posten?", a: "Wichtiger als die Häufigkeit ist die Regelmäßigkeit. Im Erstgespräch legen wir einen realistischen, durchhaltbaren Rhythmus fest." },
  { q: "Übernehmt ihr auch das Posten selbst?", a: "Das ist Teil der monatlichen Content-Pakete. Bei Einzelpaketen liefern wir das fertige Material zur eigenen Verwendung." },
  { q: "Was kostet Content-Produktion?", a: "Ein einzelnes Fotoshooting ist etwas anderes als eine laufende, monatliche Produktion. Den passenden Umfang klären wir im kostenlosen Erstgespräch." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja — per WhatsApp über einen festen Ansprechpartner, siehe oben. Betreuung ist Teil der Zusammenarbeit, kein Zusatzverkauf danach." },
];

const reviews = [
  { text: "Endlich Content, der wirklich nach uns aussieht. Keine gestellten Stockfotos mehr.", who: "Burgerfabrik" },
  { text: "Seit Jahren laufende Betreuung, ohne dass wir uns selbst darum kümmern müssen.", who: "MA-Transporte" },
  { text: "Regelmäßig statt sporadisch — das macht den Unterschied wirklich aus.", who: "Stark ins Neue gGmbH" },
];

export default function ContentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="sheet">
        <SiteNav crumb={{ section: "Leistungen", page: "Content-Produktion" }} />

        <header className="hero">
          <PulseField label1="// PRODUKTION AKTIV" label2="// ECHT, NICHT GESTELLT" />
          <div className="hero-eyebrow">LEISTUNG · CONTENT-PRODUKTION</div>
          <h1>
            <span className="in"><span>Echter Content.</span></span>
            <span className="in"><span>Kein Stockfoto.</span></span>
            <span className="in"><span>Keine Kulisse.</span></span>
          </h1>
          <p className="hero-sub">
            Reels, Fotos und Social-Content direkt aus eurem Alltag — von der
            Burgerbude bis zur Coaching-Marke. Kein Stockmaterial, sondern
            Aufnahmen, die tatsächlich zu euch gehören.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="https://calendly.com/pixel56/15min" target="_blank" rel="noopener">
              Kostenloses Erstgespräch <ArrowIcon />
            </a>
            <Link className="btn-text" href="#status">
              Kennst du das? ↓
            </Link>
          </div>
          <div className="hero-foot">
            <span className="hf-label">Wir produzieren:</span>
            <div className="hf-chip">Reels</div>
            <div className="hf-chip">Fotografie</div>
            <div className="hf-chip">Wochenpakete</div>
          </div>
        </header>
      </div>

      <ClientMarquee />

      <div className="sheet">
        <section className="band tint-amber" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Der Status quo</span>
              <h2 className="band-title">
                Sechs Zeichen, dass Content <em>liegen bleibt statt zu wirken</em>
              </h2>
              <p className="lead">
                Die Arbeit ist gut, aber online kommt davon kaum etwas an. Meist
                steckt einer dieser Gründe dahinter.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="6 von 6 Warnsignalen aktiv" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">02 — Warum es zählt</span>
              <h2 className="band-title">
                Vertrauen entsteht <em>durch Echtheit</em>
              </h2>
              <p className="lead">
                Menschen kaufen von Menschen, nicht von Stockfotos. Content aus
                dem echten Alltag baut Vertrauen auf, das keine Anzeige allein
                schafft.
              </p>
              <ul className="lines">
                <li>Ohne Content gibt es zwischen Anfragen keine Berührungspunkte.</li>
                <li>Ein einzelner viraler Beitrag verpufft ohne Anschluss.</li>
                <li>Regelmäßige, echte Inhalte bauen Vertrauen auf, das bleibt.</li>
              </ul>
            </div>
            <div className="reveal">
              <ReelMock
                videoSrc="/videos/reel-handwerker-tipps.mp4"
                caption="5 Tipps für mehr Kundenanfragen"
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Was wir produzieren</span>
              <h2 className="band-title">
                Drei Formate, <em>ein durchgängiger Look</em>
              </h2>
            </div>
            <p className="band-note">
              Egal ob kurzes Video, Foto oder laufende Betreuung — alle Formate
              greifen ineinander, statt isoliert nebeneinanderher zu laufen.
            </p>
          </div>
          <div className="fact-grid reveal">
            {formate.map((f) => (
              <div className="fact-cell" key={f.fl}>
                <span className="fl">{f.fl}</span>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Wie wir arbeiten</span>
              <h2 className="band-title">
                Echt statt <em>gestellt</em>
              </h2>
            </div>
            <p className="band-note">
              Wir drehen dort, wo tatsächlich gearbeitet wird — kein Studio,
              kein Stockmaterial, keine gestellten Situationen.
            </p>
          </div>
          <div className="callout2 reveal">
            <p>
              <b>Der häufigste Fehler:</b> Content, der zu poliert wirkt,
              verliert genau die Glaubwürdigkeit, die er eigentlich aufbauen
              soll. Kleine Unperfektheit ist auf Social Media meist ein Vorteil,
              kein Makel.
            </p>
          </div>
        </section>

        <section className="band">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">05 — Warum wir</span>
              <h2 className="band-title">
                Ein Dreh. <em>Mehrere Formate.</em>
              </h2>
              <p className="lead">
                Vier Gründe, warum unser Content tatsächlich Reichweite bringt
                statt nur zu existieren.
              </p>
              <ul className="lines">
                <li>Echtes Material aus eurem Alltag, kein Studio, kein Stock.</li>
                <li>Ein Dreh liefert mehrere Formate für verschiedene Kanäle.</li>
                <li>Fester Veröffentlichungs-Rhythmus statt sporadischer Posts.</li>
                <li>Laufende Auswertung — was ankommt, wird ausgebaut.</li>
              </ul>
            </div>
            <div className="reveal">
              <MetricMock
                head="Live-Auswertung · MA-Transporte"
                rows={[
                  { label: "Reichweite / Monat", value: "12.4K", countTo: "12.4", suffix: "K" },
                  { label: "Engagement-Rate", value: "4.2%", countTo: "4.2", suffix: "%" },
                  { label: "Content-Stücke / Monat", value: "16" },
                ]}
                bars={[44, 58, 50, 70, 64, 84, 100]}
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Der Weg dahin</span>
              <h2 className="band-title">
                Fünf Phasen, <em>laufend produziert</em>
              </h2>
            </div>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">07 — Referenzen</span>
              <h2 className="band-title">
                Aus der <em>echten Arbeit</em>
              </h2>
            </div>
          </div>
          <div className="ref-grid-2 reveal">
            {referenzen.map((r) => (
              <RefCard item={r} key={r.cat} />
            ))}
          </div>
        </section>

        <section className="band tint-violet">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">08 — Zusammenarbeit</span>
              <h2 className="band-title">
                Dein Content. <em>Ein fester Draht.</em>
              </h2>
              <p className="lead">
                Kein Ticket-System, keine Warteschleife. Dreh-Termine, Freigaben und spontane Ideen stimmst du direkt per WhatsApp mit deinem Ansprechpartner ab.
              </p>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Ihr Ansprechpartner"
                messages={[
                  { from: "in", text: "Können wir das neue Reel schon diese Woche drehen?" },
                  { from: "out", text: "Ja, Dienstag 14 Uhr passt bei mir." },
                  { from: "in", text: "👍 Perfekt, bis dann!" },
                ]}
                footer="Dreh-Termine & Freigaben — schnell abgestimmt"
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">09 — Bewertungen</span>
              <h2 className="band-title">
                Das sagen <em>Kunden über uns</em>
              </h2>
            </div>
          </div>
          <Reviews reviews={reviews} />
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">10 — Häufige Fragen</span>
              <h2 className="band-title">
                Was du vorher <em>wissen willst</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

        <CloseCta>
          Lass uns über euren <em>Content</em> sprechen.
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
