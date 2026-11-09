import type { Artikel } from "@/lib/blog-typen";

// Neu am 9.11.2026 (Blog-Woche). Erster Artikel zum Thema Mitarbeitergewinnung;
// die Leistungsseite /mitarbeitergewinnung hatte bis dahin keinen Blogartikel.

const artikel: Artikel = {
  slug: "mitarbeiter-finden-social-media",
  cover: "c3",
  kategorie: "Meta-Ads",
  titel: "Mitarbeiter finden über Social Media: Wie läuft eine Bewerberkampagne?",
  seoTitel: "Mitarbeiter finden über Social Media: So geht es",
  teaser:
    "Stellenanzeige geschaltet, drei Bewerbungen, keine passt. Warum die Leute, die du suchst, nicht auf Jobbörsen sind, wie eine Bewerberkampagne auf Instagram und Facebook aufgebaut ist und was sie wirklich kostet.",
  lesezeit: 9,
  datum: "2026-11-09",
  intro:
    "Der Satz fällt in fast jedem Erstgespräch mit einem Handwerksbetrieb oder einem mittelständischen Unternehmen: „Wir finden keine Leute.“ Dann folgt die Aufzählung: Anzeige in der Zeitung, Anzeige bei der großen Jobbörse, Aushang am Bauzaun, Schild am Firmenwagen. Drei Bewerbungen in vier Monaten, davon zwei ohne Führerschein. Die Erklärung ist nicht, dass es keine Leute gibt. Die Leute, die du suchst, haben einen Job, suchen nicht und lesen deshalb keine Jobbörse. Abends scrollen sie aber durch Instagram und Facebook. Dieser Artikel erklärt, wie eine Bewerberkampagne dort funktioniert, Schritt für Schritt, und was du vorher entscheiden musst.",
  body: [
    { typ: "h2", text: "Warum bringt die klassische Stellenanzeige kaum noch Bewerber?" },
    {
      typ: "p",
      text: "Eine Stellenanzeige erreicht nur Menschen, die aktiv suchen. Das sind in den meisten Gewerken die wenigsten, und unter ihnen sind viele, die aus gutem Grund gerade keinen Job haben. Die gute Elektrikerin, der zuverlässige Baggerfahrer, die Bürokraft, die den Laden zusammenhält: Die arbeiten alle irgendwo und würden wechseln, wenn das Angebot stimmt, aber von sich aus suchen sie nicht danach.",
    },
    {
      typ: "p",
      text: "Dazu kommt das Format. Eine Stellenanzeige ist eine Liste: Aufgaben, Anforderungen, „Wir bieten“. Darüber, wie es ist, bei dir zu arbeiten, sagt die Liste nichts. Wer wechselt, wechselt aber genau deshalb: wegen der Kollegen, dem Chef, der Baustelle um die Ecke statt zwei Stunden Fahrt, dem Gefühl, gesehen zu werden. Das lässt sich nicht aufzählen, nur zeigen.",
    },
    { typ: "h2", text: "Was macht Social Media anders?" },
    {
      typ: "p",
      text: "Auf Instagram und Facebook erreichst du Menschen, die gerade nicht suchen, und zwar nach dem, was sie sind: Wohnort im Umkreis deiner Baustellen, Alter, Interessen, Beruf, wo Meta ihn kennt. Die Anzeige erscheint zwischen den Beiträgen von Freunden, abends auf dem Sofa. Niemand hat sie gesucht, aber sie zeigt in fünfzehn Sekunden echte Kollegen, einen echten Chef und einen ehrlichen Satz dazu, warum man hier arbeiten will.",
    },
    {
      typ: "p",
      text: "Der zweite Unterschied: Bewerben ist dort ein Klick. Kein Anschreiben, kein Lebenslauf als PDF, keine Registrierung. Name, Telefonnummer, Beruf, zwei Fragen, fertig. Wer am Montagabend auf dem Sofa interessiert ist, will nicht am Dienstag ein Bewerbungsschreiben aufsetzen. Er will, dass jemand anruft.",
    },
    {
      typ: "bild",
      src: "/bilder/ads-recruiting-kampagne.webp",
      alt: "Anzeigenmotiv einer Bewerberkampagne: ein Mitarbeiter in Arbeitskleidung, dazu die Zeilen unbefristet, Festeinstellung, Andernach und die Frage, ob man alles auf Abbruch setzt",
      text: "Anzeigenmotiv aus einem Kundenprojekt (Van den Berg Gruppe, Zusammenarbeit bis 2024): echter Mitarbeiter, klarer Ort, eine Frage statt einer Anforderungsliste.",
      quelle: "Pixel56, Kundenprojekt",
      breite: 1600,
      hoehe: 2000,
    },
    { typ: "h2", text: "Wie ist eine Bewerberkampagne aufgebaut?" },
    {
      typ: "p",
      text: "Eine Kampagne, die Bewerber bringt, besteht aus fünf Teilen, und alle fünf müssen stimmen. Fehlt einer, bleibt das Budget liegen oder die Bewerbungen kommen, aber niemand kümmert sich darum.",
    },
    {
      typ: "grafik",
      name: "bewerber-weg",
      text: "Der Weg vom Scrollen zum Probearbeiten: Anzeige, Kurzformular, Rückruf, Kennenlernen. Jeder Schritt wird gemessen, damit klar ist, wo Bewerber verloren gehen.",
    },
    {
      typ: "ul",
      items: [
        "Zielgruppe: Wohnort im Umkreis, den ein Mitarbeiter täglich fahren würde, dazu Alter und Interessen. Nicht „Deutschland, 18 bis 65“.",
        "Motiv: ein echtes Video oder Foto aus deinem Betrieb. Kollegen, Chef, Baustelle, Werkstatt. Kein Stockfoto, kein Logo auf blauem Grund.",
        "Text: eine Frage oder ein Satz, der die Person anspricht, nicht die Stelle beschreibt. „Du setzt alles auf Abbruch?“ wirkt anders als „Abbruchhelfer (m/w/d) gesucht“.",
        "Formular: direkt in der App, fünf Felder, Telefonnummer Pflicht. Keine Weiterleitung auf eine Karriereseite mit Upload-Pflicht.",
        "Rückruf: innerhalb eines Tages, am besten am selben Abend. Wer nach drei Tagen anruft, erreicht jemanden, der sich nicht mehr erinnert.",
      ],
    },
    { typ: "h2", text: "Welche Motive funktionieren, und welche nicht?" },
    {
      typ: "p",
      text: "Am besten funktioniert, was sich nicht nach Werbung anfühlt. Der Geselle, der in die Kamera sagt, warum er seit acht Jahren da ist. Der Chef, der die neue Maschine zeigt und sagt, wer sie fahren darf. Die Bürokraft, die erklärt, dass hier um 16 Uhr Feierabend ist. Kurz, mit dem Handy gedreht, ohne Schnittgewitter. Zuschauer merken in einer Sekunde, ob etwas echt ist.",
    },
    {
      typ: "p",
      text: "Nicht funktioniert: das Logo mit „Wir stellen ein“, das Stockfoto vom lachenden Team, das es so nicht gibt, der Text mit allen Anforderungen. Und Anzeigen, die nicht sagen, wo der Arbeitsplatz ist. Der Ort ist für Fachkräfte das wichtigste Argument, weil er die Fahrzeit bestimmt. Er gehört in jede Anzeige, groß.",
    },
    {
      typ: "cta",
      titel: "Mitarbeitergewinnung mit Pixel56",
      text: "Drehtag in deinem Betrieb, Kampagne auf Instagram und Facebook, Formular mit Rückruf-Ablauf, monatliche Auswertung. Für Handwerk, Pflege, Logistik und Mittelstand.",
      href: "/mitarbeitergewinnung",
      label: "So läuft die Bewerberkampagne",
    },
    { typ: "h2", text: "Was kostet eine Bewerberkampagne?" },
    {
      typ: "p",
      text: "Zwei Posten: das Werbebudget, das an Meta geht, und die Arbeit für Dreh, Aufbau und Betreuung. Das Werbebudget hängt davon ab, wie groß dein Umkreis ist und wie viele Betriebe dort um dieselben Leute werben. Eine Kampagne für einen Ort im Westerwald ist günstiger als eine für Köln. Eine konkrete Zahl nennen wir nach dem Erstgespräch, wenn wir Beruf, Umkreis und Zeitraum kennen, nicht vorher, weil jede Pauschale vorher geraten wäre.",
    },
    {
      typ: "p",
      html: "Die bessere Rechnung ist eine andere: Was kostet dich die offene Stelle pro Monat? Aufträge, die du ablehnst, Überstunden, die du bezahlst, der Auftrag, den der Wettbewerber bekommt. Gegen diese Zahl ist eine Kampagne fast immer günstig. Wer parallel auch über Google gefunden werden will, wenn jemand aktiv „Job Dachdecker Koblenz“ sucht, kombiniert die Kampagne mit <a href=\"/google-ads\">Google Ads</a> auf die Karriereseite.",
      text: "",
    },
    { typ: "h2", text: "Was muss im Betrieb vorbereitet sein?" },
    {
      typ: "p",
      text: "Die Kampagne liefert Kontakte. Ob daraus Mitarbeiter werden, entscheidet sich im Betrieb. Drei Dinge müssen vorher geklärt sein: Wer ruft zurück, und zwar am selben Tag? Was wird am Telefon gesagt, und was ist der nächste Schritt, Kennenlernen, Probetag? Und was passiert mit Bewerbern, die gerade nicht passen, aber in einem halben Jahr vielleicht? Ein Betrieb, der das vorher regelt, stellt ein. Einer, der die Kontakte im Postfach sammelt, nicht.",
    },
    {
      typ: "p",
      html: "Viele Betriebe lassen die erste Antwort inzwischen automatisch rausgehen: Bestätigung, Rückrufzeit, eine freundliche Frage. Ob sich das für dich lohnt und wo es nicht lohnt, steht in unserer <a href=\"/checkliste-ki-agenten\">KI-Agenten-Checkliste</a>. Die <a href=\"/webdesign\">Karriereseite</a> auf der eigenen Website bleibt trotzdem wichtig: Wer die Anzeige gesehen hat, googelt den Betrieb, bevor er sich meldet.",
      text: "",
    },
    { typ: "h2", text: "Wie lange dauert es bis zur ersten Einstellung?" },
    {
      typ: "p",
      text: "Die ersten Kontakte kommen in der Regel in den ersten Tagen nach dem Start. Wie schnell daraus eine Einstellung wird, hängt am Rückruf und an der Stelle. Für Helfer und Quereinsteiger geht es oft innerhalb weniger Wochen, für Fachkräfte mit Kündigungsfrist dauert es länger, weil die Person erst zum Quartalsende wechseln kann. Deshalb läuft eine Kampagne sinnvoll mindestens sechs bis acht Wochen, mit zwei oder drei Motiven, die gegeneinander laufen. Nach dieser Zeit weißt du, welches Motiv Bewerber bringt und was ein Kontakt kostet, und entscheidest mit Zahlen weiter.",
    },
    {
      typ: "faq",
      items: [
        { q: "Instagram oder Facebook für Bewerber?", a: "Beides, mit Verschiebung nach Alter. Jüngere Bewerber und Azubis eher Instagram, erfahrene Fachkräfte und Quereinsteiger ab Mitte dreißig eher Facebook. Wir starten meist auf beiden Kanälen und verschieben das Budget dorthin, wo die Kontakte herkommen." },
        { q: "Muss der Chef selbst ins Video?", a: "Es hilft deutlich, ist aber kein Muss. Oft wirkt ein Mitarbeiter, der seit Jahren dabei ist, glaubwürdiger. Wichtig ist, dass echte Menschen aus dem Betrieb zu sehen sind, nicht Stockfotos." },
        { q: "Was ist mit Datenschutz bei Bewerberformularen?", a: "Die Daten aus dem Meta-Formular werden regelmäßig abgeholt und in deinem Betrieb gespeichert, nicht dauerhaft bei Meta. Bewerber bekommen einen Hinweis, wofür die Daten genutzt werden, und nicht passende Bewerbungen werden nach der Entscheidung gelöscht. Das richten wir mit ein." },
        { q: "Funktioniert das auch für Büro- und Pflegestellen?", a: "Ja. Das Muster ist dasselbe: echte Menschen, klarer Ort, Kurzformular, schneller Rückruf. Nur die Motive ändern sich: statt Baustelle das Büro oder die Station, statt Maschine die Kollegen." },
      ],
    },
  ],
  quellen: [
    { text: "Meta: Lead-Anzeigen mit Sofortformular, Hilfe für Werbetreibende", url: "https://www.facebook.com/business/help/1462876307360828" },
    { text: "Eigene Beobachtung aus Recruiting-Kampagnen von Pixel56, unter anderem für die Van den Berg Gruppe (Zusammenarbeit bis 2024); Zeiträume und Kosten je nach Beruf und Region unterschiedlich" },
  ],
};

export default artikel;
