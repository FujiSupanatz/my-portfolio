import { Award, BookOpen, GraduationCap } from "lucide-react";

import type { Education, TestScore } from "@/data/portfolio";

import { SectionHeading } from "./section-heading";

type EducationSectionProps = {
  education: Education[];
  testScores: TestScore[];
  certifications: string[];
};

export function EducationSection({
  education,
  testScores,
  certifications,
}: EducationSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="space-y-8">
        <div>
          <SectionHeading icon={GraduationCap} title="Education" />
          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={`${item.school}-${item.year}`}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {item.school}
                </h3>
                <p className="mt-1 text-slate-600">{item.degree}</p>
                <div className="mt-4 flex items-center gap-4 text-sm font-semibold">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-600">
                    {item.gpa}
                  </span>
                  <span className="text-slate-500">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-slate-900">Test Scores</h3>
          <div className="space-y-3">
            {testScores.map((test) => (
              <div
                key={test.name}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4"
              >
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    {test.name}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-500">
                    {test.issuer}
                  </div>
                </div>
                <div className="text-sm font-bold text-indigo-600">
                  {test.score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <SectionHeading icon={BookOpen} title="Certifications & Awards" />
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <ul className="space-y-4">
            {certifications.map((certification) => (
              <li
                key={certification}
                className="flex items-start gap-3 text-sm text-slate-600"
              >
                <Award size={18} className="mt-0.5 shrink-0 text-indigo-400" />
                <span className="leading-snug">{certification}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
