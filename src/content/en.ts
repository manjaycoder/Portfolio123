import type { Dict } from "./types";

export const en: Dict = {
  documentTitle: "Manjay-webdev — web development",
  metaDescription:
    "2nd Year BCA student in Cloud Computing and Information Security, based in Haryana, Panipat, building modern web projects and learning by shipping real work.",

  nav: {
    about: "About",
    projects: "Work",
    stack: "Tech stack",
    services: "Services",
    faq: "Questions",
    contact: "Get in touch",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Switch language to Russian",
    skipToContent: "Skip to content",
  },

  hero: {
    lineOne: "Every good product starts with an *idea*.",
    lineTwo: "I build it with code, design, and problem-solving.",
    invite: "See what I’ve been building.",
    primary: "See the work",
    secondary: "Get in touch",
  },


about: {
  title: "About *me*",
  paragraphs: [
    "I’m Manjay-webdev, a software developer based in India, with a completed BCA degree specializing in Cloud Computing and Information Security. I build practical, scalable, and polished web applications that combine modern design with reliable functionality.",

    "My experience spans frontend and full-stack development, UI/UX engineering, backend systems, and API development. I’ve worked on responsive interfaces, interactive dashboards, REST APIs, authentication systems, database integration, and production-oriented applications. I focus on clean architecture, performance, security, and intuitive user experiences.",

    "I enjoy turning complex ideas into real-world digital products, from business platforms and SaaS applications to booking systems and AI-powered integrations. I continuously strengthen my engineering skills through hands-on projects, modern development tools, cloud technologies, and deployment workflows. I’m open to exciting opportunities, collaborations, and building impactful software with ambitious teams.",
  ],
  figure: "From idea to usable product",
},

  projects: {
    title: "Selected work",
    counterOf: "of",
    flipHint: "Click the card",
    previous: "Previous project",
    next: "Next project",
    open: "Open on GitHub",
    openLive: "Visit live site",
    back: "Back to the cover",
    items: {
      "ai-sales": {
        title: "TimbStay",
        kind: "Verified PG, hostel & stay booking",
        focus: ["BOOKING UX", "SECURE PAYMENTS", "PROPERTY DISCOVERY"],
        description:
          "A polished accommodation marketplace for finding trusted stays, comparing locations, and booking in a few steps. The experience is designed around trust, fast discovery, and a modern property-booking flow inspired by leading travel platforms.",
      },
      prmpt: {
        title: "Fashion Landing",
        kind: "Clothing brand landing page",
        focus: ["SDE", "Frontend performance"],
        description:
          "An immersive interface with scroll-driven motion, responsive media and careful interaction states. The work demonstrates how to balance visual ambition with a maintainable frontend implementation.",
      },
      "japanese-restaurant": {
        title: "Japanese Restaurant",
        kind: "Restaurant landing page",
        focus: ["SDE", "UX engineering"],
        description:
          "A responsive product surface built around clear information hierarchy, reusable content patterns and restrained motion. It shows attention to accessibility, navigation and the complete user journey.",
      },
      "stipula-legal": {
        title: "Stipula Legal",
        kind: "Legal practice landing page",
        focus: ["SDE", "Information architecture"],
        description:
          "A content-heavy legal site organised around trust, discoverability and a clear information hierarchy. A good example of turning a complex service into a usable, responsive interface.",
      },
      "nimbus-crm": {
        title: "Nimbus CRM",
        kind: "CRM dashboard",
        focus: ["SDE", "System design", "Data visualization"],
        description:
          "A CRM dashboard for clients, deals and tasks, designed around dense application state and fast scanning. It is the strongest portfolio signal for dashboard architecture, data modeling and operational UX.",
      },
      "productivity-bot": {
        title: "Productivity Tracker Bot",
        kind: "Telegram bot",
        focus: ["SDE", "System design", "Data workflows"],
        description:
          "A product with subscriptions, referrals and an admin panel, connecting user flows, business rules and persistent data. It demonstrates backend thinking, integrations and shipping a complete system.",
      },
      "pag-commodities": {
        title: "PAG Commodities",
        kind: "Bilingual website on Tilda",
        focus: ["Data analytics", "B2B systems"],
        description:
          "A bilingual B2B site for a company working across global commodity flows. The project required structuring market, geography and business information so it could be scanned and understood quickly.",
      },
      "acme-workforce": {
        title: "Acme Workforce",
        kind: "AI-powered workforce management dashboard",
        focus: ["SAAS", "ADMIN DASHBOARD", "AI WORKFLOWS"],
        description:
          "An enterprise workforce dashboard concept that brings employee and department metrics, sprint progress, task priorities, and AI assistance into a single command center. The interface pairs dense operational data with a clear visual hierarchy so teams can spot urgent work and understand performance at a glance.",
      },
    },
  },

  services: {
    title: "What I can *help* with",
    lead: "On the left, what I build constantly. On the right, what I take on when the job is bigger.",
    primaryTitle: "Most of my work",
    primary: [
      "Landing pages",
      "Corporate sites",
      "Multi-page sites",
      "CRM systems",
      "Dashboards",
      "Telegram bots",
      "Admin panels",
      "Client portals",
      "Service catalogues",
      "Online storefronts",
      "AI integrations",
      "Contact forms",
      "Business process automation",
      "Responsive interfaces",
      "Work on existing projects",
    ],
    secondaryTitle: "Also happy to take on",
    secondary: [
      "SaaS platforms",
      "Marketplaces",
      "ERP systems",
      "Large web applications",
      "AI agents",
      "Complex API integrations",
      "Unusual web services",
    ],
  },

  techStack: {
    label: "Engineering capabilities",
    title: "Tech *stack*",
    lead: "The technologies, frameworks, and engineering practices I use to build modern web applications, intelligent AI agents, and production-ready software.",
    groups: [
      {
        title: "SDE & frontend",
        items: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Git",
          "Data Structures",
          "Algorithms",
          "OOP",
        ],
      },
      {
        title: "Backend & system design",
        items: [
          "Node.js",
          "NestJS",
          "Express.js",
          "REST APIs",
          "PostgreSQL",
          "SQL",
          "Redis",
          "Database Design",
          "Authentication",
          "API Design",
          "System Design",
        ],
      },
      {
        title: "AI agents & frameworks",
        items: [
          "LLM APIs",
          "AI Agents",
          "LangChain",
          "LangGraph",
          "LlamaIndex",
          "CrewAI",
          "OpenAI Agents SDK",
          "Tool Calling",
          "Agentic Workflows",
          "RAG",
          "Vector Databases",
          "MCP",
        ],
      },
      {
        title: "Data & AI engineering",
        items: [
          "Python",
          "Prompt Engineering",
          "Embeddings",
          "Semantic Search",
          "Pinecone",
          "ChromaDB",
          "Structured Outputs",
          "AI API Integration",
        ],
      },
      {
        title: "Cloud, DevOps & quality",
        items: [
          "Linux",
          "Docker",
          "Nginx",
          "AWS",
          "GitHub Actions",
          "CI/CD",
          "Jest",
          "Vitest",
          "Playwright",
          "Testing",
          "Monitoring",
          "Performance",
        ],
      },
    ],
  },

  approach: {
    title: "Why people choose me",
    negativeTitle: "Not how I *work*",
    negative: [
      "Building only what the brief says, suggesting no improvements.",
      "Rushing at the cost of quality.",
      "Ignoring interface detail and the user's experience.",
      "Disappearing once the project is handed over.",
      "Reaching for a template without understanding the problem.",
    ],
    positiveTitle: "How I *work*",
    positive: [
      "Understand the problem first, write the code second.",
      "Think the product through as a whole, not page by page.",
      "Treat detail and ease of use as part of the job.",
      "Stay in touch with the client for the whole build.",
      "Take the project to a result worth being proud of.",
    ],
  },

  faq: {
    title: "Frequently asked *questions*",
    items: [
      {
        question: "How long does development take?",
        answer:
          "It depends on the project. Small sites can be done in a few days; larger ones need more time. We agree on realistic dates before any work starts.",
      },
      {
        question: "What do you need to get started?",
        answer:
          "A description of the idea or the problem is enough. If something is missing, I will help work out the structure and pick the right solution.",
      },
      {
        question: "Can you work on an existing site?",
        answer:
          "Yes. I build new projects and I also extend, update and improve sites that already exist.",
      },
      {
        question: "Can we start without a finished design?",
        answer:
          "Yes. If the design isn't ready, we'll work out the structure and the style together and find what fits your task.",
      },
      {
        question: "Can new features be added later?",
        answer:
          "Of course. I stay reachable after a project ships, so the product can keep growing and gaining features over time.",
      },
      {
        question: "Will the site work on mobile?",
        answer:
          "Yes. Everything I build works properly on phones, tablets, laptops and large monitors.",
      },
      {
        question: "Can you help with publishing the site?",
        answer:
          "Yes. If you need it, I will help choose hosting and a domain, handle the deployment and answer anything about the launch.",
      },
      {
        question: "What does the price include?",
        answer:
          "Building the agreed functionality, responsive markup, testing, fixing defects and preparing the project for launch.",
      },
      {
        question: "Can I order a Telegram bot on its own?",
        answer:
          "Yes. Telegram bots are a separate line of my work and can be built either on their own or alongside a site.",
      },
      {
        question: "What happens after the project is finished?",
        answer:
          "I stay reachable after handover. If questions come up or the project needs to grow further, you can always come back.",
      },
    ],
  },

  contact: {
    title: "Let’s build something *great*.",
    lead: "I’m open to projects, collaborations, and new opportunities.",
    cta: "Get in touch",
    collapse: "Collapse",
    copied: "Copied",
    items: {
      telegram: {
        name: "Telegram",
        note: "Fastest way to reach me for new work.",
        action: "Message me",
      },
      email: {
        name: "Email",
        note: "For project discussions and detailed inquiries.",
        action: "Send an email",
      },
      discord: {
        name: "Discord",
        note: "Another way to connect and chat.",
        action: "Open Discord",
      },
      github: {
        name: "GitHub",
        note: "Browse my public work and experiments.",
        action: "View GitHub",
      },
      kwork: {
        name: "Portfolio",
        note: "A look at my live work and project profile.",
        action: "Open portfolio",
      },
    },
  },

  finale: {
    line: "A good product starts with a good *idea*.",
    sub: "The rest is a question of how it’s built.",
    copyright: "© 2026 Manjay-webdev",
    signature: "Built with curiosity, code, and care",
  },
};
