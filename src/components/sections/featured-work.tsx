import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { indexLabel } from "@/lib/utils";

export function FeaturedWork() {
  const featured = projects.filter((project) => project.featured);
  return (
    <section
      id="work"
      className="section container"
      aria-labelledby="work-title"
    >
      <Reveal>
        <div className="section-title-row">
          <div id="work-title">
            <SectionHeading
              number="01"
              label="SELECTED WORK"
              title="More than the finished product."
              description="The problems, decisions, and details behind the work."
            />
          </div>
          <Link href="/projects" className="text-link section-all-link">
            All projects <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
      <div className="featured-list">
        {featured.map((project, index) => (
          <Reveal key={project.slug}>
            <article
              className={`featured-project ${index % 2 ? "featured-reverse" : ""}`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="featured-visual-link"
              >
                <span className="sr-only">
                  Read {project.title}{" "}
                  {project.placeholder ? "placeholder " : ""}case study
                </span>
                <div aria-hidden="true">
                  <ProjectVisual project={project} />
                </div>
                <span className="visual-open">
                  <ArrowUpRight size={24} aria-hidden="true" />
                </span>
              </Link>
              <div className="featured-copy">
                <div className="featured-meta">
                  <span className="accent">/{indexLabel(index)}</span>
                  <span>{project.category}</span>
                </div>
                {project.placeholder && (
                  <p className="placeholder-note">PLACEHOLDER CASE STUDY</p>
                )}
                <h3>
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                    <span className="accent">.</span>
                  </Link>
                </h3>
                <p>{project.summary}</p>
                <ul
                  className="tag-list"
                  aria-label={
                    project.placeholder ? "Example stack" : "Technologies"
                  }
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <Link
                  className="case-study-link"
                  href={`/projects/${project.slug}`}
                >
                  Explore the case study{" "}
                  <ArrowRight size={19} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
        {!featured.length && (
          <p className="empty-state">
            Featured work is on its way.{" "}
            <Link href="/projects" className="text-link">
              Browse all projects <ArrowRight size={16} />
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
