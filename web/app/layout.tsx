import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Reveal from "@/components/Reveal";
import Interaktiv from "@/components/Interaktiv";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import KontaktLeiste from "@/components/KontaktLeiste";
import Schnellsuche from "@/components/Schnellsuche";
import CookieConsent from "@/components/CookieConsent";
import { indexable } from "@/lib/site";

/** Figtree (Variable Font, Latin), selbst gehostet: eine Datei für Fließtext, Labels und Überschriften. */
const figtree = localFont({
  src: "../assets/fonts/figtree-latin.woff2",
  weight: "400 900",
  style: "normal",
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pixel56.de"),
  // Jede Seite bekommt automatisch eine selbstreferenzierende Canonical-URL.
  alternates: { canonical: "./" },
  // Test-/Staging-Deployment: global auf noindex, bis die Seite live geht.
  robots: indexable ? undefined : { index: false, follow: false },
  title: {
    default: "Pixel56 — Webdesign, Meta Ads, Content & KI | Koblenz",
    template: "%s | Pixel56",
  },
  description:
    "Pixel56 verbindet Webdesign, Meta Ads, Social Content, Reels und KI-Prozesse für kleine und mittelständische Unternehmen. Aus Koblenz, deutschlandweit und DACH.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Pixel56",
    title: "Pixel56 — Webdesign, Kampagnen, Content & KI",
    description:
      "Digitale Systeme für Unternehmen: hochwertige Websites, Meta Ads, Reels, Social Content und KI-gestützte Prozesse.",
    images: [{ url: "/bilder/og-pixel56-premium.png", width: 1200, height: 630, alt: "Pixel56 — Websites, Kampagnen, Content und KI als System." }],
  },
  // Kein eigenes twitter:image: X/Twitter nutzt dann das og:image der jeweiligen Seite.
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={figtree.variable}>
      <body>
        {children}
        <WhatsAppFloat />
        <KontaktLeiste />
        <Schnellsuche />
        <CookieConsent />
        <Reveal />
        <Interaktiv />
      </body>
    </html>
  );
}
