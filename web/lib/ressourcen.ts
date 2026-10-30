/**
 * Datenschicht für die Freebie-Seiten (/ressourcen/*). Die SEO-Checkliste
 * folgt 1:1 der freigegebenen Vorlage; die beiden anderen Varianten sind
 * daraus abgeleitet und werden beim finalen Text-Durchgang geschärft.
 */

export type DocRow = { checked: boolean; text: string };
export type FactCell = { fl: string; title: string; text: string };
export type Faq = { q: string; a: string };

export type Ressource = {
  slug: string;
  eyebrow: string;
  titleStart: string;
  titleEm: string;
  heroSub: string;
  heroPoints: string[];
  docTag: string;
  docPages: string;
  docTitle: string;
  docRows: DocRow[];
  /** Optionales Produkt-Mockup (Pfad unter public/) — ersetzt die abstrakte Dokument-Karte. */
  mockupBild?: string;
  inhaltTag: string;
  inhaltTitle: string;
  inhaltTitleEm: string;
  inhaltNote: string;
  teile: FactCell[];
  /** Für wen die Ressource gedacht ist (drei Karten). */
  fuerWen: { tag: string; title: string; text: string }[];
  /** So wird sie benutzt (drei Schritte). */
  schritte: { nr: string; title: string; text: string }[];
  /** Passende Leistungsseite als nächster Schritt. */
  leistung: { href: string; label: string; text: string };
  faqs: Faq[];
  ctaStart: string;
  ctaEm: string;
};

