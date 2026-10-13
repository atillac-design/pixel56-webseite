/**
 * Leistungsspezifische Inhalte für die Standortseiten. Jede der fünf
 * Leistungen hat eigene Texte, Bausteine, Abläufe und Fragen. Der lokale
 * Teil kommt aus lib/standorte.ts und dem Stadt-Absatz der alten Seite.
 */

import { serviceRoutes } from "@/lib/routes";

export type StandortFlow = { b: string; small: string };
export type StandortBaustein = { nr: string; title: string; text: string };
export type StandortSchritt = { nr: string; title: string; text: string; gets: string };
export type StandortFaq = { q: string; a: string };

export type StandortLeistung = {
  key: string;
  kurz: string;
  route: string;
  heroLine: string;
  /** Kurzer Titelzusatz als Ersatz für heroLine, wenn der Stadtname lang ist. */
  titleShort: string;
  heroText: (stadt: string) => string;
  /** Meta-Beschreibung, höchstens 155 Zeichen inklusive Stadtname. */
  metaText: (stadt: string) => string;
  proof: string[];
  boardTop: string;
  flow: StandortFlow[];
  signals: StandortFlow[];
  intro: { title: string; em: string; absaetze: (stadt: string) => string[]; punkte: string[] };
  bausteine: StandortBaustein[];
  ablauf: StandortSchritt[];
  referenzen: string[];
  faqs: (stadt: string) => StandortFaq[];
};

