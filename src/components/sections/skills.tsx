import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { indexLabel } from "@/lib/utils";

export function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
      aria-label="Technical skills"
    >
      <div className="container">
        <Reveal>
          <div className="skills-header">
            <SectionHeading
              number="04"
              label="THE TOOLKIT"
              title="The right tools. For the right reasons."
            />
            <p>
              Tools change. The practice of learning, questioning, and choosing
              carefully stays.
            </p>
          </div>
          {portfolio.skills.some((skill) => skill.placeholder) && (
            <p className="placeholder-note skills-note">
              EXAMPLE SKILLS — REPLACE WITH YOUR OWN EXPERIENCE
            </p>
          )}
        </Reveal>
        <div className="skills-grid">
          {portfolio.skills.map((skill, index) => (
            <Reveal key={skill.category} delay={(index % 3) * 0.04}>
              <div className="skill-group">
                <div className="skill-group-top">
                  <span className="eyebrow">/{indexLabel(index)}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </div>
                <h3>{skill.category}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
