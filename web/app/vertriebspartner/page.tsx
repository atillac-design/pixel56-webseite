import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, ClientMarquee, ContactStrip, FaqList, WaMock } from "@/components/ui";
import { JobMock } from "@/components/mocks";
import { site } from "@/lib/site";
import { fallstudien } from "@/lib/projekte";
import { holeGoogleStand } from "@/lib/google-bewertungen";
import { routes } from "@/lib/routes";

const canonical = "/vertriebspartner";
const bewerbungEmail = `mailto:${site.email}?subject=Vertriebspartner%20bei%20Pixel56`;
const whatsapp = "https://wa.me/491785282464?text=Hallo%20Atilla%2C%20ich%20interessiere%20mich%20f%C3%BCr%20die%20Vertriebspartnerschaft%20bei%20Pixel56.";

/**
 * Provisionssatz als Text, z. B. "30 %". Solange der Inhaber keine Zahl
 * freigibt, bleibt er leer und die Seite nennt die Zahl fürs Erstgespräch.
 * Keine Zahl erfinden.
 */
const provisionsSatz: string | null = null;

export const metadata: Metadata = {
  title: "Vertriebspartner auf Provisionsbasis (m/w/d)",
  description:
    "Pixel56 sucht freiberufliche Vertriebspartner: Kaltakquise und Erstgespräche für Websites, Ads, Content und KI. Überdurchschnittliche Provision, langfristig.",
  alternates: { canonical },
  openGraph: {
    title: "Vertriebspartner bei Pixel56: du verkaufst, wir liefern",
    description: "Freiberuflich, auf Provisionsbasis, langfristig. Acht Leistungen, veröffentlichte Projekte und Google-Bewertungen, die du zeigen kannst.",
    url: canonical,
    images: [{ url: `${site.url}/bilder/og-pixel56-premium.png` }],
  },
};

const argumente = (projekte: number, sterne: string, bewertungen: number) => [
  { tag: "Punkt 01", title: "Du verkaufst etwas, das du zeigen kannst", text: `${projekte} veröffentlichte Projekte mit Ausgangslage und Umsetzung, ${bewertungen} Google-Bewertungen mit ${sterne} Sternen, Kundenstimmen im Wortlaut. Du musst nichts versprechen, was es noch nicht gibt.` },
  { tag: "Punkt 02", title: "Acht Leistungen, ein Ansprechpartner", text: "Website, Google Ads, Meta Ads, Content, Landingpages, Mitarbeitergewinnung, SEO, KI-Automatisierung. Jeder Betrieb hat irgendwo eine Lücke, und du hast immer einen passenden Einstieg." },
  { tag: "Punkt 03", title: "Du bist nicht allein unterwegs", text: "Zielkundenlisten, Gesprächsleitfäden, Angebotsvorlagen und Atilla im Hintergrund für Fachfragen. Die ersten Gespräche führen wir zu zweit, bis du sattelfest bist." },
];

const aufgaben = [
  { b: "Kaltakquise, die nicht nach Skript klingt", small: "Telefon, Besuch vor Ort, LinkedIn, Empfehlung. Du findest Betriebe, bei denen Anfragen verloren gehen, und sprichst sie an. Wie, entscheidest du." },
  { b: "Erstgespräche führen", small: "Mit Inhabern aus Handwerk, Dienstleistung und Mittelstand herausfinden, wo es hakt, und den passenden Baustein benennen." },
  { b: "Übergabe an die Umsetzung", small: "Sobald ein Betrieb Interesse hat, bereitest du mit Atilla das Angebot vor. Umsetzung, Projektleitung und Rechnung laufen bei Pixel56." },
  { b: "Dranbleiben", small: "Nachfassen, Zusagen einhalten, Bestandskunden nach dem Start weiter begleiten. Wer einmal zufrieden ist, bucht den nächsten Baustein meist bei dir." },
];

