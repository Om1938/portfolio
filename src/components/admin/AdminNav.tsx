"use client";

import { signOut } from "next-auth/react";
import { FileText, PenSquare, LogOut } from "lucide-react";

export function AdminNav() {
  return (
    <aside
      className="flex h-screen w-56 flex-col border-r px-4 py-6"
      style={{
        borderColor: "var(--border-subtle)",
        backgroundColor: "var(--bg-base)",
      }}
    >
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2.5">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
          style={{
            background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
          }}
        >
          OPD
        </span>
        <div>
          <p className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
            Admin
          </p>
          <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
            Portfolio CMS
          </p>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex flex-1 flex-col gap-1">
        <a
          href="/admin"
          className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--bg-card)";
            e.currentTarget.style.color = "var(--text-primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--text-secondary)";
          }}
        >
          <FileText size={15} strokeWidth={1.75} />
          All Posts
        </a>
        <a
          href="/admin/posts/new"
          className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--bg-card)";
            e.currentTarget.style.color = "var(--text-primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--text-secondary)";
          }}
        >
          <PenSquare size={15} strokeWidth={1.75} />
          New Post
        </a>
      </nav>

      {/* Sign out */}
      <button
        onClick={() => signOut({ callbackUrl: "/admin/login" })}
        className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
        style={{ color: "var(--text-muted)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--text-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--text-muted)";
        }}
      >
        <LogOut size={15} strokeWidth={1.75} />
        Sign out
      </button>
    </aside>
  );
}
