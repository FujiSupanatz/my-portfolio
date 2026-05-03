type SiteFooterProps = {
  name: string;
};

export function SiteFooter({ name }: SiteFooterProps) {
  return (
    <footer className="pb-4 pt-8 text-center text-sm text-slate-500">
      <p>
        Copyright {new Date().getFullYear()} {name}. Built with Next.js &
        Tailwind CSS.
      </p>
    </footer>
  );
}
