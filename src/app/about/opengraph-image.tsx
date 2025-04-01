import React from "react";
import { ImageResponse } from "@vercel/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// // export const runtime = "edge";

export const alt = "About Om Prakash Das | Software Engineer";
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
          background: "linear-gradient(to bottom, #0f172a, #1e3a8a)",
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
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "50%",
            height: "100%",
            overflow: "hidden",
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Blue circle */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.2)",
            filter: "blur(80px)",
          }}
        />

        {/* Purple circle */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(124, 58, 237, 0.2)",
            filter: "blur(80px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#94a3fc",
              marginBottom: "16px",
              fontWeight: "bold",
              display: "flex",
            }}
          >
            GET TO KNOW ME
          </div>

          <div
            style={{
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              backgroundClip: "text",
              color: "transparent",
              fontSize: 72,
              fontWeight: "bold",
              marginBottom: "24px",
              letterSpacing: "-0.025em",
              display: "flex",
            }}
          >
            About Om Prakash Das
          </div>

          <div
            style={{
              width: "80px",
              height: "4px",
              marginBottom: "24px",
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              borderRadius: "2px",
            }}
          />

          <div
            style={{
              fontSize: 24,
              color: "#cbd5e1",
              maxWidth: "800px",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Senior Software Engineer with expertise in modern web technologies.
            Passionate about creating elegant, functional, and accessible web
            applications.
          </div>

          {/* Skills badges */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "36px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              "7+ Years Experience",
              "React Expert",
              "UI/UX",
              "Next.js",
              "TypeScript",
            ].map((skill, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "4px",
                  padding: "8px 16px",
                  color: "#e2e8f0",
                  fontSize: 16,
                  border: "1px solid rgba(71, 85, 105, 0.3)",
                  display: "flex",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom link */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            display: "flex",
            alignItems: "center",
            padding: "8px 16px",
            borderRadius: "4px",
            background: "rgba(15, 23, 42, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(71, 85, 105, 0.3)",
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: "#e2e8f0",
              display: "flex",
            }}
          >
            www.ompdas.com/about
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
