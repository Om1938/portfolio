import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/mdx";
import { PostEditor } from "@/components/admin/PostEditor";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return { title: post ? `Edit: ${post.title}` : "Edit Post" };
}

export default async function EditPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="flex h-full flex-col gap-4">
      <div>
        <h1
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-display-var), sans-serif", color: "var(--text-primary)" }}
        >
          Edit Post
        </h1>
        <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
          Changes will be committed to GitHub on save.
        </p>
      </div>
      <PostEditor initial={post} isNew={false} />
    </div>
  );
}
