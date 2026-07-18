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
  BrowserMock,
  RefCard,
  CloseCta,
  FaqList,
  Reviews,
} from "@/components/ui";
import { services, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "Digitalagentur für Webdesign, SEO, Google & Meta Ads, Landingpages und Content-Produktion für KMUs, Coaches, Shops und lokale Betriebe.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hüttenstraße 100",
    postalCode: "56170",
    addressLocality: "Bendorf",
    addressCountry: "DE",
  },
  telephone: site.phoneIntl,
  email: site.email,
  areaServed: "DE",
  url: site.url,
  priceRange: "€€",
};

const statusRows = [
  { label: "Sichtbarkeit hängt vom Zufall ab", tag: "Struktur" },
  { label: "Drei Dienstleister, kein Plan", tag: "Konsistenz" },
  { label: "Werbebudget ohne Strategie", tag: "Tracking" },
  { label: "Keine Zeit fürs Digitale", tag: "Zeit" },
  { label: "Uneinheitlicher Auftritt", tag: "Marke" },
  { label: "Wachstum stagniert trotzdem", tag: "Wachstum" },
];

const processSteps = [
  { nr: "01", title: "Kontakt", text: "Formular, WhatsApp oder Anruf — unverbindlich." },
  { nr: "02", title: "Rückmeldung", text: "Persönlich und zeitnah, keine Warteschleife." },
  { nr: "03", title: "Analyse", text: "Website, Sichtbarkeit, Wettbewerb im Blick." },
  { nr: "04", title: "Zieldefinition", text: "Woran Erfolg später gemessen wird." },
  { nr: "05", title: "Plan & Budget", text: "Klare Schritte, realistisches Budget." },
  { nr: "06", title: "Umsetzung", text: "Laufend informiert, nicht erst am Ende." },
];

const referenzen = [
  { variant: "ic-4", img: "/bilder/projekt-stark-ins-neue.webp", href: "/projekte/stark-ins-neue", cat: "Stark ins Neue gGmbH", title: "Landingpage und Meta Ads für eine Bildungsinitiative", text: "Fokus auf Vertrauen & Wirkung — deutlich mehr Kursanmeldungen.", tag: "Meta Ads · Landingpage · 2025" },
  { variant: "ic-5", img: "/bilder/projekt-kinderherzen.webp", href: "/projekte/sportler-fuer-kinderherzen", cat: "Sportler für Kinderherzen", title: "Marketing & Branding für eine Spendengala", text: "Zugunsten krebskranker Kinder — Sichtbarkeit für den guten Zweck.", tag: "Branding · Event · 2022" },
  { variant: "ic-1", href: "/projekte/gm-dachdecker", cat: "GM-Dachdecker Meisterbetrieb", title: "Webdesign und Karriereportal", text: "Handwerkskunst digital erlebbar gemacht.", tag: "Webdesign · Karriere · 2023" },
  { variant: "ic-2", href: "/projekte/oktay-coemertler", cat: "Oktay Cömertler", title: "Branding und Webdesign", text: "Für Abbruch, Tiefbau und Kanalbau — KMU-Transformation.", tag: "Branding · Webdesign · seit 2022" },
  { variant: "ic-3", img: "/bilder/projekt-cass.webp", href: "/projekte/cass-schulungen", cat: "CASS Schulungen", title: "Branding und Webdesign", text: "Für Luftsicherheitsschulungen — Bildung und Sicherheit digital vereint.", tag: "Branding · Social Media · 2023" },
  { variant: "ic-6", img: "/bilder/projekt-ma-transporte.webp", href: "/projekte/ma-transporte", cat: "M&A Transporte", title: "Webdesign und Social-Media-Betreuung", text: "Für ein Transportunternehmen — laufend seit 2019.", tag: "Webdesign · Social Media · seit 2019" },
];

