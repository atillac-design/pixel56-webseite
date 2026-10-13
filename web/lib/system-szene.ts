/**
 * Inhalte der interaktiven Isometrie-Szenen (components/SystemSzene.tsx).
 * Startseite: vier Bausteine rund um den Betrieb. Leistungsseite: alle acht.
 * Alle Status- und Ereignistexte sind Beispielabläufe, keine Live-Daten.
 */

export type SzeneIcon = "website" | "content" | "kampagnen" | "ki" | "betrieb" | "google" | "funnel" | "team" | "suche";

export type SzeneModul = {
  id: string;
  nr: string;
  titel: string;
  kurz: string;
  status: string;
  lead: string;
  punkte: string[];
  href: string;
  linkText: string;
  icon: SzeneIcon;
  /** Zelle im Raster (Spalte, Zeile); die Mitte ist immer der Betrieb. */
  zelle: [number, number];
};

export type SzeneEreignis = { modul: string; text: string };

export type SzeneKonfig = {
  /** "vier": 3×3-Raster mit Ecken belegt, "acht": alle Randzellen belegt. */
  layout: "vier" | "acht";
  module: SzeneModul[];
  betrieb: Omit<SzeneModul, "zelle" | "nr" | "icon">;
  /** Zusätzliche Verbindungen zwischen Bausteinen (von, nach). */
  nebenwege: [string, string][];
  ereignisse: SzeneEreignis[];
};

const betrieb: SzeneKonfig["betrieb"] = {
  id: "betrieb",
  titel: "Dein Betrieb",
  kurz: "Hier kommt alles an",
  status: "Posteingang im Griff",
  lead: "Alle Bausteine laufen auf einen Punkt zu: Anfragen, Bewerbungen und Aufträge, die bei dir ankommen, ohne dass du jedem Kanal hinterherlaufen musst.",
  punkte: ["Jede Anfrage hat einen klaren Weg", "Du siehst, was woher kommt", "Ein Ansprechpartner für das ganze System"],
  href: "/kontakt",
  linkText: "Kostenloses Erstgespräch",
};

const website: Omit<SzeneModul, "zelle"> = {
  id: "website",
  nr: "01",
  titel: "Klarer Auftritt",
  kurz: "Website & Positionierung",
  status: "online",
  lead: "Die Website ist der Ort, an dem aus Interesse eine Anfrage wird. Sie erklärt in Sekunden, was du für wen tust, und macht den nächsten Schritt leicht.",
  punkte: ["Eine Seite je Leistung, mit den Suchbegriffen deiner Kunden", "Schnell und sauber auf dem Handy", "Formular, Anruf und Terminbuchung an jeder Stelle"],
  href: "/webdesign",
  linkText: "Webdesign ansehen",
  icon: "website",
};

const content: Omit<SzeneModul, "zelle"> = {
  id: "content",
  nr: "02",
  titel: "Relevanter Content",
  kurz: "Reels, Fotos & Creatives",
  status: "nächstes Reel geplant",
  lead: "Echte Einblicke aus dem Betrieb liefern das Material für Social Media und Anzeigen. Keine Stockfotos, sondern dein Team, deine Arbeit, deine Kunden.",
  punkte: ["Reels und Fotos aus dem Alltag", "Creatives, die in Kampagnen weiterlaufen", "Fester Rhythmus statt Zufall"],
  href: "/social-media-content",
  linkText: "Social Content ansehen",
  icon: "content",
};

const kampagnen: Omit<SzeneModul, "zelle"> = {
  id: "kampagnen",
  nr: "03",
  titel: "Gezielte Reichweite",
  kurz: "Meta Ads & Google Ads",
  status: "Kampagne aktiv",
  lead: "Anzeigen bringen Menschen auf die Website, die sonst nie von dir gehört hätten. Bei Google, wenn jemand sucht. Bei Meta, bevor jemand sucht.",
  punkte: ["Zielgruppen nach Ort, Alter und Interessen", "Jede Anzeige führt auf eine passende Zielseite", "Tracking bis zur Anfrage, nicht nur bis zum Klick"],
  href: "/facebook-meta-ads",
  linkText: "Meta Ads ansehen",
  icon: "kampagnen",
};

const ki: Omit<SzeneModul, "zelle"> = {
  id: "ki",
  nr: "04",
  titel: "Smarte Abläufe",
  kurz: "KI-Prozesse & Automatisierung",
  status: "sortiert Anfragen vor",
  lead: "Wenn Anfragen kommen, muss der Rest nicht von Hand laufen. Abläufe, die sich wiederholen, übernehmen Werkzeuge, die rund um die Uhr arbeiten.",
  punkte: ["Anfragen vorsortieren und sofort beantworten", "Angebote aus Vorlagen vorbereiten", "Bewertungsbitte nach dem Auftrag, automatisch"],
  href: "/ki-automatisierung",
  linkText: "KI-Prozesse ansehen",
  icon: "ki",
};

