import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import KontaktForm from "@/components/KontaktForm";
import { WaMock, FaqList } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt — Kostenloses Erstgespräch",
  description:
    "Erreich uns direkt per WhatsApp, Telefon oder E-Mail — oder frag in 30 Sekunden dein kostenloses Erstgespräch an. Pixel56, Bendorf bei Koblenz.",
};

const faqs = [
  { q: "Was passiert nach meiner Anfrage?", a: "Wir melden uns innerhalb eines Werktags — meist deutlich schneller. Im Erstgespräch schauen wir uns deine Situation an und geben eine ehrliche Einschätzung." },
  { q: "Was kostet das Erstgespräch?", a: "Nichts. Es ist unverbindlich und ergebnisoffen — erst danach gibt es ein konkretes, auf dich zugeschnittenes Angebot." },
  { q: "Muss ich mich vorbereiten?", a: "Nein. Es hilft, wenn du dein Ziel grob benennen kannst (mehr Anfragen, neue Website, Mitarbeiter finden) — den Rest sortieren wir gemeinsam." },
];

export default function KontaktPage() {
  return (
    <div className="sheet">
      <SiteNav crumb={{ section: "Kontakt", page: "Erstgespräch" }} />

      <header className="hero-grab">
        <div>
          <div className="hero-eyebrow">KONTAKT · KOSTENLOSES ERSTGESPRÄCH</div>
          <h1>
            Lass uns <em>reden.</em>
          </h1>
          <p className="hero-sub">
            Kein Callcenter, kein Ticket-System — du erreichst direkt den
            Menschen, der dein Projekt umsetzt. Such dir den Weg aus, der dir
            am liebsten ist.
          </p>
          <ul className="hero-points">
            <li>Antwort innerhalb eines Werktags, meist schneller</li>
            <li>Ehrliche Einschätzung statt Verkaufsgespräch</li>
            <li>Unverbindlich & kostenlos</li>
          </ul>
        </div>
        <div className="reveal in">
          <KontaktForm />
        </div>
      </header>

      <section className="band tint-amber" style={{ paddingTop: 70 }}>
        <div className="band-head reveal">
          <div>
            <span className="band-tag">Direkte Wege</span>
            <h2 className="band-title">
              Oder erreich uns <em>sofort</em>
            </h2>
          </div>
        </div>
        <div className="kontakt-kanaele reveal">
          <a className="kanal" href={site.whatsapp} target="_blank" rel="noopener">
            <span className="kl">Am schnellsten</span>
            <b>WhatsApp</b>
            <span>Schreib uns direkt — Antwortzeit meist unter 1 Stunde.</span>
          </a>
          <a className="kanal" href={`tel:${site.phoneIntl}`}>
            <span className="kl">Persönlich</span>
            <b>{site.phone}</b>
            <span>Ruf einfach durch — du sprichst direkt mit dem Umsetzer.</span>
          </a>
          <a className="kanal" href={`mailto:${site.email}`}>
            <span className="kl">Klassisch</span>
            <b>{site.email}</b>
            <span>Für alles, was Anhänge braucht oder warten kann.</span>
          </a>
        </div>
      </section>

      <section className="band tint-violet">
        <div className="split2">
          <div className="reveal">
            <span className="band-tag">So läuft die Zusammenarbeit</span>
            <h2 className="band-title">
              Ein Ansprechpartner. <em>Ein Kanal.</em>
            </h2>
            <p className="lead">
              Während des Projekts erreichst du deinen festen Ansprechpartner
              direkt per WhatsApp — für schnelle Fragen genauso wie für große
              Entscheidungen. {site.address}, Besuche gern nach Absprache.
            </p>
          </div>
          <div className="reveal">
            <WaMock
              name="Pixel56 — Atilla"
              messages={[
                { from: "in", text: "Hi! Ich hätte Interesse an einem Erstgespräch." },
                { from: "out", text: "Gerne! Passt dir morgen 14 Uhr — Telefon oder Video-Call?" },
                { from: "in", text: "Telefon passt super 👍" },
              ]}
              footer="So unkompliziert kann der Anfang sein"
            />
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-head reveal">
          <div>
            <span className="band-tag">Häufige Fragen</span>
            <h2 className="band-title">
              Bevor du <em>anfragst</em>
            </h2>
          </div>
        </div>
        <FaqList items={faqs} />
      </section>

      <SiteFooter />
    </div>
  );
}
