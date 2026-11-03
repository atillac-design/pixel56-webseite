import type { Artikel } from "@/lib/blog-typen";

const artikel: Artikel = {
  slug: "ki-uebersichten-weniger-klicks-mehr-kunden",
  cover: "c2",
  kategorie: "SEO",
  titel: "Googles KI-Übersichten: Weniger Klicks heißt nicht weniger Kunden",
  seoTitel: "KI-Übersichten: Klicks sinken, Kunden nicht",
  teaser:
    "Rund jede fünfte Google-Suche in Deutschland zeigt oben eine KI-Antwort. Was das für Handwerk und Mittelstand bedeutet, welche Klicks wirklich fehlen und woran du erkennst, ob dein Betrieb genannt wird.",
  lesezeit: 8,
  datum: "2026-11-03",
  intro:
    "Seit Google oben über den Treffern eine fertige Antwort anzeigt, hören wir im Erstgespräch oft denselben Satz: „Die Besucherzahlen gehen runter, lohnt sich die Website überhaupt noch?“ Die ehrliche Antwort: Ein Teil der Klicks ist weg, und er kommt nicht zurück. Aber es sind nicht die Klicks, aus denen Aufträge wurden. Dieser Artikel zeigt, welche Suchen betroffen sind, wie eine KI-Antwort entsteht und was du tun kannst, damit dein Betrieb darin vorkommt.",
  body: [
    { typ: "h2", text: "Was sich an der Google-Suche verändert hat" },
    {
      typ: "p",
      text: "Drei Dinge sind seit 2025 anders. Erstens zeigt Google bei rund 20 Prozent der Suchanfragen in Deutschland oben eine KI-Übersicht, einen von Google geschriebenen Antwortkasten mit Links zu den Quellen. Im August 2025 waren es noch rund 17 Prozent, Anfang 2026 rund 20. Bei Fragen und seltenen Begriffen liegt der Anteil deutlich höher. Zweitens gibt es seit Oktober 2025 auch in Deutschland den KI-Modus: ein eigener Reiter in der Google-Suche, in dem du wie in einem Chat nachfragst und Antworten statt einer Trefferliste bekommst. Drittens fragen viele Menschen gar nicht mehr Google, sondern ChatGPT, das laut OpenAI im Februar 2026 über 900 Millionen Menschen pro Woche nutzten.",
    },
    {
      typ: "p",
      text: "Für dich als Betrieb heißt das: Deine Kunden stellen ihre Frage oft nicht mehr als Stichwort, sondern als ganzen Satz, abends am Handy, mit dem Problem vor Augen. Und sie bekommen eine Antwort, bevor sie irgendeine Website sehen.",
    },
    {
      typ: "bild",
      src: "/bilder/foto-abend-laptop.webp",
      alt: "Eine Person sitzt abends am Laptop und tippt eine Frage ein",
      text: "Die Frage kommt abends, mit dem Problem vor Augen. Ob die KI deinen Betrieb nennt, entscheidet sich vorher.",
      quelle: "Stockfoto",
    },
    { typ: "h2", text: "Welche Klicks wirklich wegfallen" },
    {
      typ: "p",
      text: "Hier lohnt sich ein genauer Blick, denn nicht jede Suche ist gleich viel wert. Bei reinen Wissensfragen wie „Wie oft muss eine Dachrinne gereinigt werden?“ steht die Antwort jetzt direkt in der KI-Übersicht. Weniger Menschen klicken auf eine Website. Diese Klicks fehlen in der Statistik, aber ehrlich gesagt: Aus ihnen wurden auch vorher kaum Aufträge. Wer wissen will, wie oft man eine Dachrinne reinigt, will meist selbst auf die Leiter.",
    },
    {
      typ: "p",
      text: "Bei lokalen Fragen wie „Welcher Dachdecker in Koblenz ist empfehlenswert?“ oder „Wer macht Flachdachsanierung mit Notdienst in Neuwied?“ sieht es anders aus. Hier nennt die KI zwei oder drei Betriebe, mit Begründung und Quelle. Wer genannt wird, bekommt den Anruf. Wer nicht genannt wird, existiert für diesen Kunden nicht. Das ist die Suche, die über Aufträge entscheidet, und sie ist nicht weniger geworden, sondern wichtiger.",
    },
    {
      typ: "grafik",
      name: "klick-verlauf",
      text: "Schematisch: Wissensfragen verlieren Klicks, lokale Fragen entscheiden über den Anruf. Keine Messwerte, sondern das Muster, das wir in Kundenprojekten sehen.",
    },
    { typ: "h2", text: "Wie eine KI-Antwort überhaupt entsteht" },
    {
      typ: "p",
      text: "Ob Google, ChatGPT oder ein anderer Assistent: Hinter jeder Antwort auf eine lokale Frage stecken dieselben drei Zutaten. Erstens das gelernte Wissen des Modells, also Texte aus dem Netz mit Stand irgendwann in der Vergangenheit. Das reicht für „Wie funktioniert eine Wärmepumpe?“, aber nicht für „Wer baut sie mir in Lahnstein ein?“. Zweitens eine Live-Suche im Moment der Frage: Die KI liest ein paar Seiten und baut daraus die Antwort, mit Quellenangabe. Drittens bei Google die eigenen Daten aus Unternehmensprofil, Karten und Bewertungen.",
    },
    {
      typ: "p",
      text: "Die KI erfindet keine Betriebe. Sie zieht aus dem, was sie findet: dein Google-Unternehmensprofil, deine Website, Bewertungen, Verzeichnisse, Presse. Zwei der drei Zutaten kannst du beeinflussen, und genau da setzt die Arbeit an.",
    },
    {
      typ: "grafik",
      name: "ki-antwort",
      text: "Drei Quellen fließen in eine Antwort: Unternehmensprofil, Website und Belege von außen. Die KI liest, vergleicht und nennt, was belegt ist.",
    },
    { typ: "h2", text: "Was eine KI belohnt: eindeutig, belegt, antwortfähig" },
    {
      typ: "ul",
      items: [
        "Eindeutig: ein Betrieb, ein Name, eine Adresse, überall gleich geschrieben. Die KI muss dich als einen bestimmten Betrieb erkennen können, nicht raten.",
        "Belegt: Andere sagen es auch. Bewertungen mit Inhalt statt nur Sternen, Einträge bei Innung und Verzeichnissen, Erwähnungen in Presse und auf Partnerseiten. Eine Quelle ist eine Behauptung, fünf sind ein Beleg.",
        "Antwortfähig: Deine Seiten beantworten echte Fragen in ganzen Sätzen. Kosten, Dauer, Ablauf, Einzugsgebiet. Was die KI zitieren kann, zitiert sie. Werbesprache kann sie nicht zitieren.",
      ],
    },
    {
      typ: "p",
      html: "Das sind dieselben Grundlagen wie bei der klassischen <a href=\"/suchmaschinenoptimierung\">Suchmaschinenoptimierung</a>, nur mit anderer Gewichtung: Bewertungstexte und Fragen-Antwort-Abschnitte zählen mehr, Schlagwort-Wiederholungen gar nicht mehr. Wer sein <a href=\"/blog/google-business-profil-optimieren\">Google-Unternehmensprofil</a> gepflegt hat, steht schon gut da.",
      text: "",
    },
    {
      typ: "cta",
      titel: "Leitfaden: Gefunden werden, wenn Kunden die KI fragen",
      text: "16 Seiten mit Selbsttest, fünf Hebeln, 28 Prüfpunkten, Vorlagen und einer Kurzfassung zum Ausdrucken. Kostenlos als PDF.",
      href: "/ressourcen/ki-suche",
      label: "Leitfaden herunterladen",
    },
    { typ: "h2", text: "Der Selbsttest: Kommt dein Betrieb vor?" },
    {
      typ: "p",
      text: "Du brauchst zwanzig Minuten und ein privates Browserfenster. Stell sechs Fragen in drei Systemen: im Google-KI-Modus, in ChatGPT und in einem dritten wie Perplexity oder Copilot. Zum Beispiel: „Welcher [Gewerk] in [Stadt] ist empfehlenswert?“, „Was kostet [Leistung] in [Stadt] ungefähr?“, „Wer macht [Leistung] mit Notdienst in [Stadt]?“ und „[Dein Betriebsname] Erfahrungen“. Trag ein, ob dein Betrieb genannt wird und welche Quellen die Antwort nennt.",
    },
    {
      typ: "p",
      text: "Drei Ergebnisse sind möglich. Du wirst genannt: Gut, dann sichere die Quelle ab, die dich getragen hat, und wiederhole den Test monatlich. Wettbewerber werden genannt, du nicht: Öffne deren Quellen. Meist siehst du sofort, was fehlt, etwa mehr Bewertungen mit Text, eine Seite, die die Frage beantwortet, ein Innungs- oder Presseeintrag. Niemand wird genannt: Die KI findet in deiner Stadt zu wenig Belegbares. Wer jetzt die Grundlagen umsetzt, ist der Erste, den sie nennen kann.",
    },
    { typ: "h2", text: "Woran du merkst, dass es wirkt" },
    {
      typ: "p",
      text: "Die Werkzeuge hinken der Technik hinterher, aber drei Dinge kannst du heute messen. In der Google Search Console zählen Klicks aus KI-Übersichten und KI-Modus seit Juni 2025 im normalen Leistungsbericht mit. Seit Juni 2026 gibt es dort zusätzlich den Bericht „Generative KI“, der Impressionen aus KI-Übersichten und KI-Modus getrennt zeigt, noch in der Testphase und nicht in jedem Konto sichtbar. Wichtig: Impressionen steigen oft, während die Klicks bei Wissensfragen sinken. Das ist kein Alarm, solange Anfragen kommen.",
    },
    {
      typ: "p",
      html: "Zweitens die Besucher aus KI-Systemen: In deiner Website-Statistik nach Verweisen von chatgpt.com, perplexity.ai oder copilot.microsoft.com filtern. Die Zahlen sind klein, aber diese Besucher kommen mit einer Empfehlung. Drittens die Zahlen, die am Ende Aufträge sind: Anrufe, Routen und Website-Klicks im Unternehmensprofil. Ob deine Seite technisch überhaupt lesbar ist, zeigt dir unser kostenloser <a href=\"/website-check\">Website-Check</a> in dreißig Sekunden.",
      text: "",
    },
    { typ: "h2", text: "Realistische Erwartung" },
    {
      typ: "p",
      html: "Änderungen am Profil und neue Bewertungen zeigen sich in KI-Antworten oft innerhalb weniger Wochen. Neue Seiteninhalte brauchen, wie bei der klassischen Suche, ein bis drei Monate. Die Antworten bleiben schwankend: Dieselbe Frage, zwei Minuten später, andere Betriebe. Das ist normal. Ziel ist, regelmäßig genannt zu werden, nicht jedes Mal. Wer dir Festes verspricht, etwa „in vier Wochen von ChatGPT empfohlen“, verkauft dir etwas, das niemand kontrollieren kann. Was wir stattdessen tun, steht auf unserer Seite zu <a href=\"/webdesign\">Webdesign</a>: Seiten, die Fragen beantworten, sauber aufgebaut und schnell.",
      text: "",
    },
    {
      typ: "faq",
      items: [
        { q: "Lohnt sich eine Website noch, wenn Google die Antworten selbst gibt?", a: "Ja, mehr als vorher. Die KI zitiert Websites. Ohne eine Seite, die Fragen in ganzen Sätzen beantwortet, gibt es nichts zu zitieren. Wegfallen nur die Klicks bei Wissensfragen, aus denen ohnehin selten Aufträge wurden." },
        { q: "Kann ich bezahlen, damit die KI meinen Betrieb nennt?", a: "Nein. Weder Google noch OpenAI verkaufen Plätze in KI-Antworten. Niemand kontrolliert, was ein KI-System nennt. Seriös ist, die Grundlagen umzusetzen und monatlich zu messen. Garantien sind ein Warnzeichen." },
        { q: "Soll ich KI-Zugriffe auf meine Website sperren?", a: "Für die Sichtbarkeit nicht. Googles KI-Übersichten nutzen den normalen Google-Zugriff; wer den sperrt, ist aus der Suche raus. Die ChatGPT-Suche hat einen eigenen Zugriff, getrennt vom Training. Bewusst entscheiden, nicht pauschal zumachen." },
        { q: "Wie oft sollte ich den Selbsttest wiederholen?", a: "Einmal im Monat, am selben Tag, mit denselben sechs Fragen in drei Systemen. Nach drei Monaten siehst du eine Richtung, nach sechs einen Trend." },
      ],
    },
  ],
  quellen: [
    { text: "Sistrix: Anteil der Suchanfragen mit KI-Übersicht in Deutschland, Auswertung von über 100 Millionen Suchbegriffen; rund 17 % im August 2025, rund 20 % Anfang 2026", url: "https://www.sistrix.de/frag-sistrix/ai-grundlagen/ai-overviews" },
    { text: "Google: Start des KI-Modus in Deutschland und weiteren europäischen Ländern, Oktober 2025" },
    { text: "OpenAI: über 900 Millionen wöchentlich aktive Nutzer von ChatGPT, Mitteilung vom 27. Februar 2026" },
    { text: "Google Search Console: Klicks aus KI-Übersichten seit Juni 2025 im Leistungsbericht; Bericht „Generative KI“ seit Juni 2026 (Testphase)" },
    { text: "OpenAI: Übersicht der Zugriffe OAI-SearchBot und GPTBot", url: "https://platform.openai.com/docs/bots" },
  ],
};

export default artikel;
