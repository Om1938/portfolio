import { getAllPosts } from "@/lib/mdx";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on frontend engineering, accessibility, and building things that last.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-32 sm:px-8 lg:px-12">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-blue)" }}>
            Writing
          </p>
          <h1
            className="mb-4 text-4xl font-bold sm:text-5xl"
            style={{ fontFamily: "var(--font-display-var), sans-serif", color: "var(--text-primary)" }}
          >
            All Articles
          </h1>
          <p className="text-base" style={{ color: "var(--text-secondary)" }}>
            Thoughts on frontend engineering, accessibility, and building things that last.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border-subtle)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              <div className="flex items-center justify-between">
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
              <h2
                className="text-lg font-semibold"
                style={{ fontFamily: "var(--font-display-var), sans-serif", color: "var(--text-primary)" }}
              >
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {post.summary}
              </p>
              <div className="flex items-center gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
                <span>{post.date}</span>
                <span className="h-0.5 w-0.5 rounded-full" style={{ backgroundColor: "var(--text-muted)" }} aria-hidden="true" />
                <span className="flex items-center gap-1">
                  <Clock size={10} strokeWidth={2} />
                  {post.readTime}
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
