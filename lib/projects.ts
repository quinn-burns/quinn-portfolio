import type { Project } from "./types";
import { mise } from "@/content/projects/mise";
import { leftiesKitchen } from "@/content/projects/lefties-kitchen";
import { memomir } from "@/content/projects/memomir";
import { dash } from "@/content/projects/dash";
import { soleaMargot } from "@/content/projects/solea-margot";
import { forage } from "@/content/projects/forage";
import { ripple } from "@/content/projects/ripple";

/**
 * To add a project: create content/projects/<slug>.ts (copy an existing one),
 * import it above, and add it to this array. Order in the grid comes from
 * each project's `order` field. Full walkthrough in the README.
 */
const all: Project[] = [
  mise,
  leftiesKitchen,
  memomir,
  dash,
  soleaMargot,
  forage,
  ripple,
];

export const projects: Project[] = [...all].sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Prev/next for the case-study pager, wrapping around at the ends. */
export function getAdjacentProjects(slug: string): {
  prev: Project;
  next: Project;
} {
  const i = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return { prev, next };
}

export const categoryLabels: Record<Project["category"], string> = {
  industrial: "Industrial Design",
  ux: "UX & UI",
};
