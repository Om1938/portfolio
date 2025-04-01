import React from "react";
import { ImageResponse } from "@vercel/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// // export const runtime = "edge";

export const alt = "Projects by Om Prakash Das | Web Development";
export const size = {
  width: 1200,
  height: 675, // Twitter prefers this aspect ratio
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
          background: "linear-gradient(135deg, #0f172a, #312e81)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Inter"',
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.1,
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Glow effects */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Main content container */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
            width: "85%",
            maxWidth: "1024px",
            zIndex: 10,
          }}
        >
          {/* Left text content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: 28,
                color: "#a5b4fc",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "flex",
              }}
            >
              PORTFOLIO
            </div>

            <div
              style={{
                fontSize: 64,
                fontWeight: "bold",
                color: "white",
                marginBottom: "20px",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span style={{ display: "flex" }}>Featured</span>
              <span
                style={{
                  display: "flex",
                  background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Projects
              </span>
            </div>

            <div
              style={{
                fontSize: 24,
                color: "#94a3b8",
                marginBottom: "32px",
                lineHeight: 1.5,
                maxWidth: "540px",
                display: "flex",
              }}
            >
              A collection of web and mobile applications showcasing expertise
              in modern technologies and UI/UX design.
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {["React", "Next.js", "TypeScript", "Node.js", "UI/UX"].map(
                (tech, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "rgba(30, 41, 59, 0.5)",
                      borderRadius: "4px",
                      padding: "8px 16px",
                      color: "#cbd5e1",
                      fontSize: 16,
                      border: "1px solid rgba(71, 85, 105, 0.4)",
                      display: "flex",
                    }}
                  >
                    {tech}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right project cards - using flex instead of grid */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "360px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              {/* Card 1 */}
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #3b82f6, #4f46e5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #a855f7, #db2777)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                >
                  <path
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
              }}
            >
              {/* Card 3 */}
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #10b981, #0d9488)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                >
                  <path
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Card 4 */}
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #f59e0b, #ea580c)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                >
                  <path
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom URL */}
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
              color: "#e2e8f0",
              fontSize: 16,
              display: "flex",
            }}
          >
            www.ompdas.com/projects
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
