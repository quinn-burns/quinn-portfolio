import type { Experiment } from "@/lib/types";

/**
 * "Always Creating" — from the Wix site: "from nutrition guides and app
 * design to content creation, chatbots, and published research!"
 * Add, remove, or reorder freely; each item is one row in the strip.
 */
export const experiments: Experiment[] = [
  {
    title: "Published research",
    blurb: "Co-authored a peer-reviewed paper on human-centered mental health app design; presented at ACM UbiComp/ISWC.",
    tag: "Research",
    // href: "https://doi.org/…", // add your DOI or proceedings link
  },
  {
    title: "Nutrition guides",
    blurb: "Guides built on my NASM nutrition coaching certification.",
    tag: "Information design",
  },
  {
    title: "App design",
    blurb: "Digital design work — UX case studies coming to the site soon.",
    tag: "UX & UI",
  },
  {
    title: "made.by.quinn_",
    blurb: "Content creation — documenting projects and process as they happen.",
    tag: "Content",
    href: "https://www.instagram.com/made.by.quinn_",
  },
  {
    title: "Chatbots",
    blurb: "Conversational tool experiments.",
    tag: "AI",
  },
];
