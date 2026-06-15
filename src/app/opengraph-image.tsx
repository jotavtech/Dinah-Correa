import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f5ef",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          color: "#171717",
          border: "16px solid #1f1f1f",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#b8904a",
              fontFamily: "sans-serif",
              fontWeight: 600,
            }}
          >
            {`Cartório · ${siteConfig.city}`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 1.02, fontWeight: 700 }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              color: "#2a2a2a",
              maxWidth: 900,
              fontFamily: "sans-serif",
            }}
          >
            Segurança jurídica, atendimento claro e tradição a serviço da sua
            história.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 26,
            color: "#74706a",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ display: "flex" }}>{siteConfig.serviceModes}</div>
          <div style={{ display: "flex", color: "#b8904a" }}>•</div>
          <div style={{ display: "flex" }}>{siteConfig.hoursShort}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
