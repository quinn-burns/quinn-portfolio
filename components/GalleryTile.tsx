import type React from "react";
import Link from "next/link";
import type { Media } from "@/lib/types";
import { ProjectMedia } from "./ProjectMedia";

type Props = {
  title: string;
  subtitle: string;
  /** Replaces the subtitle on hover / keyboard focus (pointer devices only) */
  description?: string;
  /** Small category labels over the image */
  tags?: string[];
  media: Media;
  /** Optional alternate image or loop that fades in on hover */
  hoverMedia?: Media;
  href?: string;
  external?: boolean;
  /** "feature" = Selected Work, "compact" = More Explorations */
  size: "feature" | "compact";
  ratio?: number;
  sizes: string;
  priority?: boolean;
};

// Two type steps that share one system: compact is a step down in size only.
const TYPE = {
  feature: {
    radius: "rounded-[clamp(12px,1.5vw,22px)]",
    gap: "mt-[clamp(0.875rem,1.5vw,1.375rem)]",
    title: "text-[clamp(1.375rem,2vw,1.8rem)] tracking-[-0.015em]",
    subtitle: "text-[clamp(1.0625rem,1.45vw,1.3rem)]",
  },
  compact: {
    radius: "rounded-[clamp(10px,1.1vw,16px)]",
    gap: "mt-[clamp(0.75rem,1.1vw,1rem)]",
    title: "text-[clamp(1.0625rem,1.3vw,1.25rem)] tracking-[-0.01em]",
    subtitle: "text-[clamp(0.9375rem,1.05vw,1.0625rem)]",
  },
};

/**
 * One image, a title and a caption line — the whole tile is the link.
 *
 * Hover / keyboard focus (pointer devices only; see `.tile` in globals.css):
 * the image frame tightens toward its top edge, the title rides up with the
 * frame's bottom edge, and the subtitle gives way to the description.
 * Everything moves with transforms and the caption layers share one grid
 * cell, so nothing around the tile shifts.
 */
export function GalleryTile({ title, subtitle, description, tags, media, hoverMedia, href, external, size, ratio = 4 / 5, sizes, priority }: Props) {
  const t = TYPE[size];
  const body = (
    <>
      <div className="tile-frame">
        <ProjectMedia media={media} hoverMedia={hoverMedia} ratio={ratio} sizes={sizes} priority={priority} className={t.radius} />
        {tags && tags.length > 0 && (
          <ul className="tile-tags" aria-label="Categories">
            {tags.map((tag) => (
              <li key={tag} className="tile-tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="tile-text">
        <h3 className={`${t.gap} font-medium leading-[1.15] ${t.title}`}>{title}</h3>
        {description ? (
          <p className={`tile-caption mt-1 max-w-[44ch] leading-[1.35] ${t.subtitle}`}>
            <span className="tile-sub text-mist">{subtitle}</span>
            <span className="tile-desc text-graphite">{description}</span>
          </p>
        ) : (
          <p className={`mt-1 leading-[1.35] text-mist ${t.subtitle}`}>{subtitle}</p>
        )}
      </div>
    </>
  );

  // --tile-ratio lets the CSS work out how far the frame's bottom edge moves.
  const style = { "--tile-ratio": ratio } as React.CSSProperties;

  if (!href)
    return (
      <div className="tile group" style={style}>
        {body}
      </div>
    );
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`tile group block ${t.radius} focus-visible:outline-offset-4`}
      style={style}
    >
      {body}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </Link>
  );
}
