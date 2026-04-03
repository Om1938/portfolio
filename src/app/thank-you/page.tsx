import { CheckCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message Sent | Om Prakash Das",
  description: "Thanks for reaching out! I'll get back to you shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full mb-6"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <CheckCircle size={40} strokeWidth={1.5} style={{ color: "var(--accent-blue)" }} />
      </div>

      <h1
        className="text-3xl font-black sm:text-4xl mb-3"
        style={{
          fontFamily: "var(--font-display-var), sans-serif",
          color: "var(--text-primary)",
        }}
      >
        Message Sent!
      </h1>
      <p className="text-base max-w-sm mb-8" style={{ color: "var(--text-secondary)" }}>
        Thanks for reaching out. I typically respond within 24 hours — I&apos;ll
        be in touch soon.
      </p>

      <Link
        href="/"
        className="rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
        style={{
          background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
          boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}
