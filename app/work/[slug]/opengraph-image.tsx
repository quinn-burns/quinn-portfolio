import { ImageResponse } from "next/og";
import { getProject, projects } from "@/lib/projects";
import { categoryLabels } from "@/lib/projects";

export const alt = "Case study — Quinn Burns";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? "Quinn Burns";
  const hook = project?.hook ?? "";
  const category = project ? categoryLabels[project.category] : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf7f1",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#9c421e",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {category}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              color: "#2a211b",
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#64584c",
              marginTop: 24,
              lineHeight: 1.4,
              maxWidth: 950,
            }}
          >
            {hook}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#64584c" }}>
            quinn-burns.com
          </div>
          <div
            style={{
              display: "flex",
              width: 220,
              height: 10,
              borderRadius: 5,
              background: "#c05b35",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