const branchen = [
  { variant: "ic-1", barWidth: 55, title: "Handwerk & Bau", text: "Robust, direkt, Vertrauen auf den ersten Blick." },
  { variant: "ic-2", barWidth: 65, title: "Transport & Logistik", text: "Klar strukturiert, auf Zuverlässigkeit ausgelegt." },
  { variant: "ic-3", barWidth: 50, title: "Bildung & Weiterbildung", text: "Freundlich, seriös, macht Wissen zugänglich." },
  { variant: "ic-4", barWidth: 70, title: "Gastronomie", text: "Warm, appetitanregend, macht sofort Lust." },
  { variant: "ic-5", barWidth: 60, title: "Einzelhandel & Mode", text: "Bildstark, leicht, zum Stöbern gemacht." },
  { variant: "ic-6", barWidth: 58, title: "Beratung & Recht", text: "Ruhig, kompetent, schafft sofort Vertrauen." },
];

const faqs = [
  { q: "Was, wenn ich noch gar nicht genau weiß, was ich brauche?", a: "Völlig normal. Die meisten Gespräche starten nicht mit „ich brauche X, Y, Z“, sondern mit einem Ziel: mehr Anfragen, mehr Sichtbarkeit, mehr Zeit. Wir sortieren gemeinsam, was zuerst dran sollte." },
  { q: "Arbeitet ihr nur regional in Bendorf und Koblenz?", a: "Der Sitz ist in Bendorf bei Koblenz, lokale Betriebe sind uns besonders vertraut. Die Zusammenarbeit läuft aber ortsunabhängig — daher betreuen wir auch Kunden außerhalb der Region." },
  { q: "Was kostet das Erstgespräch?", a: "Nichts. Das Erstgespräch dient dazu, deine Situation ehrlich einzuschätzen. Erst danach gibt es ein konkretes, auf dich zugeschnittenes Angebot." },
  { q: "Wie schnell kann es losgehen?", a: "Das hängt vom Umfang und der Vorbereitung ab — Texte, Bildmaterial, Zugänge. Im Erstgespräch bekommst du einen realistischen Zeitrahmen statt einer pauschalen Zusage." },
  { q: "Was, wenn die Website nach dem Launch angepasst werden muss?", a: "Das ist eingeplant. Kleinere Anpassungen nach dem Launch gehören zum normalen Prozess — per WhatsApp über einen festen Ansprechpartner." },
];

