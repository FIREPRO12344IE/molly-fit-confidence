import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { WhoIGuide } from "@/components/home/WhoIGuide";
import { WhyMRCoaching } from "@/components/home/WhyMRCoaching";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MR Coaching — Supportive Personal Training with Molly" },
      {
        name: "description",
        content:
          "Build confidence, get stronger and feel better with supportive, structured personal training from Molly. Beginner-friendly 1-1 PT sessions, monthly coaching packages and train-with-a-friend options.",
      },
      {
        property: "og:title",
        content: "MR Coaching — Supportive Personal Training with Molly",
      },
      {
        property: "og:description",
        content:
          "Supportive, structured personal training to help you become stronger, fitter and more confident — inside and outside the gym.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [coachingType, setCoachingType] = useState("");

  return (
    <div id="top">
      <Hero />
      <About />
      <WhoIGuide />
      <Services onChoose={setCoachingType} />
      <WhyMRCoaching />
      <Testimonials />
      <Contact
        coachingType={coachingType}
        onCoachingTypeChange={setCoachingType}
      />
    </div>
  );
}
