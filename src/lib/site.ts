/*
 * MR Coaching — site content.
 * All website text lives here so the owner can edit copy in one place,
 * without touching the page code.
 */

export const site = {
  name: "MR Coaching",
  coach: "Molly",
  tagline: "Build confidence. Get stronger. Feel better.",
  instagram: {
    handle: "@mollymrlyslift",
    url: "https://instagram.com/mollymrlyslift",
  },
  whatsapp: {
    display: "07868863668",
    url: "https://wa.me/447868863668",
  },
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Why MR Coaching", to: "/why-mr-coaching" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export const hero = {
  heading: "Build Confidence. Get Stronger. Feel Better.",
  subheading:
    "Supportive, structured personal training to help you become stronger, fitter and more confident — inside and outside the gym.",
};

export const about = {
  heading: "Hi, I'm Molly",
  text: "My mission is to help you build confidence in your body, both in and out of the gym. I provide supportive, structured coaching to help you get stronger, fitter, and more confident.",
};

export const audiences = [
  {
    icon: "sprout",
    title: "New to Training",
    text: "Starting the gym can feel intimidating, but you don't have to do it alone. I'll help you learn the basics and feel confident in the gym.",
  },
  {
    icon: "refresh",
    title: "Getting Back on Track",
    text: "Whether you've had time away from training or simply want to rebuild your routine, we'll create a plan that works for you.",
  },
  {
    icon: "target",
    title: "Performance & Fitness Goals",
    text: "Work towards goals such as running, fitness events, strength improvements and overall performance.",
  },
] as const;

export const services = [
  {
    title: "1–1 Personal Training",
    text: "Individual sessions tailored specifically to your goals, experience and fitness level.",
    button: "Ask About Pricing",
  },
  {
    title: "Monthly Coaching",
    text: "Ongoing support, structure and accountability to help you stay consistent and keep progressing.",
    button: "Enquire Now",
  },
  {
    title: "Train With a Friend",
    text: "Want to bring a friend? Both of you can receive a discount.",
    button: "Enquire Now",
  },
] as const;

export const benefits = [
  "Supportive coaching",
  "Personalised training",
  "Structured programmes",
  "Confidence-building",
  "Accountability",
  "Goal-focused training",
  "Beginner friendly",
  "Friendly and welcoming environment",
] as const;

/*
 * PLACEHOLDER TESTIMONIALS
 * These are clearly-marked placeholders so the page layout can be reviewed.
 * Replace the text below with real client words — and delete the
 * "placeholder" flag — before going live. Never invent reviews.
 */
export const testimonials = [
  {
    placeholder: true,
    quote:
      "[Placeholder — replace with a real client review. Two or three sentences about their experience works best.]",
    author: "Client name",
  },
  {
    placeholder: true,
    quote:
      "[Placeholder — replace with a real client review. Two or three sentences about their experience works best.]",
    author: "Client name",
  },
  {
    placeholder: true,
    quote:
      "[Placeholder — replace with a real client review. Two or three sentences about their experience works best.]",
    author: "Client name",
  },
] as const;

export const contact = {
  heading: "Ready to Get Started?",
  text: "Whether you're new to the gym, getting back into training or working towards a specific fitness goal, get in touch and let's chat.",
};

export const trainingExperienceOptions = [
  "Brand new to training",
  "Some experience",
  "Returning after a break",
  "Experienced",
] as const;

export const coachingTypeOptions = [
  "1–1 Personal Training",
  "Monthly Coaching",
  "Train With a Friend",
  "Not sure yet",
] as const;
