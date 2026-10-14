/**
 * Google-Bewertungen für Pixel56, wörtlich aus dem Google-Unternehmensprofil
 * übernommen (Stand Oktober 2026). Gekürzte Einträge enden dort, wo Google
 * den Text in der Übersicht abschneidet; sie sind mit `gekuerzt` markiert und
 * verlinken zum Weiterlesen auf Google. Nichts hier ist erfunden oder umformuliert.
 */

export type GoogleBewertung = {
  name: string;
  sterne: 1 | 2 | 3 | 4 | 5;
  /** Zeitpunkt, wie Google ihn relativ anzeigt, zusätzlich als Jahr für die Seite. */
  jahr: string;
  text: string;
  gekuerzt?: boolean;
  /** Quelle, falls nicht Google selbst (Google zeigt auch Rezensionen anderer Plattformen). */
  quelle?: string;
  /** Personenbild aus dem Repo, sonst Initialen. */
  bild?: string;
  /** Slug der zugehörigen Fallstudie, nur wenn eindeutig. */
  projekt?: string;
};

export const googleProfilUrl = "https://www.google.com/maps/search/?api=1&query=pixel56%20Bendorf";

export const googleBewertungen: GoogleBewertung[] = [
  { name: "Anna Milossi", sterne: 5, jahr: "2026", text: "Absolute Empfehlung für kreative Webprojekte!", gekuerzt: true, projekt: "curlyann" },
  { name: "Jasmin Schmolke", sterne: 5, jahr: "2026", text: "Ich habe mit Pixel56 im Bereich Marketing-Beratung und Meta-Ads für meine Immobilien-Webseite/ mein Coaching zusammengearbeitet und bin wirklich sehr zufrieden.", gekuerzt: true },
  { name: "Bülent Kaya", sterne: 5, jahr: "2026", text: "Wir haben unsere Offline-Workshop-Seite von Pixel56 umsetzen lassen und sind wirklich froh über diese Entscheidung. Das Team hat verstanden, worauf es uns", gekuerzt: true },
  { name: "Valentin V", sterne: 5, jahr: "2025", text: "Ich kann Pixel56 echt nur empfehlen! Die Zusammenarbeit war super – professionell, aber gleichzeitig auch total entspannt und freundlich. Das Team hat meine", gekuerzt: true },
  { name: "Margarete Wolf", sterne: 5, jahr: "2025", text: "Atilla unterstützt uns bei einem klaren, zielgruppenspezifischen Onlineauftritt mit Funnel. Er ist dabei ein sympathischer, verlässlicher und kompetenter", gekuerzt: true, bild: "/bilder/person-margarita-wolf.webp", projekt: "stark-ins-neue" },
  { name: "Selcuk Yöndemli", sterne: 5, jahr: "2025", text: "Die Werbekampagnen für unsere Mitarbeitersuche haben super funktioniert! Bin sehr zufrieden mit der Zusammenarbeit. LG" },
  { name: "Binjam Negash", sterne: 5, jahr: "2025", text: "Great job!" },
  { name: "36", sterne: 5, jahr: "2024", text: "Top-Service! Atilla und sein Team haben eine großartige Website für mein Unternehmen entwickelt. Empfehle sie gerne weiter!" },
  { name: "G m", sterne: 5, jahr: "2023", text: "Pixel56 hat meine Erwartungen in jeder Hinsicht übertroffen! Das Team war immer freundlich und professionell und hat mir schnell und zuverlässi", gekuerzt: true },
  { name: "Van Den Berg Gruppe", sterne: 5, jahr: "2021", text: "Sehr Professionell und familiär! Es wird sehr viel Wert auf die Wünsche des Kunden gelegt - Das Ziel war es immer uns zufrieden zu stellen und das seit 4 Jahren!", gekuerzt: true, bild: "/bilder/kunde-vandenberg.png", projekt: "van-den-berg" },
  { name: "Angela Wurzel", sterne: 5, jahr: "2021", text: "Ich kann pixel56 sehr empfehlen. Das Team ist kreativ und kompetent, sehr hilfreich und super freundlich und schnell. Preis-Leistungsverhältnis ist top.", gekuerzt: true, bild: "/bilder/person-angela-wurzel.webp", projekt: "lernforum-obertshausen" },
  { name: "Maria El-Eter", sterne: 5, jahr: "2021", text: "Durch eine Empfehlung kam ich auf pixel56 und ich bin super zufrieden mit der Beratung bis hinzu meiner neuen Webseite!", gekuerzt: true },
  { name: "Deniz Uslu", sterne: 5, jahr: "2021", text: "Preis-Leistung TOP! Sehr zufrieden mit der Webseite!", gekuerzt: true },
  { name: "W. Thelen", sterne: 5, jahr: "2021", text: "Alle Marketing Ziele erreicht - super!", gekuerzt: true },
  { name: "Leon Müller", sterne: 5, jahr: "2020", text: "Website incl.CI Richtlinien beauftragt. Dabei sollten auch Seo Themen bearbeitet und eingeführt werden. Alles zufriedenstellend erfüllt. Des Weiteren auch eine", gekuerzt: true },
  { name: "Can Diego", sterne: 5, jahr: "2020", text: "Wurde von einem Kollegen weiterempfohlen. Schneller Kontakt, gutes Feedback, originelle Lösungen, sehr kompetent, gerne wieder" },
  { name: "Th Sch", sterne: 5, jahr: "2020", text: "Immer wieder gern alles was besprochen wurde hat man umgesetzt 👌 Immer wieder gern" },
  { name: "Nalan Colak", sterne: 5, jahr: "2019", text: "Wir haben tolle Erfahrung mit pixel56 gemacht. Wir waren auf der Suche nach einem langfristigen Partner, um unsere Social Media Dienste und den Relaunch der", gekuerzt: true, bild: "/bilder/person-nalan-colak.webp", projekt: "colak-gmbh" },
  { name: "Yasar Yüksel", sterne: 5, jahr: "2019", text: "Sehr kompetentes, modernes und dynamisches Unternehmen. War beziehungsweise bin mit der Zusam", gekuerzt: true },
  { name: "Dennis Peters", sterne: 5, jahr: "2019", text: "Bin durch eine Empfehlung auf pixel56 gestoßen. Ich bin super zufireden mit meiner Webseite und deren Social Media Arbeit. Kann ich nur jeden empfehlen✌️" },
  { name: "Gizem Cömertler", sterne: 5, jahr: "2019", text: "Bin sehr zufrieden mit der Website, vor allem mit den Designs. Sehr Empfehlenswert. Weiter so." },
  { name: "E Akgn", sterne: 5, jahr: "2019", text: "Ist nur weiterzuempfehlen ! Top Arbeit 👍" },
  { name: "Rezensent von ÖffnungszeitenBuch", sterne: 5, jahr: "2019", text: "Super Beratung und Umsetzung unserer Webseite.Wir sind sehr zufrieden mit dem Service und Preis-Leistungsverhältnis", quelle: "ÖffnungszeitenBuch" },
];

