---
name: Martín Giando Portfolio
description: A portfolio you play with before you read it; an editor at play.
colors:
  ink: "#0e0f13"
  ink-soft: "#b3b8c4"
  snow: "#eef0f5"
  snow-soft: "#4a4f5c"
  blue: "#2448ff"
  sky: "#9db4ff"
  mint: "#3ddc97"
  navy: "#0d1a66"
  danger: "#b42323"
  field-well: "#ffffff"
typography:
  display:
    fontFamily: "Anybody, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 6.5rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 112"
  headline:
    fontFamily: "Anybody, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.6rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 112"
  title:
    fontFamily: "Anybody, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.3vw, 2.2rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 112"
  accent:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontWeight: 500
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Anybody, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
    fontVariation: "\"wdth\" 115"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  field: "1rem"
  media: "1.4rem"
  block: "2rem"
  pill: "999px"
spacing:
  gutter-mobile: "1.25rem"
  gutter-desktop: "2.5rem"
  section-y: "clamp(5rem, 10vw, 9rem)"
  sheet-y: "clamp(4rem, 8vw, 7rem)"
  page-max: "90rem"
components:
  pill-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.snow}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1em 1.6em"
  pill-outline:
    backgroundColor: "transparent"
    textColor: "{colors.snow}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1em 1.6em"
  pill-outline-hover:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.ink}"
  pill-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.snow}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1em 1.6em"
  field:
    backgroundColor: "{colors.field-well}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.85rem 1rem"
  chip-frontend:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.55em 1.05em 0.5em"
  chip-backend:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.55em 1.05em 0.5em"
  chip-databases:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.55em 1.05em 0.5em"
  chip-languages:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.snow}"
    rounded: "{rounded.pill}"
    padding: "0.55em 1.05em 0.5em"
  chip-cloud:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.snow}"
    rounded: "{rounded.pill}"
    padding: "0.55em 1.05em 0.5em"
  chip-tools:
    backgroundColor: "transparent"
    textColor: "{colors.snow}"
    rounded: "{rounded.pill}"
    padding: "0.55em 1.05em 0.5em"
  selection-mark:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.snow}"
    padding: "0.06em 0.12em 0"
  project-tile:
    rounded: "{rounded.block}"
    padding: "0.75rem"
  contact-sheet:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.block}"
    padding: "2rem"
  nav-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.snow}"
    height: "4rem"
---

# Design System: Martín Giando Portfolio

## Overview

**Creative North Star: "The Editor at Play"**

The site behaves like a text editor someone is having fun in. Headlines are set as if typed: a key phrase sits under a blue selection, a mint caret blinks at its end, and the letters widen and gain weight as the pointer gets close. The cursor itself is an I-beam that inverts what it crosses. Everything else (colour blocks that open as they scroll in, a pile of stack chips you can throw, tilted marquee bands) is play built on that one metaphor.

Density is low and type is loud. Sections are full-bleed colour blocks with generous vertical padding, a single 90rem column, and display headlines sized to the viewport. Proof keeps the same voice instead of falling back to cards: roles are ruled rows with stretching company names, reviews are unboxed text with one verbatim phrase selected. Grounds are flat; there is no grain, texture or gradient anywhere.

Play never costs reading. Body text is plain Inter at a relaxed measure, focus rings are thick and visible on every ground, and every animation has a still state that is the default.

**Key Characteristics:**
- Two flat grounds (ink and snow) plus full-bleed blue and sky blocks, in a rhythm that changes every section.
- Anybody display at 900 weight, uppercase, with a width axis that reacts to the cursor.
- Bodoni Moda italic as the second voice, always a few words inside a display line.
- The editor selection (blue fill, snow text) and the mint caret as the signature marks.
- Fat pills for every action; tilted marquee bands with a slash separator.
- Motion only under `prefers-reduced-motion: no-preference`; the still state is the default.

## Colors

Two cold neutrals, one electric accent, two supporting blues and one live green, all flat.

