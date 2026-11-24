"use client";

import { useState, type FormEvent } from "react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/animated-section";
import { textLink } from "@/components/shared/page-shell";
import { SectionHeading } from "@/components/shared/section-heading";

type FormStatus = "idle" | "sending" | "success" | "error";

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
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="px-6 py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="contact-heading" title="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: CTA text */}
          <AnimatedSection>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8">
              Have a role, a project idea or a question? Send me a message, or
              write to me directly.
            </p>
            <ul className="mb-8 flex flex-col items-start">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className={`${textLink} inline-block py-2.5`}
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.cv}
                  download
                  className={`${textLink} inline-block py-2.5`}
                >
                  Download CV (PDF)
                </a>
              </li>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${textLink} inline-block py-2.5`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-accent" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                Usually replies within 24h
              </span>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={0.15}>
            {status === "success" ? (
              <div
                role="status"
                tabIndex={-1}
                ref={(el) => el?.focus()}
                className="border border-foreground shadow-brutalist bg-card p-8 md:p-10 text-center"
              >
                <p className="font-display text-2xl font-bold uppercase tracking-tight mb-2">
                  Message Sent
                </p>
                <p className="text-muted-foreground">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 py-3 font-mono text-sm text-accent uppercase tracking-wider hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-foreground shadow-brutalist bg-card p-6 md:p-8 flex flex-col gap-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    required
                    className="w-full border border-foreground bg-background px-4 py-3 font-sans text-base focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className="w-full border border-foreground bg-background px-4 py-3 font-sans text-base focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    className="w-full border border-foreground bg-background px-4 py-3 font-sans text-base resize-none focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tell me about the role or project"
                  />
                </div>

                {/* Honeypot: people never see it, bots fill it in */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="font-mono text-sm text-destructive" role="alert">
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-accent text-white px-6 py-3 font-mono text-sm uppercase tracking-wider font-medium shadow-brutalist-sm transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
