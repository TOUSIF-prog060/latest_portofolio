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
  /** One sentence per pipeline step, shown as the walkthrough reaches it */
  details: string[];
  stack: string[];
  href?: string;
  hrefLabel: string;
  /** Two colours for the slide's light wash, picked from the aurora palette */
  hue: [string, string];
};

export const projects: Project[] = [
  {
    slug: "jobbot",
    name: "JobBot",
    category: "Agents · Browser automation",
    year: "2026",
    tagline:
      "An autonomous job-application engine — it scrapes live openings, matches your résumé and fills every form, then stops for your review.",
    pipeline: ["Scrape boards", "Parse résumé", "Match & score", "Playwright auto-fill", "Validate + proof"],
    details: [
      "Pulls live openings from public Greenhouse job boards, normalises them and skips duplicates on every re-scrape.",
      "An uploaded PDF résumé is parsed into a structured candidate profile that powers every application.",
      "Each job is scored against that profile, so the dashboard surfaces the strongest matches first.",
      "Playwright opens each form and maps fields by label, name and ARIA — including EEO dropdowns and the résumé upload.",
      "Required fields are validated and a proof screenshot is saved. It never presses submit, and CAPTCHAs are handed to a human.",
    ],
    stack: ["Playwright", "Node.js", "React", "SQLite", "Python", "Docker"],
    href: "https://github.com/TOUSIF-prog060/job_scrappingand_applying_automation",
    hrefLabel: "View code",
    hue: ["#2DD4BF", "#22D3EE"],
  },
  {
    slug: "ultron",
    name: "ULTRON",
    category: "AI Agent · Desktop assistant",
    year: "2026",
    tagline:
      "A voice- and gesture-controlled AI assistant that lives on your PC — it opens apps, types, reads your screen and remembers you.",
    pipeline: ["Voice or gesture", "Multi-LLM router", "Tool calling", "Safety confirm", "Act + remember"],
    details: [
      "Speak naturally through the Web Speech API, or use hand gestures tracked live from the webcam with MediaPipe.",
      "Requests go to Claude first and fall back through OpenAI, Gemini and offline Ollama whenever a provider fails.",
      "The model chooses from real desktop tools — launch apps, type into windows, search files, scan the screen, research the web.",
      "Sensitive actions wait for a confirmation — a spoken yes or a thumbs-up gesture — before anything runs.",
      "Results are spoken back through a Three.js holographic orb, and preferences and corrections persist in long-term memory.",
    ],
    stack: ["Next.js", "Three.js", "MediaPipe", "Claude", "OpenAI", "Ollama"],
    href: "https://github.com/TOUSIF-prog060/ULTRON",
    hrefLabel: "View code",
    hue: ["#8B5CF6", "#A78BFA"],
  },
  {
    slug: "house-expenses",
    name: "SplitHome",
    category: "Full-stack · PWA",
    year: "2026",
    tagline:
      "An installable app for shared homes — split expenses fairly, settle up in the fewest transfers and keep every housemate in sync.",
    pipeline: ["Log expense", "Split fairly", "Live sync", "Settle up", "Push alerts"],
    details: [
      "Housemates record who paid and attach receipts from any phone — it installs to the home screen like a native app.",
      "Costs split equally, by exact amounts or by percentage, calculated in whole paise so the shares always add up.",
      "Supabase Postgres with row-level security and realtime keeps every member's view instantly up to date.",
      "Balances are worked out per member and reduced to the fewest possible transfers, with saved UPI IDs to pay.",
      "Optional web-push notifications announce new expenses, payments and pet feedings on every enabled device.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Postgres", "PWA", "Web Push"],
    href: "https://github.com/TOUSIF-prog060/House_expense_manager",
    hrefLabel: "View code",
    hue: ["#22D3EE", "#8B5CF6"],
  },
  {
    slug: "nyayarag",
    name: "NyayaRAG",
    category: "RAG · Legal AI",
    year: "2025",
    tagline: "A legal AI assistant with evaluated, hallucination-checked retrieval — every answer grounded and cited.",
    pipeline: ["Ingest & embed", "BM25 + dense search", "Cross-encoder re-rank", "Cited answer", "Ragas eval in CI"],
    details: [
      "Legal documents are split into clause-aware chunks and embedded into a Chroma vector store.",
      "Each question runs keyword (BM25) and semantic search together, so exact section numbers and loose phrasing both hit.",
      "A cross-encoder re-scores the candidates and keeps only the passages that actually answer the question.",
      "The LLM answers strictly from those passages and cites every claim back to its source.",
      "Ragas checks faithfulness and relevance on every change in CI, so hallucinations fail the build.",
    ],
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
    details: [
      "n8n pulls the next lead from a Google Sheet queue and prepares the call context.",
      "Twilio places the outbound call and streams the conversation both ways.",
      "ElevenLabs gives the agent a natural voice, so the call sounds human rather than robotic.",
      "The agent asks qualifying questions and adapts to answers as the conversation happens.",
      "Outcomes, notes and booked slots are written back to the sheet with no manual data entry.",
    ],
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
    details: [
      "The agent reads the lead list — names, companies and roles — straight from Google Sheets.",
      "For each lead it gathers context about the person and company to personalise against.",
      "An LLM writes a unique email per lead, not a template with the name swapped in.",
      "Every recipient is checked against the send history, so nobody is ever emailed twice.",
      "Approved emails go out through the Gmail API and the sheet is marked as sent.",
    ],
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
    details: [
      "Farmers enter soil nutrients and local weather conditions for their field.",
      "A Scikit-learn model recommends the crop best suited to those conditions.",
      "For a sick plant, the farmer simply uploads a photo of an affected leaf.",
      "A TensorFlow CNN classifies the disease from the leaf image.",
      "Both tools are served through one simple Flask web app built for farmers.",
    ],
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
    details: [
      "Riders pick a pickup and drop-off on the map and request a ride in a few taps.",
      "The request is matched to a nearby available driver.",
      "The driver's position updates live on the map until pickup and through the trip.",
      "The fare is paid securely inside the app when the ride ends.",
      "An in-ride SOS button lets riders raise an alert instantly if something goes wrong.",
    ],
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
  { title: "AI Chatbots", description: "LLM-powered assistants for your website, WhatsApp and support — trained on your business." },
  { title: "GenAI Apps", description: "AI-powered web and mobile products, shipped to production." },
  { title: "AI UGC Videos", description: "Creator-style ad and product videos made with AI avatars and voices — at scale." },
  { title: "Motion Design", description: "Animated explainers, launch videos and motion graphics that make products click." },
  { title: "Web Development", description: "Fast, animated websites and landing pages, designed and built end-to-end." },
];

export const stack = [
  "Python", "TypeScript", "LangChain", "LangGraph", "OpenAI", "Claude", "Gemini", "LlamaIndex",
  "FastAPI", "n8n", "Twilio", "ElevenLabs", "TensorFlow", "PyTorch", "Chroma", "Supabase",
  "Next.js", "React", "Playwright", "Docker", "AWS", "GitHub Actions",
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
