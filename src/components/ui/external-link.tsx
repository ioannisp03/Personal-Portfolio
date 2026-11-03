import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExternalLink({
  href,
  label,
  className,
  icon = true,
}: {
  href: string | null;
  label: string;
  className?: string;
  icon?: boolean;
}) {
  if (!href) {
    return (
      <span
        className={cn("unavailable-link", className)}
        aria-disabled="true"
        title={`Add your ${label.toLowerCase()} in src/data/portfolio.ts`}
      >
        {label}
        {icon && <ArrowUpRight size={15} aria-hidden="true" />}
        <span className="sr-only"> — not configured yet</span>
      </span>
    );
  }
  const external = /^https?:\/\//.test(href);
  return (
    <a
      className={cn("text-link", className)}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
      {icon && <ArrowUpRight size={15} aria-hidden="true" />}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
