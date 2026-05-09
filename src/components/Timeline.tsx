import { useEffect, useState } from "react";
import { Check, Circle, Activity } from "lucide-react";
import { content } from "../content";
import { annotateEvents, type AnnotatedEvent } from "../lib/timeline";
import Countdown from "./Countdown";

export default function Timeline() {
  const { timeline } = content;
  const [events, setEvents] = useState<AnnotatedEvent[]>(() => annotateEvents());

  // Re-annotate periodically so the active event rolls forward without a refresh
  useEffect(() => {
    const id = setInterval(() => setEvents(annotateEvents()), 60_000);
    return () => clearInterval(id);
  }, []);

  const next = events.find((e) => e.status === "next");
  const allDone = !next;

  return (
    <section id="timeline" className="py-20 sm:py-24 bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left column: header + active countdown */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-creek-600">
              {timeline.eyebrow}
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold">{timeline.title}</h2>
            <p className="mt-4 text-lg text-stone-700 leading-relaxed">{timeline.lede}</p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-100 px-3 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-forest-600" />
              </span>
              <span className="font-semibold text-forest-700">{timeline.statusBadge}</span>
            </div>

            {next ? (
              <div className="mt-8 rounded-xl border border-stone-200 bg-stone-50 p-6">
                <Countdown
                  deadline={next.date}
                  size="lg"
                  prefix={`Next: ${next.title}`}
                />
                <p className="mt-3 text-sm text-stone-600">
                  {next.dateLabel} · scroll the timeline below to see what comes after.
                </p>
              </div>
            ) : (
              <div className="mt-8 rounded-xl border border-forest-200 bg-forest-50 p-6">
                <p className="font-display text-2xl font-bold text-forest-700">
                  All scheduled milestones have passed.
                </p>
                <p className="mt-2 text-stone-700">
                  The CeleTrail is now in execution. Check back for construction updates.
                </p>
              </div>
            )}
          </div>

          {/* Right column: vertical timeline */}
          <div className="lg:col-span-3">
            <ol className="relative">
              {/* Vertical rail */}
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-stone-200" />

              {events.map((e, i) => (
                <TimelineItem key={i} event={e} isLast={i === events.length - 1} />
              ))}
            </ol>

            {allDone && (
              <p className="mt-6 text-sm text-stone-500 italic">
                All milestones complete. Funding secured. Construction underway.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, isLast }: { event: AnnotatedEvent; isLast: boolean }) {
  const { status } = event;

  const dot = (() => {
    if (status === "past")
      return (
        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-forest-600 text-white">
          <Check className="h-4 w-4" />
        </span>
      );
    if (status === "next")
      return (
        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ember-500 text-white shadow-lg shadow-ember-500/30 ring-4 ring-ember-500/20">
          <Activity className="h-4 w-4" />
        </span>
      );
    return (
      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-stone-400 ring-2 ring-stone-200">
        <Circle className="h-3 w-3 fill-current" />
      </span>
    );
  })();

  const pill = (() => {
    if (status === "past")
      return <span className="rounded-full bg-forest-100 px-2 py-0.5 text-xs font-medium text-forest-700">Done</span>;
    if (status === "next")
      return <span className="rounded-full bg-ember-500 px-2 py-0.5 text-xs font-bold text-white">Up Next</span>;
    return <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-500">Upcoming</span>;
  })();

  return (
    <li className={`relative flex gap-5 ${isLast ? "" : "pb-10"}`}>
      {dot}
      <div className={`flex-1 -mt-1 ${status === "past" ? "opacity-60" : ""}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-sm font-mono uppercase tracking-wider text-stone-500">
            {event.dateLabel}
          </span>
          {pill}
        </div>
        <h3
          className={`mt-1 text-xl font-bold ${
            status === "next" ? "text-stone-900" : "text-stone-800"
          }`}
        >
          {event.title}
        </h3>
        <p className="mt-1 text-stone-700 leading-relaxed">{event.body}</p>
      </div>
    </li>
  );
}
