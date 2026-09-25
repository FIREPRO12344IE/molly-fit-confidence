import { RefreshCw, Sprout, Target, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { audiences, whoIGuide } from "@/lib/site";
import { Section, SectionHeading } from "./shared";

const icons: Record<string, LucideIcon> = {
  sprout: Sprout,
  refresh: RefreshCw,
  target: Target,
};

export function WhoIGuide() {
  return (
    <Section id="who">
      <SectionHeading
        eyebrow={whoIGuide.eyebrow}
        heading={whoIGuide.heading}
        text={whoIGuide.intro}
      />

      <Reveal delay={100} className="mt-10">
        <p className="rounded-3xl border border-border bg-secondary/70 p-6 font-display text-xl italic leading-relaxed text-foreground/90 sm:p-8 sm:text-2xl">
          &ldquo;{whoIGuide.note}&rdquo;
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {audiences.map((audience, index) => {
          const Icon = icons[audience.icon] ?? Sprout;
          return (
            <Reveal key={audience.title} delay={index * 90} className="h-full">
              <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-rose-deep transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {audience.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {audience.text}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
