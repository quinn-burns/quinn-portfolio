"use client";

import { useRef, useState } from "react";
import type { Media } from "@/lib/types";
import { Frame } from "./Frame";

/**
 * Click-to-play film: a poster frame with one play control. The film loads
 * only after the click, with sound and native controls. Without a `src` yet,
 * the control says so instead of pretending to play.
 */
export function FilmPlayer({ title, poster, src, ratio = 16 / 9 }: { title: string; poster: Media; src?: string; ratio?: number }) {
  const [playing, setPlaying] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const posterSrc = poster.kind === "image" ? poster.src : undefined;

  if (playing && src) {
    return (
      <div className="relative w-full overflow-hidden rounded-[clamp(12px,1.5vw,22px)] bg-charcoal" style={{ aspectRatio: String(ratio) }}>
        <video
          ref={video}
          className="absolute inset-0 h-full w-full"
          src={src}
          poster={posterSrc}
          controls
          autoPlay
          playsInline
          aria-label={title}
        />
      </div>
    );
  }

  return (
    <div className="film-poster group relative">
      <Frame media={poster} ratio={ratio} sizes="(min-width: 1024px) 80vw, 94vw" />
      <button
        type="button"
        onClick={() => src && setPlaying(true)}
        disabled={!src}
        aria-label={src ? `Play ${title}` : `${title} — film file not added yet`}
        className="absolute inset-0 flex items-end justify-between gap-4 rounded-[clamp(12px,1.5vw,22px)] p-[clamp(1rem,2.4vw,2rem)] text-left enabled:cursor-pointer disabled:cursor-default"
      >
        <span className="film-title text-[clamp(1.375rem,2.4vw,2.25rem)] font-medium leading-tight tracking-[-0.02em]">
          {title}
        </span>
        <span className="film-play flex items-center gap-3 text-[0.9375rem] font-medium">
          <span aria-hidden className="film-play-dot grid size-[clamp(3rem,4.6vw,4.25rem)] place-items-center rounded-full">
            <svg viewBox="0 0 24 24" className="ml-[3px] size-[38%]" fill="currentColor" aria-hidden>
              <path d="M7 4.5v15l13-7.5z" />
            </svg>
          </span>
          <span className="hidden sm:inline">{src ? "Play film" : "Film to come"}</span>
        </span>
      </button>
    </div>
  );
}