### Primary
- **Electric Selection Blue** (blue): the selection colour. It fills the editor-selection mark, the primary pill, the hero marquee band, the stack block, the About photo frame and one project tile. It is also `::selection` and the scrollbar thumb, so the metaphor holds when the visitor selects real text.

### Secondary
- **Sky Voice** (sky): carries the Bodoni italic voice on ink and blue grounds, the focus ring on dark grounds, nav hover, the scroll-progress hairline, the Backend chips, the testimonial block ground and one project tile.
- **Deep Navy** (navy): the italic voice on the sky block, the Cloud & DevOps chips (with a sky ring), and the "rest of the story" tile.

### Tertiary
- **Live Mint** (mint): marks anything live: the blinking caret and the pulsing status dot (hero "Open to work", the current role). Beyond that it appears only as the Frontend chip colour and the footer band.

### Neutral
- **Editor Ink** (ink): the main dark ground (hero, experience, contact, nav, footer) and text on light grounds.
- **Muted Ink Text** (ink-soft): secondary text on ink (leads, meta, the copyright line).
- **Cool Snow** (snow): the light ground (work, about, inner-page reading sheets, the contact form sheet) and text on dark grounds.
- **Muted Snow Text** (snow-soft): secondary text and form-adjacent labels on snow.
- **Field Well** (field-well): pure white, only inside form fields on the snow sheet.
- **Error Red** (danger): form error text only.

### Named Rules
**The Live Mint Rule.** Mint means "live". Use it for the caret and the status dot; its only other uses are the Frontend chips and the footer band. Never as a button, link or decorative accent.

**The Selection Rule.** Blue fill with snow text is the selection, and it marks one verbatim phrase at a time: the end of the hero headline, the one quoted phrase per review. Never mark invented or paraphrased text.

**The Navy Ring Rule.** Navy on blue reads too close to ink, so navy chips always carry an inset 2px sky ring.

**The Ground Pairing Rule.** Each ground has a fixed text pair: snow and ink-soft on ink, ink and snow-soft on snow and sky, snow on blue. The italic voice is sky on ink and blue, blue on snow, navy on sky. Sky on blue clears 3:1 only at display sizes; keep it there.

## Typography

**Display Font:** Anybody (with system-ui), variable width axis
**Accent Font:** Bodoni Moda italic (with Georgia)
**Body Font:** Inter (with sans-serif), 400/500/600
**Data Font:** JetBrains Mono (with ui-monospace), 400/500

**Character:** A wide, heavy grotesque shouting in capitals, interrupted by a delicate high-contrast italic speaking in lowercase. The contrast between the two is the voice; Inter stays out of the way.

### Hierarchy
- **Display** (900, wdth 112, uppercase, line-height 0.88): every h1 and section h2. Hero up to 9rem, sized to its column with container units; section heads `clamp(2.6rem, 6.4vw, 6.5rem)`; inner-page titles `clamp(1.9rem, 8.4vw, 7.5rem)`; 404 and error up to 10rem. Headlines are set as masked lines that rise in.
- **Headline** (900, `clamp(2rem, 3.8vw, 3.6rem)`): company names in the experience rows, with the stretch effect.
- **Title** (900, `clamp(1.5rem, 2.3vw, 2.2rem)`): project titles, inner-page section heads (`clamp(1.7rem, 3vw, 2.6rem)`), form and confirmation heads.
- **Accent** (Bodoni italic 500, letter-spacing -0.03em, sentence case): two or three words inside a display line, usually at 0.6em of the line or the line's own size; role titles under company names; the hero's second line of the role statement; the serif lead-in word on marquee bands.
- **Body** (Inter 400, 1rem to 1.125rem, line-height 1.625): leads at 38ch to 60ch, review text, bios. Paragraphs use `text-wrap: pretty`.
- **Label** (Anybody 800, wdth 115, 0.85rem, letter-spacing 0.02em, uppercase): pills. Nav links are Inter 600 at 0.8rem, uppercase, tracked 0.14em. Form labels are Inter 600 at 0.875rem, sentence case.
- **Data** (JetBrains Mono 400, 0.75rem to 0.875rem): dates and periods, the email address, the live clock, project category and year, counts.

