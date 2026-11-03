import Image from "next/image";
import { ArrowDownRight, ScanFace } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const { personal } = portfolio;
  return (
    <section id="about" className="section about-section" aria-label="About me">
      <div className="container">
        <Reveal>
          <SectionHeading
            number="02"
            label="THE PERSON BEHIND THE CODE"
            title="An engineer. Always a work in progress."
          />
        </Reveal>
        <div className="about-grid">
          <Reveal className="portrait-wrap">
            {personal.portrait ? (
              <Image
                className="portrait-image"
                src={personal.portrait.src}
                alt={personal.portrait.alt}
                width={personal.portrait.width}
                height={personal.portrait.height}
                sizes="(max-width: 760px) 100vw, 35vw"
              />
            ) : (
              <div className="portrait-placeholder">
                <span className="portrait-corner corner-tl" />
                <span className="portrait-corner corner-tr" />
                <span className="portrait-corner corner-bl" />
                <span className="portrait-corner corner-br" />
                <div className="portrait-symbol">
                  <ScanFace size={56} strokeWidth={0.8} aria-hidden="true" />
                </div>
                <span className="eyebrow">A FACE TO THE NAME</span>
                <p>Your photo goes here.</p>
                <span className="portrait-label">
                  NO STOCK PHOTO. JUST YOU.
                </span>
              </div>
            )}
            <div className="portrait-caption">
              <span>{personal.name}</span>
              <ArrowDownRight size={18} className="accent" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal className="about-copy" delay={0.08}>
            {personal.placeholder && (
              <p className="placeholder-note">YOUR STORY GOES HERE</p>
            )}
            {personal.about.map((paragraph, index) => (
              <p className={index === 0 ? "about-lead" : ""} key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="approach-list">
              {personal.approach.map((item, index) => (
                <div key={item.title}>
                  <span className="eyebrow accent">0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
