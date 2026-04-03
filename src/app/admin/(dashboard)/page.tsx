import { getAllPosts } from "@/lib/mdx";
import { PostList } from "@/components/admin/PostList";
import { PenSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Posts" };

export default function AdminDashboard() {
  const posts = getAllPosts(true);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-display-var), sans-serif", color: "var(--text-primary)" }}
          >
            Blog Posts
          </h1>
          <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
            {posts.length} post{posts.length !== 1 ? "s" : ""}
          </p>
        </div>
        <a
          href="/admin/posts/new"
          className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white"
          style={{ background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))" }}
        >
          <PenSquare size={14} strokeWidth={2} />
          New Post
        </a>
      </div>

      <PostList posts={posts} />
    </div>
  );
}
