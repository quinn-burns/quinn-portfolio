import type { Project } from "@/lib/types";

/**
 * Copy sourced from quinn-burns.com/mise — edited only to fit the template.
 */
export const mise: Project = {
  slug: "mise",
  title: "Mise",
  hook: "A kitchen light and prep system that turns sound into sight.",
  category: "industrial",
  tags: ["Product Design", "Lighting", "Inclusive Design"],
  cover: "/images/projects/mise/cover.jpg",
  coverAlt: "Mise kitchen light and prep system hero shot",
  order: 1,

  role: "Designer — research, concept, form, CMF, and DFM",
  team: "Solo",
  tools: ["Fusion 360", "KeyShot", "3D printing"],
  projectType: "Product design",

  tldr: "Mise is an all-in-one kitchen light and prep system designed to support deaf and hard of hearing individuals while cooking. Its responsive light band shows timer progress and reacts to alarms, appliance alerts, or crashes. With a built-in timer, prep containers, and a cutting board, Mise integrates seamlessly into your cooking flow — not just another gadget, but part of the process. With Mise, every sound has a light, and every cook has control.",

  context: [
    {
      type: "text",
      body: [
        "The kitchen is a highly auditory environment. Timers beep, water boils over, appliances alert users when something needs attention. For deaf and hard of hearing individuals, these cues are often inaccessible, creating moments of frustration, missed signals, and even safety risks.",
        "Market research revealed a clear gap in kitchen products for deaf and hard of hearing users: existing products were primarily single-function (timer or alarm), light-based timers were often unclear and required constant visual attention, most solutions disrupted cooking flow rather than supporting it, and no products translated multiple everyday kitchen sounds into one cohesive system.",
      ],
    },
    {
      type: "figure",
      figure: {
        src: "/images/projects/mise/problem.png",
        alt: "Illustration of inaccessible auditory cues in the kitchen",
        caption: "The problem space: the kitchen's most important signals are sounds — and sound is exactly the channel deaf and hard of hearing cooks can't rely on.",
      },
      size: "wide",
    },
    {
      type: "quote",
      text: "How could I design a product that communicates multiple sound-based cues in the kitchen without constantly demanding attention or interrupting the cooking flow?",
      attribution: "The design question · Minimal · Intuitive · Non-intrusive · Multi-functional · Cohesive",
    },
  ],

  process: [
    {
      heading: "Concept development",
      blocks: [
        {
          type: "text",
          body: [
            "Good design starts with seeing the world through your user's perspective. To better understand the experience, I cooked with noise-canceling earbuds to remove sound cues. It became clear how often we rely on hearing in the kitchen — and how exhausting it would be to constantly monitor for visual alerts.",
            "I explored how light could communicate kitchen sounds through subtle pulses, brightness changes, and color shifts. Concepts ranged from modular light units to ceiling-mounted systems to freestanding forms. Through iteration, I focused on integrating the light directly into a prep station, embedding accessibility into the workflow itself.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/mise/research.png",
            alt: "Research into light-based kitchen products",
            caption: "Market research on existing light-based products — mostly single-function timers that demand constant visual attention instead of supporting the cook.",
          },
          size: "wide",
        },
        {
          type: "gallery",
          figures: [
            {
              src: "/images/projects/mise/concepts-1.jpg",
              alt: "Early concept exploration for light-based kitchen feedback",
              caption: "Exploring how light communicates: subtle pulses, brightness changes, and color shifts.",
            },
            {
              src: "/images/projects/mise/concepts-2.png",
              alt: "Concept variations from modular units to freestanding forms",
              caption: "Concept range: modular light units, ceiling-mounted systems, and freestanding forms.",
            },
            {
              src: "/images/projects/mise/concepts-3.png",
              alt: "Concept iteration toward an integrated prep station",
              caption: "The direction that stuck — integrating the light directly into a prep station, embedding accessibility into the workflow itself.",
            },
          ],
        },
      ],
    },
    {
      heading: "Form and CMF",
      blocks: [
        {
          type: "text",
          body: [
            "Inspired by mise en place — \"everything in its place\" — the final form combines a central prep station with an integrated light system. The responsive light wraps around a base topped with a removable cutting board, prep containers, a built-in timer, and an illuminated acrylic backboard with clearly labeled icons.",
            "The form is calm and minimal, drawing from Scandinavian design. Natural materials and soft light create a product that feels at home in the kitchen rather than clinical or assistive. Modeled in Fusion 360, rendered in KeyShot.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/mise/form-cmf.png",
            alt: "Form and CMF breakdown of the Mise prep station",
            caption: "Form and CMF: the light band wraps the base; cutting board, prep containers, timer, and icon backboard complete the station.",
          },
          size: "full",
        },
        {
          type: "compare",
          left: {
            src: "/images/projects/mise/render-1.jpg",
            alt: "Mise 3D model rendering",
            caption: "Fusion 360 model rendered in KeyShot.",
          },
          right: {
            src: "/images/projects/mise/render-2.jpg",
            alt: "Mise 3D model rendering, alternate view",
            caption: "Calm, minimal form language drawn from Scandinavian design.",
          },
        },
      ],
    },
    {
      heading: "Design for manufacture",
      blocks: [
        {
          type: "text",
          body: [
            "Although prototyped with 3D printing, Mise was designed for injection molding using recycled plastics. The housing maintains consistent wall thickness, internal ribbing, and draft for efficient production. A rear-aligned parting line minimizes visible seams.",
            "The acrylic light panel slides into molded side channels and secures with snap-fit tabs for easy servicing. Electronics are accessed through a concealed bottom panel hidden beneath rubber feet. Food-contact components, including the CNC-milled cutting board and polypropylene prep containers, are fully removable and separated from internal electronics. Modular, scalable, and serviceable.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/mise/dfm.gif",
            alt: "Animation of Mise's manufacturing and assembly breakdown",
            caption: "DFM breakdown: consistent wall thickness, internal ribbing, draft, snap-fit acrylic panel, and a concealed service panel under the rubber feet.",
          },
          size: "full",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "Integrate the light into a prep station",
      decision: "Rather than a standalone light unit or ceiling-mounted system, I embedded the responsive light directly into a prep station the cook already uses.",
      tradeoff: "A modular light could sit anywhere; the prep station commits to one place on the counter. In exchange, accessibility lives inside the workflow itself — Mise is part of the process, not another gadget demanding its own attention.",
    },
    {
      title: "A kitchen object, not an assistive device",
      decision: "Natural materials, soft light, and a calm Scandinavian-influenced form make Mise feel at home in the kitchen rather than clinical or assistive.",
      tradeoff: "A more overtly technical look could signal its capabilities at a glance. But a product people don't want on their counter never gets the chance to help — the design leads with kitchen, not device.",
    },
    {
      title: "Design for injection molding from the start",
      decision: "Even though the prototype was 3D printed, the housing was engineered for injection molding in recycled plastics — wall thickness, ribbing, draft, and parting line all resolved.",
      tradeoff: "DFM constraints limited some formal freedom the printed prototype could have ignored. The result is a design that could actually scale, with serviceable electronics and food-contact parts fully separated.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "Mise translates kitchen alerts into distinct, glanceable light signals. Whether a timer finishes or an appliance needs attention, users receive clear visual feedback without disrupting their flow. By integrating form, light, and function, Mise creates a safer, more accessible, and seamless cooking experience.",
        ],
      },
      {
        type: "gallery",
        figures: [
          {
            src: "/images/projects/mise/final-1.jpg",
            alt: "Final Mise design product shot",
            caption: "The final prep station: light band, cutting board, prep containers, and built-in timer.",
          },
          {
            src: "/images/projects/mise/final-2.jpg",
            alt: "Final Mise design product shot, detail",
            caption: "The illuminated acrylic backboard with clearly labeled icons.",
          },
          {
            src: "/images/projects/mise/final-3.jpg",
            alt: "Final Mise design product shot, alternate angle",
            caption: "Every sound has a light, and every cook has control.",
          },
          {
            src: "/images/projects/mise/final-4.jpg",
            alt: "Final Mise design in kitchen context",
            caption: "At home in the kitchen — not clinical, not assistive-looking.",
          },
        ],
      },
      {
        type: "figure",
        figure: {
          src: "/images/projects/mise/final-6.png",
          alt: "Mise final design detail schematic",
          caption: "Final design detail: how the signals map to kitchen events.",
        },
        size: "wide",
      },
    ],
  },
};
