# Quinn Burns — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4. Homepage only for now; case studies come after the homepage direction is approved.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (static)
```

Deploys to Vercel as-is (import the repo, no settings needed).

## Where things live

```
content/
  site.ts          name, hero copy, contact links, nav
  projects.ts      featured projects (order = homepage order), explorations, digital work
lib/types.ts       content types (Media, FeaturedProject, Exploration)
components/
  SiteNav          top navigation
  Hero             typographic hero
  GalleryTile      image + title + subtitle, one link; hover tightens the frame and reveals the description
  HoverVideo       optional hover loop (plays on hover/focus, never under reduced motion)
  WorkGallery      Selected Work: two-column gallery (feature tiles)
  ProjectMedia     image / video / labelled placeholder, one component
  ExplorationGallery  More Explorations (not rendered for now — see app/page.tsx)
  DigitalWork      ruled list + image for digital/research work
  TextLink, SiteFooter
app/
  layout.tsx       font, metadata, JSON-LD
  page.tsx         homepage composition
  globals.css      design tokens (@theme) + small component classes
  fonts/           Schibsted Grotesk variable (OFL), self-hosted
```

### Editing content

- **Reorder featured work:** reorder the `featured` array (fills left → right, two per row). Tiles are 4:5; set `ratio` on a project to override.
- **Swap a placeholder for a real image:** change `media` from `{ kind: "placeholder", … }` to `{ kind: "image", src, alt, width, height }`. Put files in `public/work/<slug>/` and use `src: "/work/<slug>/hero.jpg"`.
- **Video:** `{ kind: "video", src: "/work/<slug>/loop.mp4", poster, alt, width, height }` — plays muted and looped.
- **Hover image or loop (optional):** add `hoverMedia: { kind: "image" | "video", … }` to a featured project; it fades in over the main image on hover.
- **Crop control:** `focus: "50% 40%"` moves the crop; `fit: "contain"` stops posters/graphics from being cropped.

### Images

Current images load from the Wix CDN (`static.wixstatic.com`, allowed in `next.config.ts`). Before launch, download originals into `public/` and remove the remote pattern so the site doesn't depend on Wix.

## Design system

| Token | Value | Use |
|---|---|---|
| ivory | `#F7F6F2` | page |
| charcoal | `#292B28` | text, rules |
| stone | `#E9E6DF` | media ground, placeholders |
| taupe | `#C7C1B7` | secondary rules |
| sage | `#72877D` | focus ring, project-number hover only |
| graphite | `#5E605B` | secondary text (derived, AA on ivory) |

Type: Schibsted Grotesk only. Display 700 at up to 188px, titles 600, body 400 at 17px, metadata 13px, labels 11px caps.

## Case studies

Route: `/work/<slug>` (static). Each case study is one data file in `content/case-studies/` — hero, facts, disclaimer, chapters and blocks — registered in `content/case-studies/index.ts`.

- **Chapters** drive the sidebar: `{ id, label, blocks }`. The `id` is the anchor (`/work/aerosense#design`).
- **Blocks:** `statement`, `split`, `image` (`wide` | `bleed`), `gallery`, `mediaText`, `annotated`, `devices`, `sequence`, `film`, `interactive`, `subsection`, `credits`. Types live in `lib/case-study-types.ts`.
- **Draft copy:** start any string with `TK` and it renders with a small sage "TK" tag, so unwritten text is always visible as such.
- **Missing assets:** use a `placeholder` media item with a label and spec; it renders as a labelled frame.
- **Navigation:** `components/case-study/CaseStudyNavigation.tsx` — sticky sidebar on desktop (≥1024px), sticky horizontal strip below that. Active chapter via IntersectionObserver; `aria-current="location"`.
- **Film:** `film` block is click-to-play; set `src` when the video file is in `public/`.
