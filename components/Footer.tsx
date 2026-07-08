import { IconMail, IconLinkedIn, IconInstagram } from "./Icons";

const socials = [
  {
    href: "mailto:quinn.burns.p2p@gmail.com",
    label: "quinn.burns.p2p@gmail.com",
    Icon: IconMail,
  },
  {
    href: "https://www.linkedin.com/in/quinnburns",
    label: "LinkedIn",
    Icon: IconLinkedIn,
  },
  {
    href: "https://www.instagram.com/made.by.quinn_",
    label: "@made.by.quinn_",
    Icon: IconInstagram,
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-linen bg-sand/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-display text-heading font-medium text-ink">
          Let&rsquo;s push what&rsquo;s possible,{" "}
          <span className="underline-sketch">together</span>.
        </p>
        <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          {socials.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="inline-flex items-center gap-2 text-caption font-medium text-stone transition-colors hover:text-terracotta-deep"
              >
                <Icon className="text-[1.1rem] text-terracotta-deep" />
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-label uppercase text-taupe">
          © {new Date().getFullYear()} Quinn Burns · Designed &amp; built by me
        </p>
      </div>
    </footer>
  );
}