const reviews = [
  { text: "Alles aus einer Hand — Website, Ads, Content. Kein Hin- und Herschieben zwischen Dienstleistern mehr.", who: "Oktay Cömertler", img: "/bilder/person-oktay-coemertler.webp" },
  { text: "Persönlich erreichbar, schnelle Antworten, ehrliche Einschätzungen. Genau das haben wir gesucht.", who: "CASS Schulungen" },
  { text: "Messbare Ergebnisse statt leerer Versprechen — und auch Jahre später noch derselbe Ansprechpartner.", who: "Colak GmbH", img: "/bilder/person-nalan-colak.webp" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="sheet">
        <SiteNav />

        <header className="hero">
          <PulseField label1="// PIXEL56 · BENDORF" label2="// ALLES AUS EINER HAND" />
          <div className="hero-eyebrow">PIXEL56 · DIGITALAGENTUR</div>
          <h1>
            <span className="in"><span>Digitale Auftritte,</span></span>
            <span className="in"><span>die wirken.</span></span>
            <span className="in"><span>Nicht nur aussehen.</span></span>
          </h1>
          <p className="hero-sub">
            Websites, Kampagnen und Content für KMUs, Coaches, Shops und lokale
            Betriebe — jede Leistung einzeln stark, gemeinsam noch stärker.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="https://calendly.com/pixel56/15min" target="_blank" rel="noopener">
              Kostenloses Erstgespräch <ArrowIcon />
            </a>
            <Link className="btn-text" href="/#status">
              Kennst du das? ↓
            </Link>
          </div>
          <div className="hero-foot">
            <span className="hf-label">Alles aus einer Hand:</span>
            <div className="hf-chip">Webdesign</div>
            <div className="hf-chip">Werbekampagnen</div>
            <div className="hf-chip">Content</div>
          </div>
          <div className="platform-strip reveal">
            <div className="ps-cell">
              <svg viewBox="0 0 32 32" fill="none"><circle cx="13" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" /><line x1="19" y1="19" x2="27" y2="27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              <div><b>Google Ads</b><span>Suchnetzwerk</span></div>
            </div>
            <div className="ps-cell">
              <svg viewBox="0 0 32 32" fill="none"><circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.8" /><circle cx="23" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.8" /><circle cx="16" cy="23" r="3.2" stroke="currentColor" strokeWidth="1.8" /><line x1="9" y1="9" x2="16" y2="23" stroke="currentColor" strokeWidth="1.8" /><line x1="23" y1="9" x2="16" y2="23" stroke="currentColor" strokeWidth="1.8" /><line x1="9" y1="9" x2="23" y2="9" stroke="currentColor" strokeWidth="1.8" /></svg>
              <div><b>Meta Ads</b><span>Facebook &amp; Instagram</span></div>
            </div>
            <div className="ps-cell">
              <svg viewBox="0 0 32 32" fill="none"><path d="M13 24V9l12-2.4V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="10" cy="24" r="3.4" stroke="currentColor" strokeWidth="1.8" /><circle cx="22" cy="21" r="3.4" stroke="currentColor" strokeWidth="1.8" /></svg>
              <div><b>TikTok Ads</b><span>Short-Video</span></div>
            </div>
            <div className="ps-cell">
              <svg viewBox="0 0 32 32" fill="none"><path d="M16 5c-5.5 0-9.5 4.2-9.5 9.4C6.5 21 16 28 16 28s9.5-7 9.5-13.6C25.5 9.2 21.5 5 16 5z" stroke="currentColor" strokeWidth="1.8" /><circle cx="16" cy="14" r="3" stroke="currentColor" strokeWidth="1.8" /></svg>
              <div><b>Google Business</b><span>Lokale Sichtbarkeit</span></div>
            </div>
          </div>
        </header>
      </div>

      <ClientMarquee />

      <div className="sheet">
        <section className="band tint-amber" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Der Status quo</span>
              <h2 className="band-title">Sechs Zeichen für <em>ungenutztes Potenzial</em></h2>
              <p className="lead">
                Das Handwerk, die Beratung, das Geschäft stimmt — aber online
                kommt davon zu wenig an. Meist liegt das an einem dieser sechs
                Punkte.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="6 von 6 Warnsignalen aktiv" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band" id="leistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Leistungen</span>
              <h2 className="band-title">Alles aus einer Hand, <em>sauber verzahnt</em></h2>
            </div>
            <p className="band-note">
              Sieben Leistungen, die nicht als getrennte Baustellen behandelt
              werden, sondern ineinandergreifen.
            </p>
          </div>
          <div className="svc-grid reveal">
            {services.map((s) => (
              <Link className="svc-card" href={`/leistungen/${s.slug}`} key={s.slug}>
                <span className="sl">{s.nr}</span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Warum es wirkt</span>
              <h2 className="band-title">Jede Fähigkeit hat <em>ein Ziel</em></h2>
            </div>
            <p className="band-note">
              Landingpage, Website, SEO, Ads — kein Werkzeugkasten aus Zufall,
              sondern mit einem Zweck: dich mit den Menschen
              zusammenzubringen, die dich brauchen.
            </p>
          </div>
          <div className="fact-grid reveal">
            <div className="fact-cell"><div className="fn">32<small>%</small></div><p>höhere Absprungrate, wenn die Ladezeit von 1 auf 3 Sekunden steigt.</p></div>
            <div className="fact-cell"><div className="fn">75<small>%</small></div><p>der Nutzer beurteilen die Seriosität eines Unternehmens direkt anhand der Website.</p></div>
            <div className="fact-cell"><div className="fn">53<small>%</small></div><p>der mobilen Besucher verlassen eine Seite, die länger als 3 Sekunden lädt.</p></div>
          </div>
          <div className="fact-foot">
            {"// Quellen: Google/SOASTA Research, Stanford Web Credibility Project — genau deshalb steht Performance bei uns an erster Stelle, nicht als Nachgedanke."}
          </div>
        </section>

        <section className="band">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">04 — Was uns unterscheidet</span>
              <h2 className="band-title">Kein Zufall. <em>System.</em></h2>
              <p className="lead">
                Pixel56 ist kein anonymes Team irgendwo im Ausland — hinter
                jeder Anfrage steht jemand, den du beim Namen kennst und der
                ans Telefon geht.
              </p>
              <ul className="lines">
                <li>Ein Ansprechpartner statt drei Agenturen — alles aus einer Hand.</li>
                <li>Kostenloses Erstgespräch, bevor irgendetwas beauftragt wird.</li>
                <li>Direkter Draht per WhatsApp statt anonymem Ticket-System.</li>
                <li>Regional verwurzelt — zuhause in Bendorf bei Koblenz.</li>
              </ul>
            </div>
            <div className="reveal">
              <MetricMock
                head="Beispiel-Dashboard · Kampagnen-Auswertung"
                rows={[
                  { label: "Anfragen / Monat", value: "34", countTo: "34" },
                  { label: "Klickrate", value: "6.8%", countTo: "6.8", suffix: "%" },
                  { label: "Ladezeit", value: "0.8s" },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="band tint" id="beweis">
          <span className="band-tag reveal" style={{ marginBottom: 44 }}>05 — Der Beweis</span>
          <div className="stat-copy reveal" style={{ maxWidth: 780, margin: "0 auto" }}>
            <p className="quote" style={{ fontSize: "clamp(24px, 3.4vw, 34px)" }}>
              „Wir haben nicht mehr Budget verbrannt. Wir haben konstant
              gearbeitet — und das hat gereicht.“
            </p>
            <p>
              Van den Berg Gruppe, seit Jahren in laufender Betreuung. Kein
              Strohfeuer, sondern konstante Arbeit statt wöchentlich neu
              erfundenem Budget. Dazu: spürbar leichtere Mitarbeitergewinnung
              für GM-Dachdecker und mehr Kursanmeldungen für Stark ins Neue.
            </p>
            <cite>{"// VAN DEN BERG GRUPPE, LAUFENDE BETREUUNG"}</cite>
          </div>
        </section>

        <section className="band tint-violet">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">06 — Zusammenarbeit</span>
              <h2 className="band-title">Ein Ansprechpartner. <em>Ein Kanal.</em></h2>
              <p className="lead">
                Kein Ticket-System, kein Callcenter, keine Rückrufbitte.
                Während der Zusammenarbeit erreichst du einen festen
                Ansprechpartner direkt per WhatsApp.
              </p>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Können wir kurz was zur Startseite ändern?" },
                  { from: "out", text: "Klar, sag mir was — ist heute noch online." },
                  { from: "in", text: "👍 Perfekt, danke dir!" },
                ]}
                footer="Antwortzeit während der Zusammenarbeit: meist unter 1 Stunde"
              />
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">07 — Der Weg dahin</span>
              <h2 className="band-title">Von der ersten Nachricht <em>bis zum Ergebnis</em></h2>
            </div>
          </div>
          <div className="stepper-6 reveal">
            {processSteps.map((s) => (
              <div className="step" key={s.nr}>
                <div className="sdot">{s.nr}</div>
                <div className="step-body">
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="band" id="referenzen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — Referenzen</span>
              <h2 className="band-title">Branchen, die wir <em>digital vorangebracht haben</em></h2>
            </div>
          </div>
          <div className="ref-grid-3 reveal">
            {referenzen.map((r) => (
              <RefCard item={r} key={r.cat} />
            ))}
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">09 — Für deine Branche</span>
              <h2 className="band-title">So <em>könnte</em> es aussehen</h2>
            </div>
            <p className="band-note">
              Sechs Richtungen als Beispiel. Am Ende entsteht jede Website
              individuell nach der eigenen Marke — keine dieser Vorlagen wird
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
            Vorlagen. Jede Pixel56-Website wird eigens für die Marke, Farben
            und Zielgruppe des jeweiligen Kunden entworfen.
          </p>
        </section>

        <section className="band" id="bewertungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">10 — Bewertungen</span>
              <h2 className="band-title">27 Stimmen, <em>ein Ergebnis</em></h2>
            </div>
          </div>
          <Reviews reviews={reviews} />
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">11 — Häufige Fragen</span>
              <h2 className="band-title">Fragen, die <em>oft kommen</em></h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

        <CloseCta>
          Lass uns über deinen <em>digitalen Auftritt</em> sprechen.
        </CloseCta>

        <SiteFooter />
      </div>
    </>
  );
}
