import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getPostBySlug } from "@/lib/mdx";
import { commitPost, deletePost } from "@/lib/github-api";
import matter from "gray-matter";

interface Params {
  params: Promise<{ slug: string }>;
}

// GET /api/blog/[slug] — get a single post (for editor)
export async function GET(_req: Request, { params }: Params) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(post);
}

// PUT /api/blog/[slug] — update a post
export async function PUT(req: Request, { params }: Params) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { slug } = await params;
  const body = await req.json();
  const { title, summary, date, readTime, tag, published, content } = body;

  const frontmatter = { title, summary, date, readTime, tag, slug, published: !!published };
  const mdx = matter.stringify(content ?? "", frontmatter);

  await commitPost(slug, mdx);

  return NextResponse.json({ ok: true });
}

// DELETE /api/blog/[slug] — delete a post
export async function DELETE(_req: Request, { params }: Params) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { slug } = await params;
  await deletePost(slug);

  return NextResponse.json({ ok: true });
}
