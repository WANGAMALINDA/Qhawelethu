// Shared content data used across pages.

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "resources", label: "Resources" },
  { id: "contact", label: "Contact Us" },
];

const COUNSELOR_IMAGE = "assets/therapist.jpg";

const SPECIALIZATIONS = [
  "Child & Adolescent",
  "Couples & Marriage",
  "Individual & Trauma",
  "Multi-generational Family",

];

const TESTIMONIALS = [
  {
    quote: "From our very first session, we felt heard and supported — it changed how our family communicates.",
    name: "Qhawelethu client",
  },
  {
    quote: "We finally found a counsellor who understands our son and works with our whole family, not against us.",
    name: "J. Mathebula",
  },
];

const CONTACT_TESTIMONIALS = [
  {
    quote: "Our first session left me feeling truly heard for the first time in years. Finni made room for the whole family's story.",
    name: "L. Mokoena",
  },
  {
    quote: "We came in unsure how to talk to each other again. Six months later, dinner table conversations feel easy.",
    name: "T. & S. Naidoo",
  },
];

const BLOG_POSTS = [
  { title: "Understanding Sensory Processing", date: "Jun 1, 2026", image: "assets/senses.png" },
  { title: "Parenting Neurodivergent Kids", date: "Apr 12, 2026", image: "assets/MINDFUL.png" },
  { title: "Mindfulness for Families", date: "Feb 3, 2026", image: "assets/poster 1.jpg" },
];

const BLOG_POSTS_BOOKING = [
  { title: "Understanding Sensory Processing", date: "Jun 1, 2026", image: "assets/senses.png" },
  { title: "Parenting Neurodivergent Kids", date: "Apr 12, 2026", image: "assets/MINDFUL.png" },
  { title: "Mindfulness for Families", date: "Feb 3, 2026", image: "assets/poster 1.jpg" },
];

const ARTICLES = [
  { title: "Understanding Sensory Processing", tag: "Neurodiversity", date: "Jun 12, 2026", image: "assets/senses.png" },
  { title: "Parenting Neurodivergent Kids", tag: "Parenting", date: "May 28, 2026", image: "assets/MINDFUL.png" },
  { title: "Mindfulness for Families", tag: "Wellbeing", date: "May 14, 2026", image: "assets/poster 1.jpg" },
];

const APPROACH_ITEMS = [
  {
    title: "Neurodiversity-Affirming Care",
    desc: "Support that celebrates how each mind works, rather than trying to change it.",
    path: `<path d="M12 21s-7.5-4.6-10-9.3C.6 8 2.5 4 6.5 4 9 4 11 5.5 12 7c1-1.5 3-3 5.5-3 4 0 5.9 4 4.5 7.7C19.5 16.4 12 21 12 21z" />`,
  },
  {
    title: "Evidence-Based Techniques",
    desc: "Proven methods tailored to each client's needs, pace, and goals.",
    path: `<path d="M3 3v18h18" /><path d="M7 15l4-5 3 3 5-7" />`,
  },
  {
    title: "Safe & Welcoming Space",
    desc: "A warm, comfortable environment where every family feels welcome.",
    path: `<path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />`,
  },
];

const FEATURED_SERVICES = [
  {
    title: "Child & Adolescent Therapy",
    desc: "Gentle, age-appropriate support that helps young people build confidence and coping skills.",
    bg: "var(--sage)",
    image: "assets/child.jpeg",
  },
  {
    title: "Adult Counselling",
    desc: "One-on-one sessions addressing anxiety, life transitions, and personal growth.",
    bg: "var(--linen)",
    image: "assets/marriage.jpg",
  },
  {
    title: "Family Therapy",
    desc: "Rebuilding connection and communication for stronger, more resilient families.",
    bg: "var(--sage)",
    image: "assets/family.jpg",
  },
];

const VALUE_ICON_PATHS = {
  compassion: `<path d="M12 21s-7.5-4.6-10-9.3C.6 8 2.5 4 6.5 4 9 4 11 5.5 12 7c1-1.5 3-3 5.5-3 4 0 5.9 4 4.5 7.7C19.5 16.4 12 21 12 21z" />`,
  neurodiversity: `<path d="M9 3a4 4 0 00-4 4c0 1 .3 1.8.8 2.5A4 4 0 004 13a4 4 0 002.4 3.7A3.5 3.5 0 009 20a3 3 0 003-3V6a3 3 0 00-3-3z" /><path d="M15 3a4 4 0 014 4c0 1-.3 1.8-.8 2.5A4 4 0 0120 13a4 4 0 01-2.4 3.7A3.5 3.5 0 0115 20a3 3 0 01-3-3V6a3 3 0 013-3z" />`,
  evidence: `<path d="M3 5.5A2.5 2.5 0 015.5 3H11v18H5.5A2.5 2.5 0 013 18.5v-13z" /><path d="M21 5.5A2.5 2.5 0 0018.5 3H13v18h5.5a2.5 2.5 0 002.5-2.5v-13z" />`,
  culture: `<circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9z" />`,
};

