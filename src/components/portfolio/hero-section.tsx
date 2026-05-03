import { ExternalLink, MapPin } from "lucide-react";

import type { HeaderData } from "@/data/portfolio";

type HeroSectionProps = {
  header: HeaderData;
  projectCount: number;
  certificationCount: number;
};

export function HeroSection({
  header,
  projectCount: _projectCount,
  certificationCount: _certificationCount,
}: HeroSectionProps) {
  const githubUrl = header.contact.github.startsWith("http")
    ? header.contact.github
    : `https://${header.contact.github}`;

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white px-6 py-8 shadow-[0_30px_80px_-48px_rgba(37,99,235,0.45)] md:px-8 md:py-10">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-indigo-100 via-sky-50 to-cyan-100" />
      <div className="absolute -right-16 top-20 h-40 w-40 rounded-full bg-indigo-100/70 blur-3xl" />
      <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-sky-100/80 blur-3xl" />

      <div className="relative space-y-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            {header.name}
          </h1>
          <div className="mt-4 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700">
            Robotics • AI • Software
          </div>
          <p className="mt-3 text-xl font-medium text-indigo-600">
            {header.title}
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm font-medium text-slate-600 sm:flex-row sm:flex-wrap sm:items-center">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
            {header.contact.email}
          </span>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
            <MapPin size={16} className="text-slate-400" />
            <span>{header.contact.location}</span>
          </div>
        </div>

        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          {header.summary}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={header.contact.portfolioPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-600"
          >
            View Portfolio PDF
            <ExternalLink size={16} />
          </a>
          <a
            href={header.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-indigo-200 hover:text-indigo-600"
          >
            LinkedIn Profile
            <ExternalLink size={16} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-indigo-200 hover:text-indigo-600"
          >
            GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
