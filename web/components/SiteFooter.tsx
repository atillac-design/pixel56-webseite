import Link from "next/link";
import { site, footerNav } from "@/lib/site";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="mark" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bilder/logo-pixel56-180.webp" alt="Pixel56" width={180} height={77} loading="lazy" decoding="async" />
          </Link>
          <p>
            Pixel56 aus Koblenz. Websites, Meta Ads, Reels und KI-Prozesse
            für Handwerk, Bau und Dienstleister. Deutschlandweit.
          </p>
        </div>
        <div className="footer-col">
          <p className="fc-title">Leistungen</p>
          <ul>
            {footerNav.leistungen.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <p className="fc-title">Unternehmen</p>
          <ul>
            {footerNav.unternehmen.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <p className="fc-title">Kostenlose Ressourcen</p>
          <ul>
            {footerNav.ressourcen.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <p className="fc-title">Kontakt</p>
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
          <CookieSettingsButton />
          <Link href="/agb">AGB</Link>
        </div>
      </div>
    </footer>
  );
}
