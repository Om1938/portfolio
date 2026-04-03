"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { staggerContainer, scaleIn } from "@/lib/animations";
import { education } from "@/lib/data";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={scaleIn}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            className="group relative overflow-hidden rounded-2xl border p-6 transition-colors duration-300"
            style={{
              borderColor: "var(--border-subtle)",
              backgroundColor: "var(--bg-card)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Gradient top accent */}
            <div
              className="absolute left-0 top-0 h-0.5 w-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent-blue), var(--accent-purple))",
                opacity: idx === 0 ? 1 : 0.5,
              }}
              aria-hidden="true"
            />

            {/* Icon */}
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <GraduationCap
                size={22}
                strokeWidth={1.75}
                style={{ color: "var(--accent-blue)" }}
              />
            </div>

            {/* Content */}
            <h3
              className="mb-1 text-base font-semibold leading-snug"
              style={{
                fontFamily: "var(--font-display-var), sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {edu.degree}
            </h3>
            <p
              className="mb-3 text-sm font-medium"
              style={{ color: "var(--accent-blue)" }}
            >
              {edu.school}
            </p>

            {edu.note && (
              <p
                className="mb-3 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {edu.note}
              </p>
            )}

            <div
              className="flex items-center gap-1.5 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <Calendar size={12} strokeWidth={2} />
              {edu.period}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
