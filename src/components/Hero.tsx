"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Code2, Layers, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";
import { heroEntrance, heroStagger } from "@/lib/animations";
import { social } from "@/lib/data";

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: social.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: social.linkedin },
  { icon: XIcon, label: "Twitter / X", href: social.twitter },
];

const floatingTags = [
  { icon: Code2, label: "React & TypeScript", delay: 0 },
  { icon: Layers, label: "Design Systems", delay: 0.3 },
  { icon: Zap, label: "Performance", delay: 0.6 },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const blob1Y = useTransform(scrollY, [0, 900], [0, -450]);
  const blob2Y = useTransform(scrollY, [0, 900], [0, -315]);
  const blob3Y = useTransform(scrollY, [0, 900], [0, -180]);
  const textY  = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);
  const photoY  = useTransform(scrollY, [0, 600], [0, 40]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(99,102,241,0.18) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      {/* ── Parallax blobs ── */}
      <motion.div style={{ y: blob1Y }} className="pointer-events-none absolute -left-[10%] -top-[5%]" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 1.08, 0.96, 1.04, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0.05) 60%, transparent 80%)", filter: "blur(40px)" }}
        />
      </motion.div>
      <motion.div style={{ y: blob2Y }} className="pointer-events-none absolute right-[-8%] top-[10%]" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 0.94, 1.1, 0.97, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.06) 55%, transparent 80%)", filter: "blur(40px)" }}
        />
      </motion.div>
      <motion.div style={{ y: blob3Y }} className="pointer-events-none absolute bottom-0 left-[30%]" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 1.12, 0.95, 1.07, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(99,102,241,0.05) 55%, transparent 80%)", filter: "blur(40px)" }}
        />
      </motion.div>

      {/* ── Main layout ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid min-h-screen grid-cols-1 items-center lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px]">

          {/* ── Left: Text ── */}
          <motion.div
            style={{ y: textY, opacity }}
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 py-32 lg:py-0"
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
                <motion.span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#22c55e", display: "block" }}
                  animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Open to new opportunities
              </span>
            </motion.div>

            {/* Name — big & bold */}
            <motion.div variants={heroEntrance}>
              <h1
                className="leading-[0.95] tracking-tight"
                style={{ fontFamily: "var(--font-display-var), sans-serif" }}
              >
                <span
                  className="block text-6xl font-black sm:text-7xl lg:text-8xl xl:text-9xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  Om Prakash
                </span>
                <span
                  className="block text-6xl font-black sm:text-7xl lg:text-8xl xl:text-9xl gradient-text"
                >
                  Das.
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={heroEntrance} className="space-y-2">
              <p
                className="text-lg font-semibold uppercase tracking-widest sm:text-xl"
                style={{ color: "var(--accent-blue)" }}
              >
                Senior Software Engineer
              </p>
              <p
                className="max-w-lg text-base leading-relaxed sm:text-lg"
                style={{ color: "var(--text-muted)" }}
              >
                Solving problems using software — specializing in scalable React
                applications, design systems, and high-quality user interfaces.
              </p>
            </motion.div>

            {/* Floating tech tags */}
            <motion.div variants={heroEntrance} className="flex flex-wrap gap-2">
              {floatingTags.map(({ icon: Icon, label, delay }) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + delay, duration: 0.4 }}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                  style={{
                    borderColor: "var(--border-subtle)",
                    backgroundColor: "var(--bg-card)",
                    color: "var(--text-secondary)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Icon size={11} strokeWidth={2} style={{ color: "var(--accent-purple)" }} />
                  {label}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={heroEntrance} className="flex flex-wrap gap-3 pt-1">
              <a
                href="/#projects"
                className="cursor-pointer rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                  boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
                }}
              >
                View My Work
              </a>
              <a
                href="/#contact"
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

            {/* Social + experience */}
            <motion.div variants={heroEntrance} className="flex items-center gap-4 pt-1">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5 hover:scale-110"
                  style={{
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-muted)",
                    backgroundColor: "var(--bg-card)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                    e.currentTarget.style.borderColor = "var(--accent-blue)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </a>
              ))}
              <div
                className="ml-1 h-5 w-px"
                style={{ backgroundColor: "var(--border-subtle)" }}
              />
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                6+ years of experience
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <div className="relative hidden lg:flex items-end justify-center self-end">
            <motion.div
              style={{ y: photoY }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              {/* Glow behind photo */}
              <div
                className="absolute -inset-10 rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(139,92,246,0.2) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
                aria-hidden="true"
              />

              {/* Photo container */}
              <div
                className="relative overflow-hidden"
                style={{ width: 420, height: 580 }}
              >
                <Image
                  src="/profile.png"
                  alt="Om Prakash Das"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="420px"
                />

                {/* Gradient fades to blend white background into site bg */}
                {/* Left fade */}
                <div
                  className="absolute inset-y-0 left-0 w-28 pointer-events-none"
                  style={{ background: "linear-gradient(to right, var(--bg-base) 0%, transparent 100%)" }}
                  aria-hidden="true"
                />
                {/* Right fade */}
                <div
                  className="absolute inset-y-0 right-0 w-16 pointer-events-none"
                  style={{ background: "linear-gradient(to left, var(--bg-base) 0%, transparent 100%)" }}
                  aria-hidden="true"
                />
                {/* Bottom fade */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{ background: "linear-gradient(to top, var(--bg-base) 0%, transparent 100%)" }}
                  aria-hidden="true"
                />
                {/* Top fade (subtle) */}
                <div
                  className="absolute inset-x-0 top-0 h-16 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, var(--bg-base) 0%, transparent 100%)" }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating card — years of experience */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute left-0 top-1/3 -translate-x-1/2 rounded-2xl border px-4 py-3 shadow-xl"
                style={{
                  borderColor: "var(--border-subtle)",
                  backgroundColor: "var(--bg-card)",
                  backdropFilter: "blur(16px)",
                  minWidth: 140,
                }}
              >
                <p className="text-2xl font-black" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display-var)" }}>6+</p>
                <p className="text-xs font-medium mt-0.5" style={{ color: "var(--text-muted)" }}>Years of Experience</p>
              </motion.div>

              {/* Floating card — current role */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute right-0 top-16 translate-x-1/3 rounded-2xl border px-4 py-3 shadow-xl"
                style={{
                  borderColor: "var(--border-subtle)",
                  backgroundColor: "var(--bg-card)",
                  backdropFilter: "blur(16px)",
                  minWidth: 150,
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="h-2 w-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#22c55e" }}
                  />
                  <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>Currently at</p>
                </div>
                <p className="text-sm font-bold" style={{ color: "var(--accent-blue)", fontFamily: "var(--font-display-var)" }}>Carestack</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.a
          href="/#about"
          className="flex cursor-pointer flex-col items-center gap-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} style={{ color: "var(--text-muted)" }} />
        </motion.a>
      </motion.div>
    </section>
  );
}