export type GoogleStand = {
  bewertung: number;
  anzahl: number;
  /** "live" aus der Places API, sonst aus der hier gepflegten Liste. */
  quelle: "live" | "liste";
  profilUrl: string;
};

/**
 * Holt Durchschnitt und Anzahl live aus der Google Places API (New), wenn
 * GOOGLE_PLACES_API_KEY und GOOGLE_PLACE_ID gesetzt sind. Läuft beim Build;
 * ohne Schlüssel oder bei Fehlern zählt die gepflegte Liste. Der Gast wartet nie auf Google.
 */
export async function holeGoogleStand(): Promise<GoogleStand> {
  const ausListe: GoogleStand = {
    bewertung: Math.round((googleBewertungen.reduce((s, b) => s + b.sterne, 0) / googleBewertungen.length) * 10) / 10,
    anzahl: googleBewertungen.length,
    quelle: "liste",
    profilUrl: googleProfilUrl,
  };
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const id = process.env.GOOGLE_PLACE_ID;
  if (!key || !id) return ausListe;
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(id)}?languageCode=de`, {
      headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri" },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return ausListe;
    const d = (await res.json()) as { rating?: number; userRatingCount?: number; googleMapsUri?: string };
    if (typeof d.rating !== "number" || typeof d.userRatingCount !== "number") return ausListe;
    return { bewertung: Math.round(d.rating * 10) / 10, anzahl: d.userRatingCount, quelle: "live", profilUrl: d.googleMapsUri || googleProfilUrl };
  } catch {
    return ausListe;
  }
}