const VALUES = [
  { key: "compassion", title: "Compassion", desc: "Every conversation is met with warmth, patience, and genuine care.", bg: "var(--sage)" },
  { key: "neurodiversity", title: "Neurodiversity-Affirming", desc: "Support that recognises and respects how each mind naturally works.", bg: "#bad2cb" },
  { key: "evidence", title: "Evidence-Based", desc: "Techniques grounded in research, tailored to each client's pace and goals.", bg: "var(--sage)" },
  { key: "culture", title: "Cultural Sensitivity", desc: "Care that honours diverse backgrounds, traditions, and family structures.", bg: "#bdddd3" },
];

const SERVICE_ICON_PATHS = {
  child: `<path d="M4 20l4-1 9-9-3-3-9 9-1 4z" /><path d="M13 8l3 3" />`,
  couples: `<circle cx="9" cy="12" r="5" /><circle cx="15" cy="12" r="5" />`,
  individual: `<path d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" /><circle cx="12" cy="11" r="3" />`,
  family: `<circle cx="7" cy="8" r="2.5" /><circle cx="17" cy="8" r="2.5" /><circle cx="12" cy="6" r="2.2" /><path d="M2.5 19c.5-3 2.4-5 4.5-5s4 2 4.5 5" /><path d="M12.5 19c.5-2.6 2-4.4 3.8-4.7" /><path d="M21.5 19c-.5-3-2.4-5-4.5-5" />`,
};

const SERVICES = [
  { key: "child", title: "Child & Adolescent Therapy", desc: "Play and talk therapy for younger clients to explore emotions, build coping skills, and address sensory needs.", bg: "var(--sage)" },
  { key: "couples", title: "Couples & Marriage Counselling", desc: "Communication support, conflict resolution, and intimacy building for partners at every stage.", bg: "#c8e7dd" },
  { key: "individual", title: "Individual & Trauma Therapy", desc: "Confidential sessions for stress, anxiety, depression, and somatic processing of traumatic experiences.", bg: "var(--sage)" },
  { key: "family", title: "Multi-generational Family Therapy", desc: "Navigating complex family dynamics, communication issues, and supporting collective healing and understanding.", bg: "#c8e7dd" },
];

const CATEGORIES = [
  { icon: "bookOpen", title: "Insightful Articles & Blog Posts", desc: "Deep dives on sensory processing, emotional regulation, and neurodiversity-affirming practice.", cta: "Read articles", href: "https://neurodivergentinsights.com/neurodivergent-affirming-practices/" },
  { icon: "clipboardList", title: "Downloadable Workbooks & Exercises", desc: "Practical, step-by-step guides for skill-building and self-reflection, printable for your own pace.", cta: "Download guides", href: "https://infobooks.org/free-pdf-books/self-improvement/" },
  { icon: "video", title: "Webinars & Video Resources", desc: "Pre-recorded sessions and expert-led discussions on mental health and neurodiversity topics.", cta: "Watch videos", href: "https://www.youtube.com/watch?v=Gn0AuZWTGXU" },
  { icon: "link2", title: "Trusted External Links & Partners", desc: "A curated list of reliable organizations, support groups, and external resources we recommend.", cta: "Explore links", href: "https://sites.rowan.edu/neurodiversity/neurodiversity-resources/organizations-and-groups.html" },
];

const BOOKING_SERVICES = [
  { name: "Individual & Trauma", blurb: "One-on-one sessions for anxiety, trauma recovery, and personal growth, at a pace that feels safe." },
  { name: "Couples & Marriage", blurb: "Rebuild trust and communication together, guided by a counselor trained in relational repair." },
  { name: "Child & Adolescent", blurb: "Play-based and talk therapy for children navigating big feelings, school stress, or neurodivergence." },
  { name: "Online Telehealth", blurb: "The same compassionate care from your own home, over a secure, HPCSA-compliant video line." },
];

const TIME_SLOTS = ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "03:30 PM", "05:00 PM"];
