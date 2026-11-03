import type { Portfolio, Project } from "@/types/portfolio";

// Replace the marked example content with your own verified details.
// Keep missing URLs null: the UI will explain unavailable links rather than invent one.
export const portfolio: Portfolio = {
  personal: {
    name: "Your name",
    monogram: "YN",
    role: "Software engineer",
    headline: {
      opening: "Thoughtful",
      subject: "code.",
      closing: "Lasting",
      accent: "impact.",
    },
    introduction:
      "A space for the things I build, the problems I work through, and the decisions behind the code.",
    email: null,
    location: null,
    siteUrl: null, // Your canonical HTTPS URL, with no trailing slash.
    description:
      "A software engineering portfolio: selected projects, engineering decisions, and the stories behind the work.",
    placeholder: true,
    about: [
      "This is your introduction. Share what drew you to software engineering, what you enjoy building, and the questions that keep you curious.",
      "Add a little of the person behind the code: how you approach unfamiliar problems, what matters to you in a team, or something you are learning right now.",
    ],
    approach: [
      {
        title: "Start with the question.",
        description:
          "Describe how you understand a problem before choosing a solution.",
      },
      {
        title: "Make the details count.",
        description:
          "Share what quality means in your work, with a concrete example.",
      },
      {
        title: "Keep getting better.",
        description:
          "Explain how feedback, experiments, and reflection shape your process.",
      },
    ],
    portrait: null,
  },
  social: [
    { label: "GitHub", href: null },
    { label: "LinkedIn", href: null },
  ],
  resume: { label: "Resume", href: null }, // e.g. /resume.pdf after adding the file to public/.
  experience: [
    {
      id: "your-experience",
      company: "Company name",
      companyUrl: null,
      role: "Your engineering role",
      start: "Start date",
      end: "End date / Present",
      location: "City / Remote",
      placeholder: true,
      accomplishments: [
        "Describe a meaningful system or feature you shipped, the problem it solved, and your specific contribution.",
        "Explain a difficult engineering decision, the trade-offs you considered, and the outcome.",
        "Add a verified result: a measured improvement, a change in user behavior, or a clear qualitative outcome.",
      ],
      technologies: ["Your stack", "Your tools"],
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python"],
      placeholder: true,
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS"],
      placeholder: true,
    },
    {
      category: "Backend",
      items: ["Node.js", "REST APIs", "Express"],
      placeholder: true,
    },
    {
      category: "Cloud & infrastructure",
      items: ["Vercel", "AWS", "Docker"],
      placeholder: true,
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "Redis", "SQLite"],
      placeholder: true,
    },
    {
      category: "Developer tools",
      items: ["Git", "GitHub Actions", "Playwright"],
      placeholder: true,
    },
  ],
};

const story = {
  year: "Your year",
  placeholder: true,
  role: "Your role & responsibilities",
  duration: "Your project timeline",
  repository: null,
  demo: null,
  problem:
    "Start with the real problem. Who experienced it? What was difficult, slow, or missing? Explain the constraints and why solving this problem was worth the effort. Replace this placeholder with context from your project.",
  contribution:
    "Make your contribution clear. Describe the parts you owned, the people you collaborated with, and the scope of your involvement. Separate your work from the team's broader work.",
  architecture: [
    { label: "Interface", detail: "Your client & interaction layer" },
    { label: "Application", detail: "Your core logic & services" },
    { label: "Data", detail: "Your persistence or external source" },
  ],
  architectureNote:
    "Illustrative structure only. Replace these nodes with your actual system boundaries and describe the direction of data flow. This is not a claim about a real project's architecture.",
  decisions: [
    {
      title: "Choosing the right foundation",
      choice:
        "Describe a technology or architecture you chose, the alternatives you evaluated, and the constraint that informed the decision.",
      tradeoff:
        "Explain what you gave up with that choice and why the trade-off was acceptable.",
    },
    {
      title: "Keeping complexity in check",
      choice:
        "Describe a moment when you simplified the implementation. Explain how you balanced immediate needs with future maintainability.",
      tradeoff:
        "Name a limitation you deliberately accepted and when you would revisit it.",
    },
  ],
  challenges: [
    {
      title: "The interesting engineering problem",
      problem:
        "Describe a concrete technical obstacle and how you identified its cause. Include enough detail for another engineer to understand the difficulty.",
      solution:
        "Explain what you tried, what you implemented, and how you verified the solution. Include links to relevant code when available.",
    },
  ],
  results: [
    {
      value: "Your result",
      label: "What changed",
      detail:
        "Add a verified outcome. If you have a metric, include its baseline and measurement method.",
    },
    {
      value: "Your learning",
      label: "What you took away",
      detail:
        "Share an insight or limitation and what you would approach differently next time.",
    },
  ],
  reflection:
    "Close with an honest reflection. What are you proud of? What would you change? What is still unfinished? A thoughtful account of the work is more useful than an unsupported success claim.",
} satisfies Partial<Project>;

export const projects: Project[] = [
  {
    ...story,
    slug: "flagship-project",
    title: "Your flagship build",
    subtitle: "A complex problem. A considered solution.",
    summary:
      "Introduce your most substantial project: the problem, the people it serves, and what makes the engineering interesting.",
    category: "Full stack",
    featured: true,
    technologies: ["TypeScript", "Next.js", "PostgreSQL"],
    visual: "systems",
  },
  {
    ...story,
    slug: "interface-project",
    title: "A different kind of challenge",
    subtitle: "Where engineering meets the experience.",
    summary:
      "Show a second side of your work. Tell the story of a thoughtful interface, a difficult interaction, or a new approach.",
    category: "Frontend",
    featured: true,
    technologies: ["React", "TypeScript", "Motion"],
    visual: "interface",
  },
  {
    ...story,
    slug: "developer-tool",
    title: "A useful little tool",
    subtitle: "Less friction. More flow.",
    summary:
      "Add a tool, library, or script that makes a recurring task a little more enjoyable.",
    category: "Developer tools",
    featured: false,
    technologies: ["Node.js", "TypeScript"],
    visual: "terminal",
  },
  {
    ...story,
    slug: "creative-experiment",
    title: "An experiment worth sharing",
    subtitle: "A question turned into something tangible.",
    summary:
      "Make room for curiosity. Share an experiment, a prototype, or something you built to learn.",
    category: "Frontend",
    featured: false,
    technologies: ["JavaScript", "CSS"],
    visual: "orbit",
  },
];
