import type { ReactNode } from "react";

export const textLink =
  "text-accent underline underline-offset-4 decoration-1 hover:decoration-2";

interface PageShellProps {
  title: string;
  lead: string;
  lang?: string;
  children: ReactNode;
}

/** Frame shared by the inner pages: about, hire, case studies and es. */
export function PageShell({ title, lead, lang, children }: PageShellProps) {
  return (
    <article lang={lang} className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-display text-[clamp(1.75rem,6vw,5rem)] font-bold uppercase tracking-tight leading-none text-balance">
          {title}
        </h1>
        <p className="mt-8 max-w-[58ch] text-lg md:text-xl leading-relaxed">
          {lead}
        </p>
        <div className="mt-16 flex flex-col gap-16">{children}</div>
      </div>
    </article>
  );
}

export function PageSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function FactList({
  facts,
}: {
  facts: [label: string, value: ReactNode][];
}) {
  return (
    <dl className="border border-foreground shadow-brutalist bg-card divide-y divide-foreground">
      {facts.map(([label, value]) => (
        <div
          key={label}
          className="px-5 py-4 md:grid md:grid-cols-[14rem_1fr] md:gap-8"
        >
          <dt className="font-mono text-sm text-muted-foreground">{label}</dt>
          <dd className="max-w-[58ch] leading-relaxed">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
