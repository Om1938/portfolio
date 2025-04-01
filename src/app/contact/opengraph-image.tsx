import React from "react";
import { ImageResponse } from "@vercel/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// // export const runtime = "edge";

export const alt = "Contact Om Prakash Das | Software Engineer";
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
          background: "linear-gradient(135deg, #0f172a, #4c1d95)",
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
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "300px",
            background: "linear-gradient(to top, rgba(0,0,0,0.2), transparent)",
            zIndex: 1,
          }}
        />

        {/* Gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: "flex",
            width: "90%",
            maxWidth: "1000px",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          {/* Left side - main content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: "550px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(99, 102, 241, 0.1)",
                borderRadius: "4px",
                padding: "6px 12px",
                color: "#a5b4fc",
                fontSize: 18,
                marginBottom: 16,
                border: "1px solid rgba(99, 102, 241, 0.2)",
                display: "flex",
              }}
            >
              GET IN TOUCH
            </div>

            <div
              style={{
                fontSize: 72,
                fontWeight: "bold",
                color: "white",
                lineHeight: 1.1,
                marginBottom: "24px",
                letterSpacing: "-0.025em",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span style={{ display: "flex" }}>Let&apos;s Start a</span>
              <span
                style={{
                  display: "flex",
                  background: "linear-gradient(to right, #818cf8, #c084fc)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Conversation
              </span>
            </div>

            <div
              style={{
                fontSize: 24,
                color: "#cbd5e1",
                marginBottom: "36px",
                lineHeight: 1.5,
                display: "flex",
              }}
            >
              Reach out for collaborations, opportunities, or just to say hello.
              I&apos;m always open to discussing new projects and ideas.
            </div>

            <div
              style={{
                background: "linear-gradient(to right, #4f46e5, #7c3aed)",
                padding: "14px 28px",
                borderRadius: "8px",
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                boxShadow:
                  "0 10px 15px -3px rgba(79, 70, 229, 0.2), 0 4px 6px -2px rgba(79, 70, 229, 0.1)",
                display: "flex",
              }}
            >
              Send a Message
            </div>
          </div>

          {/* Right side - contact details card */}
          <div
            style={{
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              padding: "32px",
              width: "300px",
              border: "1px solid rgba(71, 85, 105, 0.3)",
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "white",
                marginBottom: "24px",
                display: "flex",
              }}
            >
              Contact Details
            </div>

            {/* Email */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "12px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: "#818cf8" }}
                >
                  <path
                    d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    color: "#94a3b8",
                    marginBottom: "2px",
                    display: "flex",
                  }}
                >
                  Email
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "white",
                    display: "flex",
                  }}
                >
                  omkletu@gmail.com
                </div>
              </div>
            </div>

            {/* Location */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(99, 102, 241, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "12px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: "#818cf8" }}
                >
                  <path
                    d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    color: "#94a3b8",
                    marginBottom: "2px",
                    display: "flex",
                  }}
                >
                  Location
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "white",
                    display: "flex",
                  }}
                >
                  Trivandrum, Kerala, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Website URL */}
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
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: "#e2e8f0",
              display: "flex",
            }}
          >
            www.ompdas.com/contact
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
