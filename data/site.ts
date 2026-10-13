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
  resumeUrl: "/resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/lucaslongacre/",
    github: "https://github.com/lukonianlogic",
    medium: "https://medium.com/@lucas-longacre",
    substack: "https://lucaslongacre.substack.com",
    podcast: "https://www.signalandnoise.ai/executive-voices",
  },
};

export const consulting = {
  headline: "Also available for consulting",
  entity: "Operating through LL Labs, LLC",
  pitch:
    "Outside of Inlightened, I help companies streamline internal workflows, automate manual processes, and turn scattered data into dashboards their teams can actually use — saving money, freeing up your team's time, and reducing dependence on expensive third-party tools.",
  services: [
    "Automate repetitive, manual processes",
    "Build custom dashboards for real-time insights",
    "Organize and structure your data so you can actually use it",
    "Cut costs by reducing dependence on expensive third-party apps",
    "Keep control of where your data lives",
    "Design fraud prevention and identity verification for your platform",
  ],
  fraud: {
    title: "AI Fraud Protection",
    layersNote:
      "The layers work together: behavioral signals flag risk early, ID verification confirms a real person is behind the account, and credential checks confirm that person is who they claim to be professionally.",
    audience: [
      "Marketplaces and networks that onboard credentialed professionals",
      "Platforms where fake or duplicate accounts cost money or erode trust",
      "Teams that still verify identity or credentials by hand",
    ],
    intro:
      "I designed and launched the fraud-prevention layer for a credentialed-professional marketplace: three layers of defense that stop bad actors before they reach your platform, without slowing down legitimate users.",
    pillars: [
      {
        title: "Behavioral detection",
        description:
          "Automated alerts on suspicious signup activity, plus pattern recognition that flags profiles that look manufactured rather than real, so reviewers focus on the highest-risk accounts first.",
      },
      {
        title: "Identity verification",
        description:
          "Government-issued ID verification through Stripe Identity, with a monitoring dashboard to send verification links and track completion end to end.",
      },
      {
        title: "Credential verification",
        description:
          "Checks against authoritative public sources: NPPES for NPI validation and Axuall for licenses, credentials, and any disciplinary history.",
      },
    ],
  },
  ctaNote: "Tell me a bit about what you're working on and I'll follow up.",
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

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company?: string;
  photo?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lucas brings both vision and execution to product development. He has an exceptional ability to identify opportunities for innovation while working closely with the team to turn those ideas into tangible progress. His collaborative approach ensures that technology, product strategy, and business goals remain aligned. Lucas's leadership has been central to advancing our platform and continuously improving the experience we deliver to our users.",
    name: "Shelli Pavone",
    title: "President",
    company: "Inlightened",
    photo: "/testimonials/shelli-pavone.jpg",
  },
  {
    quote:
      "Lucas has a solid grasp of both the user side and the technical side, which makes him effective at keeping projects moving without losing sight of what actually matters. We shipped multiple projects together, and his discipline and sharp judgment consistently helped us get to the finish line.",
    name: "Nic Rosental",
    title: "Tech Founder & Fractional CTO",
    photo: "/testimonials/nic-rosental.jpg",
  },
  {
    quote:
      "Lucas Longacre blends deep experience and passion in AI, storytelling, production, and education to customize approaches that get compelling results efficiently. I've been lucky to work with Lucas across formats and seek his insights regularly to help navigate how emerging technologies can support my goals.",
    name: "Wil Kristin",
    title: "Strategic Communications Director",
    company: "Beneficial State Foundation",
    photo: "/testimonials/wil-kristin.jpg",
  },
  {
    quote:
      "Collaborating with Lucas on AI projects has been an exciting journey. He has a unique ability to tackle intricate technical challenges that deliver elegant solutions. Lucas seamlessly navigates emerging technologies, mastering them to enhance project outcomes. A steadfast collaborator, he consistently strives for excellence, ensuring the optimal success of our AI products.",
    name: "Lauren Carroll",
    title: "CMO",
    company: "Mebot AI Corp",
    photo: "/testimonials/lauren-carroll.jpg",
  },
  {
    quote:
      "I have known and worked with Lucas for many years now and I have come to depend on, and admire, his dependability, creativity and problem solving. This has always proven true for jobs I have recommended him for as well as projects we have done together.",
    name: "Tim Williams",
    title: "Executive Director",
    company: "Oregon Film",
    photo: "/testimonials/tim-williams.jpg",
  },
  {
    quote:
      "Lucas is always on the cutting edge of technology. For years he's been a reliable resource for new technology; how to apply it to my business and how it will be used in the future. Knowledge is a passion for him.",
    name: "Jamilla R Tai",
    title: "Executive Director",
    company: "Responsible Media Group",
    photo: "/testimonials/jamilla-tai.jpg",
  },
];

export const podcastEpisodes = [
  {
    title: "Internal Tools Are the Next Frontier of AI",
    guest: "",
    date: "August 2026",
    description:
      "AI is making it possible to replace clunky dashboards, spreadsheets, and repetitive workflows with purpose-built internal applications, and why the next frontier of enterprise AI may be teams building software around how they actually work.",
    url: "https://www.signalandnoise.ai/post/internal-tools-are-the-next-frontier-of-ai",
    videoId: undefined as string | undefined,
    image:
      "https://static.wixstatic.com/media/868b7c_f240b53541ce421488535f959d7b2922~mv2.png/v1/fill/w_1000,h_669,al_c,q_90,usm_0.66_1.00_0.01/868b7c_f240b53541ce421488535f959d7b2922~mv2.png" as
        | string
        | undefined,
  },
  {
    title: "Signal & Noise Live at AI Con",
    guest: "with Ken Johnston, AiGovOps Foundation",
    date: "August 2026",
    description:
      "What it really takes to scale AI safely: the risks of \"demo theater,\" why companies need stronger testing, security and observability, and why human judgment still matters.",
    url: "https://www.signalandnoise.ai/post/signal-noise-live-at-ai-con-lucas-longacre-talks-with-ken-johnston-founder-of-aigovops-foundation",
    videoId: undefined as string | undefined,
    image:
      "https://static.wixstatic.com/media/fc82ae_dc46f2a553014d36be0dc1f717efdf0d~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/fc82ae_dc46f2a553014d36be0dc1f717efdf0d~mv2.png" as
        | string
        | undefined,
  },
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
