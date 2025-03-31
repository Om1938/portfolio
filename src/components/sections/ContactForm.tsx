"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getRedirectUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/thank-you`;
    }
    return "/thank-you"; // Fallback
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Use the FormSubmit.co submission
      if (formRef.current) {
        formRef.current.submit();

        // Fallback redirect in case the form's _next doesn't work
        setTimeout(() => {
          router.push("/thank-you");
        }, 2000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action="https://formsubmit.co/f942728491d1a93a51edc002cd8cac71"
        method="POST"
        className="space-y-6"
      >
        <div className="space-y-4">
          <motion.div
            custom={0}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
          >
            <Label htmlFor="name" className="flex justify-between">
              <span>Name</span>
              {formErrors.name && (
                <span className="text-sm text-destructive">
                  {formErrors.name}
                </span>
              )}
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={`mt-1 ${formErrors.name ? "border-destructive" : ""}`}
            />
          </motion.div>

          <motion.div
            custom={1}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
          >
            <Label htmlFor="email" className="flex justify-between">
              <span>Email</span>
              {formErrors.email && (
                <span className="text-sm text-destructive">
                  {formErrors.email}
                </span>
              )}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className={`mt-1 ${formErrors.email ? "border-destructive" : ""}`}
            />
          </motion.div>

          <motion.div
            custom={2}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
          >
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (123) 456-7890"
              className="mt-1"
            />
          </motion.div>

          <motion.div
            custom={3}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
          >
            <Label htmlFor="message" className="flex justify-between">
              <span>Message</span>
              {formErrors.message && (
                <span className="text-sm text-destructive">
                  {formErrors.message}
                </span>
              )}
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              required
              className={`mt-1 min-h-[120px] ${
                formErrors.message ? "border-destructive" : ""
              }`}
            />
          </motion.div>
        </div>

        {/* FormSubmit.co configuration */}
        <input
          type="hidden"
          name="_subject"
          value="New Portfolio Contact Message!"
        />
        <input type="hidden" name="_next" value={getRedirectUrl()} />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_captcha" value="true" />
        <input type="text" name="_honey" style={{ display: "none" }} />
        {/* Prevent spam by hiding this field */}

        <motion.div
          custom={4}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        >
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </Button>
        </motion.div>
      </form>
    </div>
  );
}
