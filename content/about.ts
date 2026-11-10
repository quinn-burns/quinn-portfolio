import type { Media } from "@/lib/types";

/**
 * About page: Quinn's own story, told in four parts with photography between.
 *
 * Copy: every sentence of the story is Quinn's (lightly split across the page,
 * never reworded into new claims). Captions use her phrases or facts visible in
 * the photo itself (the UbiComp/ISWC 2023 poster, Mount Sherman from her old site).
 *
 * Photos: authentic personal photographs only — never stock or generated.
 * To add one: drop the file in
 * /public/about/ and add a `photo(...)` entry to a collage; sizes and
 * placement stay the same.
 */

const A = "/about/";

const photo = (file: string, alt: string, width: number, height: number, focus?: string): Media => ({
  kind: "image",
  src: A + file,
  alt,
  width,
  height,
  focus,
});


/** `note` adds a smaller second line under the caption (collage prints only). */
export type StoryPhoto = { media: Media; caption?: string; note?: string };

export const about = {
  hero: {
    headline: "Hi, I’m Quinn.",
    lead: "I’m a third-year Industrial Design student and Stamps President’s Scholar at Georgia Tech, driven by one core belief:",
    belief: "Thoughtful design can improve how we live.",
    curiosity:
      "I’m endlessly curious, always questioning how things work and imagining how they could work better. I even keep a running list of ideas on my phone so I don’t forget them.",
    portrait: photo(
      "portrait.jpg",
      "Quinn Burns smiling in front of a large tree trunk, with lamp posts, bare branches and a brick building behind her.",
      1400,
      1343,
      "50% 40%",
    ),
  },

  /** A real idea from Quinn’s Notes app — the only one shown; nothing invented around it. */
  note: {
    label: "A peek inside my Notes app",
    title: "What if Airbnb remembered why I passed on a place?",
    body: "A more personalized way to search and compare stays, remembering places I’ve already considered, why I ruled them out, and what I might like based on previous stays.",
  },

  path: {
    n: "02",
    label: "My journey",
    title: "A little bit of everything.",
    opening: "I’ve never been one to do things the conventional way.",
    /** Beside the ISTE photo */
    coding: [
      "I started with a coder’s instinct to build and solve problems, teaching myself through Scratch tutorials and taking every coding class I could. But the more I built, the more fascinated I became by the people using what I created. That curiosity led me into UI/UX, research, and product strategy.",
    ],
    /** Beside the shop photo (closes the chapter) */
    beyond: "I wanted to keep building my design thinking skills and explore what I could create beyond the screen. Industrial design gave me the opportunity to expand my approach to problem-solving, work with physical products, and bring together so many of my interests.",
    turn: "It combined everything I loved: systems thinking, human behavior, creativity, and hands-on making.",
    /** Beside the research photo (second moment) */
    since: [
      "Along the way, I’ve worn many hats, from conducting UX research on teen mental health apps and presenting my findings at an international conference, to designing and developing an IBM sustainability chatbot, to creating and filming social media content for a Colorado Department of Public Health initiative encouraging healthy connections among teens.",
      "I’ve always loved exploring different fields, taking on new challenges, and learning by doing.",
    ],
    early: {
      media: photo(
        "iste-2016.jpg",
        "Quinn as a young student presenter at the ISTE 2016 conference in Denver, smiling with another student presenter on the yellow ISTE 2016 Denver floor logo in front of the help desk.",
        1204,
        1604,
      ),
      caption: "An early glimpse into my love of technology.",
    } as StoryPhoto,
    making: {
      media: photo(
        "shop.jpg",
        "Quinn in the shop, guiding a board through a sliding miter saw with a dust-collection hose overhead.",
        1206,
        1507,
      ),
      caption: "In the shop.",
    } as StoryPhoto,
    research: {
      media: photo(
        "ubicomp-poster.jpg",
        "Quinn smiling beside her research poster, “Investigating Mobile Mental Health App Designs to Foster Engagement Among Adolescents,” at UbiComp/ISWC 2023 in Cancún, with her co-author beside her.",
        1050,
        1400,
      ),
      caption: "Presenting my research on adolescent mental health and digital engagement.",
    } as StoryPhoto,
  },

  view: {
    n: "03",
    label: "My approach",
    title: "The way I see things.",
    lead: "I’m intentional in everything I do.",
    body: [
      "I believe in deeply understanding a problem before jumping to solutions, questioning what already exists, and pushing ideas beyond the expected.",
      "I’m also someone who actively seeks feedback. I want my thinking challenged, my assumptions questioned, and my ideas pushed further. Some of my best work has come from being willing to rethink my original direction.",
    ],
    photo: {
      media: photo(
        "pin-up.jpg",
        "Quinn’s pin-up in the Georgia Tech studio: a poster presenting Mise and Lefties Kitchen, with the Mise prototype and the wooden Lefties Kitchen pieces and cards on the table in front.",
        1545,
        1545,
      ),
      caption: "Pin-up day: Mise and Lefties Kitchen.",
    } as StoryPhoto,
  },

  outside: {
    n: "04",
    label: "Beyond design",
    title: "Outside, always.",
    intro:
      "Growing up in Colorado made exploration a way of life for me. When I’m not designing, I’m usually chasing my next adventure, whether that’s hiking fourteeners, backpacking, snowboarding, or traveling somewhere new.",
    interlude:
      "I love staying active and make time for movement every day, whether that’s running, lifting, yoga, or long walks. I’m also a NASM-certified nutrition coach and love experimenting with new recipes and cooking balanced meals. Music is another creative outlet for me, and I love any excuse to pick up a guitar.",
    /**
     * Collages fill slots in order (up to 4 each). Snowboarding and matcha
     * come back here once real photos exist.
     */
    trail: [
      {
        media: photo(
          "hike-film.jpg",
          "Film photo of Quinn with a daypack and sunglasses, glancing back from a rocky alpine trail beneath a hazy, sunlit ridgeline.",
          1545,
          1024,
        ),
        caption: "Always taking the scenic route",
      },
      {
        media: photo(
          "alaska.jpg",
          "Quinn grinning on a backpacking trip in Alaska, braids down, a full pack on her back and trekking poles in hand, green tundra hills and blue sky behind her.",
          1050,
          1400,
        ),
        caption: "A little outside my comfort zone",
        note: "Backpacked through Alaska with 10 strangers, 50 lbs on my back, and somehow ended up as the backcountry chef!",
      },
      {
        media: photo(
          "mount-sherman.jpg",
          "Quinn smiling on the rocky ridge of Mount Sherman with trekking poles, a fellow hiker beside her and the summit ahead under a wide sky.",
          1600,
          1200,
        ),
        caption: "Where I go to think bigger :)",
        note: "Summit of Mount Sherman, my 6th fourteener, standing at 14,036 ft.",
      },
    ] as StoryPhoto[],
    everyday: [
      {
        media: photo(
          "running.jpg",
          "A wide-angle running selfie of Quinn in a sage hydration vest, her hair in a braid, on a path beside a sculpture of mirrored discs.",
          1500,
          2000,
        ),
        caption: "My newest favorite way to explore",
        note: "Running has become one of my favorite ways to explore a new city or meet new people at a run club.",
      },
      {
        media: photo(
          "sourdough.jpg",
          "Two scored loaves of homemade bread on a teak cutting board, against a leaf-patterned tile backsplash.",
          1650,
          2200,
        ),
        caption: "Always experimenting with something",
        note: "My infamous homemade sourdough, baked from scratch.",
      },
      {
        media: photo(
          "guitar.jpg",
          "Quinn playing acoustic guitar in a leafy garden, seated beside a keyboard, microphones and a music stand.",
          1536,
          1081,
        ),
        caption: "I’m a yes person, especially to new experiences.",
        note: "Unofficial hobby: impromptu guitar performances on restaurant and street performers’ guitars.",
      },
    ] as StoryPhoto[],
  },

  record: {
    title: "Along the way",
    groups: [
      {
        label: "Experience",
        items: [
          { title: "Product Design Intern", org: "Fuego UX" },
          { title: "Design Intern", org: "Somatic Health" },
          { title: "Industrial Design", org: "Georgia Tech" },
        ],
      },
      {
        label: "Recognition",
        items: [
          { title: "Stamps President’s Scholar", org: "Georgia Tech" },
          { title: "SIT Furniture Design Award", org: "Melo", href: "/work/melo" },
          { title: "Research presentation and publication", org: "ACM UbiComp/ISWC" },
        ],
      },
    ] as RecordGroup[],
  },
};

export type RecordGroup = {
  label: string;
  items: { title: string; org: string; /** e.g. dates, once confirmed */ detail?: string; href?: string }[];
};
