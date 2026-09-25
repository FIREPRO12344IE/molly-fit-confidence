import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 px-4 py-20 sm:px-6 md:py-28", className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-deep">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  text,
  className,
}: {
  eyebrow: string;
  heading: string;
  text?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
        {heading}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}

export const primaryPill =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-rose-deep";

export const outlinePill =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-rose-deep hover:text-rose-deep";

export const inputCls =
  "w-full rounded-2xl border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-rose-deep focus:ring-2 focus:ring-rose-deep/25";

/** Kettlebell line-mark used with the MR COACHING wordmark, per the flyer. */
export function KettlebellMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8.6 8.6V7a3.4 3.4 0 0 1 6.8 0v1.6" />
      <path d="M6.9 9.6h10.2l1.3 6.2a3.7 3.7 0 0 1-3.6 4.4H9.2a3.7 3.7 0 0 1-3.6-4.4z" />
      <path d="M9.8 14.2h4.4" />
    </svg>
  );
}

/** "MR COACHING" wordmark with the kettlebell motif. */
export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <KettlebellMark
        className={cn("shrink-0 text-rose-deep", size === "sm" ? "h-5 w-5" : "h-7 w-7")}
      />
      <span className="leading-none">
        <span
          className={cn(
            "block font-display font-semibold tracking-tight text-foreground",
            size === "sm" ? "text-lg" : "text-2xl",
          )}
        >
          MR
        </span>
        <span
          className={cn(
            "block font-semibold uppercase tracking-[0.28em] text-rose-deep",
            size === "sm" ? "text-[0.6rem]" : "text-[0.7rem]",
          )}
        >
          Coaching
        </span>
      </span>
    </span>
  );
}
