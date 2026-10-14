import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, ClientMarquee, ContactStrip, FaqList, WaMock } from "@/components/ui";
import { JobMock } from "@/components/mocks";
import { getStellen } from "@/lib/sanity";
import { site } from "@/lib/site";
import { routes } from "@/lib/routes";

// CMS-Inhalte spätestens nach 5 Minuten übernehmen, ohne Neu-Deployment.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Karriere: Jobs bei Pixel56, remote und in Koblenz",
  description:
    "Jobs bei Pixel56 in Webdesign, Online-Marketing und Content für KMU-Projekte, remote mit Treffen in der Region Koblenz. Unkompliziert bewerben.",
  alternates: { canonical: routes.careers },
  openGraph: {
    title: "Karriere bei Pixel56: Arbeit, die live geht",
    description: "Websites, Kampagnen und Content für echte Betriebe. Kurze Wege, echte Verantwortung, Bewerbung ohne Umwege.",
    url: routes.careers,
  },
};

const vertriebsStelle = "/stellenangebote/pixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in";

const gruende = [
  { tag: "Grund 01", title: "Deine Arbeit geht live", text: "Websites, Kampagnen und Content für echte Kunden. Was du baust, wird veröffentlicht, gemessen und von Betrieben benutzt, nicht in einem Konzept-Ordner abgelegt." },
  { tag: "Grund 02", title: "Kurze Wege, echte Verantwortung", text: "Keine fünf Hierarchie-Ebenen. Wer eine gute Idee hat, setzt sie um und sieht das Ergebnis direkt beim Kunden." },
  { tag: "Grund 03", title: "Lernen am echten Fall", text: "SEO, Ads, Design, Content, KI: Bei uns arbeitest du über Disziplinen hinweg, statt in einer einzigen Nische zu bleiben." },
];

const arbeitsweise = [
  { b: "Ein Ansprechpartner pro Projekt", small: "Du kennst den Kunden, der Kunde kennt dich. Keine Übergaben zwischen Abteilungen." },
  { b: "Zwischenstände statt Präsentationen", small: "Klickbare Entwürfe, geschnittene Clips, laufende Kampagnen. Feedback kommt am echten Ding." },
  { b: "Ehrlich zum Kunden, ehrlich im Team", small: "Wenn etwas nicht funktioniert, sagen wir es. Auch wenn es unbequem ist." },
  { b: "Koblenz oder remote", small: "Vor-Ort-Drehs brauchen die Region, alles andere läuft per Video-Call und Chat." },
];

const bewerbung = [
  { nr: "01", title: "E-Mail schicken", text: "Lebenslauf oder Link zu Arbeitsproben, dazu drei ehrliche Sätze: Was kannst du, was suchst du? Kein Anschreiben-Roman." },
  { nr: "02", title: "Kurzes Gespräch", text: "Per Video-Call oder bei einem Kaffee in Koblenz. Kein Assessment-Center, keine Fangfragen. Wir wollen wissen, wie du denkst und arbeitest." },
  { nr: "03", title: "Probeaufgabe am echten Fall", text: "Eine kleine Aufgabe aus dem Alltag, bezahlt oder zeitlich eng begrenzt, damit beide Seiten sehen, ob es passt." },
  { nr: "04", title: "Entscheidung", text: "Wir sagen offen, ob und in welcher Form eine Zusammenarbeit möglich ist. Auch ein Nein kommt schnell und mit Begründung." },
];

const faqs = [
  { q: "Kann ich komplett remote arbeiten?", a: "Je nach Rolle ja. Content-Produktion braucht Vor-Ort-Termine in der Region Koblenz, Entwicklung, Kampagnen und Vertrieb funktionieren auch komplett remote." },
  { q: "Brauche ich ein klassisches Anschreiben?", a: "Nein. Lebenslauf plus Arbeitsproben sagen mehr als jede Floskel-Seite. Wenn du uns etwas mitgeben willst, reichen drei ehrliche Sätze." },
  { q: "Wie schnell bekomme ich eine Antwort?", a: "Wir melden uns nach Sichtung deiner Nachricht bei dir. Schreib uns gern direkt, wenn du eine zeitkritische Frage hast." },
  { q: "Nehmt ihr auch Quereinsteiger?", a: "Wenn die Arbeitsproben überzeugen, ja. Was du kannst, zählt mehr als wo du es gelernt hast." },
  { q: "Gibt es auch Praktika oder freie Mitarbeit?", a: "Beides ist möglich, wenn die Aufgabe passt. Schreib uns, was du suchst, dann sagen wir ehrlich, ob wir gerade etwas Passendes haben." },
];

