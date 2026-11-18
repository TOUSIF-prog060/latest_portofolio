"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Roll } from "@/components/roll";
import { site } from "@/lib/content";
import { EASE_OUT } from "@/lib/utils";

/** Headline slides the hero cycles through (one per dot). */
const slides = [
  ["AI", "that", "works"],
  ["Agents", "that", "act"],
  ["Voice", "that", "sells"],
];

/** Portraits the hero alternates between — each headline change flips to the next one. */
const portraits = ["/tousif-hero.jpg", "/tousif-hero-alt.jpg"];

/** Each photo's body runs off one side of the frame — feather that side so there's no hard vertical edge. */
const feathers = [
  "linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 22%)",
  "linear-gradient(270deg, rgba(0,0,0,0) 0%, #000 12%)",
];

/** One background wash per slide: yellow → pink → blue. White at the top keeps the nav readable. */
const washes = [
  "linear-gradient(180deg, #ffffff 0%, #ffffff 7%, #f6efb0 24%, #ecdb3c 48%, #c9b51d 72%, #7d7012 100%)",
  "linear-gradient(180deg, #ffffff 0%, #ffffff 7%, #f7c6da 24%, #ee4f8c 52%, #c23d70 76%, #7e2148 100%)",
  "linear-gradient(180deg, #ffffff 0%, #ffffff 7%, #c8d5ee 24%, #7096cf 50%, #3b65a8 76%, #1d3c78 100%)",
];

const SLIDE_MS = 4200;

/** Soft-edged mask that sweeps left → right to reveal the incoming portrait. */
const WIPE_HIDDEN = "linear-gradient(90deg, #000 -30%, rgba(0,0,0,0) 0%)";
const WIPE_SHOWN = "linear-gradient(90deg, #000 100%, rgba(0,0,0,0) 130%)";

export function Hero() {
  const [state, setState] = useState({ index: 0, photo: 0 });
  const { index, photo } = state;
  const reduce = useReducedMotion();

  const goTo = (next: number) =>
    setState((s) => (next === s.index ? s : { index: next, photo: (s.photo + 1) % portraits.length }));

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () =>
        setState((s) => ({
          index: (s.index + 1) % slides.length,
          photo: (s.photo + 1) % portraits.length,
        })),
      SLIDE_MS,
    );
    return () => clearInterval(id);
  }, [reduce, index]);

  return (
    <section
      id="top"
      className="relative isolate h-[100svh] min-h-[620px] overflow-hidden bg-white text-black"
    >
      {/* Colour washes — stacked and cross-faded, since CSS can't animate between gradients */}
      {washes.map((wash, i) => (
        <div
          key={wash}
          aria-hidden
          className="absolute inset-0 -z-10 transition-opacity duration-[1300ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ background: wash, opacity: i === index ? 1 : 0 }}
        />
      ))}

      {/* Giant stacked headline — sits behind the portrait */}
      <h1
        aria-label={slides[index].join(" ")}
        className="absolute left-0 top-[13%] z-0 select-none font-poster uppercase leading-[0.86] tracking-[-0.01em]"
        style={{ fontSize: "min(37svh, 26vw)" }}
      >
        <AnimatePresence mode="wait" initial>
          <motion.span key={index} className="block" aria-hidden>
            {slides[index].map((word, i) => (
              <span key={word + i} className="-mt-[0.12em] block overflow-hidden pt-[0.12em]">
                <motion.span
                  className="block will-change-transform"
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-105%" }}
                  transition={{ duration: 0.9, delay: i * 0.08, ease: EASE_OUT }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </AnimatePresence>
      </h1>

      {/* Portrait — white backdrop multiplies away into the gradient, tinting the photo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease: EASE_OUT }}
        className="pointer-events-none absolute bottom-0 left-[58%] z-10 aspect-[1116/2000] h-[78%] -translate-x-1/2 mix-blend-multiply sm:left-1/2 sm:h-[90%]"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={photo}
            className="absolute inset-0"
            initial={{ maskImage: WIPE_HIDDEN, x: "-3%", zIndex: 2 }}
            animate={{ maskImage: WIPE_SHOWN, x: "0%", zIndex: 2 }}
            // Outgoing photo stays underneath (drifting slightly right) until the wipe has covered it
            exit={{ zIndex: 1, x: "3%", transition: { duration: reduce ? 0 : 1.3, ease: [0.65, 0, 0.35, 1] } }}
            transition={{ duration: reduce ? 0 : 1.3, ease: [0.65, 0, 0.35, 1] }}
          >
            <Image
              src={portraits[photo]}
              alt={`Portrait of ${site.name}`}
              fill
              {...(photo === 0 ? { preload: true } : { loading: "eager" as const })}
              sizes="(min-width: 640px) 50vh, 45vh"
              className="object-cover object-top contrast-125 grayscale"
              style={{ WebkitMaskImage: feathers[photo], maskImage: feathers[photo] }}
            />
          </motion.div>
        </AnimatePresence>
        {/* Hidden copy of the next portrait so its wipe never waits on the network */}
        <Image
          src={portraits[(photo + 1) % portraits.length]}
          alt=""
          aria-hidden
          fill
          loading="eager"
          sizes="(min-width: 640px) 50vh, 45vh"
          className="invisible"
        />
      </motion.div>

      {/* Intro copy — right edge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: EASE_OUT }}
        className="absolute bottom-24 left-4 right-4 z-20 max-w-[16rem] text-white sm:bottom-auto sm:left-auto sm:right-8 sm:top-[54%] sm:max-w-[13.5rem]"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden className="mb-2">
          <path d="M3 3 L14 14 M14 5 V14 H5" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
        <p className="text-[13px] font-semibold leading-[1.25] tracking-[-0.01em]">
          {site.name} — AI automation engineer based in {site.location}. I build agents, RAG systems and voice
          AI that replace manual work for startups and businesses.
        </p>
        <a
          href={`mailto:${site.links.email}`}
          className="roll-trigger mt-4 inline-flex h-9 items-center rounded-full bg-black px-4 text-[12px] font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
        >
          <Roll>Start a project ↗</Roll>
        </a>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.join(" ")}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show "${s.join(" ")}"`}
            aria-current={i === index}
            className="group py-2"
          >
            <span
              className={`block h-[5px] w-8 rounded-full transition-colors duration-500 ${
                i === index ? "bg-white" : "bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
