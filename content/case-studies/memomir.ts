import type { CaseStudy } from "@/lib/case-study-types";
import type { Media } from "@/lib/types";

/**
 * MemoMir case study.
 *
 * Story: information fails when it is placed where people aren't looking.
 * MemoMir is a broadcast-communication mirror for shared spaces (not personal
 * messaging).
 *
 * Sources: Quinn's approved copy; facts beyond it come only from the Wix
 * MemoMir page (problem, opportunity, system, process board) and the hardware
 * diagram. Kept OUT until confirmed: the ~900-poster and readership figures,
 * grant name/amount, pilot status, which capabilities ran on the prototypes,
 * the differences between the two prototypes.
 *
 * Image types are kept distinct in captions:
 *  - Product visualization: Quinn's Vizcom renders
 *  - Research: real hallway photographs and the behavior-mapping sketch
 *  - Conceptual mockup: interface compositions using content from the renders
 */

const M = "/work/memomir/";

const img = (file: string, alt: string, width: number, height: number, extra: Partial<Extract<Media, { kind: "image" }>> = {}): Media => ({
  kind: "image",
  src: M + file,
  alt,
  width,
  height,
  ...extra,
});


export const memomir: CaseStudy = {
  slug: "memomir",
  title: "MemoMir",
  headline: "Where people already look.",
  intro: "A two-way mirror with a display behind the glass, bringing announcements into everyday routines.",
  heroMedia: img("campus-visualization.jpg", "MemoMir in a warm campus washroom: a backlit mirror above a stone basin shows a Design Futures Night event and a Get Involved prompt on the left of the glass, with the MemoMir mark at upper right.", 1672, 941),
  heroRatio: 1672 / 941,
  heroCaption: "MemoMir · Product visualization.",
  facts: [
    { label: "Discipline", value: "Product and systems design" },
    { label: "Focus", value: "Interaction design, physical prototyping" },
    { label: "Prototypes", value: "Two functional mirrors" },
    { label: "Tools", value: "Dakboard, Vizcom" },
  ],

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
          headline: "A mirror that can also share announcements.",
          body:
            "School hallways are filled with announcements, yet important messages often disappear into visual clutter.\n\nMemoMir puts a display behind two-way glass, so a mirror people already use can carry announcements. I built two working prototypes to take the idea beyond renders.",
        },
      ],
    },

    /* ───────────── 02 · The Problem ───────────── */
    {
      id: "problem",
      label: "The Problem",
      blocks: [
        {
          type: "statement",
          label: "The Problem",
          headline: "A hallway full of announcements.",
        },
        {
          type: "image",
          size: "wide",
          ratio: 1280 / 720,
          media: { kind: "video", src: M + "bulletin-board.mp4", poster: M + "bulletin-board-poster.jpg", alt: "Video of a campus bulletin board crowded with overlapping flyers and announcements.", width: 1280, height: 720 },
          caption: "Problem documentation · Existing campus communication: physical announcements layered on a bulletin board.",
        },
        {
          type: "mediaText",
          side: "left",
          ratio: 790 / 520,
          media: img("research-poster-wall.jpg", "Four photographs of a school hallway: flyers, a QR-code sign-up sheet and a bulletin board crowding the walls, loose paper notes, and a handwritten note taped to a surface.", 790, 520),
          headline: "Printed, posted, forgotten.",
          body:
            "Every announcement had to be designed, printed, and taped up by hand, then taken down and replaced when anything changed.\n\nNew flyers went up over old ones, and many stayed long after their events had passed.",
          caption: "Research photographs from the school hallways that started the project.",
        },
      ],
    },

    /* ───────────── 03 · The Insight ───────────── */
    {
      id: "insight",
      label: "The Insight",
      blocks: [
        {
          type: "split",
          label: "The Insight",
          headline: "Where are people already looking?",
          body:
            "Instead of asking how to make posters louder, I asked where a message could fit into a routine that already exists.\n\nStudents I surveyed pointed to clutter and visual overload, rather than a lack of interest, as the reason posters went unread.",
        },
        {
          type: "image",
          size: "wide",
          ratio: 1672 / 941,
          media: img("behavior-map.jpg", "A student pauses at a washroom mirror; soft attention zones highlight her face in the reflection and her hands at the sink.", 1672, 941),
          caption: "Conceptual attention visualization, not measured eye-tracking research.",
        },
        {
          type: "split",
          headline: "Mirrors hold a natural pause.",
          body: "Mirrors are already part of everyday routines in washrooms, dorms, and gyms. A message there reaches people without asking them to seek out another information source.",
        },
      ],
    },

    /* ───────────── 04 · From Concept to Reality ───────────── */
    {
      id: "prototypes",
      label: "From Concept to Reality",
      blocks: [
        {
          type: "mediaText",
          side: "left",
          ratio: 720 / 1280,
          media: { kind: "video", src: M + "prototype-01.mp4", poster: M + "prototype-01-poster.jpg", alt: "Phone footage of the first MemoMir prototype in a campus building: a Spring into Wellness announcement glows through the glass over the reflection of the room.", width: 720, height: 1280 },
          label: "From Concept to Reality · Prototype 01",
          headline: "Real glass, real content, a real room.",
          body: "I built two functional MemoMir prototypes, each with a display behind two-way glass.\n\nIn the first, documented here, an announcement glows through the glass while the surrounding room stays visible in the reflection.",
          caption: "Authentic prototype documentation · Prototype 01.",
        },
        {
          type: "split",
          label: "Behind the glass",
          headline: "A display behind two-way glass.",
          body: "The two-way glass reflects like a mirror wherever the screen is dark and lets bright content through. The display sits directly behind it, held in a pine frame that mounts to the wall.\n\nA Dakboard controller, connected over HDMI, plays screens created in its dashboard.",
        },
        {
          type: "image",
          pan: 760,
          size: "wide",
          ratio: 2,
          media: img("system-diagram.png", "Exploded diagram: two-way glass, display, pine frame with wood blocks, and wall mount; a Dakboard controller connected by HDMI; a content dashboard; and dashed lines to many mirrors marking a designed capability.", 2000, 1000),
          caption: "Solid lines show the documented build; dashed lines show a proposed capability.",
        },
        {
          type: "sequence",
          label: "Building the experience",
          numbered: true,
          steps: [
            { title: "Configuring the display and content", body: "Connect the display to Dakboard, create sample screens, and check brightness and readability." },
            { title: "Constructing the frame and integrating the glass", body: "Cut, sand, and assemble a pine frame, then secure the two-way glass at its front." },
            { title: "Assembling and evaluating the working mirror", body: "Center the display behind the glass, mount the mirror, and review it in real lighting." },
          ],
        },
        {
          type: "statement",
          headline: "Building it showed that the core interaction works beyond a render: digital content, readable through a reflective surface, in a real space.",
        },
      ],
    },

    /* ───────────── 05 · The Experience ───────────── */
    {
      id: "experience",
      label: "The Experience",
      blocks: [
        {
          type: "statement",
          label: "The Experience",
          headline: "A mirror first. A display when it matters.",
          body: "MemoMir keeps most of the glass reflective, reserving a defined area for announcements. Content can be updated digitally, allowing information to change without replacing physical posters.",
        },
        {
          type: "image",
          size: "bleed",
          ratio: 1536 / 1024,
          media: img("glance.jpg", "A student pauses at a campus washroom mirror; Design Futures Night and Get Involved glow on the glass beside her reflection.", 1536, 1024),
          caption: "Product visualization.",
        },
        {
          type: "mediaText",
          side: "left",
          ratio: 1122 / 1402,
          media: img("mirror-closeup.jpg", "Angled close-up of MemoMir: Design Futures Night and Get Involved glow through the glass on the left, the MemoMir mark sits at upper right, and the edge light wraps the frame.", 1122, 1402),
          headline: "Made to be read at a glance.",
          body: "Short headlines, a clear hierarchy, and a consistent layout make each message quick to take in.",
          caption: "Product visualization.",
        },
        {
          type: "image",
          size: "wide",
          ratio: 1672 / 941,
          media: img("content-states.jpg", "Three MemoMir mirrors side by side showing different content states: a single event announcement, an upcoming-this-week schedule, and a building notice that elevators are out of service.", 1672, 941),
          caption: "Three content states: an event, a weekly schedule, and an urgent notice. Product visualization with illustrative content.",
        },
        {
          type: "sequence",
          label: "Proposed system features",
          steps: [
            { title: "Instant updates", body: "Edit once, with nothing to reprint." },
            { title: "Scheduled rotation", body: "Messages appear and expire on time." },
            { title: "Multi-location", body: "One message, many mirrors." },
            { title: "Urgent notices", body: "Time-sensitive content takes priority." },
          ],
        },
      ],
    },

    /* ───────────── 06 · The Venture ───────────── */
    {
      id: "venture",
      label: "The Venture",
      blocks: [
        {
          type: "split",
          label: "The Venture",
          headline: "Communication should be dynamic, not disposable.",
          body:
            "MemoMir started in schools, but its model is a centrally managed communication system: write a message once and place it on mirrors across a building, a campus, or a business.\n\nThe next steps are usability testing, system integration, and an onboarding strategy for the people who manage content.",
        },
        {
          type: "image",
          size: "wide",
          ratio: 1671 / 941,
          media: img("hospitality-visualization.jpg", "MemoMir in a warmly lit restaurant washroom: the backlit mirror shows a Wine Tasting Night card and a New Seasonal Menu card, with the MemoMir mark at upper right.", 1671, 941),
          caption: "Beyond the classroom: a conceptual hospitality application. Product visualization, not an actual installation.",
        },
        {
          type: "statement",
          label: "Reflection",
          size: "large",
          headline: "MemoMir started with a question about why school announcements go unnoticed.",
          body: "Building the prototypes pushed me to think beyond the screen itself and consider how digital information could fit into the physical spaces people already use.",
        },
      ],
    },
  ],


  seoDescription:
    "MemoMir — a two-way mirror with a display behind the glass that brings announcements into everyday routines. Research, interaction design, and a functional physical prototype.",
};
