import type { ComponentProps } from "react";

type SocialIconProps = ComponentProps<"svg"> & {
  size?: number;
};

export function GitHubIcon({ size = 20, ...props }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-7A5.4 5.4 0 0 0 18 4.8 5 5 0 0 0 17.9 1S16.7.7 14 2.5a13.4 13.4 0 0 0-5 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8 5.4 5.4 0 0 0 3.8 8.5c0 5.5 3.1 6.7 6.1 7a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, ...props }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
