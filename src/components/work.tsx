"use client";

import { motion } from "framer-motion";
import { PipelineWalkthrough } from "@/components/pipeline-walkthrough";
import { MaskLine } from "@/components/reveal";
import { Roll } from "@/components/roll";
import { projects, type Project } from "@/lib/content";
import { EASE_OUT } from "@/lib/utils";

export function Work() {
  return (
    <section id="work" className="relative">
      <div className="flex items-end justify-between px-4 pb-10 pt-28 sm:px-8 sm:pt-40">
        <h2 className="type-giant text-[clamp(4rem,14vw,14rem)]">
          <MaskLine>Work</MaskLine>
        </h2>
        <p className="type-label mb-3 text-right text-grey-1">
          Selected systems
          <br />({String(projects.length).padStart(2, "0")})
        </p>
      </div>

      {/* Each slide is sticky, so the next one scrolls up and stacks over it. */}
      {projects.map((p, i) => (
        <Slide key={p.slug} project={p} index={i} total={projects.length} />
      ))}
    </section>
  );
}

function Slide({ project: p, index, total }: { project: Project; index: number; total: number }) {
  const [c1, c2] = p.hue;
  return (
    <article className="sticky top-0 flex h-[100svh] flex-col overflow-hidden border-t border-grey-2 bg-black px-4 pb-6 pt-20 sm:px-8 sm:pb-8">
      {/* Background wash: static gradients, no filters, no animation */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(60% 55% at 18% 20%, ${c1}33 0%, transparent 70%), radial-gradient(55% 60% at 85% 85%, ${c2}2b 0%, transparent 70%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:12.5%_100%]"
      />

      {/* Top row */}
      <div className="type-label relative flex justify-between text-grey-1">
        <span>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span>{p.category}</span>
        <span className="hidden sm:block">{p.year}</span>
      </div>

      {/* Foreground panel */}
      <div className="relative flex flex-1 items-center justify-center py-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.1, ease: EASE_OUT }}
          className="w-full max-w-5xl rounded-2xl border border-white/10 bg-black/70 p-5 sm:p-8"
        >
          <div className="flex flex-col gap-6">
            <p className="max-w-3xl font-display text-xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-2xl">
              {p.tagline}
            </p>

            <PipelineWalkthrough project={p} />

            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="type-label rounded-full border border-white/12 px-3 py-1.5 text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom row: title + action */}
      <div className="relative flex items-end justify-between gap-6">
        <h3 className="type-giant text-[clamp(3rem,11vw,10rem)]">{p.name}</h3>
        {p.href && (
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="roll-trigger mb-2 inline-flex h-11 shrink-0 items-center rounded-full border border-white/25 px-5 type-label text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <Roll>{p.hrefLabel} ↗</Roll>
          </a>
        )}
      </div>
    </article>
  );
}
