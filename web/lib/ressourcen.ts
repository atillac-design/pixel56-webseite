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
      "Lokales SEO für Handwerker: sieben Schritte zum Abhaken, von Google-Unternehmensprofil bis Wochenplan. Dieselben Punkte, die wir bei Kundenprojekten prüfen. Kostenlos als PDF.",
    heroPoints: [
      "Sieben Schritte mit Prüfpunkten zum Abhaken",
      "Lokales SEO: Google-Unternehmensprofil, Keywords, Bewertungen",
      "Sofort umsetzbar — ohne Vorkenntnisse, ohne Agentur",
    ],
    docTag: "Checkliste",
    docPages: "6 SEITEN · PDF",
    docTitle: "Lokales SEO für Handwerker",
    docRows: [
      { checked: true, text: "Google-Unternehmensprofil eingerichtet" },
      { checked: true, text: "Lokale Keywords gesammelt" },
      { checked: false, text: "Meta-Titel & Beschreibungen optimiert" },
      { checked: false, text: "Ladezeit unter 3 Sekunden" },
      { checked: false, text: "…und 21 weitere Prüfpunkte" },
    ],
    mockupBild: "/bilder/freebie-seo-ebook-transparent.webp",
    inhaltTag: "01 — Was drin ist",
    inhaltTitle: "Sieben Schritte, ",
    inhaltTitleEm: "25 Prüfpunkte, ein Wochenplan",
    inhaltNote: "Keine Theorie-Abhandlung — eine Liste zum Durchgehen, Punkt für Punkt, mit einem Tipp pro Schritt.",
    teile: [
      { fl: "Schritte 1 bis 3", title: "Gefunden werden", text: "Google-Unternehmensprofil einrichten, lokale Keywords recherchieren, Website lokal optimieren: Titel, Überschriften, Leistungs- und Stadtseiten." },
      { fl: "Schritte 4 bis 6", title: "Vertrauen und Technik", text: "Bewertungen sammeln und beantworten, Verzeichnisse und Partner-Links, Website mobil und unter drei Sekunden Ladezeit." },
      { fl: "Schritt 7 + Plan", title: "Dranbleiben", text: "Beiträge im Unternehmensprofil, Inhalte aktualisieren, dazu ein Wochenplan mit 30 Minuten SEO pro Woche." },
    ],
    fuerWen: [
      { tag: "Inhaber", title: "Du willst wissen, wo deine Website steht", text: "Ohne Agentur, ohne Fachbegriffe: Punkt für Punkt prüfen, was Google von deiner Seite erwartet und was fehlt." },
      { tag: "Vor dem Relaunch", title: "Du planst eine neue Website", text: "Die Liste zeigt, was die neue Seite von Anfang an können muss, damit du nicht nach dem Livegang nachbessern musst." },
      { tag: "Lokale Betriebe", title: "Du willst in deiner Stadt gefunden werden", text: "Die Schritte 1, 4 und 7 behandeln das Google-Unternehmensprofil, Bewertungen und regelmäßige Beiträge, die lokalen Hebel mit der größten Wirkung." },
    ],
    schritte: [
      { nr: "01", title: "Herunterladen", text: "E-Mail eintragen, PDF kommt sofort. Ausdrucken oder am Bildschirm durchgehen." },
      { nr: "02", title: "Punkt für Punkt abhaken", text: "Jeder Schritt nennt die Prüfpunkte und ein kostenloses Werkzeug, mit dem du sie selbst testest." },
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
    titleStart: "Dein erster KI-Agent, ",
    titleEm: "in sieben Schritten.",
    heroSub:
      "Die 7-Schritte-Anleitung für deinen ersten KI-Agenten: Ziel festlegen, Werkzeug wählen, einrichten, testen, live schalten, verbessern. Mit Notizfeldern zum Ausfüllen. Kostenlos als PDF.",
    heroPoints: [
      "Sieben Schritte mit Beispielen und Notizfeldern",
      "Anfragen, Terminerinnerungen, Website-Chat: konkrete Einsatzfälle",
      "Für Selbstständige ohne technisches Vorwissen",
    ],
    docTag: "Checkliste",
    docPages: "18 SEITEN · PDF",
    docTitle: "KI-Agenten einrichten: 7 Schritte",
    docRows: [
      { checked: true, text: "Ziel festgelegt: Was soll der Agent abnehmen?" },
      { checked: true, text: "Werkzeug gewählt und verbunden" },
      { checked: false, text: "Ablauf gebaut und getestet" },
      { checked: false, text: "Live geschaltet, Kunden informiert" },
      { checked: false, text: "Datenschutz-Hinweise umgesetzt" },
    ],
    mockupBild: "/bilder/freebie-ki-ebook.webp",
    inhaltTag: "01 — Was drin ist",
    inhaltTitle: "Sieben Schritte, ",
    inhaltTitleEm: "vom Ziel bis zum laufenden Agenten",
    inhaltNote: "Keine Theorie-Abhandlung — eine Anleitung zum Durcharbeiten, mit Beispiel, Tipp und Notizfeld je Schritt.",
    teile: [
      { fl: "Schritte 1 und 2", title: "Ziel und Werkzeug", text: "Welche Aufgabe raubt die meiste Zeit? Dann ein passendes Werkzeug für Social Media, SMS oder Website-Chat wählen, mit Hinweisen zu Kosten und Datenschutz." },
      { fl: "Schritte 3 bis 5", title: "Einrichten und testen", text: "Konto verbinden, einen ersten Ablauf bauen (Begrüßung, Antwort, Angebot), dann mit echten Fragen und Unsinn-Eingaben testen." },
      { fl: "Schritte 6 und 7", title: "Live und besser werden", text: "Veröffentlichen, Kunden informieren, Auswertung lesen und nachschärfen. Dazu Bonus-Tipps zu DSGVO, Eskalation an einen Menschen und CRM-Anbindung." },
    ],
    fuerWen: [
      { tag: "Selbstständige", title: "Du beantwortest dieselben Fragen jeden Tag", text: "Preise, Verfügbarkeit, Terminwünsche auf Instagram, WhatsApp oder der Website: Genau dort setzt der erste Agent an." },
      { tag: "Terminbetriebe", title: "Bei dir platzen Termine, weil niemand erinnert", text: "Schritt 4 zeigt am Beispiel, wie Terminerinnerungen per SMS automatisch rausgehen und Kunden mit einem Wort bestätigen." },
      { tag: "Vor der Entscheidung", title: "Du willst erst klein testen", text: "Die Anleitung startet mit kostenlosen Plänen und einem einzigen Ablauf. Ausbauen kannst du, wenn es sich bewährt." },
    ],
    schritte: [
      { nr: "01", title: "Herunterladen", text: "E-Mail eintragen, PDF kommt sofort. Ausdrucken lohnt sich, die Notizfelder sind zum Ausfüllen gedacht." },
      { nr: "02", title: "Schritt für Schritt durcharbeiten", text: "Ziel aufschreiben, Werkzeug wählen, Ablauf bauen. Jeder Schritt hat ein Beispiel, das du abwandeln kannst." },
      { nr: "03", title: "Klein anfangen", text: "Ein Agent, eine Aufgabe, ein paar Wochen testen. Dann auswerten und entscheiden, ob du ausbaust." },
    ],
    leistung: { href: "/ki-automatisierung", label: "KI-Prozesse & Automatisierung", text: "Wenn du den ersten Prozess gefunden hast: Wir bauen ihn so, dass er zuverlässig läuft und die Freigabe beim Menschen bleibt." },
    faqs: [
      { q: "Was kostet die Checkliste?", a: "Nichts. Du bekommst sie kostenlos per E-Mail — im Gegenzug landest du auf unserem Verteiler, von dem du dich jederzeit mit einem Klick abmelden kannst." },
      { q: "Brauche ich Vorkenntnisse?", a: "Nein. Die Anleitung ist für Selbstständige ohne technisches Vorwissen geschrieben und zeigt jeden Schritt am Beispiel eines konkreten Werkzeugs." },
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
