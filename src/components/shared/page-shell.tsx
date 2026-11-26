import { Fragment, type ReactNode } from "react";
import { Reveal } from "./reveal";

export const textLink =
  "font-medium text-(--blue) underline decoration-(--blue)/35 decoration-2 underline-offset-4 transition-colors hover:decoration-(--blue)";

/** Page-width column and the vertical rhythm of a full section */
export const wrap = "mx-auto w-full max-w-[90rem]";
export const section = "px-5 py-[clamp(5rem,10vw,9rem)] md:px-10";

interface PageShellProps {
  title: string;
  lead: string;
  lang?: string;
  children: ReactNode;
}

/** Frame shared by the inner pages: about, hire, case studies and es. An ink title block, then a snow reading sheet. */
export function PageShell({ title, lead, lang, children }: PageShellProps) {
  return (
    <article lang={lang}>
      <header className="px-5 pt-36 pb-[clamp(4rem,8vw,7rem)] md:px-10">
        <div className={wrap}>
          <Reveal
            as="h1"
            className="mg-display mg-intro text-[clamp(1.9rem,8.4vw,7.5rem)] text-balance"
            lines={[
              <Fragment key="title">
                {title}
                <span className="mg-caret" aria-hidden="true" />
              </Fragment>,
            ]}
          />
          <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-(--ink-soft) md:text-xl">{lead}</p>
        </div>
      </header>
      <div className="mg-grow on-light bg-(--snow) px-5 py-[clamp(4rem,8vw,7rem)] text-(--ink) md:px-10">
        <div className={`${wrap} flex flex-col gap-16 md:gap-20`}>{children}</div>
      </div>
    </article>
  );
}

export function PageSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mg-display mb-6 text-[clamp(1.7rem,3vw,2.6rem)]">{title}</h2>
      {children}
    </section>
  );
}

export function FactList({ facts }: { facts: [label: string, value: ReactNode][] }) {
  return (
    <dl className="max-w-5xl border-t border-(--ink)/15">
      {facts.map(([label, value]) => (
        <div key={label} className="border-b border-(--ink)/15 py-4 md:grid md:grid-cols-[14rem_1fr] md:gap-8">
          <dt className="text-sm font-semibold text-(--snow-soft)">{label}</dt>
          <dd className="mt-1 max-w-[62ch] leading-relaxed md:mt-0">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
