import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, ClientMarquee, ContactStrip, FaqList, WaMock } from "@/components/ui";
import { site } from "@/lib/site";
import { routes } from "@/lib/routes";
import { fallstudien } from "@/lib/projekte";
import { holeGoogleStand } from "@/lib/google-bewertungen";

const canonical = "/partner";
const partnerEmail = `mailto:${site.email}?subject=Partnerprogramm%20Pixel56`;
const whatsapp = "https://wa.me/491785282464?text=Hallo%20Atilla%2C%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Partnerprogramm%20von%20Pixel56.";

/**
 * Provisionssätze als Text, z. B. "10 %" / "30 %". Solange der Inhaber
 * keine Zahlen freigibt, bleiben sie leer und die Seite verweist auf das
 * Partnergespräch. Keine Zahl erfinden.
 */
const provision = { empfehlung: "bis zu 25 %" as string | null, vertrieb: "bis zu 35 %" as string | null };

export const metadata: Metadata = {
  title: "Partnerprogramm: Vertriebspartner werden",
  description:
    "Pixel56 wächst mit Vertriebspartnern statt mit einer Vertriebsabteilung. Du bringst dein Netzwerk, wir bringen die Umsetzung. Freiberuflich, beteiligt, auf Dauer.",
  alternates: { canonical },
  openGraph: {
    title: "Pixel56 Partnerprogramm: du bringst das Netzwerk, wir die Umsetzung",
    description: "Drei Partnerstufen, schriftlicher Vertrag, Beteiligung am Auftrag. Für Menschen, die Betriebe kennen und Verantwortung wollen.",
    url: canonical,
    images: [{ url: `${site.url}/bilder/og-pixel56-premium.png` }],
  },
};

const haltung = [
  { tag: "Grund 01", title: "Klein bleiben, nah am Kunden", text: "Pixel56 ist bewusst eine kleine Agentur. Atilla arbeitet selbst in jedem Projekt. Eine eigene Vertriebsabteilung würde Struktur kosten, die wir lieber in die Arbeit stecken." },
  { tag: "Grund 02", title: "Vertrauen verkauft besser als Werbung", text: "Ein Inhaber hört auf jemanden, den er kennt. Partner mit eigenem Netzwerk öffnen Türen, die keine Anzeige öffnet. Deshalb wachsen wir über Menschen, nicht über Budget." },
  { tag: "Grund 03", title: "Wenige Partner, eng begleitet", text: "Wir arbeiten lieber mit drei Partnern eng zusammen als mit zwanzig lose. Jeder Partner kennt die Projekte, die Preise und die Grenzen dessen, was wir versprechen." },
];

const stufen = [
  { nr: "Stufe 01", name: "Empfehlungspartner", wer: "Für Steuerberater, Handwerker, Berater, Vereinsvorstände: Menschen mit Kontakten, die keine Vertriebsarbeit machen wollen.", was: "Du stellst den Kontakt her, Pixel56 führt das Gespräch. Kommt ein Auftrag zustande, bekommst du eine Empfehlungsprovision.", provision: provision.empfehlung },
  { nr: "Stufe 02", name: "Vertriebspartner", wer: "Für Menschen mit Vertriebserfahrung, die Betriebe ansprechen, Erstgespräche führen und Kunden gewinnen wollen.", was: "Du führst die Gespräche selbst, bereitest mit Atilla das Angebot vor und bleibst Ansprechpartner. Dafür die volle Provision am Auftrag.", provision: provision.vertrieb },
  { nr: "Stufe 03", name: "Gebietspartner", wer: "Für Vertriebspartner, die geliefert haben und eine Region dauerhaft verantworten wollen.", was: "Eigenes Gebiet, Beteiligung auch an Folgeaufträgen deiner Kunden, Mitsprache bei Angebot und Ausbau. Die langfristige Form der Zusammenarbeit.", provision: provision.vertrieb },
];

