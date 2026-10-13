import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BreadcrumbLd from "@/components/BreadcrumbLd";
import {
  ArrowIcon,
  ClientMarquee,
  CloseCta,
  ContactStrip,
  FaqList,
  RefCard,
  Reviews,
  type RefItem,
} from "@/components/ui";
import type { LegacyLocation } from "@/lib/legacy-locations";
import { getFallstudie } from "@/lib/projekte";
import { getStandortLeistung } from "@/lib/standort-inhalte";
import {
  getRegionStadt,
  locationsOfCity,
  neighbouringLocations,
  stadtAnzeige,
} from "@/lib/standorte";
import { verifiedReviews } from "@/lib/verified-reviews";
import { locationPath, projectPath, routes } from "@/lib/routes";
import { site } from "@/lib/site";

/** Sachliche Korrekturen an alten CMS-Texten: Pixel56 sitzt in Bendorf, nicht in Koblenz. */
const korrekturen: [string, string][] = [
  ["und ist Sitz von Pixel56", "und liegt rund 10 km von unserem Sitz in Bendorf entfernt"],
];

/** Der stadtspezifische Absatz der alten Seite (Block 3, CMS-Feld lokaler-content). */
function lokalerAbsatz(location: LegacyLocation): string | undefined {
  const block = location.body[2];
  if (!block || block.typ !== "p") return undefined;
  let text = block.text.trim();
  for (const [alt, neu] of korrekturen) text = text.replace(alt, neu);
  return text.length > 80 ? text : undefined;
}

