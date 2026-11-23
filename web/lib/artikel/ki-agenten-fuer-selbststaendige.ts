import type { Artikel } from "@/lib/blog-typen";

// Neu geschrieben am 23.11.2026 (Blog-Woche 3). Ersetzt die Webflow-Rohfassung
// von Mai 2025 („So revolutionierst du dein Business“, Tool-Tutorial mit
// Hype-Ton). Der Slug bleibt, weil Google ihn für „ki für selbstständige“ und
// „ki tools für selbstständige“ kennt. Inhalt folgt der KI-Seite und der
// KI-Agenten-Checkliste: Aufgaben statt Werkzeuge, Freigabe bleibt beim Menschen.

const artikel: Artikel = {
  slug: "ki-agenten-fuer-selbststaendige",
  cover: "c1",
  kategorie: "Künstliche Intelligenz",
  titel: "KI für Selbstständige: Welche Aufgaben lohnen sich zuerst?",
  seoTitel: "KI für Selbstständige: Was lohnt sich zuerst?",
  teaser:
    "Keine Tool-Liste, sondern eine ehrliche Einordnung: acht Aufgaben, die KI dir als Selbstständiger heute zuverlässig abnimmt, sechs, bei denen du dir das Geld sparst, und ein Einstieg in vier Wochen, der mit deinem Ablauf beginnt statt mit einem Werkzeug.",
  lesezeit: 9,
  datum: "2026-11-23",
  intro:
    "Als Selbstständiger bist du Fachkraft, Büro, Vertrieb und Buchhaltung in einer Person. Die Arbeit, für die dich Kunden bezahlen, machst du tagsüber. Die Anfragen, Angebote, Beiträge und Rückfragen bleiben für den Abend. Genau dort setzt KI heute sinnvoll an, nicht als Zauberei, sondern als Vorarbeiterin, die sortiert und vorformuliert, während die Entscheidung bei dir bleibt. Dieser Artikel zeigt, welche Aufgaben sich zuerst lohnen, welche nicht, welche Werkzeuge du wirklich brauchst und wie du in vier Wochen startest, ohne dich zu verzetteln.",
  body: [
    { typ: "h2", text: "Was ist mit „KI für Selbstständige“ überhaupt gemeint?" },
    {
      typ: "p",
      text: "Drei Dinge, die oft in einen Topf geworfen werden. Erstens der Assistent, dem du eine Frage stellst oder einen Text diktierst: Er formuliert, fasst zusammen, übersetzt, schlägt vor. Zweitens die Automatisierung, die Daten von einem Ort zum anderen trägt, zum Beispiel vom Formular auf deiner Website in dein Postfach und in deine Kontaktliste, ohne dass du etwas abtippst. Drittens der sogenannte KI-Agent, der beides verbindet: Er nimmt eine Anfrage entgegen, erkennt, worum es geht, holt fehlende Angaben nach und legt dir einen fertigen Entwurf zur Freigabe hin.",
    },
    {
      typ: "p",
      text: "Für dich als Selbstständigen ist die dritte Stufe die interessante, aber nicht die erste. Die meisten Betriebe fangen mit dem Assistenten an und merken nach ein paar Wochen, welche Aufgabe sich immer wiederholt. Erst daraus entsteht ein Ablauf, der sich lohnt zu automatisieren. In größeren Unternehmen ist das Thema inzwischen angekommen: Laut einer Bitkom-Befragung vom September 2026 setzen 57 Prozent der deutschen Unternehmen ab 20 Beschäftigten KI ein, nur noch 4 Prozent sagen, KI sei für sie kein Thema. Für Einzelunternehmer gibt es solche Zahlen kaum, aber der Hebel ist dort größer, weil jede gesparte Stunde deine eigene ist.",
    },
    { typ: "h2", text: "Welche Aufgaben nimmt dir KI heute zuverlässig ab?" },
    {
      typ: "p",
      text: "Zuverlässig heißt: Die Aufgabe wiederholt sich, es gibt Beispiele aus deiner eigenen Arbeit, und das Ergebnis geht erst nach deinem Blick raus. Unter diesen Bedingungen funktionieren heute acht Aufgaben, die wir auch in unseren eigenen Abläufen nutzen.",
    },
    {
      typ: "ul",
      items: [
        "Anfragen vorsortieren: Mails, Formulare und Nachrichten nach Anliegen und Dringlichkeit ordnen. Du siehst morgens, was heute dran ist und was warten kann.",
        "Antwortentwürfe: Zu jeder Anfrage ein Entwurf in deinem Ton, mit den Rückfragen, die dir sonst beim dritten Mailwechsel einfallen. Du liest, änderst zwei Sätze, schickst ab.",
        "Angebotsentwürfe: Aus Vorlagen, deinen Notizen und der Anfrage entsteht ein erster Angebotstext. Preis und Freigabe bleiben bei dir.",
        "Beiträge aus Fotos: Drei Handyfotos von der Baustelle oder aus dem Studio, ein paar Stichworte, daraus ein Beitragsentwurf für Instagram oder deine Website. Zur Freigabe, nicht zur Veröffentlichung.",
        "Besprechungen zu Aufgaben: Notizen oder eine Sprachaufnahme nach dem Kundentermin werden zu einer Aufgabenliste und einer kurzen Zusammenfassung für den Kunden.",
        "Antworten auf Bewertungen: Entwürfe für Google-Bewertungen, freundlich, konkret, ohne Floskeln. Die kritische Bewertung beantwortest du selbst.",
        "Übergaben zwischen Werkzeugen: Formular zu Postfach, Postfach zu Kontaktliste, Kontaktliste zu Rechnungsprogramm. Niemand tippt dasselbe zweimal ein.",
        "Häufige Fragen aus deinen Unterlagen: Preise, Ablauf, Anfahrt, Vorbereitung. Ein Assistent, der aus deinen eigenen Texten antwortet und nur weitergibt, was eine Entscheidung braucht.",
      ],
    },
    {
      typ: "grafik",
      name: "ki-freigabe",
      text: "Das Muster hinter allen acht Aufgaben: Die KI sortiert und entwirft, du prüfst und entscheidest. Nichts geht ohne deinen Blick raus.",
    },
    { typ: "h2", text: "Wo sparst du dir das Geld?" },
    {
      typ: "p",
      text: "Genauso wichtig wie die Liste der Aufgaben ist die Liste der Dinge, die du nicht automatisieren solltest. Nicht, weil die Technik es nicht könnte, sondern weil der Schaden größer ist als der Zeitgewinn.",
    },
    {
      typ: "ul",
      items: [
        "Preise und Rabatte: Die KI bereitet das Angebot vor, den Preis setzt du. Ein falsch gerechneter Nachlass kostet mehr als zehn gesparte Minuten.",
        "Beschwerden, Absagen, schwierige Gespräche: Hier merkt der Kunde sofort, ob ein Mensch schreibt. Und genau hier entscheidet sich, ob er bleibt.",
        "Zusagen zu Fristen, Gewährleistung und Verträgen: Vorlagen ja, Zusagen nein. Was du versprichst, musst du halten.",
        "Bewerber bewerten: Unterlagen strukturieren ist in Ordnung, die Auswahl bleibt bei dir. Das ist auch eine Frage der Fairness.",
        "Aufgaben ohne Beispiele: Wenn du selbst noch nicht weißt, wie das gute Ergebnis aussieht, kann die KI es nicht lernen. Erst zehnmal von Hand, dann automatisieren.",
        "Einmalige Aufgaben: Für etwas, das einmal im Jahr vorkommt, lohnt kein Ablauf. Da reicht der Assistent als Schreibhilfe.",
      ],
    },
    {
      typ: "cta",
      titel: "KI-Agenten-Checkliste: Wo spart KI in deinem Betrieb wirklich Zeit?",
      text: "Zehn Seiten zum Durchgehen: acht Aufgaben, sechs „lohnt nicht“, ein Selbsttest für deinen Betrieb und ein Plan für die ersten vier Wochen. Kostenlos als PDF, ohne Vorkenntnisse.",
      href: "/checkliste-ki-agenten",
      label: "Checkliste herunterladen",
    },
    { typ: "h2", text: "Welche KI-Tools brauchst du als Selbstständiger wirklich?" },
    {
      typ: "p",
      text: "Weniger, als die Tool-Listen im Netz vermuten lassen. Für den Anfang reichen drei Bausteine: ein Sprachassistent, in dem du schreibst und diktierst, dein vorhandenes Postfach mit Kalender, und ein Automatisierungsdienst, der Formulare, Postfach und Kontaktliste miteinander verbindet. Alles Weitere kommt erst, wenn ein konkreter Ablauf es braucht. Wir nennen hier bewusst keine Produktnamen, weil sich die Werkzeuge alle paar Monate ändern und die Wahl vom Ablauf abhängen sollte, nicht von der Werbung des Anbieters.",
    },
    {
      typ: "p",
      text: "Drei Auswahlfragen helfen mehr als jeder Vergleichstest. Erstens: Kann das Werkzeug mit dem arbeiten, was du schon hast, also Postfach, Kalender, Website, Rechnungsprogramm? Zweitens: Wo liegen die Daten, und gibt es einen Vertrag zur Auftragsverarbeitung, wenn Kundendaten durchlaufen? Drittens: Kannst du den Ablauf in einem Satz beschreiben? Wenn nicht, ist nicht das Werkzeug das Problem, sondern der Ablauf.",
    },
    {
      typ: "bild",
      src: "/bilder/ki-projekt-kmu-webseiten.webp",
      alt: "Automatisch erzeugter Website-Entwurf für einen Malerbetrieb auf kmu-webseiten.de, ein Projekt von Pixel56",
      text: "So sieht ein fertiger Ablauf aus: Ein Interessent füllt vier Felder aus, der Rest läuft automatisch, bis zum ersten Website-Entwurf. Eigenes Projekt von Pixel56, mit KI entwickelt und betrieben.",
      quelle: "kmu-webseiten.de, Produkt von Pixel56",
    },
    { typ: "h2", text: "Wie startest du in vier Wochen, ohne dich zu verzetteln?" },
    {
      typ: "p",
      text: "Woche eins: Führe eine Strichliste. Jedes Mal, wenn du abends etwas tippst, das du schon einmal ähnlich getippt hast, ein Strich mit Stichwort. Nach einer Woche siehst du, welche Aufgabe am häufigsten vorkommt. Meist sind es Anfragen beantworten oder Angebote schreiben.",
    },
    {
      typ: "p",
      text: "Woche zwei: Nimm diese eine Aufgabe und sammle zehn gute Beispiele aus deiner eigenen Arbeit: zehn Antworten, auf die du stolz warst, zehn Angebote, die angenommen wurden. Gib sie dem Assistenten als Muster und lass ihn die nächste Anfrage im selben Stil beantworten. Vergleiche, korrigiere, wiederhole. Du wirst merken, wo er gut ist und wo er daneben liegt.",
    },
    {
      typ: "p",
      text: "Woche drei: Baue den Freigabe-Schritt ein. Die Anfrage kommt an, der Entwurf entsteht, und beides landet zusammen bei dir: Zusammenfassung oben, Entwurf darunter, ein Klick zum Absenden. Unter einer Minute statt zehn, und du hast jeden Satz gesehen. Woche vier: Miss, wie lange du jetzt pro Anfrage brauchst und wie schnell Kunden eine Antwort bekommen. Erst wenn das stabil läuft, kommt die zweite Aufgabe dran.",
    },
    { typ: "h2", text: "Was ist mit Datenschutz und Kundendaten?" },
    {
      typ: "p",
      html: "Die wichtigste Regel: Kläre vor der ersten Zeile Technik, welche Daten durch den Ablauf fließen und welche nicht. Name, Anliegen und Terminwunsch sind etwas anderes als Gesundheitsdaten, Gehaltsangaben oder Vertragsdetails. Nicht jeder Dienst darf jede Information sehen. Wähle Werkzeuge passend zur Vertraulichkeit, schließe einen Vertrag zur Auftragsverarbeitung, wo Kundendaten verarbeitet werden, und lösche, was nicht mehr gebraucht wird. Was das System getan hat, sollte nachvollziehbar bleiben. Das ist kein Rechtsrat, sondern die Praxis, mit der wir bei <a href=\"/ki-automatisierung\">KI-Prozessen und Automatisierung</a> jeden Ablauf beginnen. Im Zweifel fragst du deinen Datenschutzberater, bevor Kundendaten in ein neues Werkzeug wandern.",
      text: "",
    },
    { typ: "h2", text: "Woran merkst du, dass es sich lohnt?" },
    {
      typ: "p",
      html: "An drei Zahlen, die du selbst erhebst: Minuten pro Anfrage vorher und nachher, Zeit bis zur ersten Antwort an den Kunden, und die Uhrzeit, zu der du den Rechner zuklappst. Wenn sich keine der drei bewegt, war es die falsche Aufgabe oder der Ablauf ist zu kompliziert geraten. Realistisch ist: Eine abgegrenzte Aufgabe wie die Vorsortierung von Anfragen läuft nach wenigen Wochen im Alltag. Wer dir verspricht, dein ganzes Geschäft in einer Woche zu automatisieren, verkauft dir ein Werkzeug, keinen Ablauf. Und wenn die Anfragen gar nicht erst ankommen, weil die Website sie nicht erzeugt, ist der erste Schritt nicht KI, sondern eine Seite, die Fragen beantwortet. Dafür gibt es unsere Seite zu <a href=\"/webdesign\">Webdesign</a> und, wenn du es kurz besprechen willst, das <a href=\"/kontakt\">Erstgespräch</a>.",
      text: "",
    },
    {
      typ: "faq",
      items: [
        { q: "Brauche ich Programmierkenntnisse, um KI als Selbstständiger zu nutzen?", a: "Nein. Für den Assistenten brauchst du gar nichts, für Automatisierungen reichen Dienste, die Abläufe per Klick verbinden. Wichtiger als Technik ist, dass du deinen Ablauf in einem Satz beschreiben kannst und zehn gute Beispiele hast." },
        { q: "Welche Aufgabe sollte ich zuerst automatisieren?", a: "Die, die am häufigsten vorkommt und bei der es Beispiele gibt. Bei den meisten Selbstständigen ist das die Antwort auf Anfragen oder der erste Angebotsentwurf. Eine Aufgabe zuerst, nicht fünf gleichzeitig." },
        { q: "Darf ich Kundendaten in KI-Werkzeuge eingeben?", a: "Nur mit klaren Regeln: welche Daten, welcher Dienst, mit Vertrag zur Auftragsverarbeitung und Löschung, wenn sie nicht mehr gebraucht werden. Sensible Daten wie Gesundheit oder Verträge gehören nicht ungeprüft in beliebige Dienste. Im Zweifel vorher fragen." },
        { q: "Ersetzt KI am Ende meine Arbeit?", a: "Sie nimmt dir Routine ab, damit mehr Zeit für Kunden und die eigentliche Arbeit bleibt. Entscheidungen mit Verantwortung, also Preis, Zusage, Absage, schwierige Gespräche, bleiben bei dir. Für Selbstständige ist das oft der Unterschied zwischen Feierabend und Abendschicht." },
      ],
    },
  ],
  quellen: [
    { text: "Bitkom: „Erstmals nutzt die Mehrheit der Unternehmen KI“, Presseinformation vom 14. September 2026; Befragung von 603 Unternehmen ab 20 Beschäftigten, 57 Prozent setzen KI ein, 4 Prozent sagen, KI sei kein Thema", url: "https://www.bitkom.org/Presse/Presseinformation/Erstmals-nutzt-die-Mehrheit-der-Unternehmen-KI" },
    { text: "Pixel56: Abläufe und Regeln aus der Leistungsseite KI-Prozesse und Automatisierung sowie der KI-Agenten-Checkliste, Stand November 2026", url: "/ki-automatisierung" },
    { text: "Eigene Erfahrung aus Automatisierungen für Pixel56-Produkte (kmu-webseiten.de), keine Garantie für Zeitersparnis in anderen Betrieben" },
  ],
};

export default artikel;
