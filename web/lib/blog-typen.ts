export type Block =
  | { typ: "p"; text: string; html?: string }
  | { typ: "h2"; text: string }
  | { typ: "ul"; items: string[] };

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
};
