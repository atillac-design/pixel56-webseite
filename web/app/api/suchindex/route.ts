import { NextResponse } from "next/server";
import { suchindex } from "@/lib/suchindex";

/** Statischer Suchindex für die Schnellsuche; wird beim Build erzeugt. */
export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(suchindex, { headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" } });
}
