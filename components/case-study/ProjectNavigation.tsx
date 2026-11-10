import Link from "next/link";
import { site } from "@/content/site";

/**
 * Shared end-of-case-study navigation, identical on every project page.
 * Primary: back to the homepage gallery. Secondary: email.
 */
export function ProjectNavigation({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Project navigation" className={`frame ${className}`}>
      <ul className="project-nav">
        <li>
          <Link href="/#work" className="project-nav-link group">
            <span aria-hidden="true" className="project-nav-arrow project-nav-arrow--back">←</span>
            <span className="draw-line pb-0.5">Back to all work</span>
          </Link>
        </li>
        <li>
          <a href={`mailto:${site.email}`} className="project-nav-link project-nav-link--secondary group">
            <span className="draw-line pb-0.5">Get in touch</span>
            <span aria-hidden="true" className="project-nav-arrow project-nav-arrow--out">↗</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
