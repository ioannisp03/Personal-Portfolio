import { ArrowUpRight, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="section container"
      aria-label="Professional experience"
    >
      <Reveal>
        <SectionHeading
          number="03"
          label="THE JOURNEY SO FAR"
          title="Work with a purpose."
          description="Experience is more than a title. It’s the contribution you leave behind."
        />
      </Reveal>
      <div className="experience-list">
        {portfolio.experience.map((item) => (
          <Reveal key={item.id}>
            <article className="experience-item">
              <div className="experience-when">
                <span className="timeline-dot" />
                <p>
                  {item.start}
                  <br />
                  <span>— {item.end}</span>
                </p>
                <span className="experience-location">
                  <MapPin size={13} aria-hidden="true" />
                  {item.location}
                </span>
              </div>
              <div className="experience-detail">
                <div className="experience-title-row">
                  <div>
                    <p className="eyebrow">
                      {item.companyUrl ? (
                        <a
                          className="text-link"
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.company}
                          <ArrowUpRight size={13} />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        item.company
                      )}
                    </p>
                    <h3>{item.role}</h3>
                  </div>
                  {item.placeholder && (
                    <span className="outline-label">PLACEHOLDER</span>
                  )}
                </div>
                <ul className="accomplishments">
                  {item.accomplishments.map((accomplishment) => (
                    <li key={accomplishment}>{accomplishment}</li>
                  ))}
                </ul>
                <ul className="tag-list" aria-label="Technologies">
                  {item.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
