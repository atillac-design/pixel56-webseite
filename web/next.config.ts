import type { NextConfig } from "next";
import { legacyProjectSlugs } from "./lib/routes";

const projectRedirects = Object.entries(legacyProjectSlugs).map(([internalSlug, legacySlug]) => ({
  source: `/projekte/${internalSlug}`,
  destination: `/portfolio/${legacySlug}`,
  permanent: true,
}));

const projectRewrites = Object.entries(legacyProjectSlugs).map(([internalSlug, legacySlug]) => ({
  source: `/portfolio/${legacySlug}`,
  destination: `/projekte/${internalSlug}`,
}));

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // Die bestehenden Webflow-URLs bleiben die kanonischen Zielpfade. Nur die
    // während der Entwicklung angelegte Next.js-Struktur wird dorthin
    // weitergeleitet. So entstehen weder Redirect-Ketten noch pauschale
    // Weiterleitungen wertvoller Detailseiten auf Übersichtsseiten.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "pixel56.de" }],
        destination: "https://www.pixel56.de/:path*",
        permanent: true,
      },
      { source: "/home", destination: "/", permanent: true },
      // Projekt auf Wunsch des Kunden anonymisiert (23.10.2026).
      { source: "/portfolio/mdu-bedachungen", destination: "/portfolio/dachdecker-region-koblenz", permanent: true },
      { source: "/ueber-uns", destination: "/uber-uns", permanent: true },
      { source: "/leistungen/webdesign", destination: "/webdesign", permanent: true },
      { source: "/leistungen/ki-automatisierung", destination: "/ki-automatisierung", permanent: true },
      { source: "/leistungen/seo", destination: "/suchmaschinenoptimierung", permanent: true },
      { source: "/leistungen/meta-ads", destination: "/facebook-meta-ads", permanent: true },
      { source: "/leistungen/content-produktion", destination: "/social-media-content", permanent: true },
      { source: "/leistungen/google-ads", destination: "/google-ads", permanent: true },
      { source: "/leistungen/landingpages-funnels", destination: "/landingpages-funnels", permanent: true },
      { source: "/leistungen/mitarbeitergewinnung", destination: "/mitarbeitergewinnung", permanent: true },
      { source: "/projekte", destination: "/kundenprojekte", permanent: true },
      ...projectRedirects,
      { source: "/projekte/:slug", destination: "/portfolio/:slug", permanent: true },
      { source: "/ressourcen/seo-checkliste", destination: "/checkliste-seo", permanent: true },
      { source: "/ressourcen/ki-agenten-checkliste", destination: "/checkliste-ki-agenten", permanent: true },
      { source: "/ressourcen/tagesplaner", destination: "/kostenloser-tagesplaner-to-do-liste-als-pdf-vorlage", permanent: true },
      { source: "/dein-kostenloses-beratungsgesprach", destination: "/kontakt", permanent: true },
      { source: "/stellenangebote", destination: "/karriere", permanent: true },
      { source: "/vertriebspartner", destination: "/partner", permanent: true },
      {
        source: "/stellenangebote/remote-freelancer-videograph-reels-experte-fur-pixel56",
        destination: "/karriere",
        permanent: true,
      },
      {
        source: "/stellenangebote/ixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in",
        destination: "/stellenangebote/pixel56-marketing-agentur-in-koblenz-sucht-vertriebsprofi-in",
        permanent: true,
      },
      { source: "/locations", destination: "/standorte", permanent: true },
      { source: "/standorte/:slug", destination: "/locations/:slug", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/uber-uns", destination: "/ueber-uns" },
      { source: "/webdesign", destination: "/leistungen/webdesign" },
      { source: "/ki-automatisierung", destination: "/leistungen/ki-automatisierung" },
      { source: "/suchmaschinenoptimierung", destination: "/leistungen/seo" },
      { source: "/facebook-meta-ads", destination: "/leistungen/meta-ads" },
      { source: "/social-media-content", destination: "/leistungen/content-produktion" },
      { source: "/google-ads", destination: "/leistungen/google-ads" },
      { source: "/landingpages-funnels", destination: "/leistungen/landingpages-funnels" },
      { source: "/mitarbeitergewinnung", destination: "/leistungen/mitarbeitergewinnung" },
      { source: "/kundenprojekte", destination: "/projekte" },
      ...projectRewrites,
      { source: "/portfolio/:slug", destination: "/projekte/:slug" },
      { source: "/checkliste-seo", destination: "/ressourcen/seo-checkliste" },
      { source: "/checkliste-ki-agenten", destination: "/ressourcen/ki-agenten-checkliste" },
      { source: "/kostenloser-tagesplaner-to-do-liste-als-pdf-vorlage", destination: "/ressourcen/tagesplaner" },
      { source: "/locations/:slug", destination: "/standorte/:slug" },
    ];
  },
};

export default nextConfig;
