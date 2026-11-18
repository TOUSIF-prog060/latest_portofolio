import { MaskLine } from "@/components/reveal";

/** White poster section. Sits after the sticky work slides and covers the last one. */
export function Statement() {
  return (
    <section className="relative z-10 bg-white px-4 py-24 text-black sm:px-8 sm:py-36">
      <div className="type-label mb-10 flex justify-between text-grey-3">
        <span>Philosophy</span>
        <span>Since 2022</span>
      </div>

      <h2 className="font-poster text-[clamp(4.2rem,15vw,15rem)] uppercase leading-[0.86] tracking-[-0.01em]">
        <MaskLine>Less manual</MaskLine>
        <MaskLine delay={0.08}>work. More</MaskLine>
        <MaskLine delay={0.16}>
          <span className="relative inline-block">
            leverage.
            <span aria-hidden className="absolute -bottom-[0.02em] left-0 h-[0.07em] w-full bg-aurora" />
          </span>
        </MaskLine>
      </h2>

      <div className="mt-16 grid gap-10 sm:mt-24 sm:grid-cols-[1fr_auto] sm:items-end">
        <p className="max-w-2xl text-xl leading-snug tracking-[-0.01em] sm:text-2xl">
          I don&apos;t ship notebook demos. Every system is evaluated, monitored and built around a
          business number — hours saved, leads qualified, tickets closed.
        </p>
        <Badge />
      </div>
    </section>
  );
}

/** Rotating circular label (CSS transform animation only). */
function Badge() {
  const text = "AVAILABLE FOR FREELANCE • AI AUTOMATION • ";
  return (
    <a
      href="#contact"
      aria-label="Go to contact"
      className="group relative flex h-36 w-36 items-center justify-center self-start sm:self-auto"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-black font-mono text-[7.4px] tracking-[0.18em]">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-2xl text-white transition-transform duration-500 group-hover:rotate-45">
        ↘
      </span>
    </a>
  );
}
