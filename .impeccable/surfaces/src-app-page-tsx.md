---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/layout.tsx","src/components/shared/page-shell.tsx"]
---

# Portfolio: the whole site in the editor-at-play world

Mode: Persuade, leaning Experience, on the home. The inner pages (/about, /hire, /es, /work/[slug]) are Read: an ink title block, then a snow reading sheet, sharing the header, footer and cursor. Adopted from the /lab sample on 2026-11-26; /lab no longer exists.

Audience: recruiters and hiring managers, and freelance clients, weighted equally. Home sections, in order: hero, work, experience, stack, about, testimonials, contact (copy email plus the contact form). Language: English, with /es in Spanish. Content comes from `src/data/*` and `src/lib/constants.ts` only.

Colour rhythm down the home: ink, snow, ink, blue, snow, sky, ink, then the mint footer band. Snow, blue and sky blocks open up as they scroll in.

Mobile adaptation (under 1024px): on phones the role, tagline and both CTAs fill the first screen, so the band starts just below the fold. Below 768px the nav moves into a full-screen menu of large display links behind a "Menu" pill.

## Direction contract

THESIS: A portfolio you play with before you read it. It refuses the category default of a quiet dark hero and a 3-up card grid. The type responds to the cursor, the stack is a pile of chips you can throw, and colour blocks open up as you scroll. The proof keeps the same voice instead of falling back to plain cards: roles are ruled rows with stretching company names, and each review is unboxed text with its key phrase (verbatim) marked as an editor selection.

OWN-WORLD: An editor at play. Grounds are ink #0E0F13 and cool snow #EEF0F5, with no grain. Electric blue #2448FF is the selection colour and the main accent. Sky #9DB4FF carries the italic voice, mint #3DDC97 marks anything live (caret, status dot); beyond that it is only the Frontend chip colour (the stack needs six tones that read apart on blue) and the footer band. Navy #0D1A66 carries the Cloud & DevOps chips with a sky ring, the "rest of the story" tile, and the italic voice on sky. Display type is Anybody at 900 weight with a variable width. Accents are Bodoni Moda italic, body is Inter, and JetBrains Mono is used only for data (dates, email, time). Buttons are fat pills. Tilted marquee bands use a slash as the separator. The cursor is an I-beam caret with difference blending: it blinks when idle and opens into a blue labelled disc over targets.

STORY: In seconds the visitor sees who he is (Senior Full Stack Engineer, Buenos Aires) and that he builds both ends. They play with the type and the stack, browse four real projects, scan six roles and five colleague reviews, and then copy his email, send the form, or download the CV.

FIRST VIEWPORT: The ink ground fills the screen. On the left, a three-line h1, sized to its column, reads "MARTÍN GIANDO / *builds the web,* FRONT / TO BACK." "TO BACK." looks like text selected in an editor: a blue selection sweeps across it on load and a mint caret blinks at its end. The letters of the name and of "TO BACK." widen as the cursor gets close. On the right, a status row (live dot "Open to work", live Buenos Aires time, "Replies within 24h"), then the role line, the tagline, and two pills: "See the work" (blue) and "Download CV" (outline). A blue marquee band sits at the bottom edge.

FORM: Pinned by the user. seed: none (pinned). Quoted pin: "Me encantó, quiero aplicarla, que sea mi portfolio real, ten en cuenta las otras páginas por fuera de la principal".

Signature interaction: display letters respond to cursor distance with variable-font width and weight (hero, company names, contact, 404). Supporting interactions: stack chips that drop in and can be thrown, a cursor that turns into a label disc ("View", "Copy") over targets, masked line reveals, and a marquee whose speed follows scroll velocity.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.
