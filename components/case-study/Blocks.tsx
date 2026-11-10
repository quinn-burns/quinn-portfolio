import type React from "react";
import type { Block, Device } from "@/lib/case-study-types";
import { Copy, isDraft } from "./Copy";
import { Frame } from "./Frame";
import { FilmPlayer } from "./FilmPlayer";
import { InteractiveEmbed } from "./InteractiveEmbed";

/*
  Shared type steps for case studies (same family and colours as the homepage):
  label    0.9375rem medium, mist           — like "Selected Work"
  headline 1.5–2.125rem medium, charcoal     — like Isa's 24px section lines, scaled up
  body     1.0625–1.125rem, graphite, ≤58ch  — short paragraphs only
  caption  0.875rem, mist
*/
const LABEL = "text-[0.9375rem] font-medium text-mist";
const HEADLINE = "text-[clamp(1.5rem,2.4vw,2.125rem)] font-medium leading-[1.18] tracking-[-0.02em] text-balance";
const HEADLINE_LARGE = "text-[clamp(1.875rem,3.6vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-balance";
const BODY = "max-w-[58ch] text-[clamp(1.0625rem,1.15vw,1.125rem)] leading-[1.55] text-graphite";
const CAPTION = "mt-3 text-[0.875rem] leading-[1.45] text-mist";

function Caption({ text }: { text?: string }) {
  if (!text) return null;
  return <Copy text={text} className={CAPTION} />;
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-y-[clamp(3rem,6vw,5.5rem)]">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  );
}

