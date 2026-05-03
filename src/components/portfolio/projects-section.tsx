import { Award, ChevronRight, Code } from "lucide-react";

import type { Project } from "@/data/portfolio";

import { SectionHeading } from "./section-heading";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section>
      <SectionHeading icon={Code} title="Professional Projects" />
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md md:p-8"
          >
            <div className="absolute top-0 left-0 h-full w-1 bg-indigo-500 opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-indigo-600">
                  {project.subtitle}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-md border border-amber-200/50 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                <Award size={14} />
                {project.award}
              </div>

              <p className="text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>

              <ul className="space-y-2 text-sm text-slate-600">
                {project.responsibilities.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <ChevronRight
                      size={16}
                      className="mt-0.5 shrink-0 text-indigo-400"
                    />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
