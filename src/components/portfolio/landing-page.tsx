import { portfolioData } from "@/data/portfolio";

import { EducationSection } from "./education-section";
import { HeroSection } from "./hero-section";
import { ProjectsSection } from "./projects-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SkillsSection } from "./skills-section";

export function LandingPage() {
  const { certifications, education, header, projects, skills, testScores } =
    portfolioData;

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 font-sans leading-relaxed text-slate-800 selection:bg-indigo-100 selection:text-indigo-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-indigo-200/35 blur-3xl" />
        <div className="absolute right-[-7rem] top-80 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />
      </div>

      <SiteHeader brandName="Supanat K." contact={header.contact} />

      <main className="relative mx-auto max-w-5xl space-y-16 px-6 py-12">
        <HeroSection
          header={header}
          projectCount={projects.length}
          certificationCount={certifications.length}
        />
        <hr className="border-slate-200" />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <hr className="border-slate-200" />
        <EducationSection
          education={education}
          testScores={testScores}
          certifications={certifications}
        />
        <SiteFooter name={header.name} />
      </main>
    </div>
  );
}
