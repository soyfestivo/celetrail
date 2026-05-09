import { AlertTriangle, Users, MapPinOff, type LucideIcon } from "lucide-react";
import { content } from "../content";

const ICONS: Record<string, LucideIcon> = {
  AlertTriangle,
  Users,
  MapPinOff,
};

export default function Problem() {
  const { problem } = content;
  return (
    <section id="problem" className="py-20 sm:py-24 bg-white">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-ember-600">
            The Problem
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold">{problem.title}</h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">{problem.lede}</p>
        </div>

        {/* Photo grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {problem.photos.map((p) => (
            <figure key={p.src} className="overflow-hidden rounded-lg bg-stone-100">
              <div className="aspect-[4/3] bg-stone-200 relative">
                <img
                  src={p.src}
                  alt={p.caption}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm pointer-events-none">
                  Photo: {p.src}
                </div>
              </div>
              <figcaption className="px-3 py-2 text-sm text-stone-600">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Three callout bullets */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {problem.bullets.map((b) => {
            const Icon = ICONS[b.icon] ?? AlertTriangle;
            return (
              <div
                key={b.title}
                className="rounded-lg border border-stone-200 bg-stone-50 p-6"
              >
                <Icon className="h-7 w-7 text-ember-500" />
                <h3 className="mt-3 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-stone-700">{b.body}</p>
              </div>
            );
          })}
        </div>

        {/* Pull quote */}
        {problem.quote.text && (
          <blockquote className="mt-14 border-l-4 border-forest-500 pl-6 max-w-3xl">
            <p className="font-display text-2xl text-stone-800 italic leading-relaxed">
              "{problem.quote.text}"
            </p>
            <footer className="mt-3 text-sm text-stone-500">{problem.quote.author}</footer>
          </blockquote>
        )}
      </div>
    </section>
  );
}
