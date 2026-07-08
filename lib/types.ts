/**
 * Content schema for the portfolio.
 *
 * Each project is one TypeScript file in content/projects/ that exports a
 * `Project`. The type below is the case-study template: it enforces the
 * story spine (hook → TL;DR → context → process → decisions → outcome) so
 * every write-up keeps its bones even as the content changes.
 */

export type ProjectCategory = "industrial" | "ux";

/** An image with a caption that explains WHY it matters, not just what it is. */
export interface Figure {
  src: string;
  alt: string;
  /**
   * One or two sentences on the role this artifact plays in the story.
   * Bad: "Early sketches." Good: "Round-two sketches — flattening the base
   * here is what later solved the tipping problem."
   */
  caption: string;
}

/** Content blocks that make up context / process / outcome sections. */
export type Block =
  | { type: "text"; body: string[] } // each string = one paragraph
  | { type: "figure"; figure: Figure; size?: "full" | "wide" | "inset" }
  | { type: "compare"; left: Figure; right: Figure; caption?: string } // side-by-side (before/after, A/B)
  | { type: "gallery"; figures: Figure[] } // 2–3 up grid of smaller artifacts
  | { type: "quote"; text: string; attribution: string }; // interview insight, testing feedback

/** A named chapter of the process ("Research", "Form studies", "Prototyping"). */
export interface ProcessChapter {
  heading: string;
  blocks: Block[];
}

/** A key decision callout: where a real design call was made, and why. */
export interface Decision {
  title: string;
  /** What I chose to do. */
  decision: string;
  /** The reasoning and what I gave up — trade-offs make skill legible. */
  tradeoff: string;
}

export interface Project {
  /* ---- Identity & card ---- */
  slug: string; // clean URL: /work/<slug>
  title: string;
  /** One-line, outcome-oriented hook. Not "I designed a…". */
  hook: string;
  category: ProjectCategory;
  tags: string[]; // e.g. ["Industrial Design", "UX Research"]
  cover: string; // /images/projects/<slug>/cover.jpg
  coverAlt: string;
  order: number; // position in the grid (lower = earlier)

  /* ---- Metadata bar ---- */
  role: string; // my ownership, unambiguous
  team: string; // "Solo" or "With ___ (I led ___)"
  timeline: string; // "10 weeks · Fall 2025"
  tools: string[]; // tools & methods
  projectType: string; // "Studio project", "Client work", "Research"

  /* ---- The story ---- */
  /** 3–4 sentences: problem, what I did, outcome. Must stand alone. */
  tldr: string;
  /** What's broken and for whom, grounded in something real. */
  context: Block[];
  /** Show, don't tell: artifacts, iterations, failed directions. */
  process: ProcessChapter[];
  /** 2–3 moments where a real design decision was made. */
  decisions: Decision[];
  /** Final design and honest results. */
  outcome: {
    blocks: Block[];
    /** Bulleted honest results: testing feedback, metrics, exhibition. */
    results?: string[];
    /** Specific, not generic. One concrete thing this project taught me. */
    learned: string;
  };
}

/** Smaller experiments for the "Always Creating" section. */
export interface Experiment {
  title: string;
  blurb: string; // one line
  tag: string; // e.g. "Research", "Content", "Side project"
  href?: string; // optional external link (paper, post, prototype)
}
