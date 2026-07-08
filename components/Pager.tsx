import Link from "next/link";
import type { Project } from "@/lib/types";
import { IconArrowLeft, IconArrowRight } from "./Icons";

/** Next/prev navigation so viewers keep moving through the portfolio. */
export function Pager({ prev, next }: { prev: Project; next: Project }) {
  return (
    <nav
      aria-label="More projects"
      className="mx-auto mt-20 max-w-6xl border-t border-linen px-5 sm:px-8"
    >
      <div className="grid gap-2 py-10 sm:grid-cols-2">
        <Link
          href={`/work/${prev.slug}`}
          className="group rounded-2xl p-4 transition-colors hover:bg-sand/70 sm:p-6"
        >
          <p className="flex items-center gap-2 text-label uppercase text-stone">
            <IconArrowLeft className="text-terracotta-deep transition-transform motion-safe:group-hover:-translate-x-1" />
            Previous project
          </p>
          <p className="mt-2 font-display text-subheading font-medium text-ink group-hover:text-terracotta-deep">
            {prev.title}
          </p>
          <p className="mt-1 text-caption text-stone">{prev.hook}</p>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group rounded-2xl p-4 text-right transition-colors hover:bg-sand/70 sm:p-6"
        >
          <p className="flex items-center justify-end gap-2 text-label uppercase text-stone">
            Next project
            <IconArrowRight className="text-terracotta-deep transition-transform motion-safe:group-hover:translate-x-1" />
          </p>
          <p className="mt-2 font-display text-subheading font-medium text-ink group-hover:text-terracotta-deep">
            {next.title}
          </p>
          <p className="mt-1 text-caption text-stone">{next.hook}</p>
        </Link>
      </div>
    </nav>
  );
}
