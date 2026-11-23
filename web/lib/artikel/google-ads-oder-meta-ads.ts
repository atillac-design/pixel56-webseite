import type { Artikel } from "@/lib/blog-typen";

// Neu am 23.11.2026 (Blog-Woche 3). Die Frage aus fast jedem Erstgespräch:
// Welcher Werbekanal zuerst? Antwort nach Suchverhalten, nicht nach Geschmack.

const artikel: Artikel = {
  slug: "google-ads-oder-meta-ads",
  cover: "c3",
  kategorie: "Wachstum",
  titel: "Google Ads oder Meta Ads: Was passt zu welchem Betrieb?",
  seoTitel: "Google Ads oder Meta Ads: Was passt zu dir?",
  teaser:
    "Google holt Nachfrage ab, die schon da ist. Facebook und Instagram wecken Nachfrage, die noch keiner googelt. Welcher Kanal für Handwerk, Dienstleister und Mittelstand zuerst dran ist, woran du das erkennst und was beide gemeinsam brauchen.",
  lesezeit: 9,
  datum: "2026-11-23",
  intro:
    "„Sollen wir lieber bei Google werben oder auf Instagram?“ Diese Frage hören wir in fast jedem Erstgespräch, und die Antwort ist selten „beides, sofort“. Die beiden Kanäle funktionieren grundverschieden: Google Ads zeigt deine Anzeige, wenn jemand gerade sucht. Meta Ads zeigen sie, während jemand im Feed scrollt und an alles denkt, nur nicht an dich. Welcher Kanal zuerst dran ist, hängt nicht vom Geschmack ab, sondern davon, ob deine Kunden schon nach dir suchen. Dieser Artikel gibt dir die Entscheidungsfragen, Beispiele aus typischen Betrieben und die Grundlagen, ohne die beide Kanäle Geld verbrennen.",
  body: [
    { typ: "h2", text: "Worin unterscheiden sich Google Ads und Meta Ads eigentlich?" },
    {
      typ: "p",
      text: "Der Unterschied liegt nicht in der Technik, sondern im Moment, in dem deine Anzeige erscheint. Bei Google tippt jemand „Dachdecker Notdienst“ mit seinem Ort ein. Der Bedarf ist da, oft dringend, und die Anzeige steht genau über den Treffern, die er sowieso sehen wollte. Du holst Nachfrage ab, die schon existiert. Das ist der große Vorteil: Wer klickt, hat ein konkretes Anliegen. Der Nachteil: Es gibt nur so viele Suchen, wie es Suchende gibt. Wenn in deiner Region niemand nach deiner Leistung sucht, kannst du so viel bieten, wie du willst.",
    },
    {
      typ: "p",
      text: "Bei Facebook und Instagram sucht niemand. Die Menschen scrollen abends durch den Feed, sehen Fotos von Bekannten, ein Video, eine Anzeige. Deine Anzeige muss den Daumen stoppen und in zwei Sekunden erklären, warum sie wichtig ist. Du weckst Nachfrage, die noch nicht formuliert war: für ein Angebot, von dem man nicht wusste, dass man es braucht, für einen Arbeitgeber, nach dem niemand aktiv gesucht hat, für einen Kurs, dessen Anmeldefrist läuft. Dafür erreichst du Menschen, die Google nie erreicht hätte, und du kannst sehr genau nach Region und Interessen eingrenzen.",
    },
    {
      typ: "grafik",
      name: "kanal-wahl",
      text: "Die eine Frage, die den Kanal entscheidet: Sucht dein Kunde schon danach? Dann Google. Noch nicht? Dann Meta. Schematisch, keine Messwerte.",
    },
    { typ: "h2", text: "Wann ist Google Ads die richtige Wahl?" },
    {
      typ: "p",
      html: "Immer dann, wenn das Problem deiner Kunden akut ist und sie mit Ort suchen. Rohrbruch, Sturmschaden, Schlüssel weg, Zahn abgebrochen: Wer so sucht, braucht heute jemanden und ruft den Ersten an, der erreichbar wirkt. Suchanzeigen mit Anrufoption holen genau diesen Moment ab. Dasselbe gilt für Leistungen, die man im Umkreis sucht: Pflegedienst, Fahrschule, Steuerberatung, Physiotherapie. Wie wir solche Kampagnen aufbauen, steht auf unserer Seite zu <a href=\"/google-ads\">Google Ads</a>.",
      text: "",
    },
    {
      typ: "ul",
      items: [
        "Akuter Bedarf mit Ort: Notdienst, Reparatur, Ersatz. Die Anzeige mit Telefonnummer gewinnt.",
        "Nischen mit wenigen, aber wertvollen Suchen: Spezialtransporte, Trocknungstechnik, Industrieservice. Wenige Klicks, jeder ein möglicher großer Auftrag.",
        "Saisonale Nachfrage: Nachhilfe vor den Zeugnissen, Schulungen zum Anmeldezeitraum, Gartenbau im Frühjahr. Kampagne an, wenn die Welle kommt.",
        "Hochpreisige Entscheidungen, bei denen Kunden lange recherchieren: Hausbau, Sanierung, Maschinen. Die Zielseite muss Fragen beantworten, nicht nur werben.",
      ],
    },
    {
      typ: "p",
      text: "Google Ads passt nicht, wenn deine Leistung neu oder erklärungsbedürftig ist und noch niemand den Begriff dafür kennt. Dann gibt es keine Suche, die du abholen könntest. Und es passt nur bedingt, wenn du Mitarbeiter suchst: Wer bei Google „Job Dachdecker“ eingibt, sucht meist schon aktiv und oft auf Jobbörsen. Die guten Leute, die gerade zufrieden angestellt sind, erreichst du dort nicht.",
    },
    { typ: "h2", text: "Wann sind Meta Ads die richtige Wahl?" },
    {
      typ: "p",
      html: "Wenn du Menschen erreichen willst, die nicht suchen. Der klassische Fall ist die <a href=\"/mitarbeitergewinnung\">Mitarbeitergewinnung</a>: Die Fachkraft, die du willst, hat einen Job und liest keine Stellenbörse. Im Feed sieht sie dein Team, die Baustelle, den Firmenwagen, und bewirbt sich in zwei Minuten über ein Kurzformular. Der zweite Fall sind Angebote, die man sich wünscht, aber nicht googelt: Kurse, Veranstaltungen, Umbauten, ein neues Studio in der Nähe. Und der dritte ist Bekanntheit im Umkreis: Wer dich dreimal im Feed gesehen hat, ruft eher an, wenn der Bedarf irgendwann kommt.",
      text: "",
    },
    {
      typ: "ul",
      items: [
        "Bewerber, die nicht aktiv suchen: Einblick in den Betrieb, echte Kollegen, Bewerbung ohne Anschreiben.",
        "Kurse, Termine, Veranstaltungen mit fester Frist: Anzeige führt direkt zur Anmeldung.",
        "Angebote, die Lust machen, statt ein Problem zu lösen: Küche, Garten, Wellness, Fotoshooting.",
        "Wiederansprache: Wer auf deiner Website war und nicht angefragt hat, sieht danach die passende Anzeige. Günstig, weil die Person dich schon kennt.",
      ],
    },
    {
      typ: "bild",
      src: "/bilder/ads-fb-beispiele.webp",
      alt: "Meta-Anzeige für einen Abbruch- und Tiefbaubetrieb: Mitarbeiter in Arbeitskleidung, Stelle Baggerfahrer, Ort und Bewerbungsaufruf",
      text: "So sieht eine Meta-Anzeige für Bewerber aus: ein echter Mitarbeiter, eine klare Stelle, ein Ort. Motiv aus einem Kundenprojekt (Van den Berg Gruppe, Zusammenarbeit bis 2024).",
      quelle: "Pixel56, Kundenprojekt",
    },
    {
      typ: "p",
      html: "Meta Ads passen nicht gut, wenn dein Kunde ein akutes Problem hat. Wer gerade mit einem Rohrbruch im Keller steht, scrollt nicht durch Instagram. Und sie funktionieren schlecht ohne Material: Stockfotos und Logos stoppen keinen Daumen. Was im Feed wirkt, sind Aufnahmen aus dem Alltag, auch mit dem Handy gemacht. Mehr dazu auf unserer Seite zu <a href=\"/facebook-meta-ads\">Meta Ads</a>.",
      text: "",
    },
    { typ: "h2", text: "Welche fünf Fragen entscheiden, welcher Kanal zuerst dran ist?" },
    {
      typ: "ul",
      items: [
        "Sucht mein Kunde aktiv danach, mit Ort? Ja: Google zuerst. Nein oder „weiß nicht“: Gib den Begriff selbst bei Google ein. Erscheinen Anzeigen von Wettbewerbern, gibt es Nachfrage.",
        "Wie dringend ist das Problem? Je akuter, desto Google. Je mehr Wunsch statt Not, desto Meta.",
        "Wen will ich erreichen: Kunden oder Bewerber? Bewerber fast immer Meta, Kunden je nach Suchverhalten.",
        "Habe ich eine Seite, die das Versprechen der Anzeige einlöst? Ohne Zielseite ist jeder Kanal zu teuer.",
        "Kann das Budget mehrere Monate konstant laufen? Beide Systeme lernen aus Daten. Wer nach zwei Wochen abschaltet, hat für das Lernen bezahlt und nichts geerntet.",
      ],
    },
    {
      typ: "cta",
      titel: "Prüf deine Zielseite, bevor du Budget hineinschickst",
      text: "Der kostenlose Website-Check zeigt in dreißig Sekunden, ob deine Seite schnell lädt, mobil funktioniert und technisch sauber ist. Rein technisch, ohne Anmeldung.",
      href: "/website-check",
      label: "Website-Check starten",
    },
    { typ: "h2", text: "Was brauchen beide Kanäle, bevor der erste Euro fließt?" },
    {
      typ: "p",
      html: "Drei Dinge, und sie sind wichtiger als die Kanalfrage. Erstens eine Zielseite, die genau das hält, was die Anzeige verspricht: Wer auf „Flachdachsanierung in Koblenz“ klickt und auf einer allgemeinen Startseite landet, ist weg. Eine Seite pro Angebot, mit Antworten auf die Fragen, die der Kunde jetzt hat, und einem Weg zur Anfrage, der auf dem Handy funktioniert. Das ist das Handwerk hinter <a href=\"/landingpages-funnels\">Landingpages und Funnels</a>, und oft der Grund, warum eine Kampagne nach dem Wechsel der Zielseite plötzlich läuft.",
      text: "",
    },
    {
      typ: "p",
      text: "Zweitens eine Messung, die Anfragen zählt, nicht Klicks. Anrufe, Formulare, Buchungen müssen im Werbekonto ankommen, mit Einwilligung der Besucher. Erst dann kann das System lernen, welche Anzeige Anfragen bringt, und du kannst entscheiden, ob sich das Budget rechnet. Ohne Messung optimierst du nach Gefühl, und Gefühl ist teuer.",
    },
    {
      typ: "p",
      text: "Drittens Konstanz. Beide Systeme beginnen jede Kampagne fast bei null und lernen aus jedem Klick. Ein moderates Budget über Monate bringt fast immer mehr als ein hoher Betrag für zwei Wochen. Und: Das Werbekonto gehört dir, nicht der Agentur. Budget, Daten und Kampagnen bleiben nachvollziehbar, auch wenn die Zusammenarbeit irgendwann endet.",
    },
    { typ: "h2", text: "Drei Betriebe, drei Entscheidungen: Wie sieht das konkret aus?" },
    {
      typ: "p",
      text: "Die folgenden Betriebe sind erfunden, die Muster dahinter sehen wir in echten Projekten. Dachdeckerei Muster will mehr Aufträge im Umkreis. Ihre Kunden suchen mit Ort und oft nach einem Sturm. Entscheidung: Google Ads mit Suchanzeigen für „Dachdecker“ und „Sturmschaden“ plus Anrufoption, eine Zielseite pro Leistung. Meta kommt später dazu, wenn das Team wachsen soll.",
    },
    {
      typ: "p",
      text: "Fahrschule Beispiel hat zwei Ziele: neue Fahrschüler und ein Intensivkurs im Sommer. Fahrschüler suchen mit Ort, also Google für „Fahrschule“ plus Stadtteil. Den Intensivkurs googelt niemand, dafür läuft eine Meta-Kampagne an Siebzehnjährige und deren Eltern im Umkreis, mit Frist und Anmeldeformular. Zwei Kanäle, zwei verschiedene Aufgaben.",
    },
    {
      typ: "p",
      text: "Pflegedienst Muster sucht Pflegekräfte. Kunden kommen über Empfehlungen und Ärzte, das Problem sind die Mitarbeiter. Die guten Pflegekräfte haben einen Job und sind unzufrieden mit Dienstplan oder Fahrzeit. Entscheidung: Meta Ads mit kurzen Videos aus dem Team, festen Touren und Bewerbung per Kurzformular. Google nur mit kleinem Budget für den eigenen Namen, damit Bewerber, die den Betrieb googeln, auf der Karriereseite landen.",
    },
    { typ: "h2", text: "Wie startest du, ohne Budget zu verbrennen?" },
    {
      typ: "p",
      html: "Mit einem Kanal, einer Kampagne, einem Ziel. Lege vorher fest, was eine Anfrage sein darf, baue die Zielseite, teste die Messung, und gib der Kampagne einen festen Testzeitraum von einigen Wochen. Werte wöchentlich aus: Suchbegriffe oder Zielgruppen, Klickpreis, Anfragen. Budget wandert dorthin, wo Anfragen entstehen. Erst wenn der erste Kanal stabil läuft, kommt der zweite dazu. Parallel lohnt sich die Arbeit an der <a href=\"/suchmaschinenoptimierung\">Suchmaschinenoptimierung</a>: Google Ads zeigt dir in Wochen, welche Begriffe Anfragen bringen, und genau für diese Begriffe baust du dann Inhalte, die auf Dauer ohne Klickkosten gefunden werden.",
      text: "",
    },
    {
      typ: "p",
      html: "Wenn du vorher wissen willst, wie gut dein Betrieb lokal gefunden wird, hilft dir unsere kostenlose <a href=\"/checkliste-seo\">SEO-Checkliste</a> mit Prüfpunkten für Unternehmensprofil, Website und Bewertungen. Und wenn die Website selbst der Engpass ist, weil sie langsam ist oder auf dem Handy nicht funktioniert, lohnt der Blick auf unsere Seite zu <a href=\"/webdesign\">Webdesign</a>, bevor du Anzeigen auf sie schickst.",
      text: "",
    },
    {
      typ: "faq",
      items: [
        { q: "Kann ich Google Ads und Meta Ads gleichzeitig starten?", a: "Technisch ja, sinnvoll selten. Jeder Kanal braucht eigene Anzeigen, eigene Zielseiten und Aufmerksamkeit bei der Auswertung. Starte mit dem Kanal, der zu deinem Suchverhalten passt, und nimm den zweiten dazu, wenn der erste stabil läuft." },
        { q: "Wie viel Budget brauche ich für den Anfang?", a: "Wichtiger als die Höhe ist, dass das Budget mehrere Monate konstant laufen kann und dass Zielseite und Messung stehen. Den Rahmen für dein Angebot und deine Region klären wir im Erstgespräch, pauschale Zahlen wären unseriös." },
        { q: "Was ist mit Google Ads für Mitarbeitergewinnung?", a: "Für Bewerber, die aktiv suchen und deinen Betrieb googeln, lohnt eine kleine Kampagne auf den eigenen Namen. Für Fachkräfte, die nicht suchen, ist Meta der stärkere Kanal, weil du sie im Feed erreichst, bevor sie wechseln wollen." },
        { q: "Ersetzen Anzeigen die Suchmaschinenoptimierung?", a: "Nein, sie ergänzen sich. Anzeigen bringen ab dem ersten Tag Besucher und enden mit dem Budget. SEO braucht Monate und bringt dann Anfragen ohne Klickkosten. Die Daten aus Google Ads zeigen dir, für welche Begriffe sich SEO lohnt." },
      ],
    },
  ],
  quellen: [
    { text: "Google Ads-Hilfe: Den richtigen Kampagnentyp auswählen (Such-, Display-, Performance-Max- und weitere Kampagnen)", url: "https://support.google.com/google-ads/answer/2567043?hl=de" },
    { text: "Meta Business-Hilfe: Zielgruppen, Platzierungen und Lernphase von Kampagnen", url: "https://www.facebook.com/business/help" },
    { text: "Eigene Beobachtung aus Google-Ads- und Meta-Ads-Projekten von Pixel56, Stand November 2026; die genannten Betriebe sind erfundene Beispiele" },
  ],
};

export default artikel;
