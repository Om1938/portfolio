import React from "react";
import { ImageResponse } from "@vercel/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// export const runtime = "edge";
export const alt = "Om Prakash Das - Senior Software Engineer";
export const size = {
  width: 1200,
  height: 675,
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
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom right, #0f172a, #1e1b4b)",
          fontFamily: "Inter",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blobs */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "60%",
            background:
              "radial-gradient(circle at top right, rgba(124, 58, 237, 0.06), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "70%",
            height: "70%",
            background:
              "radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.07), transparent 70%)",
          }}
        />

        {/* Grid */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            width: "90%",
            maxWidth: 1100,
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          {/* Left */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(79, 70, 229, 0.1)",
                color: "#a5b4fc",
                padding: "6px 12px",
                fontSize: 18,
                borderRadius: 4,
                marginBottom: 24,
                border: "1px solid rgba(79,70,229,0.2)",
                display: "flex",
              }}
            >
              Portfolio
            </div>

            <div
              style={{
                fontSize: 72,
                fontWeight: "bold",
                color: "white",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: 16,
                display: "flex",
              }}
            >
              <span>Om Prakash Das</span>
            </div>

            <div
              style={{
                fontSize: 40,
                fontWeight: "bold",
                background:
                  "linear-gradient(to right, #4f46e5, #8b5cf6, #3b82f6)",
                backgroundClip: "text",
                color: "transparent",
                marginBottom: 24,
                display: "flex",
              }}
            >
              Senior Software Engineer
            </div>

            <div
              style={{
                fontSize: 22,
                color: "#94a3b8",
                maxWidth: 600,
                marginBottom: 32,
                lineHeight: 1.5,
                display: "flex",
              }}
            >
              Building modern web apps with React, Next.js, and TypeScript.
              Focused on creating beautiful and performant user experiences.
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {["Frontend", "Backend", "React", "Next.js"].map((skill) => (
                <div
                  key={skill}
                  style={{
                    backgroundColor: "rgba(30,41,59,0.7)",
                    padding: "8px 16px",
                    color: "#cbd5e1",
                    fontSize: 18,
                    borderRadius: 9999,
                    border: "1px solid rgba(71,85,105,0.4)",
                    display: "flex",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 20,
              backgroundColor: "rgba(30,41,59,0.5)",
              border: "1px solid rgba(71,85,105,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: 64,
                fontWeight: "bold",
                color: "#a5b4fc",
                display: "flex",
              }}
            >
              {"</>"}
            </div>

            {/* Dots wrapper */}
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                display: "flex",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#ef4444",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#f59e0b",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          weight: 600,
          style: "normal",
        },
      ],
    }
  );
}
