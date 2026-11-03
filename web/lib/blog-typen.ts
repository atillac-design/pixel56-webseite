export type Block =
  | { typ: "p"; text: string; html?: string }
  | { typ: "h2"; text: string }
  | { typ: "ul"; items: string[] }
  /** Foto oder Screenshot aus public/bilder, mit Alt-Text, optional Unterschrift und Quelle. */
  | { typ: "bild"; src: string; alt: string; text?: string; quelle?: string; breite?: number; hoehe?: number }
  /** Benannte, im Code gezeichnete Grafik (components/BlogGrafik.tsx), optional animiert. */
  | { typ: "grafik"; name: string; text?: string }
  /** Häufige Fragen: erscheinen als Klappliste und als FAQ-Schema für Google. */
  | { typ: "faq"; items: { q: string; a: string }[] }
  /** Zwischenruf mit Link, z. B. zu einem Freebie oder einer Leistung. */
  | { typ: "cta"; titel: string; text: string; href: string; label: string };

export type Artikel = {
  slug: string;
  cover: string; // c1 … c6
  kategorie: string;
  titel: string;
  /** Optionaler kurzer Seitentitel (<= 50 Zeichen) für <title> und Social Cards; sonst wird titel gekürzt. */
  seoTitel?: string;
  teaser: string;
  lesezeit: number;
  datum: string; // ISO
  intro: string;
  body: Block[];
  /** Belegte Quellen für Zahlen im Text; erscheinen unter dem Artikel. */
  quellen?: { text: string; url?: string }[];
};
