/**
 * About page content.
 *
 * PASTE YOUR CURRENT ABOUT COPY into `intro` below — it's written in your
 * voice and that authenticity is the point. The placeholder paragraphs just
 * hold the layout open. Scrapbook captions are yours to rewrite too.
 */

export const about = {
  title: "About",
  /** Each string is one paragraph. Replace with your real about copy. */
  intro: [
    "[PASTE YOUR ABOUT COPY HERE — paragraph one. This placeholder holds the layout: a short, warm introduction in your own voice about who you are and how you got here.]",
    "[Paragraph two — what you work on and what pulls you: industrial design, UX, research, the itch to rethink products and systems.]",
    "[Paragraph three — optional. Where you're headed, what you're looking for, or an invitation to reach out.]",
  ],
  scrapbookHeading: "Off the desk",
  scrapbookIntro:
    "The stuff that keeps my hands busy and my head clear — most of it feeds back into the work eventually.",
  /** Scrapbook photos: swap the .svg placeholders for real photos (jpg/png)
   *  in public/images/about/ and update src + caption. */
  scrapbook: [
    {
      src: "/images/about/fourteeners.svg",
      alt: "Summit of a Colorado fourteener",
      caption: "Collecting 14ers one alpine start at a time.",
    },
    {
      src: "/images/about/sourdough.svg",
      alt: "A fresh sourdough loaf",
      caption: "Sourdough: my longest-running iterative design project.",
    },
    {
      src: "/images/about/alaska.svg",
      alt: "Backpacking in Alaska",
      caption: "Backpacking Alaska — where the gear opinions come from.",
    },
    {
      src: "/images/about/guitar.svg",
      alt: "Playing guitar",
      caption: "Guitar, badly but happily.",
    },
    {
      src: "/images/about/ubicomp.svg",
      alt: "Presenting research at ACM UbiComp/ISWC",
      caption: "Presenting our mental health app research at ACM UbiComp/ISWC.",
    },
  ],
};
