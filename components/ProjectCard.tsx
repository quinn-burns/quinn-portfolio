import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta-deep"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 45vw, 92vw"
          className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-subheading font-medium text-ink transition-colors group-hover:text-terracotta-deep">
          {project.title}
        </h3>
        <p className="mt-1 text-caption text-stone">{project.hook}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={`rounded-full px-3 py-1 text-label uppercase ${
                project.category === "industrial"
                  ? "bg-terracotta-wash text-terracotta-deep"
                  : "bg-sage-wash text-sage-deep"
              }`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