const webdesign: StandortLeistung = {
  key: "Webdesign",
  kurz: "Webdesign",
  route: serviceRoutes.webdesign,
  heroLine: "Websites, die Anfragen bringen.",
  titleShort: "Websites mit Wirkung",
  heroText: (stadt) =>
    `Pixel56 entwickelt Websites für Unternehmen in ${stadt}, die online gefunden und angefragt werden wollen: klare Struktur, Texte mit Suchintention, schnelle Technik und ein Relaunch, der bestehende Rankings schützt. Aus Bendorf bei Koblenz, mit einem festen Ansprechpartner.`,
  metaText: (stadt) => `Webdesign für Unternehmen in ${stadt}: klare Struktur, schnelle Technik, Texte mit Suchintention. Pixel56 aus Bendorf bei Koblenz.`,
  proof: ["Individuelles Design", "Technik, die schnell lädt", "Relaunch ohne Rankingverlust", "Ein Ansprechpartner"],
  boardTop: "PIXEL56 · WEBSITE",
  flow: [
    { b: "Struktur", small: "Seiten, die zur Anfrage führen" },
    { b: "Texte", small: "Mit Suchintention geschrieben" },
    { b: "Design", small: "Eigenständig statt Vorlage" },
    { b: "Technik", small: "Schnell, mobil, sauber" },
  ],
  signals: [
    { b: "Marke", small: "eigenständig" },
    { b: "Technik", small: "schnell" },
    { b: "SEO", small: "sauber" },
    { b: "Anfragen", small: "messbar" },
  ],
  intro: {
    title: "Eine Website ist kein Prospekt.",
    em: "Sie ist der Moment der Entscheidung.",
    absaetze: (stadt) => [
      `Bevor jemand in ${stadt} anruft, schaut er auf die Website. Er vergleicht, urteilt in Sekunden und merkt sich niemanden zweimal. Eine Seite, die langsam lädt, auf dem Handy bricht oder nicht sagt, was der Betrieb eigentlich macht, verliert diese Entscheidung, ohne dass es jemand merkt.`,
      "Deshalb bauen wir Websites vom Ziel her: Welche Anfrage soll entstehen? Daraus ergibt sich die Struktur, dann die Texte, dann das Design. Die Technik sorgt dafür, dass Google die Seite versteht und Besucher nicht warten müssen.",
    ],
    punkte: [
      "Struktur und Texte, die zur Anfrage führen, statt nur zu informieren",
      "Individuelles Design, das zum Betrieb passt und nicht zur Vorlage",
      "Ladezeit, mobile Darstellung und SEO-Grundlagen von Anfang an",
      "Beim Relaunch: alte Adressen weiterleiten, Rankings behalten",
    ],
  },
  bausteine: [
    { nr: "01", title: "Analyse & Ziel", text: "Was soll die Website erreichen, wer sucht danach, was bieten die Wettbewerber? Bevor etwas entworfen wird, ist das Ziel klar." },
    { nr: "02", title: "Struktur & Texte", text: "Seitenaufbau und Texte entstehen aus Suchanfragen und Kundenfragen. Kein Textbaustein von der Stange." },
    { nr: "03", title: "Design", text: "Ein Auftritt, der zum Betrieb passt: Farben, Bilder, Tonalität. Vertrauen auf den ersten Blick, nicht nur hübsch." },
    { nr: "04", title: "Technik", text: "Schnelle Ladezeiten, mobile Darstellung, saubere Struktur. Die Basis, damit Google die Seite versteht." },
    { nr: "05", title: "Relaunch & Migration", text: "Bestehende Adressen werden inventarisiert und weitergeleitet. Die neue Seite startet, ohne alte Sichtbarkeit zu verlieren." },
    { nr: "06", title: "Betreuung", text: "Nach dem Livegang bleiben wir dran: Änderungen, Auswertung, Weiterentwicklung. Kein Zusatzverkauf, Teil der Zusammenarbeit." },
  ],
  ablauf: [
    { nr: "01", title: "Erstgespräch", text: "Kostenlos, unverbindlich. Du beschreibst deinen Betrieb und dein Ziel, wir schauen auf die aktuelle Seite und geben eine ehrliche Einschätzung.", gets: "Du bekommst: eine erste Einschätzung" },
    { nr: "02", title: "Konzept", text: "Seitenstruktur, Botschaften und Textentwürfe als klickbarer Entwurf. Du prüfst, bevor gestaltet wird.", gets: "Du bekommst: einen Entwurf zum Anklicken" },
    { nr: "03", title: "Design & Umsetzung", text: "Gestaltung, Texte, Technik. Mit festen Zwischenständen und Feedback direkt an die Person, die baut.", gets: "Du bekommst: Zwischenstände, die du prüfen kannst" },
    { nr: "04", title: "Livegang & Betreuung", text: "Weiterleitungen, Suchkonsole, Kontrolle. Danach bleiben wir erreichbar und entwickeln die Seite weiter.", gets: "Du bekommst: eine Seite, die weiterläuft" },
  ],
  referenzen: ["gm-dachdecker", "colak-gmbh", "cass-schulungen"],
  faqs: (stadt) => [
    { q: "Was kostet eine Website?", a: "Das hängt vom Umfang ab: Anzahl der Seiten, Texte, Fotos, Funktionen wie Karriereportal oder Buchung. Im Erstgespräch bekommst du ein konkretes Angebot mit Umfang, Ablauf und Preis, keine Pauschale aus der Preisliste." },
    { q: "Wie lange dauert die Umsetzung?", a: "Je nach Umfang meist vier bis acht Wochen von der Analyse bis zum Livegang. Der genaue Zeitplan steht im Angebot." },
    { q: "Muss ich Texte und Bilder selbst liefern?", a: "Nein. Struktur, Texte und Design übernehmen wir. Du lieferst, was nur du weißt: Leistungen, Besonderheiten, Ansprechpartner. Fotos machen wir auf Wunsch bei dir im Betrieb." },
    { q: `Kommt ihr für das Projekt nach ${stadt}?`, a: `Für Kennenlernen, Fotos oder Workshops gern, wenn ${stadt} im Einzugsgebiet liegt. Die Abstimmung läuft sonst per Video-Call, Telefon und WhatsApp, mit denselben festen Terminen.` },
  ],
};

