import type { Media } from "./types";

/**
 * Case study content model. A case study is data: a hero, a list of
 * chapters (which drive the sidebar), and blocks inside each chapter.
 * Components only decide how each block type is laid out.
 *
 * Draft convention: any string that starts with "TK" (editorial shorthand
 * for "to come") renders as a visibly marked placeholder, so unwritten copy
 * can never be mistaken for finished copy.
 */

export type Caption = string;

export type Block =
  /** Small label, a headline and an optional short paragraph — one column.
      `size: "large"` sets the headline as a pull statement. Blank lines in `body` start new paragraphs. */
  | { type: "statement"; label?: string; headline: string; body?: string; size?: "large" }
  /** Headline on the left, paragraph on the right */
  | { type: "split"; label?: string; headline: string; body: string }
  /** One image or video. `wide` = content width, `bleed` = runs to the page edges */
  /**
   * `pan`: a detailed diagram. On phones it keeps a readable width (in px) and
   * scrolls sideways, with a link to the full-size file.
   */
  | { type: "image"; media: Media; size?: "wide" | "bleed"; ratio?: number; caption?: Caption; pan?: number }
  /** Two or three images in a row; `ratios` lets each column have its own shape */
  | { type: "gallery"; items: { media: Media; caption?: Caption }[]; ratios?: number[] }
  /** Image or video beside text; `side` sets which side the media sits on */
  | { type: "mediaText"; media: Media; ratio?: number; side?: "left" | "right"; label?: string; headline: string; body?: string; caption?: Caption }
  /** Image with numbered callouts; x/y are percentages of the image */
  | { type: "annotated"; media: Media; ratio?: number; notes: { x: number; y: number; title: string; body?: string }[]; caption?: Caption }
  /** Interface recordings shown in device frames */
  | { type: "devices"; label?: string; headline?: string; items: { device: Device; media: Media; caption?: Caption; /** Link to the same screen in the live prototype */ href?: string }[] }
  /** A row of short points. Set `numbered` only when the order is real (steps, stages). */
  | { type: "sequence"; label?: string; headline?: string; numbered?: boolean; columns?: number; steps: { title: string; body?: string }[] }
  /** Click-to-play film with a poster frame */
  | { type: "film"; title: string; poster: Media; src?: string; ratio?: number; caption?: Caption }
  /** Live prototype inline (iframe) on tablet/desktop; poster + link on phones */
  | { type: "interactive"; title: string; src: string; poster: Media; ratio?: number; caption?: Caption }
  /** Visually distinct opener for a named part inside a chapter (e.g. HALO inside Design) */
  | { type: "subsection"; id: string; name: string; kicker: string; intro?: string }
  /** Behaviour → need → design response, one row per feature, each beside its detail image */
  | { type: "response"; items: { media: Media; ratio?: number; behavior: string; need: string; feature: string; detail?: string }[] }
  /** A dedicated award moment: the official badge (if any), the award set large, a short statement and a link to the listing */
  | { type: "recognition"; badge?: Media; title: string; distinction: string; body?: string; href?: string; linkLabel?: string }
  /** Team, partners and course credits */
  | { type: "credits"; groups: { label: string; lines: string[] }[] };

/** Device frames for interface media. "watch" expects an image that already includes the watch case. */
export type Device = "phone" | "phone-landscape" | "watch" | "screen" | "desktop";

export type Chapter = {
  /** Anchor id — also used in the URL hash */
  id: string;
  /** Label in the sidebar */
  label: string;
  blocks: Block[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  headline: string;
  intro: string;
  heroMedia: Media;
  heroRatio?: number;
  /** Small caption under the hero, e.g. to mark a render as a visualization */
  heroCaption?: string;
  facts: { label: string; value: string }[];
  disclaimer?: string;
  /** A verified award, shown quietly beneath the intro */
  recognition?: { title: string; distinction: string; href?: string };
  chapters: Chapter[];
  /** Slug of the featured project to preview at the end */
  next?: string;
  /** Closing moment used instead of a next-project preview (the last featured project) */
  seoDescription: string;
};
