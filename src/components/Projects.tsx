"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A selection of personal projects and open-source work that showcase my approach to engineering and design."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 cursor-default"
            style={{
              borderColor: "var(--border-subtle)",
              backgroundColor: "var(--bg-card)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
            }}
          >
            {/* Gradient hover overlay */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.06) 100%)",
              }}
              aria-hidden="true"
            />

            {/* Gradient top accent */}
            <div
              className="h-0.5 w-full"
              style={{
                background: `linear-gradient(90deg, var(--accent-blue), var(--accent-purple))`,
                opacity: 0.7,
              }}
              aria-hidden="true"
            />

            <div className="flex flex-1 flex-col p-6">
              {/* Header */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <span
                  className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                  style={{
                    borderColor: "var(--border-subtle)",
                    color: "var(--accent-blue)",
                    backgroundColor: "rgba(59,130,246,0.08)",
                  }}
                >
                  {project.category}
                </span>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      aria-label={`${project.title} GitHub repository`}
                      className="cursor-pointer transition-colors duration-150 hover:opacity-100"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--text-muted)")
                      }
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      aria-label={`${project.title} live demo`}
                      className="cursor-pointer transition-colors duration-150 hover:opacity-100"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--accent-blue)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--text-muted)")
                      }
                    >
                      <ArrowUpRight size={16} strokeWidth={1.75} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title + description */}
              <h3
                className="mb-2 text-base font-semibold leading-snug"
                style={{
                  fontFamily: "var(--font-display-var), sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                {project.title}
              </h3>
              <p
                className="mb-5 flex-1 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border px-2 py-0.5 text-xs"
                    style={{
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-muted)",
                      backgroundColor: "var(--bg-base)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
