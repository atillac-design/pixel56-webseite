/**
 * Zentrale Daten für Projekt-Fallstudien (/projekte + /projekte/<slug>).
 * Texte sind erste Fassungen — Feinschliff folgt im finalen Text-Durchgang.
 * Später pflegbar über das CMS (Sanity), Struktur ist darauf vorbereitet.
 */

export type Stimme = {
  text: string;
  name: string;
  rolle: string;
  img?: string;
};

export type Fallstudie = {
  slug: string;
  kunde: string;
  branche: string;
  jahr: string;
  tags: string[];
  /** Karten-/Hero-Bild (Pfad unter public/). Ohne Bild: abstraktes Browser-Mockup. */
  bild?: string;
  /** Weitere Einblicke auf der Detailseite. */
  galerie?: string[];
  /** Reel/Video für die Detailseite. */
  video?: string;
  logo?: string;
  /** Farb-Variante für Karten ohne Bild (ic-1 … ic-8). */
  variant: string;
  titel: string;
  teaser: string;
  problem: { titel: string; text: string; punkte: string[] };
  loesung: { titel: string; text: string; punkte: string[] };
  ergebnis?: { statNum?: string; statLabel?: string; text: string };
  stimme?: Stimme;
};

export const fallstudien: Fallstudie[] = [
  {
    slug: "stark-ins-neue",
    kunde: "Stark ins Neue gGmbH",
    branche: "Bildung & Non-Profit",
    jahr: "2025",
    tags: ["Meta Ads", "Landingpage", "Webdesign"],
    bild: "/bilder/projekt-stark-ins-neue.webp",
    galerie: ["/bilder/projekt-stark-ins-neue-2.webp", "/bilder/projekt-stark-ins-neue-3.webp"],
    logo: "/bilder/kunde-stark-ins-neue.webp",
    variant: "ic-3",
    titel: "Vertrauen und Wirkung für eine Bildungsinitiative",
    teaser:
      "Neue Landingpage und laufende Meta-Ads-Betreuung für eine gemeinnützige Organisation im Bereich mentale Gesundheit — mit klarer Nutzerführung zur Kursanmeldung.",
    problem: {
      titel: "Gute Kurse, zu wenig Anmeldungen",
      text: "Die Angebote von Stark ins Neue helfen Kindern und Familien — aber online kamen sie nicht an. Interessenten fanden den Weg zur Anmeldung nicht, Kampagnen liefen ohne passende Zielseite.",
      punkte: [
        "Anzeigen führten auf allgemeine Seiten statt auf ein klares Angebot",
        "Anmeldestrecke mit unnötigen Zwischenschritten",
        "Wirkung der Kampagnen kaum messbar",
      ],
    },
    loesung: {
      titel: "Eine Landingpage mit genau einem Ziel",
      text: "Wir haben eine fokussierte Landingpage gebaut, die Besucher ohne Umwege zur Kursanmeldung führt — und die Meta-Ads-Kampagnen darauf abgestimmt, DSGVO-konform und laufend optimiert.",
      punkte: [
        "Fokussierte Anmeldestrecke ohne Ablenkung",
        "Meta-Ads-Kampagnen mit sauberem Tracking",
        "Laufende Betreuung und Auswertung statt Einmal-Setup",
      ],
    },
    ergebnis: {
      text: "Deutlich mehr Kursanmeldungen und Newsletter-Abos — und Klarheit darüber, welche Kampagne was bringt.",
    },
    stimme: {
      text: "Endlich zeigen sich unsere Kurse auch online. Die Zusammenarbeit ist unkompliziert und auf Augenhöhe — man merkt, dass hier jemand mitdenkt.",
      name: "Margarita Wolf",
      rolle: "Gründerin, Stark ins Neue gGmbH",
      img: "/bilder/person-margarita-wolf.webp",
    },
  },
  {
    slug: "ma-transporte",
    kunde: "M&A Transporte GmbH",
    branche: "Transport & Logistik",
    jahr: "seit 2019",
    tags: ["Webdesign", "Social Media", "Meta Ads"],
    bild: "/bilder/projekt-ma-transporte.webp",
    variant: "ic-2",
    titel: "Dienstleistungsqualität digital sichtbar gemacht",
    teaser:
      "Neue, repräsentative Website plus laufender Social-Media-Content und Meta-Ads-Kampagnen für ein Transportunternehmen — eine Zusammenarbeit, die seit Jahren läuft.",
    problem: {
      titel: "Starke Leistung, unsichtbar im Netz",
      text: "M&A Transporte bewegt anspruchsvolle Güter — bis hin zu Gefahrgut. Doch der digitale Auftritt spiegelte die Professionalität des Betriebs nicht wider und brachte weder Kunden- noch Bewerberanfragen.",
      punkte: [
        "Veralteter Auftritt ohne klare Leistungsdarstellung",
        "Keine Präsenz auf Social Media",
        "Neukunden kamen fast nur über Empfehlungen",
      ],
    },
    loesung: {
      titel: "Website, Content und Kampagnen aus einer Hand",
      text: "Wir haben eine klar strukturierte Website gebaut, die die Spezialleistungen sichtbar macht — und betreuen seitdem Social-Media-Content und Meta-Ads-Kampagnen, alles aufeinander abgestimmt.",
      punkte: [
        "Website mit klarer Leistungs- und Fuhrpark-Darstellung",
        "Laufende Social-Media-Betreuung mit echtem Content",
        "Meta-Ads-Kampagnen für Kunden- und Mitarbeitergewinnung",
      ],
    },
    ergebnis: {
      text: "Gestärkte Markenwahrnehmung, mehr Anfragen — und ein Auftritt, der zur Qualität des Betriebs passt. Die Zusammenarbeit läuft seit 2019.",
    },
    stimme: {
      text: "Seit Jahren derselbe Ansprechpartner, immer erreichbar, alles aus einer Hand — Website, Content, Kampagnen. Das findet man selten.",
      name: "Mithat Akgün",
      rolle: "M&A Transporte GmbH",
      img: "/bilder/person-mithat-akguen.webp",
    },
  },
  {
    slug: "van-den-berg",
    kunde: "Van den Berg Gruppe",
    branche: "Dienstleistung",
    jahr: "laufend",
    tags: ["Meta Ads", "Landingpage", "Betreuung"],
    bild: "/bilder/projekt-van-den-berg.webp",
    logo: "/bilder/kunde-vandenberg.png",
    variant: "ic-4",
    titel: "56 % Wachstum durch gezielte Facebook Ads",
    teaser:
      "Kontinuierlicher Kampagnenaufbau mit konsequenter Budget-Steuerung nach Datenlage statt Bauchgefühl — auch bei reduziertem Budget hielt der Anfrage-Effekt an.",
    problem: {
      titel: "Werbebudget ohne klare Linie",
      text: "Kampagnen liefen sprunghaft: mal viel Budget, mal gar nichts. Der Algorithmus kam nie ins Lernen, Ergebnisse waren nicht vorhersehbar und niemand wusste, welcher Euro was brachte.",
      punkte: [
        "Stop-and-go-Budgets statt Konstanz",
        "Kein sauberes Conversion-Tracking",
        "Anzeigen führten auf die allgemeine Startseite",
      ],
    },
    loesung: {
      titel: "Konstanz, Tracking, passende Zielseiten",
      text: "Wir haben die Kampagnenstruktur neu aufgebaut, sauberes Tracking eingerichtet und Anzeigen auf fokussierte Zielseiten geführt — mit konstantem Budget und laufender Optimierung anhand echter Daten.",
      punkte: [
        "Neu strukturierte Meta-Ads-Kampagnen mit Conversion-Tracking",
        "Fokussierte Landingpage statt allgemeiner Startseite",
        "Budget-Steuerung nach Datenlage, wöchentlich ausgewertet",
      ],
    },
    ergebnis: {
      statNum: "+56",
      statLabel: "WACHSTUM",
      text: "56 % mehr Anfragen — reale Kampagnendaten, kein Schätzwert. Auch bei reduziertem Budget hielt der Effekt an: Konstanz schlägt Sprunghaftigkeit.",
    },
    stimme: {
      text: "Wir haben nicht mehr Budget verbrannt. Wir haben konstant gearbeitet — und das hat gereicht.",
      name: "Van den Berg Gruppe",
      rolle: "laufende Betreuung",
    },
  },
  {
    slug: "gm-dachdecker",
    kunde: "GM-Dachdecker Meisterbetrieb",
    branche: "Handwerk & Bau",
    jahr: "2023",
    tags: ["Webdesign", "Karriereportal", "Recruiting"],
    variant: "ic-1",
    titel: "Handwerkskunst digital erlebbar gemacht",
    teaser:
      "Neue Website inklusive Karriereportal — Bewerber laden ihre Unterlagen direkt hoch, ohne E-Mail-Programm. Dazu Meta-Ads-Kampagnen zur Bewerbergewinnung.",
    problem: {
      titel: "Volle Auftragsbücher, leere Bewerbermappe",
      text: "Der Meisterbetrieb hatte genug Arbeit, aber zu wenig Hände. Stellenausschreibungen liefen ins Leere, und der Bewerbungsweg per E-Mail schreckte gerade jüngere Kandidaten ab.",
      punkte: [
        "Kaum Bewerbungen trotz ausgeschriebener Stellen",
        "Bewerbung nur umständlich per E-Mail möglich",
        "Website ohne Einblick in den Betrieb",
      ],
    },
    loesung: {
      titel: "Karriereportal mit Direkt-Upload",
      text: "Wir haben die Website neu gebaut — mit einem Karriereportal, über das Bewerber ihre Unterlagen in wenigen Minuten direkt hochladen. Ergänzt um Meta-Ads-Kampagnen, die passende Kandidaten gezielt ansprechen.",
      punkte: [
        "Neue Website mit echtem Einblick in den Betrieb",
        "Bewerbungs-Upload ohne E-Mail-Programm und ohne Umwege",
        "Recruiting-Kampagnen über Meta Ads",
      ],
    },
    ergebnis: {
      text: "Spürbar leichtere Mitarbeitergewinnung — nicht weil plötzlich mehr Menschen Dachdecker werden wollten, sondern weil der Weg zur Bewerbung nicht mehr im Weg stand.",
    },
    stimme: {
      text: "Von der ersten Idee bis zum Livegang alles aus einer Hand — schnell, unkompliziert, top Ergebnis. Endlich bekommen wir Bewerbungen.",
      name: "GM-Dachdecker",
      rolle: "Meisterbetrieb",
    },
  },
  {
    slug: "mdu-bedachungen",
    kunde: "MDU Bedachungen",
    branche: "Handwerk & Bau",
    jahr: "2024",
    tags: ["Webdesign"],
    bild: "/bilder/projekt-mdu-bedachungen.webp",
    variant: "ic-4",
    titel: "Ein Dachdecker-Auftritt, der Vertrauen baut",
    teaser:
      "Neue Website für einen Dachdeckerbetrieb — klare Leistungsdarstellung, starke Bildsprache und ein direkter Weg zur Anfrage.",
    problem: {
      titel: "Ohne Auftritt keine Vergleichbarkeit",
      text: "Wer einen Dachdecker sucht, vergleicht online — und entscheidet in Sekunden. MDU Bedachungen fehlte ein Auftritt, der die Qualität der Arbeit sichtbar macht und Anfragen einsammelt.",
      punkte: [
        "Keine zeitgemäße Website als Anlaufstelle",
        "Leistungen für Interessenten nicht auf einen Blick erkennbar",
        "Anfragen kamen nur über Telefon und Empfehlung",
      ],
    },
    loesung: {
      titel: "Klare Struktur, direkte Anfragewege",
      text: "Wir haben eine Website gebaut, die die Leistungen klar strukturiert zeigt, mobil perfekt funktioniert und Besucher ohne Umwege zur Kontaktaufnahme führt.",
      punkte: [
        "Übersichtliche Leistungsdarstellung mit starker Bildsprache",
        "Mobil optimiert — dort, wo Handwerker gesucht werden",
        "Klare Call-to-Actions für Anfragen",
      ],
    },
    stimme: undefined,
  },
  {
    slug: "oktay-coemertler",
    kunde: "Oktay Cömertler",
    branche: "Abbruch, Tief- & Kanalbau",
    jahr: "seit 2022",
    tags: ["Branding", "Webdesign"],
    variant: "ic-7",
    titel: "Full-Service für Abbruch, Tief- & Kanalbau",
    teaser:
      "Maßgeschneidertes Branding und Webdesign, entwickelt aus umfassender Markt- und Unternehmensanalyse — für Desktop und mobil gleichermaßen durchdacht.",
    problem: {
      titel: "Wachstum ohne Marke",
      text: "Das Unternehmen wuchs, aber der Auftritt hielt nicht Schritt: kein einheitliches Erscheinungsbild, keine Website, die die Bandbreite der Leistungen zeigt.",
      punkte: [
        "Kein durchgängiges Branding",
        "Leistungen online nicht auffindbar",
        "Auftritt passte nicht zur Größe der Projekte",
      ],
    },
    loesung: {
      titel: "Marke und Website aus einem Guss",
      text: "Aus einer gründlichen Markt- und Unternehmensanalyse haben wir ein Branding entwickelt, das zur Härte des Gewerks passt — und eine Website, die Leistungen, Referenzen und Kontakt klar strukturiert.",
      punkte: [
        "Branding aus Markt- und Unternehmensanalyse entwickelt",
        "Website mit klarer Leistungsstruktur",
        "Für Desktop und mobil gleichermaßen durchdacht",
      ],
    },
    stimme: {
      text: "Maßgeschneidert, professionell, auf den Punkt — genau das haben wir gebraucht.",
      name: "Oktay Cömertler",
      rolle: "Inhaber",
      img: "/bilder/person-oktay-coemertler.webp",
    },
  },
  {
    slug: "cass-schulungen",
    kunde: "CASS Schulungen",
    branche: "Bildung & Sicherheit",
    jahr: "2023",
    tags: ["Branding", "Webdesign", "Social Media"],
    bild: "/bilder/projekt-cass.webp",
    variant: "ic-6",
    titel: "Bildung und Sicherheit digital vereint",
    teaser:
      "Branding und Webdesign für Luftsicherheitsschulungen — ein seriöser Auftritt für ein Thema, bei dem Vertrauen alles ist.",
    problem: {
      titel: "Ein sensibles Thema braucht Seriosität",
      text: "Luftsicherheitsschulungen verkaufen sich nicht über bunte Werbung, sondern über Vertrauen und Kompetenz. Der bisherige Auftritt wurde diesem Anspruch nicht gerecht.",
      punkte: [
        "Auftritt spiegelte die fachliche Kompetenz nicht wider",
        "Kursangebote unübersichtlich dargestellt",
        "Keine einheitliche Marke",
      ],
    },
    loesung: {
      titel: "Ruhig, kompetent, vertrauenswürdig",
      text: "Wir haben Marke und Website so gestaltet, dass Seriosität an erster Stelle steht — mit klarer Kursübersicht, verständlichen Informationen und durchgängigem Erscheinungsbild bis in den Social-Media-Auftritt.",
      punkte: [
        "Branding mit Fokus auf Vertrauen und Kompetenz",
        "Website mit klarer Kursstruktur",
        "Einheitlicher Auftritt bis in Social Media",
      ],
    },
    stimme: {
      text: "Persönlich erreichbar, schnelle Antworten, ehrliche Einschätzungen. Genau das haben wir gesucht.",
      name: "CASS Schulungen",
      rolle: "Luftsicherheitsschulungen",
    },
  },
  {
    slug: "sportler-fuer-kinderherzen",
    kunde: "Sportler für Kinderherzen",
    branche: "Non-Profit & Event",
    jahr: "2022",
    tags: ["Branding", "Event", "Kampagne"],
    bild: "/bilder/projekt-kinderherzen.webp",
    galerie: ["/bilder/projekt-kinderherzen-story.webp", "/bilder/projekt-kinderherzen-eventcover.webp"],
    variant: "ic-5",
    titel: "Marketing & Branding für eine Spendengala",
    teaser:
      "Komplette Kampagne zugunsten krebskranker Kinder — Sichtbarkeit für den guten Zweck, von der Marke bis zur Bewerbung des Events.",
    problem: {
      titel: "Guter Zweck, wenig Reichweite",
      text: "Eine Spendengala lebt davon, dass Menschen davon erfahren. Es fehlte an einer erkennbaren Marke und an Material, das das Event über alle Kanäle hinweg bewirbt.",
      punkte: [
        "Keine einheitliche Event-Marke",
        "Kein Werbematerial für Social Media und Print",
        "Reichweite hing an persönlichen Kontakten",
      ],
    },
    loesung: {
      titel: "Eine Marke für den guten Zweck",
      text: "Wir haben Branding und komplettes Kampagnenmaterial entwickelt — von Social-Media-Formaten über Event-Cover bis zu Stories — damit die Gala die Aufmerksamkeit bekommt, die der Zweck verdient.",
      punkte: [
        "Event-Branding mit Wiedererkennungswert",
        "Werbematerial für alle Kanäle (Feed, Story, Print)",
        "Kampagnen-Begleitung bis zum Event",
      ],
    },
  },
  {
    slug: "lernforum-obertshausen",
    kunde: "Lernforum Obertshausen",
    branche: "Bildung & Nachhilfe",
    jahr: "2023",
    tags: ["Webdesign"],
    bild: "/bilder/projekt-lernforum.webp",
    variant: "ic-3",
    titel: "Ein digitales Zuhause für die Nachhilfe",
    teaser:
      "Neue Website für ein Nachhilfe-Institut — freundlich, übersichtlich und mit allen Informationen, die Eltern und Schüler wirklich suchen.",
    problem: {
      titel: "Angebote, die niemand online fand",
      text: "Vom Sprachcafé bis zur Prüfungsvorbereitung: Das Lernforum bietet viel — aber online war das Angebot kaum auffindbar und schwer zu überblicken.",
      punkte: [
        "Kursangebot online nicht übersichtlich dargestellt",
        "Eltern fanden wichtige Infos (Zeiten, Kontakt) nicht schnell genug",
        "Auftritt passte nicht zur freundlichen Atmosphäre vor Ort",
      ],
    },
    loesung: {
      titel: "Freundlich, klar, informativ",
      text: "Wir haben eine Website gestaltet, die die warme Atmosphäre des Lernforums transportiert und alle Angebote übersichtlich strukturiert — von der Nachhilfe bis zum Sprachcafé.",
      punkte: [
        "Klare Struktur für alle Kurs- und Förderangebote",
        "Freundliches Design, das zur Zielgruppe passt",
        "Aktuelles und Termine einfach auffindbar",
      ],
    },
    stimme: {
      text: "Die Zusammenarbeit war unkompliziert und das Ergebnis passt genau zu uns — unsere Angebote werden endlich gefunden.",
      name: "Angela Wurzel",
      rolle: "Gründerin, Lernforum Obertshausen",
      img: "/bilder/person-angela-wurzel.webp",
    },
  },
  {
    slug: "curlyann",
    kunde: "CurlyAnn Atelier",
    branche: "Kreativ & Workshops",
    jahr: "2024",
    tags: ["Konzeption", "Webdesign"],
    bild: "/bilder/projekt-curlyann-1.webp",
    galerie: ["/bilder/projekt-curlyann-ipad.webp", "/bilder/projekt-curlyann-2.webp", "/bilder/projekt-curlyann-3.webp"],
    variant: "ic-5",
    titel: "Kreative Marke. Klare Struktur.",
    teaser:
      "Konzeption und Webdesign für ein Kreativ-Atelier in Koblenz — mit Online-Kursbuchung für Workshops, von Schnullerketten-DIY bis Teamevents.",
    problem: {
      titel: "Kreatives Angebot, unklarer Weg zur Buchung",
      text: "Workshops, Coachings, Mama-Baby-Treffen, Locationmiete — das Angebot von CurlyAnn ist vielfältig. Genau das machte es online unübersichtlich: Interessenten wussten nicht, wo sie buchen sollen.",
      punkte: [
        "Vielfältiges Angebot ohne klare Online-Struktur",
        "Keine direkte Kursbuchung möglich",
        "Marke und Auftritt passten nicht zusammen",
      ],
    },
    loesung: {
      titel: "Struktur, die Kreativität verkauft",
      text: "Wir haben das Angebot neu strukturiert und eine Website gebaut, auf der jeder Workshop eine klare Seite mit direkter Buchung hat — im warmen Look der Marke.",
      punkte: [
        "Klare Angebotsstruktur mit eigener Seite je Workshop",
        "Online-Kursbuchung mit Terminen und freien Plätzen",
        "Design im Stil der Marke — warm, kreativ, persönlich",
      ],
    },
  },
  {
    slug: "cavar-home",
    kunde: "Cavar Home",
    branche: "E-Commerce & Living",
    jahr: "2023",
    tags: ["Onlineshop", "Webdesign"],
    bild: "/bilder/projekt-cavar.webp",
    variant: "ic-8",
    titel: "Ein Onlineshop, der zum Stöbern einlädt",
    teaser:
      "Onlineshop für Home & Living — bildstark, leicht bedienbar und auf Mobilgeräten genauso stark wie am Desktop.",
    problem: {
      titel: "Produkte ohne Bühne",
      text: "Schöne Produkte verkaufen sich über Präsentation. Es fehlte ein Shop, der die Sortimente ansprechend zeigt und den Kauf so einfach wie möglich macht.",
      punkte: [
        "Kein eigener Verkaufskanal online",
        "Sortiment ohne ansprechende Präsentation",
        "Mobile Käufer nicht erreicht",
      ],
    },
    loesung: {
      titel: "Bildstark und reibungslos",
      text: "Wir haben einen Onlineshop aufgebaut, der die Produkte in den Mittelpunkt stellt — mit klarer Kategoriestruktur, einfachem Checkout und mobiler Optimierung.",
      punkte: [
        "Produktpräsentation mit starker Bildsprache",
        "Einfache Navigation und schneller Checkout",
        "Mobil optimiert — dort, wo gestöbert wird",
      ],
    },
  },
  {
    slug: "discounthaus-holding",
    kunde: "DiscountHaus Holding",
    branche: "Container- & Modulbau",
    jahr: "2023",
    tags: ["Webdesign"],
    bild: "/bilder/projekt-discounthaus.webp",
    logo: "/bilder/kunde-discounthouse.png",
    variant: "ic-2",
    titel: "Modulbau modern präsentiert",
    teaser:
      "Neue Website für einen Anbieter von Container- und Modulbau — technische Leistungen verständlich erklärt und klar zum Kontakt geführt.",
    problem: {
      titel: "Erklärungsbedürftige Leistung, keine Erklärung",
      text: "Container- und Modulbau ist erklärungsbedürftig: Einsatzzwecke, Ablauf, Vorteile. Ohne verständliche Darstellung blieben Interessenten mit Fragen zurück — und meldeten sich nicht.",
      punkte: [
        "Komplexes Angebot ohne verständliche Online-Darstellung",
        "Kein klarer Weg von der Information zur Anfrage",
        "Auftritt wirkte nicht so professionell wie das Unternehmen",
      ],
    },
    loesung: {
      titel: "Verständlich erklärt, klar geführt",
      text: "Wir haben eine Website gebaut, die die Modulbau-Leistungen Schritt für Schritt erklärt und Besucher gezielt zum Kontaktformular führt.",
      punkte: [
        "Leistungen verständlich strukturiert und bebildert",
        "Klare Anfragewege mit Kontaktformular",
        "Professioneller Auftritt passend zur Unternehmensgröße",
      ],
    },
  },
  {
    slug: "schluesselfertig-immobilien",
    kunde: "Schlüsselfertig-Immobilien",
    branche: "Immobilien",
    jahr: "2022",
    tags: ["Webdesign"],
    bild: "/bilder/projekt-schluesselfertig-1.webp",
    galerie: ["/bilder/projekt-schluesselfertig-2.webp", "/bilder/projekt-schluesselfertig-3.webp"],
    variant: "ic-6",
    titel: "Immobilien suchen & finden — ohne Umwege",
    teaser:
      "Website für einen Immobilienanbieter — mit Objektübersicht, Homestaging-Bereich und einem Auftritt, der Vertrauen schafft.",
    problem: {
      titel: "Objekte ohne Online-Bühne",
      text: "Immobilienkäufer starten ihre Suche online. Ohne gepflegte Objektübersicht und vertrauenswürdigen Auftritt gingen Interessenten zur Konkurrenz.",
      punkte: [
        "Keine übersichtliche Objektdarstellung",
        "Leistungen wie Homestaging online unsichtbar",
        "Auftritt schaffte kein Vertrauen für große Entscheidungen",
      ],
    },
    loesung: {
      titel: "Klar, seriös, übersichtlich",
      text: "Wir haben eine Website mit klarer Objektübersicht und eigenem Homestaging-Bereich gebaut — ruhig und seriös gestaltet, wie es zum Thema Immobilien passt.",
      punkte: [
        "Objektübersicht mit Suche und Detailseiten",
        "Eigener Bereich für Homestaging-Leistungen",
        "Seriöses Design für ein Vertrauens-Thema",
      ],
    },
  },
  {
    slug: "dema-bedachungen",
    kunde: "DEMA Bedachungen",
    branche: "Handwerk & Bau",
    jahr: "2024",
    tags: ["Branding", "Logo"],
    logo: "/bilder/kunde-dema.png",
    variant: "ic-1",
    titel: "Eine Marke fürs Handwerk",
    teaser:
      "Branding für einen Dachdecker-Meisterbetrieb — Logo und Erscheinungsbild, das Qualität und Verlässlichkeit auf den ersten Blick vermittelt.",
    problem: {
      titel: "Qualität ohne Wiedererkennung",
      text: "Handwerklich top, aber ohne Marke: Auf Fahrzeugen, Kleidung und Angeboten fehlte ein einheitliches Erscheinungsbild, das den Betrieb von der Konkurrenz abhebt.",
      punkte: [
        "Kein professionelles Logo",
        "Uneinheitlicher Auftritt auf Fahrzeugen und Unterlagen",
        "Keine Wiedererkennung im Ortsbild",
      ],
    },
    loesung: {
      titel: "Ein Erscheinungsbild, das arbeitet",
      text: "Wir haben Logo und Branding entwickelt, das zur Robustheit des Gewerks passt — einsetzbar vom Fahrzeug über die Arbeitskleidung bis zum Angebot.",
      punkte: [
        "Logo-Entwicklung mit Varianten für alle Einsatzzwecke",
        "Einheitliches Erscheinungsbild für den ganzen Betrieb",
        "Wiedererkennung bei jedem Kundenkontakt",
      ],
    },
  },
  {
    slug: "berkan-kaya",
    kunde: "Berkan Kaya — Seven Summits",
    branche: "Sport & Sponsoring",
    jahr: "2023",
    tags: ["Design", "Print"],
    bild: "/bilder/projekt-berkan-1.webp",
    galerie: ["/bilder/projekt-berkan-2.webp", "/bilder/projekt-berkan-3.webp"],
    variant: "ic-7",
    titel: "Eine Sponsorenmappe, die Türen öffnet",
    teaser:
      "Design einer Sponsorenmappe für ein Seven-Summits-Projekt — damit ein großes sportliches Ziel auch bei Sponsoren große Wirkung entfaltet.",
    problem: {
      titel: "Großes Ziel, kein Pitch",
      text: "Wer Sponsoren gewinnen will, braucht mehr als eine gute Geschichte — er braucht Unterlagen, die das Projekt professionell präsentieren und im Gedächtnis bleiben.",
      punkte: [
        "Keine professionellen Sponsoring-Unterlagen",
        "Projekt und Persönlichkeit kamen nicht rüber",
        "Absagen, bevor das Gespräch überhaupt begann",
      ],
    },
    loesung: {
      titel: "Das Projekt auf den Punkt gebracht",
      text: "Wir haben eine Sponsorenmappe gestaltet, die das Seven-Summits-Vorhaben visuell erzählt — mit klarer Struktur, starker Bildsprache und allen Fakten für Entscheider.",
      punkte: [
        "Visuelles Konzept passend zum Bergsport",
        "Klare Story: Ziel, Weg, Gegenleistungen",
        "Druckfertige Umsetzung",
      ],
    },
  },
  {
    slug: "burgerfabrik",
    kunde: "Burgerfabrik",
    branche: "Gastronomie",
    jahr: "laufend",
    tags: ["Reels", "Social Content"],
    variant: "ic-8",
    titel: "Reels direkt aus dem echten Betrieb",
    teaser:
      "Kurzvideos aus dem laufenden Ladenalltag statt gestellter Werbeaufnahmen — Content, der zeigt, wie es dort tatsächlich zugeht.",
    problem: {
      titel: "Gutes Essen, keine Reichweite",
      text: "Die Qualität stimmte, aber auf Social Media fand die Burgerfabrik nicht statt — und gerade in der Gastronomie entscheiden Fotos und Videos, wer neue Gäste bekommt.",
      punkte: [
        "Kaum Social-Media-Präsenz",
        "Kein regelmäßiger Content",
        "Werbung wirkte gestellt statt appetitlich-echt",
      ],
    },
    loesung: {
      titel: "Echter Content aus dem Laden",
      text: "Wir produzieren Reels und Fotos direkt im laufenden Betrieb — echte Menschen, echtes Essen, echte Atmosphäre. Veröffentlicht in festem Rhythmus statt sporadisch.",
      punkte: [
        "Reels aus dem echten Ladenalltag",
        "Fester Veröffentlichungs-Rhythmus",
        "Ein Dreh liefert Content für mehrere Wochen",
      ],
    },
  },
];

export function getFallstudie(slug: string): Fallstudie | undefined {
  return fallstudien.find((f) => f.slug === slug);
}
