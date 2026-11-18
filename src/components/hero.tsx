"use client";

import { motion } from "framer-motion";
import { MaskLine } from "@/components/reveal";
import { Roll } from "@/components/roll";
import { site } from "@/lib/content";
import { EASE_OUT } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-between px-4 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28">
      {/* Meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="type-label grid grid-cols-2 gap-4 text-grey-1 sm:grid-cols-4"
      >
        <span>AI Automation Engineer</span>
        <span className="hidden sm:block">Agents · RAG · Voice AI</span>
        <span className="hidden sm:block">{site.location}</span>
        <span className="flex items-center justify-end gap-2 sm:justify-start">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          Available now
        </span>
      </motion.div>

      {/* Giant headline */}
      <h1 className="type-giant mt-16 text-[clamp(5rem,21vw,22rem)]">
        <MaskLine onLoad delay={0.1}>AI that</MaskLine>
        <MaskLine onLoad delay={0.22}>
          works<span className="text-aurora inline-block translate-y-[0.04em] pl-[0.08em] font-normal">↘</span>
        </MaskLine>
      </h1>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75, ease: EASE_OUT }}
        className="mt-10 flex flex-col gap-8 border-t border-grey-2 pt-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <p className="max-w-md text-lg leading-snug text-white/85 sm:text-xl">
          I&apos;m <span className="text-white">{site.name}</span> — {site.bio}
        </p>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#work" className="roll-trigger text-grey-1 hover:text-white">
            <Roll>Scroll to work ↓</Roll>
          </a>
          <a
            href={`mailto:${site.links.email}`}
            className="roll-trigger inline-flex h-12 items-center rounded-full bg-white px-6 text-black transition-transform duration-300 hover:scale-[1.03]"
          >
            <Roll>Start a project ↗</Roll>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
