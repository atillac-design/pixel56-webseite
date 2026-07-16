import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  PulseField,
  ClientMarquee,
  StatusPanel,
  MetricMock,
  WaMock,
  BrowserMock,
  CloseCta,
  FaqList,
  Reviews,
  Stepper,
} from "@/components/ui";
import { SearchMock } from "@/components/mocks";
import { site } from "@/lib/site";
import { standorte, getStandort } from "@/lib/standorte";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return standorte.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ort = getStandort(slug);
  if (!ort) return {};
  return {
    title: `Webdesign in ${ort.stadt}`,
    description: `Webdesign, Google & Meta Ads und Social-Media-Content für Unternehmen in ${ort.stadt} und Umgebung — von Pixel56 aus Bendorf bei Koblenz.`,
  };
}

const statusRows = [
  { label: "Technisch unsichtbar", tag: "Struktur" },
  { label: "Erster Eindruck verloren", tag: "Tempo" },
  { label: "Wirkt veraltet", tag: "Design" },
  { label: "Bricht auf dem Handy", tag: "Mobil" },
  { label: "Kein Kontaktweg", tag: "Formular" },
  { label: "Niemand antwortet", tag: "Betreuung" },
  { label: "Keine Auswertung", tag: "Zahlen" },
];

const steps = [
  { nr: "01", tag: "Woche 1", title: "Analyse", text: "Seite, Wettbewerb, Zielgruppe — bevor irgendetwas entworfen wird." },
  { nr: "02", tag: "Woche 1–2", title: "Struktur", text: "Texte, die zur Anfrage führen, kein Textbaustein von der Stange." },
  { nr: "03", tag: "Woche 2–3", title: "Design", text: "Passt zur Marke, baut Vertrauen auf — nicht nur „hübsch“." },
  { nr: "04", tag: "Woche 3–4", title: "Technik", text: "Ladezeit, mobile Darstellung, SEO von Anfang an mitgedacht." },
  { nr: "05", tag: "Laufend", title: "Betreuung", text: "Nach dem Launch bleiben wir dran, nicht nur bis zur Rechnung." },
];

const branchen = [
  { variant: "ic-1", barWidth: 55, title: "Handwerk & Bau", text: "Robust, direkt, Vertrauen auf den ersten Blick." },
  { variant: "ic-2", barWidth: 65, title: "Transport & Logistik", text: "Klar strukturiert, auf Zuverlässigkeit ausgelegt." },
  { variant: "ic-3", barWidth: 50, title: "Bildung & Weiterbildung", text: "Freundlich, seriös, macht Wissen zugänglich." },
  { variant: "ic-4", barWidth: 70, title: "Gastronomie", text: "Warm, appetitanregend, macht sofort Lust." },
  { variant: "ic-5", barWidth: 60, title: "Einzelhandel & Mode", text: "Bildstark, leicht, zum Stöbern gemacht." },
  { variant: "ic-6", barWidth: 58, title: "Beratung & Recht", text: "Ruhig, kompetent, schafft sofort Vertrauen." },
];

const reviews = [
  { text: "Von der ersten Idee bis zum Livegang alles aus einer Hand — schnell, unkompliziert, top Ergebnis.", who: "GM-Dachdecker" },
  { text: "Endlich eine Agentur, die auch nach dem Launch erreichbar ist. Kann ich nur empfehlen.", who: "MA-Transporte" },
  { text: "Messbare Ergebnisse statt leerer Versprechen. Genau das haben wir gesucht.", who: "Van den Berg Gruppe" },
];