function BlockView({ block: b }: { block: Block }) {
  switch (b.type) {
    case "statement":
      return (
        <div className={b.size === "large" ? "max-w-[58rem]" : "max-w-[46rem]"}>
          {b.label && <p className={LABEL}>{b.label}</p>}
          <Copy as="h3" text={b.headline} className={`${b.label ? "mt-3" : ""} ${b.size === "large" ? HEADLINE_LARGE : HEADLINE}`} />
          <Copy text={b.body} className={`mt-4 ${BODY}`} />
        </div>
      );

    case "split":
      return (
        <div className="grid gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-4 md:grid-cols-2">
          <div>
            {b.label && <p className={LABEL}>{b.label}</p>}
            <Copy as="h3" text={b.headline} className={`${b.label ? "mt-3" : ""} ${HEADLINE}`} />
          </div>
          <Copy text={b.body} className={`md:pt-[2.15rem] ${BODY}`} />
        </div>
      );

    case "image":
      return (
        <figure className={b.size === "bleed" ? "cs-bleed" : ""}>
          {b.pan && b.media.kind === "image" ? (
            <>
              <div className="cs-pan" style={{ "--pan-w": `${b.pan}px` } as React.CSSProperties} tabIndex={0} role="region" aria-label={`${b.media.alt} Scrollable on small screens.`}>
                <div className="cs-pan-inner">
                  <Frame media={b.media} ratio={b.ratio} rounded={b.size !== "bleed"} sizes={`(min-width: 1024px) 82vw, ${b.pan}px`} />
                </div>
              </div>
              <p className="cs-pan-hint">
                <span aria-hidden="true">Swipe to explore ⟷</span>
                <a href={b.media.src} target="_blank" rel="noopener noreferrer" className="draw-line">
                  Open full size<span className="sr-only"> (opens in a new tab)</span> ↗
                </a>
              </p>
            </>
          ) : (
            <Frame media={b.media} ratio={b.ratio} rounded={b.size !== "bleed"} sizes="(min-width: 1024px) 82vw, 100vw" />
          )}
          {b.caption && (
            <figcaption className={b.size === "bleed" ? "cs-bleed-caption" : ""}>
              <Caption text={b.caption} />
            </figcaption>
          )}
        </figure>
      );

    case "gallery": {
      // Column widths follow each image's ratio so every frame in the row is the same height.
      const ratios = b.items.map((_, i) => b.ratios?.[i] ?? 4 / 5);
      return (
        <div className="cs-gallery grid gap-[clamp(14px,1.6vw,24px)]" style={{ "--cols": ratios.map((r) => `${r}fr`).join(" ") } as React.CSSProperties}>
          {b.items.map((it, i) => (
            <figure key={i} className="min-w-0">
              <Frame media={it.media} ratio={ratios[i]} sizes={`(min-width: 768px) ${Math.round(80 / b.items.length)}vw, 94vw`} />
              <Caption text={it.caption} />
            </figure>
          ))}
        </div>
      );
    }

    case "mediaText": {
      // Tall media (phone video, portrait shots) gets a narrower column so it doesn't run screens tall.
      const tall = (b.ratio ?? 1) < 0.7;
      return (
        <div className="grid items-center gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-6 md:grid-cols-12">
          <figure className={`${tall ? "mx-auto w-full max-w-[22rem] md:col-span-5 md:max-w-none" : "md:col-span-7"} ${b.side === "right" ? "md:order-2" : ""}`}>
            <Frame media={b.media} ratio={b.ratio} sizes="(min-width: 768px) 48vw, 94vw" />
            <Caption text={b.caption} />
          </figure>
          <div className={`${tall ? "md:col-span-7" : "md:col-span-5"} ${b.side === "right" ? "md:order-1" : ""}`}>
            {b.label && <p className={LABEL}>{b.label}</p>}
            <Copy as="h3" text={b.headline} className={`${b.label ? "mt-3" : ""} ${HEADLINE}`} />
            <Copy text={b.body} className={`mt-4 ${BODY}`} />
          </div>
        </div>
      );
    }

    case "annotated":
      return (
        <figure>
          <div className="relative">
            <Frame media={b.media} ratio={b.ratio} />
            {b.notes.map((n, i) => (
              <span
                key={i}
                aria-hidden
                className="cs-pin absolute grid size-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ivory text-[0.8125rem] font-medium tabular-nums text-charcoal"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <ol className="mt-6 grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {b.notes.map((n, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-5 shrink-0 text-[0.9375rem] font-medium tabular-nums text-mist">{i + 1}</span>
                <div>
                  <Copy as="p" text={n.title} className="text-[1.0625rem] font-medium" />
                  <Copy text={n.body} className="mt-1 text-[0.9375rem] leading-[1.5] text-graphite" />
                </div>
              </li>
            ))}
          </ol>
          <Caption text={b.caption} />
        </figure>
      );

    case "devices":
      return (
        <div>
          {(b.label || b.headline) && (
            <div className="mb-[clamp(1.5rem,3vw,2.5rem)] max-w-[46rem]">
              {b.label && <p className={LABEL}>{b.label}</p>}
              {b.headline && <Copy as="h3" text={b.headline} className={`mt-3 ${HEADLINE}`} />}
            </div>
          )}
          <div className="cs-devices">
            {b.items.map((it, i) => (
              <figure key={i} className={`cs-device cs-device--${it.device}`}>
                {it.device === "watch" ? (
                  <Frame media={it.media} rounded={false} sizes="(min-width: 768px) 14vw, 40vw" />
                ) : (
                  <div className="cs-device-bezel">
                    <Frame media={it.media} ratio={DEVICE_RATIO[it.device]} rounded={false} sizes="(min-width: 768px) 30vw, 70vw" />
                  </div>
                )}
                <Caption text={it.caption} />
                {it.href && (
                  <a href={it.href} target="_blank" rel="noopener noreferrer" className="group mt-1 inline-block text-[0.875rem] text-charcoal">
                    <span className="draw-line pb-0.5">Try it live</span>
                    <span className="sr-only"> (opens the prototype in a new tab)</span>
                  </a>
                )}
              </figure>
            ))}
          </div>
        </div>
      );

    case "sequence":
      return (
        <div>
          {(b.label || b.headline) && (
            <div className="mb-[clamp(1.25rem,2.5vw,2rem)] max-w-[46rem]">
              {b.label && <p className={LABEL}>{b.label}</p>}
              {b.headline && <Copy as="h3" text={b.headline} className={`mt-3 ${HEADLINE}`} />}
            </div>
          )}
          <ol
            className="cs-steps grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-8"
            style={{ "--steps": b.steps.length, ...(b.columns ? { "--cols": b.columns } : {}) } as React.CSSProperties}
          >
            {b.steps.map((s, i) => (
              <li key={i} className="border-t border-taupe pt-4">
                {b.numbered && (
                  <span className="mb-3 block text-[0.9375rem] font-medium tabular-nums text-mist">{String(i + 1).padStart(2, "0")}</span>
                )}
                <Copy as="p" text={s.title} className="text-[clamp(1.125rem,1.4vw,1.3rem)] font-medium leading-[1.25] tracking-[-0.01em]" />
                <Copy text={s.body} className="mt-2 text-[1rem] leading-[1.55] text-graphite" />
              </li>
            ))}
          </ol>
        </div>
      );

    case "film":
      return (
        <figure>
          <FilmPlayer title={b.title} poster={b.poster} src={b.src} ratio={b.ratio} />
          <Caption text={b.caption} />
        </figure>
      );

    case "interactive":
      return (
        <figure>
          <InteractiveEmbed title={b.title} src={b.src} poster={b.poster} ratio={b.ratio} />
          <Caption text={b.caption} />
        </figure>
      );

    case "subsection":
      return (
        <header id={b.id} className="cs-subsection scroll-mt-[var(--cs-offset)] pt-[clamp(2rem,5vw,4rem)]">
          <p className={LABEL}>{b.kicker}</p>
          <h3 className="mt-2 text-[clamp(2.5rem,5.4vw,5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">{b.name}</h3>
          <Copy text={b.intro} className={`mt-5 ${BODY}`} />
        </header>
      );

    case "response":
      return (
        <ol className="flex flex-col gap-y-[clamp(4rem,9vw,8rem)]">
          {b.items.map((it, i) => (
            <li key={i} className="grid items-center gap-x-[clamp(1.5rem,4vw,4.5rem)] gap-y-6 md:grid-cols-12">
              <figure className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <Frame media={it.media} ratio={it.ratio} sizes="(min-width: 768px) 52vw, 94vw" />
              </figure>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                <span className="block text-[0.9375rem] font-medium tabular-nums text-mist">{String(i + 1).padStart(2, "0")}</span>
                <dl className="cs-response mt-4">
                  <div>
                    <dt className={LABEL}>What people do</dt>
                    <dd className="mt-1.5 text-[clamp(1.0625rem,1.3vw,1.25rem)] leading-[1.45] text-graphite">{it.behavior}</dd>
                  </div>
                  <div>
                    <dt className={LABEL}>What they need</dt>
                    <dd className="mt-1.5 text-[clamp(1.0625rem,1.3vw,1.25rem)] leading-[1.45] text-graphite">{it.need}</dd>
                  </div>
                  <div>
                    <dt className={LABEL}>How Melo responds</dt>
                    <dd className="mt-1.5">
                      <span className="block text-[clamp(1.5rem,2.4vw,2.125rem)] font-medium leading-[1.12] tracking-[-0.02em]">{it.feature}</span>
                      {it.detail && <span className="mt-2 block max-w-[40ch] text-[1rem] leading-[1.55] text-graphite">{it.detail}</span>}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      );

    case "recognition":
      return (
        <section aria-label="Recognition" className="grid items-center gap-x-[clamp(1.5rem,4vw,4.5rem)] gap-y-8 border-t border-taupe pt-[clamp(2.5rem,5vw,4rem)] md:grid-cols-12">
          {b.badge && b.badge.kind === "image" && (
            <div className="md:col-span-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.badge.src} alt={b.badge.alt} width={b.badge.width} height={b.badge.height} className="h-auto w-[clamp(150px,16vw,220px)]" />
            </div>
          )}
          <div className={b.badge ? "md:col-span-8" : "md:col-span-12"}>
            <p className={LABEL}>Recognition</p>
            <h3 className="mt-3 text-[clamp(1.875rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.03em] text-balance">{b.title}</h3>
            <p className="mt-2 text-[clamp(1.0625rem,1.3vw,1.25rem)] text-graphite">{b.distinction}</p>
            <Copy text={b.body} className={`mt-5 ${BODY}`} />
            {b.href && (
              <a href={b.href} target="_blank" rel="noopener noreferrer" className="group mt-5 inline-block text-[0.9375rem]">
                <span className="draw-line pb-0.5">{b.linkLabel ?? "View the award listing"}</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        </section>
      );

    case "credits":
      return (
        <div className="grid gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-8 border-t border-taupe pt-6 sm:grid-cols-3">
          {b.groups.map((g) => (
            <div key={g.label}>
              <p className={LABEL}>{g.label}</p>
              <ul className="mt-2 flex flex-col gap-1 text-[1.0625rem]">
                {g.lines.map((l, i) => (
                  <li key={i}>{isDraft(l) ? <Copy as="span" text={l} /> : l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
  }
}

const DEVICE_RATIO: Record<Device, number> = {
  phone: 390 / 844,
  "phone-landscape": 844 / 390,
  watch: 373 / 439,
  screen: 2,
  desktop: 16 / 10,
};

