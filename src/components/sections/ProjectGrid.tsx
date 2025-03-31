"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Update the projects array to include image and github link
const projects = [
  {
    id: 1,
    title: "JWT Decoder and Encoder",
    description: "An utility to decode and encode JWT tokens with ease.",
    category: "Web Development",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    link: "https://jwt-decoder-gamma.vercel.app",
    github: "https://github.com/Om1938/jwt-decoder",
    featured: true,
    color: "from-blue-500 to-purple-600",
    image: "/jwt-decoder.png", // Add your image path here
  },
  {
    id: 2,
    title: "Finance Calculators",
    description:
      "An utility to calculate finance related calculations with ease.",
    category: "Utility",
    tags: ["React"],
    link: "https://fin-calcs.vercel.app",
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
    image: "/portfolio.png", // Add your image path here
  },
  // {
  //   id: 4,
  //   title: "Task Management App",
  //   description:
  //     "A productivity application for managing tasks and projects with collaborative features.",
  //   category: "Web Development",
  //   tags: ["TypeScript", "Node.js", "MongoDB", "Express"],
  //   link: "/projects/task-app",
  //   featured: false,
  //   color: "from-pink-500 to-rose-600",
  // },
  // {
  //   id: 5,
  //   title: "AI Content Generator",
  //   description:
  //     "An AI-powered application that generates high-quality content for various purposes.",
  //   category: "Artificial Intelligence",
  //   tags: ["Python", "TensorFlow", "React", "FastAPI"],
  //   link: "/projects/ai-generator",
  //   featured: false,
  //   color: "from-cyan-500 to-blue-600",
  // },
  // {
  //   id: 6,
  //   title: "Healthcare Platform",
  //   description:
  //     "A comprehensive healthcare platform connecting patients with healthcare providers.",
  //   category: "Web Development",
  //   tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
  //   link: "/projects/healthcare",
  //   featured: false,
  //   color: "from-indigo-500 to-violet-600",
  // },
];

// Filter categories
const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
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
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
      </motion.div>
    </div>
  );
}
