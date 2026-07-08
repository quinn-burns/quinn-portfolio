"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-linen bg-cream/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-ink transition-colors hover:text-terracotta-deep"
        >
          Quinn Burns
        </Link>
        <ul className="flex items-center gap-6 sm:gap-8">
          {links.map((link) => {
            const active =
              !link.external &&
              (link.href === "/about"
                ? pathname === "/about"
                : pathname.startsWith("/work"));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`text-label font-medium uppercase transition-colors hover:text-terracotta-deep ${
                    active && link.label === "About"
                      ? "text-terracotta-deep"
                      : "text-stone"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
