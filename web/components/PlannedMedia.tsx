import { indexable } from "@/lib/site";

type PlannedMediaProps = {
  title: string;
  description: string;
  format: string;
};

/** Editorial production slot: visible in local/staging, never on indexable production. */
export default function PlannedMedia({ title, description, format }: PlannedMediaProps) {
  if (indexable) return null;

  return (
    <aside className="planned-media reveal" aria-label={`Geplanter Bildplatz: ${title}`}>
      <div className="planned-media-frame" aria-hidden="true">
        <span className="planned-media-cross planned-media-cross-one" />
        <span className="planned-media-cross planned-media-cross-two" />
        <span className="planned-media-ratio">{format}</span>
      </div>
      <div className="planned-media-copy">
        <span>MEDIENPLATZ · NOCH OFFEN</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </aside>
  );
}
