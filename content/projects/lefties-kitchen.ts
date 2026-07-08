import type { Project } from "@/lib/types";

/**
 * SCAFFOLD COPY — structure and voice are the model; the specifics are
 * invented. Replace every fact with your real evidence before publishing.
 */
export const leftiesKitchen: Project = {
  slug: "lefties-kitchen",
  title: "Lefties Kitchen",
  hook: "Imaginative play that plants lifelong habits — kids learn to use food fully, and waste less, by playing restaurant.",
  category: "industrial",
  tags: ["Industrial Design", "Play & Learning", "Sustainability"],
  cover: "/images/projects/lefties-kitchen/cover.svg",
  coverAlt: "Lefties Kitchen play set with modular play-food pieces",
  order: 2,

  role: "Industrial designer — I led play-testing and designed the food-scrap play system",
  team: "Team of 3 (I led research + play system; teammates led kitchen structure and packaging)",
  timeline: "8 weeks · Spring 2025",
  tools: ["Play-testing", "Figma", "Rhino", "CNC + laser-cut prototypes"],
  projectType: "Studio project",

  tldr: "Kids form food habits years before they cook. Watching play-kitchen sessions, my team noticed that every toy food is a perfect, finished object — play teaches that food appears whole and vanishes when you're done. I designed the play-food system for Lefties Kitchen: modular ingredients that come apart into scraps, and scraps that become new play value (stock, compost, garden). Play-testing with kids showed them inventing waste-reduction narratives unprompted.",

  context: [
    {
      type: "text",
      body: [
        "Play kitchens are one of the most-owned toy categories, and nearly all of them share a quiet assumption: food is a prop. A plastic tomato is eternally whole. There is no peel, no scrap, no leftover — and so the 'cooking' story a child rehearses hundreds of times has no chapter about what happens to the rest of the carrot.",
        "We observed play sessions at a campus early-learning center and saw the script in action: kids 'cooked,' 'served,' and then dumped everything back in the bin — meal over, food gone. The toy was teaching a disposal model. That observation became our brief: what if the play system made using food fully the fun part?",
      ],
    },
  ],

  process: [
    {
      heading: "Watching how kids actually play",
      blocks: [
        {
          type: "text",
          body: [
            "We ran observation sessions before designing anything, tracking what kids did between 'cooking' and 'cleanup.' The gap was the insight: cleanup was a chore phase with zero narrative. Meanwhile, the richest play happened when a kid invented a problem — a spill, a missing ingredient. Constraint, not abundance, drove imagination.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/lefties-kitchen/research-1.svg",
            alt: "Notes and photos from play observation sessions",
            caption: "Session notes. The pattern that mattered: invented problems produced the longest, most engaged play arcs — so waste became a problem worth playing with.",
          },
          size: "wide",
        },
      ],
    },
    {
      heading: "Designing food that comes apart",
      blocks: [
        {
          type: "text",
          body: [
            "I designed each play ingredient as a nesting system: the carrot splits into the 'good part,' the peel, and the top. Every scrap piece has a second life somewhere in the kitchen — peels go to the compost drawer that 'grows' a new seedling piece, bones and tops fill the stock pot. Nothing in the set terminates in a trash bin, because the set doesn't have one.",
          ],
        },
        {
          type: "gallery",
          figures: [
            {
              src: "/images/projects/lefties-kitchen/sketches-1.svg",
              alt: "Sketches of modular play-food pieces splitting into scraps",
              caption: "Splitting logic sketches — each cut had to be obvious to small hands and read as 'part of the food,' not a broken toy.",
            },
            {
              src: "/images/projects/lefties-kitchen/prototype-1.svg",
              alt: "Laser-cut prototype of the nesting carrot and compost drawer",
              caption: "First physical prototype. The compost drawer's 'seedling reward' was added after a tester asked what the peels were for — kids wanted the loop closed.",
            },
          ],
        },
      ],
    },
  ],

  decisions: [
    {
      title: "No trash bin in the set",
      decision: "We removed the bin entirely instead of adding a 'compost is better' option beside it.",
      tradeoff: "A bin would have made the set feel more complete as a kitchen replica, and some parents expected one. But offering disposal as an equal option undermines the entire premise — the constraint is the curriculum. Realism lost; the habit loop won.",
    },
    {
      title: "Scraps earn play value, not praise",
      decision: "Scrap pieces unlock new play (stock, seedlings) rather than triggering reward sounds or gold stars.",
      tradeoff: "Gamified rewards test well in the first session, but our second sessions showed the sticker-style rewards getting ignored while the 'peels become a seedling' loop kept getting replayed. Intrinsic play value is slower to design but it's the part kids re-enact.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "Lefties Kitchen shipped as a full studio prototype: the kitchen structure, my modular food-scrap play system, and packaging that itself folds into a play garden bed. In final play-testing, kids spontaneously narrated waste-reduction stories — 'we have to save the tops for soup!' — without any adult prompting.",
        ],
      },
      {
        type: "figure",
        figure: {
          src: "/images/projects/lefties-kitchen/final-1.svg",
          alt: "Final Lefties Kitchen prototype with the full scrap-loop play system",
          caption: "The full loop on the final prototype: cook, scrap, stock, compost, seedling, cook again.",
        },
        size: "full",
      },
    ],
    results: [
      "In final sessions, most testers engaged the scrap loop unprompted and several re-explained it to a new child joining play.",
      "Parents in exit interviews said the set prompted real-kitchen questions at home ('can we make stock?').",
    ],
    learned: "Removing an option teaches more than adding a message. Every 'educational' feature we bolted on was ignored; the one thing kids internalized came from what the set refused to include. I now look for the subtractive move first.",
  },
};
