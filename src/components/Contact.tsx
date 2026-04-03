"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { Mail, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";
import { social } from "@/lib/data";

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: social.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: social.linkedin },
  { icon: XIcon, label: "Twitter / X", href: social.twitter },
  { icon: Mail, label: "Email", href: `mailto:${social.email}` },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle = {
    backgroundColor: "var(--bg-base)",
    borderColor: "var(--border-subtle)",
    color: "var(--text-primary)",
  };

  const labelStyle = {
    color: "var(--text-secondary)",
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Have a project in mind or just want to say hi? I'm always open to interesting conversations."
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — info + social */}
        <motion.div variants={slideInLeft} className="flex flex-col justify-between gap-8">
          <div className="space-y-6">
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Whether you want to discuss a role, a collaboration, or just geek
              out about frontend architecture — drop me a message. I typically
              respond within 24 hours.
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${social.email}`}
                className="group flex cursor-pointer items-center gap-3 text-sm transition-colors duration-150"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--accent-blue)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border"
                  style={{
                    borderColor: "var(--border-subtle)",
                    backgroundColor: "var(--bg-card)",
                  }}
                >
                  <Mail size={14} strokeWidth={1.75} />
                </span>
                {social.email}
              </a>
            </div>
          </div>

          {/* Social links */}
          <div>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              Find me online
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-secondary)",
                    backgroundColor: "var(--bg-card)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--accent-blue)";
                    el.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--border-subtle)";
                    el.style.color = "var(--text-secondary)";
                  }}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <Icon size={15} strokeWidth={1.75} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div variants={slideInRight}>
          <div
            className="rounded-2xl border p-6 sm:p-8"
            style={{
              borderColor: "var(--border-subtle)",
              backgroundColor: "var(--bg-card)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <CheckCircle
                    size={32}
                    strokeWidth={1.5}
                    style={{ color: "var(--accent-blue)" }}
                  />
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "var(--font-display-var), sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  Message sent!
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", message: "" });
                  }}
                  className="cursor-pointer text-xs font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
                  style={{ color: "var(--accent-blue)" }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium"
                    style={labelStyle}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200 placeholder:opacity-40"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--accent-blue)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border-subtle)")
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                    style={labelStyle}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200 placeholder:opacity-40"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--accent-blue)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border-subtle)")
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium"
                    style={labelStyle}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="What's on your mind?"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200 placeholder:opacity-40"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--accent-blue)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border-subtle)")
                    }
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                    boxShadow: "0 4px 24px rgba(99,102,241,0.3)",
                  }}
                >
                  <Send size={15} strokeWidth={2} />
                  Send Message
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
