import portrait from "@/assets/molly-portrait.jpg";
import { Reveal } from "@/components/Reveal";
import { about, site } from "@/lib/site";
import { Eyebrow, Section } from "./shared";

export function About() {
  return (
    <Section id="about" className="border-t border-border/60">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div
            aria-hidden
            className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl border border-border"
          />
          <div
            aria-hidden
            className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full bg-blush/60 blur-2xl"
          />
          <img
            src={portrait}
            alt="Molly, personal trainer and owner of MR Coaching"
            className="relative aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-soft ring-1 ring-border"
          />
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
            {about.heading}
          </h2>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {about.role}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">
            {about.text}
          </p>
          <p className="mt-8 font-display text-3xl italic text-rose-deep">
            {site.coach}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
