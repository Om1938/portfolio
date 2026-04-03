"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { staggerContainer, scaleIn } from "@/lib/animations";
import { skills } from "@/lib/data";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend & Data",
  tools: "Tools & Design",
};

const categoryOrder = ["frontend", "backend", "tools"] as const;

export function Skills() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Skills & technologies"
        description="Tools and technologies I use to build products that are fast, accessible, and maintainable."
      />

      <div className="space-y-10">
        {grouped.map(({ category, label, items }) => (
          <div key={category}>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              {label}
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-wrap gap-3"
            >
              {items.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.07,
                    y: -2,
                    transition: { duration: 0.15, ease: "easeOut" },
                  }}
                  className="cursor-default rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200"
                  style={{
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-secondary)",
                    backgroundColor: "var(--bg-card)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--accent-blue)";
                    el.style.color = "var(--text-primary)";
                    el.style.backgroundColor = "var(--bg-card-hover)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--border-subtle)";
                    el.style.color = "var(--text-secondary)";
                    el.style.backgroundColor = "var(--bg-card)";
                  }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
