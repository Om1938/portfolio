import React from "react";
import { ImageResponse } from "@vercel/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// export const runtime = "edge";

export const alt = "Thank You | Message Received";
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
          fontSize: 64,
          background: "linear-gradient(to bottom, #1a1a2e, #16213e)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Inter"',
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(79, 70, 229, 0.2)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.2)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            borderRadius: "60px",
            background: "rgba(79, 70, 229, 0.2)",
            marginBottom: "40px",
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            style={{ color: "#8b5cf6" }}
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
            background: "linear-gradient(to right, #4f46e5, #8b5cf6)",
            backgroundClip: "text",
            color: "transparent",
            fontSize: 80,
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
            display: "flex",
          }}
        >
          Thank You!
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#94a3b8",
            maxWidth: "800px",
            textAlign: "center",
            display: "flex",
          }}
        >
          Your message has been received and will be responded to shortly
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#e2e8f0",
              marginRight: "10px",
              display: "flex",
            }}
          >
            Portfolio of Om Prakash Das
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
