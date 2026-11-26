# Martín Giando — Portfolio

A personal portfolio you can play with: the type stretches toward your cursor, the stack is a pile of chips you can throw, and colour blocks open up as you scroll. Showcases projects, experience, colleague reviews and a contact form.

**[→ View Live](https://martingiando.vercel.app)**

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 16, React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4, variable fonts (Anybody, Bodoni Moda) |
| **UI** | Framer Motion |
| **Features** | Lenis (smooth scroll), Resend (contact form) |

---

## Features

- **Projects** — Full-stack work with links, tech tags and case studies
- **Experience** — Timeline of roles and responsibilities
- **Stack** — Grouped tech overview
- **Testimonials** — Colleague quotes
- **Contact** — Form powered by Resend, email and downloadable CV
- **Pages** — About, Hire me and a Spanish profile, with structured data
- **Design** — Cursor-reactive variable type, a caret cursor, throwable stack chips, scroll-driven colour blocks and marquees

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