export const startseiteSzene: SzeneKonfig = {
  layout: "vier",
  betrieb,
  module: [
    { ...website, zelle: [0, 0] },
    { ...kampagnen, zelle: [2, 0] },
    { ...content, zelle: [0, 2] },
    { ...ki, zelle: [2, 2] },
  ],
  nebenwege: [["content", "kampagnen"], ["kampagnen", "website"]],
  ereignisse: [
    { modul: "content", text: "Reel aus der Werkstatt veröffentlicht" },
    { modul: "kampagnen", text: "Anzeige geklickt, Zielseite geladen" },
    { modul: "website", text: "Formular ausgefüllt, Anfrage im Posteingang" },
    { modul: "ki", text: "Anfrage vorsortiert, Rückruf vorbereitet" },
    { modul: "betrieb", text: "Auftrag bestätigt, Bewertungsbitte folgt automatisch" },
  ],
};

export const leistungenSzene: SzeneKonfig = {
  layout: "acht",
  betrieb,
  module: [
    { ...website, titel: "Webdesign", kurz: "Websites, die Anfragen bringen", zelle: [0, 0] },
    {
      ...kampagnen,
      id: "meta-ads",
      nr: "02",
      titel: "Meta Ads",
      kurz: "Facebook & Instagram",
      status: "Kampagne aktiv",
      lead: "Facebook und Instagram erreichen Menschen in deiner Region, bevor sie suchen: für Angebote, Bekanntheit und Mitarbeitersuche.",
      punkte: ["Zielgruppen nach Ort, Alter und Interessen", "Creatives aus deinem Betrieb statt Stockmaterial", "Tracking bis zur Anfrage, nicht nur bis zum Klick"],
      zelle: [1, 0],
    },
    { ...content, nr: "03", titel: "Social Content & Reels", kurz: "Material aus dem Betrieb", zelle: [2, 0] },
    {
      id: "google-ads",
      nr: "07",
      titel: "Google Ads",
      kurz: "Sichtbar bei konkreter Suche",
      status: "Anzeige geschaltet",
      lead: "Wer bei Google sucht, hat Bedarf. Google Ads zeigen dich genau in diesem Moment, mit Suchbegriffen, die zu deinen Leistungen passen.",
      punkte: ["Suchbegriffe mit Kaufabsicht", "Unpassende Suchen ausgeschlossen", "Budget dort, wo Anfragen entstehen"],
      href: "/google-ads",
      linkText: "Google Ads ansehen",
      icon: "google",
      zelle: [0, 1],
    },
    {
      id: "seo",
      nr: "08",
      titel: "SEO-Grundlagen",
      kurz: "Gefunden werden, dauerhaft",
      status: "gefunden bei Google",
      lead: "Suchmaschinenoptimierung ist das Fundament: Technik, die Google versteht, Inhalte, die Fragen beantworten, und ein gepflegtes Unternehmensprofil.",
      punkte: ["Technisches Fundament ohne Fehler", "Inhalte mit Suchintention", "Lokale Sichtbarkeit über Profil und Bewertungen"],
      href: "/suchmaschinenoptimierung",
      linkText: "SEO ansehen",
      icon: "suche",
      zelle: [2, 1],
    },
    {
      id: "landingpages",
      nr: "05",
      titel: "Landingpages & Funnels",
      kurz: "Von der Anzeige zur Anfrage",
      status: "Zielseite live",
      lead: "Jede Anzeige braucht eine Seite, die genau das hält, was sie verspricht. Ein Angebot, ein Ziel, ein kurzer Weg zur Anfrage.",
      punkte: ["Ein Angebot, ein Ziel, ein Formular", "Passt zur Anzeige, nicht zur Startseite", "Messbar bis zur Anfrage"],
      href: "/landingpages-funnels",
      linkText: "Landingpages ansehen",
      icon: "funnel",
      zelle: [0, 2],
    },
    {
      id: "mitarbeiter",
      nr: "06",
      titel: "Mitarbeitergewinnung",
      kurz: "Bewerber erreichen, die nicht suchen",
      status: "Bewerbung eingegangen",
      lead: "Fachkräfte sehen dich im Feed, nicht auf dem Jobportal. Karriereseite und Kampagnen zeigen, wie es ist, bei dir zu arbeiten.",
      punkte: ["Karriereseite mit Bewerbung in wenigen Minuten", "Kampagnen an Menschen, die gerade nicht suchen", "Echte Einblicke statt Stellenanzeige"],
      href: "/mitarbeitergewinnung",
      linkText: "Mitarbeitergewinnung ansehen",
      icon: "team",
      zelle: [1, 2],
    },
    { ...ki, titel: "KI-Prozesse", kurz: "Abläufe, die von allein laufen", zelle: [2, 2] },
  ],
  nebenwege: [["content", "meta-ads"], ["meta-ads", "landingpages"], ["google-ads", "landingpages"], ["seo", "website"]],
  ereignisse: [
    { modul: "content", text: "Reel aus dem Betrieb veröffentlicht" },
    { modul: "meta-ads", text: "Anzeige im Feed gesehen, Zielseite geöffnet" },
    { modul: "landingpages", text: "Angebot verstanden, Formular ausgefüllt" },
    { modul: "google-ads", text: "Bei Google gesucht, Anzeige geklickt" },
    { modul: "seo", text: "Ratgeberartikel gefunden, Leistungsseite gelesen" },
    { modul: "website", text: "Anfrage über die Website eingegangen" },
    { modul: "ki", text: "Anfrage vorsortiert, Antwort vorbereitet" },
    { modul: "mitarbeiter", text: "Bewerbung über die Karriereseite eingegangen" },
    { modul: "betrieb", text: "Auftrag bestätigt, Bewertungsbitte folgt automatisch" },
  ],
};
