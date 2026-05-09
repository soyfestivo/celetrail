import { CheckCircle2 } from "lucide-react";
import { content } from "../content";

export default function Solution() {
  const { solution } = content;

  return (
    <section id="solution" className="py-20 sm:py-24 bg-stone-50">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-forest-700">
            The Solution
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold">{solution.title}</h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">{solution.lede}</p>
        </div>

        {/* Embedded map */}
        <div className="mt-12 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
          {solution.mapEmbedUrl ? (
            <iframe
              src={solution.mapEmbedUrl}
              className="block w-full"
              style={{ height: "560px", border: 0 }}
              loading="lazy"
              allowFullScreen
              title="Cele Trail proposed routes"
            />
          ) : (
            <div className="relative aspect-[16/9] bg-stone-100">
              <img
                src={solution.mapFallbackImage}
                alt="Cele Trail proposed route map"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-stone-500 p-8 text-center">
                <p className="font-semibold">Interactive map goes here</p>
                <p className="text-sm max-w-md">
                  Create a Google My Map at{" "}
                  <a
                    href="https://mymaps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    mymaps.google.com
                  </a>
                  , draw your routes, then paste the embed URL into{" "}
                  <code className="rounded bg-stone-200 px-1 py-0.5 text-xs">
                    content.solution.mapEmbedUrl
                  </code>
                  .
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Phase cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solution.phases.map((p) => (
            <article
              key={p.label}
              className="flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white"
            >
              <div className="aspect-[16/10] bg-stone-200 relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm pointer-events-none">
                  Photo: {p.image}
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-semibold uppercase tracking-wider text-creek-600">
                    {p.label} · {p.distance}
                  </span>
                  <span className="rounded-full bg-forest-100 px-2 py-1 text-xs font-medium text-forest-700">
                    {p.status}
                  </span>
                </div>
                <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-stone-700">
                  <span className="font-semibold">Scope:</span> {p.scope}
                </p>
                <p className="mt-2 text-stone-700">
                  <span className="font-semibold">Impact:</span> {p.impact}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Why this wins */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold">{solution.whyTitle}</h3>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {solution.whyBullets.map((b) => (
              <li key={b.title} className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-forest-600 mt-0.5" />
                <div>
                  <p className="font-semibold">{b.title}</p>
                  <p className="text-stone-700">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
