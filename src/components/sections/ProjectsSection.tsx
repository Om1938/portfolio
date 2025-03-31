"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animation/AnimatedSection";

// Featured projects for homepage
const featuredProjects = [
  {
    id: 1,
    title: "JWT Decoder and Encoder",
    description: "An utility to decode and encode JWT tokens with ease.",
    category: "Web Development",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    link: "https://jwt.ompdas.com",
    github: "https://github.com/Om1938/jwt-decoder",
    featured: true,
    color: "from-blue-500 to-purple-600",
    image: "/jwt-decoder.png",
  },
  {
    id: 2,
    title: "Finance Calculators",
    description:
      "An utility to calculate finance related calculations with ease.",
    category: "Utility",
    tags: ["React Native", "Node.js", "MongoDB", "Firebase"],
    link: "https://fincalc.ompdas.com",
    github: "https://github.com/Om1938/fin-calcs",
    featured: true,
    color: "from-green-500 to-teal-600",
    image: "/fin-calcs.png",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A creative portfolio website showcasing work and skills with smooth animations.",
    category: "Web Design",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Next.js"],
    link: "/",
    github: "https://github.com/Om1938/portfolio",
    featured: false,
    color: "from-orange-500 to-red-600",
    image: "/portfolio.png",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ opacity }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
        <div className="absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              Featured Projects
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
            Check out some of my recent work that showcases my skills and
            expertise
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-md dark:hover:shadow-primary/5"
            >
              <div className="relative overflow-hidden">
                {/* Project image or gradient placeholder */}
                <div className="relative aspect-video bg-muted">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 dark:opacity-30`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white/70">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-12 w-12 opacity-50"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </div>
                    </>
                  )}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute left-4 top-4 z-10">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute right-4 top-4 z-10">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-black/70"
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white"
                  >
                    <Link href={project.link}>View Project</Link>
                  </Button>
                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-white text-white"
                    >
                      <Link href={project.github} target="_blank">
                        GitHub
                      </Link>
                    </Button>
                  )}
                </motion.div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-tight tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" style={{ y }}>
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
