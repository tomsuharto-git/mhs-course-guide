"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/courses", label: "Courses" },
  { href: "/tracks", label: "Tracks" },
  { href: "/programs", label: "Programs" },
  { href: "/requirements", label: "Requirements" },
  { href: "/selection", label: "Selection" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md ${isHome ? "bg-white/80 border-b border-border/50" : "bg-white border-b border-border"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="text-mountie-blue font-bold text-xl font-[family-name:var(--font-heading)]" style={{ letterSpacing: '0.08em' }}>
              MHS
            </span>
            <span className="text-border hidden sm:block">|</span>
            <span className="text-text-muted text-xs tracking-wide hidden sm:inline uppercase">
              Course Guide
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-mountie-blue"
                      : "text-text-muted hover:text-text hover:bg-warm-gray"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-mountie-blue rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 -mr-2 text-text-muted"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M4 4l12 12M4 16L16 4" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="sm:hidden pb-3 pt-1 space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith(item.href)
                    ? "text-mountie-blue bg-mountie-blue/5"
                    : "text-text-muted hover:bg-warm-gray"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
