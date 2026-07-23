import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // 301-Weiterleitungen von den alten Webflow-URLs (pixel56.de) auf die
    // neue Seitenstruktur — damit bestehende Google-Rankings und Verlinkungen
    // beim Go-Live erhalten bleiben. Greifen erst, wenn die Domain auf
    // dieses Hosting zeigt; bis dahin sind sie wirkungslos.
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/uber-uns", destination: "/ueber-uns", permanent: true },
      { source: "/webdesign", destination: "/leistungen/webdesign", permanent: true },
      { source: "/suchmaschinenoptimierung", destination: "/leistungen/seo", permanent: true },
      { source: "/facebook-meta-ads", destination: "/leistungen/meta-ads", permanent: true },
      { source: "/social-media-content", destination: "/leistungen/content-produktion", permanent: true },
      { source: "/dienstleistung", destination: "/#leistungen", permanent: true },
      { source: "/kundenprojekte", destination: "/projekte", permanent: true },
      { source: "/portfolio/:slug*", destination: "/projekte", permanent: true },
      { source: "/checkliste-seo", destination: "/ressourcen/seo-checkliste", permanent: true },
      { source: "/checkliste-ki-agenten", destination: "/ressourcen/ki-agenten-checkliste", permanent: true },
      { source: "/kostenloser-tagesplaner-to-do-liste-als-pdf-vorlage", destination: "/ressourcen/tagesplaner", permanent: true },
      { source: "/dein-kostenloses-beratungsgesprach", destination: "/kontakt", permanent: true },
      { source: "/stellenangebote", destination: "/karriere", permanent: true },
      { source: "/stellenangebote/:slug*", destination: "/karriere", permanent: true },
      { source: "/blog-kategorien/:slug*", destination: "/blog", permanent: true },
      { source: "/locations", destination: "/standorte", permanent: true },
      { source: "/locations/:slug*", destination: "/standorte", permanent: true },
      { source: "/team/:slug*", destination: "/ueber-uns", permanent: true },
    ];
  },
};

export default nextConfig;
