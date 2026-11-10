import type { Media } from "@/lib/types";
import { ProjectMedia } from "./ProjectMedia";

type Props = {
  intro: string;
  items: { title: string; detail?: string }[];
  media: Media;
};

/** Digital + research work: a ruled list beside one image. */
export function DigitalWork({ intro, items, media }: Props) {
  return (
    <div className="grid-12 gap-y-8">
      <div className="col-span-4 md:col-span-5">
        <h3 className="text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          Digital interfaces + research
        </h3>
        <p className="mt-3 max-w-[38ch] text-body text-graphite">{intro}</p>
        <ul className="mt-8 border-t border-taupe">
          {items.map((i) => (
            <li key={i.title} className="flex items-baseline justify-between gap-4 border-b border-taupe py-3 text-meta">
              <span className="font-medium">{i.title}</span>
              {i.detail && <span className="text-right text-graphite">{i.detail}</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-4 md:col-span-6 md:col-start-7">
        <ProjectMedia media={media} ratio={7 / 5} sizes="(min-width: 768px) 46vw, 92vw" />
      </div>
    </div>
  );
}
