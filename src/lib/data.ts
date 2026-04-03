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
      "Architected reusable component library reducing feature development time by 40%",
      "Led migration of legacy codebase to TypeScript improving team velocity and code safety",
      "Collaborated closely with UX designers to deliver pixel-perfect, accessible interfaces",
      "Mentored junior engineers through code reviews and pair programming sessions",
    ],
    tech: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS", "Electron", "React Native", "Figma", "AWS"],
  },
  {
    company: "Hashedin by Deloitte",
    role: "SDE2",
    period: "Feb 2022 – Nov 2022",
    current: false,
    description:
      "Developed scalable web applications for enterprise clients across fintech and e-commerce domains, working in cross-functional agile teams.",
    bullets: [
      "Built and maintained React-based micro-frontend architecture for a major fintech platform",
      "Optimized bundle size and Core Web Vitals scores improving performance by 35%",
      "Implemented design system components adopted across 3 product teams",
    ],
    tech: ["React", "JavaScript", "Node.js", "REST APIs"],
  },
  {
    company: "Infosys Limited",
    role: "Web Developer & Mentor",
    period: "Dec 2018 – Feb 2022",
    current: false,
    description:
      "Developed web applications for global enterprise clients and mentored a cohort of 6 junior engineers through Infosys's internal training programs.",
    bullets: [
      "Delivered full-stack web features for clients across healthcare and retail verticals",
      "Mentored 6 engineers as part of the Infosys Springboard program",
      "Specialized in responsive UI development with a focus on cross-browser compatibility",
      "Received 'Insta Award' for outstanding client delivery on a critical project",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Java", "Spring Boot"],
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
