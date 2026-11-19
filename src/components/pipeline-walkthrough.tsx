"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/content";
import { EASE_OUT } from "@/lib/utils";

/** How long each step stays lit, and how long the finished run holds before looping. */
const STEP_MS = 2600;
const HOLD_MS = 3400;
const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

const toCall = (step: string) =>
  step
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");

/**
 * Plays a project's pipeline step by step while it's on screen: a packet travels the track,
 * the current step lights up with an explanation, and a console logs each step as it completes.
 * Hovering pauses it; clicking a step jumps there.
 */
export function PipelineWalkthrough({ project: p }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [c1, c2] = p.hue;
  const last = p.pipeline.length - 1;
  const progress = last > 0 ? active / last : 1;

  useEffect(() => {
    if (!inView || paused || reduce) return;
    const id = setTimeout(
      () => setActive((a) => (a >= last ? 0 : a + 1)),
      active === last ? HOLD_MS : STEP_MS,
    );
    return () => clearTimeout(id);
  }, [inView, paused, reduce, active, last]);

  const gradient = `linear-gradient(120deg, ${c1}, ${c2})`;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="flex flex-col gap-6"
    >
      {/* Track + steps */}
      <ol
        className="relative grid"
        style={{ gridTemplateColumns: `repeat(${p.pipeline.length}, minmax(0, 1fr))` }}
      >
        {/* Track runs from the first node's centre to the last node's */}
        <div
          aria-hidden
          className="absolute top-4 h-px bg-white/15"
          style={{ left: `${50 / p.pipeline.length}%`, right: `${50 / p.pipeline.length}%` }}
        >
          <motion.div
            className="absolute inset-0 origin-left"
            style={{ background: `linear-gradient(90deg, #fff, ${c2})` }}
            initial={false}
            animate={{ scaleX: progress }}
            transition={{ duration: reduce ? 0 : 0.9, ease: EASE_IN_OUT }}
          />
          {/* Data packet */}
          <motion.div
            className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: c2, boxShadow: `0 0 14px 3px ${c2}aa` }}
            initial={false}
            animate={{ left: `${progress * 100}%` }}
            transition={{ duration: reduce ? 0 : 0.9, ease: EASE_IN_OUT }}
          />
        </div>

        {p.pipeline.map((step, i) => {
          const state = i < active ? "done" : i === active ? "active" : "todo";
          return (
            <li key={step} className="relative flex flex-col items-center text-center">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Step ${i + 1}: ${step}`}
                aria-current={state === "active" ? "step" : undefined}
                className="group relative flex h-8 w-8 items-center justify-center rounded-full"
              >
                {state === "active" && !reduce && (
                  <motion.span
                    aria-hidden
                    key={active}
                    className="absolute inset-0 rounded-full"
                    style={{ background: gradient }}
                    initial={{ scale: 1, opacity: 0.55 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <span
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[10px] font-semibold transition-all duration-500 ${
                    state === "done"
                      ? "border-white bg-white text-black"
                      : state === "active"
                        ? "scale-110 border-transparent text-black"
                        : "border-white/20 bg-black text-white/45 group-hover:border-white/50 group-hover:text-white/80"
                  }`}
                  style={state === "active" ? { background: gradient } : undefined}
                >
                  {state === "done" ? "✓" : i + 1}
                </span>
              </button>
              <span
                className={`mt-3 hidden px-1 text-[13px] leading-tight transition-colors duration-500 sm:block ${
                  state === "todo" ? "text-white/35" : "text-white"
                }`}
              >
                {step}
              </span>
            </li>
          );
        })}
      </ol>

      {/* What's happening now + run log */}
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,19rem)]">
        <div className="min-h-[7.5rem]" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0 : 0.45, ease: EASE_OUT }}
            >
              <p className="type-label text-grey-1">
                Step {String(active + 1).padStart(2, "0")} / {String(last + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-display text-lg font-semibold tracking-[-0.02em] text-white sm:text-2xl">
                {p.pipeline[active]}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65 sm:text-[15px]">
                {p.details[active]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          aria-hidden
          className="hidden rounded-lg border border-white/10 bg-white/[0.03] p-4 font-mono text-[11px] leading-[1.7] md:block"
        >
          <p className="mb-1 text-white/40">$ {p.slug}.run()</p>
          {p.pipeline.map((step, i) => (
            <motion.p
              key={step}
              className="flex justify-between gap-3"
              initial={false}
              animate={{ opacity: i <= active ? 1 : 0, x: i <= active ? 0 : -6 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: EASE_OUT }}
            >
              <span className="truncate text-white/75">› {toCall(step)}</span>
              {i < active || active === last ? (
                <span style={{ color: c2 }}>ok</span>
              ) : i === active ? (
                <span className="text-white/60">
                  running<span className="animate-pulse">_</span>
                </span>
              ) : (
                <span />
              )}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
