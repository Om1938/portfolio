import React from "react";
import { ImageResponse } from "@vercel/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// export const runtime = "edge";

// Image metadata
export const alt = "Thank You | Message Received";
export const size = {
  width: 1200,
  height: 675, // Twitter prefers this aspect ratio
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const interSemiBold = await readFile(
    join(process.cwd(), "assets/Inter_18pt-SemiBold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #1e293b, #0f172a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Inter"',
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            right: "0",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(99, 102, 241, 0.3), transparent)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          }}
        />

        {/* Success icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.1)",
            marginBottom: "32px",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            style={{ color: "#3b82f6" }}
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          style={{
            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
            backgroundClip: "text",
            color: "transparent",
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "center",
            display: "flex",
          }}
        >
          Message Received
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            maxWidth: "800px",
            textAlign: "center",
            marginBottom: "48px",
            display: "flex",
          }}
        >
          Thank you for reaching out. I&apos;ll respond to your inquiry shortly.
        </div>

        {/* Bottom branding */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            padding: "12px 24px",
            borderRadius: "9999px",
            background: "rgba(15, 23, 42, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(71, 85, 105, 0.3)",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              marginRight: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            OD
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#e2e8f0",
              display: "flex",
            }}
          >
            Om Prakash Das | Portfolio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
