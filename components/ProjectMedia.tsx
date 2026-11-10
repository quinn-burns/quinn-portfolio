import Image from "next/image";
import type { Media } from "@/lib/types";
import { HoverVideo } from "./HoverVideo";

type Props = {
  media: Media;
  /** Frame ratio (w/h). Defaults to the asset's own ratio. */
  ratio?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Optional second layer that fades in while the surrounding `.tile` is hovered or focused */
  hoverMedia?: Media;
};

/**
 * One component for every piece of project media: images, muted loop
 * videos, and labelled placeholders for assets that don't exist yet.
 * `hoverMedia` (image or video) sits on top and crossfades in on hover.
 */
export function ProjectMedia({ media, ratio, sizes, priority, className = "", hoverMedia }: Props) {
  const r = ratio ?? media.width / media.height;

  return (
    <div
      className={`relative w-full max-w-full overflow-hidden bg-stone ${className}`}
      style={{ aspectRatio: String(r) }}
    >
      {media.kind === "image" && (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={media.fit === "contain" ? "object-contain p-[6%]" : "object-cover"}
          style={{ objectPosition: media.focus ?? "50% 50%" }}
        />
      )}

      {media.kind === "video" && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={media.src}
          poster={media.poster}
          aria-label={media.alt}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}

      {media.kind === "placeholder" && <Placeholder label={media.label} spec={media.spec} />}

      {hoverMedia && hoverMedia.kind !== "placeholder" && (
        <div className="tile-hover-media absolute inset-0" aria-hidden>
          {hoverMedia.kind === "image" ? (
            <Image
              src={hoverMedia.src}
              alt=""
              fill
              sizes={sizes}
              className="object-cover"
              style={{ objectPosition: hoverMedia.focus ?? "50% 50%" }}
            />
          ) : (
            <HoverVideo src={hoverMedia.src} poster={hoverMedia.poster} label={hoverMedia.alt} />
          )}
        </div>
      )}
    </div>
  );
}

function Placeholder({ label, spec }: { label: string; spec: string }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className="absolute inset-0 flex flex-col justify-between p-4 text-graphite md:p-6"
      style={{
        backgroundImage:
          "linear-gradient(to right, transparent calc(50% - 0.5px), var(--color-taupe) calc(50% - 0.5px), var(--color-taupe) calc(50% + 0.5px), transparent calc(50% + 0.5px)), linear-gradient(to bottom, transparent calc(50% - 0.5px), var(--color-taupe) calc(50% - 0.5px), var(--color-taupe) calc(50% + 0.5px), transparent calc(50% + 0.5px))",
        backgroundSize: "28px 28px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <span className="label">Asset needed</span>
      <span className="max-w-[34ch]">
        <span className="block text-meta font-semibold text-charcoal">{label}</span>
        <span className="mt-1 block text-meta">{spec}</span>
      </span>
    </div>
  );
}
