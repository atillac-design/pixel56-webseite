import type { Artikel } from "@/lib/blog-typen";

// Zusammengelegt am 9.11.2026 aus „SEO für Handwerker: Wie lange dauert es
// wirklich bis zu Ergebnissen?“ (dieser Slug, mit Google-Historie) und
// „SEO: Wie lange dauert es wirklich bis zu Ergebnissen?“
// (seo-wie-lange-dauert-es, leitet jetzt hierher). Anlass: Search Console,
// „wie lange dauert seo“ 1.163 Impressionen auf Position 28, „wann sehe ich
// erste ergebnisse durch seo?“ auf Position 5,8.

const artikel: Artikel = {
  slug: "seo-dauer-bis-ergebnisse",
  cover: "c5",
  kategorie: "SEO",
  titel: "Wie lange dauert SEO? Ehrliche Zeiträume für Betriebe",
  seoTitel: "Wie lange dauert SEO? Ehrliche Zeiträume",
  teaser:
    "Vier Wochen, vier Monate oder ein Jahr? Was Google selbst sagt, was in jeder Phase passiert, woran du früh erkennst, dass es wirkt, und warum die meisten genau dann aufgeben, wenn es anfängt.",
  lesezeit: 8,
  datum: "2026-11-09",
  intro:
    "„Wann sehen wir endlich Ergebnisse?“ ist die Frage, die bei Suchmaschinenoptimierung am meisten Frust erzeugt, fast immer, weil die Erwartung von Anfang an falsch gesetzt war. Wer SEO behandelt wie eine Anzeige, die morgen Klicks bringt, wird enttäuscht. Wer versteht, warum es länger dauert, was in dieser Zeit passiert und woran man den Fortschritt vor dem Ranking erkennt, nimmt die Wartezeit gelassen und nutzt sie. Hier ist die ehrliche Einordnung, mit Googles eigener Aussage, einem Zeitstrahl und den Zahlen, die du nach vier Wochen schon anschauen kannst.",
  body: [
    { typ: "h2", text: "Was sagt Google selbst zur Dauer?" },
    {
      typ: "p",
      text: "Google ist hier erstaunlich deutlich. In der eigenen Hilfe zur Frage, ob man eine SEO-Agentur braucht, steht sinngemäß: Rechne mit vier Monaten bis zu einem Jahr, bis Verbesserungen umgesetzt sind und sich ein Nutzen zeigt. Das ist keine Ausrede von Agenturen, sondern die Spanne, die der Suchmaschinenbetreiber selbst nennt. Alles, was deutlich schneller versprochen wird, verspricht etwas, das Google so nicht vorsieht.",
    },
    {
      typ: "p",
      text: "Der Grund liegt in der Arbeitsweise der Suche. Bei Google Ads kaufst du Sichtbarkeit und sie ist sofort da. Bei SEO muss Google deine Seite erst neu lesen, einordnen und gegen alle anderen Seiten zu derselben Frage abwägen. Das passiert nicht nach einer einzelnen Änderung, sondern nach einem Zusammenspiel aus Technik, Inhalt und Vertrauen, das sich über Wochen aufbaut.",
    },
    {
      typ: "grafik",
      name: "seo-zeitverlauf",
      text: "Schematisch, keine Messwerte: Technik wirkt zuerst, Inhalte brauchen Monate, Vertrauen baut sich am langsamsten auf. Die Summe ist die Sichtbarkeit, die bleibt.",
    },
    { typ: "h2", text: "Was passiert in den ersten vier bis sechs Wochen?" },
    {
      typ: "p",
      text: "Nach außen wenig, innen viel. Technische Korrekturen greifen am schnellsten: Ladezeit, saubere Struktur, Weiterleitungen, eine Seite pro Leistung statt einer Liste. Google besucht die geänderten Seiten, liest sie neu und ordnet sie ein. In dieser Phase verschwinden oft erst einmal alte Treffer, weil Seiten zusammengelegt oder umgezogen wurden. Das ist kein Rückschritt, sondern Aufräumen.",
    },
    {
      typ: "p",
      text: "Genau hier verlieren viele die Geduld. Die Rechnung der Agentur ist da, im Ranking sieht man nichts, und der Chef fragt, wofür das Geld war. Die ehrliche Antwort: für das Fundament. Ohne diese Wochen wirkt nichts, was danach kommt.",
    },
    { typ: "h2", text: "Wann zeigen sich die ersten Bewegungen?" },
    {
      typ: "p",
      text: "Zwischen Monat zwei und vier bewegen sich die ersten Begriffe, und zwar die spezifischen, wenig umkämpften: „Flachdachsanierung Lahnstein“ vor „Dachdecker Koblenz“, „Physiotherapie nach Bandscheibenvorfall Neuwied“ vor „Physiotherapie Koblenz“. Diese Suchen haben wenig Volumen, aber die Menschen dahinter wissen genau, was sie wollen. Die ersten Anfragen aus SEO kommen fast immer über solche Begriffe.",
    },
    {
      typ: "p",
      text: "In dieser Phase steigen in der Search Console zuerst die Impressionen, also wie oft deine Seite in den Ergebnissen erscheint, meist noch weit hinten. Klicks kommen später. Wer nur auf Klicks schaut, übersieht den Fortschritt, der schon da ist.",
    },
    {
      typ: "bild",
      src: "/bilder/foto-strategie-schach.webp",
      alt: "Schachfiguren auf einem Brett, Sinnbild für Züge, die erst nach mehreren Schritten wirken",
      text: "SEO ist ein Spiel über mehrere Züge. Der Zug von heute zeigt seine Wirkung erst, wenn die nächsten drei gemacht sind.",
      quelle: "Stockfoto",
      breite: 1600,
      hoehe: 900,
    },
    { typ: "h2", text: "Ab wann wird es spürbar?" },
    {
      typ: "p",
      text: "Bei den wichtigen, umkämpften Begriffen, also Leistung plus Stadt, zeigt sich echte Wirkung meist zwischen Monat sechs und zwölf. Das deckt sich mit Googles Spanne. Ein Betrieb in einer mittelgroßen Stadt mit überschaubarer Konkurrenz ist schneller als einer in Köln oder Frankfurt, wo Wettbewerber seit Jahren an ihrer Sichtbarkeit arbeiten. Diese Unterschiede sind normal und sagen nichts darüber, ob deine SEO-Arbeit richtig läuft.",
    },
    {
      typ: "p",
      text: "Der Unterschied zu bezahlter Werbung wird jetzt sichtbar: Eine Anzeige verpufft, sobald das Budget aufgebraucht ist. Eine Seite, die für „Dachsanierung Koblenz“ auf Platz drei steht, bringt Anfragen in jedem Monat, ohne dass du dafür bezahlst. Das ist der Grund, warum sich die Geduld lohnt.",
    },
    {
      typ: "cta",
      titel: "SEO-Checkliste: Lokales SEO für Handwerker",
      text: "Sieben Schritte vom Google-Unternehmensprofil bis zur Website, 30 Prüfpunkte zum Abhaken, Selbsttest und Wochenplan. Kostenlos als PDF.",
      href: "/checkliste-seo",
      label: "Checkliste herunterladen",
    },
    { typ: "h2", text: "Woran erkenne ich, dass es wirkt, bevor das Ranking es zeigt?" },
    {
      typ: "ul",
      items: [
        "Search Console, Leistungsbericht: Die Impressionen steigen, zuerst bei spezifischen Begriffen. Das ist das früheste Zeichen, oft schon nach vier bis acht Wochen.",
        "Search Console, Seiten-Bericht: Mehr Seiten sind indexiert, Fehler verschwinden. Zeigt, dass Google die neue Struktur angenommen hat.",
        "Durchschnittliche Position: Sie wandert von 40 auf 25 auf 15. Klicks gibt es erst ab etwa Position 10, aber die Richtung ist vorher sichtbar.",
        "Unternehmensprofil: Mehr Anrufe, Routenanfragen und Website-Klicks aus der Karte. Profilpflege wirkt schneller als Website-Inhalte.",
        "Erste Anfragen nennen eine konkrete Suche: „Ich habe nach Flachdach in Vallendar gesucht.“ Das ist der Moment, in dem SEO Geld verdient.",
      ],
    },
    {
      typ: "p",
      html: "Wer seine Zahlen noch nie angeschaut hat, fängt mit der Search Console an. Sie ist kostenlos und zeigt genau diese Werte. Ob deine Seite technisch überhaupt lesbar ist, prüft unser <a href=\"/website-check\">Website-Check</a> in dreißig Sekunden.",
      text: "",
    },
    { typ: "h2", text: "Warum gehören SEO und Google Ads zusammen?" },
    {
      typ: "p",
      html: "Der klügste Weg, die Anfangsphase zu überbrücken, sind <a href=\"/google-ads\">Google Ads</a>. Während SEO im Hintergrund aufbaut, sorgen Anzeigen ab dem ersten Tag für Anfragen. Läuft SEO an, fährst du das Werbebudget schrittweise zurück. Der Übergang ist oft so fließend, dass man ihn kaum merkt: Ein Kanal übernimmt, während der andere leiser wird. Wer beides von Anfang an plant, hat nie eine Durststrecke.",
      text: "",
    },
    {
      typ: "p",
      text: "Dazu kommt ein Nebeneffekt: Die Suchbegriffe, die in der Anzeigenkampagne Anfragen bringen, zeigen dir, welche Seiten du für SEO zuerst bauen solltest. Die Kampagne wird zur Marktforschung.",
    },
    { typ: "h2", text: "Welcher Fehler kostet am meisten?" },
    {
      typ: "p",
      html: "SEO nach zwei oder drei Monaten als gescheitert abzuschreiben. Genau in dieser Phase festigen sich die Grundlagen, die Impressionen steigen, die Positionen wandern nach vorn. Wer jetzt aufhört, hat bezahlt und nichts geerntet. Der zweite teure Fehler ist das Gegenteil: ein Jahr lang zahlen, ohne je in die Zahlen zu schauen. Beides vermeidest du mit einem festen Termin pro Monat, an dem jemand die Search Console öffnet und in drei Sätzen sagt, was sich bewegt hat. So machen wir es in der <a href=\"/suchmaschinenoptimierung\">SEO-Betreuung</a>, und so kannst du es auch allein machen.",
      text: "",
    },
    {
      typ: "p",
      html: "Eine Sache dauert übrigens nicht Monate, sondern Wochen: das <a href=\"/blog/google-business-profil-optimieren\">Google-Unternehmensprofil</a>. Wer es vollständig pflegt und Bewertungen mit Text sammelt, sieht die Wirkung in der Karte oft als Erstes. Deshalb fangen wir dort an.",
      text: "",
    },
    {
      typ: "faq",
      items: [
        { q: "Wann sehe ich erste Ergebnisse durch SEO?", a: "Erste Bewegungen bei spezifischen Suchbegriffen zeigen sich meist nach zwei bis vier Monaten, zuerst als steigende Impressionen in der Search Console, dann als Klicks. Bei umkämpften Begriffen wie Leistung plus Stadt dauert es sechs bis zwölf Monate. Google selbst nennt vier Monate bis ein Jahr." },
        { q: "Gibt es eine Abkürzung, damit es schneller geht?", a: "Keine seriöse. Anbieter, die schnelle Rankings garantieren, arbeiten meist mit Methoden, die Google eher bestraft als belohnt. Was wirklich beschleunigt: Technik zuerst sauber machen, das Unternehmensprofil pflegen und mit wenig umkämpften Begriffen anfangen." },
        { q: "Muss ich in der Wartezeit trotzdem Werbung schalten?", a: "Es ist sinnvoll. Google Ads bringen ab dem ersten Tag Anfragen und zeigen dir, welche Suchbegriffe Geld wert sind. Sobald SEO greift, fährst du das Budget zurück." },
        { q: "Bleibt die Sichtbarkeit, oder muss ich ständig weiterarbeiten?", a: "Ein Pflegeaufwand bleibt, weil sich Suchverhalten und Konkurrenz ändern, aber er ist deutlich kleiner als der Aufbau. Wer monatlich die Zahlen prüft und zwei, drei Dinge nachzieht, hält die Position." },
      ],
    },
  ],
  quellen: [
    { text: "Google Search Central: „Do you need an SEO?“, Hinweis auf vier Monate bis ein Jahr, bis Verbesserungen umgesetzt sind und sich ein Nutzen zeigt", url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo" },
    { text: "Google Search Console, Hilfe zum Leistungsbericht: Impressionen, Klicks, durchschnittliche Position", url: "https://support.google.com/webmasters/answer/7042828" },
    { text: "Eigene Beobachtung aus Kundenprojekten von Pixel56, Stand November 2026; keine Garantie, Zeiträume je nach Wettbewerb unterschiedlich" },
  ],
};

export default artikel;
