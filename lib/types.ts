/**
 * Content types. Everything the homepage shows comes from /content —
 * components only decide how it is laid out.
 */

export type Media =
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      /** CSS object-position, e.g. "50% 40%", for crops inside fixed frames */
      focus?: string;
      /** "contain" for posters/graphics that must not be cropped */
      fit?: "cover" | "contain";
    }
  | {
      kind: "video";
      src: string;
      poster?: string;
      alt: string;
      width: number;
      height: number;
      /** false = play once and hold the last frame (replays when scrolled back into view) */
      loop?: boolean;
    }
  | {
      /** Visible, labelled stand-in for an asset that does not exist yet */
      kind: "placeholder";
      label: string;
      spec: string;
      width: number;
      height: number;
    };

/**
 * A featured project on the homepage gallery. The homepage shows only the
 * image, title and subtitle; `caseStudy` holds detail for the project page.
 */
export type FeaturedProject = {
  slug: string;
  title: string;
  subtitle: string;
  /** One sentence that replaces the subtitle on hover / keyboard focus */
  description: string;
  /** Two short category labels shown over the image (on hover with a pointer, always on touch) */
  tags?: string[];
  media: Media;
  /** Optional real alternate image or loop that fades in on hover (never invented) */
  hoverMedia?: Media;
  /** Frame ratio (w / h) for the homepage tile. Defaults to the image’s own proportions. */
  ratio?: number;
  href?: string;
  external?: boolean;
  /** Not shown on the homepage — kept for the case study pages */
  caseStudy?: {
    summary: string;
    meta: { label: string; value: string }[];
    images?: string[];
  };
};

export type Exploration = {
  slug: string;
  title: string;
  line: string;
  discipline: string;
  media: Media;
  href?: string;
  credit?: string;
};
