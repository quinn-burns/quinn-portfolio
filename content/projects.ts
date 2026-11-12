import type { Exploration, FeaturedProject } from "@/lib/types";

/** Original-resolution file on the Wix CDN (next/image handles resizing). */
const wix = (id: string) => `https://static.wixstatic.com/media/${id}`;

/**
 * Featured work. Array order = gallery order: on desktop the grid fills
 * left → right, two per row; on mobile it is one column in this order.
 *
 * Copy rules: titles, subtitles and descriptions are Quinn's own words.
 * `subtitle` shows by default; `description` replaces it on hover/focus.
 * `caseStudy` keeps detail for the project pages — not rendered on the homepage.
 */
export const featured: FeaturedProject[] = [
  {
    slug: "aerosense",
    title: "AeroSense",
    subtitle: "Connected Care in Motion",
    description: "Connecting biometric monitoring, portable ventilation, and caregiver interfaces.",
    tags: ["Healthcare", "Product + UX"],
    href: "/work/aerosense",
    media: {
      kind: "image",
      src: "/work/aerosense/hero.jpg",
      alt: "The AeroSync portable ventilator on a warm backdrop: a cream housing with blue handles and dial, a live ventilation screen, a padded blue shoulder strap and breathing circuit, and the HALO sensing band laid in front.",
      width: 1536,
      height: 1024,
      focus: "50% 50%",
    },
    caseStudy: {
      images: ["/work/aerosense/nursery-scene.jpg"],
      summary:
        "A pediatric healthcare design system integrating a portable ventilator, wearable monitoring, and connected digital interfaces.",
      meta: [
        { label: "Focus", value: "Healthcare, wearables, connected interfaces" },
        { label: "Context", value: "Health Design Studio, Fall 2026" },
        { label: "Team", value: "Quinn Burns, Yasmin Younis" },
      ],
    },
  },
  {
    slug: "melo",
    title: "Melo",
    subtitle: "Furniture Design",
    description: "Bringing a tabletop and two footrest options to the middle seat of a couch.",
    tags: ["Furniture", "Physical Product"],
    href: "/work/melo",
    media: {
      kind: "image",
      src: "/work/melo/studio-front.jpg",
      alt: "Melo, a sculpted sapele base with an upholstered cushion and a round tabletop on a curved stem, on a warm backdrop.",
      width: 1536,
      height: 1024,
      focus: "48% 50%",
    },
    caseStudy: {
      summary:
        "A furniture project exploring form, human behavior, comfort, and thoughtful physical interaction.",
      meta: [{ label: "Focus", value: "Furniture, form, comfort" }],
      // Supplied for the case study (not shown on the homepage).
      images: [
        "/work/melo/studio-front-extended-4x5.jpg",
        "/work/melo/studio-angle.jpg",
        "/work/melo/detail-base.jpg",
        "/work/melo/in-use-living-room.jpg",
      ],
    },
  },
  {
    slug: "mise",
    title: "Mise",
    subtitle: "Inclusive Kitchen Design",
    description: "Translating kitchen sounds into visual cues through an integrated prep station.",
    tags: ["Inclusive Design", "Product Design"],
    href: "/work/mise",
    ratio: 3 / 2,
    media: {
      kind: "image",
      src: "/work/mise/prototype-hero.jpg",
      alt: "Mise kitchen light and prep station: a speckled base with a timer and three brass prep bowls, a frosted acrylic alert backboard and a wood cutting board, photographed outdoors on concrete.",
      width: 1600,
      height: 1299,
    },
    caseStudy: {
      summary:
        "A human-centered product design project exploring accessible kitchen experiences.",
      meta: [{ label: "Focus", value: "Product design, lighting, inclusive design" }],
    },
  },
  {
    slug: "memomir",
    title: "MemoMir",
    subtitle: "Physical-Digital Interaction",
    description: "Turning everyday mirrors into spaces for digital announcements.",
    tags: ["Entrepreneurship", "Physical + Digital"],
    href: "/work/memomir",
    ratio: 3 / 2,
    media: {
      kind: "image",
      src: "/work/memomir/campus-visualization.jpg",
      alt: "MemoMir in a campus washroom: a backlit mirror showing a Design Futures Night event on the glass.",
      width: 1672,
      height: 941,
    },
    caseStudy: {
      summary:
        "A mirror-integrated messaging experience exploring human connection through everyday routines.",
      meta: [{ label: "Focus", value: "Product design, systems design, sustainability" }],
    },
  },
];

