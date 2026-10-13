import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import KontaktForm from "@/components/KontaktForm";
import { ArrowIcon, FaqList, Reviews, WaMock } from "@/components/ui";
import { site } from "@/lib/site";
import { verifiedReviews } from "@/lib/verified-reviews";
import { resourceRoutes, routes, serviceRoutes } from "@/lib/routes";
import koblenzImage from "@/public/bilder/koblenz-rhein.webp";

export const metadata: Metadata = {
  title: "Kontakt: Kostenloses Erstgespräch in Koblenz",
  description:
    "Erreich Pixel56 per WhatsApp, Telefon oder E-Mail oder buch dein kostenloses Erstgespräch. Antwort innerhalb eines Werktags, ehrliche Einschätzung.",
  alternates: { canonical: routes.contact },
  openGraph: {
    title: "Kontakt zu Pixel56: kostenloses Erstgespräch",
    description: "WhatsApp, Telefon, E-Mail oder Termin: Du erreichst direkt die Person, die dein Projekt umsetzt.",
    url: routes.contact,
  },
};

const contactUrl = `${site.url}${routes.contact}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${contactUrl}#contact`,
  url: contactUrl,
  name: "Kontakt zu Pixel56",
  mainEntity: {
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
};

const anliegen = [
  { title: "Neue Website oder Relaunch", text: "Von der Struktur bis zum Livegang, inklusive Weiterleitungen, damit bestehende Rankings bleiben.", href: serviceRoutes.webdesign },
  { title: "Mehr Anfragen über Anzeigen", text: "Meta Ads oder Google Ads, je nachdem, ob deine Kunden suchen oder entdeckt werden wollen.", href: serviceRoutes["meta-ads"] },
  { title: "Mitarbeiter finden", text: "Karriereseite und Kampagnen, die Kandidaten erreichen, die gerade nicht auf Jobbörsen sind.", href: serviceRoutes.mitarbeitergewinnung },
  { title: "Content & Reels", text: "Schnitt aus vorhandenem Material oder Produktion bei dir im Betrieb, regelmäßig statt einmalig.", href: serviceRoutes["content-produktion"] },
  { title: "KI im Betrieb", text: "Wiederkehrende Anfragen, Texte und Abläufe automatisieren, ohne dass du zum Tech-Unternehmen wirst.", href: serviceRoutes["ki-automatisierung"] },
  { title: "Noch unklar, was du brauchst", text: "Dann ist das Erstgespräch genau dafür da. Du beschreibst das Ziel, wir sortieren gemeinsam.", href: site.calendly },
];

const ablauf = [
  { nr: "01", title: "Termin wählen", text: "Über Calendly suchst du dir einen freien Slot aus, oder du schreibst kurz per WhatsApp, wann es dir passt.", gets: "Dauer: 2 Minuten" },
  { nr: "02", title: "Ziel in einem Satz", text: "Mehr Anfragen, neue Website, Mitarbeiter finden: Mehr Vorbereitung brauchst du nicht. Den Rest fragen wir im Gespräch.", gets: "Vorbereitung: keine nötig" },
  { nr: "03", title: "Das Gespräch", text: "15 bis 30 Minuten per Telefon oder Video-Call. Wir schauen auf deine Situation, stellen Fragen und geben eine erste ehrliche Einschätzung.", gets: "Kostenlos und unverbindlich" },
  { nr: "04", title: "Einschätzung & Angebot", text: "Wenn es für beide Seiten passt, bekommst du ein konkretes Angebot mit Umfang, Ablauf und Preis. Wenn nicht, sagen wir das auch.", gets: "Du entscheidest, ob es weitergeht" },
];

const vorbereitung = [
  { problem: "Dein Ziel in einem Satz", answer: "„Wir wollen mehr Anfragen aus der Region“ sagt uns mehr als jede Leistungsliste. Daraus leiten wir ab, welcher Baustein den größten Hebel hat." },
  { problem: "Deine aktuelle Website oder deine Profile", answer: "Ein Link reicht. Wir schauen vorher rein und können im Gespräch konkret werden, statt bei null anzufangen." },
  { problem: "Dein Zeitrahmen", answer: "Gibt es einen Termin, bis zu dem etwas stehen muss, etwa eine Messe oder eine Saison? Das bestimmt, womit wir anfangen." },
  { problem: "Dein Budgetrahmen, falls vorhanden", answer: "Du musst keine Zahl nennen. Wenn du eine hast, hilft sie uns, einen Vorschlag zu machen, der realistisch ist, statt einer Wunschliste." },
];

