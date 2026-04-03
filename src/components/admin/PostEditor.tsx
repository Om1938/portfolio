"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Code,
  Quote,
  Minus,
  Save,
  Loader2,
  Eye,
  EyeOff,
} from "lucide-react";
import type { Post, PostMeta } from "@/lib/mdx";

interface PostEditorProps {
  initial?: Post | PostMeta;
  isNew?: boolean;
}

const TODAY = new Date().toISOString().slice(0, 10);

export function PostEditor({ initial, isNew = false }: PostEditorProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Frontmatter fields
  const [title, setTitle] = useState(initial?.title ?? "");
  const [summary, setSummary] = useState(initial?.summary ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [date, setDate] = useState(initial?.date ?? TODAY);
  const [readTime, setReadTime] = useState(initial?.readTime ?? "5 min read");
  const [tag, setTag] = useState(initial?.tag ?? "");
  const [published, setPublished] = useState(initial?.published ?? false);

  // Raw markdown pane
  const [markdownText, setMarkdownText] = useState(
    "content" in (initial ?? {}) ? (initial as Post).content : "",
  );

  // TipTap editor (left pane)
  const editor = useEditor({
    extensions: [StarterKit, Markdown],
    content: markdownText,
    immediatelyRender: false,
    onUpdate({ editor }) {
      // tiptap-markdown stores its API on storage; cast to access it
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const md = (editor.storage as any).markdown.getMarkdown() as string;
      setMarkdownText(md);
    },
  });

  // Sync markdown textarea → TipTap (right → left)
  const syncFromMarkdown = useCallback(
    (md: string) => {
      setMarkdownText(md);
      if (editor && !editor.isDestroyed) {
        // Only update TipTap if it doesn't already have focus to avoid cursor jumps
        if (!editor.isFocused) {
          editor.commands.setContent(md);
        }
      }
    },
    [editor],
  );

  // Auto-generate slug from title (new posts only)
  useEffect(() => {
    if (!isNew) return;
    setSlug(
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
    );
  }, [title, isNew]);

  async function handleSave() {
    if (!title || !slug) {
      setError("Title and slug are required.");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const url = isNew ? "/api/blog" : `/api/blog/${initial?.slug ?? slug}`;
      const method = isNew ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          summary,
          slug,
          date,
          readTime,
          tag,
          published,
          content: markdownText,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Save failed");
      }
      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setSaving(false);
    }
  }

  const toolbarBtn = (
    action: () => boolean | void,
    icon: React.ReactNode,
    label: string,
    active = false,
  ) => (
    <button
      type="button"
      onClick={() => action()}
      title={label}
      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded transition-colors"
      style={{
        color: active ? "var(--accent-blue)" : "var(--text-muted)",
        backgroundColor: active ? "rgba(99,102,241,0.12)" : "transparent",
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.color = "var(--text-primary)";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.color = "var(--text-muted)";
      }}
    >
      {icon}
    </button>
  );

  return (
    <div className="flex h-full flex-col gap-6">
      {/* Frontmatter fields */}
      <div
        className="rounded-xl border p-5"
        style={{
          borderColor: "var(--border-subtle)",
          backgroundColor: "var(--bg-card)",
        }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Title */}
          <div className="lg:col-span-2">
            <label
              className="mb-1 block text-xs font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Title *
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors"
              style={{
                borderColor: "var(--border-subtle)",
                backgroundColor: "var(--bg-base)",
                color: "var(--text-primary)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-blue)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            />
          </div>

          {/* Tag */}
          <div>
            <label
              className="mb-1 block text-xs font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Tag
            </label>
            <input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="e.g. TypeScript"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors"
              style={{
                borderColor: "var(--border-subtle)",
                backgroundColor: "var(--bg-base)",
                color: "var(--text-primary)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-blue)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            />
          </div>

          {/* Slug */}
          <div>
            <label
              className="mb-1 block text-xs font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Slug *
            </label>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="my-post-slug"
              disabled={!isNew}
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors disabled:opacity-50"
              style={{
                borderColor: "var(--border-subtle)",
                backgroundColor: "var(--bg-base)",
                color: "var(--text-primary)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-blue)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            />
          </div>

          {/* Date */}
          <div>
            <label
              className="mb-1 block text-xs font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors"
              style={{
                borderColor: "var(--border-subtle)",
                backgroundColor: "var(--bg-base)",
                color: "var(--text-primary)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-blue)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            />
          </div>

          {/* Read time */}
          <div>
            <label
              className="mb-1 block text-xs font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Read time
            </label>
            <input
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              placeholder="5 min read"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors"
              style={{
                borderColor: "var(--border-subtle)",
                backgroundColor: "var(--bg-base)",
                color: "var(--text-primary)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-blue)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            />
          </div>

          {/* Summary */}
          <div className="sm:col-span-2 lg:col-span-3">
            <label
              className="mb-1 block text-xs font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Summary
            </label>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="A short description shown on the blog listing..."
              rows={2}
              className="w-full resize-none rounded-lg border px-3 py-2 text-sm outline-none transition-colors"
              style={{
                borderColor: "var(--border-subtle)",
                backgroundColor: "var(--bg-base)",
                color: "var(--text-primary)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-blue)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
              }}
            />
          </div>
        </div>
      </div>

      {/* Editor area */}
      <div
        className="flex min-h-0 flex-1 overflow-hidden rounded-xl border"
        style={{
          borderColor: "var(--border-subtle)",
          backgroundColor: "var(--bg-card)",
        }}
      >
        {/* Left pane: TipTap WYSIWYG */}
        <div
          className="flex flex-1 flex-col border-r"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          {/* Toolbar */}
          <div
            className="flex flex-wrap items-center gap-0.5 border-b px-3 py-2"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <span
              className="mr-2 text-xs font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Visual
            </span>
            {editor && (
              <>
                {toolbarBtn(
                  () => editor.chain().focus().toggleBold().run(),
                  <Bold size={13} />,
                  "Bold",
                  editor.isActive("bold"),
                )}
                {toolbarBtn(
                  () => editor.chain().focus().toggleItalic().run(),
                  <Italic size={13} />,
                  "Italic",
                  editor.isActive("italic"),
                )}
                <div
                  className="mx-1 h-4 w-px"
                  style={{ backgroundColor: "var(--border-subtle)" }}
                />
                {toolbarBtn(
                  () =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run(),
                  <Heading2 size={13} />,
                  "H2",
                  editor.isActive("heading", { level: 2 }),
                )}
                {toolbarBtn(
                  () =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run(),
                  <Heading3 size={13} />,
                  "H3",
                  editor.isActive("heading", { level: 3 }),
                )}
                <div
                  className="mx-1 h-4 w-px"
                  style={{ backgroundColor: "var(--border-subtle)" }}
                />
                {toolbarBtn(
                  () => editor.chain().focus().toggleBulletList().run(),
                  <List size={13} />,
                  "Bullet list",
                  editor.isActive("bulletList"),
                )}
                {toolbarBtn(
                  () => editor.chain().focus().toggleOrderedList().run(),
                  <ListOrdered size={13} />,
                  "Ordered list",
                  editor.isActive("orderedList"),
                )}
                <div
                  className="mx-1 h-4 w-px"
                  style={{ backgroundColor: "var(--border-subtle)" }}
                />
                {toolbarBtn(
                  () => editor.chain().focus().toggleCode().run(),
                  <Code size={13} />,
                  "Inline code",
                  editor.isActive("code"),
                )}
                {toolbarBtn(
                  () => editor.chain().focus().toggleBlockquote().run(),
                  <Quote size={13} />,
                  "Blockquote",
                  editor.isActive("blockquote"),
                )}
                {toolbarBtn(
                  () => editor.chain().focus().setHorizontalRule().run(),
                  <Minus size={13} />,
                  "Horizontal rule",
                )}
              </>
            )}
          </div>
          {/* TipTap content */}
          <div className="flex-1 overflow-auto p-4">
            <EditorContent
              editor={editor}
              className="prose-blog tiptap-editor h-full min-h-100 outline-none"
            />
          </div>
        </div>

        {/* Right pane: Raw Markdown */}
        <div className="flex flex-1 flex-col">
          <div
            className="flex items-center gap-2 border-b px-3 py-2"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <span
              className="text-xs font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Markdown
            </span>
          </div>
          <textarea
            value={markdownText}
            onChange={(e) => syncFromMarkdown(e.target.value)}
            spellCheck={false}
            className="flex-1 resize-none p-4 text-sm outline-none"
            style={{
              fontFamily:
                "ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace",
              backgroundColor: "transparent",
              color: "var(--text-secondary)",
              lineHeight: "1.7",
            }}
            placeholder="# Your post content&#10;&#10;Start writing in Markdown..."
          />
        </div>
      </div>

      {/* Footer actions */}
      <div className="flex items-center justify-between">
        {error && <p className="text-sm text-red-500">{error}</p>}
        <div className="ml-auto flex items-center gap-3">
          {/* Published toggle */}
          <label
            className="flex cursor-pointer items-center gap-2 text-sm select-none"
            style={{ color: "var(--text-secondary)" }}
          >
            {published ? <Eye size={14} /> : <EyeOff size={14} />}
            <span>{published ? "Published" : "Draft"}</span>
            <div
              className="relative h-5 w-9 rounded-full transition-colors"
              style={{
                backgroundColor: published
                  ? "var(--accent-blue)"
                  : "var(--border-subtle)",
              }}
            >
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="sr-only"
              />
              <span
                className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform"
                style={{
                  transform: published ? "translateX(16px)" : "translateX(0)",
                }}
              />
            </div>
          </label>

          <a
            href="/admin"
            className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
            style={{
              borderColor: "var(--border-subtle)",
              color: "var(--text-secondary)",
            }}
          >
            Cancel
          </a>

          <button
            onClick={handleSave}
            disabled={saving}
            className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-opacity disabled:opacity-60"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
            }}
          >
            {saving ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Save size={14} />
            )}
            {saving ? "Saving…" : "Save & Commit"}
          </button>
        </div>
      </div>
    </div>
  );
}
