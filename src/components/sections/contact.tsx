import { ArrowUpRight, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ExternalLink } from "@/components/ui/external-link";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  const { personal, social, resume } = portfolio;
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow">
            <span className="accent">06</span>
            <span className="eyebrow-line" />
            GOOD THINGS START WITH A CONVERSATION
          </p>
          <div className="contact-heading-row">
            <h2 id="contact-title">
              Have something
              <br />
              <span className="serif-word">in mind?</span>
            </h2>
            <ArrowUpRight
              className="contact-big-arrow"
              strokeWidth={0.7}
              aria-hidden="true"
            />
          </div>
          <div className="contact-bottom">
            <div>
              <p>Interesting problems. Thoughtful teams. New possibilities.</p>
              {personal.email ? (
                <a className="contact-email" href={`mailto:${personal.email}`}>
                  {personal.email}
                  <ArrowUpRight size={24} aria-hidden="true" />
                </a>
              ) : (
                <span
                  className="contact-email unavailable-link"
                  aria-disabled="true"
                  title="Set personal.email in src/data/portfolio.ts"
                >
                  <Mail size={22} aria-hidden="true" />
                  Your email goes here
                  <span className="sr-only"> — not configured yet</span>
                </span>
              )}
              {!personal.email && (
                <span className="contact-helper">
                  Add your email to make the first hello possible.
                </span>
              )}
            </div>
            <div className="contact-links">
              {[...social, resume].map((link) => (
                <ExternalLink key={link.label} {...link} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
