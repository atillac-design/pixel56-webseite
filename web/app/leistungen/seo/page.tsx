import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BreadcrumbLd from "@/components/BreadcrumbLd";
import RegionLinks from "@/components/RegionLinks";
import {
  ArrowIcon,
  ClientMarquee,
  CloseCta,
  ContactStrip,
  FaqList,
  Reviews,
  StatusPanel,
  Stepper,
  WaMock,
} from "@/components/ui";
import { CompareMock, SearchMock } from "@/components/mocks";
import { site } from "@/lib/site";
import { verifiedReviews } from "@/lib/verified-reviews";
import { resourceRoutes, routes, serviceRoutes } from "@/lib/routes";
import seoFreebieImage from "@/public/bilder/freebie-seo-ebook-transparent.webp";

export const metadata: Metadata = {
  title: "SEO für KMU: Gefunden werden, ohne Klickpreis",
  description:
    "SEO als Fundament: Technik, Struktur, lokale Sichtbarkeit und Inhalte mit Suchintention. Ehrlich, ohne Platz-1-Versprechen. Pixel56 bei Koblenz.",
  alternates: { canonical: serviceRoutes.seo },
  openGraph: {
    title: "SEO für KMU und Handwerk: Gefunden werden, ohne Klickpreis | Pixel56",
    description:
      "Technisches Fundament, lokales SEO und Inhalte, die Google versteht. Relaunch ohne Rankingverlust inklusive.",
    url: serviceRoutes.seo,
  },
};

