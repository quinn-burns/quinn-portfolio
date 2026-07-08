import type { Experiment } from "@/lib/types";

/**
 * "Always Creating" — smaller experiments and side work.
 * Add, remove, or reorder freely; each item is one card in the strip.
 */
export const experiments: Experiment[] = [
  {
    title: "Published research",
    blurb: "Co-authored a peer-reviewed paper on human-centered mental health app design, presented at ACM UbiComp/ISWC.",
    tag: "Research",
    // href: "https://doi.org/…", // add your DOI or proceedings link
  },
  {
    title: "Nutrition guides",
    blurb: "Designed practical, visual nutrition guides that make good eating decisions faster than bad ones.",
    tag: "Information design",
  },
  {
    title: "App experiments",
    blurb: "Small interface studies and app concepts — testing ideas too fast-moving for a full case study.",
    tag: "UX & UI",
  },
  {
    title: "made.by.quinn_",
    blurb: "Documenting the making — process, prototypes, and projects as they happen.",
    tag: "Content",
    href: "https://www.instagram.com/made.by.quinn_",
  },
  {
    title: "Chatbot builds",
    blurb: "Building conversational tools to learn where AI genuinely helps a design process — and where it doesn't.",
    tag: "AI",
  },
];
