import type { Project } from "@/lib/types";

/**
 * SCAFFOLD COPY — structure and voice are the model; the specifics are
 * invented. Replace every fact with your real evidence before publishing.
 */
export const memomir: Project = {
  slug: "memomir",
  title: "MemoMir",
  hook: "Household communication that leaves nothing behind — dynamic, waste-free messages built into the mirror you already check.",
  category: "industrial",
  tags: ["Industrial Design", "Interaction", "Sustainability"],
  cover: "/images/projects/memomir/cover.svg",
  coverAlt: "MemoMir mirror with a handwritten-style message on its surface",
  order: 3,

  role: "Sole designer — research, interaction model, form, prototyping",
  team: "Solo",
  timeline: "6 weeks · Spring 2025",
  tools: ["Diary study", "Rhino", "Arduino + e-paper prototype", "KeyShot"],
  projectType: "Studio project",

  tldr: "Households run on tiny messages — 'dentist at 4,' 'we're out of milk' — and most of them live on sticky notes that get written once, read once, and thrown away. I ran a one-week diary study of household notes, found that nearly all of them expire within a day, and designed MemoMir: a mirror with an integrated low-power writing surface, placed at the one spot everyone already checks daily. Messages appear where attention already is, and disappear without a scrap of waste.",

  context: [
    {
      type: "text",
      body: [
        "The sticky note is a brilliant piece of design with a built-in flaw: its lifespan is minutes, its material is forever single-use. In my diary study, households logged the notes they wrote in a week — almost every note either expired the same day or was a standing reminder rewritten again and again.",
        "Digital 'family hub' screens claim to solve this, but they move messages to another app — and the whole value of a note is that it ambushes you. A note works because it sits where your eyes already go. The design question became: where do a household's eyes reliably go every single day? The bathroom mirror.",
      ],
    },
    {
      type: "quote",
      text: "I text my partner reminders and he still misses them. The note taped to the mirror? Never missed once.",
      attribution: "Diary study participant",
    },
  ],

  process: [
    {
      heading: "Finding where messages actually land",
      blocks: [
        {
          type: "text",
          body: [
            "The diary study logged not just what people wrote but where the note was placed and whether it worked. Fridge notes got skimmed; door notes worked only for 'on your way out' messages; mirror notes had the highest hit rate because mirror time is captive time. That finding located the product before I drew a line.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/memomir/research-1.svg",
            alt: "Diary study map of note locations and their read rates",
            caption: "Placement vs. hit-rate map from the diary study. The mirror won not because it's clever but because it's captive — you can't not look.",
          },
          size: "wide",
        },
      ],
    },
    {
      heading: "Making the message feel handwritten, not notification-shaped",
      blocks: [
        {
          type: "text",
          body: [
            "The failure mode I designed against was 'another screen in the house.' I prototyped with e-paper behind half-silvered glass so a message reads like ink on the mirror, not a display. Notes are written by finger directly on the surface — keeping the gesture of the sticky note, because the diary study showed the act of writing is part of why notes get remembered by their writers too.",
          ],
        },
        {
          type: "compare",
          left: {
            src: "/images/projects/memomir/iterations-1.svg",
            alt: "Early iteration with a bright display panel in the mirror corner",
            caption: "V1 used a standard LCD tile. Testers called it 'a phone stuck in the mirror' — exactly the wrong instinct.",
          },
          right: {
            src: "/images/projects/memomir/iterations-2.svg",
            alt: "Later iteration with e-paper behind the mirror surface reading like ink",
            caption: "V2's e-paper reads as marker-on-glass. Same information, entirely different relationship with the room.",
          },
          caption: "The move from display to ink. The information is identical; the material honesty is what changed how people described it.",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "E-paper behind glass instead of a display panel",
      decision: "I chose a low-power e-paper layer laminated behind the mirror over a conventional LCD module.",
      tradeoff: "E-paper gave up color and animation — features every smart-mirror concept leans on. In exchange: no glow in a dark bathroom, near-zero standby power, and a message that reads as writing rather than UI. For an object you face half-awake, calm beat capable.",
    },
    {
      title: "Messages expire by default",
      decision: "Every note auto-clears after 24 hours unless deliberately pinned.",
      tradeoff: "Auto-expiry risks deleting something that mattered, and one tester lost a note they wanted. But the diary study showed stale notes are why physical boards die — people stop seeing them. A surface that stays current stays read. I added a one-touch 'pin' rather than making persistence the default.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "MemoMir's final prototype is a wall mirror with a finger-writable e-paper region, a one-touch pin, and 24-hour auto-expiry. It replaces the note-writing loop a household already has — same gesture, same location, none of the paper — and it disappears completely when there's nothing to say.",
        ],
      },
      {
        type: "figure",
        figure: {
          src: "/images/projects/memomir/final-1.svg",
          alt: "Final MemoMir prototype mounted in a bathroom setting",
          caption: "Final prototype in context. When the surface is empty it is simply a mirror — the product's best state is invisible.",
        },
        size: "full",
      },
    ],
    results: [
      "A week-long in-home pilot logged consistent daily use, with messages read reliably where texted reminders had been missed.",
      "Standby power draw measured low enough for the always-on placement to be defensible — the sustainability story holds beyond just paper savings.",
    ],
    learned: "Ambient products should be judged by their empty state. I spent the first two weeks designing what MemoMir shows and the last four designing what it doesn't. The restraint was the product.",
  },
};
