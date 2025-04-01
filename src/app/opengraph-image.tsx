import React from "react";
import { ImageResponse } from "@vercel/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// // export const runtime = "edge";

export const alt = "Om Prakash Das | Senior Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const interSemiBold = await readFile(
    join(process.cwd(), "assets/Inter_18pt-SemiBold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
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
        {/* Background elements */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)",
          }}
        />

        {/* Decorative code brackets */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "120px",
            transform: "translateY(-50%)",
            fontSize: "180px",
            fontWeight: "bold",
            color: "rgba(99, 102, 241, 0.1)",
            display: "flex",
          }}
        >
          {"<"}
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "120px",
            transform: "translateY(-50%)",
            fontSize: "180px",
            fontWeight: "bold",
            color: "rgba(99, 102, 241, 0.1)",
            display: "flex",
          }}
        >
          {"/>"}
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "80%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(to right, #4f46e5, #8b5cf6, #3b82f6)",
              backgroundClip: "text",
              color: "transparent",
              fontSize: 72,
              fontWeight: "bold",
              letterSpacing: "-0.05em",
              marginBottom: "20px",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            Om Prakash Das
          </div>

          <div
            style={{
              fontSize: 36,
              color: "#94a3b8",
              marginBottom: "32px",
              display: "flex",
            }}
          >
            Senior Software Engineer
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            {["React", "Next.js", "TypeScript", "UI/UX"].map((tag, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(79, 70, 229, 0.1)",
                  borderRadius: "9999px",
                  padding: "8px 16px",
                  color: "#a5b4fc",
                  fontSize: 20,
                  border: "1px solid rgba(79, 70, 229, 0.2)",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: 24,
              color: "#cbd5e1",
              maxWidth: "800px",
              display: "flex",
            }}
          >
            Building beautiful, user-friendly web experiences with modern
            technologies
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
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
              color: "#e2e8f0",
              fontSize: 20,
              display: "flex",
            }}
          >
            www.ompdas.com
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
