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
  inhaltTag: string;
  inhaltTitle: string;
  inhaltTitleEm: string;
  inhaltNote: string;
  teile: FactCell[];
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
    inhaltTag: "01 — Was drin ist",
    inhaltTitle: "Drei Bereiche, ",
    inhaltTitleEm: "30 Prüfpunkte",
    inhaltNote: "Keine Theorie-Abhandlung — eine Liste zum Durchgehen, Punkt für Punkt.",
    teile: [
      { fl: "Teil 1", title: "Technisches Fundament", text: "Ladezeit, mobile Darstellung, Struktur — die Basis, ohne die kein Ranking entsteht." },
      { fl: "Teil 2", title: "Lokale Sichtbarkeit", text: "Google Business Profil, einheitliche Adressdaten, Bewertungen als Rankingfaktor." },
      { fl: "Teil 3", title: "Inhalte & Pflege", text: "Meta-Daten, Seitentitel und der Rhythmus, der Rankings hält statt verlieren lässt." },
    ],
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
    inhaltTag: "01 — Was drin ist",
    inhaltTitle: "Drei Bereiche, ",
    inhaltTitleEm: "ehrlich eingeordnet",
    inhaltNote: "Keine Theorie-Abhandlung — eine Liste zum Durchgehen, Punkt für Punkt.",
    teile: [
      { fl: "Teil 1", title: "Wo KI sofort hilft", text: "Wiederkehrende Aufgaben, die sich heute schon zuverlässig automatisieren lassen." },
      { fl: "Teil 2", title: "Wo es sich (noch) nicht lohnt", text: "Einsatzfälle, die mehr Aufwand machen als sie sparen — ehrlich benannt." },
      { fl: "Teil 3", title: "So startest du", text: "Der pragmatische Einstieg ohne Projektrisiko: klein anfangen, messen, ausbauen." },
    ],
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
