import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolio, projects } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visual";
import { ExternalLink } from "@/components/ui/external-link";
import { Reveal } from "@/components/ui/reveal";
import { Contact } from "@/components/sections/contact";
import { indexLabel } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    ...(project.placeholder ? { robots: { index: false, follow: false } } : {}),
    ...(portfolio.personal.siteUrl
      ? {
          alternates: {
            canonical: `${portfolio.personal.siteUrl}/projects/${project.slug}`,
          },
        }
      : {}),
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const next =
    projects.length > 1 ? projects[(index + 1) % projects.length] : null;
  return (
    <>
      <article className="case-study container">
        <div className="case-topline">
          <Link href="/projects" className="back-link">
            <ArrowLeft size={16} aria-hidden="true" />
            All projects
          </Link>
          <span className="eyebrow">CASE STUDY / {indexLabel(index)}</span>
        </div>
        <Reveal>
          <div className="case-heading">
            <p className="eyebrow accent">
              {project.category} <span className="eyebrow-line" />{" "}
              {project.year}
            </p>
            <h1>
              {project.title}
              <span className="accent">.</span>
            </h1>
            <p className="case-subtitle">{project.subtitle}</p>
          </div>
        </Reveal>
        {project.placeholder && (
          <div className="content-notice">
            <span className="status-dot" />
            <p>
              <strong>Placeholder case study.</strong> This page demonstrates
              the case-study format. The content, stack, diagram, and visuals
              are examples to replace with your verified project details.
            </p>
          </div>
        )}
        <Reveal>
          <ProjectVisual
            project={project}
            className="case-hero-visual"
            priority
          />
        </Reveal>
        <div className="case-facts">
          <div>
            <p className="eyebrow">MY ROLE</p>
            <p>{project.role}</p>
          </div>
          <div>
            <p className="eyebrow">TIMELINE</p>
            <p>{project.duration}</p>
          </div>
          <div>
            <p className="eyebrow">
              {project.placeholder ? "EXAMPLE STACK" : "TECHNOLOGIES"}
            </p>
            <p>{project.technologies.join(" / ")}</p>
          </div>
          <div>
            <p className="eyebrow">TAKE A LOOK</p>
            <div className="case-source-links">
              <ExternalLink label="GitHub" href={project.repository} />
              <ExternalLink label="Live demo" href={project.demo} />
            </div>
          </div>
        </div>
        <div className="case-body-grid">
          <aside className="case-sidebar">
            <p className="eyebrow">INSIDE THE BUILD</p>
            <nav aria-label="Case study sections">
              {[
                { href: "overview", label: "The context" },
                { href: "architecture", label: "The architecture" },
                { href: "decisions", label: "The decisions" },
                { href: "challenges", label: "The hard parts" },
                { href: "results", label: "The outcome" },
              ].map((item, i) => (
                <a href={`#${item.href}`} key={item.href}>
                  <span>{indexLabel(i)}</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>
          <div className="case-body">
            <section id="overview" className="case-section">
              <Reveal>
                <p className="eyebrow accent">01 / THE CONTEXT</p>
                <h2>Start with the problem.</h2>
                <p className="case-lead">{project.summary}</p>
                <p>{project.problem}</p>
                <div className="contribution-block">
                  <h3>My contribution</h3>
                  <p>{project.contribution}</p>
                </div>
              </Reveal>
            </section>
            <section id="architecture" className="case-section">
              <Reveal>
                <p className="eyebrow accent">02 / THE ARCHITECTURE</p>
                <h2>The bigger picture.</h2>
                <p>
                  A useful view of the system: its parts, their
                  responsibilities, and how they fit together.
                </p>
                <figure className="architecture-figure">
                  <ol className="architecture-diagram">
                    {project.architecture.map((node, i) => (
                      <li key={`${node.label}-${i}`}>
                        <span className="architecture-index">
                          {indexLabel(i)}
                        </span>
                        <div>
                          <h3>{node.label}</h3>
                          <p>{node.detail}</p>
                        </div>
                        {i < project.architecture.length - 1 && (
                          <ArrowDown
                            className="architecture-connector"
                            size={19}
                            aria-hidden="true"
                          />
                        )}
                      </li>
                    ))}
                  </ol>
                  <figcaption>{project.architectureNote}</figcaption>
                </figure>
              </Reveal>
            </section>
            <section id="decisions" className="case-section">
              <Reveal>
                <p className="eyebrow accent">03 / THE DECISIONS</p>
                <h2>Good engineering is a series of choices.</h2>
                <div className="decision-list">
                  {project.decisions.map((decision, i) => (
                    <div className="decision" key={decision.title}>
                      <span className="decision-number">/{indexLabel(i)}</span>
                      <div>
                        <h3>{decision.title}</h3>
                        <p>{decision.choice}</p>
                        <div className="tradeoff">
                          <span className="eyebrow">THE TRADE-OFF</span>
                          <p>{decision.tradeoff}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>
            {project.gallery?.length ? (
              <div className="case-gallery">
                {project.gallery.map((image) => (
                  <figure key={image.src}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(max-width: 760px) 100vw, 70vw"
                    />
                    <figcaption>{image.alt}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <figure className="detail-placeholder">
                <div aria-hidden="true">
                  <span className="detail-cross">+</span>
                  <span className="detail-square" />
                  <span className="detail-cross">+</span>
                </div>
                <figcaption>
                  A closer look belongs here.
                  <span>
                    Add a real screenshot or a diagram when your project is
                    ready.
                  </span>
                </figcaption>
              </figure>
            )}
            <section id="challenges" className="case-section">
              <Reveal>
                <p className="eyebrow accent">04 / THE HARD PARTS</p>
                <h2>Where the learning happened.</h2>
                {project.challenges.map((challenge) => (
                  <div className="challenge" key={challenge.title}>
                    <h3>{challenge.title}</h3>
                    <p>{challenge.problem}</p>
                    <div className="solution">
                      <p className="eyebrow">THE APPROACH</p>
                      <p>{challenge.solution}</p>
                    </div>
                  </div>
                ))}
              </Reveal>
            </section>
            <section id="results" className="case-section">
              <Reveal>
                <p className="eyebrow accent">05 / THE OUTCOME</p>
                <h2>What changed. What’s next.</h2>
                <div className="results-grid">
                  {project.results.map((result) => (
                    <div key={result.label}>
                      <p className="eyebrow">{result.label}</p>
                      <h3>{result.value}</h3>
                      <p>{result.detail}</p>
                    </div>
                  ))}
                </div>
                <p>{project.reflection}</p>
                <div className="case-ending-links">
                  <ExternalLink
                    label="Explore the code"
                    href={project.repository}
                  />
                  <ExternalLink
                    label="Try the live project"
                    href={project.demo}
                  />
                </div>
              </Reveal>
            </section>
          </div>
        </div>
        {next && (
          <Link href={`/projects/${next.slug}`} className="next-project">
            <div>
              <span className="eyebrow">
                UP NEXT /{" "}
                {next.placeholder ? "PLACEHOLDER PROJECT" : next.category}
              </span>
              <h2>{next.title}</h2>
            </div>
            <ArrowUpRight size={50} strokeWidth={1} aria-hidden="true" />
          </Link>
        )}
        <Link className="text-link case-back-bottom" href="/projects">
          Back to the collection <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </article>
      <Contact />
    </>
  );
}
