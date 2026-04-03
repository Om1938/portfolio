"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { Mail, Send, CheckCircle, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";
import { social } from "@/lib/data";

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: social.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: social.linkedin },
  { icon: XIcon, label: "Twitter / X", href: social.twitter },
  { icon: Mail, label: "Email", href: `mailto:${social.email}` },
];

const contactDetails = [
  {
    icon: Mail,
    label: social.email,
    href: `mailto:${social.email}`,
  },
  {
    icon: Phone,
    label: "+91 77278 77741",
    href: "tel:+917727877741",
  },
  {
    icon: MapPin,
    label: "Trivandrum, Kerala, India",
    href: null,
  },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!formState.name.trim()) e.name = "Name is required";
    if (!formState.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formState.email)) e.email = "Email is invalid";
    if (!formState.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    formRef.current?.submit();
    // Fallback redirect
    setTimeout(() => { window.location.href = "/thank-you"; }, 2000);
  }

  const inputStyle = {
    backgroundColor: "var(--bg-base)",
    borderColor: "var(--border-subtle)",
    color: "var(--text-primary)",
  };

  const labelStyle = { color: "var(--text-secondary)" };

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
              {contactDetails.map(({ icon: Icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    className="group flex cursor-pointer items-center gap-3 text-sm transition-colors duration-150"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-blue)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border"
                      style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-card)" }}
                    >
                      <Icon size={14} strokeWidth={1.75} />
                    </span>
                    {label}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border"
                      style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-card)" }}
                    >
                      <Icon size={14} strokeWidth={1.75} />
                    </span>
                    {label}
                  </div>
                )
              )}
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
                  <CheckCircle size={32} strokeWidth={1.5} style={{ color: "var(--accent-blue)" }} />
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-display-var), sans-serif", color: "var(--text-primary)" }}
                >
                  Message sent!
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", phone: "", message: "" }); }}
                  className="cursor-pointer text-xs font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
                  style={{ color: "var(--accent-blue)" }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                action="https://formsubmit.co/f942728491d1a93a51edc002cd8cac71"
                method="POST"
                className="space-y-5"
              >
                {/* FormSubmit.co config */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                <input type="hidden" name="_next" value="https://www.ompdas.com/thank-you" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="text" name="_honey" style={{ display: "none" }} aria-hidden="true" />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 flex items-center justify-between text-sm font-medium" style={labelStyle}>
                    Name
                    {errors.name && <span className="text-xs font-normal" style={{ color: "#f87171" }}>{errors.name}</span>}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200 placeholder:opacity-40"
                    style={{ ...inputStyle, borderColor: errors.name ? "#f87171" : "var(--border-subtle)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-blue)")}
                    onBlur={(e) => (e.target.style.borderColor = errors.name ? "#f87171" : "var(--border-subtle)")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1.5 flex items-center justify-between text-sm font-medium" style={labelStyle}>
                    Email
                    {errors.email && <span className="text-xs font-normal" style={{ color: "#f87171" }}>{errors.email}</span>}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200 placeholder:opacity-40"
                    style={{ ...inputStyle, borderColor: errors.email ? "#f87171" : "var(--border-subtle)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-blue)")}
                    onBlur={(e) => (e.target.style.borderColor = errors.email ? "#f87171" : "var(--border-subtle)")}
                  />
                </div>

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium" style={labelStyle}>
                    Phone <span className="opacity-50">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 99999 99999"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200 placeholder:opacity-40"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-blue)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1.5 flex items-center justify-between text-sm font-medium" style={labelStyle}>
                    Message
                    {errors.message && <span className="text-xs font-normal" style={{ color: "#f87171" }}>{errors.message}</span>}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="What's on your mind?"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200 placeholder:opacity-40"
                    style={{ ...inputStyle, borderColor: errors.message ? "#f87171" : "var(--border-subtle)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-blue)")}
                    onBlur={(e) => (e.target.style.borderColor = errors.message ? "#f87171" : "var(--border-subtle)")}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                    boxShadow: "0 4px 24px rgba(99,102,241,0.3)",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} strokeWidth={2} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