const faqs = [
  { q: "Was passiert nach meiner Anfrage?", a: "Wir melden uns innerhalb eines Werktags, meist deutlich schneller. Im Erstgespräch schauen wir uns deine Situation an und geben eine ehrliche Einschätzung, ob und wie wir helfen können." },
  { q: "Was kostet das Erstgespräch?", a: "Nichts. Es ist unverbindlich und ergebnisoffen. Erst danach gibt es ein konkretes, auf dich zugeschnittenes Angebot, wenn beide Seiten das wollen." },
  { q: "Muss ich mich vorbereiten?", a: "Nein. Es hilft, wenn du dein Ziel grob benennen kannst, etwa mehr Anfragen, neue Website oder Mitarbeiter finden. Den Rest sortieren wir gemeinsam." },
  { q: "Mit wem spreche ich?", a: "Mit Atilla Ciftcioglu, dem Gründer von Pixel56. Er führt das Erstgespräch und bleibt während der Zusammenarbeit dein Ansprechpartner." },
  { q: "Kann ich auch vorbeikommen?", a: "Ja, nach Terminabsprache in der Hüttenstraße 100 in Bendorf. Für Content-Produktionen kommen wir umgekehrt zu dir in den Betrieb." },
  { q: "Arbeitet ihr auch mit Unternehmen außerhalb der Region?", a: "Ja. Der Sitz ist in Bendorf bei Koblenz, die Zusammenarbeit läuft aber ortsunabhängig per Video-Call, Telefon und WhatsApp." },
];

