import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PlannedMedia from "@/components/PlannedMedia";
import {
  ArrowIcon,
  PulseField,
  StatusPanel,
  Stepper,
  CloseCta,
  FaqList,
} from "@/components/ui";
import { site } from "@/lib/site";
import { routes, serviceRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "KI-Automatisierung für Unternehmen",
  description:
    "Pixel56 entwickelt sinnvolle KI-Prozesse für Unternehmen: Abläufe analysieren, Wissen nutzbar machen und wiederkehrende Aufgaben automatisieren.",
  alternates: { canonical: serviceRoutes["ki-automatisierung"] },
  openGraph: {
    title: "KI-Automatisierung für Unternehmen | Pixel56",
    description:
      "Konkrete KI-Workflows statt Tool-Hype — passend zu deinen Abläufen, deinem Team und deinen Daten.",
    url: serviceRoutes["ki-automatisierung"],
  },
};

const pageUrl = `${site.url}${serviceRoutes["ki-automatisierung"]}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "KI-Prozesse und Automatisierung für Unternehmen",
      serviceType: "KI-Beratung und Prozessautomatisierung",
      description:
        "Analyse und Umsetzung von KI-gestützten Arbeitsabläufen, Wissensassistenten und Automatisierungen für kleine und mittelständische Unternehmen.",
      provider: { "@id": `${site.url}/#organization` },
      areaServed: { "@type": "Country", name: "Deutschland" },
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${site.url}/dienstleistung` },
        { "@type": "ListItem", position: 3, name: "KI-Automatisierung", item: pageUrl },
      ],
    },
  ],
};

const statusRows = [
  { label: "Informationen liegen an fünf Orten", tag: "Wissen" },
  { label: "Texte beginnen immer wieder bei null", tag: "Entwurf" },
  { label: "Anfragen werden manuell vorsortiert", tag: "Eingang" },
  { label: "Übergaben kosten unnötig Zeit", tag: "Prozess" },
  { label: "Daten werden doppelt übertragen", tag: "Routine" },
  { label: "Viele KI-Tools, aber kein System", tag: "Fokus" },
];

const useCases = [
  { nr: "01", title: "Interne Wissensassistenten", text: "Richtlinien, Leistungen und häufige Fragen werden für dein Team schneller auffindbar und nutzbar." },
  { nr: "02", title: "Anfragen vorbereiten", text: "Eingehende Informationen strukturieren, fehlende Angaben erkennen und die Bearbeitung sinnvoll vorbereiten." },
  { nr: "03", title: "Content-Workflows", text: "Aus Briefings, Aufnahmen oder Fachwissen entstehen geordnete Entwürfe für Website, Social Media und Vertrieb." },
  { nr: "04", title: "Dokumente & Zusammenfassungen", text: "Besprechungen, Notizen oder lange Unterlagen in klare Aufgaben, Entscheidungen und nächste Schritte überführen." },
  { nr: "05", title: "Wiederkehrende Übergaben", text: "Informationen kontrolliert zwischen Formularen, Postfächern und vorhandenen Systemen weitergeben." },
  { nr: "06", title: "Individuelle Assistenten", text: "Spezialisierte Helfer für genau abgegrenzte Aufgaben statt eines allgemeinen Chatbots ohne Kontext." },
];

const steps = [
  { nr: "01", tag: "Phase 1", title: "Prozess verstehen", text: "Wir schauen auf echte Arbeitsschritte, beteiligte Personen, Daten und Engpässe." },
  { nr: "02", tag: "Phase 2", title: "Hebel auswählen", text: "Wir priorisieren nach Zeitgewinn, Machbarkeit, Risiko und Nutzen im Alltag." },
  { nr: "03", tag: "Phase 3", title: "Klein testen", text: "Ein klar begrenzter Prototyp zeigt früh, ob die Idee wirklich funktioniert." },
  { nr: "04", tag: "Phase 4", title: "Sauber integrieren", text: "Der funktionierende Ablauf wird dokumentiert und in bestehende Arbeit eingebunden." },
  { nr: "05", tag: "Phase 5", title: "Messen & verbessern", text: "Wir prüfen Qualität und Zeitgewinn und passen Regeln oder Übergaben gezielt an." },
];

const faqs = [
  { q: "Brauche ich bereits bestimmte KI-Tools?", a: "Nein. Wir beginnen bei deinem Prozess und wählen Werkzeuge erst danach. Vorhandene Systeme werden berücksichtigt, wenn sie sinnvoll eingebunden werden können." },
  { q: "Welche Prozesse eignen sich für KI-Automatisierung?", a: "Am besten eignen sich wiederkehrende, klar beschreibbare Aufgaben mit ausreichend Beispielen oder strukturiertem Wissen. Entscheidungen mit hoher Verantwortung bleiben beim Menschen und werden höchstens vorbereitet." },
  { q: "Ersetzt KI Mitarbeiter?", a: "Unser Ziel ist nicht, Menschen aus dem Prozess zu entfernen. KI soll Routine reduzieren, Informationen vorbereiten und mehr Zeit für Entscheidungen, Kunden und kreative Arbeit schaffen." },
  { q: "Wie geht ihr mit vertraulichen Daten um?", a: "Datenarten, Zugriffsrechte und eingesetzte Dienste werden vor der Umsetzung geklärt. Sensible Informationen werden nicht ungeprüft an beliebige Tools übertragen. Je nach Anforderung wählen wir einen passenden technischen und organisatorischen Rahmen." },
  { q: "Kann man mit einem kleinen Test starten?", a: "Ja — das ist sogar der bevorzugte Weg. Ein klar begrenzter Anwendungsfall macht Nutzen, Qualität und Grenzen sichtbar, bevor ein größerer Prozess verändert wird." },
  { q: "Was kostet ein KI-Prozess?", a: "Das hängt davon ab, wie viele Systeme beteiligt sind, wie sauber die Daten vorliegen und wie kritisch der Ablauf ist. Nach einer kurzen Prozessaufnahme bekommst du einen klaren Vorschlag für einen sinnvollen ersten Schritt." },
];

export default function KiAutomatisierungPage() {
  return (
    <main className="service-premium service-suite service-suite-ai">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="sheet">
        <SiteNav crumb={{ section: "Leistungen", page: "KI-Prozesse" }} />

        <header className="hero service-suite-hero">
          <PulseField label1="// MENSCH ENTSCHEIDET" label2="// KI BEREITET VOR" />
          <div className="hero-eyebrow">KI-AUTOMATISIERUNG FÜR UNTERNEHMEN</div>
          <h1>
            <span className="in"><span>Weniger Routine.</span></span>
            <span className="in"><span>Mehr Klarheit.</span></span>
            <span className="in"><span>KI mit Aufgabe.</span></span>
          </h1>
          <p className="hero-sub">
            Wir analysieren wiederkehrende Arbeit und bauen KI-Prozesse, die
            Informationen vorbereiten, Wissen nutzbar machen und deinem Team
            Zeit zurückgeben — ohne beliebigen Tool-Hype.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href={site.calendly} target="_blank" rel="noopener noreferrer">
              Prozess kostenlos besprechen <ArrowIcon />
            </a>
            <Link className="btn-text" href="#beispiele">Mögliche Anwendungen ↓</Link>
          </div>
          <div className="hero-foot">
            <span className="hf-label">Unser Prinzip:</span>
            <div className="hf-chip">Prozess vor Tool</div>
            <div className="hf-chip">Klein testen</div>
            <div className="hf-chip">Kontrolliert integrieren</div>
          </div>
        </header>
      </div>

      <div className="editorial-shell service-editorial">
        <div className="sheet">
        <section className="service-summary service-summary-premium reveal" aria-label="KI-Automatisierung auf einen Blick">
          <div><span>Geeignet für</span><strong>Wiederkehrende Wissensarbeit</strong></div>
          <div><span>Start</span><strong>Klar begrenzter Testprozess</strong></div>
          <div><span>Wichtig</span><strong>Menschliche Kontrolle</strong></div>
          <div><span>Ziel</span><strong>Messbarer Zeitgewinn</strong></div>
        </section>

        <section className="band tint-violet">
          <div className="split2 reverse">
            <div className="reveal">
              <span className="band-tag">01 — Ausgangslage</span>
              <h2 className="band-title">KI ist erst wertvoll, wenn sie <em>Arbeit verbessert</em></h2>
              <p className="lead">
                Ein weiteres Abo löst keinen schlechten Ablauf. Deshalb suchen
                wir zuerst die Stelle, an der Informationen verloren gehen,
                Arbeit doppelt entsteht oder Wissen nur in einzelnen Köpfen liegt.
              </p>
            </div>
            <div className="reveal">
              <StatusPanel head="Typische Ansatzpunkte" rows={statusRows} />
            </div>
          </div>
        </section>

        <section className="band" id="beispiele">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Mögliche Anwendungen</span>
              <h2 className="band-title">Konkrete Prozesse statt <em>allgemeiner Versprechen</em></h2>
            </div>
            <p className="band-note">
              Welche Anwendung passt, hängt von deinem Team, deinen Daten und
              den vorhandenen Systemen ab.
            </p>
          </div>
          <div className="scope-grid reveal">
            {useCases.map((item) => (
              <article className="scope-card" key={item.nr}>
                <span>{item.nr}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <PlannedMedia
            title="Ein KI-Workflow aus der Praxis"
            description="Hier kommt eine freigegebene Prozessansicht oder ein anonymisierter Bildschirm aus einem echten Projekt hin — vom Eingang bis zur menschlichen Freigabe."
            format="16:9"
          />
        </section>

        <section className="band tint">
          <div className="split2">
            <div className="reveal">
              <span className="band-tag">03 — Verantwortungsvolle Umsetzung</span>
              <h2 className="band-title">Automatisieren, ohne <em>Kontrolle abzugeben</em></h2>
              <p className="lead">
                KI darf vorbereiten, sortieren und Entwürfe erstellen. Kritische
                Entscheidungen, Freigaben und sensible Kommunikation bleiben
                dort beim Menschen, wo Verantwortung notwendig ist.
              </p>
              <ul className="lines">
                <li>Daten und Zugriffsrechte vorab klären.</li>
                <li>Ergebnisse nachvollziehbar und prüfbar halten.</li>
                <li>Klare Grenzen für den Anwendungsfall definieren.</li>
                <li>Team und bestehende Arbeitsweise mitnehmen.</li>
              </ul>
            </div>
            <div className="system-flow reveal" aria-label="Kontrollierter KI-Ablauf">
              <div><span>01</span><b>Input</b><small>Freigegebene Daten und klare Aufgabe</small></div>
              <div><span>02</span><b>KI-Vorbereitung</b><small>Struktur, Entwurf oder Vorschlag</small></div>
              <div><span>03</span><b>Prüfung</b><small>Menschliche Kontrolle und Freigabe</small></div>
              <div><span>04</span><b>Nächster Schritt</b><small>Dokumentiert und nachvollziehbar</small></div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">04 — Vorgehen</span>
              <h2 className="band-title">Vom Engpass zum <em>funktionierenden Ablauf</em></h2>
            </div>
          </div>
          <Stepper steps={steps} />
        </section>

        <section className="band">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">05 — Häufige Fragen</span>
              <h2 className="band-title">Was du vor dem Start <em>wissen solltest</em></h2>
            </div>
          </div>
          <FaqList items={faqs} />
        </section>

        </div>
      </div>

      <div className="sheet service-ending">
        <CloseCta ctaLabel="KI-Prozess kostenlos besprechen">
          Welche Routine kostet dich <em>jede Woche Zeit?</em>
        </CloseCta>

        <SiteFooter />
      </div>
    </main>
  );
}
