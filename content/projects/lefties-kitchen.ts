import type { Project } from "@/lib/types";

/**
 * Copy sourced from quinn-burns.com/lefties-kitchen — edited only to fit
 * the template.
 */
export const leftiesKitchen: Project = {
  slug: "lefties-kitchen",
  title: "Lefties Kitchen",
  hook: "A children's toy where yesterday's leftovers become today's creations.",
  category: "industrial",
  tags: ["Toy Design", "Sustainability", "Early Childhood Learning"],
  cover: "/images/projects/lefties-kitchen/cover.jpg",
  coverAlt: "Lefties Kitchen toy set with modular wooden food pieces",
  order: 2,

  role: "Designer & maker — concept, modeling, CNC cutting, and hand fabrication",
  team: "Solo",
  tools: ["Fusion 360", "CNC", "Hand fabrication", "Paint & finishing"],
  projectType: "Toy design",

  tldr: "Lefties Kitchen is a food-building toy designed to help kids around age 6 build sustainable habits early. By turning leftovers into reusable, modular \"leftie\" pieces, the product reframes food reuse as something creative and playful rather than something to avoid or tolerate. I modeled it in Fusion 360, CNC cut all 33 wooden pieces, and finished every piece by hand.",

  context: [
    {
      type: "text",
      body: [
        "Food waste is a habit problem. Every year, millions of tons of perfectly good food are thrown away, not because it's spoiled, but because habits around using leftovers were never really formed. By the time we're adults, those habits are already set, and changing them is hard. If we want to meaningfully reduce food waste, we have to design for behavior, and that means starting earlier.",
        "Kids between the ages of 4–7 are in a key window for forming lifelong routines. At this stage, learning happens through play, experimentation, and exploration, not lectures. I saw an opportunity to introduce sustainable thinking in a way that feels natural, embedding reuse into play before non-sustainable habits become the default.",
      ],
    },
    {
      type: "figure",
      figure: {
        src: "/images/projects/lefties-kitchen/problem.png",
        alt: "Food waste problem illustration",
        caption: "The framing that drives the project: food waste is a habit problem, and habits form years before anyone cooks a real meal.",
      },
      size: "wide",
    },
    {
      type: "quote",
      text: "How might I design a play experience to build more sustainable habits from an early age?",
      attribution: "The design question · Playful · Open-Ended · Intuitive · Creative · Sustainable",
    },
  ],

  process: [
    {
      heading: "Structuring the play",
      blocks: [
        {
          type: "text",
          body: [
            "I spent a lot of time thinking through the structure of play. From the start, it was important to me that the toy supported both guided play and open-ended exploration, giving kids enough direction to get started while still leaving room for imagination.",
            "I also considered which foods to include. I asked questions like what leftovers actually look like in a typical fridge, what foods a six-year-old would recognize, and how the set could gently introduce ideas around balanced meals with fruits and vegetables without feeling instructional.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/lefties-kitchen/research.jpg",
            alt: "Research into play structure and food selection",
            caption: "Working through which foods belong in the set: recognizable to a six-year-old, true to a real fridge, and quietly nudging toward balanced meals.",
          },
          size: "wide",
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/lefties-kitchen/concepts.jpg",
            alt: "Concept development for modular leftie pieces",
            caption: "Abstracting familiar foods into playful forms that still feel recognizable. Each \"leftie\" piece connects, stacks, and transforms — there is no right way to build a meal.",
          },
          size: "wide",
        },
      ],
    },
    {
      heading: "Bringing Lefties Kitchen to life",
      blocks: [
        {
          type: "text",
          body: [
            "This might just be my favorite part of the design process. The forms are soft and approachable, scaled for small hands and repeated use. Materials were chosen with durability and reuse in mind, reinforcing the product's values through its physical design. I modeled Lefties Kitchen in Fusion 360 and CNC cut all 33 wooden pieces to start.",
            "Each piece was hand-sanded and assembled by hand. I built the fridge structure, recessed the hinges using a drill press so the doors sat flush, and added small magnets to reinforce the doors. All food pieces are hand-painted and finished with small velcro elements to support building and recombination during play.",
          ],
        },
        {
          type: "gallery",
          figures: [
            {
              src: "/images/projects/lefties-kitchen/final-2.jpg",
              alt: "Handmade wooden food pieces from Lefties Kitchen",
              caption: "33 CNC-cut wooden pieces, each hand-sanded, hand-painted, and finished with velcro for building and recombining.",
            },
            {
              src: "/images/projects/lefties-kitchen/final-3.png",
              alt: "The Lefties Kitchen fridge structure",
              caption: "The fridge build: recessed hinges (drill press) so the doors sit flush, with small magnets reinforcing the close.",
            },
          ],
        },
      ],
    },
  ],

  decisions: [
    {
      title: "Guided and open-ended at once",
      decision: "The set supports both guided play (recipe cards, challenge prompts) and open-ended exploration — enough direction to get started, with room for imagination.",
      tradeoff: "A fully scripted toy is easier to explain on a shelf; a fully open one risks kids stalling. Holding both meant designing prompts that start play without ever defining a \"right\" way to build a meal.",
    },
    {
      title: "Reuse built into the pieces themselves",
      decision: "Leftovers are the medium: modular \"leftie\" pieces connect, stack, and transform, so reuse is the creative act rather than a lesson attached to it.",
      tradeoff: "Abstracting foods into modular forms sacrifices some realism — but realism wasn't the goal. The flexibility reflects how leftovers get reimagined in real life, prioritizing creativity and discovery over replication.",
    },
    {
      title: "Durable materials that carry the message",
      decision: "Wood, hand finishing, and velcro connections were chosen for durability and repeated use, reinforcing the product's values through its physical design.",
      tradeoff: "Hand fabrication of 33 pieces is slow — CNC cutting, sanding, painting, and assembling each one. The payoff is a toy whose own construction embodies the reuse habits it teaches.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "The final system includes modular food pieces, recipe cards, and challenge prompts that encourage kids to see leftovers as a starting point. By building meals from what is already there, kids begin to understand reuse as something intuitive and creative, not restrictive.",
        ],
      },
      {
        type: "gallery",
        figures: [
          {
            src: "/images/projects/lefties-kitchen/final-1.jpg",
            alt: "Final Lefties Kitchen set",
            caption: "The full set: fridge, modular leftie pieces, recipe cards, and challenge prompts.",
          },
          {
            src: "/images/projects/lefties-kitchen/final-4.png",
            alt: "Lefties Kitchen final detail",
            caption: "Soft, approachable forms scaled for small hands and repeated use.",
          },
        ],
      },
      {
        type: "gallery",
        figures: [
          {
            src: "/images/projects/lefties-kitchen/gallery-1.jpg",
            alt: "Lefties Kitchen in play",
            caption: "Want to become a lefties chef?",
          },
          {
            src: "/images/projects/lefties-kitchen/gallery-2.jpg",
            alt: "Building a meal from leftie pieces",
            caption: "Building meals from what's already there.",
          },
          {
            src: "/images/projects/lefties-kitchen/gallery-3.jpg",
            alt: "Lefties Kitchen pieces in play",
            caption: "Yesterday's leftovers, today's creations.",
          },
        ],
      },
    ],
  },
};
