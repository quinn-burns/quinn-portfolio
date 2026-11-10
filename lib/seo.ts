import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Shared page metadata. Next.js replaces (not merges) a parent's `openGraph`
 * and `twitter` objects, so every page builds its complete set here.
 * Relative URLs resolve against `metadataBase` (site.url) and are emitted absolute.
 */
export const shareImage = { width: 1200, height: 630 } as const;

type PageMeta = {
  /** Full document title (not run through the layout template). */
  title: string;
  description: string;
  /** Path from the site root, e.g. "/about". */
  path: string;
  /** Path to a 1200×630 PNG or JPEG in /public/og. */
  image: string;
  imageAlt: string;
  type?: "website" | "article" | "profile";
};

export function pageMeta({ title, description, path, image, imageAlt, type = "website" }: PageMeta): Metadata {
  const imageType = image.endsWith(".png") ? "image/png" : "image/jpeg";
  const images = [{ url: image, alt: imageAlt, type: imageType, ...shareImage }];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: "en_US",
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
