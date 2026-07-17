import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

/** Gemeinsames Gerüst für Rechtsseiten mit Langtext. */
export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="sheet">
      <SiteNav crumb={{ section: "Rechtliches", page: title }} />
      <section className="band" style={{ paddingTop: 40 }}>
        <span className="band-tag">Rechtliches</span>
        <h1 className="band-title" style={{ marginBottom: 40 }}>
          {title}
        </h1>
        <div className="legal">{children}</div>
      </section>
      <SiteFooter />
    </div>
  );
}
