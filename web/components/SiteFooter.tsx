import Link from "next/link";
import { site, footerNav } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="mark" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bilder/logo-pixel56.webp" alt="Pixel56" />
          </Link>
          <p>
            {site.address}. Digitale Auftritte für KMUs, Coaches, Shops und
            lokale Betriebe.
          </p>
        </div>
        <div className="footer-col">
          <h5>Leistungen</h5>
          <ul>
            {footerNav.leistungen.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Unternehmen</h5>
          <ul>
            {footerNav.unternehmen.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Kostenlose Ressourcen</h5>
          <ul>
            {footerNav.ressourcen.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h5>Kontakt</h5>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phoneIntl}`}>{site.phone}</a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Pixel56</div>
        <div>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/agb">AGB</Link>
        </div>
      </div>
    </footer>
  );
}
