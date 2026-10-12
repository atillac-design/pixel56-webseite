/** Kurze Originalauszüge aus den auf der bisherigen pixel56.de veröffentlichten Kundenstimmen. */
export type VerifiedReview = { text: string; who: string; img?: string };

export const verifiedReviews: VerifiedReview[] = [
  { text: "Es macht Spaß, sich mit ihm auszutauschen", who: "Margarete Wolf · Stark ins Neue", img: "/bilder/person-margarita-wolf.webp" },
  { text: "Ihre Marketing-Tipps sind Gold wert.", who: "Nalan Colak · Colak GmbH", img: "/bilder/person-nalan-colak.webp" },
  { text: "Wir freuen uns auf die weitere Zusammenarbeit", who: "Oktay Cömertler · Van den Berg Gruppe", img: "/bilder/person-oktay-coemertler.webp" },
];

export const verifiedProjectVoices: Record<string, VerifiedReview> = {
  "stark-ins-neue": verifiedReviews[0],
  "colak-gmbh": verifiedReviews[1],
  "discounthaus-holding": { text: "Bin sehr zufrieden mit der Umsetzung.", who: "Ulf Loch · Discounthaus" },
  "van-den-berg": verifiedReviews[2],
  "gm-dachdecker": { text: "Top Leistung!!", who: "Granit Osmani · GM-Dachdecker" },
  "cass-schulungen": { text: "Top Unterstützung im Web und Social Media!", who: "Mithat Akgün · CASS Schulungen", img: "/bilder/person-mithat-akguen.webp" },
};
