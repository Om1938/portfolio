"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ArrowUpRight, Clock } from "lucide-react";
import type { PostMeta } from "@/lib/mdx";

interface BlogProps {
  posts: PostMeta[];
}

export function Blog({ posts }: BlogProps) {
  return (
    <SectionWrapper id="blog">
      <SectionHeading
        eyebrow="Writing"
        title="From the blog"
        description="Thoughts on frontend engineering, accessibility, and building things that last."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {posts.map((post, idx) => (
          <motion.a
            key={post.slug}
            href={`/blog/${post.slug}`}
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            className="group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer"
            style={{
              borderColor: "var(--border-subtle)",
              backgroundColor: "var(--bg-card)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
            }}
          >
            {/* Gradient top accent */}
            <div
              className="h-0.5 w-full"
              style={{
                background: `linear-gradient(90deg, var(--accent-blue), var(--accent-purple))`,
                opacity: 0.6 + idx * 0.1,
              }}
              aria-hidden="true"
            />

            <div className="flex flex-1 flex-col p-6">
              {/* Tag + arrow */}
              <div className="mb-4 flex items-center justify-between">
                <span
                  className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                  style={{
                    borderColor: "var(--border-subtle)",
                    color: "var(--accent-purple)",
                    backgroundColor: "rgba(139,92,246,0.08)",
                  }}
                >
                  {post.tag}
                </span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.75}
                  className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ color: "var(--accent-blue)" }}
                />
              </div>

              {/* Title */}
              <h3
                className="mb-2 flex-1 text-sm font-semibold leading-snug transition-colors duration-150 group-hover:opacity-100"
                style={{
                  fontFamily: "var(--font-display-var), sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                {post.title}
              </h3>

              {/* Summary */}
              <p
                className="mb-4 text-xs leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {post.summary}
              </p>

              {/* Meta */}
              <div
                className="flex items-center gap-3 text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                <span>{post.date}</span>
                <span className="h-0.5 w-0.5 rounded-full" style={{ backgroundColor: "var(--text-muted)" }} aria-hidden="true" />
                <span className="flex items-center gap-1">
                  <Clock size={10} strokeWidth={2} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* View all CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 flex justify-center"
      >
        <a
          href="/blog"
          className="group flex cursor-pointer items-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
          style={{
            borderColor: "var(--border-subtle)",
            color: "var(--text-secondary)",
            backgroundColor: "var(--bg-card)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--accent-blue)";
            el.style.color = "var(--text-primary)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--border-subtle)";
            el.style.color = "var(--text-secondary)";
          }}
        >
          View all articles
          <ArrowUpRight
            size={14}
            strokeWidth={2}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