### Named Rules
**The Data Only Mono Rule.** JetBrains Mono is for data: dates, email, clock, counts and project metadata. Never for headings, labels or prose.

**The No Eyebrow Rule.** No small label sits above a heading. A heading opens its section directly; context goes in the lead paragraph beside or below it.

**The Two Voices Rule.** Every display headline may carry one italic phrase, never more, and the italic phrase is never uppercase.

## Layout

A single centred column (page-max, 90rem) with 1.25rem gutters on phones and 2.5rem from md (768px). Full sections pad vertically by `clamp(5rem, 10vw, 9rem)`; inner-page sheets by `clamp(4rem, 8vw, 7rem)`. Section intros put the display head and a short lead on one row, wrapping and bottom-aligned, then the content 3.5rem below.

The home alternates full-bleed grounds: ink, snow, ink, blue, snow, sky, ink, then the mint footer band. Inner pages (about, hire, es, case studies) use one frame: an ink title block with the display title and caret, then a snow reading sheet whose sections stack at 4rem to 5rem gaps.

Work is a 12-column bento from lg (1024px) with 30rem minimum rows (tiles spanning 7/5/5/4/3). Experience rows split 5:6 from lg. Reviews flow in two CSS columns from md. Below 1024px everything stacks; on phones the hero puts both CTAs before the tagline so they fit the first screen. Below 768px the nav moves into a full-screen menu.

Breakpoints are Tailwind's defaults: sm 640px, md 768px, lg 1024px. Section anchors scroll with a 4rem top margin to clear the fixed nav.

## Elevation & Depth

Flat. Depth comes from ground changes and from tilt, not shadows. Bands are rotated -2deg and overhang the viewport by 3vw on each side; the About photo frame sits at 3deg; tiles and pills lift and tilt slightly on hover.

### Shadow Vocabulary
- **Chip drop** (`box-shadow: 0 10px 22px -12px rgb(0 0 0 / 0.55)`): only on stack chips, so the pile reads as loose objects.
- **Inset rings** (`box-shadow: inset 0 0 0 2px ...`, or a 2px inset ring utility): outline pills, outline and navy chips, interest tags and form fields use inset rings instead of borders.

### Named Rules
**The Tilt Not Shadow Rule.** To lift something, tilt or translate it (tiles -6px and -1deg, pills -2px and -2deg). The only drop shadow is under stack chips.

## Shapes

Big soft blocks and full pills. Colour blocks are square-edged and full-bleed at rest; while scrolling in, they open from an inset rounded rectangle (3rem radius) to the full rectangle. Contained objects use block radius (2rem): project tiles, the contact sheet, the stack pile frame, the About frame, case-study images. Media inside a tile is inset by 0.75rem with media radius (1.4rem). Fields use field radius (1rem). Every action, chip and tag is a full pill. Rules are hairlines at 15% of the text colour (ruled lists, fact lists) or 2px at 20% (review tops).

## Components

### Buttons
Fat, uppercase, unmistakably pressable.
- **Shape:** full pill, padding 1em 1.6em, Anybody 800 wdth 115 label type, with an inline SVG arrow when the action goes somewhere.
- **Primary:** blue with snow text ("See the work", "Get in touch", submit).
- **Outline:** transparent with a 2px inset ring at 40% of the text colour; hover fills with the text colour and inverts.
- **Ink:** ink fill with snow text, on snow grounds.
- **Hover / Active:** lift 2px and rotate -2deg on hover; scale to 0.96 on press. The submit pill does not lift. Disabled is 60% opacity.
- **Focus:** a 3px sky outline at 4px offset on dark grounds, ink on snow, snow on blue.

