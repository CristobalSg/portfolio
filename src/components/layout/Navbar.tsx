import { useState } from "react";

import { navigationLinks, siteMetadata } from "../../data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="graphite-panel sticky top-0 z-50 border-b border-white/6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-12">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="graphite-card inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold uppercase tracking-[0.2em] text-zinc-100">
            {siteMetadata.monogram}
          </span>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold uppercase tracking-[0.18em] text-zinc-100">
              {siteMetadata.name}
            </p>
            <p className="hidden text-sm text-zinc-500 sm:block">{siteMetadata.role}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
          className="graphite-button-secondary inline-flex h-11 items-center justify-center rounded-full px-4 text-sm font-semibold transition md:hidden"
        >
          Menu
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-white/6 bg-[#1d1d20]/92 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4 sm:px-10">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/4 hover:text-zinc-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
