// =============================================================
// All site copy lives here. Edit this file to update the site.
// =============================================================

export const site = {
  name: "Tousif Raza",
  shortName: "tousif",
  title: "Tousif Raza — AI Automation Engineer",
  description:
    "I build autonomous AI agents and production-grade LLM systems that automate business work — RAG pipelines, voice agents, WhatsApp automation and workflow automation.",
  url: "https://tousifraza.dev", // TODO: replace with your real deployed domain
  location: "Bangalore, India",
  bio: "AI automation engineer building agents, RAG systems and voice AI that replace manual work for startups and businesses.",
  available: true,
  links: {
    github: "https://github.com/TOUSIF-prog060",
    linkedin: "https://www.linkedin.com/in/tousif-shiekh-a06776367",
    email: "tousifshiekh1033@gmail.com",
    resume: "/resume.pdf",
  },
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  pipeline: string[];
  stack: string[];
  href?: string;
  hrefLabel: string;
  /** Two colours for the slide's light wash, picked from the aurora palette */
  hue: [string, string];
};

export const projects: Project[] = [
  {
    slug: "nyayarag",
    name: "NyayaRAG",
    category: "RAG · Legal AI",
    year: "2025",
    tagline: "A legal AI assistant with evaluated, hallucination-checked retrieval — every answer grounded and cited.",
    pipeline: ["Ingest & embed", "BM25 + dense search", "Cross-encoder re-rank", "Cited answer", "Ragas eval in CI"],
    stack: ["LlamaIndex", "FastAPI", "Chroma", "Docker", "Ragas"],
    href: "https://github.com/TOUSIF-prog060",
    hrefLabel: "View code",
    hue: ["#8B5CF6", "#22D3EE"],
  },
  {
    slug: "voice-agent",
    name: "Voice Agent",
    category: "Voice AI · Sales",
    year: "2025",
    tagline: "An AI that calls, qualifies and books leads — every outcome logged with zero manual data entry.",
    pipeline: ["Lead queue", "Twilio call", "ElevenLabs voice", "Qualify in real time", "Log + schedule"],
    stack: ["n8n", "Twilio", "ElevenLabs", "Google Sheets"],
    href: "https://github.com/TOUSIF-prog060/AI-POWERED-AUTOMATED-CALLING-AGENT",
    hrefLabel: "View code",
    hue: ["#22D3EE", "#2DD4BF"],
  },
  {
    slug: "cold-outreach",
    name: "Outreach Agent",
    category: "Agents · Automation",
    year: "2025",
    tagline: "Autonomous, genuinely personalised cold email at scale — with guaranteed zero duplicate sends.",
    pipeline: ["Sheet of leads", "Research context", "Draft per lead", "Dedupe check", "Send via Gmail"],
    stack: ["LLM Agents", "Gmail API", "Google Sheets"],
    href: "https://github.com/TOUSIF-prog060/HR-Email-Assistant",
    hrefLabel: "View code",
    hue: ["#A78BFA", "#2DD4BF"],
  },
  {
    slug: "kisanmitra",
    name: "KisanMitra",
    category: "ML · Published research",
    year: "2024",
    tagline: "Crop recommendation and plant-disease detection for farmers. Peer-reviewed at FutureTech 2025.",
    pipeline: ["Soil + weather data", "Crop model", "Leaf image", "CNN diagnosis", "Flask app"],
    stack: ["TensorFlow", "Scikit-learn", "Flask"],
    href: "https://github.com/TOUSIF-prog060/KISAN-MITRA",
    hrefLabel: "View code",
    hue: ["#2DD4BF", "#8B5CF6"],
  },
  {
    slug: "transitgo",
    name: "TransitGo",
    category: "iOS · Shipped",
    year: "2024",
    tagline: "A ride-booking app live on the App Store — live tracking, secure payments and in-ride SOS.",
    pipeline: ["Book", "Match driver", "Live tracking", "Pay in-app", "SOS"],
    stack: ["iOS", "Maps SDK", "REST APIs", "Payments"],
    href: "https://apps.apple.com/in/app/transitgo-india/id6771907592",
    hrefLabel: "App Store",
    hue: ["#22D3EE", "#A78BFA"],
  },
];

export const services = [
  { title: "AI Agents", description: "Autonomous agents that reason, plan and act across your tools." },
  { title: "RAG Systems", description: "Answers grounded in your documents, evaluated for accuracy." },
  { title: "Voice Agents", description: "Natural AI voices for calls, qualification and support." },
  { title: "Workflow Automation", description: "Business processes connected end-to-end with n8n and APIs." },
  { title: "WhatsApp AI", description: "Meta WhatsApp agents for sales, support and lead capture." },
  { title: "GenAI Apps", description: "AI-powered web and mobile products, shipped to production." },
];

export const stack = [
  "Python", "TypeScript", "LangChain", "LangGraph", "OpenAI", "Claude", "Gemini", "LlamaIndex",
  "FastAPI", "n8n", "Twilio", "ElevenLabs", "TensorFlow", "PyTorch", "Chroma", "Supabase",
  "Next.js", "React", "Docker", "AWS", "GitHub Actions",
];

export const stats = [
  { value: "10+", label: "AI systems shipped" },
  { value: "200+", label: "Hours automated / month" },
  { value: "1", label: "Published paper" },
  { value: "5+", label: "Client domains" },
];

export const timeline = [
  { year: "2025", title: "Freelance AI Automation Engineer", place: "Independent" },
  { year: "2025", title: "Agentic systems — NyayaRAG, Voice & Outreach agents", place: "Projects" },
  { year: "2024", title: "Software Development Intern", place: "Shankh Technologies" },
  { year: "2024", title: "Published KisanMitra research", place: "FutureTech 2025" },
  { year: "2022", title: "B.E. in AI & Machine Learning", place: "Education" },
];
