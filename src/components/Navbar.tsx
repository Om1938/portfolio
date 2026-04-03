"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 30));
    return unsub;
  }, [scrollY]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div
        className="border-b transition-all duration-300"
        style={{
          borderColor: scrolled ? "var(--border-subtle)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          {/* Logo */}
          <a
            href="/"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
            aria-label="Om Prakash Das — Home"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              }}
            >
              OPD
            </span>
            <span
              className="hidden font-semibold text-sm sm:block"
              style={{
                fontFamily: "var(--font-display-var), sans-serif",
                color: "var(--text-primary)",
              }}
            >
              Om Prakash Das
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 hover:opacity-100"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-primary)";
                  (e.target as HTMLElement).style.backgroundColor = "var(--bg-card)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-secondary)";
                  (e.target as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/#contact"
              className="hidden cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:flex"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              }}
            >
              Hire Me
            </a>
            {/* Mobile burger */}
            <button
              className="flex cursor-pointer items-center justify-center rounded-lg p-2 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                color: "var(--text-primary)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t md:hidden"
              style={{
                borderColor: "var(--border-subtle)",
                backgroundColor: "var(--bg-base)",
              }}
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="cursor-pointer rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-150"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 cursor-pointer rounded-lg px-4 py-3 text-center text-sm font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                  }}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
