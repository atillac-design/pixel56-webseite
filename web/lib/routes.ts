/**
 * Kanonische, öffentliche URLs der neuen Pixel56-Seite.
 *
 * Bestehende, wertvolle Webflow-Pfade bleiben bewusst die Haupt-URLs. So
 * ändert der Relaunch nur die Technik hinter der Domain, nicht unnötig die
 * bereits bekannten Adressen.
 */
export const routes = {
  home: "/",
  about: "/uber-uns",
  projects: "/kundenprojekte",
  blog: "/blog",
  careers: "/karriere",
  contact: "/kontakt",
  locations: "/standorte",
  imprint: "/impressum",
  privacy: "/datenschutz",
} as const;

export const serviceRoutes = {
  webdesign: "/webdesign",
  "ki-automatisierung": "/ki-automatisierung",
  seo: "/suchmaschinenoptimierung",
  "google-ads": "/google-ads",
  "meta-ads": "/facebook-meta-ads",
  "landingpages-funnels": "/landingpages-funnels",
  "content-produktion": "/social-media-content",
  mitarbeitergewinnung: "/mitarbeitergewinnung",
} as const;

export const resourceRoutes = {
  "seo-checkliste": "/checkliste-seo",
  "ki-agenten-checkliste": "/checkliste-ki-agenten",
  tagesplaner: "/kostenloser-tagesplaner-to-do-liste-als-pdf-vorlage",
} as const;

/** Bestehende Webflow-Slugs, zugeordnet zu den internen Fallstudien-Slugs. */
export const legacyProjectSlugs = {
  "discounthaus-holding": "branding-und-webdesign-discounthaus-holding",
  "oktay-coemertler": "branding-webseite-oktay-coemertler",
  "gm-dachdecker": "digitale-meisterleistung-fur-gm-dach-handwerk-trifft-innovation",
  "ma-transporte": "digitale-revolutionierung-fur-ma-transporte-qualitat-und-kundenorientierung-im-fokus",
  "cass-schulungen": "digitale-transformation-fur-cass-schulungen-experten-in-luftsicherheit",
  "van-den-berg": "erstklassige-facebook-werbeanzeigen-fur-ihr-geschaftswachstum",
  "colak-gmbh": "neue-webprasenz-fur-colak-gmbh-pioniere-in-trocknungstechnologien",
  "lernforum-obertshausen": "revolutionierung-des-online-auftritts-fur-lernforum-obertshausen",
  "sportler-fuer-kinderherzen": "sportler-fur-kinderherzen---erfolgreiches-eventmarketing-fur-eine-spendengala",
  "stark-ins-neue": "stark-ins-neue--webdesign-seo-fur-eine-gemeinnutzige-bildungsinitiative",
} as const;

export type ServiceSlug = keyof typeof serviceRoutes;
export type ResourceSlug = keyof typeof resourceRoutes;

export function servicePath(slug: string): string {
  return serviceRoutes[slug as ServiceSlug] ?? `/leistungen/${slug}`;
}

export function resourcePath(slug: string): string {
  return resourceRoutes[slug as ResourceSlug] ?? `/ressourcen/${slug}`;
}

export function locationPath(slug: string): string {
  return `/locations/${slug}`;
}

export function projectPath(slug: string): string {
  const legacySlug = legacyProjectSlugs[slug as keyof typeof legacyProjectSlugs] ?? slug;
  return `/portfolio/${legacySlug}`;
}
