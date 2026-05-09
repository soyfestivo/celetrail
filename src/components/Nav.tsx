import { useEffect, useState } from "react";
import { content } from "../content";

const links = [
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "The Plan" },
  { href: "#timeline", label: "Timeline" },
  { href: "#action", label: "Take Action" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-stone-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold text-forest-700">
            {content.site.name}
          </span>
          <span className="hidden sm:inline text-sm text-stone-500">
            · {content.site.tagline}
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-forest-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href={content.hero.primaryCta.url}
            target="_blank"
            rel="noreferrer"
            className="ml-2 btn-urgent text-sm py-2 px-4"
          >
            Bond Survey
          </a>
        </nav>
      </div>
    </header>
  );
}
