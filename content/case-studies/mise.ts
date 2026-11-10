import type { CaseStudy } from "@/lib/case-study-types";
import type { Media } from "@/lib/types";

/**
 * Mise case study.
 *
 * Copy: Quinn's editorial narrative. Facts beyond it come only from the
 * project's Wix page (problem, market research, earbuds exercise, Fusion 360 /
 * KeyShot, 3D-printed prototype, design-for-manufacture notes).
 *
 * Accuracy rules applied:
 * - The earbuds exercise is framed as an exploration, not as lived experience.
 * - No interviews, quotes, testing or validated outcomes are claimed.
 * - Sound recognition and alerts are described as proposed until Quinn
 *   confirms what worked on the prototype.
 * - The physical prototype and the proposed production design are kept apart.
 *
 * Images: captured from the Wix originals at 1050–1600px (Wix served them far
 * smaller). The white/blue kitchen render predates the speckled prototype and is
 * captioned as an earlier stage.
 */

const M = "/work/mise/";

const img = (file: string, alt: string, width: number, height: number, extra: Partial<Extract<Media, { kind: "image" }>> = {}): Media => ({
  kind: "image",
  src: M + file,
  alt,
  width,
  height,
  ...extra,
});

const PORTRAIT = 1050 / 1400;

export const mise: CaseStudy = {
  slug: "mise",
  title: "Mise",
  headline: "Every sound has a light.",
  intro:
    "A kitchen light and prep station that brings visual alerts, a timer, and everyday food preparation into one workspace.",
  heroMedia: img("prototype-hero.jpg", "The Mise prototype in sunlight on concrete: a speckled stone-like base with a timer, three brass prep bowls, a frosted acrylic backboard with alert icons, and a dark wood cutting board.", 1600, 1299),
  heroRatio: 1600 / 1299,
  facts: [
    { label: "Discipline", value: "Product design" },
    { label: "Focus", value: "Inclusive design, lighting" },
    { label: "Tools", value: "Fusion 360, KeyShot" },
    { label: "Prototype", value: "3D-printed housing, acrylic backboard" },
  ],
  disclaimer:
    "Mise is a student design project. The physical prototype demonstrates the form, materials, and illuminated light band; sound recognition and alert notifications are proposed capabilities.",

  chapters: [
    /* ───────────── 01 · Overview ───────────── */
    {
      id: "overview",
      label: "Overview",
      blocks: [
        {
          type: "statement",
          label: "Overview",
          size: "large",
          headline: "The kitchen speaks in sound. Mise translates it into light.",
          body:
            "The kitchen is filled with sounds we rely on without thinking. A timer ringing. An appliance beeping. Something falling out of sight.\n\nFor people who are deaf or hard of hearing, these auditory cues may be difficult or impossible to detect. Mise reimagines how a kitchen communicates, integrating visual alerts, a timer, and everyday food preparation into one intuitive workspace.",
        },
      ],
    },

    /* ───────────── 02 · Understanding ───────────── */
    {
      id: "understanding",
      label: "Understanding",
      blocks: [
        {
          type: "split",
          label: "Understanding",
          headline: "A kitchen designed around hearing.",
          body:
            "From timers and appliance alerts to the sounds of cooking itself, the kitchen communicates through an almost constant stream of auditory information.\n\nWhen those cues aren’t accessible, staying aware of what’s happening can require additional attention and visual checking.",
        },
        {
          type: "statement",
          label: "An exercise in listening",
          headline: "Cooking without the sounds I usually rely on.",
          body:
            "To explore this reliance on sound, I prepared a meal while wearing noise-canceling earbuds. It couldn’t stand in for the lived experience of deaf or hard of hearing cooks, but it revealed how frequently I depended on auditory feedback, and how disruptive it felt to keep checking for signals I could no longer hear clearly.",
        },
        {
          type: "image",
          pan: 640,
          size: "wide",
          ratio: 1600 / 1035,
          media: img("market-map.jpg", "Market map titled Interaction vs Feedback: existing kitchen timers plotted from clunky to intuitive and from sound-based to visual alerts, with a white-space gap for intuitive, visual-first design.", 1600, 1035),
          caption: "Market research: existing kitchen timers and alerts were mostly single-function, sound-based, or demanded constant visual attention.",
        },
        {
          type: "statement",
          size: "large",
          headline: "Accessibility shouldn’t require another task to manage. It should be part of the experience itself.",
        },
      ],
    },

    /* ───────────── 03 · Exploration ───────────── */
    {
      id: "exploration",
      label: "Exploration",
      blocks: [
        {
          type: "split",
          label: "Exploration",
          headline: "Finding the right place for visual alerts.",
          body:
            "Early explorations considered standalone lights, compact notification devices, and overhead systems. Each could signal an alert, but each was also one more device to monitor.\n\nBuilding the alerts into a prep station put them where the cooking already happens, so they stay in view without adding anything new to the counter.",
        },
        {
          type: "gallery",
          ratios: [1600 / 1036, 1600 / 1036],
          items: [
            { media: img("sketch-lamp.jpg", "Concept sketches: a glowing countertop timer hub with a twist-to-set base, and small auxiliary pods for elsewhere in the home.", 1600, 1036), caption: "Standalone concepts: a light hub with auxiliary pods." },
            { media: img("sketch-prep-station.jpg", "Concept sketches of a prep station with built-in containers, a removable cutting board, alert icons, and an edge that lights up.", 1600, 1036), caption: "The turning point: alerts built into a prep station." },
          ],
        },
        {
          type: "statement",
          headline: "Inspired by mise en place.",
          body:
            "The practice of organizing ingredients and tools before cooking gave the product its name and its form: prep containers, a cutting board, and a timer, with the alerts built in.",
        },
        {
          type: "image",
          size: "wide",
          ratio: 1600 / 1300,
          media: img("render-kitchen-earlier.jpg", "Render of an earlier version of Mise on a kitchen counter, with a light-blue backboard and the crash-alert icon lit red.", 1600, 1300),
          caption: "Rendered concept from an earlier stage, showing an alert state with simulated lighting.",
        },
      ],
    },

    /* ───────────── 04 · The Design ───────────── */
    {
      id: "design",
      label: "The Design",
      blocks: [
        {
          type: "statement",
          label: "The Design",
          size: "large",
          headline: "Everything in its place. Every signal in sight.",
          body:
            "Mise combines a kitchen light and prep station, translating proposed sound-based notifications into visual cues within the cooking environment.",
        },
        {
          type: "mediaText",
          side: "left",
          ratio: 1,
          media: img("prototype-light-band.jpg", "A hand sets the Mise timer on a kitchen counter while the light band glows blue beneath the base and the acrylic backboard is lit.", 1050, 1400, { focus: "50% 82%" }),
          label: "01",
          headline: "A visual language for sound",
          body: "An integrated light band is designed to communicate timer progress and draw attention to important kitchen events, such as appliance alerts, fire alarms, and unexpected crashes.",
          caption: "Prototype with the light band illuminated. Sound-triggered alerts are proposed.",
        },
        {
          type: "mediaText",
          side: "right",
          ratio: PORTRAIT,
          media: img("prototype-overhead.jpg", "Overhead view of Mise in use: a sweet potato being sliced on the cutting board below the timer, three brass prep bowls and the alert backboard.", 1050, 1400, { focus: "50% 62%" }),
          label: "02",
          headline: "Preparation, built in",
          body: "A removable cutting board and integrated prep containers keep essential tools and ingredients organized within the same workspace.",
        },
        {
          type: "mediaText",
          side: "left",
          ratio: PORTRAIT,
          media: img("prototype-backboard.jpg", "Close-up of the frosted acrylic backboard with labeled icons for fire alarm, appliance alarm, fridge open and crash alert, above the brass prep bowls.", 1050, 1400),
          label: "03",
          headline: "Awareness without interruption",
          body: "Labeled icons on the frosted backboard distinguish between alerts, so a glance shows what needs attention, not just that something does.",
          caption: "Icons for fire alarm, appliance alarm, fridge open, and crash alert.",
        },
        {
          type: "image",
          pan: 640,
          size: "wide",
          ratio: 1198 / 716,
          media: img("system-diagram.jpg", "System diagram of Mise: acrylic backboard with labeled alert icons, built-in timer, food prep containers, cutting board, and the responsive light band.", 1198, 716),
          caption: "System overview: alert backboard, built-in timer, prep containers, cutting board, and light band.",
        },
      ],
    },

    /* ───────────── 05 · Making & Reflection ───────────── */
    {
      id: "making",
      label: "Making & Reflection",
      blocks: [
        {
          type: "mediaText",
          side: "right",
          ratio: PORTRAIT,
          media: img("prototype-timer.jpg", "Close-up of the timer housing: a speckled stone-like finish, a dark display window and a ribbed dial.", 1050, 1400),
          label: "Making",
          headline: "Bringing the concept into physical form.",
          body:
            "Mise was developed through sketch exploration, Fusion 360 modeling, KeyShot rendering, and physical prototyping.\n\nIts design considers both everyday usability and potential manufacturing, with removable food-contact components separated from the electronics and a housing intended for injection molding.",
          caption: "Prototype timer housing.",
        },
        {
          type: "statement",
          label: "Reflection",
          size: "large",
          headline: "Mise pushed me to think about accessibility from the beginning of the design process, rather than treating it as a feature to add later.",
          body:
            "Integrating visual alerts into a familiar prep station let me explore how one product could support different needs without making cooking more complicated.",
        },
      ],
    },
  ],

  next: "memomir",
  seoDescription:
    "Mise — a kitchen light and prep station that translates kitchen sounds into visual cues, bringing alerts, a timer, and food preparation into one workspace for deaf and hard of hearing cooks.",
};
