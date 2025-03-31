"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxBackgroundProps {
  className?: string;
}

export default function ParallaxBackground({
  className = "",
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    offset: ["start", "end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <div
      ref={ref}
      className={`fixed inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-950/30 opacity-50 dark:opacity-30" />

      {/* Dynamic noise texture */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-repeat pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAuMSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')",
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]),
        }}
      />

      {/* Top left circle */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5"
        style={{
          y: y1,
          rotate: rotate1,
          scale: scale1,
          filter: "saturate(1.2) hue-rotate(5deg)",
        }}
      />

      {/* Top right circle */}
      <motion.div
        className="absolute -top-[5%] -right-[15%] h-[50%] w-[50%] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5"
        style={{
          y: y2,
          rotate: rotate2,
          scale: scale2,
          filter: "saturate(1.3) hue-rotate(-5deg)",
        }}
      />

      {/* Middle left circle */}
      <motion.div
        className="absolute top-[40%] -left-[20%] h-[40%] w-[40%] rounded-full bg-green-500/10 blur-3xl dark:bg-green-500/5"
        style={{
          y: y3,
          rotate: rotate1,
          scale: scale2,
          filter: "saturate(1.1)",
        }}
      />

      {/* Bottom right circle */}
      <motion.div
        className="absolute -bottom-[10%] -right-[10%] h-[50%] w-[50%] rounded-full bg-pink-500/10 blur-3xl dark:bg-pink-500/5"
        style={{
          y: y4,
          rotate: rotate2,
          scale: scale1,
          filter: "saturate(1.4) hue-rotate(10deg)",
        }}
      />

      {/* Bottom left circle */}
      <motion.div
        className="absolute -bottom-[15%] -left-[15%] h-[40%] w-[40%] rounded-full bg-yellow-500/10 blur-3xl dark:bg-yellow-500/5"
        style={{
          y: y2,
          rotate: rotate1,
          scale: scale2,
          filter: "saturate(1.2)",
        }}
      />

      {/* Extra elements for depth */}
      <motion.div
        className="absolute top-[30%] right-[20%] h-[25%] w-[25%] rounded-full bg-cyan-500/5 blur-3xl dark:bg-cyan-500/3"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [-80, 80]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.7]),
        }}
      />

      <motion.div
        className="absolute top-[60%] left-[15%] h-[15%] w-[15%] rounded-full bg-indigo-500/5 blur-2xl dark:bg-indigo-500/3"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [120, -120]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 0.9, 1.1]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 0.6]),
        }}
      />
    </div>
  );
}
