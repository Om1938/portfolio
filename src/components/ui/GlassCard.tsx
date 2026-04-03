"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  animate?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
  animate = true,
}: GlassCardProps) {
  const cardStyle = {
    backgroundColor: "var(--bg-card)",
    borderColor: "var(--border-subtle)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  if (!animate) {
    return (
      <div
        style={cardStyle}
        className={`rounded-2xl border transition-colors duration-300 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay }}
      whileHover={
        hover
          ? { y: -4, transition: { duration: 0.2, ease: "easeOut" } }
          : undefined
      }
      style={cardStyle}
      className={`rounded-2xl border transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
