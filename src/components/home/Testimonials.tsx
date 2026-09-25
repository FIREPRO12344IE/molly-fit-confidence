import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { testimonials, testimonialsSection } from "@/lib/site";
import { Section, SectionHeading } from "./shared";

export function Testimonials() {
  return (
    <Section id="testimonials" className="border-t border-border/60 bg-secondary/40">
      <SectionHeading
        eyebrow={testimonialsSection.eyebrow}
        heading={testimonialsSection.heading}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={index} delay={index * 90} className="h-full">
            <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
              <Quote className="h-6 w-6 text-rose-deep/50" aria-hidden />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm font-semibold text-foreground">
                {testimonial.author}
              </figcaption>
              {testimonial.placeholder ? (
                <span className="mt-4 inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
                  Placeholder review
                </span>
              ) : null}
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
