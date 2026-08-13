export const person = {
  name: "Lucas Longacre",
  pronouns: "he/him",
  title: "Head of Product",
  company: "Inlightened",
  tagline: "AI & LLM Innovator — Builder of Simple, Elegant, High-Impact Products",
  blurb:
    "15+ years building products, from technical direction and video production to leading AI-powered product teams. Right now I design product architecture and build with Claude Code, pairing AI-assisted development with hands-on system design.",
  openToWork: true,
  openToWorkNote: "Open to Head of Product / senior AI product leadership roles.",
  email: "me@lucaslongacre.com",
  links: {
    linkedin: "https://www.linkedin.com/in/lucaslongacre/",
    github: "https://github.com/lukonianlogic",
    medium: "https://medium.com/@lucas-longacre",
    podcast: "https://www.signalandnoise.ai/executive-voices",
  },
};

export const about = {
  paragraphs: [
    "I'm a Head of Product who specializes in turning complex AI systems into clear, practical products people love.",
    "With 15+ years spanning software, media tech, healthcare, and immersive experiences, I've built a career around simplifying complexity. My work sits at the intersection of AI, UX, and engineering, where clarity and execution matter most.",
    "I combine deep technical fluency (Claude, OpenAI, Vertex, Pinecone, GCP, MySQL/MongoDB, Python/JS) with systems thinking and calm, intentional product leadership. I partner closely with engineers and designers to ship features that are grounded in real user behavior, not hype.",
  ],
  focusAreas: [
    "Practical, responsible AI that solves real user problems",
    "Solutions that are safe and respect user privacy and data",
    "Clear product strategy and crisp communication",
    "Useful, ethical systems thinking",
    "High-velocity experimentation",
    "Building products teams trust and users value",
  ],
};

export const linkedinArticles = [
  {
    title: "How Inlightened Leverages AI (Responsibly)",
    url: "https://www.linkedin.com/pulse/how-inlightened-leverages-ai-responsibly-lucas-longacre-hxnbc/",
    date: "February 2026",
    excerpt:
      "How Inlightened uses AI with clear boundaries and minimal data exposure — natural-language search, profile enhancement, and quality audits that keep a human in the loop.",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQHHss3GomRBBQ/article-cover_image-shrink_720_1280/B56Zx2o5HvGoAI-/0/1771516958326?e=2147483647&v=beta&t=IYfobAdD37QTWiCAd3oSn98EEQOz-HN4O4uBfq_ngDE",
  },
];

export const skillGroups = [
  {
    label: "AI / LLM",
    skills: ["Claude Code", "OpenAI", "Vertex AI", "Llama 2", "Prompt & architecture design"],
  },
  {
    label: "Backend & Data",
    skills: ["Pinecone", "MySQL", "MongoDB", "Segment", "Customer.io", "Mixpanel", "GA"],
  },
  {
    label: "Cloud",
    skills: ["GCP", "AWS", "OCI"],
  },
  {
    label: "Product & PM",
    skills: ["Linear", "Figma", "Trello", "Aha!"],
  },
  {
    label: "Languages",
    skills: ["JavaScript", "Python", "HTML", "CSS", "ReactJS"],
  },
];

export const experience = [
  {
    role: "Head of Product",
    org: "Inlightened",
    period: "Jun 2024 – Present",
    bullets: [
      "Lead AI/LLM-driven product development for a healthcare expert-network platform.",
      "Design product architecture and pair with the engineering team using AI-assisted development (Claude Code).",
    ],
  },
  {
    role: "Founder",
    org: "Mebot AI Corp",
    period: "Feb 2022 – Present (part-time since Jun 2024)",
    bullets: [
      "Built and continue to operate an AI product studio — the experience that led directly to the Inlightened role.",
      "Crafted go-to-market and product strategy; led global dev/design teams from concept to delivery.",
    ],
  },
  {
    role: "Technical Director",
    org: "Zero Point Reality",
    period: "Jun 2021 – Feb 2022",
    bullets: [
      "Produced and directed a VR flagship experience for AT&T in downtown San Francisco.",
      "Built the production workflow used to deliver optimized VR video across headsets and streaming.",
    ],
  },
  {
    role: "Video Producer & Technical Lead",
    org: "The Original Fare LLC",
    period: "Jun 2015 – May 2021",
    bullets: [
      "Directed a 30-minute episodic show for overseas cable distribution end to end.",
      "Repurposed content across cable, social, and streaming; managed all media processing and archiving.",
    ],
  },
];

