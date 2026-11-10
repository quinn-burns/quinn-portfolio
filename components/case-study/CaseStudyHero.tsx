import type { CaseStudy } from "@/lib/case-study-types";
import { Copy } from "./Copy";
import { Frame } from "./Frame";

/** Full-width system render, then the title, one headline, the intro and a few quiet facts. */
export function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <header className="frame">
      <Frame media={study.heroMedia} ratio={study.heroRatio} priority sizes="(min-width: 1480px) 1400px, 94vw" />
      {study.heroCaption && <p className="mt-3 text-[0.875rem] text-mist">{study.heroCaption}</p>}

      <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid gap-y-10 lg:grid-cols-12 lg:gap-x-[clamp(16px,1.7vw,28px)]">
        <div className="lg:col-span-8">
          <h1 className="text-[clamp(2.75rem,6.4vw,6.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">{study.title}</h1>
          <p className="mt-[clamp(0.75rem,1.4vw,1.25rem)] text-[clamp(1.5rem,2.6vw,2.4rem)] font-medium leading-[1.12] tracking-[-0.025em] text-graphite">
            {study.headline}
          </p>
          <Copy
            text={study.intro}
            className="mt-[clamp(1.25rem,2.2vw,2rem)] max-w-[40ch] text-[clamp(1.125rem,1.55vw,1.4rem)] leading-[1.4] tracking-[-0.01em] text-mist"
          />
          {study.recognition && (
            <p className="mt-[clamp(1.5rem,2.6vw,2.25rem)] border-l border-charcoal pl-4 text-[0.9375rem] leading-[1.45]">
              {study.recognition.href ? (
                <a href={study.recognition.href} target="_blank" rel="noopener noreferrer" className="group font-medium">
                  <span className="draw-line pb-0.5">{study.recognition.title}</span>
                  <span className="sr-only"> (opens the official award listing in a new tab)</span>
                </a>
              ) : (
                <span className="font-medium">{study.recognition.title}</span>
              )}
              <span className="block text-mist">{study.recognition.distinction}</span>
            </p>
          )}
        </div>

        <aside className="lg:col-span-3 lg:col-start-10 lg:pt-[clamp(0.5rem,1.5vw,1.5rem)]">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-[0.9375rem] lg:grid-cols-1">
            {study.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-mist">{f.label}</dt>
                <dd className="mt-0.5">
                  <Copy as="span" text={f.value} />
                </dd>
              </div>
            ))}
          </dl>
          {study.disclaimer && (
            <p className="mt-6 max-w-[38ch] text-[0.8125rem] leading-[1.5] text-graphite">{study.disclaimer}</p>
          )}
        </aside>
      </div>
    </header>
  );
}
