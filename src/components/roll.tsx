import { cn } from "@/lib/utils";

/**
 * Roll-up hover text. Put `roll-trigger` on the hoverable parent (link/button).
 * The second copy is aria-hidden so screen readers read the label once.
 */
export function Roll({
  children,
  hoverClassName,
  className,
}: {
  children: React.ReactNode;
  hoverClassName?: string;
  className?: string;
}) {
  return (
    <span className={cn("roll", className)}>
      <span className="roll-inner">
        <span>{children}</span>
        <span aria-hidden className={hoverClassName}>
          {children}
        </span>
      </span>
    </span>
  );
}
