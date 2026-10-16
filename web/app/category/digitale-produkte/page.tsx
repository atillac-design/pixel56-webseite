import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, CloseCta, ContactStrip } from "@/components/ui";
import { ressourcen } from "@/lib/ressourcen";
import { resourcePath } from "@/lib/routes";
import seoFreebieImage from "@/public/bilder/freebie-seo-ebook-transparent.webp";
import kiFreebieImage from "@/public/bilder/freebie-ki-ebook.webp";
import tagesplanerImage from "@/public/bilder/freebie-tagesplaner.webp";

const canonical = "/category/digitale-produkte";

export const metadata: Metadata = {
  title: "Digitale Produkte: Vorlagen und Checklisten",
  description:
    "Digitale Vorlagen, Checklisten und Freebies von Pixel56 für KMU, Selbstständige und Dienstleister. Kostenlos als PDF, sofort einsetzbar.",
  alternates: { canonical },
};

const bilder: Record<string, typeof seoFreebieImage | null> = {
  "seo-checkliste": seoFreebieImage,
  "ki-agenten-checkliste": kiFreebieImage,
  tagesplaner: tagesplanerImage,
};

export default function DigitaleProduktePage() {
  return (
    <main className="service-premium page-suite products-premium">
      <div className="sheet">
        <SiteNav crumb={{ section: "Ressourcen", page: "Digitale Produkte" }} />
        <header className="service-premium-hero about-hero">
          <div className="service-premium-glow" aria-hidden="true" />
          <div className="service-premium-copy">
            <div className="premium-kicker">DIGITALE PRODUKTE · VORLAGEN &amp; CHECKLISTEN</div>
            <h1>
              <span>Vorlagen, die</span>
              <span className="service-hero-accent">Arbeit abnehmen.</span>
              <span>Sofort einsetzbar.</span>
            </h1>
            <p>
              Checklisten und Planungsvorlagen aus unserer eigenen Arbeit, für
              mehr Sichtbarkeit, Struktur und Fokus im Betriebsalltag. Kostenlos
              als PDF, ohne Vorkenntnisse nutzbar.
            </p>
            <div className="premium-actions">
              <Link className="btn-primary" href="#produkte">
                Vorlagen ansehen <ArrowIcon />
              </Link>
            </div>
            <div className="premium-proof" aria-label="Auf einen Blick">
              <span>{ressourcen.length} kostenlose PDFs</span>
              <span>Ein Produktivitäts-Set</span>
              <span>Aus der Praxis</span>
            </div>
          </div>
          <div className="web-experience-board" aria-label="Übersicht der Vorlagen">
            <div className="web-board-top">
              <span>PIXEL56 · RESSOURCEN</span>
              <i>PDF</i>
            </div>
            <div className="system-flow">
              {ressourcen.map((r, index) => (
                <Link href={resourcePath(r.slug)} key={r.slug} style={{ textDecoration: "none", color: "inherit" }}>
                  <span>{String(index + 1).padStart(2, "0")}</span><b>{r.docTitle}</b><small>{r.docPages}</small>
                </Link>
              ))}
              <Link href="/product/tagesplaner-to-do-liste-set" style={{ textDecoration: "none", color: "inherit" }}>
                <span>04</span><b>Produktivitäts-Set</b><small>Canva-Vorlagen</small>
              </Link>
            </div>
          </div>
        </header>
      </div>

      <div className="editorial-shell service-editorial">
        <div className="sheet">
      <section className="band theme-light" id="produkte" style={{ paddingTop: 72 }}>
        <div className="band-head reveal">
          <div>
            <span className="band-tag">01 — Kostenlose Vorlagen</span>
            <h2 className="band-title">
              Zum Mitnehmen, <em>ohne Haken</em>
            </h2>
          </div>
          <p className="band-note">
            Dieselben Prüfpunkte und Vorlagen, mit denen wir in Kundenprojekten
            arbeiten. Du bekommst sie per E-Mail als PDF.
          </p>
        </div>
        <div className="resource-grid reveal">
          {ressourcen.map((r) => {
            const bild = bilder[r.slug];
            return (
              <Link className="resource-card" href={resourcePath(r.slug)} key={r.slug}>
                {bild ? (
                  <div className="resource-mockup">
                    <Image src={bild} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" />
                  </div>
                ) : (
                  <div className="resource-mockup resource-mockup-placeholder" aria-hidden="true"><i /></div>
                )}
                <span>{r.docTag} · {r.docPages}</span>
                <h3>{r.docTitle}</h3>
                <p>{r.heroSub}</p>
                <em>Kostenlos herunterladen <ArrowIcon /></em>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="band theme-light" id="set">
        <div className="split2 align-top">
          <div className="reveal">
            <span className="band-tag">02 — Produktivitäts-Set</span>
            <h2 className="band-title">
              Tagesplaner und To-do-Liste <em>als Canva-Vorlagen</em>
            </h2>
            <p className="lead">
              Für alle, die den kostenlosen Tagesplaner anpassen wollen: Zwei
              editierbare Canva-Vorlagen, druckbar und digital nutzbar, im
              selben ruhigen Design.
            </p>
            <Link className="body-link" href="/product/tagesplaner-to-do-liste-set">
              Produktivitäts-Set ansehen <ArrowIcon />
            </Link>
          </div>
          <div className="mini-grid reveal">
            <div><b>Editierbar in Canva</b><small>Farben, Felder und Schrift lassen sich an deinen Betrieb anpassen.</small></div>
            <div><b>Druck und Tablet</b><small>Als PDF ausdrucken oder digital ausfüllen, beides vorbereitet.</small></div>
            <div><b>Zwei Vorlagen</b><small>Tagesplaner mit Prioritäten und Zeitblöcken plus To-do-Liste.</small></div>
            <div><b>Kostenlose Alternative</b><small>Der Tagesplaner als festes PDF bleibt kostenlos.</small></div>
          </div>
        </div>
      </section>

        </div>
      </div>

      <div className="sheet service-ending">
        <ContactStrip />
        <CloseCta>Du brauchst etwas <em>Individuelles?</em></CloseCta>
        <SiteFooter />
      </div>
    </main>
  );
}
