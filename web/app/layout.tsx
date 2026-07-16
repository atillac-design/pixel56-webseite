import type { Metadata } from "next";
import "./globals.css";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pixel56.de"),
  title: {
    default: "Pixel56 — Digitalagentur Bendorf bei Koblenz",
    template: "%s | Pixel56",
  },
  description:
    "Digitalagentur für Webdesign, SEO, Google & Meta Ads, Landingpages und Content-Produktion für KMUs, Coaches, Shops und lokale Betriebe.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Pixel56",
    title: "Pixel56 — Digitalagentur Bendorf bei Koblenz",
    description:
      "Digitalagentur für Webdesign, SEO, Google & Meta Ads, Landingpages und Content-Produktion für KMUs, Coaches, Shops und lokale Betriebe.",
  },
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
    <html lang="de">
      <body>
        {children}
        <Reveal />
      </body>
    </html>
  );
}
