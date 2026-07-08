import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/content/about";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Industrial design student, UX designer, and published researcher at Georgia Tech — and a maker of sourdough, summits, and songs.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-20">
      <h1 className="font-display text-title font-medium text-ink">
        {about.title}
      </h1>

      <div className="mt-8 max-w-2xl space-y-5">
        {about.intro.map((paragraph, i) => (
          <p key={i} className="measure text-body text-ink">
            {paragraph}
          </p>
        ))}
      </div>

      {/* ---- Scrapbook ---- */}
      <section aria-labelledby="scrapbook" className="mt-20 sm:mt-24">
        <Reveal>
          <h2
            id="scrapbook"
            className="font-display text-heading font-medium text-ink"
          >
            <span className="underline-sketch">{about.scrapbookHeading}</span>
          </h2>
          <p className="mt-3 max-w-xl text-body text-stone">
            {about.scrapbookIntro}
          </p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 lg:grid-cols-3">
          {about.scrapbook.map((photo, i) => (
            <li key={photo.src}>
              <Reveal delay={(i % 3) * 80}>
                <figure
                  className={`transition-transform duration-300 ease-out motion-safe:hover:rotate-0 ${
                    i % 2 === 0 ? "rotate-[1.2deg]" : "-rotate-[1.2deg]"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl border-4 border-white bg-sand shadow-sm">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 font-display text-caption italic text-stone">
                    {photo.caption}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
