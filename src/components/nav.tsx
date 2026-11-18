import { Roll } from "@/components/roll";
import { projects, site } from "@/lib/content";

const links = [
  { label: "Work", href: "#work", count: projects.length },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/**
 * Fixed nav. `mix-blend-difference` keeps the white text readable over both
 * the black sections and the white statement section (it inverts to black).
 */
export function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="flex items-start justify-between px-4 pt-5 text-[13px] font-medium tracking-[0.05em] text-white sm:px-8 sm:pt-6">
        <a href="#top" className="roll-trigger pointer-events-auto font-display text-lg font-bold tracking-[-0.04em]">
          <Roll>{site.shortName}</Roll>
        </a>

        <nav className="pointer-events-auto flex items-start gap-5 sm:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`roll-trigger items-start ${l.label === "Work" || l.label === "Contact" ? "flex" : "hidden md:flex"}`}
            >
              <Roll>{l.label}</Roll>
              {l.count ? <sup className="ml-0.5 mt-0.5 text-[9px] opacity-70">{l.count}</sup> : null}
            </a>
          ))}
          <a
            href={`mailto:${site.links.email}`}
            className="roll-trigger hidden sm:flex"
          >
            <Roll>Let&apos;s talk ↗</Roll>
          </a>
        </nav>
      </div>
    </header>
  );
}
