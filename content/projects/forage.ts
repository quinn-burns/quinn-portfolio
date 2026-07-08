import type { Project } from "@/lib/types";

/**
 * UX SCAFFOLD — a placeholder case study showing how digital work reads in
 * this system. Replace the project (or its facts) with your real UX work;
 * the structure is the part to keep. See CONTENT_GUIDE.md.
 */
export const forage: Project = {
  slug: "forage",
  title: "Forage",
  hook: "A cooking app that starts from what's already in your kitchen — so students cook more and toss less.",
  category: "ux",
  tags: ["UX & UI", "Mobile App", "Product Design"],
  cover: "/images/projects/forage/cover.svg",
  coverAlt: "Forage app home screen showing an ingredients-first recipe feed",
  order: 6,

  role: "Product designer — research, flows, UI system, usability testing",
  team: "Solo",
  timeline: "6 weeks · Personal project",
  tools: ["User interviews", "Figma", "Prototype testing", "Design system"],
  projectType: "App design",

  tldr: "Recipe apps assume you'll shop for the recipe; students do the opposite — they stare into the fridge and improvise, and whatever doesn't fit an idea gets thrown out. I interviewed student cooks about their weeknight decision process, mapped where food waste actually enters it, and designed Forage: an ingredients-first app where the fridge is the search query. Usability testing across two prototype rounds shaped a capture flow fast enough to survive real kitchen impatience.",

  context: [
    {
      type: "text",
      body: [
        "Every recipe app starts with the dish and ends with a shopping list. But my interviews with student cooks showed the weeknight reality runs backwards: the meal decision starts at the fridge, under time pressure, with ingredients bought a week ago on different intentions. When nothing comes to mind for that half zucchini, it dies in the drawer.",
        "The waste isn't a knowledge problem — everyone I interviewed could cook. It's a retrieval problem under pressure: matching what you have to something you'd actually eat, in the thirty seconds before you give up and order out.",
      ],
    },
    {
      type: "quote",
      text: "I know how to cook, I just can't think of anything at 7pm. So the chicken gets freezer-buried and I get a burrito.",
      attribution: "Interview participant, third-year student",
    },
  ],

  process: [
    {
      heading: "Mapping the weeknight decision",
      blocks: [
        {
          type: "text",
          body: [
            "I mapped the decision journey from 'I'm hungry' to 'food exists,' marking where each interviewee bailed to takeout. The bail points clustered at the very start — idea generation — not at cooking skill or time. That focused the entire product on one moment: the fridge stare.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/forage/research-1.svg",
            alt: "Journey map of the weeknight cooking decision with bail-out points marked",
            caption: "The journey map. Nearly every bail-out happens before a recipe is even open — which is why Forage isn't a recipe app with a pantry feature, but a pantry app with recipes.",
          },
          size: "wide",
        },
      ],
    },
    {
      heading: "Designing the fridge as the search query",
      blocks: [
        {
          type: "text",
          body: [
            "The core interaction is capture: tell the app what you have, fast. V1 asked users to maintain a pantry inventory — testing killed that in one session; nobody will bookkeep groceries. V2 flipped to just-in-time capture: tap the three or four ingredients you want to use up right now, get matches immediately. Sub-minute, no maintenance debt.",
          ],
        },
        {
          type: "compare",
          left: {
            src: "/images/projects/forage/iterations-1.svg",
            alt: "V1 pantry inventory screen requiring full grocery tracking",
            caption: "V1's inventory model. Testers' faces at the phrase 'keep it updated' ended this direction — honest testing beats a clever data model.",
          },
          right: {
            src: "/images/projects/forage/iterations-2.svg",
            alt: "V2 just-in-time ingredient picker with instant matches",
            caption: "V2's use-it-up picker: three taps, instant matches, zero maintenance. Task completion time collapsed between rounds.",
          },
          caption: "The pivot from inventory to intent. Same goal, opposite burden.",
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/forage/final-2.svg",
            alt: "Forage UI system: components, type, and color tokens",
            caption: "The UI system — warm, food-forward, and built on a component library so the flows in testing were always pixel-consistent.",
          },
          size: "full",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "Kill the inventory, keep the moment",
      decision: "I scrapped the persistent pantry model for just-in-time ingredient capture, even though inventory data would have powered better recommendations.",
      tradeoff: "The inventory model was objectively richer — expiry tracking, smarter matching, waste stats. But it demanded ongoing labor from users whose defining trait is decision fatigue at 7pm. A dumber system people actually use beats a smarter one they abandon in week one.",
    },
    {
      title: "Recipes ranked by what they use up, not by rating",
      decision: "Match results sort by how completely they consume the selected ingredients, with star ratings demoted to secondary metadata.",
      tradeoff: "This sometimes surfaces a decent recipe above a beloved one, and one tester questioned it. But sorting by rating recreates the original problem — aspirational dishes needing a shopping trip. The ranking encodes the app's actual promise: use up what you have.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "The final prototype covers the full loop: capture what you have, pick a match, cook with a step view designed for propped-up phones and messy hands, and mark what got used. The visual system stays warm and appetizing while the interaction layer stays ruthlessly fast.",
        ],
      },
      {
        type: "figure",
        figure: {
          src: "/images/projects/forage/final-1.svg",
          alt: "Final Forage screens: capture, matches, and cook mode",
          caption: "The final flow in three screens. Every screen answers the same question — 'what's for dinner' — with less friction than takeout.",
        },
        size: "full",
      },
    ],
    results: [
      "Round-two usability testing: all participants completed the capture-to-recipe flow in under a minute, unprompted.",
      "Testers' unsolicited feature requests shifted from 'make capture easier' (round one) to 'let me save favorites' (round two) — friction complaints gave way to investment.",
    ],
    learned: "Respect the user's laziness as a design material. Every failed direction in this project assumed effort users don't have at 7pm. The moment I designed for the tired version of the user instead of the aspirational one, the product clicked.",
  },
};
