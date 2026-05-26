"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const line = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

export function RevealLines({
  lines,
  className,
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial="hidden"
      animate="show"
      variants={container}
      transition={{ delayChildren: delay }}
      className={className}
    >
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span variants={line} className="block">
            {l}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