const googleAds: StandortLeistung = {
  key: "Google Ads",
  kurz: "Google Ads",
  route: serviceRoutes["google-ads"],
  heroLine: "Sichtbar im Moment der Suche.",
  titleShort: "Anzeigen mit Wirkung",
  heroText: (stadt) =>
    `Google-Anzeigen für Unternehmen in ${stadt}, die gefunden werden wollen, wenn jemand gerade nach ihrer Leistung sucht. Mit Suchbegriffen, die zum Angebot passen, Zielseiten, die Anfragen aufnehmen, und Tracking, das zeigt, was das Budget bringt.`,
  metaText: (stadt) => `Google Ads für Unternehmen in ${stadt}: Suchbegriffe mit Absicht, Zielseiten, die Anfragen aufnehmen, Tracking bis zur Anfrage.`,
  proof: ["Suchbegriffe mit Absicht", "Zielseiten, die aufnehmen", "Budget nachvollziehbar", "Ein Ansprechpartner"],
  boardTop: "PIXEL56 · SUCHKAMPAGNE",
  flow: [
    { b: "Suche", small: "Jemand sucht deine Leistung" },
    { b: "Anzeige", small: "Passend zur Suchabsicht" },
    { b: "Zielseite", small: "Nimmt die Anfrage auf" },
    { b: "Auswertung", small: "Was hat das Budget gebracht?" },
  ],
  signals: [
    { b: "Keywords", small: "mit Absicht" },
    { b: "Anzeigen", small: "relevant" },
    { b: "Zielseite", small: "fokussiert" },
    { b: "Kosten", small: "transparent" },
  ],
  intro: {
    title: "Google Ads holen Kunden ab,",
    em: "die jetzt suchen.",
    absaetze: (stadt) => [
      `Wer in ${stadt} nach einem Dachdecker, einer Steuerberatung oder einem Fahrzeugaufbereiter sucht, hat ein konkretes Anliegen und wenig Geduld. Google Ads zeigen deine Anzeige genau in diesem Moment, über den organischen Ergebnissen.`,
      "Damit das Budget nicht verpufft, braucht es drei Dinge: Suchbegriffe, die zu deiner Leistung passen, Anzeigen, die das Anliegen aufgreifen, und eine Zielseite, die die Anfrage ohne Umwege aufnimmt. Wir bauen alle drei zusammen und werten laufend aus.",
    ],
    punkte: [
      "Suchbegriffe nach Absicht sortiert, Streuverlust ausgeschlossen",
      "Anzeigentexte, die das Anliegen der Suche aufgreifen",
      "Zielseiten mit einem klaren nächsten Schritt",
      "Tracking bis zur Anfrage, Budget im eigenen Konto",
    ],
  },
  bausteine: [
    { nr: "01", title: "Keyword-Recherche", text: "Welche Suchbegriffe nutzen deine Kunden wirklich, und welche nur Neugierige? Wir trennen Kauf- von Informationsabsicht." },
    { nr: "02", title: "Kampagnenstruktur", text: "Saubere Gruppen nach Leistung und Region, ausschließende Begriffe, Gebotsstrategie passend zum Ziel." },
    { nr: "03", title: "Anzeigentexte", text: "Texte, die das Anliegen der Suche aufgreifen und sagen, warum dein Betrieb die richtige Wahl ist." },
    { nr: "04", title: "Zielseiten", text: "Eine Seite pro Anliegen, ohne Ablenkung, mit Formular oder Telefonnummer dort, wo der Besucher sie erwartet." },
    { nr: "05", title: "Tracking", text: "Anrufe, Formulare und Terminbuchungen werden gemessen. So weißt du, welche Suchbegriffe Anfragen bringen." },
    { nr: "06", title: "Optimierung & Reporting", text: "Laufende Anpassung von Geboten, Begriffen und Texten. Dazu eine Einordnung in Sätzen, nicht nur Tabellen." },
  ],
  ablauf: [
    { nr: "01", title: "Erstgespräch", text: "Ziel, Leistung, Region, bisherige Erfahrungen mit Anzeigen. Daraus entsteht die Einschätzung, ob Google Ads der richtige Hebel ist.", gets: "Du bekommst: eine ehrliche Einschätzung" },
    { nr: "02", title: "Aufbau", text: "Keyword-Recherche, Kampagnenstruktur, Anzeigen, Zielseite, Tracking. Das Werbekonto läuft auf deinen Namen.", gets: "Du bekommst: eine Kampagne, die dir gehört" },
    { nr: "03", title: "Start & Lernphase", text: "Die ersten Wochen liefern Daten. Wir beobachten eng, schließen Streuverlust aus und schärfen nach.", gets: "Du bekommst: erste Anfragen und erste Daten" },
    { nr: "04", title: "Betreuung", text: "Monatliche Optimierung und Auswertung. Budget und Betreuung getrennt ausgewiesen, kündbar statt gebunden.", gets: "Du bekommst: Einordnung statt Zahlenfriedhof" },
  ],
  referenzen: ["van-den-berg", "gm-dachdecker", "stark-ins-neue"],
  faqs: (stadt) => [
    { q: "Wie viel Budget brauche ich?", a: "Das hängt von Leistung und Wettbewerb ab. Wichtiger als die Höhe ist Konstanz: Ein moderates, dauerhaftes Budget bringt mehr als kurze Ausschläge. Einen realistischen Rahmen nennen wir im Erstgespräch." },
    { q: "Wie schnell kommen Anfragen?", a: "Anzeigen laufen ab dem ersten Tag. Belastbare Daten gibt es nach einigen Wochen, wenn die Kampagne gelernt hat, welche Suchbegriffe wirklich Anfragen bringen." },
    { q: `Kann ich die Anzeigen nur auf ${stadt} begrenzen?`, a: `Ja. Regionale Ausrichtung ist eine Stärke von Google Ads: Anzeigen lassen sich auf ${stadt} und das Umland begrenzen, damit das Budget nur dort wirkt, wo du Kunden bedienen kannst.` },
    { q: "Gehört mir das Werbekonto?", a: "Ja. Konto, Kampagnen und Daten laufen auf deinen Namen. Wenn die Zusammenarbeit endet, nimmst du alles mit." },
  ],
};

