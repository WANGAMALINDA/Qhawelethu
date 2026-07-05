// Shared content data used across pages.

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "resources", label: "Resources" },
  { id: "contact", label: "Contact Us" },
];

const COUNSELOR_IMAGE = "assets/therapist.jpeg";
const COUNSELOR_IMAGE2 = "assets/PROFILE 2.jpeg";
// ---------------------------------------------------------------------------
// Vision, Mission
// ---------------------------------------------------------------------------

const VISION_TEXT = "To become a trusted leader in accessible psychological and counselling services, empowering neurodivergent individuals, strengthening families, and promoting emotional well-being across communities through compassionate, evidence-informed, and inclusive care.";

const MISSION_TEXT = "At Qhawelethu Wellness Counselling, our mission is to provide professional, ethical, and accessible online psychological support that helps individuals, families, and communities navigate life's challenges with confidence and resilience. We are committed to delivering evidence-informed counselling, neurodiversity support, behavioural consultation, parent education, and mental wellness services that recognise each person's unique strengths and experiences. Through collaboration, education, and compassionate care, we strive to foster healthier relationships, emotional growth, and lasting positive change.";

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

// ---------------------------------------------------------------------------
// Pricing (USD, per the Qhawelethu Wellness Counselling service guide)
// ---------------------------------------------------------------------------
const PRICING_NOTE = "Regional concession rates may be available in certain circumstances.";

const PRICING_PLANS = [
  { title: "Initial Consultation", duration: "60 minutes", price: "USD 40", desc: "A first session to understand your needs and outline a path forward." },
  { title: "Individual Counselling", duration: "50 minutes", price: "USD 45", desc: "Ongoing one-on-one support tailored to your personal goals." },
  { title: "Parent Consultation", duration: "50 minutes", price: "USD 45", desc: "Guidance and coaching for parents navigating their child's needs." },
  { title: "Family Counselling", duration: "60–75 minutes", price: "USD 65", desc: "Whole-family sessions focused on communication and connection." },
  { title: "Workshops & Training", duration: "By arrangement", price: "Quote upon request", desc: "Group presentations, webinars, and organisational wellness talks." },
];

// ---------------------------------------------------------------------------
// Full Services List (complete catalogue, grouped by category)
// ---------------------------------------------------------------------------
const SERVICE_DELIVERY_NOTE = "All services are provided remotely through secure online video consultation, making support accessible to individuals, families, schools, churches, and organisations across different locations, subject to applicable legal and professional requirements.";

const FULL_SERVICES_LIST = [
  {
    category: "Neurodiversity Services",
    items: [
      "Autism Spectrum Disorder (ASD) Support",
      "ADHD Support",
      "Neurodiversity Consultation",
      "Behavioural Consultation",
      "Parent Coaching for Neurodivergent Children",
      "Executive Functioning Support",
      "Emotional Regulation Support",
      "Social Skills Development",
      "Psychoeducation for Families",
    ],
  },
  {
    category: "Counselling Services",
    items: [
      "Individual Counselling",
      "Child Counselling",
      "Adolescent Counselling",
      "Family Counselling",
      "Parenting Consultation",
      "Relationship Counselling",
      "Stress Management",
      "Anxiety Support",
      "Grief & Loss Support",
      "Life Transition Support",
      "Personal Growth & Resilience Coaching",
    ],
  },
  {
    category: "Family & Parenting Services",
    items: [
      "Parent Guidance",
      "Parent Coaching",
      "Behaviour Management Strategies",
      "Family Communication Support",
      "Conflict Resolution",
      "Positive Parenting Education",
    ],
  },
  {
    category: "Educational & Professional Services",
    items: [
      "Neurodiversity Awareness Workshops",
      "Autism Awareness Workshops",
      "ADHD Awareness Workshops",
      "Parent Education Seminars",
      "School Behaviour Consultation",
      "Teacher Training",
      "Church Mental Wellness Presentations",
      "Community Wellness Workshops",
      "Organisational Mental Wellness Talks",
    ],
  },
  {
    category: "Psychological Consultation",
    items: [
      "Behavioural Consultation",
      "Case Consultation",
      "Parent Consultation",
      "School Consultation",
      "Psychoeducation Sessions",
    ],
  },
  {
    category: "Session Formats",
    items: [
      "Secure Online Video Consultations",
      "Individual Sessions",
      "Family Sessions",
      "Parent-Only Sessions",
      "Workshops",
      "Group Presentations",
      "Educational Webinars",
    ],
  },
];

// ---------------------------------------------------------------------------
// Client Intake Form data
// ---------------------------------------------------------------------------
const INTAKE_CONCERNS = [
  "Anxiety", "Depression", "Stress Management", "Grief & Loss", "Trauma",
  "Emotional Regulation", "Relationship Difficulties", "Family Conflict",
  "Parenting Support", "Child Behavioural Challenges", "Autism Spectrum Disorder (ASD)",
  "ADHD", "Neurodiversity Support", "Social Skills Development", "Self-Esteem",
  "Personal Growth", "Academic Challenges", "Workplace Stress", "Life Transitions",
];

const INTAKE_PLATFORMS = ["Zoom", "Google Meet"];

const INTAKE_BACKGROUND_QUESTIONS = [
  { id: "prev_counselling", label: "Have you previously attended counselling?" },
  { id: "psych_assessment", label: "Have you ever received a psychological assessment?" },
  { id: "diagnosed_condition", label: "Have you ever been diagnosed with a mental health or neurodevelopmental condition?" },
  { id: "current_medication", label: "Are you currently taking any medication?" },
  { id: "other_healthcare", label: "Are you currently seeing another healthcare professional?" },
  { id: "medical_conditions", label: "Do you have any medical conditions that may be relevant?" },
];

const INTAKE_AGREEMENT_ITEMS = [
  { id: "agree_online", label: "Sessions are conducted online." },
  { id: "agree_private_space", label: "I will attend my session in a private and quiet environment." },
  { id: "agree_interruptions", label: "I understand internet interruptions may occur." },
  { id: "agree_confidentiality", label: "I understand confidentiality has limitations when using online technology." },
  { id: "agree_not_emergency", label: "I understand online counselling is not an emergency service." },
  { id: "agree_remote_consent", label: "I consent to receiving psychological and counselling services remotely." },
];

const INTAKE_PRIVACY_ITEM = { id: "privacy_consent", label: "I consent to the collection and secure storage of my personal information in accordance with applicable privacy requirements." };

const INTAKE_CANCELLATION_ITEMS = [
  { id: "cancel_24h", label: "I understand cancellations require at least 24 hours' notice." },
  { id: "cancel_charge", label: "Missed appointments may be charged." },
  { id: "cancel_late", label: "Late arrival may shorten my consultation time." },
];