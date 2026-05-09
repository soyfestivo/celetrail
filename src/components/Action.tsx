import { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { content } from "../content";

export default function Action() {
  const { action } = content;
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(action.blastText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="action" className="py-20 sm:py-24 bg-gradient-to-br from-forest-700 to-creek-700 text-white">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-ember-500">
            Take Action
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold">{action.title}</h2>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">{action.lede}</p>
        </div>

        {/* Three action tiles */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {action.tiles.map((t) => (
            <a
              key={t.title}
              href={t.url}
              target="_blank"
              rel="noreferrer"
              className={`group flex flex-col rounded-xl p-6 transition-transform hover:-translate-y-1 ${
                t.urgent
                  ? "bg-ember-500 hover:bg-ember-600"
                  : "bg-white/10 hover:bg-white/15 backdrop-blur"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-90">
                  {t.kicker}
                </p>
                {t.cityBadge && (
                  <span
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-white p-1 shadow-sm"
                    aria-label="City of Pflugerville"
                    title="City of Pflugerville"
                  >
                    <img
                      src="/images/Pflugerville-logo.svg"
                      alt=""
                      className="h-full w-full"
                    />
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-2xl font-bold leading-tight">{t.title}</h3>
              <p className="mt-3 text-white/90 leading-relaxed">{t.body}</p>
              <span className="mt-5 inline-flex items-center gap-1 font-semibold">
                {t.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>

        {/* Copy-to-clipboard blast block */}
        <div className="mt-14 rounded-xl bg-white/10 p-6 backdrop-blur">
          <h3 className="text-2xl font-bold">{action.blastTitle}</h3>
          <p className="mt-2 text-white/80">{action.blastIntro}</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 items-stretch">
            <pre className="flex-1 whitespace-pre-wrap rounded-lg bg-stone-900/50 p-4 text-sm text-white/90 font-sans leading-relaxed">
              {action.blastText}
            </pre>
            <button
              type="button"
              onClick={onCopy}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-stone-900 px-5 py-3 font-semibold hover:bg-stone-100 sm:self-start whitespace-nowrap"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copy text
                </>
              )}
            </button>
          </div>
        </div>

        {/* Petition (Google Form embed) */}
        <div className="mt-10 rounded-xl bg-white p-6 sm:p-8 text-stone-900">
          <h3 className="text-2xl font-bold">{action.petitionTitle}</h3>
          <p className="mt-2 text-stone-700">{action.petitionLede}</p>
          {action.googleFormUrl ? (
            <div className="mt-5 overflow-hidden rounded-lg border border-stone-200">
              <iframe
                src={action.googleFormUrl}
                className="block w-full"
                style={{ height: "640px", border: 0 }}
                loading="lazy"
                title="Cele Trail petition"
              >
                Loading…
              </iframe>
            </div>
          ) : (
            <div className="mt-5 rounded-lg border-2 border-dashed border-stone-300 bg-stone-50 p-6 text-sm text-stone-600">
              <p className="font-semibold">Add a Google Form embed URL to enable the petition.</p>
              <ol className="mt-2 list-decimal list-inside space-y-1">
                <li>Create a Google Form with: Name, Street Address, Email, optional comment.</li>
                <li>Click <span className="font-semibold">Send</span> → the <span className="font-semibold">&lt; &gt;</span> embed icon.</li>
                <li>Copy the iframe <code className="rounded bg-stone-200 px-1 text-xs">src</code> URL.</li>
                <li>Paste it into <code className="rounded bg-stone-200 px-1 text-xs">content.action.googleFormUrl</code>.</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
