import type { Project } from "@/lib/types";

/**
 * SCAFFOLD COPY — this write-up models the structure and voice, but the
 * specifics (participant counts, quotes, findings) are invented. Replace
 * every fact with your real evidence before publishing. See CONTENT_GUIDE.md.
 */
export const mise: Project = {
  slug: "mise",
  title: "Mise",
  hook: "Kitchen feedback reimagined — so the moments that matter can be seen, not just heard.",
  category: "industrial",
  tags: ["Industrial Design", "Accessibility", "UX Research"],
  cover: "/images/projects/mise/cover.svg",
  coverAlt: "Mise countertop device projecting cooking status onto the counter",
  order: 1,

  role: "Sole industrial designer — research, form, prototyping, CMF",
  team: "Solo",
  timeline: "10 weeks · Fall 2025",
  tools: ["Contextual interviews", "Rhino", "KeyShot", "Foam + 3D-printed prototypes"],
  projectType: "Studio project",

  tldr: "Cooking runs on sound — the rolling boil, the timer, the sizzle that changes pitch when a pan is ready. For Deaf and hard-of-hearing cooks, that entire feedback channel is missing. I spent ten weeks interviewing d/Deaf home cooks, mapping the kitchen's audio cues, and translating the essential ones into ambient light and surface projection. The result is Mise: a countertop hub that makes cooking status visible from anywhere in the room, tested with users through three prototype rounds.",

  context: [
    {
      type: "text",
      body: [
        "Watch someone cook and count how often they respond to a sound they never consciously registered: the click of ignition, water reaching a boil, a timer two rooms away. In my interviews with three d/Deaf home cooks, every one described the same workaround — hovering. You stay physically next to the stove because it's the only reliable way to know what's happening.",
        "Hovering isn't just inconvenient. It collapses multitasking, makes cooking for guests stressful, and turns a creative act into surveillance. The existing 'solutions' are flashing-light timers: single-purpose, alarm-shaped, and designed like medical equipment. Nobody wants their kitchen to look like a fire drill.",
      ],
    },
    {
      type: "quote",
      text: "I can't walk away from a pot. Ever. My hearing roommate starts pasta and goes to fold laundry — that freedom is what I want.",
      attribution: "Interview participant 2, d/Deaf home cook",
    },
  ],

  process: [
    {
      heading: "Mapping the kitchen's soundscape",
      blocks: [
        {
          type: "text",
          body: [
            "Before sketching anything, I needed to know which sounds actually carry decisions. I logged every audio cue across six cooking sessions — my own and participants' — and sorted them by what the cook did next. Three categories emerged: state changes (boiling, preheated), warnings (sizzle turning to scorch), and completions (timer, toaster). Only the first two demand ambient, glanceable feedback; completions can interrupt.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/mise/research-1.svg",
            alt: "Affinity map of kitchen sounds sorted by the action they trigger",
            caption: "The sound-to-action map became the project's spec sheet — every cue Mise displays traces back to a decision a cook told me they make from sound.",
          },
          size: "wide",
        },
      ],
    },
    {
      heading: "Form studies: appliance, not alarm",
      blocks: [
        {
          type: "text",
          body: [
            "The form had to answer one question: how does a device broadcast status across a room without shouting? I explored three directions — a wearable, stovetop-mounted indicators, and a countertop hub that projects light onto the counter surface. The wearable failed my own research: participants said they already ignore wrist buzzes while cooking. Mounted indicators fragmented attention across the stove.",
          ],
        },
        {
          type: "gallery",
          figures: [
            {
              src: "/images/projects/mise/sketches-1.svg",
              alt: "Early sketch exploration across wearable, mounted, and countertop directions",
              caption: "Round one: three directions wide. The wearable died here — the research said glanceable, not wearable.",
            },
            {
              src: "/images/projects/mise/sketches-2.svg",
              alt: "Refined countertop hub sketches exploring projection angles",
              caption: "Round two narrowed to the hub. Tilting the projection cone let one device serve both the cook at the stove and someone across the room.",
            },
          ],
        },
        {
          type: "compare",
          left: {
            src: "/images/projects/mise/iterations-1.svg",
            alt: "First foam model with vertical display face",
            caption: "V1's vertical face read clearly up close but disappeared at an angle.",
          },
          right: {
            src: "/images/projects/mise/iterations-2.svg",
            alt: "Second foam model projecting onto the counter surface",
            caption: "V2 projects onto the counter itself — the surface becomes the display, visible from anywhere with sight lines to the counter.",
          },
          caption: "The pivot from screen to projection, side by side. Testing V1 with a participant at 3 meters is what forced the change.",
        },
      ],
    },
    {
      heading: "Prototyping the signal language",
      blocks: [
        {
          type: "text",
          body: [
            "Light needed a grammar. I prototyped color-plus-motion patterns with an LED rig and tested recognition with five people (two d/Deaf, three hearing, all cooking regularly): a slow amber breathe for 'heating,' steady sage for 'ready,' and a sharp terracotta pulse reserved exclusively for warnings. Reserving one color for danger — and never using it decoratively — was the single biggest driver of recognition accuracy between test rounds.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/mise/prototype-1.svg",
            alt: "LED prototype rig testing light patterns on a kitchen counter",
            caption: "The 'ugly but honest' rig. Testing patterns before styling the housing meant the signal language was validated before the form was final.",
          },
          size: "full",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "Projection over a screen",
      decision: "I moved the display off the device entirely, projecting status onto the counter surface around it.",
      tradeoff: "A screen was cheaper and easier to spec, but it made the device a destination you look at. Projection makes the whole counter glanceable — at the cost of a taller housing and sensitivity to bright sunlight, which I mitigated with a high-contrast night/day palette.",
    },
    {
      title: "One color owns danger",
      decision: "The warning pulse gets an exclusive color that never appears in any other state, even where it would have looked good.",
      tradeoff: "This constrained the palette and made the 'ready' state visually quieter than I wanted. But in testing, exclusive color mapping cut misreads to near zero — recognition beats beauty when the pan is scorching.",
    },
    {
      title: "Designed for everyone, specified for d/Deaf cooks",
      decision: "I kept the d/Deaf use case as the spec, not a 'mode' — hearing users get the same ambient feedback rather than a downgraded accessibility variant.",
      tradeoff: "This ruled out audio-first features that hearing testers occasionally asked for. I accepted that: the moment sound becomes primary, visual feedback becomes an afterthought, which is precisely the failure Mise exists to fix.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "The final design is a countertop hub in a warm ceramic-feel housing that projects an ambient status field onto the surrounding counter: state changes breathe, readiness holds steady, and warnings pulse in a reserved color. It reads from across a room, works identically for d/Deaf and hearing cooks, and looks like cookware — not equipment.",
        ],
      },
      {
        type: "figure",
        figure: {
          src: "/images/projects/mise/final-1.svg",
          alt: "Final Mise render on a kitchen counter, projecting a steady ready state",
          caption: "Final CMF: matte ceramic white with a terracotta base — kitchen object first, device second.",
        },
        size: "full",
      },
    ],
    results: [
      "In final testing, all five participants correctly read all three signal states from 4 meters without training.",
      "Both d/Deaf participants said they would leave the kitchen mid-cook with Mise running — the exact freedom the research asked for.",
      "Selected for the end-of-semester studio exhibition.",
    ],
    learned: "Test the signal before the shell. I nearly spent weeks perfecting a housing around a vertical display that failed the first distance test. The ugly LED rig taught me more in one afternoon than three weeks of form studies — now I prototype the behavior first, always.",
  },
};
