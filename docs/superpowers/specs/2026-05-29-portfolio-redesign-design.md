# Portfolio Redesign — "Editorial Dev"

**Date:** 2026-05-29  
**Status:** Approved  

---

## Goal

Redesign David Hillver's portfolio (David.html / style.css / Script.js) to stand out for future employers. No new content — only UI/UX improvements plus an interactive Three.js 3D module.

---

## Design Direction: Editorial Dev

**Aesthetic:** Light, typographic, editorial. Stands out against the sea of dark developer portfolios.  
**Palette:** Warm cream background, ink black text, deep navy nav/footer, ember accent preserved.  
**3D element:** Wireframe icosahedron via Three.js CDN — replaces terminal widget in hero.

---

## Color Palette

| Token | Light | Dark |
|---|---|---|
| `--c-bg` | `#faf9f7` (warm cream) | `oklch(0.14 0.008 50)` (keep) |
| `--c-surface` | `#ffffff` | `oklch(0.18 0.008 50)` (keep) |
| `--c-text-primary` | `#0d0f12` (ink black) | `oklch(0.94 0.008 60)` (keep) |
| `--c-text-secondary` | `#5a5a72` (warm gray) | keep |
| `--c-accent` | `#b8743a` (ember, slightly more vivid) | `oklch(0.66 0.155 38)` (keep) |
| `--c-nav-bg` | `#0f1629` (deep navy, opaque) | `oklch(0.14 0.008 50 / 0.95)` |
| `--c-footer-bg` | `#0f1629` | keep |

Nav and footer shift from near-white/near-black to deep navy on light mode — adds premium contrast.

---

## Layout Changes

### Navigation
- Background: deep navy (`#0f1629`) in both light and dark mode
- Logo: keep existing `updateProfile.png` image, but reduce height to 44px (currently 56px) — cleaner at reduced nav height
- Nav links: white/muted on navy background
- CV button: small pill CTA right of nav links
- Height: 60px (down from current ~72px)

### Hero Section
- **Left column:** unchanged copy — name, role line, description, CTAs, meta line
- **Right column:** Three.js canvas replaces `.terminal-window` — wireframe icosahedron
- Hero background: warm cream `#faf9f7` + existing dot grid (lower opacity)
- Hero name font-size: keep `clamp(4.5rem, 10vw, 8.5rem)`, color shifts to `#0d0f12`
- Remove `.hero-watermark` (large "D" background letter) — too busy with 3D present

### Three.js Wireframe (Hero)
- Library: Three.js r128 via CDN (`https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`) — no build tool, no ES modules needed at this version
- Geometry: `IcosahedronGeometry(1, 1)` with `WireframeGeometry`
- Material: `LineBasicMaterial` with ember color `#b8743a`, opacity 0.55
- Animation: slow Y-axis rotation (0.003 rad/frame)
- Mouse interaction: tilt toward cursor position (subtle, ±15° max)
- Canvas size: fills the right column, responsive via `ResizeObserver`
- Renderer: `WebGLRenderer` with `alpha: true`, transparent background
- Fallback: if WebGL unavailable, show a CSS-only animated version of current terminal

### Magic MCP Usage
- Use `21st_magic_component_builder` to generate polished micro-interaction components (card hover states, button ripples, nav underline animations)
- Translate output from React to vanilla JS where needed

### About Section
- Profile card: unchanged structure, refined spacing
- Background: white (`#ffffff`) — creates contrast against cream hero
- Cards: `border-radius: 16px`, `border: 1px solid rgba(15,23,42,0.07)` (slightly softer than current)

### Projects Section
- Background: `#faf9f7` (cream, same as hero) — creates rhythm with white about section
- Card hover: keep lift + accent top border, refine shadow
- Featured project (ConstructAI): keep existing layout

### Section Dividers
- Upgrade from current `.section-divider` lines to full-width numbered bands:
  ```
  ────── 01 / OM MIG ──────
  ```
  More editorial, clearer rhythm.

### Contact Section
- Background: deep navy `#0f1629` — matches nav/footer, wraps the page
- Text: light on dark
- Contact links: updated for the dark background

### Footer
- Background: `#0f1629` (same as contact/nav) — unified bottom block
- Keep existing content and structure

---

## Typography

- Font: Inter (keep, no change)
- Hero name: keep current `clamp` sizing
- Section headings (`h2`): `tracking-tight`, color `#0d0f12` / light theme, no change in dark
- `overline` component: `color: #b8743a` (ember) in light mode
- Body text: `#5a5a72` in light mode (warmer than current `#475569`)

---

## Dark Mode

All existing dark mode overrides are preserved. New additions:
- Nav in dark mode stays deep navy (same as light — unified nav)
- Contact section in dark mode: slightly different surface so it doesn't blend with footer

---

## What Stays the Same

- All text content (Swedish/English translations)
- All project data and detail pages
- GitHub activity widget
- Cursor ring
- Scroll progress bar
- Language toggle (SV/EN)
- Dark/light toggle
- Hash-based SPA routing (`#projekt/[slug]`)
- Konami code easter egg
- `prefers-reduced-motion` support
- All accessibility attributes

---

## What Changes

1. `style.css` — CSS custom property values, nav/contact/footer colors, section divider style
2. `David.html` — nav markup (text logo, pill CTA), hero right column (Three.js canvas instead of terminal), contact section background
3. `Script.js` — add Three.js initialization, mouse interaction handler, ResizeObserver

---

## File Checklist

- [ ] `style.css` — update token values, nav dark, contact dark, section divider redesign
- [ ] `David.html` — nav, hero right column, contact section
- [ ] `Script.js` — Three.js scene setup + mouse tilt + resize
- [ ] Magic MCP — generate hover/interaction components, adapt to vanilla JS

---

## Out of Scope

- No new content or sections
- No build tool or npm packages
- No changes to project detail pages (other than inheriting the theme tokens)
- No font changes