### Chips
Six tones that read apart on the blue stack block, one per category: mint (Frontend), sky (Backend), snow (Databases), ink (Languages), navy with a sky ring (Cloud & DevOps), and transparent with a snow ring (Tools). Anybody 800 wdth 118, uppercase, `clamp(0.95rem, 1.7vw, 1.45rem)`, with the chip drop shadow. A colour key of 0.875rem dots sits beside the pile. Interest tags on snow are plain Inter pills with a 15% ink ring.

### Cards / Containers
- **Project tile:** block radius, 0.75rem padding, ground set per tile (ink, blue, sky, navy) with matching text. Media sits in a 1.4rem-radius well; the video plays on hover only under no-preference motion. Below: display title, mono category and year, a short summary, and a small translucent pill ("Case study", "Live site").
- **Reviews are unboxed:** a 2px top rule at 20% of the text colour, the quote in body type with one verbatim phrase in the selection mark, then name and role.
- **Contact sheet:** a snow block with block radius on the ink ground, holding the form.

### Inputs / Fields
- **Style:** white well, ink text, blue caret, field radius, 0.85rem by 1rem padding, a 1.5px inset ring at 18% ink (40% on hover).
- **Focus:** a 2px blue outline at 2px offset.
- **Error:** a semibold red line announced with `role="alert"`.

### Navigation
A fixed 4rem ink bar with a hairline bottom border. The "MG." mark on the left (the dot in sky), Inter uppercase links in the middle that turn sky on hover, a blue "Get in touch" pill on the right. A 3px sky scroll-progress line runs under it (hidden under reduced motion). Below 768px the links move into a full-screen ink menu of display-type links behind a "Menu" outline pill, revealed with a top-down clip.

### Editor Selection and Caret
The signature. A phrase gets a blue background-fill selection with snow text that clones across line breaks; on the hero it sweeps in once the lines have landed. The mint caret is a 0.07em by 0.8em bar parked at the end of the phrase, blinking with a stepped 1.06s cycle. Inner-page titles, 404 and error end with the caret alone.

### Stretch Type
Display letters at rest are wdth 96. Near the pointer they widen up to 150 and the rest narrow toward 80 so the line keeps its width; weight shifts between 640 and 900. Used on the hero name, the hero's selected phrase, company names, the contact head, and the 404 and error titles. Off under reduced motion.

### Marquee Band
A tilted (-2deg) endless band of display words, each optionally led by an italic word, separated by a slash at 35% opacity. Scroll velocity speeds it up and scrolling up reverses it. Blue with snow under the hero; mint with ink in the footer, running the other way.

### Cursor
On fine pointers only: a snow I-beam caret with difference blending that blinks when idle, grows into a 44px disc over links, and opens into a 92px blue disc with a snow ring and an uppercase label ("View", "Copy", "Throw", "Read", "Visit") over labelled targets.

## Do's and Don'ts

### Do:
- **Do** start every animated element in its visible, final state, and run motion only inside `prefers-reduced-motion: no-preference`; masked lines are hidden only after script arms them.
- **Do** give each section a full-bleed ground that differs from its neighbours, using only ink, snow, blue and sky.
- **Do** pair one Bodoni italic phrase with each display headline, coloured per the Ground Pairing Rule.
- **Do** keep one verbatim phrase per review in the selection mark.
- **Do** use inset rings at 15% to 40% of the text colour instead of borders on pills, chips, tags and fields.
- **Do** keep focus rings visible on every ground: sky on ink, ink on snow, snow on blue.

### Don't:
- **Don't** use mint for anything but the caret, the live dot, the Frontend chips and the footer band.
- **Don't** put an eyebrow or kicker above a heading.
- **Don't** set headings, labels or prose in JetBrains Mono.
- **Don't** box reviews in cards; they are unboxed text with a top rule.
- **Don't** add drop shadows beyond the chip drop, or any gradient, grain or texture on a ground.
- **Don't** place a navy chip on blue without its sky ring.
- **Don't** use sky text on blue below display size.
