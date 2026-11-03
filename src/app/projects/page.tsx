import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowDownRight } from "lucide-react";
import { portfolio, projects } from "@/data/portfolio";
import { ProjectGrid } from "@/components/project-grid";
import { Contact } from "@/components/sections/contact";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Projects, experiments, and the engineering decisions behind them.",
  ...(portfolio.personal.siteUrl
    ? { alternates: { canonical: `${portfolio.personal.siteUrl}/projects` } }
    : {}),
};

export default function ProjectsPage() {
  return (
    <>
      <div className="container projects-page">
        <Link className="back-link" href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
        <Reveal>
          <div className="projects-page-heading">
            <div>
              <p className="eyebrow">
                <span className="accent">THE WORK</span>
                <span className="eyebrow-line" />
                BUILDS & EXPLORATIONS
              </p>
              <h1>
                Ideas, made
                <br />
                <span className="serif-word">tangible.</span>
              </h1>
            </div>
            <ArrowDownRight
              size={100}
              strokeWidth={0.7}
              className="accent projects-title-arrow"
              aria-hidden="true"
            />
          </div>
          <p className="projects-page-description">
            A closer look at the things I build. The ambitious ones, the useful
            ones, and the ones that started with “what if?”
          </p>
          {projects.some((project) => project.placeholder) && (
            <div className="content-notice">
              <span className="status-dot" />
              <p>
                Content preview. These are clearly labeled project placeholders,
                with example stacks and writing prompts. Replace them with your
                own work.
              </p>
            </div>
          )}
        </Reveal>
        <ProjectGrid projects={projects} />
        {!projects.length && (
          <p className="empty-state">
            New work is on the way. Check back soon.
          </p>
        )}
      </div>
      <Contact />
    </>
  );
}
