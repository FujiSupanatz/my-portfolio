import { ExternalLink } from "lucide-react";

import type { ContactData } from "@/data/portfolio";

import { GitHubIcon, LinkedInIcon } from "./social-icons";

type SiteHeaderProps = {
  brandName: string;
  contact: ContactData;
};

export function SiteHeader({ brandName, contact }: SiteHeaderProps) {
  const githubUrl = contact.github.startsWith("http")
    ? contact.github
    : `https://${contact.github}`;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold tracking-tight text-slate-900">
          {brandName}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={contact.portfolioPdf}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-indigo-200 hover:text-indigo-600 hover:shadow md:inline-flex"
            aria-label="Open portfolio PDF"
          >
            Portfolio PDF
            <ExternalLink size={16} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition-colors hover:text-indigo-600"
            aria-label="Open GitHub profile"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition-colors hover:text-indigo-600"
            aria-label="Open LinkedIn profile"
          >
            <LinkedInIcon size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