export default function LocationPage({ location }: { location: LegacyLocation }) {
  const stadt = stadtAnzeige(location);
  const leistung = getStandortLeistung(location.leistung);
  const region = getRegionStadt(location.stadt);
  const canonical = locationPath(location.slug);
  const lokal = lokalerAbsatz(location);
  const geschwister = locationsOfCity(location.stadt).filter((other) => other.slug !== location.slug);
  const nachbarn = neighbouringLocations(location).slice(0, 6);
  const referenzen: RefItem[] = leistung.referenzen
    .map((slug) => getFallstudie(slug))
    .filter((projekt): projekt is NonNullable<typeof projekt> => Boolean(projekt))
    .map((projekt) => ({
      variant: projekt.variant,
      img: projekt.bild,
      href: projectPath(projekt.slug),
      cat: projekt.kunde,
      title: projekt.titel,
      text: projekt.teaser,
      tag: `${projekt.tags.join(" · ")} · ${projekt.jahr}`,
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${canonical}#service`,
    name: `${leistung.kurz} in ${stadt}`,
    serviceType: leistung.key,
    url: `${site.url}${canonical}`,
    areaServed: { "@type": "City", name: stadt },
    provider: {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      telephone: site.phoneIntl,
      address: { "@type": "PostalAddress", streetAddress: "Hüttenstraße 100", postalCode: "56170", addressLocality: "Bendorf", addressCountry: "DE" },
    },
  };

  const faqs = [
    ...leistung.faqs(stadt),
    region
      ? { q: `Habt ihr ein Büro in ${stadt}?`, a: region.entfernungKm === 0 ? `Pixel56 arbeitet aus Bendorf, ohne Ladenlokal. Kennenlernen läuft per Video-Call, Telefon oder WhatsApp, für Fotos und Drehs kommen wir zu dir in den Betrieb.` : `Nein, unser Sitz ist in Bendorf bei Koblenz, rund ${region.entfernungKm} km von ${stadt} entfernt. Für Kennenlernen, Fotos oder Drehs kommen wir zu dir, alles andere läuft per Video-Call, Telefon und WhatsApp.` }
      : { q: `Habt ihr ein Büro in ${stadt}?`, a: `Nein. Pixel56 sitzt in Bendorf bei Koblenz und arbeitet mit Unternehmen in ganz Deutschland. Die Zusammenarbeit mit Kunden in ${stadt} läuft per Video-Call, Telefon und WhatsApp, mit denselben festen Terminen wie vor Ort.` },
    { q: "Was kostet das Erstgespräch?", a: "Nichts. Es ist unverbindlich und dient dazu, deine Situation ehrlich einzuschätzen. Erst danach gibt es ein konkretes Angebot." },
  ];

  const fakten = region
    ? [
        { b: "Entfernung", small: region.entfernungKm === 0 ? "Unser Sitz, mitten in Bendorf" : `Rund ${region.entfernungKm} km ab Bendorf, etwa ${region.fahrzeitMin} Minuten` },
        { b: "Vor Ort", small: "Kennenlernen, Fotos und Drehs bei dir im Betrieb, ohne Reisekosten" },
        { b: "Region", small: region.landkreis },
        { b: "Abstimmung", small: "Telefon, WhatsApp, Video-Call oder persönlich in Bendorf" },
      ]
    : [
        { b: "Zusammenarbeit", small: "Per Video-Call, Telefon und WhatsApp, mit festen Terminen" },
        { b: "Sitz", small: "Bendorf bei Koblenz, Rheinland-Pfalz" },
        { b: "Vor Ort", small: "Drehtage und Workshops nach Absprache und Aufwand" },
        { b: "Kunden", small: "Betriebe aus der Region Koblenz und aus ganz Deutschland" },
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbLd items={[{ name: "Standorte", href: routes.locations }, { name: `${leistung.kurz} in ${stadt}`, href: canonical }]} />

      <main className="service-premium location-premium">
        <div className="sheet">
          <SiteNav crumb={{ section: "Standorte", page: `${leistung.kurz} in ${stadt}` }} />

          <header className="service-premium-hero">
            <div className="service-premium-glow" aria-hidden="true" />
            <div className="service-premium-copy">
              <div className="premium-kicker">{leistung.kurz.toUpperCase()} · {stadt.toUpperCase()} · {region ? "REGION KOBLENZ" : "DEUTSCHLANDWEIT"}</div>
              <h1>
                <span>{leistung.kurz}</span>
                <span className="service-hero-accent">in {stadt}.</span>
                <span>{leistung.heroLine}</span>
              </h1>
              <p>{leistung.heroText(stadt)}</p>
              <div className="premium-actions">
                <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
                  Kostenloses Erstgespräch <ArrowIcon />
                </a>
                <Link className="btn-text" href="#vor-ort">
                  {region ? `Pixel56 in ${stadt} ↓` : "So arbeiten wir zusammen ↓"}
                </Link>
              </div>
              <div className="premium-proof" aria-label={`${leistung.kurz} auf einen Blick`}>
                {leistung.proof.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>

            <div className="web-experience-board" aria-label={`Ablauf: ${leistung.kurz}`}>
              <div className="web-board-top">
                <span>{leistung.boardTop}</span>
                <i>{stadt.toUpperCase()}</i>
              </div>
              <div className="system-flow" aria-hidden="true">
                {leistung.flow.map((step, index) => (
                  <div key={step.b}><span>{String(index + 1).padStart(2, "0")}</span><b>{step.b}</b><small>{step.small}</small></div>
                ))}
              </div>
              <div className="web-board-signals">
                {leistung.signals.map((signal, index) => (
                  <div key={signal.b}><span>{String(index + 1).padStart(2, "0")}</span><b>{signal.b}</b><small>{signal.small}</small></div>
                ))}
              </div>
            </div>
          </header>
        </div>

        <ClientMarquee />

        <div className="editorial-shell service-editorial">
          <div className="sheet">
        <section className="service-summary service-summary-premium reveal theme-light" aria-label={`${leistung.kurz} in ${stadt} auf einen Blick`}>
          <div>
            <span>Leistung</span>
            <strong>{leistung.key}</strong>
          </div>
          <div>
            <span>Für Unternehmen in</span>
            <strong>{stadt}{region ? " und Umgebung" : ""}</strong>
          </div>
          <div>
            <span>Agentur</span>
            <strong>{region && region.entfernungKm > 0 ? `Bendorf bei Koblenz, rund ${region.entfernungKm} km entfernt` : "Pixel56, Bendorf bei Koblenz"}</strong>
          </div>
          <div>
            <span>Zusammenarbeit</span>
            <strong>{region ? "Vor Ort oder per Video-Call" : "Per Video-Call, Telefon, WhatsApp"}</strong>
          </div>
        </section>

        <section className="band theme-light" id="vor-ort">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">01 — {region ? `Pixel56 und ${stadt}` : `Für ${stadt}, aus Bendorf bei Koblenz`}</span>
              <h2 className="band-title">
                {region ? <>Nah genug, um <em>vorbeizukommen</em></> : <>Ehrlich gesagt: <em>Wir sitzen nicht in {stadt}</em></>}
              </h2>
              {region ? (
                <>
                  <p className="lead">{region.kontext}</p>
                  <p className="lead">
                    {region.entfernungKm === 0
                      ? "Wer aus Bendorf kommt, kann einfach vorbeischauen. Für Fotos, Drehs oder einen Workshop kommen wir genauso gern zu dir in den Betrieb."
                      : `Von Bendorf nach ${stadt} sind es rund ${region.entfernungKm} km. Für Kennenlernen, Fotos oder einen Drehtag kommen wir zu dir, ohne Reisekosten. Die laufende Abstimmung läuft per Telefon, WhatsApp oder Video-Call, wie es dir besser passt.`}
                  </p>
                </>
              ) : (
                <>
                  <p className="lead">
                    Pixel56 hat keinen Standort in {stadt}, und wir behaupten auch keinen. Unser Sitz ist in Bendorf bei Koblenz. Von dort arbeiten wir mit Unternehmen in ganz Deutschland, per Video-Call, Telefon und WhatsApp, mit festen Terminen und einem Ansprechpartner.
                  </p>
                  <p className="lead">
                    Für {leistung.kurz} spielt der Ort selten eine Rolle: Struktur, Texte, Kampagnen und Auswertung entstehen ortsunabhängig. Wo ein Drehtag oder Workshop vor Ort sinnvoll ist, planen wir ihn nach Aufwand.
                  </p>
                </>
              )}
              {lokal ? <p className="lead">{lokal}</p> : null}
            </div>
            <div className="mini-grid reveal" aria-label="Fakten zur Zusammenarbeit">
              {fakten.map((fakt) => (
                <div key={fakt.b}>
                  <b>{fakt.b}</b>
                  <small>{fakt.small}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="leistung">
          <div className="split2 align-top">
            <div className="reveal">
              <span className="band-tag">02 — {leistung.kurz} für Betriebe in {stadt}</span>
              <h2 className="band-title">
                {leistung.intro.title} <em>{leistung.intro.em}</em>
              </h2>
              {leistung.intro.absaetze(stadt).map((absatz) => (
                <p className="lead" key={absatz.slice(0, 40)}>{absatz}</p>
              ))}
              <Link className="body-link" href={leistung.route}>
                Alles über {leistung.kurz} bei Pixel56 <ArrowIcon />
              </Link>
            </div>
            <div className="case-steps reveal" style={{ marginTop: 0 }} aria-label={`${leistung.kurz}: worauf es ankommt`}>
              {leistung.intro.punkte.map((punkt, index) => (
                <div className="case-step" key={punkt}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{punkt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band theme-light" id="bausteine">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">03 — Was dazugehört</span>
              <h2 className="band-title">
                Sechs Bausteine, <em>ein Verantwortlicher</em>
              </h2>
            </div>
            <p className="band-note">
              Kein Weiterreichen zwischen Abteilungen. Die Bausteine werden
              zusammen geplant und von einer Person verantwortet.
            </p>
          </div>
          <div className="scope-grid reveal">
            {leistung.bausteine.map((item) => (
              <article className="scope-card" key={item.nr}>
                <span>{item.nr}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band dark-stage service-dark-stage" id="ablauf">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — So läuft die Zusammenarbeit</span>
              <h2 className="band-title">
                Vier Schritte, <em>keine Blackbox</em>
              </h2>
            </div>
            <p className="band-note">
              Du weißt jederzeit, wo das Projekt steht, was als Nächstes passiert
              und was es kostet.
            </p>
          </div>
          <div className="premium-process reveal">
            {leistung.ablauf.map((step) => (
              <article key={step.nr}>
                <span>{step.nr}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <small>{step.gets}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="band theme-light" id="referenzen">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Ausgewählte Arbeiten</span>
              <h2 className="band-title">
                Projekte <em>aus der Region und darüber hinaus</em>
              </h2>
            </div>
            <p className="band-note">
              Echte Kundenprojekte mit Ausgangslage und Umsetzung. Keine
              Vorlagen, keine erfundenen Zahlen.
            </p>
          </div>
          <div className="ref-grid-3 reveal">
            {referenzen.map((item) => (
              <RefCard key={item.cat} item={item} />
            ))}
          </div>
          <div className="section-link-row reveal">
            <Link className="body-link" href={routes.projects}>
              Alle Kundenprojekte ansehen <ArrowIcon />
            </Link>
          </div>
        </section>

        {(geschwister.length || nachbarn.length) ? (
          <section className="band theme-light" id="weitere">
            <div className="band-head reveal">
              <div>
                <span className="band-tag">06 — Weitere Leistungen und Orte</span>
                <h2 className="band-title">
                  Mehr für {stadt} <em>und die Region</em>
                </h2>
              </div>
              <p className="band-note">
                Jede Leistung funktioniert für sich. Richtig stark wird sie im
                Zusammenspiel mit Website, Anzeigen und Content.
              </p>
            </div>
            <div className="mini-grid reveal">
              {geschwister.length ? (
                <div>
                  <b>Weitere Leistungen in {stadt}</b>
                  <small>
                    {geschwister.map((other, index) => (
                      <span key={other.slug}>
                        {index > 0 ? " · " : ""}
                        <Link href={locationPath(other.slug)}>{getStandortLeistung(other.leistung).kurz}</Link>
                      </span>
                    ))}
                  </small>
                </div>
              ) : null}
              {nachbarn.length ? (
                <div>
                  <b>{leistung.kurz} in der Nachbarschaft</b>
                  <small>
                    {nachbarn.map((other, index) => (
                      <span key={other.slug}>
                        {index > 0 ? " · " : ""}
                        <Link href={locationPath(other.slug)}>{stadtAnzeige(other)}</Link>
                      </span>
                    ))}
                  </small>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

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
                {leistung.kurz} in {stadt}: <em>was Kunden vorher fragen</em>
              </h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

          </div>
        </div>

        <div className="sheet service-ending">
          <ContactStrip />
          <CloseCta>
            {leistung.kurz} in {stadt}: <em>Lass uns reden.</em>
          </CloseCta>
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
