import type { Project } from "@/lib/types";

/**
 * Copy sourced from quinn-burns.com/solea-margot-heel — edited only to fit
 * the template.
 */
export const soleaMargot: Project = {
  slug: "solea-margot",
  title: "The Soléa Margot Heel",
  hook: "A heel designed to support you all day.",
  category: "industrial",
  tags: ["Footwear Design", "Anthropometric Design", "Fabrication"],
  cover: "/images/projects/solea-margot/cover.jpg",
  coverAlt: "The Soléa Margot Heel, hero shot",
  order: 7,

  role: "Designer & maker — research, 3D scanning, iteration, and fabrication",
  team: "Solo",
  tools: ["3D scanning", "Anthropometric measurement", "Wool felt", "Recycled wood", "Hand fabrication"],
  projectType: "Footwear design",

  tldr: "The Soléa Margot Heel blends style and support, with built-in arch support designed specifically for higher arches. It's made for people who love the look of modern heels but don't want to sacrifice comfort, stability, or wearability to get there. Designed from a 3D scan of a real foot outward, and fabricated by hand in wool felt and recycled wood. You shouldn't have to choose between beauty and comfort.",

  context: [
    {
      type: "text",
      body: [
        "Many modern heels prioritize appearance over the foot wearing them. Tall heels and pointed or square toes create a clean, minimal look, but often lack proper arch support and don't adapt well to different foot anatomies — especially higher arches. The result is a shoe that looks great but becomes uncomfortable quickly. The gap isn't style. It's support.",
        "Comfort in footwear doesn't come from padding alone — it comes from fit, structure, and alignment. Looking at existing heels, a few issues stood out: arch support is often ignored or added as an afterthought, many designs assume a \"standard\" foot shape, slingbacks often shift or gap while walking, and supportive shoes are rarely designed to look refined. Instead of designing a heel and hoping it fit, I focused on designing from the foot outward.",
      ],
    },
    {
      type: "quote",
      text: "How might a shoe be designed from the foot outward — without compromising style?",
      attribution: "The design question · Support · Fit · Stability · Proportion · Wearability",
    },
  ],

  process: [
    {
      heading: "Human-centered research",
      blocks: [
        {
          type: "text",
          body: [
            "I started by designing for a real foot (aka my own). Using anthropometric measurements and a 3D scan of my foot, I created a full-scale model that kept my high-arch anatomy central to every decision. This allowed me to test proportions, arch placement, and sole curvature early on, making sure support was built into the structure rather than added later.",
          ],
        },
        {
          type: "compare",
          left: {
            src: "/images/projects/solea-margot/research-1.png",
            alt: "3D scan of foot used as the design foundation",
            caption: "The 3D foot scan — every decision downstream answers to this anatomy.",
          },
          right: {
            src: "/images/projects/solea-margot/research-2.png",
            alt: "Full-scale foot model for testing proportions",
            caption: "The full-scale model used to test proportions, arch placement, and sole curvature early.",
          },
        },
      ],
    },
    {
      heading: "Ideation & sketch models",
      blocks: [
        {
          type: "text",
          body: [
            "I explored a wide range of heel forms, from bold blocks to more minimal shapes, always balancing visual weight with stability. I tested different toe box shapes and strap placements to find solutions that held the foot securely without feeling restrictive. Every iteration came back to the same goal: support, comfort, and a clean, modern look.",
            "Through paper and felt sketch models, I tested heel profiles from cylindrical to block forms and experimented with slingback and wrap-around uppers. Each round of iteration refined the proportions, construction, and cutout shapes. Through testing, I developed a flattened upper template and added two triangular notches instead of one, allowing the felt to wrap smoothly around the square toe and improve fit.",
          ],
        },
        {
          type: "gallery",
          figures: [
            {
              src: "/images/projects/solea-margot/ideation-1.png",
              alt: "Heel form exploration sketches",
              caption: "Heel forms from bold blocks to minimal shapes — visual weight vs. stability, every time.",
            },
            {
              src: "/images/projects/solea-margot/ideation-2.png",
              alt: "Heel variation studies",
              caption: "Toe box and strap placement studies: secure without restrictive.",
            },
          ],
        },
        {
          type: "gallery",
          figures: [
            {
              src: "/images/projects/solea-margot/sketch-models-1.jpg",
              alt: "Paper and felt sketch models",
              caption: "Paper and felt sketch models testing heel profiles from cylindrical to block.",
            },
            {
              src: "/images/projects/solea-margot/sketch-models-2.png",
              alt: "Sketch model detail of the upper",
              caption: "Refining the upper: the flattened template that came out of round after round of iteration.",
            },
            {
              src: "/images/projects/solea-margot/sketch-models-3.png",
              alt: "Sketch model detail of the notched template",
              caption: "Two triangular notches instead of one — the change that lets the felt wrap smoothly around the square toe.",
            },
          ],
        },
      ],
    },
    {
      heading: "Development & materials",
      blocks: [
        {
          type: "text",
          body: [
            "Sustainability is central to both Soléa and my own design values. I chose 100% wool felt for the upper and recycled wood for the sole. I hand-sanded the wooden sole to follow the natural curve of my foot and introduced a slight rocker to improve walking comfort and offset the rigidity of the wood. Using the final flat layout, I cut and assembled the felt upper, securing it with a blanket stitch for durability and structure.",
          ],
        },
        {
          type: "gallery",
          figures: [
            {
              src: "/images/projects/solea-margot/materials-1.png",
              alt: "Materials and construction overview",
              caption: "100% wool felt upper, recycled wood sole — sustainability as a structural choice, not a footnote.",
            },
            {
              src: "/images/projects/solea-margot/materials-2.png",
              alt: "Hand-sanded sole construction",
              caption: "The sole, hand-sanded to the foot's natural curve, with a slight rocker to offset the wood's rigidity.",
            },
            {
              src: "/images/projects/solea-margot/materials-3.png",
              alt: "Felt upper construction with blanket stitch",
              caption: "The felt upper assembled from the final flat layout, blanket-stitched for durability and structure.",
            },
          ],
        },
        {
          type: "figure",
          figure: {
            src: "/images/projects/solea-margot/packaging.jpg",
            alt: "Soléa packaging design",
            caption: "The packaging extends the product experience: intentional, sustainable, and minimal — good design carries through every detail.",
          },
          size: "wide",
        },
      ],
    },
  ],

  decisions: [
    {
      title: "Design from the foot outward",
      decision: "Instead of designing a heel and hoping it fit, I built the shoe around anthropometric measurements and a 3D scan of a real high-arched foot.",
      tradeoff: "Anchoring to one real anatomy trades universal sizing for genuine fit — and surfaced the arch, curvature, and proportion decisions that 'standard foot' assumptions hide.",
    },
    {
      title: "Two notches, not one",
      decision: "Testing led me to a flattened upper template with two triangular notches instead of one, letting the felt wrap smoothly around the square toe.",
      tradeoff: "A second notch complicates the template and the stitching. It was the difference between a clean wrap and a gapping fit — small change, disproportionate payoff.",
    },
    {
      title: "Wool felt and recycled wood",
      decision: "I chose 100% wool felt for the upper and recycled wood for the sole, hand-shaping a slight rocker into the sole to offset the wood's rigidity.",
      tradeoff: "Wood is rigid and unforgiving compared to molded foams; the hand-sanded curve and rocker exist precisely to buy back walking comfort without giving up the sustainable material story.",
    },
  ],

  outcome: {
    blocks: [
      {
        type: "text",
        body: [
          "The final design shapes the shoe around real foot anatomy, with built-in arch support that supports the foot throughout the day. From the sculpted sole to the structured upper, every detail is intentional and designed to move with the body. Soléa Margot shows what happens when footwear design starts with the foot.",
        ],
      },
      {
        type: "gallery",
        figures: [
          {
            src: "/images/projects/solea-margot/final-1.jpg",
            alt: "Final Soléa Margot Heel, product photo",
            caption: "The final heel: built-in arch support inside a clean, modern silhouette.",
          },
          {
            src: "/images/projects/solea-margot/final-2.jpg",
            alt: "Final Soléa Margot Heel, alternate view",
            caption: "The sculpted sole and structured upper, designed to move with the body.",
          },
          {
            src: "/images/projects/solea-margot/final-3.jpg",
            alt: "Final Soléa Margot Heel, detail",
            caption: "You shouldn't have to choose between beauty and comfort.",
          },
        ],
      },
    ],
  },
};
