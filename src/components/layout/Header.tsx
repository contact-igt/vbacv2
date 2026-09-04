"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";
import { nav, site } from "@/lib/site";

const WHATSAPP_HREF = site.whatsappHref;

type NavItem = (typeof nav)[number];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  if (!("children" in item) || !item.children) {
    return (
      <Link
        href={item.href}
        className="relative py-2 text-[16px] font-medium text-ink/80 transition-colors after:absolute after:bottom-0.5 after:left-0 after:right-full after:h-px after:bg-rose after:transition-[right] after:duration-200 hover:text-ink hover:after:right-0"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="flex items-center gap-1 text-[16px] font-medium text-ink/80 transition-colors hover:text-ink focus-visible:text-ink"
      >
        {item.label}
        <Chevron open={false} />
      </Link>
      <div
        className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 rounded-2xl border border-border bg-white p-2 opacity-0 shadow-[0_16px_40px_rgba(46,36,33,0.12)] transition-[opacity,transform,visibility] duration-200 ease-out group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100"
      >
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="block rounded-xl px-3.5 py-2.5 text-[16px] font-medium text-ink/80 transition-colors hover:bg-cream hover:text-rose"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = "children" in item && !!item.children;

  return (
    <div className="border-b border-border/60 last:border-b-0">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="min-h-11 flex-1 py-2.5 text-base font-medium text-ink/85"
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            type="button"
            aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label} submenu`}
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-ink/60"
          >
            <Chevron open={expanded} />
          </button>
        )}
      </div>
      {hasChildren && (
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-250 ease-out ${
            expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="flex min-h-0 flex-col gap-0.5 pb-2 pl-3">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onNavigate}
                className="min-h-11 flex items-center py-2 text-[13.5px] text-ink/70"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const sectionNav = [
  { label: "Overview", href: "#care-overview" },
  { label: "Who It's For", href: "#who-its-for" },
  { label: "Journey", href: "#journey" },
  { label: "Doctor", href: "#doctor" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Header({ minimalNav = false }: { minimalNav?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        const fallbackEl = document.getElementById("enquiry") || document.getElementById("contact-form");
        if (fallbackEl) {
          fallbackEl.scrollIntoView({ behavior: "smooth" });
        }
      }
      setOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 h-[80px] md:h-[100px] transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-cream/92 shadow-[0_1px_0_var(--color-border)] backdrop-blur-[18px]"
          : "bg-cream/60 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center">
          <BrandMark size="sm" />
        </Link>

        {minimalNav ? (
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Page Sections">
            {sectionNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="relative py-2 text-[15px] font-medium text-ink/80 transition-colors hover:text-rose"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : (
          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
            {nav.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2.5">
          <a
            href={site.phoneHref}
            className="hidden sm:inline-flex min-h-[38px] sm:min-h-[42px] items-center rounded-full border border-border bg-white/50 px-3 sm:px-4 text-[13px] sm:text-[15px] font-semibold whitespace-nowrap text-ink transition-colors hover:border-rose hover:bg-white"
          >
            Call
          </a>
          <a
            href="#enquiry"
            onClick={(e) => handleAnchorClick(e, "#enquiry")}
            className="inline-flex min-h-[38px] sm:min-h-[42px] items-center rounded-full bg-rose px-3.5 sm:px-4 text-[13px] sm:text-[15px] font-semibold whitespace-nowrap text-white shadow-[0_8px_18px_rgba(202,149,133,0.28)] transition-colors hover:bg-rose-deep active:scale-[0.98]"
          >
            Book Appointment
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full text-ink ${minimalNav ? "lg:hidden" : "xl:hidden"}`}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M1 1l20 14M21 1L1 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M0 1h22M0 8h22M0 15h22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-border bg-cream transition-[grid-template-rows,opacity] duration-300 ease-out ${minimalNav ? "lg:hidden" : "xl:hidden"} grid ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        style={{ display: "grid" }}
      >
        <div className="min-h-0 max-h-[calc(100vh-85px)] overflow-y-auto">
          <Container className="flex flex-col py-2">
            {minimalNav ? (
              sectionNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="min-h-11 flex items-center border-b border-border/60 py-2.5 text-base font-medium text-ink/85"
                >
                  {item.label}
                </a>
              ))
            ) : (
              nav.map((item) => (
                <MobileNavItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
              ))
            )}
            <div className="mt-3 flex flex-col gap-3 pb-2">
              <a
                href={site.phoneHref}
                className="min-h-11 rounded-full border border-border bg-white py-2.5 text-center text-sm font-semibold text-ink"
              >
                Call {site.phone}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="min-h-11 rounded-full border border-border bg-white py-2.5 text-center text-sm font-semibold text-ink"
              >
                WhatsApp The Birthwave
              </a>
              <a
                href="#enquiry"
                onClick={(e) => handleAnchorClick(e, "#enquiry")}
                className="min-h-11 rounded-full bg-rose py-2.5 text-center text-sm font-semibold text-white flex items-center justify-center"
              >
                Book Appointment
              </a>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
