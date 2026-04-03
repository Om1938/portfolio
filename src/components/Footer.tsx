"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";
import { social } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: social.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: social.linkedin },
  { icon: XIcon, label: "Twitter / X", href: social.twitter },
  { icon: Mail, label: "Email", href: `mailto:${social.email}` },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border-subtle)",
        backgroundColor: "var(--bg-base)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <a
              href="#"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
              aria-label="Om Prakash Das — Home"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                }}
              >
                OPD
              </span>
              <span
                className="font-semibold text-sm"
                style={{
                  fontFamily: "var(--font-display-var), sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                Om Prakash Das
              </span>
            </a>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Built with Next.js &amp; Framer Motion
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer text-xs font-medium transition-colors duration-150 hover:opacity-100"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 hover:scale-110"
                style={{
                  borderColor: "var(--border-subtle)",
                  color: "var(--text-muted)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--text-primary)";
                  el.style.borderColor = "var(--accent-blue)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--text-muted)";
                  el.style.borderColor = "var(--border-subtle)";
                }}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Icon size={14} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 border-t pt-6 text-center text-xs"
          style={{
            borderColor: "var(--border-subtle)",
            color: "var(--text-muted)",
          }}
        >
          &copy; {year} Om Prakash Das. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
