import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { ProjectVisual } from "@/components/project-visual";
import { ExternalLink } from "@/components/ui/external-link";
import { indexLabel } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <Link className="project-card-main" href={`/projects/${project.slug}`}>
        <ProjectVisual project={project} />
        <div className="project-card-meta">
          <span>
            {indexLabel(index)} / {project.category}
          </span>
          {project.placeholder ? (
            <span>Placeholder project</span>
          ) : (
            <span>{project.year}</span>
          )}
        </div>
        <div className="project-card-title">
          <h3>{project.title}</h3>
          <span className="circle-arrow">
            <ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" />
          </span>
        </div>
        <p>{project.summary}</p>
        <span className="sr-only">
          Read {project.placeholder ? "example " : ""}case study
        </span>
      </Link>
      <div className="project-card-bottom">
        <ul
          className="tag-list"
          aria-label={
            project.placeholder ? "Example technologies" : "Technologies"
          }
        >
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-card-links">
          <ExternalLink label="Code" href={project.repository} />
          <ExternalLink label="Live" href={project.demo} />
        </div>
      </div>
    </article>
  );
}
