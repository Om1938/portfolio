import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

const mdxOptions = {
  rehypePlugins: [rehypeHighlight],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.published) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-32 sm:px-8 lg:px-12">
        {/* Back link */}
        <a
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft size={14} strokeWidth={2} />
          All articles
        </a>

        {/* Header */}
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3">
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
            <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
              <Clock size={10} strokeWidth={2} />
              {post.readTime}
            </span>
          </div>
          <h1
            className="mb-4 text-3xl font-bold leading-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-display-var), sans-serif", color: "var(--text-primary)" }}
          >
            {post.title}
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {post.summary}
          </p>
          <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>
            {post.date}
          </p>
        </header>

        <hr style={{ borderColor: "var(--border-subtle)", marginBottom: "2.5rem" }} />

        {/* MDX content */}
        <article
          className="prose-blog"
          style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
        >
          <MDXRemote source={post.content} options={{ mdxOptions }} />
        </article>
      </main>
      <Footer />
    </>
  );
}
