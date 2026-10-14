import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Vorschaubilder (Open Graph / Social Cards) für WhatsApp, Facebook, LinkedIn, X.
 * Wird von den opengraph-image.tsx-Dateien der Routen aufgerufen und beim Build
 * statisch gerendert. Schriften: Inter (Latin-Subset) aus assets/fonts.
 */
export const ogGroesse = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export type OgMotiv =
  | "webdesign"
  | "seo"
  | "meta-ads"
  | "soziale-medien"
  | "kunstliche-intelligenz"
  | "wachstum"
  | "marketing-tools"
  | "webseite";

export type OgDaten = {
  /** Kleine rote Zeile über dem Titel, z. B. „Blog · SEO“. */
  kicker: string;
  titel: string;
  text?: string;
  /** Themengrafik rechts (public/bilder/blog/cover-<motiv>.svg). */
  motiv?: OgMotiv;
  /** Zeile rechts unten, Standard: Digitalagentur · Koblenz. */
  fuss?: string;
};

const wurzel = process.cwd();

type Assets = { f400: Buffer; f600: Buffer; f800: Buffer; logo: string };
let assetsPromise: Promise<Assets> | undefined;

function assets(): Promise<Assets> {
  assetsPromise ??= (async () => {
    const [f400, f600, f800, logoPng] = await Promise.all([
      readFile(join(wurzel, "assets/fonts/inter-400.ttf")),
      readFile(join(wurzel, "assets/fonts/inter-600.ttf")),
      readFile(join(wurzel, "assets/fonts/inter-800.ttf")),
      readFile(join(wurzel, "public/bilder/logo-pixel56-og.png")),
    ]);
    return { f400, f600, f800, logo: `data:image/png;base64,${logoPng.toString("base64")}` };
  })();
  return assetsPromise;
}

const motivCache = new Map<OgMotiv, Promise<string>>();
function motivLaden(motiv: OgMotiv): Promise<string> {
  let p = motivCache.get(motiv);
  if (!p) {
    p = readFile(join(wurzel, `public/bilder/blog/cover-${motiv}.svg`)).then(
      (svg) => `data:image/svg+xml;base64,${svg.toString("base64")}`,
    );
    motivCache.set(motiv, p);
  }
  return p;
}

/** Kürzt an der Wortgrenze und hängt „…“ an. */
export function kuerzen(text: string, max: number): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const kurz = t.slice(0, max - 1);
  const leer = kurz.lastIndexOf(" ");
  return `${kurz.slice(0, leer > max * 0.6 ? leer : max - 1).replace(/[,.:;–-]$/, "")}…`;
}

/** Leistung einer Standortseite auf ein Motiv abbilden. */
export function motivFuerLeistung(key: string): OgMotiv {
  const k = key.toLowerCase();
  if (k.includes("meta") || k.includes("facebook")) return "meta-ads";
  if (k.includes("social")) return "soziale-medien";
  if (k.includes("seo") || k.includes("google")) return "seo";
  if (k.includes("ki")) return "kunstliche-intelligenz";
  return "webdesign";
}

function titelGroesse(titel: string): number {
  const n = titel.length;
  if (n <= 30) return 78;
  if (n <= 48) return 66;
  if (n <= 72) return 56;
  return 46;
}

export async function ogBild(d: OgDaten): Promise<ImageResponse> {
  const a = await assets();
  const motiv = d.motiv ? await motivLaden(d.motiv) : null;
  const titel = kuerzen(d.titel, 110);
  const text = d.text ? kuerzen(d.text, 150) : "";
  const groesse = titelGroesse(titel);
  const fuss = d.fuss ?? "Digitalagentur · Koblenz";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#0b0a10",
          color: "#fffdf9",
          fontFamily: "Inter",
        }}
      >
        {/* Rasterlinien */}
        <div style={{ position: "absolute", left: 300, top: 0, width: 1, height: 630, background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", left: 600, top: 0, width: 1, height: 630, background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", left: 900, top: 0, width: 1, height: 630, background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", left: 0, top: 150, width: 1200, height: 1, background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", left: 0, top: 480, width: 1200, height: 1, background: "rgba(255,255,255,0.06)" }} />
        {/* Roter Schein rechts unten */}
        <div
          style={{
            position: "absolute",
            right: -200,
            bottom: -260,
            width: 760,
            height: 760,
            borderRadius: 380,
            background: "radial-gradient(circle, rgba(255,57,81,0.32) 0%, rgba(255,57,81,0) 62%)",
          }}
        />
        {motiv ? (
          <img
            src={motiv}
            width={640}
            height={400}
            alt=""
            style={{ position: "absolute", right: -70, top: 115, opacity: 0.55 }}
          />
        ) : null}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "52px 64px 48px",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <img src={a.logo} width={172} height={74} alt="Pixel56" />
            <div style={{ display: "flex", fontSize: 17, fontWeight: 600, letterSpacing: 2.5, color: "#7f7589" }}>
              WEBDESIGN · ADS · CONTENT · KI
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: motiv ? 690 : 1020 }}>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#ff3951",
                marginBottom: 20,
              }}
            >
              {d.kicker}
            </div>
            <div style={{ display: "flex", fontSize: groesse, fontWeight: 800, lineHeight: 1.04, letterSpacing: -1.5 }}>
              {titel}
            </div>
            {text ? (
              <div style={{ display: "flex", marginTop: 22, fontSize: 24, lineHeight: 1.4, color: "#c9bec1" }}>{text}</div>
            ) : null}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 19, color: "#9d93a6" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: 5, background: "#ff3951", marginRight: 12 }} />
              <div style={{ display: "flex", fontWeight: 600 }}>pixel56.de</div>
            </div>
            <div style={{ display: "flex" }}>{fuss}</div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogGroesse,
      fonts: [
        { name: "Inter", data: a.f400, weight: 400, style: "normal" },
        { name: "Inter", data: a.f600, weight: 600, style: "normal" },
        { name: "Inter", data: a.f800, weight: 800, style: "normal" },
      ],
    },
  );
}
