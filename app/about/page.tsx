import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { TextLink } from "@/components/TextLink";
import { ProjectMedia } from "@/components/ProjectMedia";
import { Reveal, revealBootScript } from "@/components/about/Reveal";
import { about, type StoryPhoto } from "@/content/about";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `About — ${site.name}`,
  description:
    "Quinn Burns is an Industrial Design student and Stamps President’s Scholar at Georgia Tech who believes thoughtful design can improve how we live.",
  path: "/about",
  image: "/og/home.png",
  imageAlt: "Quinn Burns — Designing what’s next. Industrial Design · Physical + Digital Experiences.",
  type: "profile",
});

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

/** Sage chapter number + quiet chapter name (01 is the hero). */
function ChapterLabel({ n, label }: { n: string; label: string }) {
  return (
    <p className="label flex items-baseline gap-3 text-graphite">
      <span className="tabular-nums text-sage">{n}</span>
      <span>{label}</span>
    </p>
  );
}

/** A story photograph (rounded like the rest of the site) with an optional caption. */
function StoryFigure({ item, sizes, className = "", style }: { item: StoryPhoto; sizes: string; className?: string; style?: React.CSSProperties }) {
  return (
    <figure data-reveal className={className} style={style}>
      <ProjectMedia media={item.media} sizes={sizes} className="rounded-[clamp(10px,1.2vw,18px)]" />
      {item.caption && <figcaption className="mt-3 text-meta text-graphite">{item.caption}</figcaption>}
    </figure>
  );
}

/** A loose print in the collage: slight tilt, soft paper edge; straightens on hover. */
function Print({ item, slot, sizes }: { item: StoryPhoto; slot: string; sizes: string }) {
  return (
    <figure data-reveal className={`print ${slot}`}>
      <div className="print-paper">
        <ProjectMedia media={item.media} sizes={sizes} className="rounded-[6px]" />
      </div>
      {item.caption && (
        <figcaption className="print-caption">
          <span className="print-caption-title">{item.caption}</span>
          {item.note && <span className="print-caption-note">{item.note}</span>}
        </figcaption>
      )}
    </figure>
  );
}

const lede = "text-[clamp(1.125rem,1.45vw,1.3125rem)] leading-[1.55] tracking-[-0.006em]";
/** Reading text for the longer story paragraphs. */
const body = "text-[clamp(1.0625rem,1.2vw,1.1875rem)] leading-[1.6]";
/** A single sentence set large between paragraphs. */
const statement = "text-[clamp(1.625rem,2.9vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.028em] text-balance";

