import type { Artikel } from "@/lib/blog-typen";

const artikel: Artikel = {
  slug: "die-ultimative-marketing-checkliste-fuer-selbststaendige-und-kmus",
  cover: "c2",
  kategorie: "SEO",
  titel: "Die ultimative Marketing-Checkliste für Selbstständige und KMUs",
  teaser:
    "Zwölf Punkte, die jedes kleine Unternehmen für sein Marketing geklärt haben sollte: von der Zielgruppe über Website und Sichtbarkeit bis zur Messung.",
  lesezeit: 2,
  datum: "2024-08-11",
  intro:
    "Marketing für kleine Unternehmen scheitert selten an Ideen, sondern an Reihenfolge und Konsequenz. Diese Checkliste bringt die Punkte in eine sinnvolle Ordnung. Geh sie von oben nach unten durch: Was steht, hakst du ab. Was fehlt, ist dein nächster Schritt.",
  body: [
    { typ: "h2", text: "Grundlagen" },
    { typ: "ul", items: [
      "Zielgruppe benannt: Wer kauft bei dir, welches Problem hat diese Person, und wonach sucht sie online?",
      "Wettbewerb angeschaut: Was machen die drei wichtigsten Mitbewerber online gut, was schlecht, und wie unterscheidest du dich?",
      "Angebot in einem Satz: Was bekommt ein Kunde bei dir, und warum bei dir? Wenn dieser Satz fehlt, fehlt er auch auf der Website.",
    ] },
    { typ: "h2", text: "Website und Sichtbarkeit" },
    { typ: "ul", items: [
      "Website, die Anfragen bringt: klare Leistungen, sichtbare Kontaktwege, schnelle Ladezeit, fehlerfrei auf dem Handy.",
      "Suchmaschinenoptimierung als Fundament: saubere Technik, Seiten für die Suchbegriffe deiner Kunden, Ortsangaben für lokale Suchen.",
      "Google-Unternehmensprofil vollständig: Fotos, Leistungen, Öffnungszeiten, Beschreibung. Für lokale Suchen oft der wichtigste Hebel.",
      "Bewertungen aktiv eingeholt: nach jedem Auftrag freundlich um eine Google-Bewertung bitten, mit Link.",
    ] },
    { typ: "h2", text: "Inhalte und Reichweite" },
    { typ: "ul", items: [
      "Regelmäßige Inhalte: Beiträge, Reels oder Artikel, die Kundenfragen beantworten. Lieber zweimal pro Woche einfach als einmal im Quartal aufwendig.",
      "Social-Media-Kanäle, die zur Zielgruppe passen: meist Instagram und Facebook, für Fachkräfte zusätzlich LinkedIn oder TikTok. Nicht alle, sondern die richtigen.",
      "Bezahlte Reichweite mit Ziel: Google Ads für Menschen, die gerade suchen, Meta Ads für Menschen, die dich noch nicht kennen. Immer mit Zielseite und Messung.",
    ] },
    { typ: "h2", text: "Mitarbeiter und Bestandskunden" },
    { typ: "ul", items: [
      "Karriereseite mit einfacher Bewerbung: Stellen sichtbar, Bewerbung in wenigen Minuten, keine Pflichtfelder-Wüste.",
      "Kontakt zu Bestandskunden: gelegentliche Nachrichten mit Nutzen, Hinweise auf neue Leistungen, Dank für Empfehlungen. Bestandskunden sind die günstigsten Neukunden.",
    ] },
    { typ: "h2", text: "Messen und anpassen" },
    { typ: "ul", items: [
      "Zahlen im Blick: Besucher, Anfragen, Kosten pro Anfrage. Google Analytics und die Search Console reichen für den Anfang.",
      "Vierteljährlicher Check: Was hat Anfragen gebracht, was nicht? Budget dorthin verschieben, wo es wirkt.",
    ] },
    { typ: "h2", text: "Fazit" },
    {
      typ: "p",
      text: "Die Liste ist lang, aber kein Betrieb muss alles auf einmal angehen. Grundlagen zuerst, dann Website und Sichtbarkeit, dann Reichweite, dann Messung. Wer die Reihenfolge einhält, verbrennt kein Budget für Anzeigen, die auf eine Website führen, die nicht trägt. Die technischen Punkte zur Website findest du ausführlich in unserer kostenlosen SEO-Checkliste.",
      html: "Die Liste ist lang, aber kein Betrieb muss alles auf einmal angehen. Grundlagen zuerst, dann Website und Sichtbarkeit, dann Reichweite, dann Messung. Wer die Reihenfolge einhält, verbrennt kein Budget für Anzeigen, die auf eine Website führen, die nicht trägt. Die technischen Punkte zur Website findest du ausführlich in unserer kostenlosen <a href=\"/checkliste-seo\">SEO-Checkliste</a>.",
    },
  ],
};

export default artikel;
