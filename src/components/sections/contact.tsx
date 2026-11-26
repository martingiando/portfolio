"use client";

import { Fragment, useState, type FormEvent } from "react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { CopyEmail } from "@/components/shared/copy-email";
import { Arrow } from "@/components/shared/icons";
import { section, wrap } from "@/components/shared/page-shell";
import { Reveal } from "@/components/shared/reveal";
import { StretchType } from "@/components/shared/stretch-type";

type FormStatus = "idle" | "sending" | "success" | "error";

const ringPill = "mg-pill ring-2 ring-(--snow)/40 ring-inset hover:bg-(--snow) hover:text-(--ink)";
const label = "mb-2 block text-sm font-semibold";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={`bg-(--ink) ${section}`}>
      <div className={`${wrap} grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,30rem)] lg:items-end lg:gap-16`}>
        <div>
          <Reveal
            className="mg-display text-[clamp(2.7rem,6.6vw,7rem)]"
            lines={[
              <StretchType key="role" text="Got a role" />,
              <Fragment key="l2">
                <span className="mg-serif text-(--sky)">or a</span> project?
              </Fragment>,
            ]}
          />
          <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-(--ink-soft)">
            Full-time or freelance, remote from Buenos Aires (UTC−3). Copy my email, or leave a message here. I
            usually reply within 24 hours.
          </p>
          <div className="mt-8 max-w-3xl">
            <CopyEmail email={SITE_CONFIG.email} />
          </div>
          <ul className="mt-6 flex flex-wrap gap-3">
            <li>
              <a href={`mailto:${SITE_CONFIG.email}`} className={ringPill}>
                Write an email <Arrow />
              </a>
            </li>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="me noopener noreferrer" className={ringPill}>
                  {link.label} <Arrow />
                </a>
              </li>
            ))}
            <li>
              <a href={SITE_CONFIG.cv} download className={ringPill}>
                CV (PDF)
              </a>
            </li>
          </ul>
        </div>

        <div className="on-light rounded-[2rem] bg-(--snow) p-6 text-(--ink) md:p-8">
          {status === "success" ? (
            <div
              role="status"
              tabIndex={-1}
              ref={(el) => el?.focus()}
              className="flex min-h-[26rem] flex-col items-start justify-center gap-4"
            >
              <p className="mg-display text-[clamp(2.2rem,4vw,3.2rem)]">Message sent.</p>
              <p className="leading-relaxed text-(--snow-soft)">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mg-pill mt-2 ring-2 ring-(--ink)/30 ring-inset hover:bg-(--ink) hover:text-(--snow)"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h3 className="mg-display text-[clamp(1.6rem,2.4vw,2rem)]">Send a message</h3>
              <div>
                <label htmlFor="name" className={label}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="mg-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className={label}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="mg-field"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className={label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={5000}
                  rows={5}
                  className="mg-field resize-none"
                  placeholder="Tell me about the role or project"
                />
              </div>

              {/* Honeypot: people never see it, bots fill it in */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {status === "error" && (
                <p className="text-sm font-semibold text-(--danger)" role="alert">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mg-pill w-full justify-center bg-(--blue) text-(--snow) hover:transform-none disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"} <Arrow />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
