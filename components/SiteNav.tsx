import Link from "next/link";
import { nav, site } from "@/content/site";

export function SiteNav() {
  return (
    <header className="frame">
      <nav aria-label="Primary" className="grid-12 items-baseline py-5 md:py-7">
        <Link
          href="/"
          className="group col-span-2 text-[0.9375rem] font-medium tracking-[-0.01em] md:col-span-3"
        >
          <span className="draw-line pb-0.5">{site.name}</span>
        </Link>
        <ul className="col-span-2 flex justify-end gap-5 text-[0.9375rem] md:col-span-9 md:gap-8">
          {nav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="draw-line pb-0.5 text-graphite transition-colors duration-300 hover:text-charcoal"
              >
                {item.label}
                {item.external && <span className="sr-only"> (PDF, opens in a new tab)</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
