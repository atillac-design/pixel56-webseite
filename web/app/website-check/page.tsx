import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BreadcrumbLd from "@/components/BreadcrumbLd";
import WebsiteCheck from "@/components/WebsiteCheck";
import { ArrowIcon, ContactStrip, FaqList } from "@/components/ui";
import { site } from "@/lib/site";
import { resourceRoutes, serviceRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Website-Check: Startseite in Sekunden prüfen",
  description:
    "Kostenloser Website-Check: Adresse eingeben und die Grundlagen deiner Startseite prüfen. HTTPS, Antwortzeit, Titel, Mobilansicht, Impressum und mehr.",
};

const pruefpunkte = [
  { t: "Verschlüsselung", s: "Läuft die Seite über HTTPS, oder warnt der Browser?" },
  { t: "Antwortzeit", s: "Wie schnell antwortet der Server, bevor überhaupt etwas sichtbar wird?" },
  { t: "Seitentitel", s: "Gibt es einen Titel, und passt seine Länge zur Google-Anzeige?" },
  { t: "Beschreibung", s: "Ist eine Meta-Beschreibung hinterlegt, die zum Klick einlädt?" },
  { t: "Hauptüberschrift", s: "Genau eine H1, die sagt, worum es geht?" },
  { t: "Mobilansicht", s: "Kann sich die Seite an Handys anpassen?" },
  { t: "Sprache", s: "Ist die Sprache im Code angegeben?" },
  { t: "Bild-Alternativtexte", s: "Haben Bilder Beschreibungen für Google und Vorlesefunktionen?" },
  { t: "Impressum", s: "Ist ein Impressum verlinkt? In Deutschland Pflicht." },
  { t: "Kontakt", s: "Sind Telefon, E-Mail oder Kontaktseite verlinkt?" },
  { t: "Vorschaubild", s: "Erscheint beim Teilen in WhatsApp und Co. ein Bild?" },
  { t: "Größe", s: "Wie schwer ist die Seite, bevor Bilder und Skripte dazukommen?" },
];

const nichtSichtbar = [
  "Die echte Ladezeit im Browser mit Bildern, Schriften und Skripten.",
  "Ob die Seite bei Google für die Suchbegriffe deiner Kunden erscheint.",
  "Ob Texte, Struktur und Kontaktwege Besucher zu Anfragen machen.",
  "Wie dein Auftritt im Vergleich zu Mitbewerbern wirkt.",
  "Unterseiten: Geprüft wird nur die Startseite.",
];

