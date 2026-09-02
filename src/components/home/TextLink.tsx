import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

/** 14px semibold link with an arrow that nudges on hover — ported from the
 *  v2 LPS design pass (`.text-link`). */
export function TextLink({
  href,
  children,
  className = "",
  ...rest
}: { href: string; children: ReactNode; className?: string } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
>) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-rose ${className}`}
      {...rest}
    >
      {children}
      <span
        aria-hidden
        className="text-lg transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
