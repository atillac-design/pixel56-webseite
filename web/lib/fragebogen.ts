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
  /** Kurze persönliche Reaktion, die über der nächsten Frage erscheint. */
  reaktion?: string;
  /** Interne Markierung für die Mail an Pixel56, dem Besucher nicht sichtbar. */
  intern?: string;
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
          { text: "Es gibt noch keine", reaktion: "Dann bauen wir von Anfang an auf Anfragen, nicht auf Deko." },
          { text: "Veraltet, seit Jahren nicht angefasst", reaktion: "Kenne ich. Meist sind die Inhalte besser als ihre Verpackung." },
          { text: "Okay, bringt aber keine Anfragen", reaktion: "Dann liegt es fast immer an Struktur und Führung, nicht am Design." },
          { text: "Gut, ich brauche nur Einzelnes", reaktion: "Gut, dann schauen wir gezielt hin statt auf alles." },
        ],
      },
      {
        id: "ziel",
        frage: "Was soll die Seite vor allem bringen?",
        optionen: [
          { text: "Anfragen und Anrufe", reaktion: "Dann wird jede Seite auf die Anfrage hin gebaut." },
          { text: "Buchungen oder Bestellungen", reaktion: "Dann muss der Weg zur Buchung in zwei Klicks gehen." },
          { text: "Bewerbungen", reaktion: "Dann zeigen wir dein Team, nicht nur deine Leistung." },
          { text: "Vertrauen bei Kunden, die mich prüfen", reaktion: "Dann zählen echte Projekte und echte Stimmen." },
        ],
      },
      BRANCHE,
      {
        id: "zeit",
        frage: "Wann soll es losgehen?",
        optionen: [
          { text: "So schnell wie möglich", reaktion: "Dann planen wir in Etappen, damit früh etwas online ist." },
          { text: "In den nächsten ein bis drei Monaten", reaktion: "Guter Zeitrahmen für ein sauberes Projekt." },
          { text: "Später im Jahr", reaktion: "Dann lohnt es sich, jetzt schon Inhalte zu sammeln." },
          { text: "Ich informiere mich erst", reaktion: "Völlig okay. Die Einschätzung ist unverbindlich." },
        ],
      },
      {
        id: "budget",
        frage: "Welcher Rahmen ist für dich realistisch?",
        erklaerung: "Eine ehrliche Spanne hilft uns, dir das Richtige vorzuschlagen. Kein Angebot, keine Festlegung.",
        optionen: [
          { text: "Erstmal klein anfangen, unter 2.000 €", hinweis: "Geht, wenn der Umfang klar begrenzt ist. Im Gespräch klären wir, was in dem Rahmen das Wichtigste ist.", intern: "kleines Budget" },
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
          { text: "Neue Kunden", reaktion: "Dann zählt am Ende nur eins: Anfragen, die ankommen." },
          { text: "Bewerber", reaktion: "Dann zeigen die Anzeigen dein Team, nicht ein Stockfoto." },
          { text: "Beides", reaktion: "Geht, aber nacheinander. Wir starten mit dem, was mehr drückt." },
          { text: "Bekanntheit in der Region", reaktion: "Dann arbeiten wir mit Reichweite und Wiedererkennung." },
        ],
      },
      {
        id: "stand",
        frage: "Läuft aktuell schon Werbung?",
        optionen: [
          { text: "Ja, bei Facebook oder Instagram", reaktion: "Gut, dann schauen wir uns zuerst die Zahlen an." },
          { text: "Ja, bei Google", reaktion: "Dann ergänzen sich beide Kanäle gut." },
          { text: "Nein, noch nie", reaktion: "Dann bauen wir es von Anfang an sauber auf, mit Tracking." },
          { text: "Früher mal, ohne Erfolg", reaktion: "Meist lag es an der Zielseite, nicht an der Anzeige." },
        ],
      },
      {
        id: "zielseite",
        frage: "Wohin sollen die Klicks führen?",
        optionen: [
          { text: "Auf eine eigene Zielseite, die es schon gibt", reaktion: "Sehr gut, das ist die halbe Miete." },
          { text: "Nur auf die Startseite", reaktion: "Verstanden. Eine eigene Zielseite ist meist der erste Hebel." },
          { text: "Da muss erst etwas entstehen", reaktion: "Kein Problem, das gehört zur Kampagne dazu." },
          { text: "Direkt zu WhatsApp oder Telefon", reaktion: "Funktioniert gut, wenn schnell jemand antwortet." },
        ],
      },
      BRANCHE,
      {
        id: "budget",
        frage: "Welches monatliche Werbebudget ist realistisch?",
        erklaerung: "Das Budget geht direkt an Meta. Die Betreuung durch uns kommt separat dazu und wird im Angebot ausgewiesen.",
        optionen: [
          { text: "Erstmal testen, unter 500 € im Monat", hinweis: "Zum Testen okay, für belastbare Zahlen braucht Meta meist mehr. Im Gespräch zeigen wir dir, ab wann es sich rechnet.", intern: "kleines Budget" },
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
