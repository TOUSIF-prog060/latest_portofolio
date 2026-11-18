import { FadeUp, MaskLine } from "@/components/reveal";
import { Roll } from "@/components/roll";
import { site, stats, timeline } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative bg-black px-4 py-28 sm:px-8 sm:py-40">
      <h2 className="type-giant mb-16 text-[clamp(4rem,14vw,14rem)]">
        <MaskLine>About</MaskLine>
      </h2>

      <div className="max-w-5xl">
        <div>
          <FadeUp>
            <p className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-medium leading-[1.1] tracking-[-0.03em]">
              I&apos;m an AI engineer who cares less about the model and more about the
              outcome. I build <span className="text-aurora">agents, RAG pipelines and voice AI</span>{" "}
              that take real, repetitive work off people&apos;s plates — and keep running after
              I hand them over.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <dl className="mt-14 grid grid-cols-2 border-t border-grey-2 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse border-b border-grey-2 py-6 pr-4 sm:border-b-0">
                  <dt className="type-label mt-2 text-grey-1">{s.label}</dt>
                  <dd className="font-display text-5xl font-bold tracking-[-0.05em]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>

          <FadeUp delay={0.15}>
            <ol className="mt-14 border-t border-grey-2">
              {timeline.map((t) => (
                <li
                  key={t.title}
                  className="grid grid-cols-[4rem_1fr] gap-x-4 gap-y-1 border-b border-grey-2 py-5 sm:grid-cols-[5rem_1fr_auto]"
                >
                  <span className="type-label pt-1 text-grey-1">{t.year}</span>
                  <span className="text-lg tracking-[-0.01em]">{t.title}</span>
                  <span className="col-start-2 text-sm text-grey-1 sm:col-start-auto">{t.place}</span>
                </li>
              ))}
            </ol>
          </FadeUp>

          <FadeUp delay={0.2}>
            <a
              href={site.links.resume}
              target="_blank"
              rel="noreferrer"
              className="roll-trigger mt-10 inline-flex h-12 items-center rounded-full border border-white/25 px-6 text-sm font-medium transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              <Roll>Download résumé ↓</Roll>
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
