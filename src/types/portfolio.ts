export type ExternalLink = { label: string; href: string | null };
export type ProjectVisual = "systems" | "interface" | "terminal" | "orbit";
export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: "Full stack" | "Frontend" | "Developer tools";
  year: string;
  featured: boolean;
  placeholder: boolean;
  technologies: string[];
  visual: ProjectVisual;
  image?: ProjectImage;
  gallery?: ProjectImage[];
  repository: string | null;
  demo: string | null;
  role: string;
  duration: string;
  problem: string;
  contribution: string;
  architecture: { label: string; detail: string }[];
  architectureNote: string;
  decisions: { title: string; choice: string; tradeoff: string }[];
  challenges: { title: string; problem: string; solution: string }[];
  results: { value: string; label: string; detail: string }[];
  reflection: string;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl: string | null;
  role: string;
  start: string;
  end: string;
  location: string;
  placeholder: boolean;
  accomplishments: string[];
  technologies: string[];
}

export interface Portfolio {
  personal: {
    name: string;
    monogram: string;
    role: string;
    headline: {
      opening: string;
      subject: string;
      closing: string;
      accent: string;
    };
    introduction: string;
    email: string | null;
    location: string | null;
    siteUrl: string | null;
    description: string;
    placeholder: boolean;
    about: string[];
    approach: { title: string; description: string }[];
    portrait: ProjectImage | null;
  };
  social: ExternalLink[];
  resume: ExternalLink;
  experience: Experience[];
  skills: { category: string; items: string[]; placeholder: boolean }[];
}
