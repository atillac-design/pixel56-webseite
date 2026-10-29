import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, ClientMarquee, ContactStrip, FaqList } from "@/components/ui";
import { JobMock } from "@/components/mocks";
import { site } from "@/lib/site";
import { routes } from "@/lib/routes";

const canonical = "/stellenangebote/pixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in";
const bewerbungEmail = `mailto:${site.email}?subject=Bewerbung%20Vertrieb%20bei%20Pixel56`;

export const metadata: Metadata = {
  title: "Vertriebsprofi/in bei Pixel56 in Koblenz",
  description:
    "Vertrieb bei Pixel56 in der Region Koblenz: Erstgespräche mit Handwerkern und KMU, Leistungen verständlich erklären, beraten. Umfang nach Absprache.",
  alternates: { canonical },
  openGraph: { title: "Vertriebsprofi/in bei Pixel56", description: "Beratung vor Druck: Vertrieb für Websites, Kampagnen und Content in der Region Koblenz.", url: canonical },
};

const aufgaben = [
  { b: "Erstgespräche führen", small: "Mit Inhabern aus Handwerk, Dienstleistung und Mittelstand herausfinden, wo Anfragen verloren gehen und welcher Baustein hilft." },
  { b: "Leistungen verständlich erklären", small: "Website, Meta Ads, Google Ads, Content und KI-Prozesse ohne Fachchinesisch auf den Punkt bringen." },
  { b: "Angebote vorbereiten", small: "Umfang, Ablauf und Preis gemeinsam mit Atilla festlegen, damit das Angebot zum Ziel des Betriebs passt." },
  { b: "Dranbleiben", small: "Zusagen einhalten, nachfassen, Kunden nach dem Start weiter begleiten. Beziehung statt Abschlussdruck." },
];

const passt = [
  { problem: "Du hörst genauer zu, als du redest", answer: "Der Betrieb erklärt sein Problem, du erkennst den Hebel. Verkauft wird, was hilft, nicht was gerade im Paket ist." },
  { problem: "Du kennst kleine Betriebe", answer: "Handwerk, Dienstleistung, Gastronomie, Vereine: Du weißt, wie Inhaber denken, wie knapp ihre Zeit ist und was sie von Agenturen halten." },
  { problem: "Du arbeitest eigenständig", answer: "Termine, Nachfassen, Dokumentation laufen bei dir ohne Erinnerung. Zusagen hältst du ein, auch die kleinen." },
  { problem: "Du bist ehrlich, auch wenn es unbequem ist", answer: "Wenn eine Leistung dem Betrieb nichts bringt, sagst du es. Wir verlieren lieber ein Projekt als einen Kunden nach drei Monaten." },
];

const faqs = [
  { q: "Ist das eine Festanstellung, freie Mitarbeit oder Provision?", a: "Aktuell suchen wir vor allem freiberufliche Vertriebspartner auf Provisionsbasis. Was das genau heißt, steht auf unserer Seite Vertriebspartner. Andere Modelle besprechen wir offen im Gespräch." },
  { q: "Muss ich in Koblenz wohnen?", a: "Nein, aber die Region ist von Vorteil, weil viele Erstgespräche und Kennenlerntermine vor Ort stattfinden. Vieles läuft auch per Video-Call." },
  { q: "Brauche ich Marketing-Erfahrung?", a: "Hilfreich, aber wichtiger ist, dass du Betriebe verstehst und erklären kannst. Die Leistungen bringen wir dir bei, Zuhören und Ehrlichkeit nicht." },
  { q: "Wie läuft die Bewerbung?", a: "E-Mail mit Lebenslauf oder kurzem Profil und drei Sätzen zu dir. Dann ein Gespräch, per Video-Call oder bei einem Kaffee in Koblenz. Kein Anschreiben, kein Portal." },
];

