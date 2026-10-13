import type { Artikel } from "@/lib/blog-typen";

const artikel: Artikel = {
  slug: "der-ultimative-guide-zur-erstellung-eines-effektiven-marketing-funnels",
  cover: "c5",
  kategorie: "Marketing-Tools",
  titel: "Der ultimative Guide zur Erstellung eines effektiven Marketing Funnels",
  teaser:
    "Vom ersten Kontakt bis zur Anfrage: Die fünf Phasen eines Marketing-Funnels, mit Beispielen, die für kleine Betriebe funktionieren.",
  lesezeit: 3,
  datum: "2024-08-11",
  intro:
    "Kaum jemand ruft an, weil er deine Anzeige einmal gesehen hat. Die meisten Kunden durchlaufen mehrere Schritte: aufmerksam werden, sich informieren, vergleichen, entscheiden. Ein Marketing-Funnel beschreibt genau diesen Weg und hilft dir, an jeder Stelle das Richtige anzubieten. Hier sind die fünf Phasen, mit Beispielen aus unserer Arbeit mit Handwerk, Dienstleistern und kleinen Unternehmen.",
  body: [
    { typ: "h2", text: "Was ein Marketing-Funnel ist" },
    { typ: "p", text: "Der Funnel, auf Deutsch Trichter, ist ein Modell für die Reise eines Kunden: Oben kommen viele Menschen rein, die dich zum ersten Mal sehen. Unten kommen die wenigen heraus, die anfragen oder kaufen. Dazwischen liegen Schritte, in denen du Vertrauen aufbaust. Wer den Funnel kennt, erkennt, an welcher Stelle Interessenten abspringen, und kann genau dort nachbessern." },
    { typ: "h2", text: "Phase 1: Aufmerksamkeit" },
    { typ: "p", text: "Ziel: Menschen erfahren, dass es dich gibt. Mittel: Beiträge, die ein Problem deiner Zielgruppe ansprechen, Reels aus dem Betrieb, Google-Sichtbarkeit für Suchen wie „Dachdecker Neuwied“. Beispiel: Ein kurzes Video, das zeigt, wie ein Betrieb eine undichte Stelle am Flachdach findet." },
    { typ: "h2", text: "Phase 2: Interesse" },
    { typ: "p", text: "Ziel: Aus flüchtiger Aufmerksamkeit wird echtes Interesse. Mittel: Inhalte mit Nutzen, etwa eine Checkliste gegen die E-Mail-Adresse, ein Ratgeberartikel, eine Anzeige an Menschen, die deine Website schon besucht haben. Beispiel: Eine kostenlose Checkliste „Was eine Website bei Google braucht“, wie unsere SEO-Checkliste." },
    { typ: "h2", text: "Phase 3: Entscheidung" },
    { typ: "p", text: "Ziel: Der Interessent ist überzeugt, dass du die richtige Wahl bist. Mittel: klare Leistungsseiten, echte Kundenprojekte mit Ausgangslage und Ergebnis, Bewertungen, ein kostenloses Erstgespräch. Beispiel: Eine Projektseite, die zeigt, wie ein Betrieb mit neuer Website und Karriereportal wieder Bewerbungen bekommt." },
    { typ: "h2", text: "Phase 4: Handlung" },
    { typ: "p", text: "Ziel: Der Interessent tut den entscheidenden Schritt: Anfrage, Termin, Kauf. Mittel: ein eindeutiger Aufruf („Kostenloses Erstgespräch buchen“), ein kurzes Formular, erreichbare Kontaktwege. Beispiel: Eine Landingpage mit genau einem Angebot und einem Formular mit drei Feldern." },
    { typ: "h2", text: "Phase 5: Bindung" },
    { typ: "p", text: "Ziel: Aus Kunden werden Stammkunden und Empfehler. Mittel: guter Service nach dem Auftrag, gelegentliche Nachrichten mit Nutzen, die Bitte um eine Bewertung. Beispiel: Zwei Wochen nach dem Auftrag eine kurze Nachricht mit Pflegehinweisen und dem Link zum Bewertungsformular." },
    { typ: "h2", text: "Werkzeuge, die den Funnel tragen" },
    { typ: "ul", items: [
      "E-Mail: Werkzeuge wie MailerLite oder Brevo verschicken Checklisten automatisch und halten Kontakt.",
      "Kundenverwaltung: Ein einfaches CRM, notfalls eine saubere Tabelle, damit keine Anfrage verloren geht.",
      "Messung: Google Analytics und die Search Console zeigen, wo Besucher herkommen und wo sie aussteigen.",
    ] },
    { typ: "h2", text: "Fazit" },
    {
      typ: "p",
      text: "Ein Funnel ist kein Werkzeug, das du kaufst, sondern eine Reihenfolge, die du einhältst: erst Aufmerksamkeit, dann Nutzen, dann Beweise, dann die Bitte um den nächsten Schritt. Wer Anzeigen direkt auf die Startseite schickt, überspringt die Hälfte davon. Wie wir Anzeigen und Zielseiten verbinden, zeigen wir auf der Seite Landingpages & Funnels.",
      html: "Ein Funnel ist kein Werkzeug, das du kaufst, sondern eine Reihenfolge, die du einhältst: erst Aufmerksamkeit, dann Nutzen, dann Beweise, dann die Bitte um den nächsten Schritt. Wer Anzeigen direkt auf die Startseite schickt, überspringt die Hälfte davon. Wie wir Anzeigen und Zielseiten verbinden, zeigen wir auf der Seite <a href=\"/landingpages-funnels\">Landingpages &amp; Funnels</a>.",
    },
  ],
};

export default artikel;
