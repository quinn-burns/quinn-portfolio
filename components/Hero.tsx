import { site } from "@/content/site";

/** Left-aligned introduction: one confident headline, one softer paragraph. */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="frame pt-[clamp(3.5rem,8vw,7.5rem)] pb-[clamp(3.5rem,7vw,6.5rem)]"
    >
      <h1
        id="hero-title"
        className="max-w-[12ch] text-[clamp(2.75rem,6.4vw,6.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]"
      >
        {site.headline.join(" ")}
      </h1>
      <p className="mt-[clamp(1.25rem,2.2vw,2rem)] max-w-[36ch] text-[clamp(1.125rem,1.55vw,1.4rem)] leading-[1.4] tracking-[-0.01em] text-mist">
        {site.intro}
      </p>
    </section>
  );
}
