import type React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { GalleryTile } from "@/components/GalleryTile";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyNavigation } from "@/components/case-study/CaseStudyNavigation";
import { Blocks } from "@/components/case-study/Blocks";
import { ProjectNavigation } from "@/components/case-study/ProjectNavigation";
import { caseStudies } from "@/content/case-studies";
import { featured } from "@/content/projects";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const study = caseStudies[(await params).slug];
  if (!study) return {};
  const card = featured.find((p) => p.slug === study.slug);
  return pageMeta({
    title: `${study.title}: ${card?.subtitle ?? study.headline} — ${site.name}`,
    description: study.seoDescription,
    path: `/work/${study.slug}`,
    image: `/og/${study.slug}.jpg`,
    imageAlt: `${study.title} by ${site.name} — ${study.headline}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const study = caseStudies[(await params).slug];
  if (!study) notFound();

  const nav = study.chapters.map((c) => ({ id: c.id, label: c.label }));
  const next = featured.find((p) => p.slug === study.next);
  const nextRatio = next && "width" in next.media && next.media.width && next.media.height ? next.media.width / next.media.height : 3 / 2;

  return (
    <>
      <SiteNav />
      <main id="main">
        <CaseStudyHero study={study} />

        {/* The sidebar is sticky only inside this article, so it never reaches the next-project block or footer. */}
        <article className="frame cs-article mt-[clamp(4rem,8vw,7rem)]">
          {/* Mobile: sticky strip. Its parent is the article, so it sticks for the whole case study. */}
          <CaseStudyNavigation items={nav} variant="bar" className="lg:hidden" />

          <div className="lg:grid lg:grid-cols-12 lg:gap-x-[clamp(16px,1.7vw,28px)]">
            <aside className="hidden lg:col-span-2 lg:block">
              <div className="sticky top-[var(--cs-sticky-top)]">
                <CaseStudyNavigation items={nav} variant="sidebar" />
              </div>
            </aside>

            <div className="min-w-0 lg:col-span-10 lg:col-start-3">
              {study.chapters.map((c, i) => (
                <section
                  key={c.id}
                  id={c.id}
                  aria-label={c.label}
                  tabIndex={-1}
                  className={`cs-chapter outline-none ${i ? "scroll-mt-[calc(var(--cs-offset)-clamp(6rem,11vw,10rem))] pt-[clamp(6rem,11vw,10rem)]" : "scroll-mt-[var(--cs-offset)]"}`}
                >
                  <Blocks blocks={c.blocks} />
                </section>
              ))}
            </div>
          </div>
        </article>

        {next && (
          <section aria-label="Next project" className="frame mt-[clamp(6rem,12vw,11rem)]">
            <div className="flex items-baseline justify-between text-[0.9375rem]">
              <h2 className="font-medium">Next Project</h2>
            </div>
            {/* Uncropped at the image's own shape; squarer images narrow rather than grow taller. */}
            <div className="next-tile mt-[clamp(1rem,1.8vw,1.5rem)]" style={{ "--r": nextRatio } as React.CSSProperties}>
              <GalleryTile
                size="feature"
                title={next.title}
                subtitle={next.subtitle}
                description={next.description}
                media={next.media}
                href={next.href}
                external={next.external}
                ratio={nextRatio}
                sizes="(min-width: 1480px) 1400px, 94vw"
              />
            </div>
          </section>
        )}
        {/* Same navigation on every project page; closer when it follows a next-project tile. */}
        <ProjectNavigation className={next ? "mt-[clamp(3rem,5vw,4.5rem)]" : "mt-[clamp(5rem,9vw,8rem)]"} />
      </main>
      <SiteFooter />
    </>
  );
}
