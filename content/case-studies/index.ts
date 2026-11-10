import type { CaseStudy } from "@/lib/case-study-types";
import { aerosense } from "./aerosense";
import { melo } from "./melo";
import { mise } from "./mise";
import { memomir } from "./memomir";

/** Every published case study, by slug. Add new projects here. */
export const caseStudies: Record<string, CaseStudy> = {
  [aerosense.slug]: aerosense,
  [melo.slug]: melo,
  [mise.slug]: mise,
  [memomir.slug]: memomir,
};
