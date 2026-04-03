export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
  bullets: string[];
  tech: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  note?: string;
}

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "tools";
}

export interface ProjectItem {
  title: string;
  description: string;
  category: string;
  tech: string[];
  github: string | null;
  live: string | null;
}

export const experience: ExperienceItem[] = [
  {
    company: "Carestack",
    role: "Senior Engineer",
    period: "Nov 2022 – Present",
    current: true,
    description:
      "Leading frontend engineering for a comprehensive dental practice management platform. Driving architecture decisions for large-scale React applications and mentoring engineers.",
    bullets: [
      "Developed and launched multiple sales tools for production use, significantly enhancing operational efficiency and revenue generation",
      "Led and mentored a team of 6 full-stack developers, fostering skill development and ensuring successful project execution",
      "Built dynamic desktop applications using React and Electron, enhancing user experience and cross-platform functionality",
      "Contributed to creating a new design system, improving consistency and brand alignment across platforms",
      "Worked on an AI-based telecom application to monitor call quality and generate transcripts, improving customer satisfaction",
    ],
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "GraphQL",
      "Tailwind CSS",
      "Electron",
      "React Native",
      "Figma",
      "AWS",
    ],
  },
  {
    company: "Hashedin by Deloitte",
    role: "SDE2",
    period: "Feb 2022 – Nov 2022",
    current: false,
    description:
      "Developed scalable web applications for enterprise clients in fintech, working in cross-functional agile teams with a Spring-based backend.",
    bullets: [
      "Specialized in front-end development using React and Apollo GraphQL integrated with a Spring-based backend",
      "Played a key role in developing a report generation feature for 'CLEAR', an investigation software used for comprehensive background verification of entities",
    ],
    tech: ["React", "JavaScript", "Apollo GraphQL", "Spring Boot", "REST APIs"],
  },
  {
    company: "Infosys Limited",
    role: "Web Developer & Mentor",
    period: "Dec 2018 - Feb 2022",
    current: false,
    description:
      "Developed web applications for global enterprise clients including Blackrock, and mentored engineers through Infosys's internal training programs.",
    bullets: [
      "Worked on Teamworld (Blackrock Aladdin) — a stocks, portfolio, and client management system at enterprise scale",
      "Built an attendance application now used by 15,000+ members across Infosys training centers",
      "Automated build and CI processes to drive build/release failure resolution and reduce downtime",
      "Eliminated downtime by implementing NoSQL database and caching strategies to optimize response rates",
      "Mentored interns on project onboarding and ramp-up with .NET and Angular",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Java",
      "Spring Boot",
      ".NET",
      "Angular",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "KLE Technological University",
    degree: "Bachelor of Engineering in Computer Science",
    period: "2015 – 2019",
    note: "Specialized in web development and user interface design",
  },
  {
    school: "Gen B.C. Joshi Army Public School",
    degree: "All India Senior School Certificate Examination",
    period: "Completed 2015",
  },
];

export const skills: SkillItem[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "UI/UX Design", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "AWS", category: "tools" },
];

export const projects: ProjectItem[] = [
  {
    title: "JWT Decoder & Verifier",
    description:
      "A privacy-first browser tool for decoding and verifying JWT tokens. All processing happens client-side — tokens never leave your machine. Built with Next.js, TypeScript, and shadcn/ui.",
    category: "Frontend",
    tech: ["Next.js", "TypeScript", "shadcn/ui"],
    github: "https://github.com/Om1938/jwt-decoder",
    live: "https://jwt.ompdas.com/",
  },
  // {
  //   title: "Finance Calculators",
  //   description:
  //     "A handy collection of finance-related calculators — EMI, SIP, compound interest, and more — built to make everyday financial planning simple and accessible.",
  //   category: "Frontend",
  //   tech: ["React", "Node.js", "MongoDB", "Firebase"],
  //   github: "https://github.com/Om1938/fin-calcs",
  //   live: "https://fincalc.ompdas.com",
  // },
  {
    title: "tw-masonry",
    description:
      "A TypeScript monorepo providing masonry layout utilities for Tailwind CSS. Includes a demo app and reusable packages, built with a pnpm workspace, Vitest for testing, and MIT licensed.",
    category: "Open Source",
    tech: ["TypeScript", "Tailwind CSS", "pnpm", "Vitest"],
    github: "https://github.com/Om1938/tw-masonry",
    live: null,
  },
  {
    title: "Portfolio Admin CMS",
    description:
      "A self-built headless CMS powering this portfolio's blog. Password-protected admin panel with a split-pane TipTap + Markdown editor. Posts are saved as MDX and committed to GitHub via API, triggering a Vercel redeploy.",
    category: "Full Stack",
    tech: ["Next.js", "NextAuth", "TipTap", "MDX", "GitHub API"],
    github: null,
    live: null,
  },
];

export const social = {
  github: "https://github.com/Om1938",
  linkedin: "https://www.linkedin.com/in/omprakashdas/",
  twitter: "https://twitter.com/omkletu",
  email: "omkletu@gmail.com",
};
