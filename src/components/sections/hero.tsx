import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { EngineeringVisual } from "@/components/engineering-visual";
import { Reveal } from "@/components/ui/reveal";
import { ExternalLink } from "@/components/ui/external-link";

export function Hero() {
  const { personal, social, resume } = portfolio;
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-topline">
        <p className="eyebrow">
          <span className="status-dot" />
          {personal.role} / {personal.name}
        </p>
        {personal.placeholder && (
          <span className="preview-label">
            Portfolio template <span>·</span> Content preview
          </span>
        )}
      </div>
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <h1 id="hero-heading">
            {personal.headline.opening}
            <br />
            {personal.headline.subject}
            <span className="hero-heading-last">
              {personal.headline.closing}{" "}
              <span className="serif-word">{personal.headline.accent}</span>
            </span>
          </h1>
          <p className="hero-introduction">{personal.introduction}</p>
          <div className="hero-actions">
            <Link href="#work" className="button button-primary">
              Explore my work <ArrowDown size={17} aria-hidden="true" />
            </Link>
            <ExternalLink
              href={resume.href}
              label="View resume"
              className="hero-resume"
            />
          </div>
          <div className="hero-socials">
            {social.map((link) => (
              <ExternalLink key={link.label} {...link} />
            ))}
            <span className="social-divider" />
            <span className="hero-note">
              A little curiosity. A lot of care.
            </span>
          </div>
        </Reveal>
        <Reveal className="hero-visual-wrap" delay={0.12}>
          <EngineeringVisual />
        </Reveal>
      </div>
      <div className="hero-bottom">
        <a href="#work">
          <ArrowDown size={14} aria-hidden="true" />
          <span className="eyebrow">A SELECTION OF THINGS BUILT</span>
        </a>
        <span className="eyebrow">
          SCROLL TO EXPLORE <ArrowUpRight size={13} aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}
