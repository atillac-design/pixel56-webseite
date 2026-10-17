/**
 * Klick-Fragebögen je Leistung: fünf Fragen mit Antwortknöpfen, danach die
 * Kontaktdaten. Die Antworten gehen als lesbare Zusammenfassung per Mail an
 * Pixel56 und als Kontakt mit Feldern in MailerLite (siehe /api/anfrage).
 * Budget-Spannen sind Vorschläge; der Inhaber passt sie an.
 */

export type AnfrageOption = {
  text: string;
  /** Kurzer Hinweis, der nach dem Anklicken erscheint (z. B. bei kleinem Budget). */
  hinweis?: string;
};

export type AnfrageFrage = {
  id: string;
  frage: string;
  erklaerung?: string;
  optionen: AnfrageOption[];
};

export type Fragebogen = {
  key: string;
  leistung: string;
  /** Überschrift über dem Fragebogen. */
  titel: string;
  einleitung: string;
  fragen: AnfrageFrage[];
  /** Wert für das Feld „quelle“ in MailerLite. */
  quelle: string;
};

const BRANCHE: AnfrageFrage = {
  id: "branche",
  frage: "In welcher Branche bist du unterwegs?",
  optionen: [
    { text: "Handwerk & Bau" },
    { text: "Dienstleistung & Beratung" },
    { text: "Praxis & Gesundheit" },
    { text: "Gastronomie & Handel" },
    { text: "Coaching & Bildung" },
    { text: "Andere Branche" },
  ],
};

export const frageboegen = {
  webdesign: {
    key: "webdesign",
    leistung: "Webdesign",
    titel: "Dein Website-Projekt in fünf Klicks",
    einleitung: "Fünf Fragen, dann deine Kontaktdaten. Du bekommst innerhalb eines Werktags eine ehrliche Einschätzung, was bei dir der größte Hebel ist.",
    quelle: "anfrage-webdesign",
    fragen: [
      {
        id: "stand",
        frage: "Wie steht deine Website heute da?",
        optionen: [
          { text: "Es gibt noch keine" },
          { text: "Veraltet, seit Jahren nicht angefasst" },
          { text: "Okay, bringt aber keine Anfragen" },
          { text: "Gut, ich brauche nur Einzelnes" },
        ],
      },
      {
        id: "ziel",
        frage: "Was soll die Seite vor allem bringen?",
        optionen: [
          { text: "Anfragen und Anrufe" },
          { text: "Buchungen oder Bestellungen" },
          { text: "Bewerbungen" },
          { text: "Vertrauen bei Kunden, die mich prüfen" },
        ],
      },
      BRANCHE,
      {
        id: "zeit",
        frage: "Wann soll es losgehen?",
        optionen: [
          { text: "So schnell wie möglich" },
          { text: "In den nächsten ein bis drei Monaten" },
          { text: "Später im Jahr" },
          { text: "Ich informiere mich erst" },
        ],
      },
      {
        id: "budget",
        frage: "Welcher Rahmen ist für dich realistisch?",
        erklaerung: "Eine ehrliche Spanne hilft uns, dir das Richtige vorzuschlagen. Kein Angebot, keine Festlegung.",
        optionen: [
          { text: "Unter 2.000 €", hinweis: "In dem Rahmen passen wir meist nicht. Im Erstgespräch sagen wir dir ehrlich, was damit geht." },
          { text: "2.000 bis 5.000 €" },
          { text: "5.000 bis 10.000 €" },
          { text: "Über 10.000 €" },
          { text: "Weiß ich noch nicht, brauche Orientierung" },
        ],
      },
    ],
  },
  "meta-ads": {
    key: "meta-ads",
    leistung: "Meta Ads",
    titel: "Deine Kampagne in fünf Klicks",
    einleitung: "Fünf Fragen, dann deine Kontaktdaten. Du bekommst innerhalb eines Werktags eine ehrliche Einschätzung, ob und wie Anzeigen bei dir funktionieren.",
    quelle: "anfrage-meta-ads",
    fragen: [
      {
        id: "ziel",
        frage: "Was sollen die Anzeigen bringen?",
        optionen: [
          { text: "Neue Kunden" },
          { text: "Bewerber" },
          { text: "Beides" },
          { text: "Bekanntheit in der Region" },
        ],
      },
      {
        id: "stand",
        frage: "Läuft aktuell schon Werbung?",
        optionen: [
          { text: "Ja, bei Facebook oder Instagram" },
          { text: "Ja, bei Google" },
          { text: "Nein, noch nie" },
          { text: "Früher mal, ohne Erfolg" },
        ],
      },
      {
        id: "zielseite",
        frage: "Wohin sollen die Klicks führen?",
        optionen: [
          { text: "Auf eine eigene Zielseite, die es schon gibt" },
          { text: "Nur auf die Startseite" },
          { text: "Da muss erst etwas entstehen" },
          { text: "Direkt zu WhatsApp oder Telefon" },
        ],
      },
      BRANCHE,
      {
        id: "budget",
        frage: "Welches monatliche Werbebudget ist realistisch?",
        erklaerung: "Das Budget geht direkt an Meta. Die Betreuung durch uns kommt separat dazu und wird im Angebot ausgewiesen.",
        optionen: [
          { text: "Unter 500 € im Monat", hinweis: "Darunter liefert Meta kaum verwertbare Zahlen. Im Gespräch zeigen wir dir, ab wann es sich lohnt." },
          { text: "500 bis 1.500 € im Monat" },
          { text: "1.500 bis 3.000 € im Monat" },
          { text: "Über 3.000 € im Monat" },
          { text: "Weiß ich noch nicht" },
        ],
      },
    ],
  },
} satisfies Record<string, Fragebogen>;

export type FragebogenKey = keyof typeof frageboegen;
