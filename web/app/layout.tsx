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
