/**
 * Blog-Artikel als Fallback-Inhalt, solange das CMS (Sanity) leer ist.
 * Jeder Artikel hat einen vollständigen Body aus Absätzen und
 * Zwischenüberschriften. Sobald Sanity-Beiträge existieren, ersetzen sie
 * diese Liste auf der Blog-Übersicht (Detailseiten bleiben hier).
 */

export type Block =
  | { typ: "p"; text: string }
  | { typ: "h2"; text: string }
  | { typ: "ul"; items: string[] };

export type Artikel = {
  slug: string;
  cover: string; // c1 … c6
  kategorie: string;
  titel: string;
  teaser: string;
  lesezeit: number;
  datum: string; // ISO
  intro: string;
  body: Block[];
};

export const artikel: Artikel[] = [
  {
    slug: "website-kosten-handwerksbetriebe",
    cover: "c1",
    kategorie: "Website",
    titel: "Website-Kosten für Handwerksbetriebe: Was ist realistisch?",
    teaser:
      "Was eine professionelle Website wirklich kostet — und warum die billigste Lösung oft am Ende teurer wird.",
    lesezeit: 6,
    datum: "2026-06-20",
    intro:
      "„Was kostet denn so eine Website?“ ist die häufigste Frage im Erstgespräch — und die ehrlichste Antwort lautet: Es kommt darauf an. Aber „es kommt darauf an“ hilft niemandem weiter. Deshalb ordnen wir hier ein, was realistisch ist und woran du die Preisspanne festmachen kannst.",
    body: [
      { typ: "h2", text: "Warum es keinen Festpreis gibt" },
      { typ: "p", text: "Eine Website ist kein Produkt aus dem Regal, sondern eine Dienstleistung. Der Aufwand hängt davon ab, wie viele Seiten sie hat, ob Texte und Bilder schon vorliegen, ob Funktionen wie ein Karriereportal oder eine Terminbuchung dazukommen — und wie viel Abstimmung nötig ist. Zwei Betriebe mit demselben Gewerk können deshalb sehr unterschiedliche Angebote bekommen." },
      { typ: "h2", text: "Die drei typischen Größenordnungen" },
      { typ: "ul", items: [
        "Eine fokussierte Landingpage (eine Seite, ein Ziel — etwa für eine Werbekampagne) ist der günstigste Einstieg.",
        "Eine klassische Firmen-Website mit Startseite, Leistungen, Über uns und Kontakt liegt in der Mitte.",
        "Ein Auftritt mit Zusatzfunktionen — Karriereportal mit Upload, mehrsprachig, Anbindung an Tools — ist der obere Bereich.",
      ] },
      { typ: "p", text: "Wichtiger als die reine Zahl ist, was dahintersteckt: Wird die Seite technisch sauber gebaut, lädt sie schnell, ist sie für Google auffindbar und auf dem Handy fehlerfrei? Genau daran spart die billigste Baukasten-Lösung meist — und das kostet später Anfragen." },
      { typ: "h2", text: "Warum billig oft teurer wird" },
      { typ: "p", text: "Eine Website, die niemand findet oder die auf dem Handy zerbricht, bringt keine Kunden. Wenn du sie dann nach einem Jahr neu machen lässt, hast du zweimal bezahlt. Eine solide gebaute Seite ist eine Investition, die über Jahre Anfragen bringt — und sich damit selbst trägt." },
      { typ: "h2", text: "Woran du ein faires Angebot erkennst" },
      { typ: "ul", items: [
        "Es nennt konkret, was enthalten ist — nicht nur eine Pauschale.",
        "Technisches SEO, mobile Darstellung und Ladezeit sind selbstverständlich, kein Aufpreis.",
        "Nach dem Launch bekommst du Betreuung, keine Funkstille.",
        "Du sprichst mit dem, der die Seite tatsächlich baut.",
      ] },
      { typ: "p", text: "Am ehrlichsten klärst du das im kostenlosen Erstgespräch: Wir schauen uns deine Situation an und nennen eine belastbare Einschätzung für deinen konkreten Fall — statt einer Zahl aus dem Bauch." },
    ],
  },
  {
    slug: "google-business-profil-optimieren",
    cover: "c2",
    kategorie: "Lokal",
    titel: "Google Business Profil optimieren: der unterschätzte Hebel",
    teaser:
      "Kostenlos, aber oft vernachlässigt — das Google Business Profil ist für lokale Betriebe der wirksamste Hebel für mehr Anfragen.",
    lesezeit: 5,
    datum: "2026-06-13",
    intro:
      "Wer „Dachdecker in der Nähe“ oder „Friseur Koblenz“ sucht, sieht zuerst die Karte mit drei Einträgen — noch vor den normalen Suchergebnissen. Wer dort steht, gewinnt. Und das Beste: Der Eintrag ist kostenlos. Trotzdem lassen ihn die meisten Betriebe halb leer.",
    body: [
      { typ: "h2", text: "Warum das Profil so wichtig ist" },
      { typ: "p", text: "Für lokale Dienstleistungen entscheidet nicht das bundesweite Ranking, sondern die lokale Kartenansicht. Google zeigt dort die Betriebe, die es für am relevantesten und vertrauenswürdigsten hält. Ein vollständig gepflegtes Profil ist der größte einzelne Faktor, den du selbst in der Hand hast." },
      { typ: "h2", text: "Die wichtigsten Stellschrauben" },
      { typ: "ul", items: [
        "Vollständigkeit: Öffnungszeiten, Leistungen, Fotos, Telefonnummer, Website — je vollständiger, desto besser.",
        "Einheitliche Daten: Name, Adresse und Telefonnummer müssen überall identisch sein — auf der Website, in Verzeichnissen, im Profil.",
        "Bewertungen: Menge und Aktualität fließen direkt in die Platzierung ein. Regelmäßig neue, echte Bewertungen wirken stark.",
        "Fotos: Echte Bilder vom Betrieb, den Menschen und der Arbeit schlagen jedes Stockfoto.",
      ] },
      { typ: "h2", text: "Bewertungen aktiv einsammeln" },
      { typ: "p", text: "Zufriedene Kunden bewerten selten von allein — man muss sie freundlich darum bitten. Am besten direkt nach einem erfolgreichen Auftrag, mit einem kurzen Link. Wenige echte Bewertungen mehr pro Monat machen über das Jahr einen großen Unterschied." },
      { typ: "h2", text: "Der häufigste Fehler" },
      { typ: "p", text: "Das Profil einmal anlegen und dann vergessen. Google belohnt Aktivität: neue Fotos, aktuelle Beiträge, beantwortete Bewertungen. Ein gepflegtes Profil signalisiert einen aktiven Betrieb — und genau das will Google vorne zeigen." },
    ],
  },
  {
    slug: "langsame-website-kostet-kunden",
    cover: "c5",
    kategorie: "Technik",
    titel: "Warum eine langsame Website Kunden kostet",
    teaser:
      "Jede Sekunde Ladezeit kostet Besucher und Google-Ranking. Die Zahlen dahinter — und was wirklich hilft.",
    lesezeit: 4,
    datum: "2026-06-06",
    intro:
      "Ladezeit klingt nach einem technischen Detail, das nur Nerds interessiert. Tatsächlich ist sie einer der direktesten Hebel für mehr Anfragen: Wer zu lange wartet, ist weg — und kommt nicht wieder.",
    body: [
      { typ: "h2", text: "Menschen sind ungeduldig" },
      { typ: "p", text: "Die meisten Besucher entscheiden in wenigen Sekunden, ob sie bleiben. Lädt die Seite spürbar langsam, springt ein erheblicher Teil ab — noch bevor sie überhaupt gesehen haben, was du anbietest. Auf dem Handy, wo viele lokale Suchen stattfinden, ist die Geduld noch kürzer." },
      { typ: "h2", text: "Google misst mit" },
      { typ: "p", text: "Ladegeschwindigkeit ist ein offizieller Ranking-Faktor. Eine langsame Seite wird schlechter platziert — du verlierst also doppelt: Besucher, die abspringen, und Sichtbarkeit, weil Google die Seite nach hinten schiebt." },
      { typ: "h2", text: "Was Websites langsam macht" },
      { typ: "ul", items: [
        "Riesige, unkomprimierte Bilder, die in Originalgröße geladen werden.",
        "Überladene Baukasten-Systeme mit viel unnötigem Code.",
        "Zu viele externe Skripte und Tracker.",
      ] },
      { typ: "h2", text: "Was wirklich hilft" },
      { typ: "p", text: "Bilder in moderne Formate umwandeln und passend verkleinern, unnötigen Ballast weglassen und die Seite technisch schlank bauen. Eine gut gebaute Website lädt fast sofort — und genau das merkt der Besucher, ohne es benennen zu können: Sie fühlt sich professionell an." },
    ],
  },
  {
    slug: "mehr-google-rezensionen",
    cover: "c3",
    kategorie: "Lokal",
    titel: "Mehr Google-Rezensionen bekommen — systematisch statt zufällig",
    teaser:
      "Warum Bewertungen mehr Kunden bringen als Werbung — und wie du planbar mehr davon bekommst.",
    lesezeit: 5,
    datum: "2026-05-30",
    intro:
      "Bevor jemand bei dir anruft, liest er, was andere über dich sagen. Bewertungen sind das digitale Wort-zu-Wort — und wer viele gute hat, gewinnt Vertrauen, bevor das erste Gespräch beginnt.",
    body: [
      { typ: "h2", text: "Bewertungen wirken doppelt" },
      { typ: "p", text: "Erstens überzeugen sie Interessenten: Eine gute Sterne-Bewertung mit vielen Stimmen nimmt die Unsicherheit. Zweitens verbessern sie deine Platzierung in der lokalen Suche — Google wertet Menge und Aktualität als Vertrauenssignal." },
      { typ: "h2", text: "Warum die meisten zu wenige haben" },
      { typ: "p", text: "Nicht, weil die Kunden unzufrieden wären — sondern weil niemand fragt. Zufriedene Kunden denken selten von allein an eine Bewertung. Unzufriedene dagegen schon. Wer nicht aktiv nachfragt, bekommt ein verzerrtes Bild." },
      { typ: "h2", text: "So bekommst du systematisch mehr" },
      { typ: "ul", items: [
        "Direkt nach einem erfolgreichen Auftrag fragen — da ist die Zufriedenheit am höchsten.",
        "Es so einfach wie möglich machen: ein kurzer Link oder QR-Code, der direkt zum Bewertungsfenster führt.",
        "Freundlich und persönlich fragen, nicht automatisiert-anonym.",
        "Auf Bewertungen antworten — das zeigt, dass dahinter ein echter Betrieb steht.",
      ] },
      { typ: "h2", text: "Was du nicht tun solltest" },
      { typ: "p", text: "Keine Bewertungen kaufen und keine Anreize dafür bieten — das verstößt gegen Googles Richtlinien und fliegt auf. Echte Bewertungen von echten Kunden sind nicht nur erlaubt, sondern wirken auch glaubwürdiger." },
    ],
  },
  {
    slug: "meta-ads-budget-realistisch",
    cover: "c4",
    kategorie: "Kampagnen",
    titel: "Meta Ads Budget: Was solltest du realistisch einplanen?",
    teaser:
      "Warum Konstanz bei Facebook- und Instagram-Werbung wichtiger ist als die Höhe des Budgets.",
    lesezeit: 6,
    datum: "2026-05-23",
    intro:
      "„Wie viel muss ich denn ausgeben, damit sich das lohnt?“ — die Frage ist verständlich, aber sie greift zu kurz. Bei Meta Ads entscheidet nicht die Höhe des Budgets über den Erfolg, sondern die Konstanz und die Struktur dahinter.",
    body: [
      { typ: "h2", text: "Der Algorithmus muss lernen" },
      { typ: "p", text: "Wenn eine Kampagne startet, weiß Meta noch nicht, wer am ehesten reagiert. Der Algorithmus lernt aus jedem Klick und jeder Anfrage. Dieses Lernen braucht ein Mindestmaß an Daten — und die entstehen nur, wenn die Kampagne konstant läuft, nicht in Stößen." },
      { typ: "h2", text: "Warum Stop-and-go teuer ist" },
      { typ: "p", text: "Viele schalten Werbung an, sehen kurz kein Ergebnis, schalten wieder ab — und starten Wochen später neu. Jedes Mal beginnt der Algorithmus fast bei null. Ein moderates, dauerhaftes Budget bringt fast immer mehr als kurze, hohe Ausschläge." },
      { typ: "h2", text: "Budget für Plattform und Betreuung trennen" },
      { typ: "ul", items: [
        "Das Werbebudget geht direkt an Meta — es ist das Geld, das für die Auslieferung der Anzeigen ausgegeben wird.",
        "Die Betreuung deckt Strategie, Aufbau, Creatives und laufende Optimierung ab.",
        "Beides getrennt zu betrachten hilft, den tatsächlichen Ertrag einzuschätzen.",
      ] },
      { typ: "h2", text: "Ab wann es sich lohnt" },
      { typ: "p", text: "Wichtiger als eine Mindestsumme ist, dass Tracking und Zielseite stimmen. Wer Anzeigen auf eine allgemeine Startseite schickt, verbrennt einen Teil des Budgets. Mit sauberem Tracking und einer passenden Landingpage lässt sich schon mit einem überschaubaren, konstanten Budget viel erreichen — und vor allem messen." },
    ],
  },
  {
    slug: "seo-wie-lange-dauert-es",
    cover: "c6",
    kategorie: "SEO",
    titel: "SEO: Wie lange dauert es wirklich bis zu Ergebnissen?",
    teaser:
      "Realistische Zeiträume für Suchmaschinenoptimierung — und warum die meisten viel zu früh aufgeben.",
    lesezeit: 7,
    datum: "2026-05-16",
    intro:
      "SEO ist kein Schalter, den man umlegt. Es ist ein Prozess, der aufeinander aufbaut — und der genau in dem Moment abgebrochen wird, in dem er anfangen würde zu wirken. Hier ist eine ehrliche Einordnung, womit du rechnen kannst.",
    body: [
      { typ: "h2", text: "Die ersten Wochen: wenig Sichtbares" },
      { typ: "p", text: "In den ersten vier bis sechs Wochen passiert vor allem im Hintergrund etwas: technische Grundlagen, Struktur, erste Inhalte. Nach außen sieht man davon oft noch wenig. Genau hier verlieren viele die Geduld — und brechen ab, bevor die Arbeit greifen kann." },
      { typ: "h2", text: "Monat zwei bis vier: erste Bewegung" },
      { typ: "p", text: "Bei weniger umkämpften Begriffen zeigen sich jetzt erste Verbesserungen. Rankings bewegen sich, Klicks nehmen langsam zu. Das ist der Punkt, an dem man merkt, dass es in die richtige Richtung geht — auch wenn die großen Effekte noch fehlen." },
      { typ: "h2", text: "Ab Monat sechs bis zwölf: spürbare Effekte" },
      { typ: "p", text: "Bei den wichtigen, umkämpften Suchbegriffen zeigt sich echte Wirkung meist in diesem Zeitraum. SEO baut auf jedem Monat davor auf — je länger und konstanter, desto stärker der Effekt." },
      { typ: "h2", text: "Warum SEO und Ads zusammengehören" },
      { typ: "p", text: "Der klügste Weg, die Anfangsphase zu überbrücken: Google Ads. Während SEO im Hintergrund aufbaut, sorgen bezahlte Anzeigen sofort für Sichtbarkeit. Läuft SEO an, kann man das Werbebudget schrittweise zurückfahren — der Übergang ist oft so fließend, dass man ihn kaum merkt." },
      { typ: "h2", text: "Der häufigste Fehler" },
      { typ: "p", text: "SEO nach zwei, drei Monaten als gescheitert abzuschreiben — genau in der Phase, in der sich die Grundlagen erst festigen. Wer durchhält, baut eine Sichtbarkeit auf, die bleibt, auch ohne laufendes Werbebudget." },
    ],
  },
];

export function getArtikel(slug: string): Artikel | undefined {
  return artikel.find((a) => a.slug === slug);
}
