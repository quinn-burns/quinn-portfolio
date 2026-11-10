"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type React from "react";

export type NavItem = { id: string; label: string };

type Props = {
  items: NavItem[];
  /** "sidebar" = sticky vertical list (desktop), "bar" = sticky horizontal strip (mobile) */
  variant: "sidebar" | "bar";
  className?: string;
};

/**
 * Editorial chapter navigation for case studies.
 *
 * Active chapter: an IntersectionObserver watches each chapter against a thin
 * band ~30% down the viewport. The chapter crossing that band is active; when
 * none is (gaps, very tall images), the last active one stays lit, so the
 * highlight never flickers off between chapters.
 *
 * Clicking a label scrolls smoothly (instantly under reduced motion) and
 * holds the clicked chapter active until the scroll settles, so the highlight
 * doesn't flick through every chapter it passes on the way.
 */
export function CaseStudyNavigation({ items, variant, className = "" }: Props) {
  const [active, setActive] = useState(items[0]?.id);
  const lockUntil = useRef(0);
  const barRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (performance.now() < lockUntil.current) return;
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      // A 1px-ish band 30% from the top of the viewport.
      { rootMargin: "-30% 0px -69% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));

    // Above the first chapter (e.g. after jumping back to the top) the band touches
    // no chapter, so reset to the first one rather than keeping a stale highlight.
    const onScroll = () => {
      if (performance.now() < lockUntil.current) return;
      if (sections[0].getBoundingClientRect().top > window.innerHeight * 0.3) setActive(items[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Start on the chapter named in the URL, if any.
    const fromHash = decodeURIComponent(location.hash.slice(1));
    if (items.some((i) => i.id === fromHash)) setActive(fromHash);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  // Keep the active label in view inside the horizontal mobile bar.
  useEffect(() => {
    if (variant !== "bar" || !barRef.current) return;
    const el = barRef.current.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!el) return;
    const bar = barRef.current;
    const target = el.offsetLeft - (bar.clientWidth - el.offsetWidth) / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    bar.scrollTo({ left: target, behavior: reduce ? "auto" : "smooth" });
  }, [active, variant]);

  const go = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    lockUntil.current = performance.now() + (reduce ? 100 : 900);
    setActive(id);
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    // Move focus to the chapter so keyboard and screen-reader users land there too.
    target.focus({ preventScroll: true });
  }, []);

  if (variant === "bar") {
    return (
      <nav aria-label="Case study chapters" className={`cs-bar ${className}`}>
        <ul ref={barRef} className="cs-bar-list">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                data-id={i.id}
                onClick={(e) => go(e, i.id)}
                aria-current={active === i.id ? "location" : undefined}
                className="cs-link"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="Case study chapters" className={`cs-sidebar ${className}`}>
      <ul className="flex flex-col gap-[0.55em]">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              onClick={(e) => go(e, i.id)}
              aria-current={active === i.id ? "location" : undefined}
              className="cs-link"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
