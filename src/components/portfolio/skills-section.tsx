import { Cpu } from "lucide-react";

import type { SkillGroup } from "@/data/portfolio";

import { SectionHeading } from "./section-heading";

type SkillsSectionProps = {
  skills: SkillGroup[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section>
      <SectionHeading icon={Cpu} title="Technical Skills" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((skillGroup) => {
          const Icon = skillGroup.icon;

          return (
            <div
              key={skillGroup.category}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3 font-semibold text-slate-800">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                  <Icon size={18} />
                </div>
                {skillGroup.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-200/60 bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