const bekommst = [
  { b: "Belege statt Versprechen", small: "Veröffentlichte Projekte mit Ausgangslage und Umsetzung, Google-Bewertungen, Kundenstimmen im Wortlaut. Du zeigst, was es gibt, nicht, was kommen soll." },
  { b: "Acht Leistungen, ein Ansprechpartner", small: "Website, Google Ads, Meta Ads, Content, Landingpages, Mitarbeitergewinnung, SEO, KI-Automatisierung. Für jeden Betrieb gibt es einen passenden Einstieg." },
  { b: "Onboarding und Material", small: "Einführung in Leistungen, Projekte und typische Einwände, Unterlagen im Pixel56-Design, Zielkundenlisten und Gesprächsleitfäden. Die ersten Gespräche führen wir zu zweit." },
  { b: "Klare Regeln, schriftlich", small: "Handelsvertretervertrag, Provision und Abrechnung stehen im Vertrag, nicht im Gedächtnis. Abgerechnet wird monatlich auf bezahlte Aufträge." },
  { b: "Atilla im Hintergrund", small: "Fachfragen, Angebote, Preise: Du bist nie allein mit einer Frage, die du nicht beantworten kannst. Umsetzung, Projektleitung und Rechnung laufen bei Pixel56." },
  { b: "Freiheit in Zeit und Weg", small: "Du arbeitest selbstständig, teilst dir Zeit und Umfang selbst ein und entscheidest, wie du Betriebe ansprichst: Besuch, Telefon, Empfehlung, LinkedIn." },
];

const passt = [
  { problem: "Du kennst kleine Betriebe", answer: "Handwerk, Dienstleistung, Gastronomie, Vereine: Du weißt, wie Inhaber denken, wie knapp ihre Zeit ist und was sie von Agenturen halten." },
  { problem: "Du hast ein Netzwerk oder baust eines auf", answer: "Entweder kennst du schon Betriebe, die dir vertrauen, oder du hast Neukundengewinnung schon gemacht und machst den elften Anruf trotzdem gern." },
  { problem: "Du empfiehlst, was hilft, nicht was gerade geht", answer: "Wenn eine Website einem Betrieb nichts bringt, sagst du es. Wir verlieren lieber ein Projekt als einen Kunden nach drei Monaten. Rabatte gibt es keine zu verteilen: Die Preise macht Pixel56." },
  { problem: "Du hältst Zusagen ein, auch die kleinen", answer: "Rückruf am Dienstag heißt Rückruf am Dienstag. Der Betrieb merkt sich, wer verlässlich ist, und das fällt auf Pixel56 zurück, im Guten wie im Schlechten." },
];

const ablauf = [
  { nr: "01", title: "Nachricht", text: "WhatsApp oder E-Mail, drei Sätze: Woher kennst du Betriebe, was hast du bisher gemacht, welche Stufe passt zu dir?" },
  { nr: "02", title: "Partnergespräch", text: "Per Video-Call oder bei einem Kaffee in Koblenz. Provision, Gebiet, Erwartungen und Grenzen, offen in beide Richtungen. Danach entscheiden beide Seiten." },
  { nr: "03", title: "Onboarding", text: "Leistungen, Projekte, Preise, typische Einwände. Unterlagen und Listen bekommst du von uns. Die ersten Gespräche führen wir gemeinsam." },
  { nr: "04", title: "Vertrag und Start", text: "Handelsvertretervertrag schriftlich, Abrechnung geregelt. Dann gehst du los, und wir bleiben im Hintergrund erreichbar." },
];

