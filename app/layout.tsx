import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import "./globals.css";

// Schibsted Grotesk (Schibsted / Bakken & Bæck, OFL), self-hosted variable font.
const grotesk = localFont({
  src: "./fonts/SchibstedGrotesk-Variable.woff2",
  weight: "400 900",
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...pageMeta({
    title: `${site.name} — ${site.descriptor}`,
    description: site.seoDescription,
    path: "/",
    image: "/og/home.png",
    imageAlt: "Quinn Burns — Designing what’s next. Industrial Design · Physical + Digital Experiences.",
  }),
  title: { default: `${site.name} — ${site.descriptor}`, template: `%s — ${site.name}` },
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: { title: site.name, statusBarStyle: "default" },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = { themeColor: "#f7f6f2", colorScheme: "light" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.descriptor,
    affiliation: { "@type": "CollegeOrUniversity", name: "Georgia Institute of Technology" },
    sameAs: [site.linkedin, site.instagram],
  };

  return (
    <html lang="en" className={grotesk.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-charcoal focus:px-3 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
