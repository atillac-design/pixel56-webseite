import type { StadtTexte, StandortText } from "./typen";
import { andernach } from "./andernach";
import { bendorf } from "./bendorf";
import { bonn } from "./bonn";
import { hoehrGrenzhausen } from "./hoehr-grenzhausen";
import { koblenz } from "./koblenz";
import { lahnstein } from "./lahnstein";
import { limburg } from "./limburg";
import { mainz } from "./mainz";
import { mayen } from "./mayen";
import { montabaur } from "./montabaur";
import { muelheimKaerlich } from "./muelheim-kaerlich";
import { neuwied } from "./neuwied";
import { ransbachBaumbach } from "./ransbach-baumbach";
import { vallendar } from "./vallendar";
import { weissenthurm } from "./weissenthurm";

export type { StandortText } from "./typen";

/** Alle individuellen Standorttexte, Schlüssel ist der Seiten-Slug. */
const alle: StadtTexte = {
  ...andernach,
  ...bendorf,
  ...bonn,
  ...hoehrGrenzhausen,
  ...koblenz,
  ...lahnstein,
  ...limburg,
  ...mainz,
  ...mayen,
  ...montabaur,
  ...muelheimKaerlich,
  ...neuwied,
  ...ransbachBaumbach,
  ...vallendar,
  ...weissenthurm,
};

export function getStandortText(slug: string): StandortText | undefined {
  return alle[slug];
}

export const standortTextSlugs = Object.keys(alle);
