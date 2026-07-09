import type { Project } from "@/lib/types";

/**
 * Copy sourced from quinn-burns.com/olive — edited only to fit the template.
 */
export const olive: Project = {
  slug: "olive",
  title: "Olive",
  hook: "A step up for your closet.",
  category: "industrial",
  tags: ["Furniture Design", "Woodworking", "Everyday Utility"],
  cover: "/images/projects/olive/cover.jpg",
  coverAlt: "Olive step stool with integrated hanger bar",
  order: 6,

  role: "Co-designer & maker — ideation, fabrication, and product video (edited in Premiere Pro)",
  team: "In collaboration with Sara",
  tools: ["Woodworking", "Adobe Premiere Pro"],
  projectType: "Furniture design",

  tldr: "Olive is a step stool designed to make closets easier to use. She helps you reach high shelves safely and keeps your clothes organized with an integrated hanger bar — no more leaving your outfit on the floor. With Olive, every shelf is within reach, and every outfit has a place.",

  context: [
    {
      type: "text",
      body: [
        "High closet shelves are awkward to reach safely, and the clothes you're about to wear rarely have a home of their own — outfits end up draped on chairs, doorknobs, or the floor. Two small, everyday frictions, living in the same square meter of the home.",
      ],
    },
    {
      type: "figure",
      figure: {
        src: "/images/projects/olive/problem.jpg",
        alt: "The closet problem Olive addresses",
        caption: "The problem space: reaching high shelves safely, and giving tomorrow's outfit somewhere better than the floor.",
      },
      size: "wide",
    },
    {
      type: "quote",
      text: "How might we design a step stool as an integrated part of closet organization?",
      attribution: "The design question",
    },
  ],

  process: [
    {
      heading: "Ideation & iteration",
      blocks: [
        {
          type: "figure",
          figure: {
            src: "/images/projects/olive/insight.jpg",
            alt: "Design motivation and insight for Olive",
            caption: "Design motivation: the step stool and the hanger aren't two products — in the closet, they're one habit.",
          },
          size: "wide",
        },
        {
          type: "gallery",
          figures: [
            {
              src: "/images/projects/olive/ideation-1.jpg",
              alt: "Olive ideation sketches",
              caption: "Ideation: balancing stable stepping geometry with a hanger bar that stays usable.",
            },
            {
              src: "/images/projects/olive/ideation-2.jpg",
              alt: "Olive ideation sketches, continued",
              caption: "Form studies working out proportions between step height and bar height.",
            },
          ],
        },
      ],
    },
    {
      heading: "Testing & fabrication",
      blocks: [
        {
          type: "compare",
          left: {
            src: "/images/projects/olive/testing-1.jpg",
            alt: "Testing the Olive prototype",
            caption: "Testing: does it hold weight confidently, and does the bar stay reachable?",
          },
          right: {
            src: "/images/projects/olive/testing-2.jpg",
            alt: "Fabricating Olive in the wood shop",
            caption: "Fabrication in wood — built to be stood on, not just looked at.",
          },
        },
      ],
    },
  ],

  decisions: [
    {
      title: "One object, two closet jobs",
      decision: "We merged the step stool and outfit hanger into a single piece of furniture instead of designing either one alone.",
      tradeoff: "A pure stool could be lighter and a pure hanger rack could hold more — combining them meant resolving stepping stability and hanging access in one form. That integration is the whole point: every shelf within reach, every outfit with a place.",
    },
    {
      title: "Built in wood, built to be used daily",
      decision: "Olive is fabricated in wood as real furniture — something that lives in the closet permanently, not a utility item you stow away.",
      tradeoff: "Furniture-grade fabrication takes longer than a utilitarian build, but a step stool only solves the closet problem if you're happy leaving it there.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "Olive rethinks the everyday step stool for the closet. Designed to help you reach high shelves safely and keep clothes organized with an integrated hanger bar, Olive makes every shelf accessible and every outfit feel intentional.",
          "We also produced a product video for Olive — starring me, filmed by Sara, and edited by me in Adobe Premiere Pro.",
        ],
      },
      {
        type: "gallery",
        figures: [
          {
            src: "/images/projects/olive/final-1.jpg",
            alt: "Olive final design detail",
            caption: "The final build: step stool and hanger bar as one piece of closet furniture.",
          },
          {
            src: "/images/projects/olive/final-2.jpg",
            alt: "Olive final design in context",
            caption: "Every shelf within reach.",
          },
          {
            src: "/images/projects/olive/final-3.jpg",
            alt: "Olive final design, alternate view",
            caption: "Every outfit with a place.",
          },
        ],
      },
    ],
  },
};
