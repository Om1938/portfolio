"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  el?: ElementType;
  once?: boolean;
}

const defaultAnimations = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

export default function AnimatedText({
  text,
  className = "",
  el: Element = "p",
  once = true,
}: AnimatedTextProps) {
  const words = Array.isArray(text) ? text : [text];

  return (
    <Element className={className}>
      <span className="sr-only">{words.join(" ")}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once }}
        className="inline-block"
        aria-hidden
      >
        {words.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`} className="inline-block mr-1.5">
            {Array.from(word).map((char, charIndex) => (
              <motion.span
                key={`char-${charIndex}`}
                className="inline-block"
                variants={defaultAnimations}
                custom={charIndex}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Element>
  );
}
