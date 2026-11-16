import type { Artikel } from "@/lib/blog-typen";

// Neu geschrieben am 16.11.2026 (Blog-Woche 2). Slug bleibt wegen der
// Google-Historie: „mehr anfragen bekommen handwerksbetrieb“ auf Position 5,7,
// „mehr anfragen“ 7,8, rund 2.500 Impressionen in drei Monaten, 0 Klicks,
// Titel war im Suchergebnis abgeschnitten.

const artikel: Artikel = {
  slug: "5-einfache-tipps-um-mehr-kundenanfragen-als-handwerker-zu-bekommen",
  cover: "c1",
  kategorie: "Wachstum",
  titel: "Mehr Anfragen als Handwerksbetrieb: Welche 5 Hebel wirken zuerst?",
  seoTitel: "Mehr Anfragen als Handwerksbetrieb: 5 Hebel",
  teaser:
    "Mehr Anfragen ohne großes Werbebudget: fünf Hebel in der richtigen Reihenfolge, vom Google-Unternehmensprofil bis zur Antwortzeit, mit Selbsttest für deinen Betrieb.",
  lesezeit: 9,
  datum: "2026-11-16",
  intro:
    "Die meisten Handwerksbetriebe haben kein Problem mit ihrer Arbeit, sondern mit dem Weg, auf dem Kunden zu ihnen finden. Wer „Dachdecker Neuwied“ oder „Heizung reparieren Koblenz“ sucht, entscheidet sich in wenigen Minuten, und zwar zwischen den zwei, drei Betrieben, die er auf Anhieb findet und erreicht. Die gute Nachricht: Die wichtigsten Hebel dafür kosten wenig oder nichts. Hier sind fünf, in der Reihenfolge, in der wir sie bei fast jedem Betrieb prüfen, mit einem Selbsttest, den du heute Abend am Handy machen kannst.",
  body: [
    { typ: "h2", text: "Wo gehen Anfragen überhaupt verloren?" },
    {
      typ: "p",
      text: "Zwischen „Jemand sucht einen Handwerker“ und „Das Telefon klingelt“ liegen vier Stationen: gefunden werden, überzeugen, Kontakt aufnehmen, Antwort bekommen. An jeder Station steigen Menschen aus. Der eine findet dich nicht, weil dein Google-Profil leer ist. Die andere findet dich, sieht aber keine Bewertungen und ruft lieber den Nachbarbetrieb an. Der dritte will anfragen, findet aber die Nummer nicht. Und die vierte schreibt, hört drei Tage nichts und hat längst jemand anderen beauftragt.",
    },
    {
      typ: "p",
      text: "Mehr Werbung löst davon nur das erste Problem. Deshalb lohnt es sich, vorher die anderen drei zu schließen. Jede gewonnene Station wirkt auf alle Anfragen, nicht nur auf die bezahlten.",
    },
    {
      typ: "grafik",
      name: "anfrage-hebel",
      text: "Vier Stationen bis zur Anfrage und die fünf Hebel, die an ihnen ansetzen. Schematisch: An jeder Station steigen Menschen aus, jeder Hebel holt einen Teil zurück.",
    },
    { typ: "h2", text: "Hebel 1: Ist dein Google-Unternehmensprofil vollständig?" },
    {
      typ: "p",
      text: "Das Unternehmensprofil, früher Google My Business, ist kostenlos und für lokale Suchen oft wichtiger als die Website. Wer „Elektriker Andernach“ sucht, sieht zuerst die Karte mit drei Betrieben. Dort willst du stehen, und das entscheidet sich an Vollständigkeit, Aktualität und Bewertungen.",
    },
    {
      typ: "ul",
      items: [
        "Richtige Kategorie und alle Leistungen eingetragen, nicht nur „Dachdecker“, sondern auch Flachdach, Dachfenster, Reparatur.",
        "Einzugsgebiet mit den Orten, in denen du wirklich arbeitest.",
        "Öffnungszeiten aktuell, auch Feiertage und Betriebsurlaub.",
        "Zehn echte Fotos: Team, Fahrzeug, fertige Arbeiten, keine Stockbilder.",
        "Name, Adresse und Telefonnummer exakt so wie auf der Website und in Verzeichnissen.",
      ],
    },
    {
      typ: "p",
      html: "Wie das im Detail geht, steht in unserem Artikel zum <a href=\"/blog/google-business-profil-optimieren\">Google-Unternehmensprofil</a>. Profilpflege wirkt oft schon nach wenigen Wochen, schneller als jede neue Seite auf der Website.",
      text: "",
    },
    { typ: "h2", text: "Hebel 2: Sammelst du Bewertungen mit Inhalt?" },
    {
      typ: "p",
      text: "Bevor jemand anfragt, will er wissen, ob du gute Arbeit machst. Google-Bewertungen beantworten das glaubwürdiger als jeder Text auf deiner Website, und sie entscheiden mit, ob du in der Karte oben stehst. Bitte zufriedene Kunden direkt nach dem Auftrag um eine Bewertung, mit Link, solange die Zufriedenheit frisch ist. Ein QR-Code auf der Rechnung oder eine kurze WhatsApp-Nachricht reichen.",
    },
    {
      typ: "p",
      html: "Am wertvollsten sind Bewertungen, die sagen, was gemacht wurde und wo: „Flachdach in Vallendar in drei Tagen saniert, Baustelle sauber hinterlassen.“ Solche Sätze lesen Kunden, und solche Sätze zitiert inzwischen auch Googles KI-Übersicht, wenn jemand nach einem Betrieb fragt. Warum das wichtig ist, erklärt unser Artikel zu <a href=\"/blog/ki-uebersichten-weniger-klicks-mehr-kunden\">Googles KI-Übersichten</a>.",
      text: "",
    },
    {
      typ: "bild",
      src: "/bilder/gm-dachdecker-bewertung.webp",
      alt: "Mitarbeiter eines Dachdecker-Meisterbetriebs steht vor einer Baustelle neben dem Firmenwagen mit Logo und Telefonnummer",
      text: "Kundenprojekt GM-Dachdecker: Firmenwagen und Arbeitskleidung mit Logo und Telefonnummer sind die Visitenkarte auf jeder Baustelle. Wer dann sucht, findet denselben Namen bei Google wieder.",
      quelle: "Pixel56, Kundenprojekt GM-Dachdecker",
      breite: 1200,
      hoehe: 900,
    },
    { typ: "h2", text: "Hebel 3: Funktioniert deine Website auf dem Handy?" },
    {
      typ: "p",
      text: "Die meisten Menschen suchen einen Handwerker mit dem Smartphone, oft von der Baustelle, aus dem Auto oder abends vom Sofa. Wenn deine Website auf dem Handy langsam lädt, Texte abgeschnitten sind oder die Telefonnummer erst nach dreimal Scrollen kommt, ist der Besucher weg, bevor er gelesen hat, was du kannst.",
    },
    {
      typ: "p",
      html: "Der Selbsttest dauert zwei Minuten: Öffne deine Seite auf dem Handy. Lädt sie in unter drei Sekunden? Sind Leistungen, Einzugsgebiet und Kontakt sofort sichtbar? Lässt sich die Nummer mit einem Tipp anrufen? Steht für jede wichtige Leistung eine eigene Seite da? Wenn eine Antwort „nein“ ist, ist das dein größter Hebel. Eine technische Prüfung liefert unser kostenloser <a href=\"/website-check\">Website-Check</a>, und wenn die Seite grundsätzlich neu muss, steht auf unserer Seite zu <a href=\"/webdesign\">Webdesign</a>, wie wir das angehen.",
      text: "",
    },
    {
      typ: "cta",
      titel: "SEO-Checkliste: Lokales SEO für Handwerker",
      text: "Sieben Schritte vom Unternehmensprofil bis zur Website, 30 Prüfpunkte zum Abhaken, Textvorlagen für Bewertungen und ein Wochenplan. Kostenlos als PDF.",
      href: "/checkliste-seo",
      label: "Checkliste herunterladen",
    },
    { typ: "h2", text: "Hebel 4: Ist der Kontakt so leicht wie möglich?" },
    {
      typ: "p",
      text: "Viele Betriebe verstecken ihre Kontaktdaten im Impressum oder hinter einem Menüpunkt. Dabei ist der Kontakt der einzige Grund, warum jemand auf einer Handwerker-Website ist. Telefonnummer, WhatsApp und ein kurzes Formular gehören auf jede Seite, auf dem Handy am besten als feste Leiste unten am Bildschirm.",
    },
    {
      typ: "p",
      text: "Ein Formular mit zwölf Pflichtfeldern schreckt ab. Kunden haben wenig Zeit und wissen oft noch nicht genau, was sie brauchen. Name, Telefonnummer und eine kurze Beschreibung reichen für den Anfang, gern mit der Möglichkeit, ein Foto vom Schaden anzuhängen. Alles andere klärst du im Gespräch. Und biete mehrere Wege an: Manche rufen an, manche schreiben per WhatsApp, manche schicken abends ein Formular. Wer nur einen Weg anbietet, verliert alle, denen dieser Weg nicht passt.",
    },
    { typ: "h2", text: "Hebel 5: Wie schnell antwortest du?" },
    {
      typ: "p",
      text: "Der unterschätzteste Hebel von allen. Wer heute eine Anfrage schickt, schickt sie oft an zwei oder drei Betriebe gleichzeitig. Wer zuerst zurückruft, hat die besten Chancen, auch wenn er nicht der günstigste ist. Eine Anfrage, die drei Tage im Postfach liegt, ist meist verloren, ganz gleich, wie gut Profil und Website sind.",
    },
    {
      typ: "p",
      html: "Das muss nicht heißen, dass du ständig ans Telefon gehst. Eine automatische Bestätigung mit „Danke, wir melden uns morgen bis 12 Uhr“ und ein fester Zeitpunkt am Tag, an dem jemand alle Anfragen zurückruft, reichen. Wo solche Abläufe Zeit sparen und wo sie sich nicht lohnen, zeigt unsere <a href=\"/checkliste-ki-agenten\">KI-Agenten-Checkliste</a>.",
      text: "",
    },
    { typ: "h2", text: "In welcher Reihenfolge solltest du anfangen?" },
    {
      typ: "p",
      html: "Erst die Stationen, an denen du heute Anfragen verlierst, dann mehr Reichweite. Konkret: Diese Woche das Unternehmensprofil vervollständigen und drei Kunden um Bewertungen bitten. Nächste Woche den Handy-Selbsttest machen und die Kontaktwege auf jede Seite bringen. Dann einen festen Rückruf-Ablauf einführen. Erst wenn das steht, lohnen sich bezahlte Anzeigen wie <a href=\"/google-ads\">Google Ads</a>, weil dann jeder bezahlte Klick auf einen Betrieb trifft, der ihn auch in eine Anfrage verwandelt.",
      text: "",
    },
    {
      typ: "faq",
      items: [
        { q: "Was bringt am schnellsten mehr Anfragen?", a: "Meist das Google-Unternehmensprofil und eine schnellere Antwort auf vorhandene Anfragen. Beides kostet kein Werbebudget und wirkt in Wochen, nicht Monaten. Danach kommen Website und Bewertungen." },
        { q: "Brauche ich eine neue Website, um mehr Anfragen zu bekommen?", a: "Nicht unbedingt. Oft reicht es, die bestehende Seite auf dem Handy nutzbar zu machen, Kontaktwege sichtbar zu platzieren und für die wichtigsten Leistungen eigene Seiten anzulegen. Eine neue Website lohnt sich, wenn die alte technisch nicht mehr zu retten ist." },
        { q: "Wie viele Google-Bewertungen brauche ich?", a: "Es gibt keine feste Zahl. Wichtiger als die Menge ist, dass regelmäßig neue dazukommen und dass sie sagen, was gemacht wurde. Eine pro Woche ist mehr wert als zwanzig in einem Monat und dann ein Jahr nichts." },
        { q: "Lohnt sich Werbung, bevor die fünf Hebel stehen?", a: "Selten. Werbung bringt Besucher, aber wenn Profil, Website, Kontakt und Antwortzeit nicht stimmen, verlierst du die meisten davon. Erst die Stationen schließen, dann Reichweite kaufen." },
      ],
    },
  ],
  quellen: [
    { text: "Google: Hilfe zum Unternehmensprofil, Tipps zur Verbesserung des lokalen Rankings (Relevanz, Entfernung, Bekanntheit)", url: "https://support.google.com/business/answer/7091" },
    { text: "Eigene Beobachtung aus Kundenprojekten von Pixel56 im Handwerk, Stand November 2026" },
  ],
};

export default artikel;
