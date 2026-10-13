import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowIcon,
  ClientMarquee,
  CloseCta,
  ContactStrip,
  FaqList,
  RefCard,
  Reviews,
  StatusPanel,
  Stepper,
  WaMock,
  type RefItem,
} from "@/components/ui";
import { ReelMock } from "@/components/mocks";
import { site } from "@/lib/site";
import { getFallstudie } from "@/lib/projekte";
import { verifiedProjectVoices, verifiedReviews } from "@/lib/verified-reviews";
import { projectPath, routes, serviceRoutes } from "@/lib/routes";
import maTransporteImage from "@/public/bilder/projekt-ma-transporte.webp";

export const metadata: Metadata = {
  title: "Reels & Social-Media-Content erstellen lassen: Schnitt oder Dreh vor Ort",
  description:
    "Pixel56 produziert Reels und Social-Media-Content für Unternehmen: Schnitt aus deinem Rohmaterial oder Dreh direkt in deinem Betrieb, mit festem Rhythmus. Aus Bendorf bei Koblenz.",
  alternates: { canonical: serviceRoutes["content-produktion"] },
  openGraph: {
    title: "Reels & Social-Media-Content erstellen lassen | Pixel56",
    description:
      "Echter Content aus dem Betrieb statt Stockfotos: Reels, Fotos und Beiträge, geschnitten aus deinem Material oder vor Ort produziert.",
    url: serviceRoutes["content-produktion"],
  },
};

