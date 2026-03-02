# Martín Giando — Portfolio

A personal portfolio built with a bold, brutalist aesthetic. Showcases projects, experience, and a contact form — all crafted with modern web tech.

**[→ View Live](https://martingiando.vercel.app)**

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 16, React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4, tw-animate-css |
| **UI** | shadcn, Framer Motion |
| **Features** | Lenis (smooth scroll), Splide (carousel), Resend (contact form) |
| **Utils** | clsx, tailwind-merge |

---

## Features

- **Projects** — Full-stack work with links and tech tags
- **Experience** — Timeline of roles and responsibilities
- **Stack** — Grouped tech overview
- **Testimonials** — Colleague quotes
- **Contact** — Form powered by Resend
- **Design** — Brutalist layout, scroll progress bar, smooth scrolling

---

## Project Structure

```
src/
├── app/              # Next.js App Router (pages, layout, api)
├── components/       # UI components (layout, sections, cards)
├── data/             # Static content (projects, experience, stack, testimonials)
├── lib/              # Utilities, constants, fonts
└── types/            # TypeScript definitions
```

---

## Customization

Content is driven by data files in `src/data/`:

- `projects.ts` — Portfolio projects
- `experience.ts` — Work history
- `stack.ts` — Tech categories
- `testimonials.ts` — Testimonials

Site metadata and config live in `src/lib/constants.ts`.

---

## License

MIT

---

**Martín Giando** — [GitHub](https://github.com/martingiando) · [LinkedIn](https://linkedin.com/in/martin-giando)
