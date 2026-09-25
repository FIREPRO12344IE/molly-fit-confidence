import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services, servicesSection } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "./shared";

export function Services({
  onChoose,
}: {
  onChoose: (coachingType: string) => void;
}) {
  return (
    <Section id="services" className="border-t border-border/60 bg-cream-deep/50">
      <SectionHeading
        eyebrow={servicesSection.eyebrow}
        heading={servicesSection.heading}
        text={servicesSection.text}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 90} className="h-full">
            <article
              className={cn(
                "flex h-full flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift",
                service.featured
                  ? "border-rose-deep/25 bg-secondary shadow-soft"
                  : "border-border bg-card shadow-soft",
              )}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-rose-deep">
                {service.flyerTag}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                {service.text}
              </p>
              <a
                href="#contact"
                onClick={() => onChoose(service.coachingType)}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-rose-deep transition-all hover:gap-3"
              >
                {service.button}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
