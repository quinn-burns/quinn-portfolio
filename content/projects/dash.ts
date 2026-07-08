import type { Project } from "@/lib/types";

/**
 * SCAFFOLD COPY — structure and voice are the model; the specifics are
 * invented. Replace every fact with your real evidence before publishing.
 */
export const dash: Project = {
  slug: "dash",
  title: "Dash",
  hook: "Hydration designed into the hike, not clipped onto it — water access that never breaks your stride.",
  category: "industrial",
  tags: ["Industrial Design", "Soft Goods", "Outdoor"],
  cover: "/images/projects/dash/cover.svg",
  coverAlt: "Dash hydration system integrated into a hiking pack strap",
  order: 4,

  role: "Sole designer — field research, soft-goods construction, hardware, testing",
  team: "Solo",
  timeline: "8 weeks · Fall 2024",
  tools: ["Field observation", "Pattern-making", "Sewn prototypes", "Rhino"],
  projectType: "Studio project",

  tldr: "On the trail, drinking water is a decision — stop, unclip, unscrew, repack — so hikers postpone it and under-hydrate. I logged water breaks across my own fourteener climbs and group hikes, found that drinking frequency collapsed exactly when effort (and need) peaked, and designed Dash: hydration built into the pack's load-bearing geometry with a magnetically docked, one-hand mouthpiece at the collarbone. Testing showed drinking became a non-event — no stopping, no thinking.",

  context: [
    {
      type: "text",
      body: [
        "Hydration gear treats drinking as an accessory problem: a bottle in a side pocket you can't reach, or a bladder hose that flops, freezes, and tastes like plastic. On steep sections — where hydration matters most — reaching for water means breaking rhythm, so people don't. On my logged hikes, water breaks nearly vanished on the climbs and clustered at summits and flats: hydration was happening on the terrain's schedule, not the body's.",
        "The insight that reframed the project: this isn't a bottle problem, it's an interruption problem. The product to design wasn't a container. It was a gesture — one that costs nothing mid-stride.",
      ],
    },
  ],

  process: [
    {
      heading: "Field research on the trail",
      blocks: [
        {
          type: "text",
          body: [
            "I treated my own backpacking trips and group day-hikes as field studies, logging every drink: when, terrain, whether the hiker stopped, and what they did with their hands. The pattern was blunt — if drinking required a stop, it waited for a 'legitimate' stopping point. Existing hose systems solved the stop but failed on everything around it: the dangling hose snags, the bite valve drips, and refilling means unpacking.",
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/dash/research-1.svg",
            alt: "Trail log charting drink events against terrain steepness",
            caption: "Drink events plotted against terrain. The empty band on the climbs is the problem statement in one image.",
          },
          size: "wide",
        },
      ],
    },
    {
      heading: "Building hydration into the load path",
      blocks: [
        {
          type: "text",
          body: [
            "Instead of adding a reservoir to a pack, I reshaped the pack around water: twin low-profile cells sit against the back panel where the load should ride anyway, so water weight becomes ballast instead of cargo. The drinking interface is a short, rigid stem that docks magnetically at the collarbone strap — findable by feel, one hand, eyes on the trail.",
          ],
        },
        {
          type: "gallery",
          figures: [
            {
              src: "/images/projects/dash/sketches-1.svg",
              alt: "Sketches integrating water cells into pack load geometry",
              caption: "Load-path sketches: water placed where a pack wants mass, not where a pocket happens to be.",
            },
            {
              src: "/images/projects/dash/prototype-1.svg",
              alt: "Sewn prototype with magnetic collarbone dock",
              caption: "Sewn prototype #2. The magnetic dock earned its place here — testers re-docked it without looking on the first try.",
            },
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/dash/prototype-2.svg",
            alt: "Trail testing the Dash prototype on a steep section",
            caption: "Trail test on a sustained climb — the test that mattered: does drinking happen while moving? It did.",
          },
          size: "full",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "Reshape the pack, not the bottle",
      decision: "I integrated water into the pack's structure rather than designing another container to attach.",
      tradeoff: "This makes Dash a pack system, not a universal accessory — a smaller market and a harder sell. But every accessory-level fix inherits the interruption problem. Owning the whole load path is what makes the zero-cost gesture possible.",
    },
    {
      title: "A rigid stem instead of a hose",
      decision: "The mouthpiece rides on a short rigid stem that docks magnetically, replacing the classic floppy hose.",
      tradeoff: "The stem has less reach — you bring your head to it, not it to your mouth. In exchange it can't snag, can't dangle, always returns to the same findable spot, and drains back to prevent freezing. Testers adapted to the reach in minutes; nobody re-adapted to a swinging hose.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "The final Dash prototype is a daypack with structural water cells, a magnetically docked drinking stem, and a top-loading refill port that works without unpacking. Drinking while hiking became a glance-free, sub-two-second gesture.",
        ],
      },
      {
        type: "figure",
        figure: {
          src: "/images/projects/dash/final-1.svg",
          alt: "Final Dash pack prototype, front and side views",
          caption: "Final prototype. The water system is invisible at arm's length — the design goal was for Dash to read simply as a good pack.",
        },
        size: "full",
      },
    ],
    results: [
      "In trail testing, drink frequency on climbs rose dramatically compared to participants' bottle setups — drinking stopped waiting for flat ground.",
      "Every tester re-docked the stem one-handed without looking by the end of their first hour.",
    ],
    learned: "Log the behavior before trusting the category. 'Hydration' framed as containers had me sketching bottles for a week. The trail log reframed it as interruptions, and the whole design followed from that one reframe. Field data is cheap; category assumptions are expensive.",
  },
};
