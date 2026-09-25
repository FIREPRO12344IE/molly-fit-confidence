import { ArrowRight, MessageCircle } from "lucide-react";
import coachPhoto from "@/assets/molly-coach.jpg";
import { Reveal } from "@/components/Reveal";
import { hero, site } from "@/lib/site";
import { Eyebrow, Wordmark, outlinePill, primaryPill } from "./shared";

export function Hero() {
  return (
    <section className="relative px-4 pb-16 pt-10 sm:px-6 md:pb-24 md:pt-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(70%_55%_at_50%_0%,var(--blush)_0%,transparent_70%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-foreground text-balance sm:text-5xl lg:text-[3.4rem]">
            {hero.heading}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subheading}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className={primaryPill}>
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={site.whatsapp.url}
              target="_blank"
              rel="noreferrer"
              className={outlinePill}
            >
              <MessageCircle className="h-4 w-4" />
              {hero.secondaryCta}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {hero.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rose-deep" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rotate-3 rounded-[2.75rem] bg-secondary"
          />
          <img
            src={coachPhoto}
            alt="Molly, owner of MR Coaching, training in the gym"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-soft ring-1 ring-border"
          />
          <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-soft backdrop-blur sm:block">
            <Wordmark size="sm" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
