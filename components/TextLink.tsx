import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

/** Text link whose underline draws in from the left on hover and focus. */
export function TextLink({ href, children, external, className = "" }: Props) {
  const ext = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} {...ext} className={`group inline-block ${className}`}>
      <span className="draw-line pb-0.5">{children}</span>
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </Link>
  );
}
