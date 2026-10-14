/**
 * Kurze Originalauszüge aus Kundenstimmen: Google-Rezensionen (wörtlich, Stand Oktober 2026)
 * und Aussagen von der bisherigen pixel56.de. Nichts hier ist erfunden oder umformuliert.
 */
export type VerifiedReview = { text: string; who: string; img?: string };

export const verifiedReviews: VerifiedReview[] = [
  { text: "Atilla unterstützt uns bei einem klaren, zielgruppenspezifischen Onlineauftritt mit Funnel.", who: "Margarete Wolf · Stark ins Neue", img: "/bilder/person-margarita-wolf.webp" },
  { text: "Wir haben tolle Erfahrung mit pixel56 gemacht.", who: "Nalan Colak · Colak GmbH", img: "/bilder/person-nalan-colak.webp" },
  { text: "Wir freuen uns auf die weitere Zusammenarbeit", who: "Oktay Cömertler · Van den Berg Gruppe", img: "/bilder/person-oktay-coemertler.webp" },
];

export const verifiedProjectVoices: Record<string, VerifiedReview> = {
  "stark-ins-neue": verifiedReviews[0],
  "colak-gmbh": verifiedReviews[1],
  "discounthaus-holding": { text: "Bin sehr zufrieden mit der Umsetzung.", who: "Ulf Loch · Discounthaus" },
  "van-den-berg": verifiedReviews[2],
  "gm-dachdecker": { text: "Top Leistung!!", who: "Granit Osmani · GM-Dachdecker" },
  "cass-schulungen": { text: "Top Unterstützung im Web und Social Media!", who: "Mithat Akgün · CASS Schulungen", img: "/bilder/person-mithat-akguen.webp" },
  curlyann: { text: "Wer eine professionelle, automatisierte und rechtssichere Website sucht, ist hier genau richtig.", who: "Anna Milossi · CurlyAnn Soulcare & Art", img: "/bilder/person-anna-milossi.webp" },
  "lernforum-obertshausen": { text: "Das Team ist kreativ und kompetent, sehr hilfreich und super freundlich und schnell. Preis-Leistungsverhältnis ist top.", who: "Angela Wurzel · Lernforum Obertshausen", img: "/bilder/person-angela-wurzel.webp" },
};
