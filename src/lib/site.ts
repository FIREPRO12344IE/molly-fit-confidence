/*
 * MR Coaching — site content.
 * All website text lives here so the owner can edit copy in one place,
 * without touching the page code. Wording follows the MR Coaching flyer.
 */

export const site = {
  name: "MR Coaching",
  coach: "Molly",
  role: "Owner of MR Coaching",
  tagline: "Build confidence. Get stronger. Feel better.",
  instagram: {
    handle: "@mollyrhysfit",
    url: "https://instagram.com/mollyrhysfit",
  },
  whatsapp: {
    display: "07868863668",
    url: "https://wa.me/447868863668",
  },
};

/*
 * The home page holds every section, so navigation jumps to those sections
 * instead of separate pages. Change `href` if a section moves.
 */
export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why MR Coaching", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Personal training with Molly",
  heading: "Build Confidence. Get Stronger. Feel Better.",
  subheading:
    "Supportive, structured personal training to help you become stronger, fitter and more confident — inside and outside the gym.",
  primaryCta: "Book a Session",
  secondaryCta: "Message Me",
  highlights: [
    "Beginner friendly",
    "Structured programmes",
    "Supportive coaching",
  ],
};

export const about = {
  eyebrow: "My mission",
  heading: "Hi, I'm Molly 👋",
  role: "Owner of MR Coaching",
  text: "My mission is to help you build confidence in your body, both in and out of the gym. I provide supportive, structured coaching to help you get stronger, fitter, and more confident.",
};

export const whoIGuide = {
  eyebrow: "Who I guide",
  heading: "Wherever you're starting from",
  intro:
    "Whether you're new to training, getting back on track, or working towards a performance goal like running or fitness events, I'm here to guide you.",
  note: "Starting the gym can feel intimidating, but you don't have to do it alone.",
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

export const servicesSection = {
  eyebrow: "How I Can Help",
  heading: "Services",
  text: "Message Molly if you're not sure which option suits you best — there's no pressure to decide now.",
};

/*
 * `coachingType` must match an entry in coachingTypeOptions below — that is what
 * pre-fills the enquiry form when someone clicks a service button.
 * `flyerTag` is the short offer wording as printed on the flyer.
 */
export const services = [
  {
    coachingType: "1–1 Personal Training",
    flyerTag: "1-1 PT sessions tailored to you",
    title: "1–1 Personal Training",
    text: "Individual sessions tailored specifically to your goals, experience and fitness level.",
    button: "Ask About Pricing",
    featured: false,
  },
  {
    coachingType: "Monthly Coaching",
    flyerTag: "Monthly coaching packages",
    title: "Monthly Coaching",
    text: "Ongoing support, structure and accountability to help you stay consistent and keep progressing.",
    button: "Enquire Now",
    featured: true,
  },
  {
    coachingType: "Train With a Friend",
    flyerTag: "Both get discount!",
    title: "Train With a Friend",
    text: "Want to bring a friend? Both of you can receive a discount.",
    button: "Enquire Now",
    featured: false,
  },
] as const;

export const why = {
  eyebrow: "Why MR Coaching",
  heading: "Coaching that fits around you",
  text: "What you can expect every time you train with MR Coaching.",
};

/* Labels are shown exactly as written — the icons live in the page code. */
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

export const testimonialsSection = {
  eyebrow: "Testimonials",
  heading: "What clients say",
};

/*
 * PLACEHOLDER TESTIMONIALS
 * Clearly-marked placeholders so the layout can be reviewed. Replace the quote
 * text with real client words and set `placeholder: false` before going live.
 * Never invent reviews.
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
  eyebrow: "Contact me! 🙌",
  heading: "Ready to Get Started?",
  text: "Whether you're new to the gym, getting back into training or working towards a specific fitness goal, get in touch and let's chat.",
  nextStepsTitle: "What happens next",
  nextSteps: [
    {
      title: "You send your enquiry",
      body: "Use the form or message me directly — whichever is easier for you.",
    },
    {
      title: "We have a chat",
      body: "I'll answer your questions and learn what you're working towards.",
    },
    {
      title: "You try a session",
      body: "We find a time that suits you and get started with something that fits you.",
    },
  ],
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

/* Enquiry form copy — every label and message is editable here. */
export const form = {
  title: "Send an enquiry",
  intro:
    "Fill this in and your message opens in WhatsApp, ready to send. Nothing goes to Molly until you press send there.",
  fields: {
    name: "Name",
    email: "Email",
    phone: "Phone number",
    goals: "What are your goals?",
    experience: "Training experience",
    coachingType: "Preferred type of coaching",
    availability: "Preferred days/times",
    message: "Message",
  },
  placeholders: {
    name: "Your name",
    email: "you@example.com",
    phone: "Your phone number",
    goals: "e.g. build strength, feel more confident in the gym",
    experience: "Select an option",
    coachingType: "Select an option",
    availability: "e.g. weekday mornings, Tuesday evenings",
    message: "Anything else you'd like me to know?",
  },
  submit: "Send Enquiry",
  success: {
    heading: "Your enquiry is ready",
    body: "WhatsApp should have opened with your message — just press send there. If it didn't open, use the button below.",
    reopen: "Open WhatsApp with your enquiry",
    copy: "Copy enquiry text",
    copied: "Copied",
    reset: "Send another enquiry",
  },
  errors: {
    name: "Please add your name.",
    email: "Please add a valid email address.",
    message: "Please add a short message.",
  },
};
