import type { Project } from "@/lib/types";

/**
 * Copy sourced from quinn-burns.com/kairn — edited only to fit the template.
 */
export const kairn: Project = {
  slug: "kairn",
  title: "Kairn",
  hook: "Sound that adapts to where you are.",
  category: "industrial",
  tags: ["Product Design", "Consumer Audio", "Human-Centered Design"],
  cover: "/images/projects/kairn/cover.jpg",
  coverAlt: "Kairn stackable portable speaker held in hand",
  order: 5,

  role: "Designer — research, ideation, and development",
  team: "Solo",
  projectType: "Product design",

  tldr: "Kairn is a stackable, portable speaker system designed to adapt to different spaces and activities. Instead of one fixed speaker trying to do everything, Kairn lets users build the setup they need, whether they are listening alone, hosting friends, or moving between rooms. Good sound should fit your space, not fight it.",

  context: [
    {
      type: "text",
      body: [
        "Looking at how people actually use speakers, a few patterns emerged: listening environments change throughout the day, one speaker placement rarely works for every space, users often move speakers between rooms or bring them outdoors, and existing systems force users to choose between power and portability.",
      ],
    },
    {
      type: "figure",
      figure: {
        src: "/images/projects/kairn/research.jpg",
        alt: "Research into how people use speakers across spaces",
        caption: "The research pattern that framed the project: listening moves — through rooms, activities, and times of day — but speakers don't.",
      },
      size: "wide",
    },
    {
      type: "quote",
      text: "How might a speaker be designed to adjust to the way people actually listen?",
      attribution: "The design question · Flexible · Modular · Balanced · Portable · Intuitive",
    },
  ],

  process: [
    {
      heading: "Ideation & concept drawing",
      blocks: [
        {
          type: "figure",
          figure: {
            src: "/images/projects/kairn/ideation.jpg",
            alt: "Kairn ideation sketches",
            caption: "Ideation: exploring how a speaker could scale, split, and travel instead of sitting still.",
          },
          size: "wide",
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/kairn/concept.jpg",
            alt: "Kairn concept drawing",
            caption: "Concept drawing of the stackable system — each unit complete alone, stronger together.",
          },
          size: "wide",
        },
      ],
    },
    {
      heading: "Development",
      blocks: [
        {
          type: "figure",
          figure: {
            src: "/images/projects/kairn/development.jpg",
            alt: "Kairn development work",
            caption: "Development: resolving how units stack, connect, and read as one product family.",
          },
          size: "full",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "A modular system, not a fixed object",
      decision: "Each Kairn speaker works on its own, but stacking multiple units lets sound scale naturally across rooms and activities.",
      tradeoff: "Modularity adds connection and charging complexity a single sealed speaker avoids. In return, users stop choosing between power and portability — the system is whichever speaker they need that day.",
    },
    {
      title: "Design for the moving listener",
      decision: "Kairn treats moving between rooms, gathering with friends, and heading outdoors as the core use case rather than an edge case.",
      tradeoff: "Optimizing for portability and adaptability means each unit can't chase the raw output of a large fixed speaker — balance and evenness across spaces mattered more than peak volume in one.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "The final Kairn system gives users control over how sound fills their space. Each speaker works on its own, but stacking multiple units allows sound to scale naturally across different rooms and activities, creating more balanced and even distribution.",
          "By treating sound as a modular system rather than a fixed object, Kairn adapts to the way people move, gather, and listen throughout the day.",
        ],
      },
      {
        type: "compare",
        left: {
          src: "/images/projects/kairn/final-1.jpg",
          alt: "Kairn final design detail",
          caption: "The final system: units that stand alone or stack.",
        },
        right: {
          src: "/images/projects/kairn/final-2.jpg",
          alt: "Kairn final design, alternate view",
          caption: "Sound that scales with the space and the moment.",
        },
      },
    ],
  },
};
