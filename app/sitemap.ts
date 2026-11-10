export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...Object.keys(caseStudies).map((slug) => ({
      url: `${site.url}/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
