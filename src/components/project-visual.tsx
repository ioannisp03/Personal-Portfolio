import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Command,
  Database,
  Layers3,
  LayoutTemplate,
  Terminal,
} from "lucide-react";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

export function ProjectVisual({
  project,
  className,
  priority = false,
}: {
  project: Pick<Project, "visual" | "image" | "title">;
  className?: string;
  priority?: boolean;
}) {
  if (project.image)
    return (
      <div className={cn("project-visual real-project-image", className)}>
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 760px) 100vw, 65vw"
          priority={priority}
        />
      </div>
    );
  return (
    <div
      className={cn("project-visual", `visual-${project.visual}`, className)}
    >
      <span className="visual-stamp">
        CONCEPT STUDY <span>↗</span>
      </span>
      <div className="visual-art" aria-hidden="true">
        {project.visual === "systems" && (
          <div className="system-art">
            <div className="system-rail rail-left" />
            <div className="system-rail rail-right" />
            <div className="system-small system-input">
              <Braces size={18} />
              <span>INTERFACE</span>
            </div>
            <div className="system-main">
              <span className="system-main-icon">
                <Layers3 size={38} strokeWidth={1} />
              </span>
              <span>
                Built to connect<span className="accent">.</span>
              </span>
              <small>THE BIGGER PICTURE</small>
            </div>
            <div className="system-small system-output">
              <Database size={18} />
              <span>FOUNDATION</span>
            </div>
            <span className="system-signal signal-one" />
            <span className="system-signal signal-two" />
          </div>
        )}
        {project.visual === "interface" && (
          <div className="interface-art">
            <div className="interface-window window-back">
              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="skeleton-line" />
              <div className="skeleton-line short" />
            </div>
            <div className="interface-window window-front">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <Command size={12} />
              </div>
              <div className="interface-content">
                <LayoutTemplate size={25} strokeWidth={1} />
                <p>
                  Small details.
                  <br />
                  Big difference<span>.</span>
                </p>
                <div className="interface-bottom">
                  <span>FORM MEETS FUNCTION</span>
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </div>
        )}
        {project.visual === "terminal" && (
          <div className="terminal-art">
            <div className="terminal-top">
              <Terminal size={15} />
              <span>an idea, executed</span>
              <span>~/</span>
            </div>
            <div className="terminal-code">
              <p>
                <span>→</span> start with a question
              </p>
              <p>
                <span>→</span> make something useful
              </p>
              <p>
                <span>✓</span> keep exploring
                <span className="terminal-cursor" />
              </p>
            </div>
          </div>
        )}
        {project.visual === "orbit" && (
          <div className="experiment-art">
            <div className="experiment-ring ring-one" />
            <div className="experiment-ring ring-two" />
            <div className="experiment-ring ring-three" />
            <div className="experiment-center">
              <Braces size={40} strokeWidth={1} />
            </div>
            <span className="experiment-label">WHAT IF?</span>
            <ArrowDown className="experiment-arrow" size={25} strokeWidth={1} />
          </div>
        )}
      </div>
      <span className="visual-caption">
        Designed placeholder · no product screenshot yet
      </span>
    </div>
  );
}