export const education = [
  { degree: "B.A. Media Studies", school: "SUNY at Buffalo" },
  { degree: "Certificate, Full Stack Development", school: "UT Austin" },
];

export const caseStudy = {
  org: "Inlightened",
  url: "https://www.getinlightened.com",
  intro:
    "I joined Inlightened when the platform was still an early-stage MVP. Since then I've led it through a stability rebuild, a 10x growth phase, the platform's first AI feature, and now the product integration of our parent company's 1M+ expert panel.",
  stats: [
    { value: "10x", label: "Expert panel growth in year one" },
    { value: "1M+", label: "Experts being integrated via parent-company merger" },
    { value: "AI-Powered", label: "Shipped the platform's first native AI feature" },
  ],
  milestones: [
    {
      period: "2024",
      title: "Rebuilt the foundation",
      description:
        "Inherited an early-stage MVP and led the platform rebuild for stability at scale — fixing systemic backend performance issues, closing payment-integrity gaps, and shipping an end-to-end Sales → Concierge → Invoice project lifecycle that replaced a manual, multi-tool workflow.",
    },
    {
      period: "2025",
      title: "Built the growth engine",
      description:
        "Grew the expert panel 10x by building bulk-import tooling, a self-serve referral program, and a streamlined onboarding and signup flow.",
    },
    {
      period: "Early 2026",
      title: "Shipped AI and verified trust",
      description:
        "Launched Inlightened's first AI feature — a Natural Language Query interface letting non-technical staff query platform data in plain English — and began building verified-credential infrastructure (clinical credential data plus government ID and biometric identity verification) to replace self-reported profile data with real-time, source-of-truth verification.",
    },
    {
      period: "Mid 2026",
      title: "Leading the parent-company integration",
      description:
        "Leading product integration of Jackson Healthcare / LocumTenens.com's 1M+ expert panel following the parent-company acquisition — designing the account-migration flow that lets experts bring their existing profile, history, and credentials into Inlightened with zero duplicate accounts.",
    },
    {
      period: "Now / What's next",
      title: "Feasibility Calculator & Provider Search",
      description:
        "Built a Feasibility Calculator and Provider Search that run on live platform data instead of estimates, giving real-time visibility into whether a project is achievable before it's launched. In beta with internal teams this quarter, rolling out to customers next.",
    },
  ],
  closingNote:
    "Shipped through a recurring \"State of the Product\" release cadence — bi-weekly to monthly, scaling to quarterly for larger releases — that keeps Sales, Concierge, Admin, and Marketing aligned on what shipped, what's changing, and what's next.",
};

export const podcastEpisodes = [
  {
    title: "Structure the Ambiguity: Product, AI, and the Real Work of Building",
    guest: "with Zach Grumet",
    date: "March 25",
    description:
      "How product leaders \"own the mess\" — turning vague signals into structured problems, and how AI-assisted prototyping is compressing product timelines.",
    url: "https://www.signalandnoise.ai/post/structure-the-ambiguity-lucas-longacre-zach-grumet-on-product-ai-and-the-real-work-of-building",
    videoId: "nGY1k1JgYL4" as string | undefined,
  },
  {
    title: "Beyond the Stack",
    guest: "with Viktor Williamson",
    date: "",
    description: "A conversation on what actually matters beyond your tech stack when building AI products.",
    url: "https://www.youtube.com/watch?v=iH6une2ANas",
    videoId: "iH6une2ANas",
  },
  {
    title: "Dispatch from AICon USA",
    guest: "",
    date: "",
    description: "Field notes and takeaways from AICon USA 2026.",
    url: "https://www.youtube.com/watch?v=KGZSB-lxWnM",
    videoId: "KGZSB-lxWnM",
  },
];