const faqs = [
  { q: "Ist das eine Festanstellung?", a: "Nein. Das Partnerprogramm ist für Selbstständige: rechtlich Handelsvertreter, vergütet über eine Beteiligung am Auftrag. Wer ein festes Gehalt braucht, ist hier nicht richtig, und das sagen wir lieber vorher als nach drei Wochen." },
  { q: "Wie hoch ist die Beteiligung?", a: "Empfehlungspartner erhalten bis zu 25 Prozent, Vertriebs- und Gebietspartner bis zu 35 Prozent vom Netto-Auftragswert. Wo genau du innerhalb dieser Spanne startest, hängt von Erfahrung, Zusammenarbeit und Qualität der Kontakte ab. Das besprechen wir im Partnergespräch und halten es im Vertrag fest." },
  { q: "Gibt es ein Fixum?", a: "Nein. Partner werden am Auftrag beteiligt, nicht pauschal bezahlt. Dafür gibt es keine Quoten, keine Stechuhr und keine Mindeststunden." },
  { q: "Brauche ich ein Gewerbe?", a: "Für Vertriebs- und Gebietspartner ja, als Handelsvertreter. Empfehlungspartner, die ohnehin selbstständig sind, rechnen über ihr bestehendes Unternehmen ab. Was im Einzelfall nötig ist, klären wir im Gespräch." },
  { q: "Muss ich in der Region Koblenz sein?", a: "Nein. Die meisten Kunden sitzen bislang in der Region Koblenz, Pixel56 arbeitet aber deutschlandweit. Wer in seiner eigenen Region Betriebe kennt, bringt genau das mit, was das Programm braucht." },
  { q: "Bekomme ich Kontakte von Pixel56?", a: "Zielkundenlisten und Gesprächsleitfäden ja. Anfragen, die über die Website oder Empfehlungen kommen, gehen an den Partner, in dessen Gebiet sie fallen. Der Kern bleibt aber dein eigenes Netzwerk." },
  { q: "Wer ist Vertragspartner des Kunden?", a: "Pixel56. Du vermittelst oder berätst, Pixel56 setzt um, stellt die Rechnung und haftet für die Leistung. Deine Beteiligung wird aus dem bezahlten Auftrag abgerechnet." },
  { q: "Kann ich das neben meiner Tätigkeit machen?", a: "Ja. Für Empfehlungspartner ist das der Normalfall. Für Vertriebspartner auch, solange du erreichbar bist und Zusagen gegenüber Betrieben einhältst." },
];

