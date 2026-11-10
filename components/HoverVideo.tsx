"use client";

import { useEffect, useRef } from "react";

/**
 * A muted loop that plays only while its tile is hovered or focused, and
 * never under prefers-reduced-motion (the poster stays as a still).
 */
export function HoverVideo({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    const tile = video?.closest<HTMLElement>(".tile");
    if (!video || !tile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const play = () => void video.play().catch(() => {});
    const stop = () => {
      video.pause();
      video.currentTime = 0;
    };
    tile.addEventListener("pointerenter", play);
    tile.addEventListener("pointerleave", stop);
    tile.addEventListener("focusin", play);
    tile.addEventListener("focusout", stop);
    return () => {
      tile.removeEventListener("pointerenter", play);
      tile.removeEventListener("pointerleave", stop);
      tile.removeEventListener("focusin", play);
      tile.removeEventListener("focusout", stop);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
