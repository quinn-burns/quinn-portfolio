import { ImageResponse } from "next/og";

export const alt = "Quinn Burns — Designing what's next";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
            fontSize: 28,
            color: "#9c421e",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Quinn Burns · Industrial & UX Design
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 96,
              color: "#2a211b",
              lineHeight: 1.05,
              fontStyle: "italic",
            }}
          >
            Designing what&rsquo;s next.
          </div>
          <div
            style={{
              display: "flex",
              width: 340,
              height: 10,
              marginTop: 28,
              borderRadius: 5,
              background: "#c05b35",
            }}
          />
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#64584c" }}>
          quinn-burns.com
        </div>
      </div>
    ),
    size
  );
}
