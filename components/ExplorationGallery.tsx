import type { Exploration } from "@/lib/types";
import { GalleryTile } from "./GalleryTile";

/**
 * More Explorations: a quieter three-column gallery (two on tablet, one on
 * mobile). Same gutter, tile structure and hover as Selected Work, one size down.
 */
export function ExplorationGallery({ items }: { items: Exploration[] }) {
  return (
    <ul className="grid grid-cols-1 gap-y-[clamp(2.5rem,7vw,3rem)] sm:grid-cols-2 sm:gap-x-[clamp(14px,1.6vw,24px)] lg:grid-cols-3 sm:gap-y-[clamp(3rem,5vw,4.5rem)]">
      {items.map((item) => (
        <li key={item.slug}>
          <GalleryTile
            size="compact"
            title={item.title}
            subtitle={item.discipline}
            media={item.media}
            href={item.href}
            external
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 94vw"
          />
        </li>
      ))}
    </ul>
  );
}
