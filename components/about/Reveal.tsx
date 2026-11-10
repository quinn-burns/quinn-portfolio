"use client";

import { useEffect } from "react";

/**
 * Fades and lifts every [data-reveal] element in once as it enters the view.
 * Elements stay visible without JavaScript and under reduced motion (see the
 * `.reveal-on` rules in globals.css); the inline script on the page adds that
 * class before first paint so nothing flashes.
 */
export function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.setAttribute("data-shown", "");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

/** Runs before paint: opt the page into reveal animations only when JS is available. */
export const revealBootScript = `document.documentElement.classList.add('reveal-on')`;
