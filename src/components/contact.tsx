import { MaskLine } from "@/components/reveal";
import { Roll } from "@/components/roll";
import { site } from "@/lib/content";

const socials = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Email", href: `mailto:${site.links.email}` },
  { label: "Résumé", href: site.links.resume },
];

export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-black px-4 pt-28 sm:px-8 sm:pt-40">
      {/* Single soft aurora wash behind the CTA (static gradient, no filter) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(60%_70%_at_50%_100%,rgba(139,92,246,0.22),rgba(34,211,238,0.08)_45%,transparent_75%)]"
      />

      <p className="type-label relative mb-8 text-grey-1">Have a project in mind?</p>

      <a href={`mailto:${site.links.email}`} className="roll-trigger relative block w-fit">
        <span className="type-giant block text-[clamp(4.5rem,17vw,17rem)]">
          <MaskLine>
            <Roll hoverClassName="text-aurora">Let&apos;s talk↗</Roll>
          </MaskLine>
        </span>
      </a>

      <a
        href={`mailto:${site.links.email}`}
        className="underline-grow relative mt-6 inline-block text-lg text-white/80 hover:text-white sm:text-2xl"
      >
        {site.links.email}
      </a>

      <div className="relative mt-24 grid gap-10 border-t border-grey-2 py-10 text-sm sm:grid-cols-3">
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") || s.href.endsWith(".pdf") ? "_blank" : undefined}
                rel="noreferrer"
                className="roll-trigger font-medium"
              >
                <Roll>{s.label} ↗</Roll>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-grey-1 sm:text-center">
          Built in {site.location.split(",")[0]} · Shipping AI that works
        </p>
        <div className="flex justify-between gap-6 text-grey-1 sm:justify-end">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <a href="#top" className="roll-trigger text-white">
            <Roll>Back to top ↑</Roll>
          </a>
        </div>
      </div>
    </footer>
  );
}
