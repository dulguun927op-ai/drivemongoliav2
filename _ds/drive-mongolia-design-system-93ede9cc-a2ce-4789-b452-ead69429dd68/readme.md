# Drive Mongolia — Design System

A cinematic, editorial design system for **Drive Mongolia** — a self-drive
expedition rental company operating since 2006 out of Ulaanbaatar. The brand
hands travellers the keys to 4×4s, expedition vans, campers and adventure
motorbikes and lets them cross Mongolia's wilderness on their own terms.

> "Stick to the road — don't make new road." — Made by drivers and bikers,
> for drivers and bikers, since 2006.

The system is photography-led and rugged-print in feel: warm bone "paper"
surfaces, near-black ink, a single weathered **rust/clay** accent, condensed
**Oswald** uppercase display type over neutral **Inter** body copy, sharp
corners and full-bleed imagery under warm dark scrims.

---

## Sources

This system was reverse-engineered from a single attached codebase — the
Drive Mongolia marketing website (a static HTML/CSS/JS one-pager):

- `uploads/index.html` — page structure (header, hero, fleet, terrain, bands, why, story, contact, footer, vehicle modal)
- `uploads/styles.css` — the original cinematic theme (tokens, components, layout) — the source of truth for colours, type and spacing
- `uploads/data.js` — the fleet + terrain content model
- `uploads/app.js` — interactions (fleet filter, availability calendar, modal, reveal-on-scroll, counters) and the inline SVG icon set

No Figma file, logo binaries, or photography were provided. See **Caveats** at
the bottom.

---

## Content fundamentals

**Voice:** rugged, plain-spoken, second-person. The reader is addressed
directly ("you", "your machine", "drive for the adventure of your life"). Copy
is confident but understated — it states capability as fact rather than
boasting. Sentences are short and declarative, often fragments for punch
("No tour bus. No fixed schedule.").

**Casing:** display headings, navigation, buttons, eyebrows and labels are
ALL-CAPS Oswald. Body copy is sentence case Inter. Em-dashes are used freely
for asides ("— and the freedom to cross it on their own terms —").

**Person & tone:** "we" = the company (the local experts); "you" = the
traveller. Warm, knowledgeable, a little weather-beaten. Never corporate,
never breathless. Trust is built on specifics (insurers, mechanics, GPS
tracks, 14-day calendars), not adjectives.

**Emoji:** none. Ever. The brand is analogue and earthy; emoji would break it.
Unicode is used only for the multiply sign in "4×4" and the arrow "→" on links.

**Representative copy:**
- Eyebrows: "The Fleet" · "Where you'll go" · "Why Drive Mongolia" · "Est. 2006 · Ulaanbaatar, Mongolia"
- Headlines: "Experience Mongolia like a Mongolian" · "Choose your machine" · "One country, every kind of wild" · "The locals who never leave you stranded"
- Bands: "The adventure of your life starts where the road ends." · "Out here, the only traffic is wild horses and eagles."
- CTAs: "Explore the fleet" · "Plan your route" · "Start planning" · "Reserve this date" · "Chat on WhatsApp"

---

## Visual foundations

**Colour.** A warm, earthy, almost monochrome palette with one accent:
- *Ink* `#181410` / `#211b14` — near-black warm browns for text and dark sections (the "Why" block and footer are full ink).
- *Paper* `#f4efe6` / `#ece3d4` / `#e2d7c4` — bone surfaces; sections alternate paper ↔ paper-2 for rhythm.
- *Rust* `#bc5e1c` (accent) with `#9c4815` (pressed) and `#e79a52` / `#eba45c` (lighter, for use over photos/ink). This is the ONLY chromatic colour — used sparingly for eyebrows, links, the active filter bar, hover wipes and primary buttons.
- *Green* `#4e7d3f` appears solely as the availability status colour.
- Hairlines are ink at 14% / 28% alpha; muted text is ink at 66% / 50%.

**Type.** Two families. **Oswald** (condensed grotesque) does all display and
chrome — always uppercase, tight leading (~0.96–1.05), slight positive
tracking; hero clamps up to 6rem. **Inter** carries body copy at 1.7 leading
for comfortable long-form reading. Eyebrows are Oswald 600 at 0.26em tracking.

**Spacing & layout.** 4px base step. Content maxes at 1240px with 28px
gutters. Vertical section rhythm is `clamp(72px, 9vw, 130px)`. A fixed header
(84px) shrinks to 70px and flips from transparent to solid paper on scroll.

**Backgrounds.** Photography-first: full-bleed hero and recurring full-bleed
"bands" between sections, plus a 4:5 photographic destination-card grid. No
patterns, no gradients-as-decoration. The only gradients are **scrims** — warm
near-black overlays (`rgba(16,12,8,…)`, never pure black) that keep type legible
over imagery: a bottom-weighted hero scrim, a flat 50% band scrim, and a
left-weighted variant for left-aligned band copy.

