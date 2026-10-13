import { resourceRoutes, routes, serviceRoutes } from "@/lib/routes";

/**
 * Zentrale Inhalts-Schicht. Später wird diese Datei durch CMS-Abfragen
 * (Sanity) ersetzt — die Komponenten bleiben unverändert.
 */

export const site = {
  name: "Pixel56",
  claim: "Digitalagentur",
  address: "Hüttenstraße 100, 56170 Bendorf bei Koblenz",
  email: "info@pixel56.de",
  phone: "02622 9898654",
  phoneIntl: "+4926229898654",
  whatsapp: "https://wa.me/491785282464?text=Hallo%20Pixel56%2C%20ich%20habe%20eine%20Frage%20zu%20euren%20Leistungen.",
  calendly: "https://calendly.com/pixel56/15min",
  url: "https://www.pixel56.de",
};

/**
 * Suchmaschinen-Indexierung. Nur wenn NEXT_PUBLIC_INDEXABLE === "true"
 * (in der Netlify-Produktionsumgebung gesetzt) darf Google die Seite
 * indexieren. Die Test-/Staging-Deployments bleiben so auf "noindex",
 * damit die unfertige Seite nicht bei Google landet.
 */
export const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const clients = [
  "Stark ins Neue",
  "Sportler für Kinderherzen",
  "GM-Dachdecker",
  "Oktay Cömertler",
  "CASS Schulungen",
  "M&A Transporte",
  "Colak GmbH",
  "Van den Berg Gruppe",
  "MDU Bedachungen",
  "Lernforum Obertshausen",
  "CurlyAnn Atelier",
  "Cavar Home",
  "DiscountHaus Holding",
  "Schlüsselfertig-Immobilien",
  "DEMA Bedachungen",
  "Burgerfabrik",
];

export type Service = {
  slug: string;
  href: string;
  nr: string;
  title: string;
  short: string;
  primary?: boolean;
};

export const services: Service[] = [
  { slug: "webdesign", href: serviceRoutes.webdesign, nr: "01", title: "Webdesign", short: "Individuelle, schnelle Websites mit klarer Nutzerführung und starkem Auftritt.", primary: true },
  { slug: "meta-ads", href: serviceRoutes["meta-ads"], nr: "02", title: "Meta Ads", short: "Facebook- und Instagram-Kampagnen für Kunden- und Mitarbeitergewinnung.", primary: true },
  { slug: "content-produktion", href: serviceRoutes["content-produktion"], nr: "03", title: "Social Content & Reels", short: "Videoschnitt aus vorhandenem Material oder komplette Produktion bei dir vor Ort.", primary: true },
  { slug: "ki-automatisierung", href: serviceRoutes["ki-automatisierung"], nr: "04", title: "KI-Prozesse & Automatisierung", short: "Wiederkehrende Abläufe vereinfachen und Wissen im Unternehmen besser nutzbar machen.", primary: true },
  { slug: "landingpages-funnels", href: serviceRoutes["landingpages-funnels"], nr: "05", title: "Landingpages & Funnels", short: "Von der Anzeige bis zur Anfrage, gezielt geführt." },
  { slug: "mitarbeitergewinnung", href: serviceRoutes.mitarbeitergewinnung, nr: "06", title: "Mitarbeitergewinnung", short: "Karriereseiten und Kampagnen, die passende Bewerber erreichen." },
  { slug: "google-ads", href: serviceRoutes["google-ads"], nr: "07", title: "Google Ads", short: "Sichtbarkeit im Moment einer konkreten Suchabsicht." },
  { slug: "seo", href: serviceRoutes.seo, nr: "08", title: "SEO-Grundlagen & Sichtbarkeit", short: "Technisches Fundament und Inhalte, damit Websites verstanden und gefunden werden." },
];

export const primaryServices = services.filter((service) => service.primary);

export const footerNav = {
  leistungen: [{ label: "Alle Leistungen", href: "/dienstleistung" }, ...services.map((s) => ({ label: s.title.replace(" & Onlinepräsenz", ""), href: s.href }))],
  unternehmen: [
    { label: "Über uns", href: routes.about },
    { label: "Projekte", href: routes.projects },
    { label: "Bewertungen", href: "/#bewertungen" },
    { label: "Blog", href: routes.blog },
    { label: "Standorte", href: routes.locations },
    { label: "Karriere", href: routes.careers },
    { label: "Kontakt", href: routes.contact },
  ],
  ressourcen: [
    { label: "SEO-Checkliste", href: resourceRoutes["seo-checkliste"] },
    { label: "KI-Agenten-Checkliste", href: resourceRoutes["ki-agenten-checkliste"] },
    { label: "Tagesplaner PDF", href: resourceRoutes.tagesplaner },
  ],
};