const faq = [
  { q: "Speichert ihr meine Adresse?", a: "Nein. Die Adresse wird für die Prüfung einmal geladen und nicht gespeichert. Du musst auch keine E-Mail-Adresse eingeben." },
  { q: "Warum sagt der Check „Seite konnte nicht geladen werden“?", a: "Manche Websites blockieren automatische Abrufe, oder der Server antwortet zu langsam. Dann prüfen wir sie im Erstgespräch von Hand." },
  { q: "Alles grün, trotzdem keine Anfragen?", a: "Der Check prüft Grundlagen, nicht Inhalte, Rankings oder Nutzerführung. Genau das sind oft die Gründe, warum eine Website nicht liefert. Dafür gibt es das Erstgespräch." },
  { q: "Kann ich auch eine Unterseite prüfen?", a: "Ja, gib einfach die vollständige Adresse der Unterseite ein. Die Prüfpunkte sind dieselben." },
  { q: "Was kostet der Check?", a: "Nichts. Er ist ein Werkzeug, mit dem du selbst eine erste Einschätzung bekommst, auch ohne uns." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Website-Check von Pixel56",
  description: metadata.description,
  url: `${site.url}/website-check`,
  isPartOf: { "@type": "WebSite", name: "Pixel56", url: site.url },
  about: { "@type": "Thing", name: "Technische Grundlagen einer Website" },
};

export default function WebsiteCheckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BreadcrumbLd items={[{ name: "Website-Check", href: "/website-check" }]} />
      <main className="service-premium page-suite">
        <div className="sheet">
          <SiteNav crumb={{ section: "Ressourcen", page: "Website-Check" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">WEBSITE-CHECK · KOSTENLOS · OHNE ANMELDUNG</div>
              <h1>
                <span>Wie gut ist</span>
                <span className="service-hero-accent">deine Website?</span>
                <span>In 30 Sekunden geprüft.</span>
              </h1>
              <p>
                Adresse eingeben, und du siehst, ob die Grundlagen stimmen: Verschlüsselung,
                Antwortzeit, Titel und Beschreibung, Mobilansicht, Impressum, Kontaktwege und
                Vorschaubild. Mit einem Tipp zu jedem Punkt, der nicht passt.
              </p>
              <div className="premium-actions">
                <Link className="btn-primary" href="#check">
                  Zum Check <ArrowIcon />
                </Link>
                <Link className="btn-text" href="#geprueft">
                  Was geprüft wird ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Eckdaten des Checks">
                <span>12 Prüfpunkte</span>
                <span>Keine Speicherung</span>
                <span>Keine E-Mail nötig</span>
                <span>Tipps zu jedem Punkt</span>
              </div>
            </div>

            <div className="wc-dunkel" id="check">
              <WebsiteCheck />
            </div>
          </header>
        </div>

        <div className="editorial-shell service-editorial">
          <div className="sheet">
            <section className="band theme-light" id="geprueft">
              <div className="band-head reveal">
                <div>
                  <span className="band-tag">01 — Was geprüft wird</span>
                  <h2 className="band-title">
                    Zwölf Punkte, die <em>jede Website</em> erfüllen sollte
                  </h2>
                </div>
                <p className="band-note">
                  Dieselben Grundlagen, die wir bei jedem Kundenprojekt als Erstes prüfen.
                  Keine davon ist Kür, alle sind Pflicht.
                </p>
              </div>
              <div className="mini-grid mini-grid-cols-3 reveal" aria-label="Prüfpunkte">
                {pruefpunkte.map((p, i) => (
                  <div key={p.t}>
                    <b>{String(i + 1).padStart(2, "0")} · {p.t}</b>
                    <small>{p.s}</small>
                  </div>
                ))}
              </div>
            </section>

            <section className="band theme-light" id="grenzen">
              <div className="split2">
                <div className="reveal">
                  <span className="band-tag">02 — Was der Check nicht sieht</span>
                  <h2 className="band-title">
                    Ehrlich: Das ist <em>kein Audit</em>
                  </h2>
                  <p className="lead">
                    Der Check liest den Code deiner Startseite und bewertet, was sich daraus
                    sicher ablesen lässt. Alles, was ein Mensch beurteilen muss, bleibt außen vor.
                    Dafür gibt es das Erstgespräch, in dem wir deine Seite gemeinsam durchgehen.
                  </p>
                  <div className="premium-actions">
                    <Link className="btn-primary" href="/kontakt">
                      Kostenloses Erstgespräch <ArrowIcon />
                    </Link>
                  </div>
                </div>
                <ul className="friction-list reveal" aria-label="Grenzen des Checks">
                  {nichtSichtbar.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="band theme-light" id="weiter">
              <div className="band-head reveal">
                <div>
                  <span className="band-tag">03 — Und dann?</span>
                  <h2 className="band-title">
                    Drei Wege, mit dem <em>Ergebnis</em> weiterzumachen
                  </h2>
                </div>
              </div>
              <div className="audience-grid audience-grid-cols-3 reveal">
                <article className="audience-card">
                  <span>Selbst beheben</span>
                  <h3>Kleine Punkte, große Wirkung</h3>
                  <p>Titel, Beschreibung, Impressum-Link oder Alternativtexte kannst du in den meisten Systemen selbst nachtragen. Der Tipp unter jedem Punkt sagt, worauf es ankommt.</p>
                </article>
                <Link className="audience-card" href={resourceRoutes["seo-checkliste"]}>
                  <span>Checkliste</span>
                  <h3>Sieben Schritte zum Abhaken</h3>
                  <p>Die kostenlose SEO-Checkliste geht deutlich tiefer: Google-Profil, Keywords, Website, Bewertungen und ein Wochenplan, ohne Vorkenntnisse verständlich.</p>
                  <small>Kostenlos als PDF →</small>
                </Link>
                <Link className="audience-card" href={serviceRoutes.webdesign}>
                  <span>Neu aufsetzen</span>
                  <h3>Wenn Flicken nicht mehr reicht</h3>
                  <p>Bei veralteter Technik oder einer Seite, die auf dem Handy nicht funktioniert, ist ein Neubau meist günstiger als Jahre voller Nachbesserungen.</p>
                  <small>Webdesign bei Pixel56 →</small>
                </Link>
              </div>
            </section>

            <section className="band theme-light" id="faq">
              <div className="band-head reveal">
                <div>
                  <span className="band-tag">04 — Häufige Fragen</span>
                  <h2 className="band-title">
                    Fragen zum <em>Website-Check</em>
                  </h2>
                </div>
              </div>
              <FaqList items={faq} />
            </section>

            <ContactStrip />
          </div>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
