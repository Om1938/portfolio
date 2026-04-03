"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";
import { heroEntrance, heroStagger } from "@/lib/animations";
import { social } from "@/lib/data";

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: social.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: social.linkedin },
  { icon: XIcon, label: "Twitter / X", href: social.twitter },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax at different speeds — layer speed × scroll distance
  // speed 0.5 → moves 50% of scroll distance (far layer, slowest)
  // speed 0.35 → moves 35% (mid layer)
  // speed 0.2 → moves 20% (near layer, fastest relative to content)
  const blob1Y = useTransform(scrollY, [0, 900], [0, -450]);
  const blob2Y = useTransform(scrollY, [0, 900], [0, -315]);
  const blob3Y = useTransform(scrollY, [0, 900], [0, -180]);
  const textY  = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0 opacity-60" />

      {/* Parallax gradient layers — 3 depths moving at different speeds */}

      {/* Layer 1 — farthest, slowest, large soft blue bloom top-left */}
      <motion.div
        style={{ y: blob1Y }}
        className="pointer-events-none absolute -left-[10%] -top-[5%]"
        aria-hidden="true"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 0.96, 1.04, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0.05) 60%, transparent 80%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Layer 2 — mid depth, purple bloom top-right */}
      <motion.div
        style={{ y: blob2Y }}
        className="pointer-events-none absolute right-[-8%] top-[10%]"
        aria-hidden="true"
      >
        <motion.div
          animate={{ scale: [1, 0.94, 1.1, 0.97, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.06) 55%, transparent 80%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Layer 3 — nearest, fastest, small indigo accent center-bottom */}
      <motion.div
        style={{ y: blob3Y }}
        className="pointer-events-none absolute bottom-[0%] left-[30%]"
        aria-hidden="true"
      >
        <motion.div
          animate={{ scale: [1, 1.12, 0.95, 1.07, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(99,102,241,0.05) 55%, transparent 80%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto max-w-6xl px-6 py-32 sm:px-8 lg:px-12"
      >
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          {/* Status badge */}
          <motion.div variants={heroEntrance}>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
              style={{
                borderColor: "var(--border-subtle)",
                color: "var(--text-secondary)",
                backgroundColor: "var(--bg-card)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "#22c55e" }}
              >
                <motion.span
                  className="block h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#22c55e" }}
                  animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
              Open to new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={heroEntrance}>
            <h1
              className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
              style={{ fontFamily: "var(--font-display-var), sans-serif" }}
            >
              <span style={{ color: "var(--text-primary)" }}>Om Prakash</span>
              <br />
              <span className="gradient-text">Das</span>
            </h1>
          </motion.div>

          {/* Role + tagline */}
          <motion.div variants={heroEntrance} className="space-y-2">
            <p
              className="text-xl font-semibold sm:text-2xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Senior Software Engineer
            </p>
            <p
              className="max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              Solving problems using software — specializing in scalable React
              applications, design systems, and high-quality user interfaces.
              Building since January 2019.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={heroEntrance}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="cursor-pointer rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                boxShadow: "0 4px 24px rgba(99,102,241,0.3)",
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="cursor-pointer rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border-subtle)",
                color: "var(--text-primary)",
                backgroundColor: "var(--bg-card)",
                backdropFilter: "blur(8px)",
              }}
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={heroEntrance}
            className="flex items-center gap-4 pt-2"
          >
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--border-subtle)",
                  color: "var(--text-muted)",
                  backgroundColor: "var(--bg-card)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--text-primary)";
                  el.style.borderColor = "var(--accent-blue)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--text-muted)";
                  el.style.borderColor = "var(--border-subtle)";
                }}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Icon size={18} strokeWidth={1.75} />
              </a>
            ))}
            <span
              className="ml-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              6+ years of experience
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.a
          href="#about"
          className="flex cursor-pointer flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} style={{ color: "var(--text-muted)" }} />
        </motion.a>
      </motion.div>
    </section>
  );
}
