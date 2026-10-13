/**
 * Branchen-Leitfaden für Meta Ads: worauf es je Branche ankommt, was unbedingt
 * nötig ist, und veröffentlichte Richtwerte für die Kosten je Anfrage bzw.
 * Bewerbung. Die Richtwerte stammen aus fremden Veröffentlichungen (Agentur-
 * und Tool-Blogs, überwiegend ohne offengelegte Methodik, teils USA). Pixel56
 * behauptet hier keine eigenen Ergebnisse; die Spannen dienen nur dem
 * Vergleich mit dem Rahmen aus dem Budget-Planer.
 */

export type Quelle = { name: string; url: string; jahr: string; region: string };

export type MetaBranche = {
  id: string;
  name: string;
  /** Wofür Anzeigen in dieser Branche meist laufen. */
  zielTyp: "Anfrage" | "Bewerbung";
  /** Veröffentlichte Spanne in Euro je Anfrage/Bewerbung, gerundet. */
  spanneVon: number;
  spanneBis: number;
  quellen: Quelle[];
  /** Einordnung der Quellenlage in einem Satz. */
  einordnung: string;
  darauf: string[];
  noetig: string[];
};

const wordstream2025: Quelle = { name: "WordStream, Facebook Ads Benchmarks 2025", url: "https://www.wordstream.com/blog/facebook-ads-benchmarks-2025", jahr: "2025", region: "USA" };
const artico2026: Quelle = { name: "artico.agency, Was kostet ein Lead 2026", url: "https://www.artico.agency/blog-beitrag/was-kostet-ein-lead-2026", jahr: "2026", region: "Deutschland" };
const ostend2026: Quelle = { name: "Ostend Digital, Facebook Ads Kosten 2026", url: "https://ostend.digital/facebook-ads-kosten/", jahr: "2026", region: "Deutschland" };
const skillsprinters: Quelle = { name: "Skill Sprinters, Google Ads vs. Meta Ads B2B", url: "https://skill-sprinters.de/blog/social-media/google-ads-vs-meta-ads-b2b-vergleich/", jahr: "2026", region: "Deutschland" };
const talentbait: Quelle = { name: "Talentbait, Social Recruiting Kosten 2026", url: "https://www.talentbait.de/social-recruiting-kosten", jahr: "2026", region: "Deutschland" };
const fachkraftJetzt: Quelle = { name: "Fachkraft jetzt, Recruiting-Kosten 2026", url: "https://fachkraft-jetzt.de/magazin/recruiting-kosten-2026/", jahr: "2026", region: "Deutschland" };
const myonlineconcept: Quelle = { name: "myonlineconcept, Meta-Ads-Budget für KMU", url: "https://www.myonlineconcept.com/ratgeber/was-kostet-meta-ads-kmu/", jahr: "2026", region: "Deutschland" };

