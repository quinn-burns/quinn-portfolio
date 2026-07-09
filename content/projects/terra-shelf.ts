import type { Project } from "@/lib/types";

/**
 * Copy sourced from quinn-burns.com/terra-shelf — edited only to fit the
 * template.
 */
export const terraShelf: Project = {
  slug: "terra-shelf",
  title: "Terra Shelf",
  hook: "Making compost part of the routine.",
  category: "industrial",
  tags: ["Sustainable Design", "Behavior-Centered Design"],
  cover: "/images/projects/terra-shelf/cover.jpg",
  coverAlt: "Terra Shelf wall-mounted kitchen compost bin",
  order: 8,

  role: "Designer & maker — research, iteration, materials, and making",
  team: "Solo",
  projectType: "Sustainable design",

  tldr: "Terra is a kitchen compost scrap bin designed to mount off the counter, freeing up space while staying visible. By living where food prep actually happens, Terra serves as a subtle reminder to compost, making sustainable habits feel effortless and intuitive. Sustainability works best when it fits into everyday life.",

  context: [
    {
      type: "text",
      body: [
        "Most compost bins live on the counter, where they compete for scarce workspace, or under the sink, where they're forgotten. The issue isn't motivation. It's placement.",
      ],
    },
    {
      type: "figure",
      figure: {
        src: "/images/projects/terra-shelf/research.jpg",
        alt: "Research into kitchen composting habits",
        caption: "Research: composting fails at the moment of prep — the bin is either in the way or out of sight.",
      },
      size: "wide",
    },
    {
      type: "quote",
      text: "How can a kitchen compost bin support sustainable habits without adding clutter or friction?",
      attribution: "The design question",
    },
  ],

  process: [
    {
      heading: "Concept & ideation",
      blocks: [
        {
          type: "compare",
          left: {
            src: "/images/projects/terra-shelf/concept.jpg",
            alt: "Terra Shelf concept exploration",
            caption: "The concept move: off the counter but beside the prep space — visible without occupying workspace.",
          },
          right: {
            src: "/images/projects/terra-shelf/ideation.jpg",
            alt: "Terra Shelf ideation sketches",
            caption: "Ideation around mounting, opening, and emptying in the middle of cooking.",
          },
        },
      ],
    },
    {
      heading: "Iteration, materials & making",
      blocks: [
        {
          type: "gallery",
          figures: [
            {
              src: "/images/projects/terra-shelf/iteration-1.jpg",
              alt: "Terra Shelf iteration round",
              caption: "Iterating the form so scraps go in one-handed, mid-prep.",
            },
            {
              src: "/images/projects/terra-shelf/iteration-2.jpg",
              alt: "Terra Shelf iteration, continued",
              caption: "Refining the mount and proportions against real prep-space geometry.",
            },
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/terra-shelf/making.jpg",
            alt: "Terra Shelf materials and making",
            caption: "Materials and making: building the final bin.",
          },
          size: "wide",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "Placement is the product",
      decision: "Terra mounts off the counter, just beside the prep space — using placement and visibility as quiet cues instead of asking for new habits.",
      tradeoff: "Wall-mounting demands installation and commits the bin to one spot, which a countertop bin doesn't. But that fixed, visible position is exactly what turns composting from a separate task into part of cooking.",
    },
    {
      title: "A reminder, not a lecture",
      decision: "Terra nudges through presence — staying visible where food prep happens — rather than through labels, apps, or gamified feedback.",
      tradeoff: "A quiet object can't measure or celebrate anything. The research said motivation was never the problem, so Terra spends its design budget on friction instead.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "The final Terra bin moves composting off the counter and into the flow of everyday cooking. By mounting just beside the prep space, it stays visible and easy to use without taking up valuable workspace.",
          "By using placement and visibility as quiet cues, Terra makes composting an intuitive part of cooking rather than a separate task to remember. The result is a system that supports sustainable habits through everyday use.",
        ],
      },
      {
        type: "figure",
        figure: {
          src: "/images/projects/terra-shelf/final.jpg",
          alt: "Terra Shelf final design",
          caption: "The final Terra bin: off the counter, in the routine.",
        },
        size: "full",
      },
    ],
  },
};
