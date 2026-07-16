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
  whatsapp: "https://wa.me/491785282464",
  url: "https://www.pixel56.de",
};

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
  nr: string;
  title: string;
  short: string;
};

export const services: Service[] = [
  { slug: "webdesign", nr: "01", title: "Webdesign & Onlinepräsenz", short: "Individuell gebaute Websites statt Baukasten." },
  { slug: "seo", nr: "02", title: "Suchmaschinenoptimierung", short: "Gefunden werden, wenn konkret gesucht wird." },
  { slug: "google-ads", nr: "03", title: "Google Ads", short: "Sichtbarkeit im Moment der Suchabsicht." },
  { slug: "meta-ads", nr: "04", title: "Meta Ads", short: "Reichweite, bevor der Bedarf entsteht." },
  { slug: "landingpages-funnels", nr: "05", title: "Landingpages & Funnels", short: "Von der Anzeige bis zur Anfrage, gezielt geführt." },
  { slug: "content-produktion", nr: "06", title: "Content-Produktion", short: "Reels, Fotos, Social-Content — echt statt gestellt." },
  { slug: "mitarbeitergewinnung", nr: "07", title: "Mitarbeitergewinnung", short: "Karriereseiten und Kampagnen, die Stellen füllen." },
];

export const footerNav = {
  leistungen: services.map((s) => ({ label: s.title.replace(" & Onlinepräsenz", ""), href: `/leistungen/${s.slug}` })),
  unternehmen: [
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Projekte", href: "/projekte" },
    { label: "Bewertungen", href: "/#bewertungen" },
    { label: "Blog", href: "/blog" },
    { label: "Karriere", href: "/karriere" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  ressourcen: [
    { label: "SEO-Checkliste", href: "/ressourcen/seo-checkliste" },
    { label: "KI-Agenten-Checkliste", href: "/ressourcen/ki-agenten-checkliste" },
    { label: "Tagesplaner PDF", href: "/ressourcen/tagesplaner" },
  ],
};