export default async function PartnerPage() {
  const google = await holeGoogleStand();
  const sterne = google.bewertung.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  // Bewusst kein JobPosting-Schema: Es ist keine Stelle, und Google verlangt
  // dafür Vergütungs- und Ortsangaben. WebPage reicht.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}${canonical}#partnerprogramm`,
    url: `${site.url}${canonical}`,
    name: "Pixel56 Partnerprogramm",
    description: "Partnerprogramm der Digitalagentur Pixel56: Empfehlungs-, Vertriebs- und Gebietspartner für Websites, Google Ads, Meta Ads, Content, SEO und KI-Automatisierung.",
    about: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium page-suite career-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Unternehmen", page: "Partnerprogramm" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">PARTNERPROGRAMM · FREIBERUFLICH · BETEILIGT</div>
              <h1>
                <span>Du bringst</span>
                <span className="service-hero-accent">das Netzwerk.</span>
                <span>Wir bringen die Umsetzung.</span>
              </h1>
              <p>
                Pixel56 wächst mit Vertriebspartnern statt mit einer
                Vertriebsabteilung. Wer Betriebe kennt und Verantwortung will,
                arbeitet mit uns zusammen: freiberuflich, am Auftrag beteiligt,
                auf Dauer. Websites, Kampagnen, Content und KI-Prozesse setzen
                wir um. Die Beziehung zum Kunden gehört dir.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={whatsapp} target="_blank" rel="noopener">
                  Partnergespräch anfragen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#stufen">
                  Die drei Stufen ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Programm auf einen Blick">
                <span>Drei Partnerstufen</span>
                <span>Bis zu 35 % Beteiligung</span>
                <span>Schriftlicher Vertrag</span>
                <span>Deutschlandweit</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Partnerprogramm im Überblick">
              <div className="web-board-top">
                <span>PIXEL56 · PARTNERPROGRAMM</span>
                <i>AUFNAHME OFFEN</i>
              </div>
              <div className="job-mock">
                <span className="jm-tag">Partnerstufen</span>
                <div className="jm-title">Empfehlung · Vertrieb · Gebiet</div>
                <div className="jm-line" />
                <div className="jm-line short" />
                <div className="jm-upload">Vertrag, Onboarding, Material, Abrechnung</div>
                <div className="jm-btn">Partnergespräch →</div>
              </div>
              <div className="web-board-signals">
                <div><span>01</span><b>Netzwerk</b><small>von dir</small></div>
                <div><span>02</span><b>Angebot</b><small>gemeinsam</small></div>
                <div><span>03</span><b>Umsetzung</b><small>Pixel56</small></div>
                <div><span>04</span><b>Beteiligung</b><small>monatlich</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Programm auf einen Blick">
          <div>
            <span>Modell</span>
            <strong>Freiberuflich, Handelsvertreter</strong>
          </div>
          <div>
            <span>Vergütung</span>
            <strong>Bis zu 25 % bzw. 35 % vom Auftrag</strong>
          </div>
          <div>
            <span>Belege</span>
            <strong>{fallstudien.length} Projekte, {google.anzahl} Google-Bewertungen ({sterne})</strong>
          </div>
          <div>
            <span>Gebiet</span>
            <strong>Deutschlandweit, Schwerpunkt Koblenz</strong>
          </div>
        </section>

        <section className="band theme-light" id="warum">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">01 — Warum Partner</span>
              <h2 className="band-title">
                Wachsen über Menschen, <em>nicht über Abteilungen</em>
              </h2>
            </div>
            <p className="band-note">
              Das Partnerprogramm ist eine Entscheidung, keine Notlösung.
              Drei Gründe, warum Pixel56 so verkauft.
            </p>
          </div>
          <div className="audience-grid cols-3 reveal">
            {haltung.map((g) => (
              <article className="audience-card" key={g.tag}>
                <span>{g.tag}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="stufen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Die drei Stufen</span>
              <h2 className="band-title">
                Vom Kontakt <em>zur eigenen Region</em>
              </h2>
            </div>
            <p className="band-note">
              Jede Stufe hat eine klare Rolle und eine klare Beteiligung. Wer
              liefert, steigt auf. Niemand muss unten anfangen, wenn die
              Erfahrung da ist.
            </p>
          </div>
          <div className="friction-list plain stufen reveal">
            {stufen.map((s, index) => (
              <div className="friction-row" key={s.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{s.name}</h3>
                <p>
                  <strong>{s.wer}</strong> {s.was}
                  {s.provision ? ` Beteiligung: ${s.provision} vom Netto-Auftragswert, abhängig von Zusammenarbeit und Qualität.` : ""}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="bekommst">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Was Partner bekommen</span>
              <h2 className="band-title">
                Rückendeckung, <em>schriftlich und im Alltag</em>
              </h2>
            </div>
            <p className="band-note">
              Ein Partnerprogramm ist nur so gut wie das, was hinter dem
              Partner steht.
            </p>
          </div>
          <div className="audience-grid cols-3 reveal">
            {bekommst.map((item) => (
              <article className="audience-card" key={item.b}>
                <h3>{item.b}</h3>
                <p>{item.small}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="passt">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Wen wir aufnehmen</span>
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

        <section className="band theme-light" id="ablauf">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — So wirst du Partner</span>
              <h2 className="band-title">
                Vier Schritte <em>bis zum ersten eigenen Gespräch</em>
              </h2>
            </div>
            <p className="band-note">
              Kein Portal, keine Pflichtfelder. Eine Nachricht reicht.
            </p>
          </div>
          <div className="mini-grid cols-4 reveal">
            {ablauf.map((step) => (
              <div key={step.nr}>
                <b>{step.nr} · {step.title}</b>
                <small>{step.text}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="gespraech">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">06 — Partnergespräch</span>
              <h2 className="band-title">
                Erst reden, <em>dann Vertrag</em>
              </h2>
              <p className="lead">
                Schreib Atilla direkt per WhatsApp oder E-Mail. Drei Sätze zu
                dir reichen. Im Gespräch legen wir Beteiligung, Gebiet und
                Erwartungen offen auf den Tisch, in beide Richtungen. Danach
                entscheiden beide Seiten, ob es passt.
              </p>
              <a className="btn-primary" href={whatsapp} target="_blank" rel="noopener">Partnergespräch anfragen <ArrowIcon /></a>
              <p className="lead" style={{ marginTop: 18 }}>
                <a className="body-link" href={partnerEmail}>Lieber per E-Mail <ArrowIcon /></a>
              </p>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 · Atilla"
                messages={[
                  { from: "in", text: "Hi Atilla, ich kenne viele Handwerksbetriebe im Westerwald und würde gern über das Partnerprogramm sprechen." },
                  { from: "out", text: "Gern. Hast du diese Woche Zeit für einen Call? Dann reden wir über Stufe, Beteiligung und Gebiet." },
                  { from: "in", text: "Donnerstag Nachmittag passt." },
                ]}
                footer="So beginnt ein Partnergespräch"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">07 — Häufige Fragen</span>
              <h2 className="band-title">
                Was Partner <em>vorher wissen wollen</em>
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
            <h2>Du kennst Betriebe, <em>die uns brauchen?</em></h2>
            <a className="btn-primary" href={whatsapp} target="_blank" rel="noopener">Partnergespräch anfragen <ArrowIcon /></a>
          </section>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
