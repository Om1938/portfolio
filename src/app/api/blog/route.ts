import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getAllPosts, slugExists } from "@/lib/mdx";
import { commitPost } from "@/lib/github-api";
import matter from "gray-matter";

// GET /api/blog — list all posts (including unpublished) for admin
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const posts = getAllPosts(true);
  return NextResponse.json(posts);
}

// POST /api/blog — create a new post
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { slug, title, summary, date, readTime, tag, published, content } = body;

  if (!slug || !title || !content) {
    return NextResponse.json({ error: "slug, title, and content are required" }, { status: 400 });
  }

  if (slugExists(slug)) {
    return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
  }

  const frontmatter = { title, summary, date, readTime, tag, slug, published: !!published };
  const mdx = matter.stringify(content, frontmatter);

  await commitPost(slug, mdx);

  return NextResponse.json({ ok: true });
}
