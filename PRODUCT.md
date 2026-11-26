# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally (confirmed 2026-11-26):

- Recruiters and hiring managers deciding whether to interview Martín for a full-time remote role. They skim projects, experience and stack, then download the CV or get in touch.
- Freelance clients deciding whether to hire him for a project. They look at shipped work and then write to him.

## Product Purpose

The personal portfolio of Martín Giando, a Senior Full Stack Engineer working remotely from Buenos Aires. It shows his projects, experience, stack and colleague testimonials, and leads to contact (form, email, CV download). Success is a visitor who gets in touch or downloads the CV.

## Positioning

He is strongest in frontend (React, Next.js, TypeScript) and comfortable owning the backend too (Node.js, NestJS, Express, PostgreSQL). He has 5+ years of experience. He built Kiwo end to end, and he worked on Tower Travel at The Flock from day one while the team grew to 15 people, guiding 3 teammates.

## Capabilities and Constraints

- The site is Next.js 16 (App Router), React 19, Tailwind CSS 4, Framer Motion and Lenis, deployed on Vercel at martingiando.vercel.app. There is no custom domain.
- The site and repo are public. Employment shown is exactly what `src/data/experience.ts` holds; never add employers, clients, roles or dates beyond it. The phone number never appears; the email can.
- The public headline is "Senior Full Stack Engineer". He is open to full-time and freelance work. Spanish lives on a single `/es` page.
- Never invent results, metrics or numbers.

## Evidence on Hand

- Projects: `src/data/projects.ts`, with images and the Kiwo video in `public/images/projects/`. Case studies exist for Tower Travel and Kiwo. Project 02 is private: no description and no link.
- Experience: `src/data/experience.ts`. Stack: `src/data/stack.ts`. Five colleague testimonials: `src/data/testimonials.ts`.
- Profile photo: `public/images/profile.png`. CV: `public/martin-giando-cv.pdf`.
- Site config and copy: `src/lib/constants.ts`.
- There are no client logos, metrics or press. Do not fabricate any.

## Product Principles

- Show real, shipped work before making claims about it.
- Make contact one step away from every section.
- Personality and craft must not cost readability or speed. Recruiters skim.

## Accessibility & Inclusion

Keep the skip link, visible focus rings and keyboard reachability. Respect `prefers-reduced-motion`; the site already sets Framer Motion's `reducedMotion="user"` and turns off Lenis smooth wheel.
