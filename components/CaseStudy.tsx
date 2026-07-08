import Image from "next/image";
import type { Block, Figure, Project } from "@/lib/types";
import { categoryLabels } from "@/lib/projects";
import {
  IconCalendar,
  IconCheck,
  IconPencil,
  IconUser,
  IconUsers,
} from "./Icons";
import { Reveal } from "./Reveal";

/* ---------------------------------------------------------------------------
   Layout rhythm: text lives in a centered 65ch column; images earn wider
   containers. Every figure carries a caption that explains its role in the
   story — the caption style is deliberately prominent for that reason.
--------------------------------------------------------------------------- */

const sizeClass = {
  inset: "max-w-2xl",
  wide: "max-w-4xl",
  full: "max-w-6xl",
} as const;

function Fig({
  figure,
  sizes = "(min-width: 1152px) 1100px, 92vw",
  className = "",
}: {
  figure: Figure;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-sand">
        <Image
          src={figure.src}
          alt={figure.alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 flex max-w-prose gap-2 text-caption text-stone">
        <span aria-hidden="true" className="font-medium text-terracotta-deep">
          —
        </span>
        {figure.caption}
      </figcaption>
    </figure>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <div className="mx-auto max-w-2xl">
          {block.body.map((paragraph, i) => (
            <p
              key={i}
              className="measure text-body text-ink not-first:mt-5"
            >
              {paragraph}
            </p>
          ))}
        </div>
      );
    case "figure":
      return (
        <Reveal className={`mx-auto ${sizeClass[block.size ?? "wide"]}`}>
          <Fig figure={block.figure} />
        </Reveal>
      );
    case "compare":
      return (
        <Reveal className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
            <Fig
              figure={block.left}
              sizes="(min-width: 640px) 45vw, 92vw"
            />
            <Fig
              figure={block.right}
              sizes="(min-width: 640px) 45vw, 92vw"
            />
          </div>
          {block.caption && (
            <p className="mx-auto mt-4 max-w-2xl text-center text-caption italic text-stone">
              {block.caption}
            </p>
          )}
        </Reveal>
      );
    case "gallery":
      return (
        <Reveal className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
            {block.figures.map((figure) => (
              <Fig
                key={figure.src}
                figure={figure}
                sizes="(min-width: 640px) 45vw, 92vw"
              />
            ))}
          </div>
        </Reveal>
      );
    case "quote":
      return (
        <blockquote className="mx-auto max-w-2xl border-l-2 border-sage pl-6">
          <p className="font-display text-[1.4rem] font-medium italic leading-snug text-ink">
            &ldquo;{block.text}&rdquo;
          </p>
          <footer className="mt-3 text-label uppercase text-sage-deep">
            {block.attribution}
          </footer>
        </blockquote>
      );
  }
}

function SectionHeading({
  number,
  label,
  heading,
}: {
  number: string;
  label: string;
  heading?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl">
      <p className="text-label font-medium uppercase text-terracotta-deep">
        {number} · {label}
      </p>
      {heading && (
        <h2 className="mt-2 font-display text-heading font-medium text-ink">
          {heading}
        </h2>
      )}
    </Reveal>
  );
}

function MetaItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 text-lg text-terracotta-deep">{icon}</span>
      <div>
        <dt className="text-label uppercase text-stone">{label}</dt>
        <dd className="mt-1 text-caption font-medium text-ink">{value}</dd>
      </div>
    </div>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="px-5 pb-8 pt-14 sm:px-8">
      {/* ---- Hero ---- */}
      <header className="mx-auto max-w-6xl">
        <p className="text-label font-medium uppercase text-terracotta-deep">
          {project.projectType} · {categoryLabels[project.category]}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-title font-medium text-ink">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lede text-stone">{project.hook}</p>

        <dl className="mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-sand p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
          <MetaItem icon={<IconUser />} label="Role" value={project.role} />
          <MetaItem icon={<IconUsers />} label="Team" value={project.team} />
          <MetaItem
            icon={<IconCalendar />}
            label="Timeline"
            value={project.timeline}
          />
          <MetaItem
            icon={<IconPencil />}
            label="Tools & methods"
            value={project.tools.join(" · ")}
          />
        </dl>

        <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl bg-sand">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            priority
            sizes="(min-width: 1152px) 1100px, 95vw"
            className="object-cover"
          />
        </div>
      </header>

      {/* ---- The short version ---- */}
      <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-linen bg-sand/70 p-6 sm:p-8">
        <p className="text-label font-medium uppercase text-terracotta-deep">
          The short version
        </p>
        <p className="mt-3 text-lede text-ink">{project.tldr}</p>
      </div>

      {/* ---- Context & problem ---- */}
      <section aria-label="Context and problem" className="mt-20 sm:mt-24">
        <SectionHeading number="01" label="Context" heading="What's broken, and for whom" />
        <div className="mt-8 space-y-10">
          {project.context.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </div>
      </section>

      {/* ---- Process ---- */}
      <section aria-label="Process" className="mt-20 sm:mt-24">
        <SectionHeading number="02" label="Process" heading="Show, don't tell" />
        <div className="mt-8 space-y-16">
          {project.process.map((chapter) => (
            <div key={chapter.heading} className="space-y-8">
              <h3 className="mx-auto max-w-2xl font-display text-subheading font-medium text-ink">
                {chapter.heading}
              </h3>
              <div className="space-y-10">
                {chapter.blocks.map((block, i) => (
                  <BlockRenderer key={i} block={block} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Key decisions ---- */}
      <section aria-label="Key decisions" className="mt-20 sm:mt-24">
        <SectionHeading
          number="03"
          label="Key decisions"
          heading="Where the judgment calls happened"
        />
        <div className="mx-auto mt-8 max-w-4xl space-y-6">
          {project.decisions.map((decision, i) => (
            <Reveal key={decision.title}>
              <div className="rounded-2xl bg-terracotta-wash p-6 sm:p-8">
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="font-display text-heading font-medium text-terracotta"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-subheading font-medium text-ink">
                    {decision.title}
                  </h3>
                </div>
                <p className="mt-3 text-body text-ink">{decision.decision}</p>
                <p className="mt-4 text-caption text-stone">
                  <span className="mr-2 text-label font-medium uppercase text-terracotta-deep">
                    Trade-off
                  </span>
                  {decision.tradeoff}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Outcome ---- */}
      <section aria-label="Outcome" className="mt-20 sm:mt-24">
        <SectionHeading number="04" label="Outcome" heading="Where it landed" />
        <div className="mt-8 space-y-10">
          {project.outcome.blocks.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}

          {project.outcome.results && (
            <ul className="mx-auto max-w-2xl space-y-3">
              {project.outcome.results.map((result) => (
                <li key={result} className="flex gap-3 text-body text-ink">
                  <IconCheck className="mt-1.5 shrink-0 text-sage-deep" />
                  {result}
                </li>
              ))}
            </ul>
          )}

          <Reveal className="mx-auto max-w-2xl">
            <div className="rounded-2xl bg-sage-wash p-6 sm:p-8">
              <p className="text-label font-medium uppercase text-sage-deep">
                What I learned
              </p>
              <p className="mt-3 text-body text-ink">
                {project.outcome.learned}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