const leistungenFuerDich = [
  { b: "Provision deutlich über dem Üblichen", small: provisionsSatz ? `${provisionsSatz} vom Netto-Auftragswert, schriftlich im Vertrag festgehalten.` : "Den genauen Satz nennen wir dir im ersten Gespräch, offen und ohne Umschweife, und halten ihn schriftlich im Vertrag fest." },
  { b: "Freiberuflich, ohne Stechuhr", small: "Du arbeitest als selbstständiger Handelsvertreter, teilst dir Zeit und Weg selbst ein und entscheidest, wie viel du machst." },
  { b: "Auf Dauer gedacht", small: "Wir suchen keinen Sprint für ein Quartal, sondern jemanden, der mit Pixel56 wächst. Wer liefert, bekommt mehr Verantwortung und mehr Gebiet." },
  { b: "Rückendeckung statt Druck", small: "Wir setzen keine Wochenquoten. Was zählt, ist, dass Kunden nach dem Gespräch mit dir sagen: Das hat Hand und Fuß." },
];

const passt = [
  { problem: "Du hast Kaltakquise schon gemacht, nicht nur darüber gelesen", answer: "Du weißt, wie sich der zehnte Anruf am Nachmittag anfühlt, und machst den elften trotzdem. Aus welcher Branche du kommst, ist zweitrangig." },
  { problem: "Du kennst kleine Betriebe", answer: "Handwerk, Dienstleistung, Gastronomie, Vereine: Du weißt, wie Inhaber denken, wie knapp ihre Zeit ist und was sie von Agenturen halten." },
  { problem: "Du verkaufst, was hilft, nicht was gerade geht", answer: "Wenn eine Website einem Betrieb nichts bringt, sagst du es. Wir verlieren lieber ein Projekt als einen Kunden nach drei Monaten. Dafür gibt es auch keine Rabatte zu verteilen: Die Preise macht Pixel56." },
  { problem: "Du arbeitest eigenständig", answer: "Termine, Nachfassen, Dokumentation laufen bei dir ohne Erinnerung. Zusagen hältst du ein, auch die kleinen." },
];

const start = [
  { nr: "01", title: "Nachricht", text: "WhatsApp oder E-Mail, drei ehrliche Sätze: Was hast du bisher verkauft, wie arbeitest du, was suchst du? Kein Lebenslauf-Roman." },
  { nr: "02", title: "Gespräch", text: "Per Video-Call oder bei einem Kaffee in Koblenz. Wir reden über Provision, Gebiet, Leistungen und Erwartungen, in beide Richtungen." },
  { nr: "03", title: "Einarbeitung", text: "Du lernst die acht Leistungen, die Projekte und die typischen Einwände kennen. Die ersten Gespräche führen wir gemeinsam." },
  { nr: "04", title: "Vertrag und Start", text: "Handelsvertretervertrag schriftlich, Provision und Abrechnung klar geregelt. Dann gehst du los, mit Listen und Leitfäden im Gepäck." },
];

const faqs = [
  { q: "Ist das eine Festanstellung?", a: "Nein. Wir suchen freiberufliche Vertriebspartner auf Provisionsbasis, rechtlich als selbstständige Handelsvertreter. Wer ein festes Gehalt braucht, ist hier nicht richtig, und das sagen wir lieber vorher als nach drei Wochen." },
  { q: "Gibt es ein Fixum?", a: "Nein, die Vergütung ist reine Provision. Dafür liegt sie deutlich über dem, was in der Branche üblich ist, und wird schriftlich festgehalten. Den Satz nennen wir im ersten Gespräch." },
  { q: "Wie hoch ist die Provision genau?", a: "Das besprechen wir offen im ersten Gespräch, zusammen mit der Frage, wie Folgeaufträge und laufende Leistungen behandelt werden. Was wir vereinbaren, steht im Vertrag, nicht nur im Gedächtnis." },
  { q: "Brauche ich ein Gewerbe?", a: "Ja, als Handelsvertreter brauchst du ein angemeldetes Gewerbe. Wenn du noch keins hast, erklären wir dir im Gespräch, was dafür nötig ist. Kompliziert ist es nicht." },
  { q: "Muss ich in der Region Koblenz sein?", a: "Nein. Die meisten Kunden sitzen bislang in der Region Koblenz, aber Pixel56 arbeitet deutschlandweit. Wer in seiner eigenen Region Betriebe kennt, bringt genau das mit, was wir suchen." },
  { q: "Bekomme ich Leads oder muss ich alles selbst finden?", a: "Beides. Du bekommst Zielkundenlisten und Gesprächsleitfäden von uns, dazu Anfragen, die über die Website und Empfehlungen kommen, wenn sie in dein Gebiet fallen. Der Kern deiner Arbeit bleibt aber die eigene Akquise." },
  { q: "Wer ist Vertragspartner des Kunden?", a: "Pixel56. Du vermittelst, Pixel56 setzt um, stellt die Rechnung und haftet für die Leistung. Du bekommst deine Provision aus dem bezahlten Auftrag." },
  { q: "Kann ich das neben einer anderen Tätigkeit machen?", a: "Ja, solange du erreichbar bist und deine Zusagen gegenüber Kunden einhältst. Zeit und Umfang teilst du dir selbst ein." },
];

