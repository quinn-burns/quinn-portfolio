import type { Media } from "@/lib/types";
import { ProjectMedia } from "../ProjectMedia";
import { InViewVideo } from "./InViewVideo";

/**
 * A rounded image/video frame for case studies. Same radius and ground as the
 * homepage tiles; videos only play while visible.
 */
export function Frame({ media, ratio, sizes = "(min-width: 1024px) 70vw, 94vw", priority, rounded = true }: { media: Media; ratio?: number; sizes?: string; priority?: boolean; rounded?: boolean }) {
  const radius = rounded ? "rounded-[clamp(12px,1.5vw,22px)]" : "";
  if (media.kind === "video") {
    return (
      <div className={`relative w-full overflow-hidden bg-stone ${radius}`} style={{ aspectRatio: String(ratio ?? media.width / media.height) }}>
        <InViewVideo src={media.src} poster={media.poster} label={media.alt} loop={media.loop ?? true} />
      </div>
    );
  }
  return <ProjectMedia media={media} ratio={ratio} sizes={sizes} priority={priority} className={radius} />;
}

