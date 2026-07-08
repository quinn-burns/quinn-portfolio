import type { Project } from "@/lib/types";

/**
 * UX SCAFFOLD — a research-driven placeholder that shows how to present your
 * published mental health app work. Swap in the real study details, paper
 * title, venue link, and findings. See CONTENT_GUIDE.md.
 */
export const ripple: Project = {
  slug: "ripple",
  title: "Ripple",
  hook: "Mental health support designed from evidence, not intuition — research I co-authored, translated into an interface people kept using.",
  category: "ux",
  tags: ["UX & UI", "UX Research", "Published Research"],
  cover: "/images/projects/ripple/cover.svg",
  coverAlt: "Ripple app check-in screen with a low-pressure mood reflection",
  order: 7,

  role: "Researcher + designer — co-authored the study; I led the design translation",
  team: "Research team of 4 (my role: study design support, analysis, and all interface design)",
  timeline: "2 semesters · Research + design",
  tools: ["Literature review", "Qualitative coding", "Figma", "Diary study"],
  projectType: "Research-driven design",

  tldr: "Most mental health apps are designed around engagement metrics that quietly work against wellbeing — streaks that punish bad weeks, check-ins that feel like homework. As part of a research team, I co-authored a peer-reviewed study on human-centered mental health app design, presented at ACM UbiComp/ISWC. Ripple is the design half of that work: I translated our findings into interface patterns — pressure-free check-ins, streak-less continuity, and disclosure controls — and validated them in a diary study.",

  context: [
    {
      type: "text",
      body: [
        "The mental health app market borrows its retention playbook from fitness and gaming: streaks, badges, daily nudges. Our research asked whether those mechanics serve users whose defining condition is that some days are bad days. The literature and our own qualitative work pointed the same direction — a broken streak on a depressive week doesn't motivate, it indicts.",
        "This project is the bridge between that paper and a product: each design pattern in Ripple exists because a finding demanded it, and the case study below is organized finding-first for exactly that reason.",
      ],
    },
    {
      type: "quote",
      text: "The app made me feel worse on the days I needed it most. I broke my streak, so why open it?",
      attribution: "Study participant (paraphrased from coded interviews)",
    },
  ],

  process: [
    {
      heading: "The research: what the evidence actually says",
      blocks: [
        {
          type: "text",
          body: [
            "Our study combined a review of existing mental health apps with qualitative interviews, coded for moments where app mechanics helped or harmed. I contributed to the coding and analysis, and owned the translation of findings into design implications. Three findings drove everything downstream: consistency mechanics backfire on bad days; check-ins framed as performance suppress honesty; and users want control over how much they disclose to the app itself, not just to other people.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/ripple/research-1.svg",
            alt: "Coded findings matrix linking study themes to design implications",
            caption: "The findings-to-implications matrix from our analysis. This artifact is the whole method: no design move in Ripple lacks a row here.",
          },
          size: "wide",
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/ripple/research-2.svg",
            alt: "Presenting the research poster at ACM UbiComp/ISWC",
            caption: "Presenting at ACM UbiComp/ISWC. Defending the work to researchers sharpened the design rationale more than any critique session.",
          },
          size: "inset",
        },
      ],
    },
    {
      heading: "Translating findings into patterns",
      blocks: [
        {
          type: "text",
          body: [
            "Each finding became a named pattern. 'Consistency mechanics backfire' became continuity without streaks: Ripple visualizes your history as an accumulating landscape that gaps can't erase — a missed week changes nothing about what you've built. 'Performance suppresses honesty' became the weather check-in: mood capture as a low-stakes atmospheric metaphor rather than a rated performance. 'Disclosure control' became layered privacy: every entry can be full, partial, or just-a-mark.",
          ],
        },
        {
          type: "compare",
          left: {
            src: "/images/projects/ripple/iterations-1.svg",
            alt: "Conventional streak-based progress screen used as the control pattern",
            caption: "The control: a standard streak UI. In concept testing, participants with lived experience flagged it within seconds — 'that number is a countdown to guilt.'",
          },
          right: {
            src: "/images/projects/ripple/iterations-2.svg",
            alt: "Ripple's accumulating landscape that gaps cannot erase",
            caption: "Ripple's landscape: history accumulates, gaps are weather, nothing resets. Same data, opposite emotional contract.",
          },
          caption: "Streak vs. landscape — the paper's central finding, rendered as two screens.",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "No streaks, even though streaks retain",
      decision: "I removed all reset-able consistency mechanics, replacing them with accumulation that gaps can't undo.",
      tradeoff: "Streaks demonstrably drive short-term retention — cutting them means weaker engagement graphs. But our evidence showed they drive the wrong retention: opening the app out of guilt correlates with abandoning it entirely after the first break. I chose the metric the research supports (return after absence) over the one dashboards reward.",
    },
    {
      title: "Check-ins ask about weather, not scores",
      decision: "Mood capture uses an atmospheric metaphor with no numeric rating on the primary flow.",
      tradeoff: "Losing the 1–10 scale costs analytic granularity and made the diary-study analysis harder for us as researchers. That was the honest trade: cleaner data for us versus honest input from users. The study said users game or skip numeric scores on hard days — so granularity we'd collect would be fiction anyway.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "Ripple's final prototype implements all three evidence-backed patterns across the core loop: check in, reflect, return. The design was validated in a follow-up diary study, and the underlying research was published as a peer-reviewed paper presented at ACM UbiComp/ISWC.",
        ],
      },
      {
        type: "figure",
        figure: {
          src: "/images/projects/ripple/final-1.svg",
          alt: "Final Ripple screens: weather check-in, landscape history, layered privacy",
          caption: "The three patterns in their final form. Each screen is a citation with a UI.",
        },
        size: "full",
      },
    ],
    results: [
      "Co-authored peer-reviewed paper presented at ACM UbiComp/ISWC. [Link the DOI/proceedings here.]",
      "Diary-study participants returned after multi-day gaps at notably higher rates than the streak-based control group.",
      "Participants described check-ins as 'low-stakes' and 'honest' — the exact words the original study said were missing.",
    ],
    learned: "Research earns its keep when it can veto a design. The streak decision was unpopular in critique — everyone's instinct said keep it. Having coded evidence let me hold the line, and the diary study vindicated it. Evidence isn't decoration for a case study; it's leverage in the room.",
  },
};
