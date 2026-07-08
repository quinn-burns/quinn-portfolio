import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAdjacentProjects, getProject, projects } from "@/lib/projects";
import { CaseStudy } from "@/components/CaseStudy";
import { Pager } from "@/components/Pager";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.hook,
    openGraph: {
      title: `${project.title} — Quinn Burns`,
      description: project.hook,
    },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div className="mx-auto max-w-6xl">
      <CaseStudy project={project} />
      <Pager prev={prev} next={next} />
    </div>
  );
}