export default function KontaktPage() {
  const formularAktiv = Boolean(process.env.RESEND_API_KEY && process.env.PIXEL56_CONTACT_FROM && process.env.PIXEL56_CONTACT_TO);
  const mapsHref = "https://www.google.com/maps/search/?api=1&query=H%C3%BCttenstra%C3%9Fe+100%2C+56170+Bendorf";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium page-suite contact-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Kontakt", page: "Erstgespräch" }} />

          <header className="hero-grab contact-premium-hero">
            <div>
              <div className="hero-eyebrow">KONTAKT · KOSTENLOSES ERSTGESPRÄCH</div>
              <h1>
                Lass uns <em>reden.</em>
              </h1>
              <p className="hero-sub">
                Kein Callcenter, kein Ticket-System. Du erreichst direkt die
                Person, die dein Projekt plant und umsetzt. Such dir den Weg
                aus, der dir am liebsten ist.
              </p>
              <ul className="hero-points">
                <li>Antwort innerhalb eines Werktags, meist deutlich schneller</li>
                <li>Ehrliche Einschätzung statt Verkaufsgespräch</li>
                <li>Kostenlos, unverbindlich, ohne Vorbereitung</li>
              </ul>
            </div>
            <div className="reveal in">
              {formularAktiv ? <KontaktForm /> : (
                <div className="kontakt-form contact-fallback">
                  <span className="band-tag">DIREKT KONTAKT AUFNEHMEN</span>
                  <h2>Erzähl uns von deinem Projekt.</h2>
                  <p>Wähle direkt einen Termin für das Erstgespräch oder schreib uns eine E-Mail. Wir melden uns innerhalb eines Werktags.</p>
                  <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">Erstgespräch buchen →</a>
                  <a className="contact-fallback-mail" href={`mailto:${site.email}?subject=Projektanfrage%20an%20Pixel56`}>E-Mail an {site.email} →</a>
                </div>
              )}
            </div>
          </header>
        </div>

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="band theme-light" id="wege" style={{ paddingTop: 100 }}>
          <div className="band-head reveal">
            <div>
              <span className="band-tag">01 — Direkte Wege</span>
              <h2 className="band-title">
                Oder erreich uns <em>sofort</em>
              </h2>
            </div>
            <p className="band-note">
              Drei Wege, eine Person am anderen Ende. Nimm den, der zu deinem
              Anliegen passt.
            </p>
          </div>
          <div className="kontakt-kanaele reveal">
            <a className="kanal" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              <span className="kl">Am schnellsten</span>
              <b>WhatsApp</b>
              <span>Schreib uns direkt. Für kurze Fragen und Terminabsprachen der einfachste Weg.</span>
            </a>
            <a className="kanal" href={`tel:${site.phoneIntl}`}>
              <span className="kl">Persönlich</span>
              <b>{site.phone}</b>
              <span>Ruf einfach durch. Wenn gerade ein Termin läuft, rufen wir zurück.</span>
            </a>
            <a className="kanal" href={`mailto:${site.email}`}>
              <span className="kl">Klassisch</span>
              <b>{site.email}</b>
              <span>Für alles, was Anhänge braucht oder warten kann.</span>
            </a>
          </div>
        </section>

        <section className="band theme-light" id="anliegen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Wobei wir helfen</span>
              <h2 className="band-title">
                Sechs Anliegen, <em>mit denen Kunden zu uns kommen</em>
              </h2>
            </div>
            <p className="band-note">
              Du musst nicht wissen, welche Leistung du brauchst. Es reicht, wenn
              du sagst, was sich ändern soll.
            </p>
          </div>
          <div className="mini-grid cols-3 reveal">
            {anliegen.map((item) => (
              <div key={item.title}>
                <b>{item.title}</b>
                <small>{item.text}</small>
                {item.href.startsWith("http") ? (
                  <a className="body-link" href={item.href} target="_blank" rel="noopener noreferrer">Termin wählen <ArrowIcon /></a>
                ) : (
                  <Link className="body-link" href={item.href}>Mehr dazu <ArrowIcon /></Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="ablauf">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — So läuft das Erstgespräch</span>
              <h2 className="band-title">
                Vier Schritte <em>bis zur ersten Einschätzung</em>
              </h2>
            </div>
            <p className="band-note">
              Keine Verkaufsshow, kein Fragebogen mit 40 Feldern. Ein Gespräch,
              nach dem du weißt, ob und wie wir dir helfen können.
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

        <section className="band theme-light" id="vorbereitung">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Das hilft im Gespräch</span>
              <h2 className="band-title">
                Vier Dinge, <em>die das Gespräch besser machen</em>
              </h2>
            </div>
            <p className="band-note">
              Nichts davon ist Pflicht. Aber wer eines davon mitbringt, bekommt
              im Gespräch konkretere Antworten.
            </p>
          </div>
          <div className="friction-list prep reveal">
            {vorbereitung.map((item, index) => (
              <div className="friction-row" key={item.problem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.problem}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="section-link-row reveal">
            <Link className="body-link" href={resourceRoutes["seo-checkliste"]}>
              Vorher die eigene Website prüfen: SEO-Checkliste <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="band theme-light" id="standort">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">05 — Standort &amp; Anfahrt</span>
              <h2 className="band-title">
                Hüttenstraße 100, <em>Bendorf bei Koblenz</em>
              </h2>
              <p className="lead">
                Hier sitzen wir wirklich. Besuche sind nach Absprache jederzeit
                möglich, zum Kennenlernen oder für einen Workshop. Koblenz liegt
                wenige Minuten entfernt, Neuwied und Montabaur sind schnell
                erreicht.
              </p>
              <ul className="lines">
                <li>{site.address}</li>
                <li>Termine nach Absprache, auch abends für Betriebe mit vollem Tag</li>
                <li>Für Content-Produktionen kommen wir zu dir in den Betrieb</li>
              </ul>
              <a className="body-link" href={mapsHref} target="_blank" rel="noopener noreferrer">
                Route in Google Maps öffnen <ArrowIcon />
              </a>
            </div>
            <div className="region-visual reveal">
              <Image src={koblenzImage} alt="Koblenz am Rhein, wenige Minuten vom Pixel56-Standort in Bendorf" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="whatsapp">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">06 — So einfach kann der Anfang sein</span>
              <h2 className="band-title">
                Ein Ansprechpartner. <em>Ein Kanal.</em>
              </h2>
              <p className="lead">
                Während der Zusammenarbeit erreichst du deinen festen
                Ansprechpartner direkt per WhatsApp, für schnelle Fragen genauso
                wie für große Entscheidungen. Und auch der erste Kontakt darf so
                unkompliziert sein.
              </p>
              <a className="btn-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                Per WhatsApp schreiben <ArrowIcon />
              </a>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 · Atilla"
                messages={[
                  { from: "in", text: "Hi! Ich hätte Interesse an einem Erstgespräch." },
                  { from: "out", text: "Gerne! Passt dir morgen 14 Uhr, Telefon oder Video-Call?" },
                  { from: "in", text: "Telefon passt super 👍" },
                ]}
                footer="So unkompliziert kann der Anfang sein"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light light-reviews" id="stimmen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">07 — Kundenstimmen</span>
              <h2 className="band-title">
                Was Kunden <em>über die Zusammenarbeit sagen</em>
              </h2>
            </div>
            <p className="band-note">
              Wir zeigen nur Aussagen, die unsere Kunden so veröffentlicht haben.
            </p>
          </div>
          <Reviews reviews={verifiedReviews} items={verifiedReviews} />
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">08 — Häufige Fragen</span>
              <h2 className="band-title">
                Bevor du <em>anfragst</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
