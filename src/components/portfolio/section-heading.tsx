import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  icon: LucideIcon;
  title: string;
};

export function SectionHeading({ icon: Icon, title }: SectionHeadingProps) {
  return (
    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900">
      <Icon className="text-indigo-600" />
      {title}
    </h2>
  );
}
