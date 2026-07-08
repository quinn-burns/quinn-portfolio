"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Project, ProjectCategory } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

type Filter = "all" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "industrial", label: "Industrial Design" },
  { id: "ux", label: "UX & UI" },
];

/**
 * Client-side, instant filtering with the state reflected in the URL
 * (/?filter=ux) so filtered views are shareable links.
 */
export function WorkGrid({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const raw = searchParams.get("filter");
  const active: Filter =
    raw === "industrial" || raw === "ux" ? raw : "all";

  function setFilter(next: Filter) {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "all") params.delete("filter");
    else params.set("filter", next);
    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}`, {
      scroll: false,
    });
  }

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={active === f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full border px-4 py-2 text-label font-medium uppercase transition-colors ${
              active === f.id
                ? "border-terracotta-deep bg-terracotta-deep text-cream"
                : "border-linen bg-transparent text-stone hover:border-terracotta hover:text-terracotta-deep"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
        {visible.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={(i % 2) * 80}>
              <ProjectCard project={project} priority={i < 2} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