export default async function VertriebspartnerPage() {
  const google = await holeGoogleStand();
  const gruende = argumente(fallstudien.length, google.bewertung.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 }), google.anzahl);
  // Bewusst kein JobPosting-Schema: Google verlangt dafür Vergütungs- und
  // Ortsangaben, die hier bewusst im Gespräch geklärt werden. WebPage reicht.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}${canonical}#vertriebspartner`,
    url: `${site.url}${canonical}`,
    name: "Vertriebspartner auf Provisionsbasis bei Pixel56",
    description: "Freiberufliche Vertriebspartnerschaft für Websites, Google Ads, Meta Ads, Content, SEO und KI-Automatisierung. Kaltakquise und Erstgespräche, Umsetzung durch Pixel56.",
    about: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium page-suite career-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Karriere", page: "Vertriebspartner" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">VERTRIEBSPARTNER · PROVISION · FREIBERUFLICH</div>
              <h1>
                <span>Du gewinnst die Kunden.</span>
                <span className="service-hero-accent">Wir liefern die Arbeit.</span>
                <span>Du bekommst den Anteil.</span>
              </h1>
              <p>
                Pixel56 sucht Vertriebspartner auf Provisionsbasis, die
                Kaltakquise können und wollen: Betriebe ansprechen,
                Erstgespräche führen, Kunden gewinnen. Die Umsetzung von
                Website, Kampagne, Content und KI übernehmen wir. Die
                Provision liegt deutlich über dem, was Agenturen üblicherweise
                zahlen, und die Zusammenarbeit ist auf Dauer angelegt.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={whatsapp} target="_blank" rel="noopener">
                  Per WhatsApp melden <ArrowIcon />
                </a>
                <a className="btn-text" href={bewerbungEmail}>
                  Lieber per E-Mail →
                </a>
              </div>
              <div className="premium-proof" aria-label="Partnerschaft auf einen Blick">
                <span>Reine Provision, überdurchschnittlich</span>
                <span>Freiberuflich</span>
                <span>Deutschlandweit, Schwerpunkt Region Koblenz</span>
                <span>Langfristig</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Partnerschaft im Überblick">
              <div className="web-board-top">
                <span>PIXEL56 · VERTRIEBSPARTNER</span>
                <i>OFFEN</i>
              </div>
              <JobMock title="Vertriebspartner (m/w/d), Provision" />
              <div className="web-board-signals">
                <div><span>01</span><b>Akquise</b><small>du</small></div>
                <div><span>02</span><b>Angebot</b><small>gemeinsam</small></div>
                <div><span>03</span><b>Umsetzung</b><small>Pixel56</small></div>
                <div><span>04</span><b>Provision</b><small>an dich</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Partnerschaft auf einen Blick">
          <div>
            <span>Modell</span>
            <strong>Freiberuflich, Handelsvertreter</strong>
          </div>
          <div>
            <span>Vergütung</span>
            <strong>{provisionsSatz ? `${provisionsSatz} Provision` : "Provision, über Branchenniveau"}</strong>
          </div>
          <div>
            <span>Aufgabe</span>
            <strong>Kaltakquise und Erstgespräche</strong>
          </div>
          <div>
            <span>Gebiet</span>
            <strong>Deutschlandweit, Schwerpunkt Koblenz</strong>
          </div>
        </section>

        <section className="band theme-light" id="warum">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">01 — Warum sich das lohnt</span>
              <h2 className="band-title">
                Verkaufen ist leichter, <em>wenn das Produkt stimmt</em>
              </h2>
            </div>
            <p className="band-note">
              Drei Gründe, warum Vertrieb für Pixel56 kein Verkaufen von
              heißer Luft ist.
            </p>
          </div>
          <div className="audience-grid cols-3 reveal">
            {gruende.map((g) => (
              <article className="audience-card" key={g.tag}>
                <span>{g.tag}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="aufgaben">
          <div className="split2 align-top">
            <div className="reveal">
              <span className="band-tag">02 — Was du machst</span>
              <h2 className="band-title">
                Der erste Kontakt <em>gehört dir</em>
              </h2>
              <p className="lead">
                Pixel56 baut Websites, Kampagnen, Content und KI-Prozesse für
                Handwerker, Dienstleister und den Mittelstand. Was fehlt, ist
                jemand, der draußen die Tür öffnet. Du findest Betriebe, bei
                denen Anfragen verloren gehen, sprichst sie an und führst das
                erste Gespräch.
              </p>
              <p className="lead">
                Ab dem Angebot arbeiten wir zu zweit. Ab dem Auftrag übernimmt
                Pixel56. Du bleibst der Mensch, den der Kunde kennt.
              </p>
              <Link className="body-link" href={routes.projects}>
                Die Projekte, die du zeigen kannst <ArrowIcon />
              </Link>
            </div>
            <div className="mini-grid reveal" aria-label="Aufgaben">
              {aufgaben.map((item) => (
                <div key={item.b}>
                  <b>{item.b}</b>
                  <small>{item.small}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="bekommst">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Was du bekommst</span>
              <h2 className="band-title">
                Provision, Freiheit, <em>Perspektive</em>
              </h2>
            </div>
            <p className="band-note">
              Kein Fixum, dafür ein Anteil, der sich lohnt, und eine
              Zusammenarbeit, die nicht nach dem ersten Quartal endet.
            </p>
          </div>
          <div className="mini-grid reveal" aria-label="Was du bekommst">
            {leistungenFuerDich.map((item) => (
              <div key={item.b}>
                <b>{item.b}</b>
                <small>{item.small}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="passt">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Wer passt</span>
              <h2 className="band-title">
                Vier Dinge, <em>die wichtiger sind als der Lebenslauf</em>
              </h2>
            </div>
            <p className="band-note">
              Abschlüsse interessieren uns weniger als die Frage, wie du mit
              einem Dachdecker sprichst, der gerade von der Baustelle kommt.
            </p>
          </div>
          <div className="friction-list plain reveal">
            {passt.map((item, index) => (
              <div className="friction-row" key={item.problem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.problem}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="start">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — So geht es los</span>
              <h2 className="band-title">
                Vier Schritte <em>bis zum ersten eigenen Gespräch</em>
              </h2>
            </div>
            <p className="band-note">
              Kein Portal, keine Pflichtfelder. Eine Nachricht reicht.
            </p>
          </div>
          <div className="mini-grid cols-4 reveal">
            {start.map((step) => (
              <div key={step.nr}>
                <b>{step.nr} · {step.title}</b>
                <small>{step.text}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="kennenlernen">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">06 — Kennenlernen</span>
              <h2 className="band-title">
                Erst reden, <em>dann Vertrag</em>
              </h2>
              <p className="lead">
                Schreib Atilla direkt per WhatsApp oder E-Mail. Drei Sätze zu
                dir reichen. Dann ein Gespräch, per Video-Call oder bei einem
                Kaffee in Koblenz, in dem wir Provision, Gebiet und Erwartungen
                offen auf den Tisch legen. Danach entscheiden beide Seiten.
              </p>
              <a className="btn-primary" href={whatsapp} target="_blank" rel="noopener">Per WhatsApp melden <ArrowIcon /></a>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 · Atilla"
                messages={[
                  { from: "in", text: "Hi Atilla, ich mache seit Jahren Vertrieb für Handwerksbetriebe und suche eine Partnerschaft auf Provision." },
                  { from: "out", text: "Klingt gut. Hast du diese Woche Zeit für einen Call? Dann reden wir über Provision und Gebiet." },
                  { from: "in", text: "Donnerstag Nachmittag passt." },
                ]}
                footer="So schnell kann Kennenlernen gehen"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">07 — Häufige Fragen</span>
              <h2 className="band-title">
                Was Vertriebler <em>vorher wissen wollen</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <ContactStrip />
          <section className="close-cta reveal" id="kontakt">
            <div className="close-glow" />
            <h2>Du kannst verkaufen? <em>Dann reden wir.</em></h2>
            <a className="btn-primary" href={whatsapp} target="_blank" rel="noopener">Per WhatsApp melden <ArrowIcon /></a>
          </section>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