export default async function StandortPage({ params }: Props) {
  const { slug } = await params;
  const ort = getStandort(slug);
  if (!ort) notFound();

  const faqs = [
    { q: "Wie lange dauert die Umsetzung?", a: "Je nach Umfang 3–5 Wochen von der Analyse bis zum Livegang — siehe die fünf Phasen oben." },
    { q: "Was kostet eine neue Website?", a: "Individuell kalkuliert nach Umfang, nicht pauschal. Im kostenlosen Erstgespräch bekommen Sie ein konkretes Angebot, keine Bauchgefühl-Zahl." },
    { q: "Muss ich Texte und Bilder selbst liefern?", a: "Nein. Wir übernehmen Struktur, Text und Design — Sie liefern nur, was wirklich nur Sie wissen können." },
    { q: "Bleiben Sie auch nach dem Launch erreichbar?", a: "Ja — per WhatsApp über einen festen Ansprechpartner, siehe oben. Betreuung ist Teil der Zusammenarbeit, kein Zusatzverkauf danach." },
    { q: "Was passiert mit meiner alten Website?", a: "Sie bleibt bis zum Livegang der neuen online — kein Ausfall, kein Bruch. Wir schalten erst um, wenn alles geprüft ist." },
    { q: "Kann ich Inhalte später selbst ändern?", a: "Ja, Sie bekommen ein einfaches System dafür. Wenn Sie lieber nichts anfassen wollen, übernehmen wir das genauso." },
    { q: "Ist die Seite auch für Google- und Meta-Ads vorbereitet?", a: "Ja — Landingpages und Tracking werden von Anfang an mitgedacht, nicht nachträglich draufgesetzt." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Webdesign in ${ort.stadt}`,
    serviceType: "Webdesign",
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: ort.stadt,
    url: `${site.url}/standorte/${ort.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="sheet">
        <SiteNav crumb={{ section: "Standort", page: `Webdesign in ${ort.stadt}` }} />

        <header className="hero">
          <PulseField label1={ort.koordinaten} label2="// SICHTBARKEIT AKTIV" />
          <div className="hero-eyebrow">STANDORT {ort.stadt.toUpperCase()} · WEBDESIGN</div>
          <h1>
            <span className="in"><span>Sichtbar</span></span>
            <span className="in"><span>in {ort.stadt}.</span></span>
            <span className="in"><span>Überall gefunden.</span></span>
          </h1>
          <p className="hero-sub">{ort.heroSub}</p>
          <div className="hero-actions">
            <Link className="btn-primary" href="#kontakt">
              Kostenloses Erstgespräch <ArrowIcon />
            </Link>
            <Link className="btn-text" href="#beweis">
              Warum {ort.stadt} anders tickt ↓
            </Link>
          </div>
          <div className="hero-foot">
            <span className="hf-label">Für {ort.stadt} im Einsatz:</span>
            <div className="hf-chip">Webdesign</div>
            <div className="hf-chip">Google &amp; Meta Ads</div>
            <div className="hf-chip">Social-Media-Content</div>
          </div>
        </header>
      </div>

      <ClientMarquee />

      <div className="sheet">
        <section className="band tint-amber">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Der Status quo</span>
              <h2 className="band-title">
                Sieben Gründe, warum <em>Kunden Sie nicht finden</em>
              </h2>
              <p className="lead">
                Jeder Punkt hier hat denselben Ursprung: die Website selbst. Und
                jeder kostet für sich schon Anfragen — unabhängig davon, wie gut
                die Leistung dahinter ist.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="7 von 7 Warnsignalen aktiv" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">02 — Warum jetzt</span>
              <h2 className="band-title">
                Sichtbarkeit ist kein Zustand, <em>sondern ein Prozess</em>
              </h2>
              <p className="lead">{ort.warumJetztLead}</p>
              <ul className="lines">
                <li>Der erste Eindruck entsteht in unter drei Sekunden.</li>
                <li>Wer nicht gefunden wird, existiert für den Kunden nicht.</li>
                <li>Sichtbarkeit heute entscheidet über Anfragen morgen.</li>
              </ul>
            </div>
            <div className="reveal">
              <SearchMock
                query={`webdesign ${ort.stadt.toLowerCase()}`}
                youTag="Ihr Eintrag"
                others={["Mitbewerber A · Webagentur", "Mitbewerber B · Freelancer"]}
              />
            </div>
          </div>
        </section>

        <section className="band tint" id="beweis">
          <div className="band-tag reveal" style={{ marginBottom: 44 }}>
            03 — Der Beweis
          </div>
          <div className="stat-block reveal">
            <div className="stat-num" data-label="WACHSTUM">
              +56<small>%</small>
            </div>
            <div className="stat-copy">
              <p className="quote">
                „Wir haben nicht mehr Budget verbrannt. Wir haben konstant
                gearbeitet — und das hat gereicht.“
              </p>
              <p>
                Van den Berg Gruppe, laufende Betreuung. Reale Kampagnendaten,
                kein Schätzwert — Wachstum, das entstand, weil niemand das
                Budget wöchentlich neu erfunden hat.
              </p>
              <cite>{`// VAN DEN BERG GRUPPE, REGION ${ort.stadt.toUpperCase()}`}</cite>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">04 — Warum wir</span>
              <h2 className="band-title">
                Nicht die günstigste Agentur. <em>Die dranbleibt.</em>
              </h2>
              <p className="lead">
                Vier Gründe, warum Unternehmen aus {ort.stadt} und Umgebung bei
                uns bleiben, statt nach einem Jahr weiterzuziehen.
              </p>
              <ul className="lines">
                <li>Lokal verwurzelt — Bendorf bei Koblenz, kurze Wege, kein Callcenter.</li>
                <li>Ein fester Ansprechpartner, keine wechselnden Projektmanager.</li>
                <li>Ergebnisse mit echten Zahlen belegt, nicht mit Bauchgefühl.</li>
                <li>Bleibt nach dem Launch — Betreuung, kein Zusatzverkauf danach.</li>
              </ul>
            </div>
            <div className="reveal">
              <MetricMock
                head="Live-Auswertung · Van den Berg Gruppe"
                rows={[
                  { label: "Anfragen / Monat", value: "34", countTo: "34" },
                  { label: "Klickrate", value: "6.8%", countTo: "6.8", suffix: "%" },
                  { label: "Ladezeit", value: "0.8s" },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Der Weg dahin</span>
              <h2 className="band-title">
                Fünf Schritte, <em>keine Umwege</em>
              </h2>
            </div>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band" id="branchen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Für Ihre Branche</span>
              <h2 className="band-title">
                So <em>könnte</em> es aussehen
              </h2>
            </div>
            <p className="band-note">
              Sechs Richtungen als Beispiel. Am Ende entsteht Ihre Website
              individuell nach Ihrer eigenen Marke — keine dieser Vorlagen wird
              1:1 verwendet.
            </p>
          </div>
          <div className="industry-grid reveal">
            {branchen.map((b) => (
              <div className="industry-card" key={b.title}>
                <BrowserMock variant={b.variant} barWidth={b.barWidth} />
                <h4>{b.title}</h4>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
          <p className="industry-disclaimer">
            Diese Vorschauen zeigen mögliche Design-Richtungen, keine fertigen
            Vorlagen. Jede Pixel56-Website wird eigens für die Marke, Farben und
            Zielgruppe des jeweiligen Kunden entworfen.
          </p>
        </section>

        <section className="band tint-violet">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">07 — Zusammenarbeit</span>
              <h2 className="band-title">
                Ein Ansprechpartner. <em>Ein Kanal.</em>
              </h2>
              <p className="lead">
                Kein Ticket-System, kein Callcenter, keine Rückrufbitte. Während
                Ihres Projekts erreichen Sie einen festen Ansprechpartner direkt
                per WhatsApp — für schnelle Fragen genauso wie für große
                Entscheidungen.
              </p>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Ihr Ansprechpartner"
                messages={[
                  { from: "in", text: "Kurze Frage: Können wir das Bild auf der Startseite noch tauschen?" },
                  { from: "out", text: "Klar, schick's mir rüber — ist heute noch online." },
                  { from: "in", text: "👍 Danke, schnell wie immer." },
                ]}
                footer="Antwortzeit während der Zusammenarbeit: meist unter 1 Stunde"
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — Bewertungen</span>
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
              <span className="band-tag">09 — Häufige Fragen</span>
              <h2 className="band-title">
                Bevor Sie <em>schreiben</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

        <CloseCta>
          Bereit, in {ort.stadt} <em>gefunden</em> zu werden?
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
