import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = `${portfolio.personal.name} — ${portfolio.personal.role} portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { personal } = portfolio;
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#111211",
        color: "#efefe8",
        width: "100%",
        height: "100%",
        padding: "64px 76px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
        }}
      >
        <span>{personal.name}.</span>
        <span style={{ color: "#c5ee83" }}>
          {personal.role.toUpperCase()} / PORTFOLIO
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 92,
          letterSpacing: "-5px",
          lineHeight: 1.05,
        }}
      >
        <span>
          {personal.headline.opening} {personal.headline.subject}
        </span>
        <span style={{ color: "#c5ee83" }}>
          {personal.headline.closing} {personal.headline.accent}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #3a3d36",
          paddingTop: 24,
          fontSize: 20,
          color: "#a7aaa1",
        }}
      >
        SELECTED WORK · ENGINEERING DECISIONS · THE PERSON BEHIND THE CODE
      </div>
    </div>,
    size,
  );
}
