import type { Project } from "@/lib/types";

/**
 * SCAFFOLD COPY — structure and voice are the model; the specifics are
 * invented. Replace every fact with your real evidence before publishing.
 */
export const soleaMargot: Project = {
  slug: "solea-margot",
  title: "Soléa Margot Heel",
  hook: "A heel that works with the foot, not against it — balance, alignment, and natural movement without giving up the silhouette.",
  category: "industrial",
  tags: ["Industrial Design", "Footwear", "Biomechanics"],
  cover: "/images/projects/solea-margot/cover.svg",
  coverAlt: "Soléa Margot heel showing the sculpted support geometry",
  order: 5,

  role: "Sole designer — biomechanics research, last + heel geometry, CMF, prototyping",
  team: "Solo",
  timeline: "10 weeks · Spring 2024",
  tools: ["Gait observation", "Pressure mapping", "Rhino", "3D-printed lasts", "KeyShot"],
  projectType: "Studio project",

  tldr: "Heels are a rare product category where pain is treated as the price of admission. I studied how weight actually moves through the foot in an elevated shoe — pressure mapping, gait observation, interviews with daily heel-wearers — and redesigned the heel from the ground contact up: a wider, sculpted strike zone, a footbed that follows the arch instead of bridging it, and heel placement under the body's real line of force. The Soléa Margot keeps the visual language of a classic heel while changing everything the body touches.",

  context: [
    {
      type: "text",
      body: [
        "Ask people who wear heels daily and the answers repeat: numb forefoot by noon, rolled ankles on any surface that isn't a showroom floor, and a Sunday spent recovering. The industry's response has been gel inserts and 'comfort' marketing — padding the symptoms of a geometry problem.",
        "The geometry problem is specific: most heels place the post behind the calcaneus's load line and pitch the foot onto a flat, narrow forefoot platform. The body compensates at the knee and lower back. My interviews with daily wearers surfaced the design brief in their own words — nobody asked for a lower heel; everyone asked to stop thinking about their feet.",
      ],
    },
    {
      type: "quote",
      text: "I don't want a comfort shoe. I want this shoe to stop punishing me for standing.",
      attribution: "Interview participant, wears heels 4–5 days a week",
    },
  ],

  process: [
    {
      heading: "Mapping where the weight actually goes",
      blocks: [
        {
          type: "text",
          body: [
            "I ran pressure-mapping sessions comparing barefoot stance, a conventional pump, and lifted test rigs at matching pitch. The conventional heel concentrated load onto a small forefoot zone — the numbness my interviewees described wasn't a padding deficit, it was a distribution failure. That gave the project a measurable target: spread the map.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/solea-margot/research-1.svg",
            alt: "Pressure map comparison between a conventional heel and test geometry",
            caption: "Pressure maps, conventional pump vs. test rig. The angry red island on the left is the entire brief.",
          },
          size: "wide",
        },
      ],
    },
    {
      heading: "Rebuilding the geometry",
      blocks: [
        {
          type: "text",
          body: [
            "Working on 3D-printed lasts, I iterated three variables together — heel-post position, footbed contour, and strike-zone width — because moving any one alone just relocates the problem. The post moved forward under the load line; the footbed gained a sculpted arch channel; the ground contact widened subtly at the strike zone while keeping a slim profile at eye level, where the silhouette is actually judged.",
          ],
        },
        {
          type: "compare",
          left: {
            src: "/images/projects/solea-margot/iterations-1.svg",
            alt: "Early last iteration with conventional heel post placement",
            caption: "Iteration 2 — post still too far aft; the pressure map barely moved. A relocated problem, not a solved one.",
          },
          right: {
            src: "/images/projects/solea-margot/iterations-2.svg",
            alt: "Later last iteration with forward post and sculpted footbed",
            caption: "Iteration 5 — post under the load line, arch channel in. This is the version where testers stopped mentioning their feet.",
          },
          caption: "The geometry shift between iterations 2 and 5. From the side, the silhouettes are nearly identical — the change lives where the body is, not where the eye is.",
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/solea-margot/prototype-1.svg",
            alt: "3D-printed last series showing the geometry evolution",
            caption: "The last lineage. Printing lasts instead of finished shoes meant a geometry change cost hours, not weeks — which is why there are eight of them.",
          },
          size: "full",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "Fix the geometry, keep the silhouette",
      decision: "All support changes were constrained to be invisible at conversational distance — the shoe had to read as a classic heel.",
      tradeoff: "A visibly 'ergonomic' shoe could have gone further biomechanically. But my research was unambiguous: wearers reject shoes that announce comfort. A heel nobody wants to wear helps nobody's alignment. The constraint cost some support ceiling and bought adoption.",
    },
    {
      title: "Wider at the ground, slim at the eye",
      decision: "The strike zone flares in the last 15mm before ground contact, below the visual line where the heel reads as 'thin.'",
      tradeoff: "The flare adds material and complicates the mold, and purists will spot it crouching down. In wear tests it was the single biggest stability gain — testers walked confidently on brick and gravel — so the manufacturing cost was worth it.",
    },
    {
      title: "Contour over cushion",
      decision: "The footbed supports through shape — an arch channel matched to the pitched foot — with only minimal padding.",
      tradeoff: "Cushioning demos better in a two-minute try-on; contour wins at hour six. I optimized for the daily wearer from my interviews, accepting that the shoe feels firmer than a gel-insole competitor in the store.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "The Soléa Margot is a classic silhouette on rebuilt bones: forward post, sculpted footbed, flared strike zone. Pressure mapping on the final prototype showed load spread across a substantially wider zone than the conventional control, and wear-testers' language shifted from managing pain to forgetting the shoe.",
        ],
      },
      {
        type: "figure",
        figure: {
          src: "/images/projects/solea-margot/final-1.svg",
          alt: "Final Soléa Margot heel prototype, profile view",
          caption: "Final prototype in profile — the entire intervention is invisible from here, which was precisely the point.",
        },
        size: "full",
      },
    ],
    results: [
      "Final pressure maps showed forefoot load spread over a meaningfully wider contact area versus the conventional control at the same pitch.",
      "Wear-testers completed a full standing workday and reported the shoe 'disappeared' — the exact outcome the interviews asked for.",
      "Selected for the program's year-end design showcase.",
    ],
    learned: "Constraints from the user's identity are real engineering constraints. The 'must still read as a classic heel' rule felt like a limitation until it started making decisions for me — it was the most productive line in the brief. I now write the identity constraint down as explicitly as the load case.",
  },
};
