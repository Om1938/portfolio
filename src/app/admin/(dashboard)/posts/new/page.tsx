import { PostEditor } from "@/components/admin/PostEditor";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "New Post" };

export default function NewPostPage() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div>
        <h1
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-display-var), sans-serif", color: "var(--text-primary)" }}
        >
          New Post
        </h1>
        <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
          Write your post below. Saving will commit the MDX file to GitHub.
        </p>
      </div>
      <PostEditor isNew />
    </div>
  );
}
