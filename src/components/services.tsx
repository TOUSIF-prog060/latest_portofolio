import { FadeUp, MaskLine } from "@/components/reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="relative bg-black px-4 py-28 sm:px-8 sm:py-40">
      <div className="mb-14 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
        <h2 className="type-giant text-[clamp(3.5rem,10vw,10rem)]">
          <MaskLine>What I</MaskLine>
          <MaskLine delay={0.08}>build</MaskLine>
        </h2>
        <p className="max-w-xs text-grey-1">
          Six things I do end-to-end — from the first scoping call to a monitored system in production.
        </p>
      </div>

      <ul className="border-t border-grey-2">
        {services.map((s, i) => (
          <li key={s.title}>
            <FadeUp delay={i * 0.04}>
              <a
                href="#contact"
                className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-2 border-b border-grey-2 py-7 sm:grid-cols-[4rem_1fr_minmax(0,22rem)_2rem] sm:py-9"
              >
                <span className="type-label text-grey-1">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-[clamp(2rem,5.5vw,5rem)] font-semibold leading-none tracking-[-0.045em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3">
                  <span className="underline-grow">{s.title}</span>
                </span>
                <span className="col-start-2 text-grey-1 transition-colors duration-300 group-hover:text-white sm:col-start-auto">
                  {s.description}
                </span>
                <span
                  aria-hidden
                  className="hidden -rotate-45 text-2xl text-white opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100 sm:block"
                >
                  ↗
                </span>
              </a>
            </FadeUp>
          </li>
        ))}
      </ul>
    </section>
  );
}
