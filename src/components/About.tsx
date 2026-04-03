"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";

const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "3", label: "Companies" },
  { value: "6+", label: "Engineers mentored" },
];

const softSkills = [
  "Problem Solver",
  "Team Mentor",
  "Systems Thinker",
  "UI Craftsman",
  "Detail Oriented",
  "Fast Learner",
];

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Crafting software with purpose"
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — Bio */}
        <motion.div
          variants={slideInLeft}
          className="flex flex-col justify-between gap-8"
        >
          <div className="space-y-5">
            <p
              className="text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m a Senior Software Engineer based in India, building
              software since January 2019. Over 6+ years I&apos;ve worked across
              startups and global enterprises — from mentoring engineers at
              Infosys to leading frontend architecture at Carestack.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I specialize in React ecosystems, design systems, and creating
              interfaces that feel as good as they look. I care deeply about
              accessibility, performance, and developer experience.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Outside of work, I enjoy mentoring junior engineers and writing
              about TypeScript patterns, animation techniques, and frontend
              architecture.
            </p>
          </div>

          {/* Soft skills */}
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-200"
                style={{
                  borderColor: "var(--border-subtle)",
                  color: "var(--text-secondary)",
                  backgroundColor: "var(--bg-card)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — Avatar + stats */}
        <motion.div variants={slideInRight} className="flex flex-col gap-8">
          {/* Avatar card */}
          <div
            className="flex flex-col items-center rounded-2xl border p-8 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left"
            style={{
              borderColor: "var(--border-subtle)",
              backgroundColor: "var(--bg-card)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Initials avatar */}
            <div
              className="mb-4 flex h-28 w-28 shrink-0 items-center justify-center rounded-full text-3xl font-bold text-white shadow-xl sm:mb-0"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
              }}
              aria-label="Om Prakash Das initials avatar"
            >
              OPD
            </div>
            <div>
              <h3
                className="text-lg font-semibold"
                style={{
                  fontFamily: "var(--font-display-var), sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                Om Prakash Das
              </h3>
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Senior Software Engineer
              </p>
              <p
                className="mt-1 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                KLE Technological University, 2019
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="flex flex-col items-center rounded-xl border p-4 text-center"
                style={{
                  borderColor: "var(--border-subtle)",
                  backgroundColor: "var(--bg-card)",
                }}
              >
                <span
                  className="text-2xl font-bold sm:text-3xl"
                  style={{
                    fontFamily: "var(--font-display-var), sans-serif",
                    background:
                      "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="mt-1 text-xs leading-tight"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