const metaAds: StandortLeistung = {
  key: "Meta Ads",
  kurz: "Meta Ads",
  route: serviceRoutes["meta-ads"],
  heroLine: "Nachfrage, wo noch keine ist.",
  titleShort: "Anzeigen, die wirken",
  heroText: (stadt) =>
    `Facebook- und Instagram-Kampagnen für Unternehmen in ${stadt}, die neue Kunden oder Bewerber erreichen wollen, bevor diese aktiv suchen. Mit Creatives aus dem Betrieb, Zielseiten, die das Versprechen der Anzeige einlösen, und Tracking, das zeigt, was funktioniert.`,
  metaText: (stadt) => `Meta Ads für Unternehmen in ${stadt}: Facebook- und Instagram-Kampagnen für Kunden und Bewerber, Creatives aus dem Betrieb. Pixel56 bei Koblenz.`,
  proof: ["Zielgruppen in der Region", "Creatives aus dem Betrieb", "Zielseite statt Streuverlust", "Ein Ansprechpartner"],
  boardTop: "PIXEL56 · META-KAMPAGNE",
  flow: [
    { b: "Zielgruppe", small: "Regional und nach Interesse" },
    { b: "Creative", small: "Echte Bilder aus dem Betrieb" },
    { b: "Zielseite", small: "Löst das Versprechen ein" },
    { b: "Auswertung", small: "Anfragen statt Likes" },
  ],
  signals: [
    { b: "Reichweite", small: "regional" },
    { b: "Creatives", small: "echt" },
    { b: "Anfragen", small: "messbar" },
    { b: "Budget", small: "transparent" },
  ],
  intro: {
    title: "Meta Ads erreichen Menschen,",
    em: "die noch nicht suchen.",
    absaetze: (stadt) => [
      `Nicht jeder Kunde in ${stadt} tippt eine Suchanfrage ein. Viele scrollen abends durch Instagram oder Facebook und entdecken dort, was sie brauchen: einen Betrieb, der zeigt, wie er arbeitet, eine Stellenanzeige mit echten Kollegen im Bild, ein Angebot mit klarem nächsten Schritt.`,
      "Meta Ads funktionieren, wenn drei Dinge zusammenpassen: eine Zielgruppe, die zum Angebot passt, ein Creative, das im Feed auffällt, und eine Zielseite, die das Versprechen der Anzeige einlöst. Wir bauen alle drei und werten aus, was tatsächlich Anfragen bringt.",
    ],
    punkte: [
      "Zielgruppen nach Region, Interesse und Verhalten",
      "Creatives aus deinem Material oder vor Ort produziert",
      "Landingpages, die das Versprechen der Anzeige einlösen",
      "Tracking bis zur Anfrage oder Bewerbung",
    ],
  },
  bausteine: [
    { nr: "01", title: "Zielgruppe & Angebot", text: "Wen willst du erreichen, und was bekommt er? Daraus entsteht die Kampagnenlogik, bevor ein Motiv entsteht." },
    { nr: "02", title: "Creatives", text: "Bilder und kurze Videos aus dem Betrieb, geschnitten für Feed, Story und Reels. Echt wirkt besser als Stock." },
    { nr: "03", title: "Kampagnenaufbau", text: "Struktur, Budgetverteilung und Gebotsstrategie passend zum Ziel: Anfragen, Bewerbungen oder Reichweite." },
    { nr: "04", title: "Zielseite", text: "Eine fokussierte Seite, die das Anliegen der Anzeige aufnimmt und zur Anfrage führt. Ohne Ablenkung." },
    { nr: "05", title: "Tracking", text: "Pixel, Conversions, Anfragen. So siehst du, welches Motiv und welche Zielgruppe tatsächlich Kunden bringen." },
    { nr: "06", title: "Optimierung", text: "Motive tauschen, Zielgruppen schärfen, Budget umschichten. Laufend, mit Einordnung in Sätzen." },
  ],
  ablauf: [
    { nr: "01", title: "Erstgespräch", text: "Ziel, Angebot, Zielgruppe, Material. Wir sagen ehrlich, ob Meta Ads der richtige Kanal sind.", gets: "Du bekommst: eine ehrliche Einschätzung" },
    { nr: "02", title: "Creatives & Aufbau", text: "Motive aus deinem Material oder vor Ort gedreht, Kampagnenstruktur, Zielseite, Tracking. Das Werbekonto läuft auf deinen Namen.", gets: "Du bekommst: eine startklare Kampagne" },
    { nr: "03", title: "Start & Test", text: "Mehrere Motive und Zielgruppen laufen gegeneinander. Nach den ersten Wochen ist klar, was Anfragen bringt.", gets: "Du bekommst: erste Anfragen und erste Daten" },
    { nr: "04", title: "Betreuung", text: "Laufende Optimierung, neue Motive, monatliche Einordnung. Budget und Betreuung getrennt ausgewiesen.", gets: "Du bekommst: Einordnung statt Zahlenfriedhof" },
  ],
  referenzen: ["van-den-berg", "gm-dachdecker", "stark-ins-neue"],
  faqs: (stadt) => [
    { q: "Facebook oder Instagram?", a: "Beide laufen über dieselbe Kampagnenstruktur. Welche Plattform mehr bringt, hängt von Zielgruppe und Angebot ab. Wir starten meist auf beiden und verteilen das Budget nach Daten." },
    { q: "Brauche ich professionelle Fotos oder Videos?", a: "Hilfreich, aber kein Muss. Echte Aufnahmen aus dem Betrieb wirken im Feed oft besser als aufwendige Produktionen. Wenn Material fehlt, drehen wir bei dir vor Ort." },
    { q: `Lassen sich die Anzeigen auf ${stadt} begrenzen?`, a: `Ja. Meta Ads lassen sich auf ${stadt} und einen Umkreis ausrichten, damit nur Menschen die Anzeige sehen, die du auch bedienen kannst.` },
    { q: "Eignen sich Meta Ads für Mitarbeitergewinnung?", a: "Sehr gut. Kandidaten, die nicht aktiv suchen, sehen im Feed ein besseres Angebot. Mit echten Kollegen im Bild und einer Bewerbung in wenigen Minuten funktioniert das auch im Handwerk." },
  ],
};

