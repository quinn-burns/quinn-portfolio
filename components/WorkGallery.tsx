import type React from "react";
import type { FeaturedProject } from "@/lib/types";
import { GalleryTile } from "./GalleryTile";

/** The image's own shape (w / h), so nothing is cropped. */
function nativeRatio(p: FeaturedProject) {
  if (p.ratio) return p.ratio;
  const m = p.media;
  return "width" in m && m.width && m.height ? m.width / m.height : 4 / 5;
}

/**
 * Selected Work: two even columns (one on mobile). Each tile keeps its
 * image's own proportions, so nothing is cropped.
 */
export function WorkGallery({ projects }: { projects: FeaturedProject[] }) {
  const rows: FeaturedProject[][] = [];
  for (let i = 0; i < projects.length; i += 2) rows.push(projects.slice(i, i + 2));

  return (
    <div className="flex flex-col gap-y-[clamp(3rem,8vw,4rem)] md:gap-y-[clamp(3.5rem,6vw,6rem)]">
      {rows.map((row, r) => (
        <ul
          key={r}
          className="work-row grid items-start gap-y-[clamp(3rem,8vw,4rem)] md:gap-x-[clamp(14px,1.6vw,24px)]"
          style={{ "--cols": "1fr 1fr" } as React.CSSProperties}
        >
          {row.map((p, i) => (
            <li key={p.slug} className="min-w-0">
              <GalleryTile
                size="feature"
                title={p.title}
                subtitle={p.subtitle}
                description={p.description}
                tags={p.tags}
                media={p.media}
                hoverMedia={p.hoverMedia}
                href={p.href}
                external={p.external}
                ratio={nativeRatio(p)}
                sizes="(min-width: 768px) 50vw, 94vw"
                priority={r === 0 && i < 2}
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
