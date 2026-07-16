import { sanityConfigured } from "@/sanity/env";
import StudioClient from "./StudioClient";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

/**
 * Eingebettetes Sanity Studio unter /studio. Solange kein Projekt
 * konfiguriert ist, erscheint ein Hinweis statt des Studios.
 */
export default function StudioPage() {
  if (!sanityConfigured) {
    return (
      <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 40 }}>
        <div style={{ maxWidth: 520, fontFamily: "ui-monospace, monospace", fontSize: 13, lineHeight: 1.8, color: "#8a8a94" }}>
          <b style={{ color: "#f5f4f2" }}>Sanity Studio noch nicht verbunden.</b>
          <br />
          Sobald das Sanity-Projekt angelegt ist, hier hinterlegen:
          <br />
          <br />
          NEXT_PUBLIC_SANITY_PROJECT_ID=&lt;projekt-id&gt;
          <br />
          NEXT_PUBLIC_SANITY_DATASET=production
          <br />
          <br />
          Danach erscheint das Studio unter /studio.
        </div>
      </div>
    );
  }
  return <StudioClient />;
}
