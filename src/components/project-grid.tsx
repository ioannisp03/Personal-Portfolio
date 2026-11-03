"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project } from "@/types/portfolio";
import { ProjectCard } from "@/components/project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All work");
  const reduced = useReducedMotion();
  const filters = [
    "All work",
    ...new Set(projects.map((project) => project.category)),
  ];
  const filtered = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <div>
      <h2 className="sr-only">Project collection</h2>
      <div className="project-filter-bar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects by discipline"
        >
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
            >
              {item}
              <span>
                {item === "All work"
                  ? projects.length
                  : projects.filter((project) => project.category === item)
                      .length}
              </span>
            </button>
          ))}
        </div>
        <span className="filter-caption" role="status" aria-atomic="true">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </span>
      </div>
      <motion.div layout={!reduced} className="projects-grid">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((project) => (
            <motion.div
              layout={!reduced}
              key={project.slug}
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.25 }}
            >
              <ProjectCard
                project={project}
                index={projects.indexOf(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
