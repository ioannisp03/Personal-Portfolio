import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function MoreWork() {
  const otherProjects = projects.filter((project) => !project.featured);
  if (!otherProjects.length) return null;
  return (
    <section className="section container" aria-label="More projects">
      <Reveal>
        <div className="section-title-row">
          <SectionHeading
            number="05"
            label="ALSO ON THE WORKBENCH"
            title="Small builds. Open questions."
          />
          <Link href="/projects" className="text-link section-all-link">
            The full collection <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
      <div className="projects-grid">
        {otherProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.07}>
            <ProjectCard project={project} index={projects.indexOf(project)} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
