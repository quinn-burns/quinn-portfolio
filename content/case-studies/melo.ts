import type { CaseStudy } from "@/lib/case-study-types";
import type { Media } from "@/lib/types";

/**
 * Melo case study.
 *
 * Story: people adapt their bodies to the middle seat of a couch; Melo asks
 * what happens if the furniture adapts to them instead. Every behaviour named
 * here comes from Quinn's own description of the project. Nothing describes
 * formal research, interviews, ergonomic testing or measured outcomes.
 *
 * Photography: the hero is the warm studio image used on the homepage. The
 * rest are the six photographs from Quinn's SIT 2026 submission (Joshua
 * Kinoshita). Their plain studio backdrop was replaced with the warm studio
 * beige: the furniture was cut out, the original backdrop's light falloff and
 * contact shadows were carried over, and the furniture itself received only a
 * single white-balance correction matched to the studio cushion. Nothing on
 * the piece is altered. The lifestyle image shows the table standing apart from
 * the base, so its caption says so.
 *
 * Film: Quinn's original vertical showcase with the same white-balance
 * correction, shown as a silent loop.
 */

const M = "/work/melo/";

/** Official SIT listing for Melo (award title, year, category and photo credit verified here). */
const SIT_LISTING = "https://www.sitaward.com/winners/sit/2026/939/0/";

const img = (file: string, alt: string, width = 1434, height = 956): Media => ({
  kind: "image",
  src: M + file,
  alt,
  width,
  height,
});

