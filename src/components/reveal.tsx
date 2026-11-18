"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/utils";

/** A line of text that slides up from behind a mask when scrolled into view. */
export function MaskLine({
  children,
  delay = 0,
  className,
  onLoad = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Animate immediately on page load instead of on scroll */
  onLoad?: boolean;
}) {
  const target = { y: "0%" };
  return (
    <span className={`block overflow-hidden pb-[0.06em] ${className ?? ""}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "110%" }}
        {...(onLoad
          ? { animate: target }
          : { whileInView: target, viewport: { once: true, margin: "-8% 0px" } })}
        transition={{ duration: 1.1, delay, ease: EASE_OUT }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Fade + small rise when scrolled into view. */
export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
