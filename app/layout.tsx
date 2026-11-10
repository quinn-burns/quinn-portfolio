import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
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
  title: { default: `${site.name} — Industrial + Digital Designer`, template: `%s — ${site.name}` },
  description: site.seoDescription,
  openGraph: {
    type: "website",
    url: site.url,
    title: site.name,
    description: site.seoDescription,
  },
  twitter: { card: "summary_large_image" },
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