export const ressourcen: Ressource[] = [
  {
    slug: "seo-checkliste",
    eyebrow: "FREEBIE · SEO-CHECKLISTE",
    titleStart: "Wird deine Website bei Google ",
    titleEm: "gefunden?",
    heroSub:
      "Lokales SEO für Handwerker: sieben Schritte vom Google-Unternehmensprofil bis zur Website, 30 Prüfpunkte zum Abhaken, Textvorlagen für Bewertungen, Selbsttest und Wochenplan. Kostenlos als PDF.",
    heroPoints: [
      "Sieben Schritte, 30 Prüfpunkte, Vorlagen zum Übernehmen",
      "Lokales SEO: Unternehmensprofil, Suchbegriffe, Website, Bewertungen",
      "Sofort umsetzbar — ohne Vorkenntnisse, ohne Agentur",
    ],
    docTag: "Checkliste",
    docPages: "12 SEITEN · PDF",
    docTitle: "SEO-Checkliste für Handwerker",
    docRows: [
      { checked: true, text: "Unternehmensprofil: Name, Kategorien, zehn echte Fotos" },
      { checked: true, text: "Zehn Suchbegriffe nach Leistung + Ort notiert" },
      { checked: false, text: "Seitentitel „Leistung in Stadt | Betrieb“" },
      { checked: false, text: "Bewertungslink als QR auf der Rechnung" },
      { checked: false, text: "…und 26 weitere Prüfpunkte" },
    ],
    mockupBild: "/bilder/freebie-seo-ebook-transparent.webp",
    inhaltTag: "01 — Was drin ist",
    inhaltTitle: "Sieben Schritte, ",
    inhaltTitleEm: "30 Prüfpunkte, ein Wochenplan",
    inhaltNote: "Keine Theorie-Abhandlung — eine Liste zum Durchgehen, mit Vorlagen zum Übernehmen, Notizfeldern und einem Selbsttest.",
    teile: [
      { fl: "Schritte 1 bis 3", title: "Gefunden werden", text: "Google-Unternehmensprofil richtig einrichten (auch ohne Ladenlokal), Suchbegriffe nach Leistung + Ort sammeln, Website lokal lesbar machen: Titel, Überschriften, Leistungs- und Stadtseiten, mit Vorlage." },
      { fl: "Schritte 4 bis 6", title: "Vertrauen und Technik", text: "Bewertungen bitten und beantworten, mit drei Textvorlagen. Verzeichnisse und Partner-Links mit identischen Daten. Ladezeit unter drei Sekunden, Daumen-Test am Handy." },
      { fl: "Schritt 7 + Extras", title: "Dranbleiben und messen", text: "Wochenplan mit 30 Minuten, Selbsttest mit zehn Fragen und Auswertung, Messen mit Search Console und Profil-Statistik, realistischer Fahrplan über sechs Monate." },
    ],
    fuerWen: [
      { tag: "Inhaber", title: "Du willst wissen, wo deine Website steht", text: "Ohne Agentur, ohne Fachbegriffe: Punkt für Punkt prüfen, was Google von deiner Seite erwartet und was fehlt." },
      { tag: "Vor dem Relaunch", title: "Du planst eine neue Website", text: "Die Liste zeigt, was die neue Seite von Anfang an können muss, damit du nicht nach dem Livegang nachbessern musst." },
      { tag: "Lokale Betriebe", title: "Du willst in deiner Stadt gefunden werden", text: "Die Schritte 1, 4 und 7 behandeln das Google-Unternehmensprofil, Bewertungen und regelmäßige Beiträge, die lokalen Hebel mit der größten Wirkung. Seite 2 erklärt, wonach Google lokal entscheidet." },
    ],
    schritte: [
      { nr: "01", title: "Herunterladen", text: "E-Mail eintragen, PDF kommt sofort. Ausdrucken oder am Bildschirm durchgehen." },
      { nr: "02", title: "Punkt für Punkt abhaken", text: "Jeder Schritt nennt seine Prüfpunkte, ein kostenloses Werkzeug zum Testen und den häufigsten Fehler. Vorlagen kannst du direkt übernehmen." },
      { nr: "03", title: "Offene Punkte angehen", text: "Was du selbst erledigen kannst, erledigst du. Für den Rest reicht eine kurze Nachricht an uns." },
    ],
    leistung: { href: "/suchmaschinenoptimierung", label: "SEO-Grundlagen", text: "Wenn mehr offene Punkte übrig bleiben, als du selbst angehen willst: Wir arbeiten die Liste mit dir ab, Technik zuerst." },
    faqs: [
      { q: "Was kostet die Checkliste?", a: "Nichts. Du bekommst sie kostenlos per E-Mail — im Gegenzug landest du auf unserem Verteiler, von dem du dich jederzeit mit einem Klick abmelden kannst." },
      { q: "Brauche ich Vorkenntnisse?", a: "Nein. Die Anleitung ist für Handwerksbetriebe ohne SEO-Wissen geschrieben und nennt kostenlose Werkzeuge, wo du etwas prüfen musst." },
      { q: "Und wenn ich bei Punkten nicht weiterkomme?", a: "Dann kannst du uns jederzeit unverbindlich fragen — das kostenlose Erstgespräch gilt auch für Checklisten-Fragen. Aber es gibt keinerlei Verpflichtung." },
    ],
    ctaStart: "Hol dir die ",
    ctaEm: "Checkliste.",
  },
  {
    slug: "ki-agenten-checkliste",
    eyebrow: "FREEBIE · KI-AGENTEN-CHECKLISTE",
    titleStart: "Wo spart KI in deinem Betrieb ",
    titleEm: "wirklich Zeit?",
    heroSub:
      "Die KI-Agenten-Checkliste zum Durchgehen: acht Aufgaben, die KI heute zuverlässig abnimmt, sechs, bei denen du dir das Geld sparst, ein Selbsttest für deinen Betrieb und ein Plan für die ersten vier Wochen. Kostenlos als PDF.",
    heroPoints: [
      "Ehrliche Einordnung statt KI-Hype: hilft oder lohnt nicht",
      "Selbsttest: Welche Aufgabe in deinem Betrieb zuerst?",
      "Für Handwerk, Dienstleister und Mittelstand, ohne Vorkenntnisse",
    ],
    docTag: "Checkliste",
    docPages: "10 SEITEN · PDF",
    docTitle: "KI-Agenten-Checkliste",
    docRows: [
      { checked: true, text: "Anfragen vorsortieren, Antwortentwurf bereit" },
      { checked: true, text: "Angebote aus Vorlagen vorbereiten" },
      { checked: false, text: "Termine erinnern und bestätigen" },
      { checked: false, text: "Freigabe-Stelle und Datenrahmen geklärt" },
      { checked: false, text: "…und 18 weitere Prüfpunkte" },
    ],
    mockupBild: "/bilder/freebie-ki-ebook.webp",
    inhaltTag: "01 — Was drin ist",
    inhaltTitle: "Fünf Teile, ",
    inhaltTitleEm: "22 Prüfpunkte",
    inhaltNote: "Keine Theorie-Abhandlung — eine Liste zum Durchgehen, mit Notizfeldern, Selbsttest-Tabelle und Vier-Wochen-Plan.",
    teile: [
      { fl: "Teil 1 und 2", title: "Hilft sofort oder lohnt nicht", text: "Acht Aufgaben, die KI heute zuverlässig abnimmt, je mit Heute, Mit KI und Freigabe. Dazu sechs Fälle, bei denen du dir das Geld sparst, ehrlich benannt." },
      { fl: "Teil 3 und 4", title: "Selbsttest und Datenrahmen", text: "Tabelle zum Ausfüllen: Wie oft, wie lange, wer, gibt es Beispiele? Daraus die Reihenfolge. Danach acht Punkte, bevor ein Werkzeug Kundendaten sieht." },
      { fl: "Teil 5", title: "Die ersten vier Wochen", text: "Messen, bauen mit Freigabe, parallel laufen lassen, auswerten. Was du misst, typische Stolpersteine und vier Abläufe, die bei Pixel56 selbst laufen." },
    ],
    fuerWen: [
      { tag: "Inhaber", title: "Du hörst überall von KI und willst wissen, was davon zählt", text: "Teil 1 und 2 trennen Aufgaben, die im Betriebsalltag funktionieren, von Fällen, die mehr kosten, als sie bringen." },
      { tag: "Büro & Verwaltung", title: "Bei dir wiederholen sich jeden Tag dieselben Aufgaben", text: "Anfragen sortieren, Angebote vorbereiten, Termine erinnern, Daten doppelt eintippen: Genau dort setzt die Liste an." },
      { tag: "Vor der Entscheidung", title: "Du willst keinen Werkzeugkauf ohne Plan", text: "Erst der Selbsttest, dann das Werkzeug. Die Tabelle in Teil 3 zeigt in einer halben Stunde, welche Aufgabe sich zuerst lohnt." },
    ],
    schritte: [
      { nr: "01", title: "Herunterladen", text: "E-Mail eintragen, PDF kommt sofort. Am besten ausdrucken und mit der Person durchgehen, die den Büroalltag kennt." },
      { nr: "02", title: "Abhaken und ausfüllen", text: "Teil 1 und 2 abhaken, Selbsttest-Tabelle ausfüllen, Stunden pro Woche ausrechnen. Dauer: eine halbe Stunde." },
      { nr: "03", title: "Klein anfangen", text: "Eine Aufgabe, vier Wochen, Minuten vorher und nachher zählen. Dann entscheiden, ob du ausbaust." },
    ],
    leistung: { href: "/ki-automatisierung", label: "KI-Prozesse & Automatisierung", text: "Wenn du den ersten Prozess gefunden hast: Wir bauen ihn so, dass er zuverlässig läuft und die Freigabe beim Menschen bleibt." },
    faqs: [
      { q: "Was kostet die Checkliste?", a: "Nichts. Du bekommst sie kostenlos per E-Mail — im Gegenzug landest du auf unserem Verteiler, von dem du dich jederzeit mit einem Klick abmelden kannst." },
      { q: "Brauche ich Vorkenntnisse?", a: "Nein. Die Liste nennt keine Werkzeuge, sondern Aufgaben aus dem Betriebsalltag. Jeder Punkt ist so erklärt, dass du ihn ohne KI-Wissen einordnen kannst." },
      { q: "Und wenn ich bei Punkten nicht weiterkomme?", a: "Dann kannst du uns jederzeit unverbindlich fragen — das kostenlose Erstgespräch gilt auch für Checklisten-Fragen. Aber es gibt keinerlei Verpflichtung." },
    ],
    ctaStart: "Hol dir die ",
    ctaEm: "Checkliste.",
  },
  {
    slug: "ki-suche",
    eyebrow: "FREEBIE · LEITFADEN KI-SUCHE",
    titleStart: "Gefunden werden, wenn Kunden ",
    titleEm: "die KI fragen.",
    heroSub:
      "Immer mehr Kunden googeln nicht mehr, sie fragen: Googles KI-Übersichten und KI-Modus, ChatGPT und Co. Der Leitfaden zeigt, woher die Antworten kommen, wie du prüfst, ob dein Betrieb vorkommt, und welche fünf Hebel das ändern. Kostenlos als PDF.",
    heroPoints: [
      "Selbsttest: sechs Fragen an die KI, mit Tabelle zum Eintragen",
      "Fünf Hebel mit 28 Prüfpunkten, Vorlagen und 30-Tage-Plan",
      "Belegte Zahlen statt Hype, für Handwerk und Mittelstand",
    ],
    docTag: "Leitfaden",
    docPages: "14 SEITEN · PDF",
    docTitle: "Leitfaden KI-Suche",
    docRows: [
      { checked: true, text: "Selbsttest in Google KI-Modus und ChatGPT gemacht" },
      { checked: true, text: "Ein Betrieb, ein Name, überall dieselben Daten" },
      { checked: false, text: "Bewertungen mit Inhalt statt nur Sternen" },
      { checked: false, text: "Leistungsseite beantwortet fünf Kundenfragen" },
      { checked: false, text: "…und 24 weitere Prüfpunkte" },
    ],
    mockupBild: "/bilder/freebie-ki-suche.webp",
    inhaltTag: "01 — Was drin ist",
    inhaltTitle: "Fünf Hebel, ",
    inhaltTitleEm: "28 Prüfpunkte, ein Selbsttest",
    inhaltNote: "Keine Theorie-Abhandlung — ein Leitfaden zum Durcharbeiten, mit Tabelle, Vorlagen, Irrtümern und einem Plan für die ersten 30 Tage.",
    teile: [
      { fl: "Seite 2 bis 4", title: "Verstehen und prüfen", text: "Drei belegte Zahlen zur Suche 2026, wie KI-Antworten entstehen, und ein Selbsttest mit sechs Fragen in drei Systemen: Kommt dein Betrieb vor, und welche Quellen nennt die KI?" },
      { fl: "Seite 5 bis 9", title: "Fünf Hebel", text: "Eindeutig sein, Bewertungen mit Inhalt, antwortfähige Website, Belege von außen, technisch erreichbar. Jeder Hebel mit Prüfpunkten, Vorlagen und Schnelltest." },
      { fl: "Seite 10 bis 14", title: "Irrtümer, Messen, Plan", text: "Sechs Versprechen, die Geld kosten. Was heute messbar ist (Search Console, KI-Besucher, Profil). 30-Tage-Plan mit Zuständigkeiten und wie wir es bei pixel56.de selbst gemacht haben." },
    ],
    fuerWen: [
      { tag: "Inhaber", title: "Du willst wissen, ob dein Betrieb in KI-Antworten vorkommt", text: "Der Selbsttest auf Seite 4 beantwortet das in zwanzig Minuten, mit den Quellen, die die KI tatsächlich nennt." },
      { tag: "Nach der SEO-Checkliste", title: "Du hast die Grundlagen und willst den nächsten Schritt", text: "Der Leitfaden setzt auf dem Unternehmensprofil und der Website auf und ergänzt, was für KI-Antworten zusätzlich zählt." },
      { tag: "Vor der Entscheidung", title: "Jemand verspricht dir KI-Optimierung mit Garantie", text: "Seite 10 erklärt, warum das nicht funktioniert, und Seite 11, was sich stattdessen messen lässt." },
    ],
    schritte: [
      { nr: "01", title: "Herunterladen", text: "E-Mail eintragen, PDF kommt sofort. Zum Selbsttest brauchst du nur ein privates Browserfenster und zwanzig Minuten." },
      { nr: "02", title: "Selbsttest machen", text: "Sechs Fragen in Google KI-Modus, ChatGPT und einem dritten System. Eintragen, ob du genannt wirst und welche Quellen auftauchen." },
      { nr: "03", title: "30 Tage, fünf Hebel", text: "Jede Woche ein Schwerpunkt, zwei bis drei Stunden. Danach monatlich wiederholen und die Richtung ablesen." },
    ],
    leistung: { href: "/suchmaschinenoptimierung", label: "SEO-Grundlagen", text: "Wenn du die Hebel nicht selbst umsetzen willst: Wir räumen Daten auf, machen Leistungsseiten antwortfähig und richten die Messung ein, Technik zuerst." },
    faqs: [
      { q: "Was kostet der Leitfaden?", a: "Nichts. Du bekommst ihn kostenlos per E-Mail — im Gegenzug landest du auf unserem Verteiler, von dem du dich jederzeit mit einem Klick abmelden kannst." },
      { q: "Brauche ich Vorkenntnisse?", a: "Nein. Der Leitfaden erklärt in einfachen Worten, wie KI-Antworten entstehen, und nennt bei jedem Punkt, was du selbst machst und was deine Agentur übernimmt." },
      { q: "Woher kommen die Zahlen?", a: "Aus benannten Quellen, die auf der letzten Seite stehen: Sistrix zu KI-Übersichten in Deutschland, Google zum Start des KI-Modus, OpenAI zu ChatGPT-Nutzern, Google-Hilfe zur Search Console. Stand Oktober 2026." },
    ],
    ctaStart: "Hol dir den ",
    ctaEm: "Leitfaden.",
  },
  {
    slug: "tagesplaner",
    eyebrow: "FREEBIE · TAGESPLANER",
    titleStart: "Fokussierte Tage statt ",
    titleEm: "Zettelwirtschaft.",
    heroSub:
      "Die Planungs-Vorlage, mit der wir selbst arbeiten — ein Blatt pro Tag, klare Prioritäten, kein Tool-Overhead. Kostenlos als PDF.",
    heroPoints: [
      "Ein Blatt pro Tag — ausdrucken oder digital ausfüllen",
      "Prioritäten zuerst, statt To-do-Listen ohne Ende",
      "Die Vorlage, mit der wir selbst arbeiten",
    ],
    docTag: "Vorlage",
    docPages: "1 SEITE · PDF",
    mockupBild: "/bilder/freebie-tagesplaner.webp",
    docTitle: "Tagesplaner",
    docRows: [
      { checked: true, text: "Top-3-Prioritäten des Tages" },
      { checked: true, text: "Zeitblöcke statt Dauer-Multitasking" },
      { checked: false, text: "Termine & feste Slots" },
      { checked: false, text: "Notizen & Übertrag auf morgen" },
      { checked: false, text: "…direkt loslegen" },
    ],
    inhaltTag: "01 — Was drin ist",
    inhaltTitle: "Ein Blatt, ",
    inhaltTitleEm: "klarer Tag",
    inhaltNote: "Kein Produktivitäts-System zum Studieren — eine Vorlage zum sofort Benutzen.",
    teile: [
      { fl: "Teil 1", title: "Prioritäten zuerst", text: "Die drei Dinge, die heute wirklich zählen — bevor der Posteingang das Steuer übernimmt." },
      { fl: "Teil 2", title: "Zeitblöcke", text: "Feste Slots für konzentrierte Arbeit statt Dauer-Unterbrechung." },
      { fl: "Teil 3", title: "Abschluss & Übertrag", text: "Kurzer Tagesabschluss, damit morgen nicht bei null beginnt." },
    ],
    fuerWen: [
      { tag: "Inhaber", title: "Dein Tag besteht aus Unterbrechungen", text: "Telefon, Baustelle, Büro: Der Planer hilft, die drei Dinge festzuhalten, die heute wirklich erledigt werden müssen." },
      { tag: "Selbstständige", title: "Du arbeitest allein und ohne Struktur von außen", text: "Ein Blatt pro Tag ersetzt kein Projektmanagement, aber es sorgt dafür, dass der Tag nicht vom Posteingang bestimmt wird." },
      { tag: "Teams", title: "Ihr wollt eine einfache gemeinsame Routine", text: "Jeder füllt morgens sein Blatt aus, abends den Übertrag. Mehr System braucht es oft nicht." },
    ],
    schritte: [
      { nr: "01", title: "Herunterladen", text: "E-Mail eintragen, PDF kommt sofort. Ausdrucken oder digital auf dem Tablet ausfüllen." },
      { nr: "02", title: "Morgens drei Prioritäten", text: "Bevor der Posteingang aufgeht: die drei Dinge notieren, die heute zählen, und Zeitblöcke dafür reservieren." },
      { nr: "03", title: "Abends übertragen", text: "Kurzer Abschluss, offene Punkte auf das Blatt für morgen. So beginnt kein Tag bei null." },
    ],
    leistung: { href: "/ki-automatisierung", label: "KI-Prozesse & Automatisierung", text: "Wenn auf deinem Blatt jeden Tag dieselben Routineaufgaben stehen: Genau die lassen sich oft automatisieren." },
    faqs: [
      { q: "Was kostet der Tagesplaner?", a: "Nichts. Du bekommst ihn kostenlos per E-Mail — im Gegenzug landest du auf unserem Verteiler, von dem du dich jederzeit mit einem Klick abmelden kannst." },
      { q: "Digital oder ausdrucken?", a: "Beides. Das PDF ist zum Ausdrucken gedacht, funktioniert aber auch digital ausgefüllt — z. B. auf dem Tablet." },
      { q: "Warum verschenkt ihr das?", a: "Weil es zeigt, wie wir arbeiten. Wenn dir die Vorlage hilft, ist das der beste erste Eindruck, den wir hinterlassen können." },
    ],
    ctaStart: "Hol dir den ",
    ctaEm: "Tagesplaner.",
  },
];

export function getRessource(slug: string): Ressource | undefined {
  return ressourcen.find((r) => r.slug === slug);
}