export default async function KarrierePage() {
  const cmsStellen = await getStellen();
  const stellen = (cmsStellen ?? []).map((s) => ({ title: s.titel, meta: s.pensum }));
  const bewerbungEmail = `mailto:${site.email}?subject=Bewerbung%20bei%20Pixel56`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}${routes.careers}#karriere`,
    url: `${site.url}${routes.careers}`,
    name: "Karriere bei Pixel56",
    about: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium page-suite career-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Unternehmen", page: "Karriere" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">KARRIERE · BENDORF BEI KOBLENZ · REMOTE</div>
              <h1>
                <span>Arbeite an Dingen,</span>
                <span className="service-hero-accent">die live gehen.</span>
                <span>Nicht in Schubladen.</span>
              </h1>
              <p>
                Bei Pixel56 landet deine Arbeit nicht im Konzept-Ordner. Sie geht
                online, wird gemessen und macht für echte Betriebe einen
                Unterschied: Websites, Kampagnen, Content und KI-Prozesse für
                Handwerker, Dienstleister und Vereine.
              </p>
              <div className="premium-actions">
                <Link className="btn-primary" href="#stellen">
                  {stellen.length ? "Offene Stellen ansehen" : "Stellen und Initiativbewerbung"} <ArrowIcon />
                </Link>
                <Link className="btn-text" href="#warum">
                  Warum Pixel56? ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Arbeiten bei Pixel56">
                <span>Koblenz &amp; Remote</span>
                <span>Kurze Wege</span>
                <span>Echte Projekte</span>
                <span>Bewerbung ohne Umwege</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Beispiel einer Stellenanzeige">
              <div className="web-board-top">
                <span>PIXEL56 · BEWERBUNG</span>
                <i>OFFEN</i>
              </div>
              <JobMock title="Vertriebsprofi/in (m/w/d)" />
              <div className="web-board-signals">
                <div><span>01</span><b>E-Mail</b><small>statt Portal</small></div>
                <div><span>02</span><b>Gespräch</b><small>statt Test</small></div>
                <div><span>03</span><b>Probe</b><small>am echten Fall</small></div>
                <div><span>04</span><b>Antwort</b><small>mit Begründung</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Arbeiten bei Pixel56 auf einen Blick">
          <div>
            <span>Region</span>
            <strong>Koblenz oder remote</strong>
          </div>
          <div>
            <span>Bereiche</span>
            <strong>Webdesign, Kampagnen, Content, Vertrieb</strong>
          </div>
          <div>
            <span>Kunden</span>
            <strong>Handwerk, Mittelstand, Vereine</strong>
          </div>
          <div>
            <span>Bewerbung</span>
            <strong>Per E-Mail, ohne Anschreiben</strong>
          </div>
        </section>

        <section className="band theme-light" id="warum">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">01 — Warum Pixel56</span>
              <h2 className="band-title">
                Klein genug für Freiheit, <em>groß genug für Wirkung</em>
              </h2>
            </div>
            <p className="band-note">
              Keine Konzern-Floskeln. Drei Dinge, die den Arbeitsalltag hier
              tatsächlich ausmachen.
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

        <section className="band theme-light" id="arbeitsweise">
          <div className="split2 align-top">
            <div className="reveal">
              <span className="band-tag">02 — So arbeiten wir</span>
              <h2 className="band-title">
                Was du <em>im Alltag erwarten kannst</em>
              </h2>
              <p className="lead">
                Pixel56 ist bewusst klein. Atilla Ciftcioglu führt die Agentur
                und arbeitet selbst in den Projekten. Wer dazukommt, bekommt
                Verantwortung ab dem ersten Projekt und einen direkten Draht
                zum Kunden.
              </p>
              <p className="lead">
                Wir versprechen Kunden ehrliche Einschätzungen und kurze Wege.
                Dasselbe gilt nach innen: klare Absprachen, direktes Feedback,
                keine Politik.
              </p>
              <Link className="body-link" href={routes.about}>
                Mehr über Pixel56 <ArrowIcon />
              </Link>
            </div>
            <div className="mini-grid reveal" aria-label="Arbeitsweise">
              {arbeitsweise.map((item) => (
                <div key={item.b}>
                  <b>{item.b}</b>
                  <small>{item.small}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="stellen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Offene Stellen</span>
              <h2 className="band-title">
                Wen wir gerade <em>suchen</em>
              </h2>
            </div>
            <p className="band-note">
              {stellen.length ? "Aktuelle Positionen, remote mit Treffen in der Region Koblenz." : "Aktuell ist keine feste Stelle ausgeschrieben. Im Vertrieb sind wir offen für Gespräche, und Initiativbewerbungen sind ausdrücklich willkommen."}
            </p>
          </div>
          {stellen.length > 0 ? (
            <div className="job-list reveal">
              {stellen.map((s) => (
                <a className="job-row" href={`mailto:${site.email}?subject=${encodeURIComponent(`Bewerbung: ${s.title}`)}`} key={s.title}>
                  <div className="jr-info">
                    <b>{s.title}</b>
                    <span>{s.meta}</span>
                  </div>
                  <span className="jr-btn">Jetzt bewerben →</span>
                </a>
              ))}
            </div>
          ) : null}
          <div className="mini-grid reveal" style={{ marginTop: stellen.length ? 24 : 0 }}>
            <div>
              <b>Vertriebsprofi/in (m/w/d)</b>
              <small>Du verstehst die Herausforderungen kleiner Betriebe, hörst genauer zu, als du verkaufst, und erklärst digitale Leistungen verständlich. Region Koblenz, Umfang nach Absprache.</small>
              <Link className="body-link" href={vertriebsStelle}>Zur Stellenbeschreibung <ArrowIcon /></Link>
            </div>
            <div>
              <b>Initiativbewerbung</b>
              <small>Webdesign, Kampagnen, Content, Videoschnitt oder Entwicklung: Wenn du gut bist in dem, was du tust, finden wir heraus, ob es passt.</small>
              <a className="body-link" href={bewerbungEmail}>Bewerbung per E-Mail <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="band theme-light" id="bewerben">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — So bewirbst du dich</span>
              <h2 className="band-title">
                Vier Schritte, <em>ohne Portal und Pflichtfelder</em>
              </h2>
            </div>
            <p className="band-note">
              Wir bauen Bewerbungswege ohne Hürden für unsere Kunden. Natürlich
              gilt das auch für uns selbst.
            </p>
          </div>
          <div className="mini-grid cols-4 reveal">
            {bewerbung.map((step) => (
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
              <span className="band-tag">05 — Kennenlernen</span>
              <h2 className="band-title">
                Erst reden, <em>dann Papierkram</em>
              </h2>
              <p className="lead">
                Nach deiner Bewerbung folgt ein lockeres Gespräch, per
                Video-Call oder bei einem Kaffee in Koblenz. Kein Assessment-Center,
                keine Fangfragen. Wir wollen wissen, wie du denkst und
                arbeitest, nicht wie gut du Bewerbungsratgeber auswendig kennst.
              </p>
              <a className="btn-primary" href={bewerbungEmail}>Bewerbung per E-Mail senden <ArrowIcon /></a>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 · Atilla"
                messages={[
                  { from: "in", text: "Hi! Ich habe gerade meine Bewerbung abgeschickt." },
                  { from: "out", text: "Super, schaue ich mir heute an. Hast du diese Woche Zeit für einen kurzen Call?" },
                  { from: "in", text: "Ja, Donnerstag würde passen!" },
                ]}
                footer="So schnell kann Kennenlernen gehen"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Häufige Fragen</span>
              <h2 className="band-title">
                Was Bewerber <em>wissen wollen</em>
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
            <h2>Klingt nach <em>dir?</em></h2>
            <a className="btn-primary" href={bewerbungEmail}>Bewerbung per E-Mail senden <ArrowIcon /></a>
          </section>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
