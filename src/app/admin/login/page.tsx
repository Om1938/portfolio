"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Loader2, Lock } from "lucide-react";
import { Suspense } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/admin";

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      password,
      redirect: false,
      callbackUrl,
    });

    if (result?.error) {
      setError("Incorrect password.");
      setLoading(false);
    } else {
      window.location.href = callbackUrl;
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ backgroundColor: "var(--bg-base)" }}>
      <div
        className="w-full max-w-sm rounded-2xl border p-8"
        style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-card)" }}
      >
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white"
            style={{
              background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
            }}
          >
            OPD
          </span>
          <div className="text-center">
            <h1 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
              Admin
            </h1>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Portfolio CMS
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium" style={{ color: "var(--text-muted)" }}>
              Password
            </label>
            <div className="relative">
              <Lock
                size={14}
                className="absolute top-1/2 left-3 -translate-y-1/2"
                style={{ color: "var(--text-muted)" }}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
                className="w-full rounded-lg border py-2 pr-3 pl-8 text-sm outline-none transition-colors"
                style={{
                  borderColor: error ? "rgba(239,68,68,0.5)" : "var(--border-subtle)",
                  backgroundColor: "var(--bg-base)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => { if (!error) e.currentTarget.style.borderColor = "var(--accent-blue)"; }}
                onBlur={(e) => { if (!error) e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
              />
            </div>
            {error && (
              <p className="mt-1.5 text-xs text-red-500">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium text-white transition-opacity disabled:opacity-60"
            style={{ background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))" }}
          >
            {loading ? <Loader2 size={14} className="animate-spin" /> : null}
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
