import type { Artikel } from "@/lib/blog-typen";

const artikel: Artikel = {
  slug: "warum-ihre-website-im-jahr-2024-mobil-first-sein-sollte",
  cover: "c3",
  kategorie: "Webdesign",
  titel: "Warum deine Website mobil-first sein sollte",
  teaser:
    "Die meisten Besucher kommen über das Handy, und Google bewertet die mobile Version deiner Website. Was mobil-first bedeutet und wie du es umsetzt.",
  lesezeit: 3,
  datum: "2024-08-11",
  intro:
    "Mehr als die Hälfte aller Website-Besuche kommt heute vom Smartphone, bei Handwerk und lokalen Dienstleistern oft deutlich mehr. Google bewertet deshalb seit Jahren die mobile Version einer Website, nicht die Desktop-Ansicht. Eine Seite, die auf dem Handy nur „irgendwie funktioniert“, verliert Besucher und Rankings zugleich. Mobil-first heißt: Die Handy-Version ist der Maßstab, nicht der Notbehelf.",
  body: [
    { typ: "h2", text: "Warum mobil-first entscheidend ist" },
    { typ: "p", text: "Drei Gründe, die zusammenwirken: Erstens suchen Kunden unterwegs, aus dem Auto, von der Baustelle, abends vom Sofa. Zweitens nutzt Google die mobile Version deiner Seite für die Bewertung in den Suchergebnissen. Drittens entscheidet die Bedienung auf dem kleinen Bildschirm, ob jemand anruft oder weiterscrollt. Lange Ladezeiten, winzige Schrift und Buttons, die man nicht trifft, kosten Anfragen, jeden Tag." },
    { typ: "h2", text: "1. Flexibles Layout" },
    { typ: "p", text: "Eine mobil-first gebaute Seite passt sich jeder Bildschirmgröße an: Inhalte stehen auf dem Handy untereinander, auf dem Desktop nebeneinander, Bilder skalieren mit. Das ist heute Standard, aber viele ältere Websites und Baukasten-Vorlagen bringen auf dem Handy Elemente durcheinander oder schneiden sie ab." },
    { typ: "h2", text: "2. Ladezeit" },
    { typ: "p", text: "Mobile Nutzer haben oft schlechteren Empfang und weniger Geduld. Große Bilder, unnötige Skripte und Schriften von Drittanbietern bremsen. Komprimierte Bilder im richtigen Format, schlanker Code und ein Server, der schnell antwortet, bringen die Seite unter drei Sekunden. Prüfen kannst du das kostenlos mit Googles PageSpeed Insights." },
    { typ: "h2", text: "3. Bedienung mit dem Daumen" },
    { typ: "p", text: "Ein einfaches Menü, Buttons, die man mit dem Finger trifft, und die Telefonnummer als anklickbarer Link. Was auf dem Desktop mit der Maus geht, muss auf dem Handy mit dem Daumen gehen. Der wichtigste Test: Lässt sich eine Anfrage in unter einer Minute abschicken?" },
    { typ: "h2", text: "4. Inhalte für kleine Bildschirme" },
    { typ: "p", text: "Kurze Absätze, klare Zwischenüberschriften, lesbare Schriftgrößen. Auf dem Handy liest niemand Textwände. Bilder und kurze Videos lockern auf, sollten aber nicht den eigentlichen Inhalt ersetzen. Das Wichtigste gehört nach oben: Was du machst, wo, und wie man dich erreicht." },
    { typ: "h2", text: "5. Testen, nicht annehmen" },
    { typ: "p", text: "Öffne deine Website auf deinem eigenen Handy und auf einem älteren Gerät. Lass jemanden aus deiner Zielgruppe eine Anfrage stellen und schau zu. Jede Stelle, an der die Person zögert oder zoomt, ist ein Punkt auf deiner Liste." },
    { typ: "h2", text: "Fazit" },
    {
      typ: "p",
      text: "Mobil-first ist kein Trend, sondern seit Jahren die Grundlage jeder Website, die Anfragen bringen soll. Wer jetzt neu baut oder einen Relaunch plant, sollte die Handy-Version als Erstes abnehmen, nicht als Letztes. So bauen wir bei Pixel56 jede Website, von der Struktur bis zur Technik.",
      html: "Mobil-first ist kein Trend, sondern seit Jahren die Grundlage jeder Website, die Anfragen bringen soll. Wer jetzt neu baut oder einen Relaunch plant, sollte die Handy-Version als Erstes abnehmen, nicht als Letztes. So bauen wir bei Pixel56 jede Website, von der Struktur bis zur Technik: <a href=\"/webdesign\">Webdesign bei Pixel56</a>.",
    },
  ],
};

export default artikel;
