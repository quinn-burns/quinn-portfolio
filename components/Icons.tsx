import type { SVGProps } from "react";

/**
 * A small set of hand-kept line icons (1.5px stroke, round caps) so the site
 * never leans on a stock icon library. All inherit currentColor and size
 * via width/height (default 1em).
 */
type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconUser(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.4-3.6 4-5.2 7-5.2s5.6 1.6 7 5.2" />
    </Base>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5c1.2-3 3.2-4.4 5.5-4.4s4.3 1.4 5.5 4.4" />
      <path d="M15.5 5.8a3 3 0 0 1 0 5.4" />
      <path d="M17.5 15.4c1.6.6 2.7 1.9 3.4 4.1" />
    </Base>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" />
    </Base>
  );
}

export function IconPencil(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 20l1.2-4.2L16.5 4.5a2 2 0 0 1 2.8 0l.2.2a2 2 0 0 1 0 2.8L8.2 18.8 4 20z" />
      <path d="M14.5 6.5l3 3" />
    </Base>
  );
}

export function IconTag(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3.5 12.2L12.2 3.5H20.5v8.3l-8.7 8.7a1.5 1.5 0 0 1-2.1 0l-6.2-6.2a1.5 1.5 0 0 1 0-2.1z" />
      <circle cx="16" cy="8" r="1.2" />
    </Base>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </Base>
  );
}

export function IconArrowLeft(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 12H4M10 6l-6 6 6 6" />
    </Base>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6.5 17.5L17.5 6.5M8.5 6.5h9v9" />
    </Base>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7.5L12 13l8.5-5.5" />
    </Base>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 13l4 4L19 7" />
    </Base>
  );
}

export function IconAsterisk(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 4v16M5.1 8l13.8 8M18.9 8L5.1 16" />
    </Base>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.94 8.9H4.1V20h2.84V8.9zM5.52 7.6a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3zM20 13.62c0-3.06-1.63-4.48-3.81-4.48-1.76 0-2.55.97-2.99 1.65V8.9h-2.84V20h2.84v-5.93c0-1.5.76-2.4 1.93-2.4 1.13 0 1.87.77 1.87 2.4V20H20v-6.38z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.5" fill="currentColor" stroke="none" />
    </Base>
  );
}
