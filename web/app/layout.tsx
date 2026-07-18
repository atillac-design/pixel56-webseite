import type { Metadata } from "next";
import "./globals.css";
import Reveal from "@/components/Reveal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieConsent from "@/components/CookieConsent";
import { indexable } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pixel56.de"),
  // Test-/Staging-Deployment: global auf noindex, bis die Seite live geht.
  robots: indexable ? undefined : { index: false, follow: false },
  title: {
    default: "Pixel56 — Digitalagentur & Webdesign für KMUs | Bendorf bei Koblenz",
    template: "%s | Pixel56",
  },
  description:
    "Pixel56: Webdesign, SEO, Google & Meta Ads und Content-Produktion für KMUs, Handwerker & Selbstständige — in Koblenz und deutschlandweit. Kostenloses Erstgespräch buchen.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Pixel56",
    title: "Pixel56 — Digitalagentur Bendorf bei Koblenz",
    description:
      "Pixel56: Webdesign, SEO, Google & Meta Ads und Content-Produktion für KMUs, Handwerker & Selbstständige — in Koblenz und deutschlandweit. Kostenloses Erstgespräch buchen.",
    images: [{ url: "/bilder/og-pixel56.png", width: 1200, height: 630, alt: "Pixel56 — Digitale Auftritte, die wirken." }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/bilder/og-pixel56.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        {children}
        <WhatsAppFloat />
        <CookieConsent />
        <Reveal />
      </body>
    </html>
  );
}