**Corners & cards.** Deliberately sharp — radii top out at 6px (modal); buttons
3px, chips 2px, media plates/cards 4px. Cards are flat: a photo, a scrim, and
text — no borders or drop-shadows on content cards. The vehicle list is a
schedule of hairline-separated rows, not boxes.

**Shadows.** Restrained. One deep, warm drop shadow (`0 30px 70px -28px`) under
floating panels (the modal). Buttons get a coloured rust shadow only while
lifted on hover. Sections themselves never float.

**Borders.** Hairlines do the structural work — 1px ink-alpha rules separate
fleet rows, spec cells, footer blocks and contact methods.

**Motion.** Understated and earthy. Reveal-on-scroll fades (opacity + 26px
rise, 0.8s ease). Images zoom slowly on hover (scale 1.06–1.08 over 0.5–0.8s,
`cubic-bezier(.2,.7,.2,1)`). The modal pops with a soft overshoot
(`cubic-bezier(.2,.9,.3,1.05)`). Hero stat counters tick up once on load.
Everything respects `prefers-reduced-motion`.

**Hover / press states.** Buttons: rust → rust-deep, translateY(-2px), gain a
coloured shadow. Fleet rows: faint rust tint, a 3px rust bar wipes down the
left edge, chevron slides right. Nav/links: shift toward rust-light. Filter
tabs: flip to a solid ink fill when active. Press states rely on the darker
rust rather than scale.

**Transparency & blur.** Used only for chrome over media: the modal backdrop
blurs (6px), the "ghostlight" frosted button uses a 4px backdrop blur, and the
solid header sits on opaque paper. Body content is never translucent.

**Imagery vibe.** Warm, golden-hour, wide landscape photography — steppe, Gobi
sand, Altai stone, taiga lakes — plus vehicles in action. Earthy, sun-baked,
never cool or desaturated. (Placeholders in this system approximate these with
earthy gradients; see Caveats.)

---

## Iconography

The site ships a small **hand-authored inline SVG set** (no icon font, no CDN
dependency) defined in `app.js`. Two styles:

- **Spec / UI icons** — 24×24, 2px stroke, `currentColor`, rounded line caps
  (Lucide/Feather family in feel): `seats`, `gear` (transmission), `fuel`,
  `drive` (drivetrain), `engine`, `clearance`, plus a `chevron-right`.
- **Social glyphs** — filled: `facebook`, `whatsapp`; outlined: `instagram`.

All are copied into **`assets/icons/`** as standalone `.svg` files. Use them at
~18–30px; colour via `color`/`currentColor`. No emoji and no other Unicode
symbols are used as icons. When more icons are needed, match the 2px-stroke
rounded Lucide style for line icons.

---

## Index / manifest

**Root**
- `styles.css` — the design-system entry point (link this); `@import`s the tokens below.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for use in Claude Code.

**`tokens/`** — `fonts.css` (Oswald + Inter via Google Fonts), `colors.css`,
`typography.css`, `spacing.css`, `effects.css` (radii, borders, shadows,
scrims, motion).

**`components/`** — reusable React primitives (consume via
`window.DriveMongoliaDesignSystem_93ede9`):
- `core/` — `Button`, `Kicker`, `LinkArrow`, `FilterTab`, `FeatureTag`, `Stat`
- `fleet/` — `VehicleRow`, `SpecGrid`, `TerrainCard`

**`ui_kits/marketing/`** — full click-through recreation of the Drive Mongolia
homepage (`index.html`) — hero, fleet with category filter + vehicle detail
modal, terrain grid, full-bleed bands, "why" block, story quote, contact,
footer. Factored into `Chrome.jsx`, `Sections.jsx`, `Fleet.jsx`, `App.jsx`,
`data.js`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand)
that populate the Design System tab.

**`assets/icons/`** — the extracted SVG icon set.

**`uploads/`** — the original source website, kept for reference.

---

## Caveats

- **No photography or logo binaries were provided.** Every image in the source
  references `../img/*.webp` (hero, vehicles, terrain, bands) plus
  `img/logo.webp`. Those files are not in this project. The UI kit and cards
  use **earthy gradient placeholders**, and the wordmark is reconstructed as a
  type lockup ("Drive**Mongolia**" with a rust second word + a "DM" monogram).
  Drop the real `.webp` photos into `assets/img/` and the real logo into
  `assets/`, then swap placeholders for `img` props to restore the intended look.
- **Fonts are Google Fonts** (Oswald, Inter) loaded via CDN — matching the
  source site exactly — so no local font binaries are shipped. If you need
  self-hosted/offline fonts, add the binaries and `@font-face` rules to
  `tokens/fonts.css`.
