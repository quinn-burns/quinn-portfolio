import type { Project } from "@/lib/types";

/**
 * Copy sourced from quinn-burns.com/dash — edited only to fit the template.
 */
export const dash: Project = {
  slug: "dash",
  title: "Dash",
  hook: "Hydration that moves with you.",
  category: "industrial",
  tags: ["Product Design", "Outdoor Gear", "Human-Centered Design"],
  cover: "/images/projects/dash/cover.jpg",
  coverAlt: "Dash integrated hydration system for hiking gear",
  order: 4,

  role: "Designer — research, ideation, and concept development",
  team: "Solo",
  projectType: "Product design",

  tldr: "Dehydration sneaks up fast when every sip means stopping to dig through your pack. That's why I designed Dash — hydration built right into the gear you already carry. From your hiking pole to your chest strap, wrist, or modular pods that move with you, it's always right where you need it. Staying hydrated shouldn't slow you down.",

  context: [
    {
      type: "text",
      body: [
        "Dehydration sneaks up fast when every sip means stopping to dig through your pack. On the trail, water access competes with momentum — and momentum usually wins.",
      ],
    },
    {
      type: "figure",
      figure: {
        src: "/images/projects/dash/problem.jpg",
        alt: "The problem: water access that interrupts movement",
        caption: "The problem: when a sip requires stopping, unzipping, and digging, hydration waits — and dehydration doesn't.",
      },
      size: "wide",
    },
    {
      type: "figure",
      figure: {
        src: "/images/projects/dash/user.jpg",
        alt: "Meet the user: hikers in motion",
        caption: "Meet the user: people who move — hiking, trekking, covering ground — and whose gear needs to keep up.",
      },
      size: "wide",
    },
  ],

  process: [
    {
      heading: "Ideation",
      blocks: [
        {
          type: "text",
          body: [
            "Instead of designing a better bottle, I explored how hydration could live inside the gear hikers already carry — poles, straps, wrists, and modular pods that attach where they're needed.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/dash/ideation.jpg",
            alt: "Dash ideation sketches",
            caption: "Ideation across the body and the gear: hiking pole, chest strap, wrist, and modular pod placements.",
          },
          size: "full",
        },
      ],
    },
    {
      heading: "Concept development",
      blocks: [
        {
          type: "text",
          body: [
            "Development focused on keeping water on-body, within reach, and ready to use — removing the need to stop, unzip, or think about hydration at all.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/dash/development.jpg",
            alt: "Dash concept development",
            caption: "Concept development: refining how each placement carries, dispenses, and refills.",
          },
          size: "full",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "Integrate into gear, not another container",
      decision: "Dash builds hydration into the equipment hikers already carry — pole, chest strap, wrist, modular pods — instead of adding one more thing to pack.",
      tradeoff: "Integration means designing for multiple pieces of gear rather than perfecting a single object. The payoff is that water is always right where you need it, with nothing extra to carry or forget.",
    },
    {
      title: "Design for drinking in motion",
      decision: "Every concept was judged on whether you could drink without stopping — no unzipping, no digging, no breaking stride.",
      tradeoff: "Prioritizing in-motion access constrains capacity per placement compared to a big bottle in a pack. Consistent small sips beat postponed big ones.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "Dash keeps water exactly where you need it — on your body, within reach, and ready to use. By removing the need to stop, unzip, or think about hydration, Dash helps people drink more consistently and move more freely.",
          "It's not about carrying water better. It's about making hydration effortless.",
        ],
      },
      {
        type: "compare",
        left: {
          src: "/images/projects/dash/final-1.jpg",
          alt: "Dash final concept 1",
          caption: "Final concept: hydration integrated at the point of use.",
        },
        right: {
          src: "/images/projects/dash/final-2.jpg",
          alt: "Dash final concept 2",
          caption: "Modular pods that move with you.",
        },
      },
    ],
  },
};
