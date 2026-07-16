import Link from "next/link";

type Crumb = { section: string; page: string };

export default function SiteNav({ crumb }: { crumb?: Crumb }) {
  return (
    <nav className="site-nav">
      <Link className="mark" href="/">
        <span className="dot" />
        PIXEL56
      </Link>
      {crumb ? (
        <div className="crumb">
          {crumb.section} <b>/</b> <b>{crumb.page}</b>
        </div>
      ) : (
        <div className="nav-links">
          <Link href="/#leistungen">Leistungen</Link>
          <Link href="/projekte">Projekte</Link>
          <Link href="/#bewertungen">Bewertungen</Link>
        </div>
      )}
      <Link className="nav-cta" href="/#kontakt">
        Gespräch anfragen
      </Link>
    </nav>
  );
}