export const metaBranchen: MetaBranche[] = [
  {
    id: "handwerk",
    name: "Handwerk & Bau",
    zielTyp: "Anfrage",
    spanneVon: 20,
    spanneBis: 85,
    quellen: [wordstream2025, artico2026, ostend2026],
    einordnung: "US-Daten nennen für „Home & home improvement“ rund 41 $ je Anfrage; deutsche Agenturangaben reichen von unter 20 € bis rund 84 € für „Handwerk & Haus“.",
    darauf: ["Vorher-nachher aus echten Baustellen schlägt jedes Stockfoto", "Einzugsgebiet eng ziehen, sonst zahlst du für Anfragen außerhalb deiner Fahrzeit", "Rückruf innerhalb des Tages, sonst ist der Auftrag beim Mitbewerber"],
    noetig: ["Eine Leistung je Kampagne, etwa Dachsanierung statt „alles rund ums Haus“", "Formular mit zwei bis drei Feldern und Telefonnummer als Pflichtfeld", "Jemand, der werktags Anfragen beantwortet, auch während der Baustelle"],
  },
  {
    id: "transport",
    name: "Transport & Logistik",
    zielTyp: "Anfrage",
    spanneVon: 25,
    spanneBis: 80,
    quellen: [wordstream2025, artico2026],
    einordnung: "Keine eigene Branchenauswertung gefunden; Orientierung am Schnitt über alle Branchen (USA rund 28 $, deutscher Median laut Agenturangabe deutlich höher).",
    darauf: ["Geschäftskunden suchen Zuverlässigkeit: Flotte, Genehmigungen und Ansprechpartner sichtbar machen", "Spezialleistungen wie Gefahrgut oder Schwertransport einzeln bewerben", "Wochentags und tagsüber ausspielen, wenn Disponenten entscheiden"],
    noetig: ["Eine Leistungsseite je Spezialtransport mit Einzugsgebiet", "Kontakt per Telefon und E-Mail, kein Formular mit zehn Pflichtfeldern", "Referenzen, die man nennen darf, mit Branche und Auftrag"],
  },
  {
    id: "bildung",
    name: "Bildung & Soziales",
    zielTyp: "Anfrage",
    spanneVon: 25,
    spanneBis: 30,
    quellen: [wordstream2025],
    einordnung: "US-Daten nennen für „Education & instruction“ rund 28 $ je Anfrage; für Deutschland liegen keine getrennten Zahlen vor.",
    darauf: ["Vertrauen vor Anmeldung: Dozenten, Räume und Ablauf zeigen", "Termine und Fristen in die Anzeige, das erzeugt den Grund, jetzt zu handeln", "Eltern und Teilnehmer sind verschiedene Zielgruppen, getrennt ansprechen"],
    noetig: ["Eine Anmeldestrecke, die in wenigen Minuten erledigt ist", "Klare Angaben zu Kosten, Dauer und Förderung auf der Zielseite", "Antwort auf Rückfragen innerhalb eines Werktags"],
  },
  {
    id: "immobilien",
    name: "Immobilien & Modulbau",
    zielTyp: "Anfrage",
    spanneVon: 15,
    spanneBis: 60,
    quellen: [wordstream2025, artico2026],
    einordnung: "US-Daten nennen für „Real estate“ rund 17 $ je Anfrage, eine der günstigsten Kategorien; in Deutschland sind Anfragen laut Agenturangaben meist teurer.",
    darauf: ["Große Entscheidungen brauchen Beweise: Grundrisse, Bauzeit, Referenzobjekte", "Viele Anfragen, wenig Ernsthaftigkeit: Vorqualifizierung über Fragen im Formular", "Retargeting lohnt sich, weil die Entscheidung Wochen dauert"],
    noetig: ["Zielseite je Objektart oder Region", "Formular mit Budgetrahmen oder Zeitpunkt als Frage", "Nachfassprozess über mehrere Wochen, nicht nur ein Anruf"],
  },
  {
    id: "dienstleistung",
    name: "Dienstleistung & Technik",
    zielTyp: "Anfrage",
    spanneVon: 25,
    spanneBis: 80,
    quellen: [skillsprinters, artico2026],
    einordnung: "Für Geschäftskunden nennt eine deutsche Agentur einen Median von rund 26 € je Meta-Anfrage; der deutsche Gesamtmedian liegt laut einer anderen Angabe bei rund 76 €.",
    darauf: ["Erklärungsbedürftige Leistungen brauchen ein Erklärvideo oder einen Leitfaden als Einstieg", "Entscheider erreicht man über Interessen und Positionen, nicht über Hobbys", "Ein Erstgespräch als Angebot funktioniert besser als „Jetzt kaufen“"],
    noetig: ["Ein konkretes Einstiegsangebot: Check, Beratung, Leitfaden", "Zielseite, die das Problem des Kunden benennt, nicht nur die Leistung", "CRM oder saubere Liste, damit kein Kontakt verloren geht"],
  },
  {
    id: "gastro",
    name: "Gastronomie, Handel & Kreativ",
    zielTyp: "Anfrage",
    spanneVon: 3,
    spanneBis: 30,
    quellen: [wordstream2025, ostend2026],
    einordnung: "US-Daten nennen für Restaurants rund 3 $ je Anfrage, die günstigste Kategorie; Shops und Ateliers messen meist Käufe oder Buchungen statt Anfragen.",
    darauf: ["Bilder und kurze Videos tragen alles: Speisen, Produkte, Werkstatt", "Lokale Reichweite im kleinen Radius, nicht die ganze Region", "Aktionen mit Datum schlagen Dauerwerbung"],
    noetig: ["Reservierung, Shop oder Buchung direkt verlinkt, ohne Umweg über die Startseite", "Aktuelle Öffnungszeiten und Google-Profil, weil viele dort weitersuchen", "Regelmäßig neues Material, sonst nutzt sich die Anzeige ab"],
  },
  {
    id: "recruiting",
    name: "Mitarbeitergewinnung",
    zielTyp: "Bewerbung",
    spanneVon: 20,
    spanneBis: 80,
    quellen: [talentbait, fachkraftJetzt, myonlineconcept],
    einordnung: "Deutsche Anbieter nennen 10 bis 120 € je Bewerbung, die meisten liegen zwischen 20 und 80 €; Handwerk eher im oberen Bereich.",
    darauf: ["Fachkräfte suchen nicht aktiv: Anzeigen müssen im Feed überzeugen, nicht auf dem Jobportal", "Echte Kollegen, echte Baustelle, echte Vorteile statt „junges dynamisches Team“", "Bewerbung in zwei Minuten vom Handy, ohne Anschreiben und Lebenslauf-Upload"],
    noetig: ["Karriereseite mit Kurzbewerbung per Formular oder WhatsApp", "Jemand, der Bewerber innerhalb von 24 Stunden anruft", "Gehalt oder Rahmen in der Anzeige, sonst bewerben sich die Falschen"],
  },
];

export function getMetaBranche(id: string): MetaBranche | undefined {
  return metaBranchen.find((b) => b.id === id);
}

/** Alle Quellen ohne Dubletten, für die Quellenangabe unter dem Abschnitt. */
export const metaQuellen: Quelle[] = metaBranchen
  .flatMap((b) => b.quellen)
  .filter((q, i, arr) => arr.findIndex((x) => x.url === q.url) === i);
