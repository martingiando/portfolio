"use client";

import { useSyncExternalStore } from "react";

const clock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/Argentina/Buenos_Aires",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const subscribe = (tick: () => void) => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
};

/** Live time in Buenos Aires. Renders "--:--" on the server so hydration never mismatches. */
export function LocalTime() {
  const now = useSyncExternalStore(subscribe, () => clock.format(new Date()), () => "");
  return <time className="mg-mono tabular-nums">{now || "--:--"}</time>;
}
