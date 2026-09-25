import {
  BellRing,
  ClipboardList,
  Dumbbell,
  Heart,
  Sparkles,
  Sprout,
  Sun,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { benefits, why } from "@/lib/site";
import { Section, SectionHeading } from "./shared";

const benefitIcons: Record<string, LucideIcon> = {
  "Supportive coaching": Heart,
  "Personalised training": Dumbbell,
  "Structured programmes": ClipboardList,
  "Confidence-building": Sparkles,
  Accountability: BellRing,
  "Goal-focused training": Target,
  "Beginner friendly": Sprout,
  "Friendly and welcoming environment": Sun,
};

export function WhyMRCoaching() {
  return (
    <Section id="why" className="border-t border-border/60">
      <SectionHeading
        eyebrow={why.eyebrow}
        heading={why.heading}
        text={why.text}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefitIcons[benefit] ?? Sparkles;
          return (
            <Reveal key={benefit} delay={index * 60} className="h-full">
              <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-rose-deep/30">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blush text-rose-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-[0.95rem] font-semibold leading-snug text-foreground">
                  {benefit}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
