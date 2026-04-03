"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-14 space-y-3">
      <p
        className="text-sm font-semibold uppercase tracking-[0.2em]"
        style={{ color: "var(--accent-blue)" }}
      >
        {eyebrow}
      </p>
      <h2
        className="text-3xl font-bold sm:text-4xl"
        style={{
          fontFamily: "var(--font-display-var), sans-serif",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="max-w-2xl text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
