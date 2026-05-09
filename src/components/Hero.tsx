import { useEffect, useState } from "react";
import { ArrowRight, MapPin, ChevronRight } from "lucide-react";
import { content } from "../content";
import Countdown from "./Countdown";
import { getNextEvent } from "../lib/timeline";

export default function Hero() {
  const { hero } = content;
  const [next, setNext] = useState(() => getNextEvent());

  useEffect(() => {
    if (!next) return;
    const id = setInterval(() => setNext(getNextEvent()), 60_000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-stone-200"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
      />
      {/* Mobile: solid wash so text reads cleanly. Desktop: left-fade so the field shows on the right. */}
      <div className="absolute inset-0 -z-10 bg-white/85 sm:bg-transparent" />
      <div className="hidden sm:block absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-white/65 to-transparent" />
      <div className="hidden sm:block absolute inset-0 -z-10 bg-gradient-to-t from-white/40 via-transparent to-transparent" />

      <div className="container-page py-14 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white/70 px-3 py-1 text-[11px] sm:text-xs font-medium uppercase tracking-wider text-forest-700">
            <MapPin className="h-3.5 w-3.5" />
            {hero.eyebrow}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-stone-900">
            {hero.headline}
          </h1>

          <p className="mt-5 sm:mt-6 max-w-2xl text-lg sm:text-2xl text-stone-700 leading-relaxed">
            {hero.subhead}
          </p>

          {next ? (
            <div className="mt-7 sm:mt-8 flex flex-col gap-5">
              <a
                href="#timeline"
                className="group inline-flex items-start gap-2 self-start"
                aria-label="Jump to timeline"
              >
                <Countdown deadline={next.date} prefix={`Next: ${next.title}`} />
                <ChevronRight className="h-4 w-4 mt-3 text-stone-400 transition-transform group-hover:translate-x-0.5" />
              </a>
              <div className="flex flex-wrap gap-3">
                <a
                  href={hero.primaryCta.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-urgent flex-1 sm:flex-none text-base"
                >
                  {hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={hero.secondaryCta.anchor}
                  className="btn-secondary flex-1 sm:flex-none"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
          ) : (
            <div className="mt-7 sm:mt-8 rounded-lg border border-creek-500/30 bg-white/80 p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-creek-600">
                Bond cycle complete
              </p>
              <p className="mt-1 text-stone-700">
                The CeleTrail is now in construction. Check the timeline below for
                where things stand.
              </p>
              <a href="#timeline" className="mt-3 inline-flex btn-primary">
                View the timeline <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}

          {/* Stat strip — stacks on mobile, row on desktop */}
          <dl className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 max-w-2xl">
            {hero.stats.map((s) => (
              <div
                key={s.label}
                className="flex sm:block items-baseline justify-between gap-3 rounded-lg border border-stone-200 bg-white/90 px-4 py-3 sm:p-4"
              >
                <dt className="order-2 sm:order-1 text-[11px] sm:text-xs uppercase tracking-wider text-stone-500 leading-tight">
                  {s.label}
                </dt>
                <dd className="order-1 sm:order-2 sm:mt-1 font-display text-xl sm:text-3xl font-bold text-forest-700 whitespace-nowrap">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
