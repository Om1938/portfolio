"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animation/AnimatedSection";
import ParallaxWrapper from "@/components/animation/ParallaxWrapper";
import Link from "next/link";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX Design"],
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const x1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ opacity }}
    >
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5"
        style={{ x: x1, y: y1, rotate }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [50, -50]),
          y: useTransform(scrollYProgress, [0, 1], [30, -30]),
          rotate: useTransform(scrollYProgress, [0, 1], [5, -5]),
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              About Me
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
            Learn more about my skills, experience, and background
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <AnimatedSection direction="left">
            <ParallaxWrapper direction="left" speed={0.3} offset={40}>
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold">Who I Am</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At my core, I&apos;m a problem solver. I like understanding
                    systems, untangling complexity, and building things that
                    just work — and keep working at scale. I&apos;m comfortable
                    switching contexts: one moment I&apos;m debugging a
                    production issue, the next I&apos;m architecting a new
                    feature, reviewing a pull request, or fine-tuning a CI
                    pipeline.
                  </p>
                  <p>
                    I care about code quality, clarity, and shipping with
                    purpose. If there&apos;s a hard problem worth solving,
                    I&apos;m probably already curious about it.
                  </p>
                </div>
                <div className="pt-2">
                  <Button asChild>
                    <Link href="/about">More About Me</Link>
                  </Button>
                </div>
              </div>
            </ParallaxWrapper>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <ParallaxWrapper direction="right" speed={0.3} offset={40}>
              <motion.div
                className="rounded-lg border bg-card p-6 shadow-sm"
                style={{
                  rotate: useTransform(scrollYProgress, [0, 1], [0, 2]),
                }}
                whileHover={{ rotate: 0 }}
              >
                <h3 className="mb-6 text-2xl font-bold">Skills & Expertise</h3>
                <Accordion type="single" collapsible className="w-full">
                  {skills.map((skillGroup, index) => (
                    <motion.div
                      key={skillGroup.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-medium">
                          {skillGroup.category}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="grid grid-cols-2 gap-2">
                            {skillGroup.items.map((skill, skillIndex) => (
                              <li
                                key={skillIndex}
                                className="flex items-center gap-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="h-5 w-5 text-primary dark:text-primary"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            </ParallaxWrapper>
          </AnimatedSection>
        </div>
      </div>
    </motion.section>
  );
}
