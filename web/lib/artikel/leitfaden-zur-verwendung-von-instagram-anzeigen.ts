import type { Artikel } from "@/lib/blog-typen";

const artikel: Artikel = {
  slug: "leitfaden-zur-verwendung-von-instagram-anzeigen",
  cover: "c3",
  kategorie: "Soziale Medien",
  titel: "Wie man auf Instagram wirbt: Ein 5-Schritte-Leitfaden zur Verwendung von Instagram-Anzeigen",
  teaser:
    "Instagram-Anzeigen in fünf Schritten: Ziel festlegen, Zielgruppe eingrenzen, Format wählen, Creative bauen, Budget und Messung einrichten. Für Betriebe, die zum ersten Mal werben.",
  lesezeit: 4,
  datum: "2024-08-11",
  intro:
    "Instagram-Anzeigen sind für kleine Betriebe einer der einfachsten Wege, Menschen in der Region zu erreichen, die noch nicht nach ihnen suchen. Die Einrichtung läuft über den Werbeanzeigenmanager von Meta, denselben wie für Facebook. Dieser Leitfaden führt dich in fünf Schritten zur ersten Kampagne und erklärt vorher, welche Formate es gibt und wovon die Kosten abhängen.",
  body: [
    { typ: "h2", text: "Was Instagram-Anzeigen sind" },
    { typ: "p", text: "Instagram-Anzeigen sind bezahlte Beiträge, die im Feed, in Storys, in Reels oder im Entdecken-Bereich erscheinen. Sie sehen aus wie normale Beiträge, tragen aber die Kennzeichnung „Gesponsert“ und haben zusätzliche Funktionen: einen Button wie „Mehr dazu“ oder „Kontaktieren“, einen Link zu deiner Website oder ein Formular direkt in der App." },
    { typ: "p", text: "Du erstellst sie nicht in der Instagram-App, sondern im Werbeanzeigenmanager. Dort legst du Ziel, Zielgruppe, Budget und Anzeigen fest und siehst später, was die Kampagne gebracht hat. Ein Unternehmenskonto auf Instagram, verknüpft mit einer Facebook-Seite, ist Voraussetzung." },
    { typ: "h2", text: "Was Instagram-Anzeigen kosten" },
    { typ: "p", text: "Einen festen Preis gibt es nicht. Du legst ein Tages- oder Laufzeitbudget fest, und Meta versteigert die Anzeigenplätze. Was ein Klick oder eine Anfrage kostet, hängt von deiner Zielgruppe, dem Wettbewerb in deiner Branche, der Jahreszeit und der Qualität deiner Anzeige ab. Im vierten Quartal, rund um Black Friday und Weihnachten, wird es teurer." },
    { typ: "p", text: "Für den Einstieg reicht ein kleines Tagesbudget, das du nach zwei Wochen anhand der Ergebnisse erhöhst oder umverteilst. Der Werbeanzeigenmanager zeigt dir beim Einrichten eine geschätzte Reichweite, an der du ablesen kannst, ob Budget und Zielgruppe zusammenpassen." },
    { typ: "h2", text: "Die wichtigsten Anzeigenformate" },
    { typ: "ul", items: [
      "Bildanzeigen: ein Bild, kurzer Text, Button. Gut für ein klares Angebot oder eine Leistung, die sich in einem Motiv zeigen lässt. Wenig Text im Bild, Instagram bevorzugt saubere Motive.",
      "Videoanzeigen im Feed: kurze Clips, idealerweise unter 30 Sekunden, mit Untertiteln, weil viele ohne Ton schauen.",
      "Story-Anzeigen: bildschirmfüllend, zwischen den Storys anderer Konten. Funktionieren am besten, wenn sie wie eine normale Story wirken, mit Text, Stickern und einem klaren Wischen-Aufruf.",
      "Reels-Anzeigen: vertikale Videos zwischen organischen Reels, mit Ton oder Musik. Aktuell das Format mit der größten Reichweite.",
      "Karussell-Anzeigen: bis zu zehn Bilder oder Videos zum Durchwischen. Gut für Vorher-nachher, mehrere Leistungen oder eine Schritt-für-Schritt-Geschichte.",
      "Collection- und Shopping-Anzeigen: für Händler mit Produktkatalog. Nutzer sehen Produkte direkt in der Anzeige.",
      "Explore-Anzeigen: erscheinen, wenn jemand im Entdecken-Bereich einen Beitrag öffnet. Hier kannst du vorhandene Motive wiederverwenden.",
    ] },
    { typ: "h2", text: "Schritt 1: Ziel festlegen" },
    { typ: "p", text: "Der Werbeanzeigenmanager fragt zuerst nach dem Kampagnenziel: Bekanntheit, Traffic, Interaktionen, Leads, Verkäufe. Wähl das, was du wirklich willst. Für Handwerk und Dienstleister sind das meist Leads, also Anfragen über ein Formular, oder Traffic auf eine Zielseite mit Kontaktmöglichkeit. Das Ziel bestimmt, wem Meta deine Anzeige zeigt." },
    { typ: "h2", text: "Schritt 2: Zielgruppe eingrenzen" },
    { typ: "p", text: "Standort ist für lokale Betriebe der wichtigste Filter: ein Umkreis um deinen Standort oder eine Liste von Orten. Dazu Alter und bei Bedarf Interessen. Übertreib es nicht mit der Eingrenzung, Meta findet mit einer mittelgroßen Zielgruppe oft bessere Ergebnisse als mit einer winzigen. Wenn du Website-Besucher oder bestehende Kunden erneut ansprechen willst, brauchst du das Meta-Pixel auf der Website oder eine Kundenliste." },
    { typ: "h2", text: "Schritt 3: Platzierung und Format wählen" },
    { typ: "p", text: "Du kannst Meta die Platzierung überlassen oder nur Instagram auswählen. Für den Anfang ist die automatische Platzierung meist günstiger. Beim Format gilt: Was du zeigen willst, entscheidet. Eine Leistung mit sichtbarem Ergebnis spricht für Karussell oder Reel, ein Angebot mit Frist für Bild oder Story." },
    { typ: "h2", text: "Schritt 4: Anzeige bauen" },
    { typ: "p", text: "Echte Aufnahmen aus deinem Betrieb schlagen Stockfotos. Der erste Satz muss das Problem oder den Nutzen nennen, der Button sagt, was als Nächstes passiert. Die Zielseite muss zur Anzeige passen: Wer auf „Kostenlose Dachinspektion“ klickt, darf nicht auf der Startseite landen. Erstell zwei bis drei Varianten mit unterschiedlichem Motiv oder Einstieg, dann siehst du nach ein paar Tagen, was läuft." },
    { typ: "h2", text: "Schritt 5: Budget, Laufzeit und Messung" },
    { typ: "p", text: "Leg ein Tagesbudget und eine Laufzeit von mindestens zwei Wochen fest, damit Meta genug Daten sammeln kann. Richte vorher das Tracking ein: Meta-Pixel oder Conversions API auf der Website, Ereignisse für Formular und Anruf. Dann siehst du nicht nur Klicks, sondern Anfragen und ihre Kosten. Prüf die Kampagne nach einer Woche, schalte die schwächste Variante ab und gib der besten mehr Budget." },
    { typ: "h2", text: "Fazit" },
    {
      typ: "p",
      text: "Instagram-Anzeigen sind schnell eingerichtet, aber nur mit klarem Ziel, passender Zielseite und Tracking ein Gewinn. Wer die fünf Schritte einhält, weiß nach zwei Wochen, was eine Anfrage kostet, und kann von dort aus skalieren. Wenn du die Einrichtung und Betreuung abgeben willst, findest du alles auf unserer Seite zu Meta Ads.",
      html: "Instagram-Anzeigen sind schnell eingerichtet, aber nur mit klarem Ziel, passender Zielseite und Tracking ein Gewinn. Wer die fünf Schritte einhält, weiß nach zwei Wochen, was eine Anfrage kostet, und kann von dort aus skalieren. Wenn du die Einrichtung und Betreuung abgeben willst, findest du alles auf unserer Seite zu <a href=\"/facebook-meta-ads\">Meta Ads</a>.",
    },
  ],
};

export default artikel;
