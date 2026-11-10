"use client";

import { useEffect, useRef } from "react";

/**
 * Muted demo video that plays only while on screen, and never under
 * prefers-reduced-motion (the poster frame stays as a still).
 * With loop={false} it plays once, holds its last frame, and replays from the
 * start the next time it scrolls into view.
 */
export function InViewVideo({ src, poster, label, className = "", loop = true }: { src: string; poster?: string; label: string; className?: string; loop?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (v.ended) v.currentTime = 0;
          void v.play().catch(() => {});
        } else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop={loop}
      playsInline
      preload="metadata"
    />
  );
}
