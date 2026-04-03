"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { experience } from "@/lib/data";
import { MapPin } from "lucide-react";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="Work History"
        title="Where I've worked"
        description="A career built across product startups and global enterprises, with a consistent focus on web performance and UI quality."
      />

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-6 top-0 hidden w-px md:block"
          style={{
            height: "calc(100% - 48px)",
            background:
              "linear-gradient(to bottom, var(--accent-blue), var(--accent-purple), transparent)",
            opacity: 0.4,
          }}
          aria-hidden="true"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-6"
        >
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Timeline dot */}
              <div className="relative hidden shrink-0 md:flex md:flex-col md:items-center">
                <div
                  className="z-10 mt-6 h-3 w-3 rounded-full border-2"
                  style={{
                    backgroundColor: job.current
                      ? "var(--accent-blue)"
                      : "var(--bg-base)",
                    borderColor: job.current
                      ? "var(--accent-blue)"
                      : "var(--accent-purple)",
                    boxShadow: job.current
                      ? "0 0 12px rgba(59,130,246,0.6)"
                      : "none",
                  }}
                />
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg group cursor-default"
                style={{
                  borderColor: "var(--border-subtle)",
                  backgroundColor: "var(--bg-card)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Header */}
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className="text-lg font-semibold"
                        style={{
                          fontFamily: "var(--font-display-var), sans-serif",
                          color: "var(--text-primary)",
                        }}
                      >
                        {job.role}
                      </h3>
                      {job.current && (
                        <span
                          className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <p
                      className="mt-0.5 flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: "var(--accent-blue)" }}
                    >
                      <MapPin size={12} strokeWidth={2} />
                      {job.company}
                    </p>
                  </div>
                  <span
                    className="shrink-0 rounded-lg border px-3 py-1 text-xs font-medium"
                    style={{
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-muted)",
                      backgroundColor: "var(--bg-base)",
                    }}
                  >
                    {job.period}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {job.description}
                </p>

                {/* Bullets */}
                <ul className="mb-5 space-y-2">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--accent-blue)" }}
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border px-2.5 py-1 text-xs font-medium"
                      style={{
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-muted)",
                        backgroundColor: "var(--bg-base)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