export const melo: CaseStudy = {
  slug: "melo",
  title: "Melo",
  headline: "Making room for the middle.",
  intro:
    "A multifunctional furniture piece for the middle seat of the couch, designed around how people actually lounge.",
  heroMedia: img("studio-front.jpg", "Melo on a warm studio backdrop: a sculpted sapele base with an upholstered cushion and a round wooden tabletop on a tapered stem.", 1536, 1024),
  heroRatio: 1536 / 1024,
  facts: [
    { label: "Discipline", value: "Furniture design" },
    { label: "School", value: "Georgia Institute of Technology" },
    { label: "Year", value: "2026" },
    { label: "Materials", value: "Solid sapele, Brodex Pearl upholstery" },
  ],
  // Verified against the official listing: https://www.sitaward.com/winners/sit/2026/939/0/
  recognition: {
    title: "SIT Furniture Design Award",
    distinction: "Winner 2026 · Living room furniture",
    href: SIT_LISTING,
  },

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
          headline: "The middle seat of a couch often lacks the comfort and convenience of either end.",
          body:
            "There’s no armrest, no nearby surface, and nowhere dedicated to rest your feet.\n\nMelo brings these functions together through a curved sapele tabletop, an upholstered footrest, and a sculpted wooden base that offers another place to rest your feet.",
        },
        {
          type: "gallery",
          ratios: [720 / 1280, 1434 / 956],
          items: [
            {
              media: {
                kind: "video",
                src: M + "melo-showcase.mp4",
                poster: M + "melo-showcase-poster.jpg",
                alt: "A slow camera study of Melo: the tabletop edge, the tapered stem, the cushion, and the full piece in profile.",
                width: 720,
                height: 1280,
              },
              caption: "Product film.",
            },
            {
              media: img("sit-side.jpg", "Melo in profile: the stem rises from the base in one curve to carry the round tabletop over the cushion."),
              caption: "In profile, the stem, base and tabletop read as one continuous form.",
            },
          ],
        },
      ],
    },

    /* ───────────── 02 · The Opportunity ───────────── */
    {
      id: "opportunity",
      label: "The Opportunity",
      blocks: [
        {
          type: "split",
          label: "The Opportunity",
          headline: "People adapt their bodies to spaces that don’t support them.",
          body:
            "The workarounds are small and easy to miss: a mug balanced on a lap, a lean toward the coffee table, feet shifting in search of a resting place, posture adjusted again and again while trying to relax.",
        },
        {
          type: "statement",
          size: "large",
          headline: "What if the furniture adapted to the person, rather than the other way around?",
        },
      ],
    },

    /* ───────────── 03 · The Design Response ───────────── */
    {
      id: "form-function",
      label: "Form & Function",
      blocks: [
        {
          type: "statement",
          label: "Form & Function",
          headline: "Three behaviors, three needs, one piece of furniture.",
        },
        {
          type: "response",
          items: [
            {
              media: img("sit-tabletop.jpg", "The round sapele tabletop seen from above at an angle, its grain running across the surface, with the cushion below."),
              behavior: "Balancing a drink or a book on a lap, or leaning forward to reach the coffee table.",
              need: "A surface within reach of the middle seat.",
              feature: "Curved wooden tabletop",
              detail: "Brings drinks, books, and devices within comfortable reach.",
            },
            {
              media: img("sit-upholstery.jpg", "Close-up of the Brodex Pearl cushion’s corner where it sits on the sculpted sapele leg."),
              behavior: "Feet shifting, looking for somewhere to rest.",
              need: "A soft, dedicated place to put your feet up.",
              feature: "Upholstered cushion",
              detail: "A soft footrest for lounging, upholstered in Brodex Pearl.",
            },
            {
              media: img("sit-support.jpg", "The sculpted base beneath the cushion: an arched sapele support and a low stretcher."),
              behavior: "Posture adjusted again and again while trying to settle in.",
              need: "More than one way to rest.",
              feature: "Sculpted wooden base",
              detail: "Doubles as a secondary foot support, offering an alternative foot position.",
            },
          ],
        },
        {
          type: "image",
          size: "bleed",
          ratio: 1264 / 843,
          media: img("in-use-living-room.jpg", "A woman reads in a cream armchair with her feet up on Melo’s upholstered cushion; a round wooden table stands beside it with a mug and books.", 1264, 843),
          caption: "Lounging with the footrest. In this image the round table stands on its own, apart from the base.",
        },
      ],
    },

    /* ───────────── 04 · Material & Reflection ───────────── */
    {
      id: "material-making",
      label: "Material & Making",
      blocks: [
        {
          type: "image",
          size: "bleed",
          ratio: 1434 / 956,
          media: img("sit-joint.jpg", "Close-up of a sapele stretcher meeting a curved leg, the grain flowing through the joint."),
          caption: "Where the stretcher meets the leg.",
        },
        {
          type: "split",
          label: "Material & Making",
          headline: "Warm wood, soft upholstery, nothing extra.",
          body:
            "The solid sapele base is shaped in continuous curves, so leg, support, and stem read as one form. Brodex Pearl upholstery softens the place where feet rest. Proportions and palette draw on Scandinavian hygge: warm, unfussy, made to be lived with.",
        },
      ],
    },

    /* ───────────── 05 · Final ───────────── */
    {
      id: "final",
      label: "Recognition",
      blocks: [
        {
          type: "image",
          size: "bleed",
          ratio: 1434 / 956,
          media: img("sit-front.jpg", "Melo from the front three-quarter: the sapele base, the Brodex Pearl cushion, and the round tabletop rising behind it on its curved stem."),
        },
        {
          type: "recognition",
          badge: {
            kind: "image",
            src: M + "sit-award-winner-2026.png",
            alt: "SIT Furniture Design Award, Winner 2026",
            width: 556,
            height: 208,
          },
          title: "SIT Furniture Design Award",
          distinction: "Winner 2026 · Living room furniture",
          href: SIT_LISTING,
          linkLabel: "View the official listing",
        },
        {
          type: "credits",
          groups: [
            { label: "Design", lines: ["Quinn Burns"] },
            { label: "Photography", lines: ["Joshua Kinoshita"] },
          ],
        },
      ],
    },
  ],

  next: "mise",
  seoDescription:
    "Melo — a solid sapele piece for the middle seat of a couch, with a tabletop and two footrest options. Recipient of a SIT Furniture Design Award.",
};
