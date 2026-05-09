import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds, expired: ms === 0 };
}

type Size = "sm" | "lg";

export default function Countdown({
  deadline,
  size = "sm",
  prefix,
}: {
  deadline: string;
  size?: Size;
  prefix?: string;
}) {
  const target = new Date(deadline).getTime();
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (t.expired) return null;

  const cells: Array<{ value: number; label: string }> = [
    { value: t.days, label: "days" },
    { value: t.hours, label: "hrs" },
    { value: t.minutes, label: "min" },
    { value: t.seconds, label: "sec" },
  ];

  if (size === "lg") {
    return (
      <div>
        {prefix && (
          <p className="text-xs font-semibold uppercase tracking-wider text-ember-600">
            {prefix}
          </p>
        )}
        <div className="mt-2 flex items-baseline gap-2 sm:gap-3 font-mono tabular-nums">
          {cells.map((c) => (
            <div key={c.label} className="flex flex-col items-center">
              <span className="font-display text-2xl sm:text-4xl font-bold leading-none text-stone-900">
                {String(c.value).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-wider text-stone-500">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // size === "sm"
  return (
    <div className="inline-flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 rounded-2xl sm:rounded-full bg-white/95 backdrop-blur-sm shadow-sm ring-1 ring-ember-500/30 px-5 py-3 sm:px-4 sm:py-2 text-base sm:text-sm">
      {prefix && <span className="font-semibold text-ember-600 leading-tight">{prefix}</span>}
      <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 font-mono tabular-nums text-stone-900">
        {cells.map((c, i) => (
          <span key={c.label} className="flex items-baseline gap-1">
            <span className="font-bold">{String(c.value).padStart(2, "0")}</span>
            <span className="text-xs text-stone-500">{c.label}</span>
            {i < cells.length - 1 && <span className="text-stone-300">·</span>}
          </span>
        ))}
      </span>
    </div>
  );
}
