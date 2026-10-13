import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/ui";
import FreebieForm from "@/components/FreebieForm";
import { ressourcen, getRessource } from "@/lib/ressourcen";
import { resourcePath } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ressourcen.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const res = getRessource(slug);
  if (!res) return {};
  return {
    title: res.docTitle,
    description: res.heroSub,
    alternates: { canonical: resourcePath(res.slug) },
  };
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v9M4 7l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function RessourcePage({ params }: Props) {
  const { slug } = await params;
  const res = getRessource(slug);
  if (!res) notFound();

  return (
    <main className="service-premium service-suite page-suite resource-premium">
      <div className="sheet">
        <nav className="site-nav">
          <Link className="mark" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bilder/logo-pixel56-360.webp" alt="Pixel56" width={360} height={155} />
          </Link>
          <span className="nav-note">Kostenlose Ressource</span>
        </nav>

        <header className="hero-grab contact-premium-hero">
          <div>
            <div className="hero-eyebrow">{res.eyebrow}</div>
            <h1>
              {res.titleStart}
              <em>{res.titleEm}</em>
            </h1>
            <p className="hero-sub">{res.heroSub}</p>
            <ul className="hero-points">
              {res.heroPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="grab-card reveal in" id="download">
            {res.mockupBild ? (
              <div className="grab-mockup">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={res.mockupBild} alt={`${res.docTitle} — Vorschau`} />
              </div>
            ) : (
              <div className="doc-mock">
                <span className="doc-pages">{res.docPages}</span>
                <span className="dm-tag">{res.docTag}</span>
                <h3>{res.docTitle}</h3>
                {res.docRows.map((row) => (
                  <div className="doc-row" key={row.text}>
                    <span className="box">{row.checked ? "✓" : ""}</span>
                    {row.text}
                  </div>
                ))}
              </div>
            )}
            <FreebieForm
              quelle={res.slug}
              label={res.docTag === "Vorlage" ? "die Vorlage" : "die Checkliste"}
            />
          </div>
        </header>
      </div>

      <div className="editorial-shell service-editorial">
        <div className="sheet">
        <section className="band tint-amber">
          <div className="band-head reveal">
            <div>
              <span className="band-tag">{res.inhaltTag}</span>
              <h2 className="band-title">
                {res.inhaltTitle}
                <em>{res.inhaltTitleEm}</em>
              </h2>
            </div>
            <p className="band-note">{res.inhaltNote}</p>
          </div>
          <div className="fact-grid reveal">
            {res.teile.map((t) => (
              <div className="fact-cell" key={t.fl}>
                <span className="fl">{t.fl}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band" style={{ paddingTop: 0 }}>
          <div className="band-head reveal">
            <div>
              <span className="band-tag">02 — Häufige Fragen</span>
              <h2 className="band-title">
                Bevor du <em>lädst</em>
              </h2>
            </div>
          </div>
          <FaqList items={res.faqs} />
        </section>

        </div>
      </div>

      <div className="sheet service-ending">
        <section className="close-cta reveal">
          <div className="close-glow" />
          <h2>{res.ctaStart}<em>{res.ctaEm}</em></h2>
          <a className="btn-primary" href="#download">Kostenlos herunterladen <DownloadIcon /></a>
        </section>
        <footer className="footer-slim">
          <div>© {new Date().getFullYear()} Pixel56</div>
          <div>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
