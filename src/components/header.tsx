"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
];

export function Header({ name, monogram }: { name: string; monogram: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label={`${monogram}. ${name}. — home`}
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            {monogram}
            <span>.</span>
          </span>
          <span className="brand-name">
            {name}
            <span className="accent">.</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((link, index) => (
            <Link
              className="nav-link"
              key={link.label}
              href={link.href}
              aria-current={
                link.label === "Work" && pathname.startsWith("/projects")
                  ? "page"
                  : undefined
              }
            >
              <span className="nav-number">0{index + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="header-contact" href="/#contact">
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          ref={trigger}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav container"
          aria-label="Mobile navigation"
        >
          {[
            ...links,
            { label: "All projects", href: "/projects" },
            { label: "Contact", href: "/#contact" },
          ].map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              <span className="eyebrow accent">0{index + 1}</span>
              {link.label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
