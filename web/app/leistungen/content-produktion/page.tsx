import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  PulseField,
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
import { ReelMock } from "@/components/mocks";
import { site } from "@/lib/site";
import { projectPath, serviceRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Reels & Social-Media-Content erstellen lassen",
  description:
    "Pixel56 erstellt Reels und Social-Media-Content: professioneller Schnitt aus deinem Rohmaterial oder komplette Video-Produktion bei dir vor Ort.",
  alternates: { canonical: serviceRoutes["content-produktion"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reels und Social-Media-Content",
  serviceType: "Videoschnitt, Reel-Produktion und Social-Media-Content",
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  areaServed: "DE",
  url: `${site.url}${serviceRoutes["content-produktion"]}`,
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
  { fl: "Format 1", title: "Reels & Kurzvideos", text: "Schnitt, Untertitel, Musik und Formatierung für Instagram, Facebook, TikTok oder LinkedIn." },
  { fl: "Format 2", title: "Foto & Video vor Ort", text: "Team, Arbeit und Atmosphäre — geplant und produziert direkt in deinem Unternehmen." },
  { fl: "Format 3", title: "Laufende Content-Pakete", text: "Regelmäßige Produktion und Aufbereitung, damit Social Media nicht wieder liegen bleibt." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Content-Strategie", text: "Welche Formate und welcher Rhythmus zu dir passen." },
  { nr: "02", tag: "Phase 2", title: "Material oder Dreh", text: "Du lieferst Rohmaterial — oder wir produzieren die Aufnahmen bei dir vor Ort." },
  { nr: "03", tag: "Phase 3", title: "Schnitt & Bearbeitung", text: "Aus dem Rohmaterial entstehen mehrere Formate." },
  { nr: "04", tag: "Phase 4", title: "Veröffentlichung", text: "Inhalte im geplanten Rhythmus, statt unregelmäßig." },
  { nr: "05", tag: "Phase 5", title: "Auswertung", text: "Was Reichweite bringt, wird gezielt ausgebaut." },
];

const referenzen: RefItem[] = [
  { variant: "ic-4", barWidth: 55, href: projectPath("burgerfabrik"), cat: "Burgerfabrik", title: "Reels direkt aus dem echten Betrieb", text: "Kurzvideos aus dem laufenden Ladenalltag statt gestellter Werbeaufnahmen.", tag: "Reels · Social Content" },
  { variant: "ic-2", barWidth: 65, img: "/bilder/projekt-ma-transporte.webp", href: projectPath("ma-transporte"), cat: "MA-Transporte", title: "Laufende Social-Media-Betreuung", text: "Kontinuierliche Content-Produktion neben der neuen Website, seit 2019.", tag: "Social Media · seit 2019" },
];

const faqs = [
  { q: "Könnt ihr Videos schneiden, die wir selbst aufgenommen haben?", a: "Ja. Du schickst uns dein Rohmaterial und ein kurzes Briefing. Wir übernehmen Auswahl, Dramaturgie, Schnitt, Untertitel, Musik und die passenden Formate für deine Kanäle." },
  { q: "Müssen wir für den Dreh unseren Alltag unterbrechen?", a: "Möglichst wenig. Wir planen die Termine so, dass sie sich in den laufenden Betrieb einfügen — oft entstehen die besten Aufnahmen genau während der normalen Arbeit." },
  { q: "Brauchen wir professionelle Ausrüstung oder ein Model?", a: "Nein. Wir bringen die Ausrüstung mit, und echte Mitarbeiter oder Inhaber wirken meist glaubwürdiger als gebuchte Models." },
  { q: "Wie oft sollten wir posten?", a: "Wichtiger als die Häufigkeit ist die Regelmäßigkeit. Im Erstgespräch legen wir einen realistischen, durchhaltbaren Rhythmus fest." },
  { q: "Übernehmt ihr auch das Posten selbst?", a: "Das ist Teil der monatlichen Content-Pakete. Bei Einzelpaketen liefern wir das fertige Material zur eigenen Verwendung." },
  { q: "Was ist günstiger: eigenes Material oder ein Vor-Ort-Dreh?", a: "Der reine Schnitt aus gut vorbereitetem Rohmaterial ist in der Regel günstiger, weil Planung, Anfahrt und Produktion entfallen. Ein Vor-Ort-Dreh lohnt sich, wenn professionelles Ausgangsmaterial fehlt oder viele Inhalte an einem Termin entstehen sollen." },
  { q: "Was kostet Content-Produktion?", a: "Das hängt von Materialmenge, Videolänge, Schnittaufwand, Anzahl der Formate und einem möglichen Vor-Ort-Termin ab. Du erhältst vorab einen klaren Leistungsumfang für ein Einzelpaket oder eine laufende Zusammenarbeit." },
];

const reviews = [
  { text: "Endlich Content, der wirklich nach uns aussieht. Keine gestellten Stockfotos mehr.", who: "Burgerfabrik" },
  { text: "Seit Jahren laufende Betreuung, ohne dass wir uns selbst darum kümmern müssen.", who: "MA-Transporte" },
  { text: "Regelmäßig statt sporadisch — das macht den Unterschied wirklich aus.", who: "Stark ins Neue gGmbH" },
];

export default function ContentPage() {
  return (
    <main className="service-premium service-suite service-suite-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="sheet">
        <SiteNav crumb={{ section: "Leistungen", page: "Content-Produktion" }} />

        <header className="hero service-suite-hero">
          <PulseField label1="// PRODUKTION AKTIV" label2="// ECHT, NICHT GESTELLT" />
          <div className="hero-eyebrow">REELS · SOCIAL CONTENT · VIDEOPRODUKTION</div>
          <h1>
            <span className="in"><span>Dein Material.</span></span>
            <span className="in"><span>Oder unser Dreh.</span></span>
            <span className="in"><span>Starker Content.</span></span>
          </h1>
          <p className="hero-sub">
            Du schickst uns deine Videos und wir machen daraus professionelle
            Reels — oder wir kommen zu dir, produzieren vor Ort und liefern
            fertigen Social-Media-Content aus einer Hand.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="https://calendly.com/pixel56/15min" target="_blank" rel="noopener">
              Content-Projekt besprechen <ArrowIcon />
            </a>
            <Link className="btn-text" href="#status">
              Kennst du das? ↓
            </Link>
          </div>
          <div className="hero-foot">
            <span className="hf-label">Zwei Wege:</span>
            <div className="hf-chip">Rohmaterial schneiden</div>
            <div className="hf-chip">Vor Ort produzieren</div>
            <div className="hf-chip">Laufend betreuen</div>
          </div>
        </header>
      </div>

      <ClientMarquee />

      <div className="editorial-shell service-editorial">
        <div className="sheet">
        <section className="service-summary service-summary-premium reveal" aria-label="Content-Produktion auf einen Blick">
          <div><span>Material</span><strong>Deine Aufnahmen oder unser Dreh</strong></div>
          <div><span>Formate</span><strong>Reels, Ads &amp; Social Content</strong></div>
          <div><span>Produktion</span><strong>Schnitt, Ton, Text &amp; Format</strong></div>
          <div><span>Ziel</span><strong>Regelmäßig sichtbar bleiben</strong></div>
        </section>

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

        <section className="band" id="modelle">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Zwei Produktionsmodelle</span>
              <h2 className="band-title">
                So viel Unterstützung, <em>wie du wirklich brauchst</em>
              </h2>
            </div>
            <p className="band-note">
              Nicht jeder Kunde braucht einen kompletten Drehtag. Deshalb
              trennen wir Schnitt-Service und Vor-Ort-Produktion klar.
            </p>
          </div>
          <div className="content-models reveal">
            <article>
              <span>// MODE 01 · REMOTE</span>
              <h3>Du filmst. Wir machen den Rest.</h3>
              <p>Du sendest uns vorhandene Aufnahmen — vom Smartphone oder aus einer professionellen Produktion.</p>
              <ul>
                <li>Material sichten und starke Szenen auswählen</li>
                <li>Reels schneiden, Untertitel und Musik ergänzen</li>
                <li>Mehrere Formate und Varianten exportieren</li>
              </ul>
              <strong>Weniger Produktionsaufwand, flexibel planbar.</strong>
            </article>
            <article>
              <span>// MODE 02 · ON LOCATION</span>
              <h3>Wir drehen bei dir vor Ort.</h3>
              <p>Wir planen Motive und Formate, bringen die Technik mit und produzieren direkt in deinem Unternehmen.</p>
              <ul>
                <li>Konzept und Shotlist vor dem Termin</li>
                <li>Foto- und Videoaufnahmen im echten Arbeitsumfeld</li>
                <li>Schnitt und Content-Paket nach dem Dreh</li>
              </ul>
              <strong>Höhere Produktionstiefe, eigenes Bildmaterial.</strong>
            </article>
          </div>
        </section>

        <section className="band">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">03 — Warum es zählt</span>
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
              <span className="band-tag">04 — Was wir produzieren</span>
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
              <span className="band-tag">05 — Wie wir arbeiten</span>
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
          <div className="work-gallery work-gallery-social reveal" style={{ marginTop: 28 }}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/content-creative-abbruch.webp" alt="Social-Media-Creative für die Mitarbeitergewinnung im Abbruch" loading="lazy" decoding="async" />
              <figcaption><b>Recruiting-Creative</b><span>Feed · 1:1</span></figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/projekt-kinderherzen-story.webp" alt="Instagram-Story für Sportler für Kinderherzen" loading="lazy" decoding="async" />
              <figcaption><b>Event-Story</b><span>Instagram · 9:16</span></figcaption>
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/projekt-kinderherzen-eventcover.webp" alt="Social-Media-Eventcover für Sportler für Kinderherzen" loading="lazy" decoding="async" />
              <figcaption><b>Event-Kampagne</b><span>Facebook · Cover</span></figcaption>
            </figure>
          </div>
        </section>

        <section className="band">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">06 — Mehr aus jedem Material</span>
              <h2 className="band-title">
                Ein Dreh. <em>Mehrere Formate.</em>
              </h2>
              <p className="lead">
                Vier Gründe, warum unser Content tatsächlich Reichweite bringt
                statt nur zu existieren.
              </p>
              <ul className="lines">
                <li>Echtes Material aus deinem Alltag, kein Studio, kein Stock.</li>
                <li>Ein Dreh liefert mehrere Formate für verschiedene Kanäle.</li>
                <li>Fester Veröffentlichungs-Rhythmus statt sporadischer Posts.</li>
                <li>Laufende Auswertung — was ankommt, wird ausgebaut.</li>
              </ul>
            </div>
            <div className="content-reuse reveal" aria-label="Mehrfachverwertung von Content">
              <span>// AUS EINEM MATERIALPOOL</span>
              <div><b>01</b><strong>Reel</strong><small>9:16 · Social Feed</small></div>
              <div><b>02</b><strong>Story-Cuts</strong><small>Mehrere kurze Sequenzen</small></div>
              <div><b>03</b><strong>Ad Creative</strong><small>Variante für Kampagnen</small></div>
              <div><b>04</b><strong>Website-Clip</strong><small>Marke und Team sichtbar</small></div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">07 — Der Weg dahin</span>
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
              <span className="band-tag">08 — Referenzen</span>
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
              <span className="band-tag">09 — Zusammenarbeit</span>
              <h2 className="band-title">
                Dein Content. <em>Ein fester Draht.</em>
              </h2>
              <p className="lead">
                Kein Ticket-System, keine Warteschleife. Dreh-Termine, Freigaben und spontane Ideen stimmst du direkt per WhatsApp mit deinem Ansprechpartner ab.
              </p>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
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
              <span className="band-tag">10 — Bewertungen</span>
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
        <CloseCta>
          Lass uns über deinen <em>Content</em> sprechen.
        </CloseCta>

        <SiteFooter />
      </div>
    </main>
  );
}