export default function VertriebsprofiPage() {
  // Bewusst kein JobPosting-Schema: Umfang und Modell sind offen, Google
  // verlangt für Stellenanzeigen konkrete Angaben. WebPage reicht hier.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}${canonical}#stelle`,
    url: `${site.url}${canonical}`,
    name: "Vertriebsprofi/in bei Pixel56",
    description: "Vertrieb und Beratung für Websites, Kampagnen, Content und KI-Prozesse in der Region Koblenz. Umfang und Modell nach Absprache.",
    about: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium page-suite career-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Karriere", page: "Vertriebsprofi/in" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">STELLENANGEBOT · VERTRIEB · REGION KOBLENZ</div>
              <h1>
                <span>Vertriebsprofi/in</span>
                <span className="service-hero-accent">bei Pixel56.</span>
                <span>Beratung vor Druck.</span>
              </h1>
              <p>
                Du verstehst die Herausforderungen kleiner Betriebe, hörst
                genauer zu, als du verkaufst, und kannst digitale Leistungen
                verständlich auf den Punkt bringen? Dann schreib uns. Wir sagen
                dir offen, ob und in welcher Form aktuell eine Zusammenarbeit
                möglich ist.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={bewerbungEmail}>
                  Möglichkeiten anfragen <ArrowIcon />
                </a>
                <Link className="btn-text" href={routes.careers}>
                  Alle Karriereinfos →
                </Link>
              </div>
              <div className="premium-proof" aria-label="Stelle auf einen Blick">
                <span>Region Koblenz</span>
                <span>Umfang nach Absprache</span>
                <span>Bewerbung per E-Mail</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Stellenanzeige">
              <div className="web-board-top">
                <span>PIXEL56 · STELLE</span>
                <i>OFFEN</i>
              </div>
              <JobMock title="Vertriebsprofi/in (m/w/d)" />
              <div className="web-board-signals">
                <div><span>01</span><b>Zuhören</b><small>vor Verkaufen</small></div>
                <div><span>02</span><b>Erklären</b><small>ohne Fachchinesisch</small></div>
                <div><span>03</span><b>Zusagen</b><small>einhalten</small></div>
                <div><span>04</span><b>Ehrlich</b><small>auch bei Nein</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Stelle auf einen Blick">
          <div>
            <span>Rolle</span>
            <strong>Vertrieb &amp; Beratung</strong>
          </div>
          <div>
            <span>Ort</span>
            <strong>Region Koblenz, teils remote</strong>
          </div>
          <div>
            <span>Modell</span>
            <strong>Nach Absprache</strong>
          </div>
          <div>
            <span>Bewerbung</span>
            <strong>E-Mail an {site.email}</strong>
          </div>
        </section>

        <section className="band theme-light" id="aufgaben">
          <div className="split2 align-top">
            <div className="reveal">
              <span className="band-tag">01 — Was du machst</span>
              <h2 className="band-title">
                Betriebe verstehen, <em>Lösungen erklären</em>
              </h2>
              <p className="lead">
                Pixel56 baut Websites, Kampagnen, Content und KI-Prozesse für
                Handwerker, Dienstleister und Vereine. Dein Part: der erste
                Kontakt. Du führst Erstgespräche, erkennst, welcher Baustein
                dem Betrieb hilft, und bereitest mit Atilla das Angebot vor.
              </p>
              <p className="lead">
                Keine Kaltakquise-Schlacht mit Skript. Beratung, die so ehrlich
                ist, dass Kunden bleiben.
              </p>
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

        <section className="band theme-light" id="passt">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Was zählt</span>
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

        <section className="band dark-stage service-dark-stage" id="ablauf">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">03 — So geht es weiter</span>
              <h2 className="band-title">
                E-Mail, Gespräch, <em>Entscheidung</em>
              </h2>
              <p className="lead">
                Schick uns Lebenslauf oder ein kurzes Profil und drei Sätze zu
                dir. Dann reden wir, per Video-Call oder bei einem Kaffee in Koblenz. Danach
                sagen wir offen, ob und wie es passt.
              </p>
              <a className="btn-primary" href={bewerbungEmail}>Bewerbung per E-Mail senden <ArrowIcon /></a>
            </div>
            <div className="reveal">
              <ul className="lines">
                <li><Link href="/vertriebspartner">Vertriebspartner auf Provisionsbasis</Link>: unser bevorzugtes Modell, mit allen Details</li>
                <li>Kein Anschreiben, kein Bewerbungsportal, keine Pflichtfelder</li>
                <li>Antwort nach Sichtung, auch ein Nein kommt mit Begründung</li>
                <li>Gespräch auf Augenhöhe statt Assessment-Center</li>
                <li>Modell und Umfang werden gemeinsam festgelegt</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Häufige Fragen</span>
              <h2 className="band-title">
                Was Bewerber <em>vorher fragen</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <ContactStrip />
          <section className="close-cta reveal">
            <div className="close-glow" />
            <h2>Passt das zu dir? <em>Melde dich direkt.</em></h2>
            <a className="btn-primary" href={bewerbungEmail}>Bewerbung per E-Mail senden <ArrowIcon /></a>
          </section>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
