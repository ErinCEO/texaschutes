"use client";

import { motion } from "framer-motion";

export function ScrollCue({ label = "Scroll" }: { label?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="flex flex-col items-center gap-3 text-white/60"
    >
      <span className="eyebrow">{label}</span>
      <motion.span
        className="block h-10 w-px bg-white/40 origin-top"
        animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
