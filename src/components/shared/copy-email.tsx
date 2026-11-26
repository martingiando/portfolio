"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      data-cursor={copied ? "Copied" : "Copy"}
      className="group flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-[1.6rem] bg-(--blue) px-6 py-5 text-left text-(--snow) transition-transform duration-500 ease-(--ease-out) motion-safe:hover:-rotate-1 md:px-8 md:py-6"
    >
      <span className="mg-mono text-[clamp(1.05rem,2.6vw,2.2rem)] font-medium break-all">{email}</span>
      <span className="mg-pill bg-(--snow) px-4 py-2.5 text-[0.7rem] text-(--blue)" aria-live="polite">
        {copied ? "Copied" : "Copy email"}
      </span>
    </button>
  );
}
