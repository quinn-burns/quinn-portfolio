import { Suspense } from "react";
import { projects } from "@/lib/projects";
import { WorkGrid } from "@/components/WorkGrid";
import { AlwaysCreating } from "@/components/AlwaysCreating";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
        <h1 className="font-display text-display font-medium text-ink">
          Designing what&rsquo;s{" "}
          <span className="underline-sketch whitespace-nowrap">next</span>.
        </h1>
        <p className="mt-7 max-w-2xl text-lede text-stone">
          I&rsquo;m a purposeful designer driven by curiosity, bold ideas, and
          a constant urge to rethink the products and systems around us.
        </p>
      </section>

      {/* ---- Work grid ---- */}
      <section
        id="work"
        aria-labelledby="selected-work"
        className="mx-auto max-w-6xl scroll-mt-20 px-5 sm:px-8"
      >
        <Reveal>
          <h2
            id="selected-work"
            className="font-display text-heading font-medium text-ink"
          >
            Selected work
          </h2>
        </Reveal>
        <div className="mt-8">
          <Suspense fallback={null}>
            <WorkGrid projects={projects} />
          </Suspense>
        </div>
      </section>

      {/* ---- Always creating ---- */}
      <div className="mt-24 sm:mt-32">
        <AlwaysCreating />
      </div>
    </>
  );
}