const seo: StandortLeistung = {
  key: "SEO",
  kurz: "SEO",
  route: serviceRoutes.seo,
  heroLine: "Gefunden werden, dauerhaft.",
  titleShort: "Sichtbar bei Google",
  heroText: (stadt) =>
    `Suchmaschinenoptimierung für Unternehmen in ${stadt}: technisches Fundament, Inhalte mit Suchintention und ein gepflegtes Google-Unternehmensprofil. Kein Rankingversprechen, aber eine Basis, die Sichtbarkeit aufbaut und hält.`,
  metaText: (stadt) => `SEO für Unternehmen in ${stadt}: technisches Fundament, Inhalte mit Suchintention, Google-Unternehmensprofil. Ehrlich, ohne Platz-1-Versprechen.`,
  proof: ["Technisches Fundament", "Inhalte mit Suchintention", "Google-Unternehmensprofil", "Kein Rankingversprechen"],
  boardTop: "PIXEL56 · SICHTBARKEIT",
  flow: [
    { b: "Technik", small: "Ladezeit, Struktur, Mobil" },
    { b: "Inhalte", small: "Antworten auf echte Suchen" },
    { b: "Lokal", small: "Unternehmensprofil & Bewertungen" },
    { b: "Pflege", small: "Rankings halten statt verlieren" },
  ],
  signals: [
    { b: "Technik", small: "sauber" },
    { b: "Inhalte", small: "relevant" },
    { b: "Lokal", small: "gepflegt" },
    { b: "Messung", small: "ehrlich" },
  ],
  intro: {
    title: "SEO ist kein Trick.",
    em: "Es ist Grundlagenarbeit.",
    absaetze: (stadt) => [
      `Wer in ${stadt} bei Google gefunden werden will, braucht keine geheimen Kniffe, sondern eine Website, die Google versteht, Inhalte, die Suchfragen beantworten, und ein Unternehmensprofil, das gepflegt ist. Das klingt unspektakulär und ist genau deshalb so selten sauber umgesetzt.`,
      "Wir arbeiten in drei Bereichen: technisches Fundament, Inhalte mit Suchintention und lokale Sichtbarkeit. Was wir nicht tun: Platz 1 versprechen. Was wir tun: zeigen, was sich aus sauberer Arbeit entwickelt.",
    ],
    punkte: [
      "Ladezeit, mobile Darstellung, Struktur und saubere Indexierung",
      "Seiten und Texte, die echte Suchfragen beantworten",
      "Google-Unternehmensprofil, Adressdaten und Bewertungen",
      "Messung in der Search Console, Einordnung in Sätzen",
    ],
  },
  bausteine: [
    { nr: "01", title: "Technische Analyse", text: "Ladezeit, Crawling, Indexierung, mobile Darstellung. Die Fehler, die Google am Verstehen hindern, kommen zuerst weg." },
    { nr: "02", title: "Keyword- & Suchintention", text: "Wonach suchen deine Kunden wirklich, und mit welcher Absicht? Daraus entsteht die Seitenstruktur." },
    { nr: "03", title: "Inhalte", text: "Leistungsseiten, Ratgeber, Antworten auf häufige Fragen. Geschrieben für Menschen, verständlich für Google." },
    { nr: "04", title: "Lokale Sichtbarkeit", text: "Google-Unternehmensprofil, einheitliche Adressdaten, Bewertungen als Rankingfaktor." },
    { nr: "05", title: "Relaunch-Sicherheit", text: "Bei einer neuen Website: Inventar, Weiterleitungen, Kontrolle. Damit Rankings den Umzug überleben." },
    { nr: "06", title: "Monitoring", text: "Search Console, Rankings, Anfragen. Monatlich eingeordnet, damit du weißt, was sich entwickelt." },
  ],
  ablauf: [
    { nr: "01", title: "Erstgespräch & Check", text: "Wir schauen uns deine Website und dein Unternehmensprofil an und sagen, wo der größte Hebel liegt.", gets: "Du bekommst: eine ehrliche Einschätzung" },
    { nr: "02", title: "Fundament", text: "Technische Fehler beheben, Struktur schärfen, Unternehmensprofil vervollständigen.", gets: "Du bekommst: eine Seite, die Google versteht" },
    { nr: "03", title: "Inhalte", text: "Seiten und Texte entlang der Suchintention aufbauen oder überarbeiten. Schritt für Schritt, nicht alles auf einmal.", gets: "Du bekommst: Inhalte, die gefunden werden" },
    { nr: "04", title: "Pflege", text: "Monitoring, Anpassung, neue Inhalte. SEO ist ein Prozess, kein Projekt mit Enddatum.", gets: "Du bekommst: Rankings, die bleiben" },
  ],
  referenzen: ["stark-ins-neue", "colak-gmbh", "cass-schulungen"],
  faqs: (stadt) => [
    { q: "Garantiert ihr Platz 1 bei Google?", a: "Nein, und niemand kann das seriös. Wir versprechen saubere Arbeit an Technik, Inhalten und Profil und zeigen in der Search Console, was sich daraus entwickelt." },
    { q: "Wie lange dauert es, bis SEO wirkt?", a: "Technische Verbesserungen greifen oft innerhalb von Wochen, neue Inhalte brauchen Monate. Realistische Zeiträume nennen wir im Erstgespräch, keine Versprechen." },
    { q: `Reicht ein gepflegtes Google-Unternehmensprofil für ${stadt}?`, a: `Für viele lokale Suchen in ${stadt} ist das Unternehmensprofil der wichtigste Hebel. Es ersetzt aber keine Website, die Google versteht und auf die das Profil verlinkt.` },
    { q: "Brauche ich dafür eine neue Website?", a: "Nicht zwingend. Wenn die Technik tragfähig ist, arbeiten wir mit der bestehenden Seite. Wenn nicht, sagen wir offen, dass ein Relaunch günstiger ist als eine Reparatur." },
  ],
};

