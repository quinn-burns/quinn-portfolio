import type { Media } from "@/lib/types";
import { Frame } from "./Frame";

/**
 * A live, working prototype embedded in the page.
 *
 * Tablet and desktop: the prototype runs inline in an iframe (lazy-loaded, so
 * it only fetches when scrolled near). Phones: a poster and a link out, since
 * a prototype that itself shows a phone does not fit inside a phone screen.
 */
export function InteractiveEmbed({ title, src, poster, ratio = 16 / 10 }: { title: string; src: string; poster: Media; ratio?: number }) {
  return (
    <div>
      <div className="hidden overflow-hidden rounded-[clamp(12px,1.5vw,22px)] bg-[#eef0ee] md:block" style={{ aspectRatio: String(ratio), backgroundImage: poster.kind === "image" ? `url(${poster.src})` : undefined, backgroundSize: "cover", backgroundPosition: "center" }}>
        <iframe src={src} title={title} className="h-full w-full border-0" loading="lazy" />
      </div>
      <a href={src} target="_blank" rel="noopener noreferrer" className="embed-poster block md:hidden" aria-label={`Open the ${title} in a new tab`}>
        <Frame media={poster} ratio={ratio} sizes="94vw" />
      </a>
      <a href={src} target="_blank" rel="noopener noreferrer" className="group mt-3 inline-block text-[0.9375rem]">
        <span className="draw-line pb-0.5">Open the prototype in a new tab</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}
