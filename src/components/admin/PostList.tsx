"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import type { PostMeta } from "@/lib/mdx";

interface PostListProps {
  posts: PostMeta[];
}

export function PostList({ posts }: PostListProps) {
  const router = useRouter();
  const [deleting, setDeleting] = useState<string | null>(null);

  async function handleDelete(slug: string) {
    if (!confirm(`Delete "${slug}"? This cannot be undone.`)) return;
    setDeleting(slug);
    try {
      const res = await fetch(`/api/blog/${slug}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      router.refresh();
    } catch (err) {
      alert("Failed to delete post.");
      console.error(err);
    } finally {
      setDeleting(null);
    }
  }

  if (posts.length === 0) {
    return (
      <div className="py-16 text-center text-sm" style={{ color: "var(--text-muted)" }}>
        No posts yet.{" "}
        <a href="/admin/posts/new" style={{ color: "var(--accent-blue)" }}>
          Create one
        </a>
        .
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border" style={{ borderColor: "var(--border-subtle)" }}>
      <table className="w-full text-sm">
        <thead>
          <tr
            className="border-b text-xs uppercase tracking-wider"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
          >
            <th className="px-5 py-3 text-left font-medium">Title</th>
            <th className="px-5 py-3 text-left font-medium">Tag</th>
            <th className="px-5 py-3 text-left font-medium">Date</th>
            <th className="px-5 py-3 text-left font-medium">Status</th>
            <th className="px-5 py-3 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post.slug}
              className="border-b last:border-b-0"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <td className="px-5 py-4 font-medium" style={{ color: "var(--text-primary)" }}>
                {post.title}
              </td>
              <td className="px-5 py-4">
                <span
                  className="rounded-full border px-2 py-0.5 text-xs"
                  style={{
                    borderColor: "var(--border-subtle)",
                    color: "var(--accent-purple)",
                    backgroundColor: "rgba(139,92,246,0.08)",
                  }}
                >
                  {post.tag}
                </span>
              </td>
              <td className="px-5 py-4 text-xs" style={{ color: "var(--text-muted)" }}>
                {post.date}
              </td>
              <td className="px-5 py-4">
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
                  style={{
                    backgroundColor: post.published ? "rgba(34,197,94,0.1)" : "rgba(100,116,139,0.1)",
                    color: post.published ? "#22c55e" : "var(--text-muted)",
                  }}
                >
                  {post.published ? <Eye size={10} /> : <EyeOff size={10} />}
                  {post.published ? "Published" : "Draft"}
                </span>
              </td>
              <td className="px-5 py-4">
                <div className="flex items-center justify-end gap-2">
                  <a
                    href={`/admin/posts/${post.slug}`}
                    className="flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors"
                    style={{
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-blue)";
                      e.currentTarget.style.color = "var(--accent-blue)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    <Pencil size={11} strokeWidth={2} />
                    Edit
                  </a>
                  <button
                    onClick={() => handleDelete(post.slug)}
                    disabled={deleting === post.slug}
                    className="flex cursor-pointer items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-40"
                    style={{
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-muted)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(239,68,68,0.5)";
                      e.currentTarget.style.color = "#ef4444";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    <Trash2 size={11} strokeWidth={2} />
                    {deleting === post.slug ? "Deleting…" : "Delete"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
