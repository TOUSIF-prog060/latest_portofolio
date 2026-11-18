import { stack } from "@/lib/content";

/** Infinite marquee of the stack. Two copies of the list, translated -50% (transform only). */
export function Stack() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {stack.map((t) => (
        <li key={t} className="flex items-center">
          <span className="px-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold tracking-[-0.045em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.45)] transition-colors duration-300 hover:text-white">
            {t}
          </span>
          <span className="text-aurora text-2xl">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="stack" aria-label="Tech stack" className="relative overflow-hidden border-y border-grey-2 bg-black py-10">
      <div className="type-label mb-6 flex justify-between px-4 text-grey-1 sm:px-8">
        <span>Toolbox</span>
        <span>{stack.length} tools</span>
      </div>
      <div className="flex w-max animate-marquee will-change-transform hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
