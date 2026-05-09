import { content } from "../content";

export type TimelineEvent = (typeof content.timeline.events)[number];

export type EventStatus = "past" | "next" | "future";

export type AnnotatedEvent = TimelineEvent & {
  status: EventStatus;
  ts: number;
};

/**
 * Returns events annotated with their status:
 *   - "past": already happened
 *   - "next": the next future event (only one event has this status)
 *   - "future": further out
 */
export function annotateEvents(now = Date.now()): AnnotatedEvent[] {
  const sorted = [...content.timeline.events]
    .map((e) => ({ ...e, ts: new Date(e.date).getTime() }))
    .sort((a, b) => a.ts - b.ts);

  let nextAssigned = false;
  return sorted.map((e) => {
    if (e.ts <= now) return { ...e, status: "past" as const };
    if (!nextAssigned) {
      nextAssigned = true;
      return { ...e, status: "next" as const };
    }
    return { ...e, status: "future" as const };
  });
}

export function getNextEvent(now = Date.now()): AnnotatedEvent | null {
  return annotateEvents(now).find((e) => e.status === "next") ?? null;
}