export default function AboutPage() {
  const { hero, note, path, view, outside, record } = about;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      <SiteNav />
      <main id="main" className="about">
        {/* ───────────── 01 · Hi, I’m Quinn ───────────── */}
        <section aria-labelledby="about-title" className="frame pt-[clamp(2.5rem,6vw,6rem)]">
          <div className="grid-12 gap-y-8 md:gap-y-0">
            <h1 id="about-title" data-reveal className="about-hello col-span-4 md:col-span-6 md:col-start-7 md:row-start-1">
              {hero.headline}
            </h1>

            <figure data-reveal className="about-portrait col-span-4 md:col-span-5 md:col-start-1 md:row-span-2 md:row-start-1">
              <ProjectMedia
                media={hero.portrait}
                ratio={4 / 5}
                priority
                sizes="(min-width: 1480px) 560px, (min-width: 768px) 40vw, 86vw"
                className="rounded-[clamp(12px,1.5vw,22px)]"
              />
            </figure>

            <div
              data-reveal
              style={d(120)}
              className="col-span-4 md:col-span-6 md:col-start-7 md:row-start-2 md:self-end md:pt-[clamp(2rem,4vw,3.5rem)] lg:col-span-5 lg:col-start-7"
            >
              <p className={`${lede} max-w-[34ch] text-graphite`}>{hero.lead}</p>
              <p className="mt-[clamp(1.25rem,2vw,1.75rem)] max-w-[18ch] border-t border-taupe pt-[clamp(1.25rem,2vw,1.75rem)] text-[clamp(1.75rem,3.1vw,3rem)] font-medium leading-[1.08] tracking-[-0.03em] text-pretty">
                {hero.belief}
              </p>
              <p className={`${body} mt-[clamp(1.5rem,2.6vw,2.25rem)] max-w-[40ch] text-graphite`}>{hero.curiosity}</p>
            </div>
          </div>
        </section>

        {/* ───────────── Aside · a real note from Quinn’s phone ───────────── */}
        <aside aria-label={note.label} className="frame mt-[clamp(3.5rem,7vw,6rem)]">
          <div className="grid-12">
            <div data-reveal className="col-span-4 md:col-span-5 md:col-start-7 lg:col-span-4 lg:col-start-7">
              <p className="label mb-3 text-graphite">{note.label}</p>
              <figure className="note">
                <div className="note-bar" aria-hidden="true">
                  <span>‹ Notes</span>
                </div>
                <p className="note-title">{note.title}</p>
                <p className="note-body">{note.body}</p>
              </figure>
            </div>
          </div>
        </aside>

        {/* ───────────── 02 · A little bit of everything ───────────── */}
        <section aria-labelledby="path-title" className="frame mt-[clamp(5rem,10vw,9rem)]">
          <div data-reveal>
            <ChapterLabel n={path.n} label={path.label} />
            <h2 id="path-title" className="mt-4 max-w-[14ch] text-title font-semibold text-balance">
              {path.title}
            </h2>
            <p className={`${statement} mt-[clamp(1.25rem,2.4vw,2rem)] max-w-[24ch]`}>{path.opening}</p>
          </div>

          {/* Moment 1 — coding → UI/UX, beside ISTE (photo right) */}
          <div className="grid-12 mt-[clamp(2.5rem,5vw,4.5rem)] items-start gap-y-10">
            <div data-reveal className={`${body} col-span-4 flex max-w-[40ch] flex-col gap-5 text-graphite md:col-span-6 lg:col-span-5 lg:col-start-2`}>
              {path.coding.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <StoryFigure
              item={path.early}
              sizes="(min-width: 768px) 32vw, 80vw"
              style={d(120)}
              className="tilt-r col-span-3 col-start-2 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-8"
            />
          </div>

          {/* Moment 2 — many hats: research photo left, paragraph right */}
          <div className="grid-12 mt-[clamp(3.5rem,7vw,6rem)] items-center gap-y-8">
            <div data-reveal className={`${body} col-span-4 flex max-w-[40ch] flex-col gap-5 text-graphite md:col-span-6 md:col-start-7 md:row-start-1 lg:col-span-5 lg:col-start-7`}>
              {path.since.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <StoryFigure
              item={path.research}
              sizes="(min-width: 768px) 32vw, 80vw"
              style={d(100)}
              className="tilt-l col-span-3 md:col-span-5 md:col-start-1 md:row-start-1 lg:col-span-4 lg:col-start-2"
            />
          </div>

          {/* Moment 3 — beyond the screen: the turn into industrial design, shop photo right */}
          <div className="grid-12 mt-[clamp(3.5rem,7vw,6rem)] gap-y-8 md:items-end">
            <div data-reveal className="col-span-4 md:col-span-6 md:row-start-1 md:pb-[clamp(1rem,4vw,4rem)] lg:col-span-6 lg:col-start-1">
              <p className={`${body} max-w-[40ch] text-graphite lg:ml-[calc(100%/6)]`}>{path.beyond}</p>
              <p className={`${statement} mt-[clamp(1.5rem,2.6vw,2.25rem)] max-w-[20ch]`}>{path.turn}</p>
            </div>
            <StoryFigure
              item={path.making}
              sizes="(min-width: 768px) 32vw, 80vw"
              style={d(120)}
              className="tilt-r col-span-3 col-start-2 md:col-span-5 md:col-start-8 md:row-start-1 lg:col-span-4 lg:col-start-8"
            />
          </div>
        </section>

        {/* ───────────── 03 · The way I see things (compact) ───────────── */}
        <section aria-labelledby="view-title" className="frame mt-[clamp(6rem,12vw,11rem)]">
          <div className="grid-12 gap-y-6">
            <div data-reveal className="col-span-4 md:col-span-5">
              <ChapterLabel n={view.n} label={view.label} />
              <h2 id="view-title" className="mt-4 max-w-[12ch] text-title font-semibold text-balance">
                {view.title}
              </h2>
            </div>
            <p data-reveal style={d(80)} className="col-span-4 max-w-[16ch] text-[clamp(2rem,4.4vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.035em] text-balance md:col-span-7 md:col-start-6 md:self-end">
              {view.lead}
            </p>
          </div>
          <div className="grid-12 mt-[clamp(2.5rem,5vw,4rem)] items-start gap-y-10">
            <div data-reveal className={`${body} col-span-4 flex max-w-[40ch] flex-col gap-5 text-graphite md:col-span-6 lg:col-span-5 lg:col-start-2`}>
              {view.body.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <StoryFigure
              item={view.photo}
              sizes="(min-width: 768px) 36vw, 90vw"
              style={d(120)}
              className="tilt-r col-span-4 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-8"
            />
          </div>
        </section>

        {/* ───────────── 04 · Outside, always (image-led) ───────────── */}
        <section aria-labelledby="outside-title" className="frame mt-[clamp(6rem,12vw,11rem)]">
          <div className="grid-12 gap-y-6">
            <div data-reveal className="col-span-4 md:col-span-6">
              <ChapterLabel n={outside.n} label={outside.label} />
              <h2 id="outside-title" className="about-hello mt-4">
                {outside.title}
              </h2>
            </div>
            <p data-reveal style={d(100)} className={`${body} col-span-4 max-w-[40ch] text-graphite md:col-span-6 md:col-start-7 md:self-end lg:col-span-5 lg:col-start-8`}>
              {outside.intro}
            </p>
          </div>

          <div className="collage collage--trail mt-[clamp(3rem,6vw,5.5rem)]">
            {outside.trail.map((item, i) => (
              <Print key={i} item={item} slot={`p${i + 1}`} sizes={i === 0 ? "(min-width: 768px) 62vw, 92vw" : "(min-width: 768px) 46vw, 80vw"} />
            ))}
          </div>

          <div className="collage collage--everyday mt-[clamp(3.5rem,7vw,6rem)]">
            <p data-reveal className={`${body} collage-text max-w-[36ch] text-graphite`}>
              {outside.interlude}
            </p>
            {outside.everyday.map((item, i) => (
              <Print key={i} item={item} slot={`p${i + 1}`} sizes={i === 2 ? "(min-width: 768px) 42vw, 92vw" : "(min-width: 768px) 34vw, 46vw"} />
            ))}
          </div>
        </section>

        {/* ───────────── Along the way (compact) ───────────── */}
        <section aria-labelledby="record-title" className="frame mt-[clamp(6.5rem,14vw,12rem)]">
          <div className="grid-12 gap-y-10 border-t border-taupe pt-[clamp(1.75rem,3vw,2.5rem)]">
            <div data-reveal className="col-span-4 md:col-span-12 lg:col-span-4">
              <h2 id="record-title" className="text-[clamp(1.375rem,1.9vw,1.75rem)] font-medium tracking-[-0.02em]">
                {record.title}
              </h2>
              <TextLink href={site.resume} external className="mt-4 text-body text-graphite hover:text-charcoal">
                View résumé <span aria-hidden="true">↗</span>
              </TextLink>
            </div>
            {record.groups.map((g, gi) => (
              <div
                key={g.label}
                data-reveal
                style={d(80 + gi * 100)}
                className={`col-span-4 md:col-span-6 ${gi === 0 ? "lg:col-span-4 lg:col-start-5" : "lg:col-span-4 lg:col-start-9"}`}
              >
                <h3 className="label mb-3 text-graphite">{g.label}</h3>
                <ul className="flex flex-col gap-3">
                  {g.items.map((it) => {
                    const title = it.href ? <span className="draw-line pb-0.5">{it.title}</span> : it.title;
                    const row = (
                      <>
                        <span className="block text-body font-medium leading-[1.35]">{title}</span>
                        <span className="flex items-baseline justify-between gap-4 text-meta text-graphite">
                          <span>{it.org}</span>
                          {it.detail && <span className="tabular-nums text-mist">{it.detail}</span>}
                        </span>
                      </>
                    );
                    return (
                      <li key={it.title}>
                        {it.href ? (
                          <Link href={it.href} className="group block">
                            {row}
                          </Link>
                        ) : (
                          row
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <Reveal />
    </>
  );
}
