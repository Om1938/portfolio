"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  speed?: number;
  easing?: [number, number, number, number];
}

export default function ParallaxWrapper({
  children,
  offset = 50,
  className = "",
  direction = "up",
  speed = 0.5,
  easing = [0.42, 0, 0.58, 1],
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create transform properties for all directions first
  const calculateOffset = offset * speed;
  const yUp = useTransform(
    scrollYProgress,
    [0, 1],
    [calculateOffset, -calculateOffset]
  );
  const yDown = useTransform(
    scrollYProgress,
    [0, 1],
    [-calculateOffset, calculateOffset]
  );
  const xLeft = useTransform(
    scrollYProgress,
    [0, 1],
    [calculateOffset, -calculateOffset]
  );
  const xRight = useTransform(
    scrollYProgress,
    [0, 1],
    [-calculateOffset, calculateOffset]
  );

  // Then pick the right one based on direction
  let transform = {};

  switch (direction) {
    case "up":
      transform = { y: yUp };
      break;
    case "down":
      transform = { y: yDown };
      break;
    case "left":
      transform = { x: xLeft };
      break;
    case "right":
      transform = { x: xRight };
      break;
    default:
      transform = { y: yUp };
  }

  return (
    <motion.div
      ref={ref}
      style={{
        ...transform,
        transition: `transform 0.5s cubic-bezier(${easing.join(", ")})`,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
