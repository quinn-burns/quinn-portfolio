import type { Project } from "@/lib/types";

/**
 * Copy sourced from quinn-burns.com/memomir — edited only to fit the template.
 */
export const memomir: Project = {
  slug: "memomir",
  title: "MemoMir",
  hook: "A digital messaging mirror that replaces paper posters with smarter, sustainable communication.",
  category: "industrial",
  tags: ["Product Design", "Systems Design", "Sustainability", "Communication"],
  cover: "/images/projects/memomir/cover.png",
  coverAlt: "MemoMir digital messaging mirror concept",
  order: 3,

  role: "Founder & designer — research, system design, prototyping, and pitch",
  team: "Solo",
  timeline: "In active development",
  tools: ["Vizcom", "Vyond", "Survey research", "Prototyping"],
  projectType: "Product & systems design",

  tldr: "School hallways are saturated with paper posters that are static, hard to update, visually overwhelming, and environmentally wasteful. MemoMir embeds digital messaging into an existing daily habit — looking in the mirror — transforming overlooked wall space into a scalable communication system. I've secured grant funding for a functional prototype and am preparing for on-campus pilot testing.",

  context: [
    {
      type: "text",
      body: [
        "School hallways are saturated with paper posters. At my high school, ~900 posters were displayed at any time. Less than half of students reported actually reading one. Most were outdated within days.",
        "Paper posters are static, hard to update, visually overwhelming, and environmentally wasteful. The issue isn't that communication doesn't exist — it's that it competes for attention in a crowded environment. The real problem: important information is disconnected from natural behavior.",
      ],
    },
    {
      type: "quote",
      text: "Instead of asking people to look at walls, I asked: where are people already looking?",
      attribution: "The reframe that became the product",
    },
    {
      type: "text",
      body: [
        "Mirrors are embedded into daily routines: bathrooms, dorms, gyms, dining halls, restaurants. They're moments of opportunity. MemoMir integrates communication into that existing habit.",
      ],
    },
  ],

  process: [
    {
      heading: "The system",
      blocks: [
        {
          type: "text",
          body: [
            "MemoMir is a semi-transparent mirror with an embedded display behind the glass. It allows instant content updates, scheduled message rotation, multi-location broadcasting, and urgent alerts when needed. Unlike posters, information can adapt, expire, and respond.",
            "It's designed intentionally to feel ambient — not like another screen competing for attention.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/memomir/system.png",
            alt: "MemoMir system concept visualization",
            caption: "The system concept: a semi-transparent mirror with an embedded display behind the glass. Graphic created using Vizcom.",
          },
          size: "full",
        },
      ],
    },
    {
      heading: "Research & process",
      blocks: [
        {
          type: "text",
          body: [
            "Survey insights showed that students ignore posters primarily due to clutter and visual overload, not lack of interest. Behavior mapping backed it up: I observed where students naturally look in shared spaces, and mirrors consistently held longer visual engagement than wall signage.",
            "I'm building a low-fidelity mirror mockup to test viewing distance, glance time, content hierarchy, and motion vs. static messaging. Iteration is focused on balancing visibility with subtlety, ensuring messages inform without disrupting the space.",
          ],
        },
        {
          type: "compare",
          left: {
            src: "/images/projects/memomir/behavior-map.png",
            alt: "Behavior map of where students look in shared spaces",
            caption: "Behavior mapping: mirrors consistently held longer visual engagement than wall signage.",
          },
          right: {
            src: "/images/projects/memomir/prototype.png",
            alt: "First iteration MemoMir prototype",
            caption: "First iteration prototype — testing viewing distance, glance time, and content hierarchy.",
          },
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/memomir/prototyping-overview.png",
            alt: "Overview of MemoMir prototyping plan",
            caption: "Prototyping overview: each round balances visibility against subtlety so messages inform without disrupting the space.",
          },
          size: "wide",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "Meet attention where it already is",
      decision: "Rather than competing for attention on crowded walls, MemoMir moves information to mirrors — surfaces already embedded in daily routines.",
      tradeoff: "A mirror offers less surface area and stricter content constraints than a poster wall. But a message placed inside natural behavior gets seen; nine hundred posters competing in a hallway mostly don't.",
    },
    {
      title: "Ambient, not another screen",
      decision: "The display is deliberately designed to feel ambient — content adapts, expires, and responds instead of scrolling, flashing, or demanding attention.",
      tradeoff: "Ambient design gives up the engagement tricks that make digital signage 'measurable.' The bet: in shared spaces, subtlety is what keeps a screen welcome long-term.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "MemoMir reduces paper waste at the source while increasing message visibility and adaptability. Built for schools, scalable to offices, campuses, restaurants, and other high-traffic spaces. Communication should be dynamic, not disposable.",
        ],
      },
      {
        type: "figure",
        figure: {
          src: "/images/projects/memomir/vision.png",
          alt: "MemoMir impact vision visualization",
          caption: "The impact vision: cut paper waste, increase engagement, and spread information smarter — one mirror at a time. Graphic created using Vizcom.",
        },
        size: "full",
      },
    ],
    results: [
      "Secured grant funding for a functional prototype.",
      "Preparing for on-campus pilot testing.",
      "Refining UI layout, timing, and message prioritization; studying engagement data in shared environments.",
      "Next: usability testing, system integration, and onboarding strategy.",
    ],
  },
};
