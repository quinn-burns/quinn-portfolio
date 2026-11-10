import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { WorkGallery } from "@/components/WorkGallery";
import { SiteFooter } from "@/components/SiteFooter";
import { featured } from "@/content/projects";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `${site.name} — ${site.descriptor}`,
  description: site.seoDescription,
  path: "/",
  image: "/og/home.png",
  imageAlt: "Quinn Burns — Designing what’s next. Industrial Design · Physical + Digital Experiences.",
});

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />

        <section aria-label="Selected work" className="frame">
          <div id="work" className="flex scroll-mt-8 items-baseline justify-between text-[0.9375rem]">
            <h2 className="font-medium">Selected Work</h2>
            <p className="text-mist tabular-nums">2024 — 2026</p>
          </div>
          <div className="mt-[clamp(1rem,1.8vw,1.5rem)]">
            <WorkGallery projects={featured} />
          </div>
        </section>

        {/* More Explorations is paused — data stays in content/projects.ts
            (`explorations`, `digitalWork`); render <ExplorationGallery> and
            <DigitalWork> here to bring it back. */}
      </main>
      <SiteFooter />
    </>
  );
}