const serviceUrl = `${site.url}${serviceRoutes["content-produktion"]}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: "Reels und Social-Media-Content",
      serviceType: "Videoschnitt, Reel-Produktion und Social-Media-Content",
      description:
        "Produktion von Reels, Kurzvideos, Fotos und Social-Media-Beiträgen für Unternehmen: Schnitt aus vorhandenem Material oder Dreh vor Ort, inklusive Redaktionsplan und Veröffentlichung.",
      url: serviceUrl,
      provider: { "@type": "ProfessionalService", "@id": `${site.url}/#organization`, name: site.name, url: site.url },
      areaServed: [
        { "@type": "City", name: "Koblenz" },
        { "@type": "Country", name: "Deutschland" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Content-Leistungen",
        itemListElement: [
          "Reels und Kurzvideos",
          "Foto- und Videoproduktion vor Ort",
          "Schnitt aus vorhandenem Material",
          "Ad-Creatives für Kampagnen",
          "Redaktionsplan und Veröffentlichung",
          "Auswertung und Weiterentwicklung",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${site.url}/dienstleistung` },
        { "@type": "ListItem", position: 3, name: "Social Content & Reels", item: serviceUrl },
      ],
    },
  ],
};

const statusRows = [
  { label: "Keine Zeit für Content nebenbei", tag: "Zeit" },
  { label: "Wirkt gestellt statt echt", tag: "Stil" },
  { label: "Jede Plattform für sich", tag: "Konsistenz" },
  { label: "Ein Dreh, ein einziger Beitrag", tag: "Verwertung" },
  { label: "Drei Wochen nichts, dann fünf Posts", tag: "Rhythmus" },
  { label: "Keine Ahnung, was ankommt", tag: "Auswertung" },
];

const audiences = [
  {
    tag: "Handwerk & Bau",
    title: "Die Baustelle als bester Content",
    text: "Dach, Abbruch, Kanalbau: Arbeit, die man zeigen kann. Kurze Reels vom Alltag und Recruiting-Creatives mit echten Mitarbeitern, nicht mit Models im sauberen Helm.",
    refs: "GM-Dachdecker · Oktay Cömertler",
  },
  {
    tag: "Gastronomie",
    title: "Lust machen, bevor man vorbeikommt",
    text: "Küche, Produkt, Menschen hinter der Theke. Reels direkt aus dem laufenden Betrieb, die Appetit machen und den Laden zur Marke machen.",
    refs: "Burgerfabrik",
  },
  {
    tag: "Transport & Logistik",
    title: "Zeigen, was man sonst nicht sieht",
    text: "Spezialtransporte, Fuhrpark, Team. Laufender Social-Media-Content, der Leistungen erklärt, die aus einem Logo niemand versteht.",
    refs: "M&A Transporte",
  },
  {
    tag: "Bildung & Soziales",
    title: "Vertrauen über Gesichter",
    text: "Kurse, Schulungen, Veranstaltungen: Stories, Eventcover und Kampagnenmotive, die Menschen zeigen und zur Anmeldung führen.",
    refs: "Stark ins Neue · CASS Schulungen · Sportler für Kinderherzen",
  },
  {
    tag: "Beauty & Kreativ",
    title: "Handwerk, das man sehen muss",
    text: "Ateliers, Studios, Workshops: Vorher-nachher, Prozess und Ergebnis. Content, der die eigene Handschrift zeigt und direkt zur Buchung führt.",
    refs: "CurlyAnn Atelier",
  },
  {
    tag: "Dienstleistung",
    title: "Expertise sichtbar machen",
    text: "Beratung, Technik, Service: Kurzvideos, die ein Problem erklären und zeigen, wer es löst. Als organischer Beitrag oder als Creative für Kampagnen.",
    refs: "Van den Berg Gruppe · Colak GmbH",
  },
];

const scope = [
  { nr: "01", title: "Reels & Kurzvideos", text: "Schnitt, Untertitel, Musik und Formatierung für Instagram, Facebook, TikTok, YouTube Shorts oder LinkedIn. Aus deinem Material oder unserem Dreh." },
  { nr: "02", title: "Foto & Video vor Ort", text: "Team, Arbeit und Atmosphäre, geplant mit Shotlist und produziert direkt in deinem Betrieb. Ausrüstung bringen wir mit, Models brauchst du nicht." },
  { nr: "03", title: "Ad-Creatives", text: "Aus demselben Material entstehen Motive und Clips für Meta- und Google-Kampagnen, in mehreren Varianten zum Testen." },
  { nr: "04", title: "Texte & Hooks", text: "Der erste Satz entscheidet, ob jemand weiterschaut. Wir schreiben Hooks, Captions und Untertitel, die zum Betrieb klingen, nicht zur Agentur." },
  { nr: "05", title: "Redaktionsplan & Posting", text: "Ein Rhythmus, der durchhaltbar ist, und auf Wunsch die Veröffentlichung auf allen Kanälen. Du gibst frei, wir kümmern uns um den Rest." },
  { nr: "06", title: "Auswertung", text: "Was Reichweite, Speicherungen und Anfragen bringt, wird ausgebaut. Was nicht funktioniert, fliegt raus. Ohne Zahlenfriedhof, mit klarer Einordnung." },
];

const drehtag = [
  { title: "Vorbereitung", text: "Wir klären Ziel, Formate und Motive und schicken dir eine kurze Shotlist. Du weißt vorher, was wir drehen und wen wir brauchen." },
  { title: "Ankommen", text: "Technik aufbauen dauert wenige Minuten. Kein Studio, keine Scheinwerferwand, der Betrieb läuft weiter." },
  { title: "Dreh während der Arbeit", text: "Die besten Szenen entstehen beim Arbeiten, nicht beim Posieren. Wir folgen dem Alltag und greifen nur ein, wenn Licht oder Ton es brauchen." },
  { title: "Kurze Interviews", text: "Drei bis fünf Fragen an Inhaber oder Team, locker und ohne Teleprompter. Daraus entstehen die Reels mit den meisten Reaktionen." },
  { title: "Fotos nebenbei", text: "Aus demselben Termin kommen Fotos für Website, Google-Unternehmensprofil und Beiträge. Ein Termin, mehrere Verwendungen." },
  { title: "Nachbereitung", text: "Sichtung, Schnitt, Untertitel, Formate. Du bekommst eine Vorschau zur Freigabe, danach geht das Material in den Plan." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Content-Strategie", text: "Welche Formate, welche Kanäle, welcher Rhythmus zu dir passen. Und welches Ziel der Content hat: Anfragen, Bewerber oder Bekanntheit." },
  { nr: "02", tag: "Phase 2", title: "Material oder Dreh", text: "Du lieferst Rohmaterial mit kurzem Briefing, oder wir produzieren die Aufnahmen bei dir vor Ort." },
  { nr: "03", tag: "Phase 3", title: "Schnitt & Bearbeitung", text: "Aus dem Material entstehen Reels, Fotos und Creatives in mehreren Formaten. Du siehst alles vor der Veröffentlichung." },
  { nr: "04", tag: "Phase 4", title: "Veröffentlichung", text: "Inhalte im geplanten Rhythmus, auf Wunsch komplett durch uns. Kein Beitrag bleibt im Ordner liegen." },
  { nr: "05", tag: "Phase 5", title: "Auswertung", text: "Was ankommt, wird ausgebaut. Alle paar Wochen besprechen wir, welche Formate weiterlaufen und was neu dazukommt." },
];

const packages = [
  { title: "Schnitt-Paket", text: "Du lieferst Rohmaterial, wir liefern fertige Reels in mehreren Formaten. Der günstigste Einstieg, flexibel planbar." },
  { title: "Drehtag", text: "Ein Termin bei dir im Betrieb mit Shotlist, Interviews und Fotos. Daraus entsteht Material für mehrere Wochen." },
  { title: "Monatspaket", text: "Fester Rhythmus aus Produktion, Schnitt und Veröffentlichung, damit Social Media nicht wieder liegen bleibt." },
  { title: "Ads-Creatives", text: "Motive und Clips für Kampagnen, abgestimmt mit unserer Meta-Ads-Betreuung. In Varianten, damit getestet werden kann." },
];

const referenzen: RefItem[] = [
  { variant: "ic-4", barWidth: 55, href: projectPath("burgerfabrik"), cat: "Burgerfabrik", title: "Reels direkt aus dem Ladenalltag", text: "Kurzvideos aus dem laufenden Betrieb statt gestellter Werbeaufnahmen. Küche, Produkt und Team als laufender Content.", tag: "Reels · Social Content · laufend" },
  { variant: "ic-2", barWidth: 65, img: "/bilder/projekt-ma-transporte.webp", href: projectPath("ma-transporte"), cat: "M&A Transporte", title: "Laufende Social-Media-Betreuung seit 2019", text: "Kontinuierliche Content-Produktion neben der Website, abgestimmt mit Meta-Ads-Kampagnen.", tag: "Social Media · Webdesign · seit 2019" },
];

const faqs = [
  { q: "Könnt ihr Videos schneiden, die wir selbst aufgenommen haben?", a: "Ja. Du schickst uns dein Rohmaterial und ein kurzes Briefing. Wir übernehmen Auswahl, Dramaturgie, Schnitt, Untertitel, Musik und die passenden Formate für deine Kanäle. Handyaufnahmen reichen oft aus, wenn Licht und Ton brauchbar sind; worauf du achten solltest, sagen wir dir vorher." },
  { q: "Müssen wir für den Dreh unseren Alltag unterbrechen?", a: "Möglichst wenig. Wir planen Termine so, dass sie sich in den laufenden Betrieb einfügen. Die besten Aufnahmen entstehen während der normalen Arbeit, nicht in einer gestellten Pause." },
  { q: "Brauchen wir professionelle Ausrüstung oder Models?", a: "Nein. Die Ausrüstung bringen wir mit. Echte Mitarbeiter und Inhaber wirken auf Social Media glaubwürdiger als gebuchte Models, und genau diese Glaubwürdigkeit bringt die Anfragen." },
  { q: "Wie oft sollten wir posten?", a: "Wichtiger als die Häufigkeit ist die Regelmäßigkeit. Ein Beitrag pro Woche, der verlässlich kommt, schlägt fünf Beiträge in einer Woche und danach drei Wochen Stille. Im Erstgespräch legen wir einen Rhythmus fest, den du durchhalten kannst." },
  { q: "Übernehmt ihr auch das Posten selbst?", a: "Ja, im Monatspaket. Du gibst frei, wir veröffentlichen nach Plan auf den vereinbarten Kanälen. Bei Einzelpaketen liefern wir das fertige Material zur eigenen Verwendung." },
  { q: "Was ist günstiger: eigenes Material oder ein Dreh vor Ort?", a: "Der Schnitt aus gut vorbereitetem Rohmaterial ist in der Regel günstiger, weil Planung, Anfahrt und Produktion entfallen. Ein Drehtag lohnt sich, wenn professionelles Ausgangsmaterial fehlt oder an einem Termin Inhalte für mehrere Wochen entstehen sollen." },
  { q: "Wem gehört das fertige Material?", a: "Dir. Reels, Fotos und Creatives kannst du auf allen deinen Kanälen nutzen, auch auf der Website oder in Anzeigen. Musik lizenzieren wir so, dass die Nutzung auf den vereinbarten Plattformen sauber ist." },
  { q: "Was kostet Content-Produktion?", a: "Das hängt von Materialmenge, Videolänge, Anzahl der Formate und einem möglichen Vor-Ort-Termin ab. Du bekommst vorab einen klaren Leistungsumfang, für ein Einzelpaket oder eine laufende Zusammenarbeit. Keine offene Stundenabrechnung." },
];

const contentVoices = [
  verifiedProjectVoices["cass-schulungen"],
  verifiedReviews[1],
  verifiedReviews[0],
];

const spotlight = getFallstudie("ma-transporte");

export default function ContentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="service-premium content-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Leistungen", page: "Social Content & Reels" }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">REELS · SOCIAL CONTENT · VIDEOPRODUKTION · REGION KOBLENZ</div>
              <h1>
                <span>Dein Material</span>
                <span className="service-hero-accent">oder unser Dreh.</span>
                <span>Content, der echt ist.</span>
              </h1>
              <p>
                Du schickst uns deine Aufnahmen, wir machen daraus Reels, die
                im Feed stoppen. Oder wir kommen zu dir in den Betrieb,
                produzieren vor Ort und liefern Videos, Fotos und Beiträge in
                einem Rhythmus, der ohne dein tägliches Zutun läuft.
              </p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Content-Projekt besprechen <ArrowIcon />
                </a>
                <Link className="btn-text" href="#modelle">
                  Schnitt oder Dreh? ↓
                </Link>
              </div>
              <div className="premium-proof" aria-label="Content-Produktion auf einen Blick">
                <span>Echt statt gestellt</span>
                <span>Dreh in der Region Koblenz</span>
                <span>Schnitt deutschlandweit</span>
                <span>Fester Rhythmus</span>
              </div>
            </div>

            <div className="web-experience-board" aria-label="Beispiel eines Reels aus der Content-Produktion">
              <div className="web-board-top">
                <span>PIXEL56 · REEL</span>
                <i>LIVE</i>
              </div>
              <ReelMock videoSrc="/videos/reel-handwerker-tipps.mp4" caption="5 Tipps für mehr Kundenanfragen" />
              <div className="web-board-signals">
                <div><span>01</span><b>Material</b><small>aus dem Betrieb</small></div>
                <div><span>02</span><b>Schnitt</b><small>mit Untertiteln</small></div>
                <div><span>03</span><b>Rhythmus</b><small>planbar</small></div>
                <div><span>04</span><b>Auswertung</b><small>ehrlich</small></div>
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label="Content-Produktion auf einen Blick">
          <div><span>Material</span><strong>Deine Aufnahmen oder unser Dreh</strong></div>
          <div><span>Formate</span><strong>Reels, Fotos, Ads &amp; Beiträge</strong></div>
          <div><span>Produktion</span><strong>Schnitt, Ton, Text &amp; Format</strong></div>
          <div><span>Ziel</span><strong>Regelmäßig sichtbar, mehr Anfragen</strong></div>
        </section>

        <section className="band dark-stage service-dark-stage" id="status">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Der Status quo</span>
              <h2 className="band-title">
                Sechs Zeichen, dass Content <em>liegen bleibt statt zu wirken</em>
              </h2>
              <p className="lead">
                Die Arbeit ist gut, aber online kommt davon kaum etwas an. Nicht,
                weil nichts zu erzählen wäre, sondern weil im Tagesgeschäft
                niemand Zeit hat, es zu erzählen.
              </p>
              <p className="lead">
                Das Ergebnis kennen die meisten: ein Instagram-Profil, dessen
                letzter Beitrag von vor vier Monaten ist. Für Kunden und Bewerber
                sieht das aus wie ein geschlossener Laden.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="Typische Gründe, warum Content liegen bleibt" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="modelle">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Zwei Produktionsmodelle</span>
              <h2 className="band-title">
                So viel Unterstützung, <em>wie du wirklich brauchst</em>
              </h2>
            </div>
            <p className="band-note">
              Nicht jeder Betrieb braucht einen kompletten Drehtag. Deshalb
              trennen wir Schnitt-Service und Vor-Ort-Produktion klar, auch im
              Preis.
            </p>
          </div>
          <div className="content-models reveal">
            <article>
              <span>// MODELL 01 · DU FILMST</span>
              <h3>Du filmst. Wir machen den Rest.</h3>
              <p>Du sendest uns vorhandene Aufnahmen, vom Smartphone oder aus einer früheren Produktion. Wir sagen dir vorher, worauf du beim Filmen achten solltest.</p>
              <ul>
                <li>Material sichten und starke Szenen auswählen</li>
                <li>Reels schneiden, Untertitel, Hooks und Musik ergänzen</li>
                <li>Mehrere Formate und Varianten für alle Kanäle exportieren</li>
              </ul>
              <strong>Geringer Aufwand für dich, deutschlandweit möglich.</strong>
            </article>
            <article>
              <span>// MODELL 02 · WIR DREHEN</span>
              <h3>Wir drehen bei dir vor Ort.</h3>
              <p>Wir planen Motive und Formate, bringen die Technik mit und produzieren direkt in deinem Unternehmen, während der Betrieb weiterläuft.</p>
              <ul>
                <li>Konzept und Shotlist vor dem Termin</li>
                <li>Video, Kurzinterviews und Fotos im echten Arbeitsumfeld</li>
                <li>Schnitt und Content-Paket für mehrere Wochen nach dem Dreh</li>
              </ul>
              <strong>Eigenes Bildmaterial, höhere Produktionstiefe, Region Koblenz.</strong>
            </article>
          </div>
        </section>

        <section className="band theme-light" id="branchen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Für wen das funktioniert</span>
              <h2 className="band-title">
                Jeder Betrieb hat Content. <em>Die meisten zeigen ihn nicht.</em>
              </h2>
            </div>
            <p className="band-note">
              Sechs Branchen, in denen wir regelmäßig produzieren. Das Prinzip
              ist überall gleich: echte Arbeit, echte Menschen, fester Rhythmus.
            </p>
          </div>
          <div className="audience-grid reveal">
            {audiences.map((audience) => (
              <article className="audience-card" key={audience.tag}>
                <span>{audience.tag}</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <small>Referenzen: {audience.refs}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="leistungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Was wir produzieren</span>
              <h2 className="band-title">
                Sechs Bausteine, <em>ein durchgängiger Look</em>
              </h2>
            </div>
            <p className="band-note">
              Ob Reel, Foto, Creative oder laufende Betreuung: Alle Formate
              greifen ineinander, statt isoliert nebeneinander zu laufen.
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

        <section className="band theme-light" id="echt">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Wie wir arbeiten</span>
              <h2 className="band-title">
                Echt statt <em>gestellt</em>
              </h2>
            </div>
            <p className="band-note">
              Wir drehen dort, wo tatsächlich gearbeitet wird. Kein Studio, kein
              Stockmaterial, keine gestellten Situationen.
            </p>
          </div>
          <div className="callout2 reveal">
            <p>
              <b>Der häufigste Fehler:</b> Content, der zu poliert wirkt,
              verliert genau die Glaubwürdigkeit, die er aufbauen soll. Ein
              Handwerker mit Staub auf der Jacke überzeugt mehr als ein Model mit
              sauberem Helm. Kleine Unperfektheit ist auf Social Media ein
              Vorteil, kein Makel.
            </p>
          </div>
          <div className="work-gallery work-gallery-social reveal" style={{ marginTop: 28 }}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bilder/content-creative-abbruch.webp" alt="Social-Media-Creative für die Mitarbeitergewinnung im Abbruch" loading="lazy" decoding="async" />
              <figcaption><b>Recruiting-Creative</b><span>Abbruch &amp; Tiefbau · 1:1</span></figcaption>
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

        <section className="band theme-light" id="drehtag">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">06 — So läuft ein Drehtag</span>
              <h2 className="band-title">
                Ein Termin, <em>Material für Wochen</em>
              </h2>
              <p className="lead">
                Viele Betriebe schieben Content auf, weil sie sich einen
                Filmdreh wie eine Produktion mit Scheinwerfern und Regieanweisung
                vorstellen. Bei uns läuft es anders: Wir kommen, der Betrieb
                arbeitet, wir folgen.
              </p>
              <p className="lead">
                Am Ende eines Vormittags haben wir in der Regel Material für
                mehrere Reels, Fotos für Website und Google-Profil und
                Kurzinterviews, aus denen die stärksten Beiträge entstehen.
              </p>
            </div>
            <div className="mini-grid reveal" aria-label="Ablauf eines Drehtags">
              {drehtag.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="verwertung">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">07 — Mehr aus jedem Material</span>
              <h2 className="band-title">
                Ein Dreh. <em>Mehrere Formate.</em>
              </h2>
              <p className="lead">
                Der teuerste Fehler in der Content-Produktion: ein Drehtag, ein
                Beitrag, fertig. Wir planen von Anfang an so, dass aus einem
                Materialpool Inhalte für alle Kanäle entstehen.
              </p>
              <ul className="lines">
                <li>Echtes Material aus deinem Alltag, kein Studio, kein Stock.</li>
                <li>Ein Dreh liefert Reels, Story-Cuts, Creatives und Website-Clips.</li>
                <li>Fester Veröffentlichungsrhythmus statt sporadischer Posts.</li>
                <li>Laufende Auswertung: Was ankommt, wird ausgebaut.</li>
              </ul>
            </div>
            <div className="content-reuse reveal" aria-label="Mehrfachverwertung von Content">
              <span>// AUS EINEM MATERIALPOOL</span>
              <div><b>01</b><strong>Reel</strong><small>9:16 · Instagram, TikTok, Shorts</small></div>
              <div><b>02</b><strong>Story-Cuts</strong><small>Mehrere kurze Sequenzen</small></div>
              <div><b>03</b><strong>Ad-Creative</strong><small>Varianten für Meta-Kampagnen</small></div>
              <div><b>04</b><strong>Website-Clip</strong><small>Marke und Team sichtbar</small></div>
            </div>
          </div>
        </section>

        {spotlight && (
          <section className="band theme-light" id="fallstudie">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">08 — Ein Projekt im Detail</span>
                <h2 className="band-title">
                  {spotlight.kunde}: <em>{spotlight.loesung.titel}</em>
                </h2>
              </div>
              <p className="band-note">{spotlight.branche} · {spotlight.tags.join(" · ")} · {spotlight.jahr}</p>
            </div>
            <div className="case-spotlight reveal">
              <div>
                <figure className="case-spotlight-visual" style={{ margin: 0 }}>
                  <Image src={maTransporteImage} alt={`${spotlight.kunde}: ${spotlight.titel}`} fill sizes="(max-width: 980px) 100vw, 50vw" />
                  <figcaption>{spotlight.kunde.toUpperCase()}</figcaption>
                </figure>
              </div>
              <div>
                <p className="lead" style={{ margin: 0 }}>{spotlight.teaser}</p>
                <div className="case-steps">
                  <div className="case-step">
                    <span>Ausgangslage</span>
                    <h3>{spotlight.problem.titel}</h3>
                    <p>{spotlight.problem.text}</p>
                    <ul>
                      {spotlight.problem.punkte.map((punkt) => <li key={punkt}>{punkt}</li>)}
                    </ul>
                  </div>
                  <div className="case-step">
                    <span>Lösung</span>
                    <h3>{spotlight.loesung.titel}</h3>
                    <p>{spotlight.loesung.text}</p>
                    <ul>
                      {spotlight.loesung.punkte.map((punkt) => <li key={punkt}>{punkt}</li>)}
                    </ul>
                  </div>
                  {spotlight.ergebnis && (
                    <div className="case-step">
                      <span>Stand heute</span>
                      <h3>Seit 2019 laufend betreut</h3>
                      <p>{spotlight.ergebnis.text}</p>
                    </div>
                  )}
                </div>
                <Link className="body-link" href={projectPath(spotlight.slug)}>
                  Zur vollständigen Fallstudie <ArrowIcon />
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="band theme-light" id="prozess">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">09 — Der Weg dahin</span>
              <h2 className="band-title">
                Fünf Phasen, <em>laufend produziert</em>
              </h2>
            </div>
            <p className="band-note">
              Von der Strategie bis zur Auswertung. Du weißt jederzeit, was als
              Nächstes entsteht und wann es erscheint.
            </p>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band theme-light" id="pakete">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">10 — Pakete &amp; Rhythmus</span>
              <h2 className="band-title">
                Vier Wege, <em>die sich kombinieren lassen</em>
              </h2>
              <p className="lead">
                Du musst nicht mit dem Monatspaket starten. Viele Kunden beginnen
                mit einem Schnitt-Paket oder einem Drehtag und entscheiden danach,
                ob eine laufende Betreuung sinnvoll ist.
              </p>
              <p className="lead">
                Preise hängen von Umfang, Formaten und Anfahrt ab und stehen vor
                dem Start klar im Angebot. Keine offene Stundenabrechnung, kein
                Kleingedrucktes.
              </p>
              <Link className="body-link" href={serviceRoutes["meta-ads"]}>
                Creatives in Kampagnen einsetzen: Meta Ads <ArrowIcon />
              </Link>
            </div>
            <div className="mini-grid reveal" aria-label="Content-Pakete">
              {packages.map((item) => (
                <div key={item.title}>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="referenzen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">11 — Referenzen</span>
              <h2 className="band-title">
                Aus der <em>echten Arbeit</em>
              </h2>
            </div>
            <p className="band-note">
              Zwei Betriebe, zwei Branchen, dasselbe Prinzip: Content aus dem
              Alltag, regelmäßig und ohne gestellte Szenen.
            </p>
          </div>
          <div className="ref-grid-2 reveal">
            {referenzen.map((reference) => (
              <RefCard item={reference} key={reference.cat} />
            ))}
          </div>
          <div className="section-link-row reveal">
            <Link className="body-link" href={routes.projects}>
              Alle Kundenprojekte ansehen <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="zusammenarbeit">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">12 — Zusammenarbeit</span>
              <h2 className="band-title">
                Dein Content. <em>Ein fester Draht.</em>
              </h2>
              <p className="lead">
                Kein Ticketsystem, keine Warteschleife. Drehtermine, Freigaben
                und spontane Ideen stimmst du direkt per WhatsApp mit deinem
                Ansprechpartner ab, der auch hinter der Kamera steht.
              </p>
              <ul className="lines">
                <li>Vorschau jedes Beitrags vor der Veröffentlichung.</li>
                <li>Spontane Anlässe, etwa eine neue Maschine oder ein Projektabschluss, kurzfristig eingeplant.</li>
                <li>Du entscheidest, wie viel du selbst filmst und wie viel wir übernehmen.</li>
              </ul>
            </div>
            <div className="reveal">
              <WaMock
                name="Pixel56 — Dein Ansprechpartner"
                messages={[
                  { from: "in", text: "Können wir das neue Reel schon diese Woche drehen?" },
                  { from: "out", text: "Ja, Dienstag 14 Uhr passt. Ich bringe die Shotlist mit." },
                  { from: "in", text: "Perfekt, bis dann!" },
                ]}
                footer="Beispielhafter Ablauf einer Terminabstimmung"
              />
            </div>
          </div>
        </section>

        <section className="band theme-light" id="bewertungen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">13 — Kundenstimmen</span>
              <h2 className="band-title">
                Das sagen <em>Kunden über uns</em>
              </h2>
            </div>
            <p className="band-note">
              Nur Aussagen, die unsere Kunden so veröffentlicht haben. Keine
              erfundenen Bewertungen.
            </p>
          </div>
          <Reviews reviews={contentVoices} items={contentVoices} />
        </section>

        <section className="band theme-light" id="faq">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">14 — Häufige Fragen</span>
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
          <CloseCta ctaLabel="Content-Projekt besprechen">
            Lass uns über deinen <em>Content</em> sprechen.
          </CloseCta>

          <ContactStrip />

          <SiteFooter />
        </div>
      </main>
    </>
  );
}
