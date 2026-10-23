/**
 * Klick-Fragebögen je Leistung: sechs Fragen mit Antwortknöpfen, danach die
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
  /** Versprechen in der linken Leiste. */
  versprechen: string;
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

const GROESSE: AnfrageFrage = {
  id: "groesse",
  frage: "Wie groß ist dein Betrieb?",
  optionen: [
    { text: "Ich allein oder zu zweit", reaktion: "Dann muss alles mit wenig Aufwand für dich laufen." },
    { text: "3 bis 10 Mitarbeiter", reaktion: "Die klassische Größe, bei der Marketing nebenbei liegen bleibt." },
    { text: "11 bis 50 Mitarbeiter", reaktion: "Dann lohnt sich ein System, das ohne dich weiterläuft." },
    { text: "Über 50 Mitarbeiter", reaktion: "Dann geht es um Abläufe und Zuständigkeiten, nicht nur um Design." },
  ],
};

export const frageboegen = {
  webdesign: {
    key: "webdesign",
    leistung: "Webdesign",
    titel: "Dein Website-Projekt in sechs Klicks",
    versprechen: "In zwei Minuten weißt du, wo deine Website Anfragen verliert.",
    einleitung: "Sechs Fragen, dann deine Kontaktdaten. Du bekommst innerhalb eines Werktags eine ehrliche Einschätzung, was bei dir der größte Hebel ist.",
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
          { text: "Einfach professionell dastehen, wie eine Visitenkarte", reaktion: "Geht, bleibt aber schlank: klar, schnell, ohne Ballast." },
        ],
      },
      GROESSE,
      BRANCHE,
      {
        id: "umfang",
        frage: "Was brauchst du?",
        optionen: [
          { text: "Eine einzelne Seite, die auf den Punkt kommt", reaktion: "Landingpage. Ein Ziel, kein Umweg." },
          { text: "Mehrere Unterseiten: Leistungen, Über uns, Kontakt", reaktion: "Die klassische Unternehmenswebsite, jede Seite mit einer Aufgabe." },
          { text: "Website plus Funnel, Buchung oder Bewerbung", reaktion: "Dann bauen wir den Weg zum Ziel gleich mit." },
          { text: "Einen Shop", reaktion: "Dann zählen Produktdarstellung, Checkout und Anbindungen." },
          { text: "Weiß ich noch nicht", reaktion: "Kein Problem, das klären wir im Gespräch in fünf Minuten." },
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
    titel: "Deine Kampagne in sechs Klicks",
    versprechen: "In zwei Minuten weißt du, ob Anzeigen sich bei dir rechnen.",
    einleitung: "Sechs Fragen, dann deine Kontaktdaten. Du bekommst innerhalb eines Werktags eine ehrliche Einschätzung, ob und wie Anzeigen bei dir funktionieren.",
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
      GROESSE,
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
  "content-produktion": {
    key: "content-produktion",
    leistung: "Social Content & Reels",
    titel: "Dein Content in sechs Klicks",
    versprechen: "In zwei Minuten weißt du, wie Content bei dir läuft, ohne dass du ihn selbst machen musst.",
    einleitung: "Sechs Fragen, dann deine Kontaktdaten. Du bekommst innerhalb eines Werktags eine ehrliche Einschätzung, welcher Rhythmus und welches Material bei dir Sinn ergeben.",
    quelle: "anfrage-content",
    fragen: [
      {
        id: "stand",
        frage: "Wie läuft Social Media bei dir heute?",
        optionen: [
          { text: "Gar nicht, kein Kanal wird gepflegt", reaktion: "Dann starten wir ohne Altlasten, das ist oft leichter." },
          { text: "Ab und zu, wenn gerade Zeit ist", reaktion: "Kenne ich. Ohne festen Rhythmus bleibt es Zufall." },
          { text: "Regelmäßig, aber ohne Wirkung", reaktion: "Dann liegt es meist am Inhalt, nicht an der Häufigkeit." },
          { text: "Läuft, ich brauche Entlastung", reaktion: "Gut, dann übernehmen wir und du gibst nur noch frei." },
        ],
      },
      {
        id: "ziel",
        frage: "Was soll der Content bewirken?",
        optionen: [
          { text: "Neue Kunden erreichen", reaktion: "Dann zeigen wir Ergebnisse und echte Kunden, nicht Deko." },
          { text: "Bewerber ansprechen", reaktion: "Dann wird dein Team zum Hauptdarsteller." },
          { text: "Bestandskunden erinnern und binden", reaktion: "Dann zählt Regelmäßigkeit mehr als Reichweite." },
          { text: "Marke und Qualität sichtbar machen", reaktion: "Dann arbeiten wir mit Einblicken hinter die Kulissen." },
        ],
      },
      GROESSE,
      BRANCHE,
      {
        id: "material",
        frage: "Was hast du heute an Material?",
        optionen: [
          { text: "Nichts, es muss gedreht werden", reaktion: "Ein Drehtag bei dir reicht oft für mehrere Wochen." },
          { text: "Handyvideos und Fotos aus dem Alltag", reaktion: "Perfekt, daraus schneiden wir echte Reels." },
          { text: "Professionelles Material von früher", reaktion: "Gut, das kombinieren wir mit neuem Alltagsmaterial." },
          { text: "Keine Ahnung, was man braucht", reaktion: "Völlig normal. Das klären wir im Gespräch in fünf Minuten." },
        ],
      },
      {
        id: "budget",
        frage: "Welcher Rahmen pro Monat ist realistisch?",
        erklaerung: "Für laufende Betreuung mit Schnitt und Veröffentlichung. Ein einzelner Drehtag geht auch, das klären wir im Gespräch.",
        optionen: [
          { text: "Erstmal klein, unter 500 € im Monat", hinweis: "Dafür bieten sich einzelne Drehtage oder reiner Schnitt an. Im Gespräch finden wir den passenden Einstieg.", intern: "kleines Budget" },
          { text: "500 bis 1.000 € im Monat" },
          { text: "1.000 bis 2.000 € im Monat" },
          { text: "Über 2.000 € im Monat" },
          { text: "Weiß ich noch nicht" },
        ],
      },
    ],
  },
  "ki-automatisierung": {
    key: "ki-automatisierung",
    leistung: "KI-Prozesse & Automatisierung",
    titel: "Deine Routine in sechs Klicks",
    versprechen: "In zwei Minuten weißt du, welche Routine bei dir zuerst wegfallen kann.",
    einleitung: "Sechs Fragen, dann deine Kontaktdaten. Du bekommst innerhalb eines Werktags eine ehrliche Einschätzung, welcher Prozess bei dir den größten Hebel hat.",
    quelle: "anfrage-ki",
    fragen: [
      {
        id: "zeitfresser",
        frage: "Wo geht bei dir am meisten Zeit verloren?",
        optionen: [
          { text: "Anfragen beantworten und sortieren", reaktion: "Der häufigste Fall, und meist der schnellste Gewinn." },
          { text: "Angebote und Rechnungen schreiben", reaktion: "Dann bauen wir Entwürfe, die du nur noch prüfst." },
          { text: "Termine, Nachfassen, Erinnerungen", reaktion: "Das lässt sich fast komplett automatisieren." },
          { text: "Wissen suchen: Preise, Abläufe, alte Projekte", reaktion: "Dann bekommt dein Betrieb ein Gedächtnis, das antwortet." },
        ],
      },
      {
        id: "wer",
        frage: "Wer macht das heute?",
        optionen: [
          { text: "Ich selbst, meist abends", reaktion: "Dann ist jede gesparte Stunde deine eigene." },
          { text: "Eine Person im Büro", reaktion: "Gut, die wird zur Prüferin statt zur Tipperin." },
          { text: "Mehrere, jeder ein bisschen", reaktion: "Dann sorgt ein fester Ablauf zuerst für Ordnung." },
          { text: "Bleibt oft liegen", reaktion: "Genau da entstehen verlorene Aufträge. Das ändern wir." },
        ],
      },
      GROESSE,
      BRANCHE,
      {
        id: "werkzeuge",
        frage: "Womit arbeitet ihr heute?",
        optionen: [
          { text: "E-Mail und Excel", reaktion: "Reicht als Basis, daran lässt sich gut andocken." },
          { text: "Ein Branchenprogramm oder CRM", reaktion: "Gut, dann binden wir an, statt etwas Neues einzuführen." },
          { text: "WhatsApp und Zettel", reaktion: "Auch das geht. Wir holen die Infos dort ab, wo sie sind." },
          { text: "Gemischt, nichts hängt zusammen", reaktion: "Dann ist die Verbindung der Teile der erste Schritt." },
        ],
      },
      {
        id: "budget",
        frage: "Welcher Rahmen ist für den Start realistisch?",
        erklaerung: "Für Analyse und den ersten laufenden Prozess. Laufende Kosten für Werkzeuge kommen separat und sind meist klein.",
        optionen: [
          { text: "Erstmal klein, unter 1.500 €", hinweis: "Für einen einzelnen, klar begrenzten Ablauf machbar. Im Gespräch suchen wir den mit dem größten Effekt.", intern: "kleines Budget" },
          { text: "1.500 bis 4.000 €" },
          { text: "4.000 bis 8.000 €" },
          { text: "Über 8.000 €" },
          { text: "Weiß ich noch nicht, brauche Orientierung" },
        ],
      },
    ],
  },
  "landingpages-funnels": {
    key: "landingpages-funnels",
    leistung: "Landingpages & Funnels",
    titel: "Deine Zielseite in sechs Klicks",
    versprechen: "In zwei Minuten weißt du, warum aus deinen Klicks keine Anfragen werden.",
    einleitung: "Sechs Fragen, dann deine Kontaktdaten. Du bekommst innerhalb eines Werktags eine ehrliche Einschätzung, welche Seite dein Angebot braucht.",
    quelle: "anfrage-landingpage",
    fragen: [
      {
        id: "zweck",
        frage: "Wofür brauchst du die Seite?",
        optionen: [
          { text: "Für Anzeigen, die laufen oder starten", reaktion: "Dann muss die Seite halten, was die Anzeige verspricht." },
          { text: "Für eine Aktion oder ein Angebot", reaktion: "Dann bauen wir auf ein Ziel, ohne Ablenkung." },
          { text: "Für Bewerbungen", reaktion: "Dann wird die Bewerbung in zwei Minuten vom Handy möglich." },
          { text: "Für Anmeldungen zu Kurs oder Termin", reaktion: "Dann zählt der kürzeste Weg bis zur Anmeldung." },
        ],
      },
      {
        id: "stand",
        frage: "Wohin führen Klicks heute?",
        optionen: [
          { text: "Auf die Startseite", reaktion: "Der häufigste Grund, warum Budget verpufft." },
          { text: "Auf eine Seite, die nicht konvertiert", reaktion: "Dann schauen wir zuerst, wo die Leute abspringen." },
          { text: "Nirgendwohin, es gibt noch nichts", reaktion: "Gut, dann bauen wir es gleich richtig." },
          { text: "Auf ein Formular ohne Nachfassen", reaktion: "Dann geht die Hälfte der Anfragen verloren. Das lösen wir mit." },
        ],
      },
      GROESSE,
      BRANCHE,
      {
        id: "zeit",
        frage: "Wann soll sie online sein?",
        optionen: [
          { text: "In den nächsten zwei Wochen", reaktion: "Sportlich, aber mit klarem Angebot machbar." },
          { text: "In vier bis acht Wochen", reaktion: "Guter Rahmen für Text, Seite und Test." },
          { text: "Später, erst planen", reaktion: "Dann klären wir jetzt das Angebot, das ist der schwerste Teil." },
          { text: "Flexibel", reaktion: "Dann richten wir uns nach dem Start deiner Anzeigen." },
        ],
      },
      {
        id: "budget",
        frage: "Welcher Rahmen ist für dich realistisch?",
        erklaerung: "Für Konzept, Text, Seite und Anbindung ans Formular oder den Kalender. Werbebudget kommt separat.",
        optionen: [
          { text: "Erstmal klein, unter 1.000 €", hinweis: "Für eine schlanke Seite mit einem Ziel machbar. Im Gespräch klären wir, was weggelassen werden kann.", intern: "kleines Budget" },
          { text: "1.000 bis 2.500 €" },
          { text: "2.500 bis 5.000 €" },
          { text: "Über 5.000 €" },
          { text: "Weiß ich noch nicht" },
        ],
      },
    ],
  },
  mitarbeitergewinnung: {
    key: "mitarbeitergewinnung",
    leistung: "Mitarbeitergewinnung",
    titel: "Deine Stellen in sechs Klicks",
    versprechen: "In zwei Minuten weißt du, warum sich die Richtigen bei dir noch nicht bewerben.",
    einleitung: "Sechs Fragen, dann deine Kontaktdaten. Du bekommst innerhalb eines Werktags eine ehrliche Einschätzung, wie du die Leute erreichst, die gerade nicht suchen.",
    quelle: "anfrage-recruiting",
    fragen: [
      {
        id: "wen",
        frage: "Wen suchst du?",
        optionen: [
          { text: "Fachkräfte mit Ausbildung", reaktion: "Die suchen selten aktiv. Die muss man dort abholen, wo sie abends sind." },
          { text: "Helfer und Quereinsteiger", reaktion: "Hier zählt ein einfacher Weg: zwei Minuten vom Handy." },
          { text: "Auszubildende", reaktion: "Dann sprechen wir Eltern und Jugendliche zugleich an." },
          { text: "Büro oder Verwaltung", reaktion: "Hier überzeugt vor allem, wie der Arbeitsplatz wirklich ist." },
        ],
      },
      {
        id: "stand",
        frage: "Wie läuft die Suche heute?",
        optionen: [
          { text: "Stellenbörsen, kaum Rücklauf", reaktion: "Logisch: Dort suchen nur die, die schon suchen." },
          { text: "Über Bekannte und Mitarbeiter", reaktion: "Gut, aber begrenzt. Das ergänzen wir mit Reichweite." },
          { text: "Social Media, ohne System", reaktion: "Dann fehlt meist die Zielseite dahinter." },
          { text: "Noch gar nicht angefangen", reaktion: "Dann bauen wir es von Anfang an richtig auf." },
        ],
      },
      {
        id: "stellen",
        frage: "Wie viele Stellen in den nächsten sechs Monaten?",
        optionen: [
          { text: "Eine" },
          { text: "Zwei bis drei" },
          { text: "Mehr als drei" },
          { text: "Laufend, wir wachsen" },
        ],
      },
      GROESSE,
      BRANCHE,
      {
        id: "budget",
        frage: "Welches monatliche Anzeigenbudget ist realistisch?",
        erklaerung: "Das Anzeigenbudget geht an Meta. Karriereseite und Betreuung kommen separat und stehen im Angebot.",
        optionen: [
          { text: "Erstmal testen, unter 500 € im Monat", hinweis: "Zum Testen okay. Für eine Fachkraft rechnen die meisten Betriebe mit mehr. Im Gespräch zeigen wir dir, was realistisch ist.", intern: "kleines Budget" },
          { text: "500 bis 1.500 € im Monat" },
          { text: "1.500 bis 3.000 € im Monat" },
          { text: "Über 3.000 € im Monat" },
          { text: "Weiß ich noch nicht" },
        ],
      },
    ],
  },
  "google-ads": {
    key: "google-ads",
    leistung: "Google Ads",
    titel: "Deine Suchkampagne in sechs Klicks",
    versprechen: "In zwei Minuten weißt du, ob Google Ads bei dir Aufträge bringen.",
    einleitung: "Sechs Fragen, dann deine Kontaktdaten. Du bekommst innerhalb eines Werktags eine ehrliche Einschätzung, ob sich Suchanzeigen bei dir rechnen.",
    quelle: "anfrage-google-ads",
    fragen: [
      {
        id: "ziel",
        frage: "Was soll passieren, wenn jemand sucht?",
        optionen: [
          { text: "Anruf oder Anfrage", reaktion: "Dann messen wir genau das, nicht Klicks." },
          { text: "Terminbuchung", reaktion: "Dann muss der Kalender direkt hinter der Anzeige liegen." },
          { text: "Kauf im Shop", reaktion: "Dann zählt der Warenkorb, nicht der Besuch." },
          { text: "Besuch vor Ort", reaktion: "Dann arbeiten wir mit Umkreis und Öffnungszeiten." },
        ],
      },
      {
        id: "stand",
        frage: "Läuft schon Google-Werbung?",
        optionen: [
          { text: "Ja, selbst eingerichtet", reaktion: "Gut, dann prüfen wir zuerst, wohin das Budget fließt." },
          { text: "Ja, über eine Agentur", reaktion: "Dann vergleichen wir ehrlich, was die Zahlen hergeben." },
          { text: "Früher mal, abgeschaltet", reaktion: "Meist fehlte die Zielseite oder das Tracking." },
          { text: "Nein, noch nie", reaktion: "Dann starten wir sauber mit Messung vor dem ersten Euro." },
        ],
      },
      {
        id: "reichweite",
        frage: "Wie weit soll die Werbung reichen?",
        optionen: [
          { text: "Nur meine Stadt und Umgebung" },
          { text: "Mehrere Regionen" },
          { text: "Deutschlandweit" },
          { text: "Deutschland, Österreich, Schweiz" },
        ],
      },
      GROESSE,
      BRANCHE,
      {
        id: "budget",
        frage: "Welches monatliche Klickbudget ist realistisch?",
        erklaerung: "Das Klickbudget geht an Google. Einrichtung und Betreuung kommen separat und stehen im Angebot.",
        optionen: [
          { text: "Erstmal testen, unter 500 € im Monat", hinweis: "Zum Testen in einer Region okay. Je nach Branche sind Klicks teuer, das rechnen wir dir im Gespräch vor.", intern: "kleines Budget" },
          { text: "500 bis 1.500 € im Monat" },
          { text: "1.500 bis 4.000 € im Monat" },
          { text: "Über 4.000 € im Monat" },
          { text: "Weiß ich noch nicht" },
        ],
      },
    ],
  },
  seo: {
    key: "seo",
    leistung: "SEO",
    titel: "Deine Sichtbarkeit in sechs Klicks",
    versprechen: "In zwei Minuten weißt du, warum du bei Google noch nicht vorn stehst.",
    einleitung: "Sechs Fragen, dann deine Kontaktdaten. Du bekommst innerhalb eines Werktags eine ehrliche Einschätzung, was bei dir zuerst zu tun ist.",
    quelle: "anfrage-seo",
    fragen: [
      {
        id: "stand",
        frage: "Wo stehst du bei Google heute?",
        optionen: [
          { text: "Werde kaum gefunden", reaktion: "Dann fangen wir mit dem Fundament an, das wirkt am schnellsten." },
          { text: "Gefunden, aber nur unter meinem Namen", reaktion: "Der Klassiker. Für die Leistung selbst fehlen meist die Seiten." },
          { text: "Auf Seite zwei oder drei", reaktion: "Gute Ausgangslage, da ist der Sprung nach vorn machbar." },
          { text: "Keine Ahnung, nie geprüft", reaktion: "Kein Problem, das prüfen wir im Gespräch live." },
        ],
      },
      {
        id: "ziel",
        frage: "Wofür willst du gefunden werden?",
        optionen: [
          { text: "Meine Leistung in meiner Stadt", reaktion: "Lokal ist der schnellste Weg, oft über das Google-Profil." },
          { text: "Mehrere Städte oder Regionen", reaktion: "Dann braucht jede Region eine eigene, echte Seite." },
          { text: "Deutschlandweit zu einem Thema", reaktion: "Dann zählen Inhalte, die Fragen wirklich beantworten." },
          { text: "Weiß ich nicht genau", reaktion: "Dann schauen wir zuerst, wonach deine Kunden überhaupt suchen." },
        ],
      },
      {
        id: "website",
        frage: "Wie ist der Stand deiner Website?",
        optionen: [
          { text: "Neu oder frisch überarbeitet" },
          { text: "Älter, technisch in Ordnung" },
          { text: "Alt, langsam, nicht fürs Handy" },
          { text: "Es gibt keine" },
        ],
      },
      GROESSE,
      BRANCHE,
      {
        id: "budget",
        frage: "Welcher Rahmen ist für dich realistisch?",
        erklaerung: "SEO wirkt über Monate. Einmalige Grundlagen oder laufende Betreuung, beides ist möglich.",
        optionen: [
          { text: "Einmalig Grundlagen, unter 1.000 €", hinweis: "Für Technik, Google-Profil und die wichtigsten Seiten machbar. Laufende Arbeit kommt dann später dazu.", intern: "kleines Budget" },
          { text: "300 bis 600 € im Monat" },
          { text: "600 bis 1.200 € im Monat" },
          { text: "Über 1.200 € im Monat" },
          { text: "Weiß ich noch nicht" },
        ],
      },
    ],
  },
  allgemein: {
    key: "allgemein",
    leistung: "Kontakt",
    titel: "Dein Anliegen in sechs Klicks",
    versprechen: "In zwei Minuten weißt du, wo dein größter Hebel liegt.",
    einleitung: "Sechs Fragen, dann deine Kontaktdaten. Du bekommst innerhalb eines Werktags eine ehrliche Einschätzung, womit du am besten anfängst.",
    quelle: "anfrage-kontakt",
    fragen: [
      {
        id: "thema",
        frage: "Worum geht es bei dir?",
        optionen: [
          { text: "Website oder Relaunch", reaktion: "Gut. Dann schauen wir zuerst, wo die Seite Anfragen verliert." },
          { text: "Anzeigen bei Meta oder Google", reaktion: "Dann geht es um Ziel, Zielseite und Messung, bevor Budget fließt." },
          { text: "Content und Reels", reaktion: "Dann zeigen wir, was du ohnehin jeden Tag machst, nur sichtbar." },
          { text: "Mitarbeiter finden", reaktion: "Dann bauen wir den Weg zur Bewerbung so kurz wie möglich." },
          { text: "KI-Prozesse im Betrieb", reaktion: "Dann suchen wir den Ablauf, der heute am meisten Zeit frisst." },
          { text: "Landingpage oder Funnel", reaktion: "Eine Seite, ein Ziel. Dann wird jeder Klick gezählt." },
          { text: "Suchmaschinenoptimierung", reaktion: "Dann sehen wir uns zuerst Grundlagen und Google-Profil an." },
          { text: "Weiß ich noch nicht genau", reaktion: "Kein Problem, genau dafür ist das Erstgespräch da." },
        ],
      },
      {
        id: "ziel",
        frage: "Was soll sich vor allem ändern?",
        optionen: [
          { text: "Mehr Anfragen und Aufträge", reaktion: "Dann ist jede Maßnahme daran zu messen, nicht an Likes." },
          { text: "Mehr Bewerbungen", reaktion: "Dann zählt der Weg vom Feed zur Bewerbung." },
          { text: "Professioneller wirken", reaktion: "Dann geht es um Klarheit und echte Beweise, nicht um Deko." },
          { text: "Weniger Handarbeit im Alltag", reaktion: "Dann schauen wir, was sich jede Woche wiederholt." },
        ],
      },
      GROESSE,
      BRANCHE,
      {
        id: "zeitpunkt",
        frage: "Wann soll es losgehen?",
        optionen: [
          { text: "So schnell wie möglich", reaktion: "Dann melden wir uns zügig mit einem Terminvorschlag." },
          { text: "In den nächsten drei Monaten" },
          { text: "Später im Jahr" },
          { text: "Ich informiere mich erst" },
        ],
      },
      {
        id: "budget",
        frage: "Welcher Rahmen ist für dich realistisch?",
        erklaerung: "Nur eine grobe Einordnung, damit der Vorschlag zu dir passt. Es gibt keine falsche Antwort.",
        optionen: [
          { text: "Erstmal klein anfangen, unter 2.000 €", hinweis: "Auch kleine Schritte sind möglich. Wir sagen dir ehrlich, was dafür realistisch ist.", intern: "kleines Budget" },
          { text: "2.000 bis 5.000 €" },
          { text: "5.000 bis 15.000 €" },
          { text: "Mehr oder laufende Betreuung" },
          { text: "Weiß ich noch nicht" },
        ],
      },
    ],
  },
} satisfies Record<string, Fragebogen>;

export type FragebogenKey = keyof typeof frageboegen;
