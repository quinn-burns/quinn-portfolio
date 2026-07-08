import { experiments } from "@/content/experiments";
import { IconArrowUpRight, IconAsterisk } from "./Icons";
import { Reveal } from "./Reveal";

/**
 * A looser, smaller-scale strip for experiments and side work —
 * deliberately quieter than the case-study grid: bordered rows, no images.
 */
export function AlwaysCreating() {
  return (
    <section aria-labelledby="always-creating" className="mx-auto max-w-6xl px-5 sm:px-8">
      <Reveal>
        <div className="flex items-center gap-3">
          <IconAsterisk className="text-xl text-terracotta" />
          <h2
            id="always-creating"
            className="font-display text-heading font-medium text-ink"
          >
            Always creating
          </h2>
        </div>
        <p className="mt-3 max-w-xl text-body text-stone">
          Smaller experiments that keep the curiosity muscle warm — not every
          idea needs a case study.
        </p>
      </Reveal>
      <ul className="mt-8 border-t border-linen">
        {experiments.map((item) => {
          const inner = (
            <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
              <span className="w-36 shrink-0 text-label uppercase text-sage-deep">
                {item.tag}
              </span>
              <span className="font-display text-subheading font-medium text-ink">
                {item.title}
                {item.href && (
                  <IconArrowUpRight className="mb-1 ml-1.5 inline text-[0.8em] text-terracotta-deep" />
                )}
              </span>
              <span className="text-caption text-stone sm:ml-auto sm:max-w-sm sm:text-right">
                {item.blurb}
              </span>
            </div>
          );
          return (
            <li key={item.title} className="border-b border-linen">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:bg-sand/60"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