/**
 * More Explorations, in display order (3 per row on desktop, 2 on tablet,
 * 1 on mobile). Every tile is 4:5; use `media.focus` to keep the product in frame.
 * The homepage shows `title` + `discipline`; `line` and `credit` are kept for
 * the short case studies.
 */
export const explorations: Exploration[] = [
  {
    slug: "dash",
    title: "Dash",
    line: "Hydration that moves with you.",
    discipline: "Outdoor Gear",
    media: {
      kind: "image",
      src: wix("1d32f3_c50bf20ea85d447e8ae63e8cf11a5450~mv2.jpg"),
      alt: "Illustration of the Dash hiking pole grip with an integrated hydration reservoir and strap.",
      width: 3300,
      height: 2550,
    },
  },
  {
    slug: "olive",
    title: "Olive",
    line: "A step up for your closet.",
    discipline: "Furniture Design",
    credit: "With Sara",
    media: {
      kind: "image",
      src: wix("1d32f3_107e17aa721346e19787f40bcc80b67d~mv2.jpg"),
      alt: "Olive, a plywood step stool with an integrated hanger bar, in hard afternoon sunlight.",
      width: 6000,
      height: 4000,
    },
  },
  {
    slug: "solea-margot-heel",
    title: "Soléa Margot Heel",
    line: "A heel designed to support you all day.",
    discipline: "Footwear Design",
    media: {
      kind: "image",
      src: wix("1d32f3_396a3f3ae6d64dbca431341ea9e029ff~mv2.jpg"),
      alt: "A pair of felt-and-cork Soléa Margot heel prototypes being worn on a stone step.",
      width: 1992,
      height: 1762,
    },
  },
  {
    slug: "terra-shelf",
    title: "Terra Shelf",
    line: "Making compost part of the routine.",
    discipline: "Sustainable Design",
    media: {
      kind: "image",
      src: wix("1d32f3_5d4f0cea445943bfaeb24150d0160842~mv2.png"),
      alt: "Terra, a wall-mounted kitchen compost bin on two black brackets.",
      width: 4032,
      height: 3024,
      focus: "50% 50%",
    },
  },
  {
    slug: "kairn",
    title: "Kairn",
    line: "Sound that adapts to where you are.",
    discipline: "Consumer Audio",
    media: {
      kind: "image",
      src: wix("1d32f3_7e8bf6204f8c489fb11eb753315f3b5b~mv2.jpg"),
      alt: "A hand stacking Kairn speaker modules outdoors among leaves.",
      width: 3000,
      height: 1997,
      focus: "60% 50%",
    },
  },
  {
    slug: "lefties-kitchen",
    title: "Lefties Kitchen",
    line: "A children’s toy where yesterday’s leftovers become today’s creations.",
    discipline: "Toy Design",
    media: {
      kind: "image",
      src: wix("1d32f3_c855e2aad8a84778850adbc898b3b19a~mv2.png"),
      alt: "Lefties Kitchen: a small wooden toy fridge with hand-painted wooden food pieces spread in front of it.",
      width: 3024,
      height: 4032,
    },
  },
];

/** Digital interface + research work, shown as a typographic list. */
export const digitalWork = {
  intro:
    "Nutrition guides, app design, content creation, chatbots, and published research.",
  // TODO: give each item a real title + link once the short case studies exist.
  items: [
    { title: "Published HCI research", detail: "Presented at UbiComp / ISWC" },
    { title: "Nutrition guides" },
    { title: "App design" },
    { title: "Chatbots" },
    { title: "Content creation" },
  ] as { title: string; detail?: string }[],
  media: {
    kind: "image" as const,
    src: wix("1d32f3_025916e7a1e74ebfa6f4cf2a5c911f28~mv2.png"),
    alt: "A balanced-meal nutrition guide with illustrated food groups on a warm grid layout.",
    width: 7271,
    height: 5170,
    fit: "contain" as const,
  },
};
