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
      "Die SEO-Checkliste zum Selbst-Abhaken — dieselben Punkte, die wir bei jedem Kundenprojekt prüfen. Kostenlos als PDF.",
    heroPoints: [
      "Alle technischen Grundlagen, die Google erwartet",
      "Lokales SEO: Google Business Profil richtig nutzen",
      "Sofort umsetzbar — ohne Vorkenntnisse, ohne Agentur",
    ],
    docTag: "Checkliste",
    docPages: "12 SEITEN · PDF",
    docTitle: "SEO-Checkliste",
    docRows: [
      { checked: true, text: "Ladezeit unter 3 Sekunden" },
      { checked: true, text: "Mobile Darstellung fehlerfrei" },
      { checked: false, text: "Google Business Profil vollständig" },
      { checked: false, text: "Meta-Titel & Beschreibungen gesetzt" },
      { checked: false, text: "…und 26 weitere Prüfpunkte" },
    ],
    mockupBild: "/bilder/freebie-seo-ebook-transparent.webp",
    inhaltTag: "01 — Was drin ist",
    inhaltTitle: "Drei Bereiche, ",
    inhaltTitleEm: "30 Prüfpunkte",
    inhaltNote: "Keine Theorie-Abhandlung — eine Liste zum Durchgehen, Punkt für Punkt.",
    teile: [
      { fl: "Teil 1", title: "Technisches Fundament", text: "Ladezeit, mobile Darstellung, Struktur — die Basis, ohne die kein Ranking entsteht." },
      { fl: "Teil 2", title: "Lokale Sichtbarkeit", text: "Google Business Profil, einheitliche Adressdaten, Bewertungen als Rankingfaktor." },
      { fl: "Teil 3", title: "Inhalte & Pflege", text: "Meta-Daten, Seitentitel und der Rhythmus, der Rankings hält statt verlieren lässt." },
    ],
    fuerWen: [
      { tag: "Inhaber", title: "Du willst wissen, wo deine Website steht", text: "Ohne Agentur, ohne Fachbegriffe: Punkt für Punkt prüfen, was Google von deiner Seite erwartet und was fehlt." },
      { tag: "Vor dem Relaunch", title: "Du planst eine neue Website", text: "Die Liste zeigt, was die neue Seite von Anfang an können muss, damit du nicht nach dem Livegang nachbessern musst." },
      { tag: "Lokale Betriebe", title: "Du willst in deiner Stadt gefunden werden", text: "Teil 2 behandelt das Google-Unternehmensprofil, Adressdaten und Bewertungen, die lokalen Hebel mit der größten Wirkung." },
    ],
    schritte: [
      { nr: "01", title: "Herunterladen", text: "E-Mail eintragen, PDF kommt sofort. Ausdrucken oder am Bildschirm durchgehen." },
      { nr: "02", title: "Punkt für Punkt prüfen", text: "Jeder Prüfpunkt erklärt, worum es geht und wie du ihn ohne Vorkenntnisse selbst testest." },
      { nr: "03", title: "Offene Punkte angehen", text: "Was du selbst erledigen kannst, erledigst du. Für den Rest reicht eine kurze Nachricht an uns." },
    ],
    leistung: { href: "/suchmaschinenoptimierung", label: "SEO-Grundlagen", text: "Wenn mehr offene Punkte übrig bleiben, als du selbst angehen willst: Wir arbeiten die Liste mit dir ab, Technik zuerst." },
    faqs: [
      { q: "Was kostet die Checkliste?", a: "Nichts. Du bekommst sie kostenlos per E-Mail — im Gegenzug landest du auf unserem Verteiler, von dem du dich jederzeit mit einem Klick abmelden kannst." },
      { q: "Brauche ich Vorkenntnisse?", a: "Nein. Jeder Prüfpunkt ist so erklärt, dass du ihn ohne SEO-Wissen selbst checken kannst — inklusive kostenloser Tools, wo nötig." },
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
      "Die KI-Agenten-Checkliste zum Selbst-Durchgehen — wo KI im Betriebsalltag tatsächlich hilft und wo sie nur Spielerei ist. Kostenlos als PDF.",
    heroPoints: [
      "Ehrliche Einordnung statt KI-Hype",
      "Konkrete Einsatzfälle für kleine und mittlere Betriebe",
      "Sofort umsetzbar — ohne Vorkenntnisse, ohne Agentur",
    ],
    docTag: "Checkliste",
    docPages: "10 SEITEN · PDF",
    docTitle: "KI-Agenten-Checkliste",
    docRows: [
      { checked: true, text: "Wiederkehrende Anfragen identifiziert" },
      { checked: true, text: "Texte & Antworten, die sich wiederholen" },
      { checked: false, text: "Terminvereinbarung automatisierbar?" },
      { checked: false, text: "Datenschutz-Rahmen geklärt" },
      { checked: false, text: "…und weitere Prüfpunkte" },
    ],
    mockupBild: "/bilder/freebie-ki-ebook.webp",
    inhaltTag: "01 — Was drin ist",
    inhaltTitle: "Drei Bereiche, ",
    inhaltTitleEm: "ehrlich eingeordnet",
    inhaltNote: "Keine Theorie-Abhandlung — eine Liste zum Durchgehen, Punkt für Punkt.",
    teile: [
      { fl: "Teil 1", title: "Wo KI sofort hilft", text: "Wiederkehrende Aufgaben, die sich heute schon zuverlässig automatisieren lassen." },
      { fl: "Teil 2", title: "Wo es sich (noch) nicht lohnt", text: "Einsatzfälle, die mehr Aufwand machen als sie sparen — ehrlich benannt." },
      { fl: "Teil 3", title: "So startest du", text: "Der pragmatische Einstieg ohne Projektrisiko: klein anfangen, messen, ausbauen." },
    ],
    fuerWen: [
      { tag: "Inhaber", title: "Du hörst überall von KI und willst wissen, was davon zählt", text: "Die Liste trennt Einsatzfälle, die im Betriebsalltag funktionieren, von Spielereien, die nach zwei Wochen niemand mehr öffnet." },
      { tag: "Büro & Verwaltung", title: "Bei dir wiederholen sich jeden Tag dieselben Aufgaben", text: "Anfragen sortieren, Antworten schreiben, Angebote vorbereiten: Genau dort setzt die Checkliste an." },
      { tag: "Vor der Entscheidung", title: "Du willst keinen Werkzeugkauf ohne Plan", text: "Erst der Prozess, dann das Werkzeug. Die Liste hilft, den Hebel zu finden, bevor Geld fließt." },
    ],
    schritte: [
      { nr: "01", title: "Herunterladen", text: "E-Mail eintragen, PDF kommt sofort. Am besten zusammen mit der Person durchgehen, die den Alltag im Büro kennt." },
      { nr: "02", title: "Aufgaben markieren", text: "Welche Arbeiten laufen jeden Tag gleich ab? Die Checkliste führt dich durch die typischen Kandidaten." },
      { nr: "03", title: "Klein anfangen", text: "Ein Prozess, ein Ziel, vier Wochen testen. Dann messen und entscheiden, ob es ausgebaut wird." },
    ],
    leistung: { href: "/ki-automatisierung", label: "KI-Prozesse & Automatisierung", text: "Wenn du den ersten Prozess gefunden hast: Wir bauen ihn so, dass er zuverlässig läuft und die Freigabe beim Menschen bleibt." },
    faqs: [
      { q: "Was kostet die Checkliste?", a: "Nichts. Du bekommst sie kostenlos per E-Mail — im Gegenzug landest du auf unserem Verteiler, von dem du dich jederzeit mit einem Klick abmelden kannst." },
      { q: "Brauche ich Vorkenntnisse?", a: "Nein. Jeder Punkt ist so erklärt, dass du ihn ohne KI-Wissen einordnen kannst." },
      { q: "Und wenn ich bei Punkten nicht weiterkomme?", a: "Dann kannst du uns jederzeit unverbindlich fragen — das kostenlose Erstgespräch gilt auch für Checklisten-Fragen. Aber es gibt keinerlei Verpflichtung." },
    ],
    ctaStart: "Hol dir die ",
    ctaEm: "Checkliste.",
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