const serviceUrl = `${site.url}${serviceRoutes.seo}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: "Suchmaschinenoptimierung",
      serviceType: "SEO",
      description:
        "Technisches SEO, Seitenstruktur, lokale Sichtbarkeit über das Google-Unternehmensprofil, Inhalte mit Suchintention und sichere URL-Migration beim Relaunch, für kleine und mittlere Unternehmen.",
      url: serviceUrl,
      provider: { "@type": "ProfessionalService", "@id": `${site.url}/#organization`, name: site.name, url: site.url },
      areaServed: [
        { "@type": "City", name: "Koblenz" },
        { "@type": "Country", name: "Deutschland" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${site.url}/dienstleistung` },
        { "@type": "ListItem", position: 3, name: "SEO", item: serviceUrl },
      ],
    },
  ],
};

const statusRows = [
  { label: "Bei Google unauffindbar", tag: "Sichtbarkeit" },
  { label: "Nur auf Anzeigen angewiesen", tag: "Abhängigkeit" },
  { label: "Lokale Konkurrenz liegt vorn", tag: "Karte" },
  { label: "Relaunch hat Rankings gekostet", tag: "Migration" },
  { label: "Einmal gemacht, nie gepflegt", tag: "Pflege" },
  { label: "Keine Ahnung, was wirkt", tag: "Auswertung" },
];

const localLevers = [
  { title: "Google-Unternehmensprofil", text: "Vollständig gepflegt: Leistungen, Öffnungszeiten, echte Fotos, Beiträge. Kostenlos und für lokale Suchen der wirksamste einzelne Hebel." },
  { title: "Einheitliche Daten", text: "Name, Adresse, Telefonnummer überall identisch: Website, Profil, Verzeichnisse, Social Media. Abweichungen kosten Vertrauen bei Google." },
  { title: "Bewertungen", text: "Menge, Aktualität und Antworten fließen in die Platzierung ein. Wir helfen dir, systematisch um echte Bewertungen zu bitten." },
  { title: "Lokale Seiten", text: "Leistungen mit Ortsbezug, die wirklich etwas über den Ort sagen. Keine 200 Städteseiten mit ausgetauschtem Namen." },
];

const scope = [
  { nr: "01", title: "Technisches Fundament", text: "Ladezeit, mobile Darstellung, saubere Struktur, Indexierung, strukturierte Daten. Die Basis, ohne die kein Ranking entsteht. Bei jeder Website von uns Standard." },
  { nr: "02", title: "Struktur & interne Links", text: "Ein Thema pro Seite, klare Überschriften, Verlinkung, die Google und Besuchern den Weg zeigt. Oft der größte Hebel bei bestehenden Websites." },
  { nr: "03", title: "Inhalte mit Suchintention", text: "Seiten, die beantworten, was Menschen tatsächlich suchen, in verständlicher Sprache. Keine Textwüsten, kein Keyword-Stapeln." },
  { nr: "04", title: "Lokale Sichtbarkeit", text: "Google-Unternehmensprofil, einheitliche Daten, Bewertungen und lokale Seiten. Für Betriebe, deren Kunden aus dem Umkreis kommen." },
  { nr: "05", title: "Relaunch ohne Rankingverlust", text: "Vollständiges URL-Inventar, Weiterleitungen, Kontrolle nach dem Start. So gehen wir auch bei unserem eigenen Relaunch vor." },
  { nr: "06", title: "Messung mit der Search Console", text: "Welche Suchbegriffe bringen Klicks, welche Seiten verlieren, wo gibt es Fehler? Monatlich ausgewertet und in Entscheidungen übersetzt." },
];

const timeline = [
  { title: "Wochen 1 bis 6", text: "Technik und Struktur werden sauber. Sichtbar ist noch wenig, aber Google beginnt, die Seite anders zu lesen." },
  { title: "Monat 2 bis 4", text: "Erste Bewegung bei weniger umkämpften Begriffen und in der lokalen Kartenansicht, wenn das Unternehmensprofil gepflegt ist." },
  { title: "Monat 6 bis 12", text: "Spürbare Effekte bei wichtigen Suchbegriffen, abhängig von Branche und lokaler Konkurrenz. Ab hier trägt SEO einen Teil der Anfragen allein." },
];

const checks = [
  { problem: "Die Seite lädt in unter drei Sekunden, auch mobil.", answer: "Komprimierte Bilder, schlanker Code, keine unnötigen Skripte. Wir messen auf echten Geräten, nicht nur im Büro-WLAN." },
  { problem: "Jede Seite hat einen eigenen Titel und eine Beschreibung.", answer: "Titel und Meta-Beschreibung sagen Google und Suchenden in einem Satz, worum es geht. Ohne Duplikate, ohne „Startseite“." },
  { problem: "Das Google-Unternehmensprofil ist vollständig.", answer: "Leistungen, Öffnungszeiten, Fotos, Beiträge, beantwortete Bewertungen. Für lokale Suchen wichtiger als jede Unterseite." },
  { problem: "Überschriften folgen einer Ordnung.", answer: "Eine H1 pro Seite, darunter H2 und H3 in sinnvoller Reihenfolge. Google liest die Struktur, Besucher auch." },
  { problem: "Wichtige Seiten sind intern verlinkt.", answer: "Von der Startseite zu den Leistungen, von den Leistungen zu Referenzen und zurück. Was nicht verlinkt ist, gilt als unwichtig." },
  { problem: "Es gibt keine Fehlerseiten und keine toten Links.", answer: "Nach jedem Relaunch und regelmäßig danach: Search Console prüfen, Weiterleitungen setzen, Links korrigieren." },
];

const relaunchSteps = [
  { title: "URL-Inventar", text: "Alle bestehenden Adressen erfassen, auch die, die niemand mehr auf dem Schirm hat, Google aber noch kennt." },
  { title: "Bewertung nach Daten", text: "Welche Seiten bringen Klicks, welche haben Backlinks, welche sind Ballast? Die Search Console entscheidet, nicht das Bauchgefühl." },
  { title: "Pfade erhalten", text: "Wo immer möglich bleibt die alte Adresse die neue. Nur wenn ein Pfad sich ändern muss, gibt es eine dauerhafte Weiterleitung." },
  { title: "Kontrolle nach dem Start", text: "Indexierung, Weiterleitungen, Sitemap und Fehlerseiten werden nach dem Launch geprüft. Erst dann ist der Relaunch abgeschlossen." },
];

const channelMix = [
  { title: "SEO: bleibt", text: "Braucht Monate, bringt dann Anfragen ohne Klickkosten. Baut auf jedem Monat davor auf." },
  { title: "Google Ads: sofort", text: "Überbrückt die Zeit, bis SEO trägt, und zeigt, welche Suchbegriffe Anfragen bringen. Genau für die bauen wir Seiten." },
  { title: "Meta Ads: weckt", text: "Macht bekannt, bevor gesucht wird. Wer dich kennt, klickt in der Suche eher auf dein Ergebnis." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Analyse", text: "Technischer Check, Search Console, Keyword-Recherche, Blick auf die lokale Konkurrenz. Was rankt heute, was fehlt?" },
  { nr: "02", tag: "Phase 2", title: "Technisches Fundament", text: "Ladezeit, Struktur, mobile Darstellung, Indexierung. Die Basis für alles Weitere." },
  { nr: "03", tag: "Phase 3", title: "Lokale Optimierung", text: "Unternehmensprofil, einheitliche Daten, Bewertungen, lokale Seiten mit echtem Inhalt." },
  { nr: "04", tag: "Phase 4", title: "Inhalte & Verlinkung", text: "Seiten für echte Suchabsichten, intern verlinkt, verständlich geschrieben." },
  { nr: "05", tag: "Phase 5", title: "Auswertung & Pflege", text: "Monatlicher Blick auf Rankings, Klicks und Fehler. Kurskorrektur, wo nötig." },
];

const care = [
  { title: "Monatliche Auswertung", text: "Search Console und Unternehmensprofil: Welche Begriffe gewinnen, welche verlieren, wo gibt es technische Fehler?" },
  { title: "Inhalte ergänzen", text: "Neue Leistung, neue Referenz, neue Frage aus dem Alltag: daraus entstehen Seiten, die Google als Relevanz liest." },
  { title: "Technik prüfen", text: "Updates, Ladezeit, tote Links, Weiterleitungen. Kleine Dinge, die Rankings über Monate kosten, wenn niemand hinschaut." },
  { title: "Profil pflegen", text: "Beiträge, Fotos, Antworten auf Bewertungen. Das Unternehmensprofil lebt von Aktualität." },
];

const faqs = [
  { q: "Wie lange dauert es, bis SEO wirkt?", a: "Erste Bewegungen gibt es meist ab Monat zwei bis vier bei weniger umkämpften Begriffen, spürbare Effekte bei wichtigen Suchbegriffen ab Monat sechs bis zwölf. Das hängt von Branche, lokaler Konkurrenz und Ausgangslage ab. Wer in den ersten Wochen Wunder erwartet, wird enttäuscht." },
  { q: "Garantiert ihr Platz 1 bei Google?", a: "Nein, und niemand kann das seriös. Wir garantieren saubere Arbeit, ehrliche Auswertung und dass wir dir sagen, wenn ein Ziel unrealistisch ist. Wer Platz 1 verspricht, verkauft etwas anderes." },
  { q: "Brauche ich SEO, wenn ich schon Google Ads schalte?", a: "Ja, aber nicht sofort und nicht um jeden Preis. Ads bringen sofortige, gemietete Sichtbarkeit und zeigen, welche Suchbegriffe Anfragen bringen. SEO baut für genau diese Begriffe etwas auf, das bleibt, auch wenn das Werbebudget pausiert." },
  { q: "Was ist lokales SEO?", a: "Die Optimierung dafür, bei Suchen mit Ortsbezug gefunden zu werden, vor allem in der Kartenansicht. Der wichtigste Hebel ist das Google-Unternehmensprofil, dazu einheitliche Adressdaten, Bewertungen und lokale Seiten mit echtem Inhalt." },
  { q: "Ist SEO die Hauptleistung von Pixel56?", a: "Nein. SEO ist bei uns das Fundament jeder Website: Technik, Struktur, Metadaten, Verlinkung und eine sichere Migration beim Relaunch. Laufende SEO-Betreuung bieten wir gezielt an, wenn sie zu deinem Ziel passt. Unsere Kernleistungen sind Webdesign, Meta Ads, Content und KI-Prozesse." },
  { q: "Was kostet SEO?", a: "Ein einmaliger technischer Grundcheck ist etwas anderes als monatliche Betreuung mit Inhalten und Auswertung. Den passenden Umfang klären wir im kostenlosen Erstgespräch. Vorher kannst du deine Website mit unserer SEO-Checkliste selbst prüfen." },
  { q: "Kann ich SEO nicht einfach selbst machen?", a: "Vieles ja, vor allem das Unternehmensprofil und Bewertungen. Unsere Checkliste zeigt dir, was. Die Kombination aus technischem Fundament, Struktur, Inhalten und Auswertung braucht allerdings Zeit, die im Tagesgeschäft meist fehlt." },
  { q: "Bleibst du auch danach erreichbar?", a: "Ja. Per WhatsApp, Telefon oder E-Mail über einen festen Ansprechpartner. Fragen zu Rankings, neuen Seiten oder dem Unternehmensprofil klären wir direkt." },
];

export default function SeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbLd items={[{ name: "Leistungen", href: "/dienstleistung" }, { name: "SEO-Grundlagen", href: serviceRoutes.seo }]} />

      <main className="service-premium seo-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Leistungen", page: "SEO" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">SUCHMASCHINENOPTIMIERUNG · LOKAL UND DEUTSCHLANDWEIT</div>
              <h1>
                <span>Gefunden werden,</span>
                <span className="service-hero-accent">wenn es zählt.</span>
                <span>Ohne Klickpreis.</span>
              </h1>
              <p>
                Sichtbarkeit bei Google, die nicht vom Werbebudget abhängt:
                technisches Fundament, lokale Optimierung und Inhalte, die
                Google versteht. Ehrlich eingeordnet, ohne Platz-1-Versprechen,
                mit einem Relaunch, der bestehende Rankings nicht kostet.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  SEO-Potenzial besprechen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#checkliste">
                  Website selbst prüfen ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="SEO auf einen Blick">
                <span>Technik von Tag eins</span>
                <span>Lokal zuerst</span>
                <span>Relaunch ohne Verlust</span>
                <span>Keine leeren Versprechen</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Beispiel einer lokalen Suche">
              <div className="web-board-top">
                <span>PIXEL56 · LOKALE SUCHE</span>
                <i>LIVE</i>
              </div>
              <SearchMock
                query="dachdecker in der nähe"
                youTag="Dein Betrieb"
                others={["Mitbewerber A · Organisch", "Mitbewerber B · Organisch"]}
              />
              <div className="web-board-signals">
                <div><span>01</span><b>Technik</b><small>schnell</small></div>
                <div><span>02</span><b>Profil</b><small>gepflegt</small></div>
                <div><span>03</span><b>Inhalte</b><small>mit Absicht</small></div>
                <div><span>04</span><b>Messung</b><small>monatlich</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="SEO auf einen Blick">
          <div><span>Fundament</span><strong>Technik, Struktur &amp; Indexierung</strong></div>
          <div><span>Lokal</span><strong>Unternehmensprofil &amp; Kartenansicht</strong></div>
          <div><span>Inhalte</span><strong>Seiten für echte Suchabsichten</strong></div>
          <div><span>Ziel</span><strong>Anfragen, die bleiben, ohne Klickpreis</strong></div>
        </section>

        <section className="band dark-stage service-dark-stage" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Der Status quo</span>
              <h2 className="band-title">
                Sechs Zeichen, dass Google <em>dich übersieht</em>
              </h2>
              <p className="lead">
                Die Leistung stimmt, aber wer danach sucht, landet zuerst bei
                der Konkurrenz. Meist liegt es nicht an einem Geheimnis, sondern
                an Grundlagen, die nie sauber gemacht wurden.
              </p>
              <p className="lead">
                Eine Einordnung vorweg: SEO ist bei uns das Fundament jeder
                Website, nicht die Hauptleistung. Genau deshalb reden wir ehrlich
                darüber, was es kann und was nicht.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="Typische Gründe für fehlende Sichtbarkeit" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="warum">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">02 — Warum es zählt</span>
              <h2 className="band-title">
                Sichtbarkeit, die <em>nicht gemietet ist</em>
              </h2>
              <p className="lead">
                Bei Google Ads kaufst du Sichtbarkeit. Sobald das Budget
                stoppt, ist sie weg. SEO baut etwas auf, das bleibt, auch wenn
                kein Cent mehr fließt. Es dauert länger, dafür gehört es dir.
              </p>
              <ul className="lines">
                <li>Jede Anfrage über Anzeigen kostet dauerhaft einen Klickpreis.</li>
                <li>Ohne Pflege verlieren Rankings mit der Zeit an Boden.</li>
                <li>Laufendes SEO baut auf jedem Monat davor auf.</li>
                <li>
                  Für sofortige Sichtbarkeit: <Link href={serviceRoutes["google-ads"]}>Google Ads</Link>
                </li>
              </ul>
            </div>
            <div className="reveal">
              <CompareMock
                rows={[
                  { variant: "ic-mute", barWidth: 35, noBtn: true, label: "Nur Anzeigen: Budget pausiert, Sichtbarkeit weg" },
                  { variant: "ic-1", barWidth: 65, label: "SEO: wächst weiter, auch in der Pause" },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="lokal">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">03 — Lokales SEO</span>
              <h2 className="band-title">
                Der am meisten <em>unterschätzte Hebel</em>
              </h2>
              <p className="lead">
                Für die meisten unserer Kunden entscheidet nicht das
                bundesweite Ranking, sondern die drei Treffer in der lokalen
                Kartenansicht. Genau dort, wo „Dachdecker in der Nähe“ gesucht
                wird. Und genau dort haben kleine Betriebe die besten Chancen.
              </p>
              <p className="lead">
                Vier Hebel, von denen zwei nichts kosten außer Zeit. Welche
                das sind, steht auch in unserer kostenlosen SEO-Checkliste.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Hebel für lokale Sichtbarkeit">
              {localLevers.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="leistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Was SEO bei uns bedeutet</span>
              <h2 className="band-title">
                Sechs Bausteine, <em>vom Fundament bis zur Messung</em>
              </h2>
            </div>
            <p className="band-note">
              Die ersten beiden sind bei jeder Website von uns Standard, nicht
              Zusatz. Die anderen vier kommen dazu, wenn sie zu deinem Ziel
              passen.
            </p>
          </div>
          <div className="scope-grid reveal">
            {scope.map((item) => (
              <article className="scope-card" key={item.nr}>
                <span>{item.nr}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="dauer">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Wie lange es dauert</span>
              <h2 className="band-title">
                Ehrlich: <em>SEO ist kein Sprint</em>
              </h2>
            </div>
            <p className="band-note">
              Grobe Orientierung, keine Zusage. Branche, Wettbewerb und
              Ausgangslage entscheiden über das Tempo.
            </p>
          </div>
          <div className="mini-grid cols-3 reveal" aria-label="Zeitlicher Verlauf">
            {timeline.map((item) => (
              <div key={item.title}>
                <b>{item.title}</b>
                <small>{item.text}</small>
              </div>
            ))}
          </div>
          <div className="callout2 reveal" style={{ marginTop: 28 }}>
            <p>
              <b>Der häufigste Fehler:</b> SEO wird nach zwei, drei Monaten als
              gescheitert bewertet, genau in der Phase, in der sich die
              Grundlagen erst festigen. Wer die Zeit mit Google Ads überbrückt,
              merkt den Übergang kaum, weil ein Kanal langsam den anderen
              ablöst.
            </p>
          </div>
        </section>

        <section className="band theme-light" id="checkliste">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">06 — Selbst prüfen</span>
              <h2 className="band-title">
                Sechs Prüfpunkte <em>aus unserer Checkliste</em>
              </h2>
            </div>
            <p className="band-note">
              Die vollständige SEO-Checkliste hat 30 Prüfpunkte in drei
              Bereichen. Sechs davon kannst du in zehn Minuten selbst prüfen.
            </p>
          </div>
          <div className="friction-list checklist reveal">
            {checks.map((item, index) => (
              <div className="friction-row" key={item.problem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.problem}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="resource-grid reveal" style={{ gridTemplateColumns: "minmax(0, 360px)", justifyContent: "center", marginTop: 28 }}>
            <Link className="resource-card" href={resourceRoutes["seo-checkliste"]}>
              <div className="resource-mockup">
                <Image src={seoFreebieImage} alt="" fill sizes="360px" />
              </div>
              <span>Checkliste · PDF</span>
              <h3>SEO-Checkliste</h3>
              <p>30 Prüfpunkte in drei Bereichen, dieselben, die wir bei jedem Kundenprojekt durchgehen. Zum Selbst-Abhaken, ohne Vorkenntnisse.</p>
              <em>Kostenlos herunterladen <ArrowIcon /></em>
            </Link>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="relaunch">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">07 — Relaunch ohne Rankingverlust</span>
              <h2 className="band-title">
                Neue Website, <em>alte Sichtbarkeit bleibt</em>
              </h2>
              <p className="lead">
                Der schnellste Weg, Rankings zu verlieren, ist ein Relaunch
                ohne Plan: neue Seite live, alte Adressen weg, Google findet
                nur noch Fehlerseiten. Jahre an Sichtbarkeit in Wochen
                verspielt.
              </p>
              <p className="lead">
                Deshalb ist die URL-Migration bei uns ein eigener Arbeitsschritt.
                Für unseren eigenen Relaunch haben wir jede bestehende Adresse
                erfasst, bewertet und erhalten oder weitergeleitet. Dasselbe tun
                wir für dich.
              </p>
              <Link className="body-link" href={serviceRoutes.webdesign}>
                Webdesign &amp; Relaunch <ArrowIcon />
              </Link>
            </div>
            <div className="mini-grid reveal" aria-label="Schritte der URL-Migration">
              {relaunchSteps.map((step) => (
                <div key={step.title}>
                  <b>{step.title}</b>
                  <small>{step.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="kanalmix">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">08 — SEO im Zusammenspiel</span>
              <h2 className="band-title">
                Langsam aufgebaut, <em>schnell überbrückt</em>
              </h2>
              <p className="lead">
                SEO allein lässt dich Monate warten. Anzeigen allein kosten
                für immer. Zusammen ergibt sich ein System: Ads liefern sofort
                Anfragen und zeigen, welche Begriffe sich lohnen. Für genau die
                bauen wir Seiten, die später ohne Budget ranken.
              </p>
              <ul className="lines">
                <li>
                  <Link href={serviceRoutes["google-ads"]}>Google Ads</Link>: Nachfrage abholen, Daten sammeln
                </li>
                <li>
                  <Link href={serviceRoutes["meta-ads"]}>Meta Ads</Link>: Nachfrage wecken, Marke bekannt machen
                </li>
                <li>
                  <Link href={routes.blog}>Blog</Link>: Fragen aus dem Alltag beantworten, die Google als Relevanz liest
                </li>
              </ul>
            </div>
            <div className="mini-grid cols-3 reveal" aria-label="Kanäle im Zusammenspiel">
              {channelMix.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="prozess">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">09 — Der Weg dahin</span>
              <h2 className="band-title">
                Fünf Phasen, <em>ein wachsendes Ergebnis</em>
              </h2>
            </div>
            <p className="band-note">
              Von der Analyse bis zur laufenden Pflege. Jede Phase baut auf der
              vorherigen auf, Abkürzungen gibt es nicht.
            </p>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band theme-light" id="pflege">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">10 — Pflege &amp; Betreuung</span>
              <h2 className="band-title">
                Rankings entstehen nicht, <em>sie werden gehalten</em>
              </h2>
              <p className="lead">
                Eine Website, die nach dem Launch niemand mehr anfasst, verliert
                langsam: Wettbewerber ziehen vorbei, Technik veraltet, Inhalte
                werden unaktuell. Laufende Betreuung heißt nicht viel Aufwand,
                sondern regelmäßiger.
              </p>
              <p className="lead">
                Ob du das selbst übernimmst oder an uns abgibst, entscheidest
                du. Beides funktioniert, nur nichts tun funktioniert nicht.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Laufende SEO-Pflege">
              {care.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="zusammenarbeit">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">11 — Zusammenarbeit</span>
              <h2 className="band-title">
                Deine Sichtbarkeit. <em>Ein Ansprechpartner.</em>
              </h2>
              <p className="lead">
                Kein Support-Ticket, keine Warteschleife. Zwischenstände, neue
                Seiten oder Fragen zum Unternehmensprofil klärst du direkt per
                WhatsApp mit dem, der die Arbeit macht.
              </p>
              <ul className="lines">
                <li>Monatliche Auswertung in verständlicher Sprache.</li>
                <li>Ehrliche Einschätzung, auch wenn ein Begriff unrealistisch ist.</li>
                <li>Zugriff auf Search Console und Unternehmensprofil bleibt bei dir.</li>
              </ul>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Wir haben jetzt auch Flachdachsanierung im Angebot. Lohnt sich dafür eine eigene Seite?" },
                  { from: "out", text: "Ich schaue mir das Suchvolumen in der Region an und melde mich mit einer Empfehlung." },
                  { from: "in", text: "Super, danke." },
                ]}
                footer="Beispielhafter Ablauf einer Abstimmung während der Betreuung"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="bewertungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">12 — Kundenstimmen</span>
              <h2 className="band-title">
                Das sagen Kunden <em>über die Zusammenarbeit</em>
              </h2>
            </div>
            <p className="band-note">
              Nur Aussagen, die unsere Kunden so veröffentlicht haben. Keine
              erfundenen Bewertungen, keine geschönten Rankings.
            </p>
          </div>
          <Reviews reviews={verifiedReviews} items={verifiedReviews} />
        </section>

        <RegionLinks leistung="SEO" kurz="SEO" />

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">13 — Häufige Fragen</span>
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
          <CloseCta ctaLabel="SEO-Potenzial besprechen">
            Lass uns über deine <em>Sichtbarkeit</em> sprechen.
          </CloseCta>

          <ContactStrip />

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
