import type { NextConfig } from "next";

// EXPORT=1 builds a static copy into /out (used for shareable previews).
const isExport = process.env.EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export" as const } : {}),
  images: {
    // Project imagery currently lives on the Wix CDN. Move files into /public
    // (or another host) later and remove this entry.
    remotePatterns: [{ protocol: "https", hostname: "static.wixstatic.com" }],
    formats: ["image/avif", "image/webp"],
    unoptimized: isExport,
  },
};

export default nextConfig;