const socialMedia: StandortLeistung = {
  key: "Social-Media Betreuung",
  kurz: "Social Media",
  route: serviceRoutes["content-produktion"],
  heroLine: "Sichtbar, auch ohne Zeit dafür.",
  titleShort: "Content aus dem Betrieb",
  heroText: (stadt) =>
    `Social-Media-Betreuung für Unternehmen in ${stadt}: Reels, Fotos und Beiträge, die zeigen, wie der Betrieb wirklich arbeitet. Aus deinem Material geschnitten oder bei dir vor Ort produziert, mit einem festen Rhythmus, der auch dann läuft, wenn du keine Zeit hast.`,
  metaText: (stadt) => `Social-Media-Betreuung für Unternehmen in ${stadt}: Reels, Fotos und Beiträge aus dem Betrieb, geschnitten oder vor Ort gedreht.`,
  proof: ["Vor-Ort-Dreh in der Region", "Schnitt aus deinem Material", "Fester Redaktionsplan", "Ein Ansprechpartner"],
  boardTop: "PIXEL56 · CONTENT",
  flow: [
    { b: "Material", small: "Vom Handy oder vom Dreh" },
    { b: "Schnitt", small: "Reels, Fotos, Beiträge" },
    { b: "Plan", small: "Fester Rhythmus" },
    { b: "Wirkung", small: "Anfragen und Bewerber" },
  ],
  signals: [
    { b: "Content", small: "echt" },
    { b: "Rhythmus", small: "fest" },
    { b: "Aufwand", small: "bei uns" },
    { b: "Wirkung", small: "messbar" },
  ],
  intro: {
    title: "Content zeigt,",
    em: "wie ihr wirklich arbeitet.",
    absaetze: (stadt) => [
      `Die meisten Betriebe in ${stadt} haben jeden Tag Content vor der Nase: die Baustelle, die Werkstatt, das Team, das fertige Ergebnis. Was fehlt, ist jemand, der daraus Reels und Beiträge macht und sie regelmäßig veröffentlicht.`,
      "Genau das übernehmen wir. Du schickst Material vom Handy oder wir drehen vor Ort. Wir schneiden, texten, planen und veröffentlichen. Das Ergebnis sind Inhalte, die Vertrauen aufbauen, Kunden anziehen und Bewerbern zeigen, wo sie landen würden.",
    ],
    punkte: [
      "Reels und Fotos aus dem echten Betriebsalltag",
      "Schnitt aus deinem Material oder Produktion vor Ort",
      "Redaktionsplan mit festem Rhythmus",
      "Inhalte, die auch für Anzeigen und Website weiterverwendet werden",
    ],
  },
  bausteine: [
    { nr: "01", title: "Content-Strategie", text: "Welche Themen, welche Formate, welcher Rhythmus? Abgestimmt auf Ziel, Zielgruppe und deinen Alltag." },
    { nr: "02", title: "Produktion vor Ort", text: "Drehtage im Betrieb, in der Region Koblenz ohne Reisekosten. Ein Tag liefert Material für Wochen." },
    { nr: "03", title: "Schnitt & Bearbeitung", text: "Reels, Fotos, Grafiken. Aus deinem Handymaterial oder vom Dreh, im Stil deiner Marke." },
    { nr: "04", title: "Texte & Planung", text: "Beitragstexte, Hashtags, Veröffentlichungsplan. Du gibst frei, wir veröffentlichen." },
    { nr: "05", title: "Community", text: "Kommentare und Nachrichten im Blick behalten, damit Anfragen nicht liegen bleiben." },
    { nr: "06", title: "Auswertung", text: "Was kommt an, was bringt Anfragen? Monatlich eingeordnet, Inhalte entsprechend angepasst." },
  ],
  ablauf: [
    { nr: "01", title: "Erstgespräch", text: "Ziel, Kanäle, vorhandenes Material, Zeit, die du selbst investieren kannst. Daraus entsteht der Rahmen.", gets: "Du bekommst: einen realistischen Plan" },
    { nr: "02", title: "Drehtag oder Material", text: "Wir kommen vorbei oder du schickst, was du hast. Ein Drehtag reicht meist für mehrere Wochen Content.", gets: "Du bekommst: Rohmaterial für Wochen" },
    { nr: "03", title: "Schnitt & Plan", text: "Reels, Beiträge, Texte entstehen in Serie. Du siehst alles vor der Veröffentlichung.", gets: "Du bekommst: fertige Inhalte zur Freigabe" },
    { nr: "04", title: "Laufende Betreuung", text: "Veröffentlichung nach Plan, Auswertung, nächste Runde. Monatlich kündbar.", gets: "Du bekommst: Sichtbarkeit ohne eigenen Aufwand" },
  ],
  referenzen: ["ma-transporte", "cass-schulungen", "sportler-fuer-kinderherzen"],
  faqs: (stadt) => [
    { q: "Muss ich selbst vor die Kamera?", a: "Es hilft, denn Menschen folgen Menschen. Es geht aber auch mit Team, Arbeit und Ergebnissen im Bild. Wir finden das Format, das zu dir passt." },
    { q: `Kommt ihr zum Dreh nach ${stadt}?`, a: `Wenn ${stadt} im Einzugsgebiet um Koblenz liegt, ja, ohne Reisekosten. Weiter entfernt arbeiten wir mit deinem Handymaterial oder planen einen Drehtag nach Aufwand.` },
    { q: "Wie viele Beiträge pro Woche sind sinnvoll?", a: "Regelmäßigkeit schlägt Menge. Zwei bis drei gute Beiträge pro Woche, die zeigen, wie ihr arbeitet, bringen mehr als tägliche Füllposts." },
    { q: "Welche Kanäle sind die richtigen?", a: "Für die meisten Betriebe Instagram und Facebook, für Recruiting zusätzlich TikTok. Wir empfehlen nach Zielgruppe, nicht nach Trend." },
  ],
};

const leistungen: Record<string, StandortLeistung> = {
  Webdesign: webdesign,
  "Google Ads": googleAds,
  "Meta Ads": metaAds,
  SEO: seo,
  "Social-Media Betreuung": socialMedia,
};

export function getStandortLeistung(key: string): StandortLeistung {
  return leistungen[key] ?? webdesign;
}
