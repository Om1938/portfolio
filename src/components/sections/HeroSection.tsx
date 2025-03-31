"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animation/AnimatedSection";
import ParallaxWrapper from "@/components/animation/ParallaxWrapper";
import Image from "next/image";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28 min-h-[90vh] flex items-center"
      style={{ opacity, scale }}
    >
      {/* Background parallax elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5"
          style={{ y: y1, x: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5"
          style={{ y: y2, x: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(49,91,255,0.13)_0%,rgba(49,91,255,0)_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(49,91,255,0.18)_0%,rgba(49,91,255,0.03)_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <AnimatedSection
            className="flex-1 text-center lg:text-left"
            direction="left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ParallaxWrapper direction="left" speed={0.2} offset={20}>
                <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                    Senior Software Engineer & Problem Solver
                  </span>
                </h1>
              </ParallaxWrapper>
              <ParallaxWrapper direction="left" speed={0.3} offset={25}>
                <p className="mb-8 text-xl text-muted-foreground">
                  I build innovative digital experiences with modern
                  technologies and beautiful designs.
                </p>
              </ParallaxWrapper>
              <ParallaxWrapper direction="left" speed={0.4} offset={30}>
                <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                  <Button asChild size="lg">
                    <Link href="/projects">View My Work</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </ParallaxWrapper>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="flex-1" direction="right">
            <motion.div
              className="relative h-72 w-72 md:h-96 md:w-96 mx-auto"
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ rotate }}
            >
              {/* Enhanced background blur effects */}
              <motion.div
                className="absolute -inset-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-600/10 blur-3xl opacity-70 dark:opacity-60"
                style={{
                  scale: useTransform(scrollYProgress, [0, 1], [1, 1.4]),
                  rotate: useTransform(scrollYProgress, [0, 1], [0, -5]),
                }}
              />
              <motion.div
                className="absolute -inset-5 rounded-full bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-pink-500/30 dark:from-cyan-500/20 dark:via-purple-500/10 dark:to-pink-500/20 blur-xl opacity-50 dark:opacity-40"
                style={{
                  scale: useTransform(scrollYProgress, [0, 1], [1.1, 0.9]),
                  rotate: useTransform(scrollYProgress, [0, 1], [0, 15]),
                }}
              />

              {/* Glass container for image */}
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-3xl backdrop-blur-sm border border-white/10 bg-white/5 dark:bg-black/5 shadow-lg"
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(255,255,255,0.2)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-600/10 dark:from-blue-500/5 dark:to-purple-600/5 z-0" />

                {/* Image container with mask */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl z-10">
                  <Image
                    width={400}
                    height={400}
                    src="/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    priority
                  />

                  {/* Overlay glass effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-70 dark:from-black/30 dark:opacity-80"
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [0, 1],
                        [0.5, 0.7]
                      ),
                    }}
                  />

                  {/* Interactive light effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent mix-blend-overlay opacity-0"
                    whileHover={{ opacity: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-blue-500/20 blur-xl dark:bg-blue-500/10"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-7 -left-7 w-24 h-24 rounded-full bg-purple-500/20 blur-xl dark:bg-purple-500/10"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.section>
  );
}
