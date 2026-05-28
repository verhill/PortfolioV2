# Portfolio Redesign — "Editorial Dev" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign David.html/style.css/Script.js into "Editorial Dev" — warm cream palette, deep navy nav/footer, contact section, and a Three.js wireframe icosahedron replacing the terminal widget in the hero.

**Architecture:** Three files touch — style.css (tokens + nav/contact/divider CSS), David.html (nav markup, hero 3D canvas, contact section class), and a new inline `<script>` block in David.html for Three.js. Magic MCP generates card/button micro-interaction CSS. No build tool; Three.js r128 loaded via CDN `<script>` tag in `<head>`.

**Tech Stack:** Vanilla HTML/CSS/JS · Tailwind CDN · Three.js r128 CDN · Magic MCP (21st_magic_component_builder) for micro-interaction CSS

---

## File Map

| File | Lines affected | What changes |
|---|---|---|
| `style.css` | `:root` block (~817–838) | New light-theme token values |
| `style.css` | `.section-divider::after` (~379–396) | Centered label, accent color |
| `style.css` | New rule block (append) | `.nav-dark` overrides, `.contact-dark` overrides, Magic MCP micro-interactions |
| `David.html` | `<head>` (~23) | Add Three.js CDN `<script>` tag |
| `David.html` | `<header>` (~415) | Add `nav-dark` class, reduce logo height |
| `David.html` | hero right column (~550–576) | Replace `.tc-wrap` terminal with `#hero-3d-wrap` canvas |
| `David.html` | `#contact` (~1328) | Add `contact-dark` class |
| `David.html` | Before `</body>` | New `<script>` block: `initHeroThree()` |

---

## Task 1: Update Light-Theme CSS Custom Properties

**Files:**
- Modify: `style.css` lines 817–838 (`:root` block)

- [ ] **Step 1: Open style.css and locate the `:root` block**

Find the block starting at `/* CSS CUSTOM PROPERTIES - THEME SYSTEM */`. Replace the entire `:root { … }` block (light-theme values only — do NOT touch `[data-theme="dark"]`) with:

```css
:root {
  /* Light theme — Warm Editorial */
  --c-bg:            #faf9f7;
  --c-surface:       #ffffff;
  --c-border:        rgba(15, 23, 42, 0.09);
  --c-text-primary:  #0d0f12;
  --c-text-secondary:#5a5a72;
  --c-text-muted:    #8888a0;
  --c-accent:        #b8743a;
  --c-accent-strong: #c87d3e;
  --c-accent-glow:   rgba(184, 116, 58, 0.18);
  --c-accent-tint:   rgba(184, 116, 58, 0.08);
  --c-surface-2:     #f2ede6;
  --c-surface-3:     rgba(184, 116, 58, 0.06);
  --c-nav-bg:        #0f1629;
  --c-card-bg:       #ffffff;
  --c-card-border:   rgba(15, 23, 42, 0.09);
  --c-skill-bg:      #f5f1eb;
  --c-progress:      #e8e3db;
  --c-footer-bg:     #0f1629;
  --color-transition: 0.3s ease;
}
```

- [ ] **Step 2: Also update `[data-theme="dark"]` nav-bg to match**

Find `--c-nav-bg` inside the `[data-theme="dark"]` block. Change its value to:

```css
  --c-nav-bg:        #0f1629;
```

This makes the nav consistently deep navy in both themes.

- [ ] **Step 3: Visual check — open David.html in browser**

Open `David.html` directly in Chrome/Edge (double-click, no server needed). Switch to light mode. Background should be warm cream, not stark white. Accent color on overlines/links should look amber-brown rather than indigo-blue.

- [ ] **Step 4: Commit**

```bash
git add style.css
git commit -m "design: update light-theme CSS tokens to Warm Editorial palette"
```

---

## Task 2: Nav Dark Styling

**Files:**
- Modify: `style.css` — append new rules after line 2026
- Modify: `David.html` lines 415, 420 (header tag and logo)

The nav needs a deep navy background with light-coloured links. We do this with a `.nav-dark` class applied to `<header>`.

- [ ] **Step 1: Add `.nav-dark` CSS rules to style.css**

Append the following block at the very end of `style.css`:

```css
/* ============================================================
   NAV DARK — deep navy in both light and dark mode
============================================================ */
.nav-dark {
  background-color: var(--c-nav-bg) !important;
  border-color: rgba(255, 255, 255, 0.06) !important;
}
.nav-dark .nav-link-item {
  color: rgba(255, 255, 255, 0.60) !important;
}
.nav-dark .nav-link-item:hover,
.nav-dark .nav-link-item.active {
  color: var(--c-accent) !important;
}
.nav-dark .nav-link::after {
  background: var(--c-accent) !important;
}
.nav-dark .theme-toggle-btn {
  border-color: rgba(255, 255, 255, 0.14) !important;
  color: rgba(255, 255, 255, 0.45) !important;
}
.nav-dark .theme-toggle-btn:hover {
  border-color: var(--c-accent) !important;
  color: var(--c-accent) !important;
  background: rgba(184, 116, 58, 0.08) !important;
}
.nav-dark .stat-divider,
.nav-dark [class*="border-l"] {
  border-color: rgba(255, 255, 255, 0.10) !important;
}
/* Mobile menu stays dark too */
.nav-dark + div#mobile-menu,
[data-theme="dark"] .mobile-menu-overlay,
[data-theme="light"] .mobile-menu-overlay {
  background-color: #0f1629 !important;
}
.nav-dark + div#mobile-menu a {
  color: rgba(255, 255, 255, 0.80) !important;
}
.nav-dark + div#mobile-menu a:hover {
  color: var(--c-accent) !important;
}
```

- [ ] **Step 2: Remove the existing dark-mode header override in style.css**

Find the block:
```css
[data-theme="dark"] header {
  background-color: var(--c-nav-bg) !important;
  border-color: var(--c-border) !important;
}
```
Delete it. The `.nav-dark` class now handles this for both themes.

- [ ] **Step 3: Update `<header>` in David.html**

Find line ~415:
```html
<header class="bg-white/90 border-b border-[#e2e8f0] sticky top-0 z-50 transition-all duration-300 header-blur">
```

Replace with:
```html
<header class="border-b sticky top-0 z-50 transition-all duration-300 header-blur nav-dark">
```

- [ ] **Step 4: Reduce logo height**

Find line ~421:
```html
<img src="updateProfile.png" alt="David Hillver"
     class="h-14 transition-transform duration-300 group-hover:scale-105" loading="lazy">
```

Change `h-14` to `h-11`:
```html
<img src="updateProfile.png" alt="David Hillver"
     class="h-11 transition-transform duration-300 group-hover:scale-105" loading="lazy">
```

- [ ] **Step 5: Visual check**

Reload `David.html`. The nav bar should be dark navy (nearly black-blue) in both light and dark mode. Logo is slightly smaller. Nav links white/muted, turning ember on hover.

- [ ] **Step 6: Commit**

```bash
git add style.css David.html
git commit -m "design: nav always deep navy, .nav-dark class, reduced logo"
```

---

## Task 3: Section Divider Redesign

**Files:**
- Modify: `style.css` lines ~379–396 (`.section-divider::after`)

- [ ] **Step 1: Update `.section-divider::after` in style.css**

Find the existing `.section-divider::after` rule block and replace the entire rule (including `@media` variant) with:

```css
.section-divider::after {
  content: attr(data-label);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  background: var(--c-bg);
  color: var(--c-accent);
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .22em;
  text-transform: uppercase;
  padding: 0 1.2rem;
  font-family: 'Inter', sans-serif;
  font-variant-numeric: tabular-nums;
}
@media (min-width: 768px) {
  .section-divider::after {
    left: 50%;
  }
}
```

- [ ] **Step 2: Visual check**

Reload. Section divider labels (`01 / OM MIG`, `02 / Projekt`, `03 / Kontakt`) should appear centered on the divider line in ember color.

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "design: center section divider labels, ember accent color"
```

---

## Task 4: Contact Section Dark Styling

**Files:**
- Modify: `style.css` — append after `.nav-dark` block
- Modify: `David.html` line ~1328

- [ ] **Step 1: Add `.contact-dark` CSS rules to style.css**

Append after the `.nav-dark` block added in Task 2:

```css
/* ============================================================
   CONTACT DARK — navy background matching nav/footer
============================================================ */
#contact.contact-dark {
  background-color: #0f1629 !important;
}
.contact-dark .overline {
  color: rgba(255, 255, 255, 0.35) !important;
}
.contact-dark .overline::before {
  background: rgba(255, 255, 255, 0.25) !important;
}
.contact-dark .sec-num {
  color: rgba(255, 255, 255, 0.25) !important;
}
.contact-dark h2 {
  color: #ffffff !important;
}
.contact-dark p,
.contact-dark [class*="text-[#64748b]"],
.contact-dark [class*="text-lg"] {
  color: rgba(255, 255, 255, 0.55) !important;
}
.contact-dark .contact-label {
  color: rgba(255, 255, 255, 0.30) !important;
}
.contact-dark .contact-value {
  color: rgba(255, 255, 255, 0.82) !important;
}
.contact-dark .contact-divider {
  background: rgba(255, 255, 255, 0.10) !important;
}
.contact-dark .contact-link:hover .contact-value {
  color: var(--c-accent) !important;
}
/* section-divider before contact reads from navy bg */
.contact-dark ~ .section-divider::after,
#contact.contact-dark + div.section-divider::after {
  background: #0f1629;
}
```

- [ ] **Step 2: Fix section divider background before contact**

The `.section-divider` directly before `#contact` has `data-label="03 / Kontakt"`. Its `::after` background reads `var(--c-bg)` (cream), but the divider sits between the projects section (cream) and the dark contact. That's fine — the divider still belongs to the cream section visually. No change needed here.

- [ ] **Step 3: Update contact section in David.html**

Find line ~1328:
```html
<section id="contact" class="py-24 bg-white">
```

Replace with:
```html
<section id="contact" class="py-24 contact-dark">
```

- [ ] **Step 4: Visual check**

Reload. The contact section should be deep navy matching the nav and footer. Email/LinkedIn/GitHub/phone links should be legible in light-on-dark. The whole bottom of the page — contact, footer — should flow as one unified dark zone.

- [ ] **Step 5: Commit**

```bash
git add style.css David.html
git commit -m "design: contact section navy background, .contact-dark class"
```

---

## Task 5: Add Three.js CDN and Hero Canvas Markup

**Files:**
- Modify: `David.html` — `<head>` (~line 28), hero right column (~lines 550–576)

- [ ] **Step 1: Add Three.js CDN to `<head>`**

Find the line in `<head>` that reads:
```html
  <link rel="stylesheet" href="style.css">
```

Add the Three.js script tag immediately after it:
```html
  <link rel="stylesheet" href="style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```

- [ ] **Step 2: Replace terminal widget with Three.js canvas**

Find the entire terminal block in the hero (lines ~550–576):
```html
        <!-- RIGHT: Terminal block -->
        <div class="hidden lg:block reveal-item stagger-2 tc-wrap">
          <div class="terminal-window">
            <!-- Windows Terminal tab bar -->
            <div class="tc-tabbar" aria-hidden="true">
              <div class="tc-tab">
                <span>Terminal</span>
                <span class="tc-tab-close">✕</span>
              </div>
              <div class="tc-new-tab">+</div>
              <!-- Window controls -->
              <div class="tc-winbtns">
                <div class="tc-wb">︴</div>
                <div class="tc-wb">□</div>
                <div class="tc-wb tc-wb-close">✕</div>
              </div>
            </div>
            <div class="tc-body">
              <div class="tc-prompt-row">
                <span class="tc-ps1-path">C:\portfolio</span><span class="tc-ps1-gt">&gt;</span><span id="tc-cmd" class="tc-cmd"></span>
              </div>
              <div id="tc-output"></div>
              <div class="tc-idle-row tc-idle-hidden" id="tc-idle">
                <span class="tc-ps1-path">C:\portfolio</span><span class="tc-ps1-gt">&gt;</span><span class="tc-cursor"></span>
              </div>
            </div>
          </div>
        </div>
```

Replace the entire block with:
```html
        <!-- RIGHT: Three.js wireframe icosahedron -->
        <div class="hidden lg:flex reveal-item stagger-2 items-center justify-center"
             id="hero-3d-wrap"
             style="min-height:380px;position:relative;">
          <canvas id="hero-canvas"
                  style="display:block;width:100%;height:100%;position:absolute;inset:0;"
                  aria-hidden="true"></canvas>
        </div>
```

- [ ] **Step 3: Visual check (canvas placeholder)**

Reload. The right column of the hero should be empty (transparent canvas) — that's expected until Task 6 adds the Three.js scene.

- [ ] **Step 4: Commit**

```bash
git add David.html
git commit -m "design: add Three.js CDN, replace terminal with hero-3d-wrap canvas"
```

---

## Task 6: Three.js Scene — Wireframe Icosahedron

**Files:**
- Modify: `David.html` — add new `<script>` block before `</body>`

- [ ] **Step 1: Add Three.js initialization script**

Find the very last `</script>` tag in David.html (the one closing the GitHub section around line 2478), then find `</body>` right after. Insert a new script block between the last `</script>` and `</body>`:

```html
  <!-- ─── Three.js Hero Icosahedron ──────────────── -->
  <script>
  (function initHeroThree() {
    var wrap   = document.getElementById('hero-3d-wrap');
    var canvas = document.getElementById('hero-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    var scene  = new THREE.Scene();
    var w      = wrap.clientWidth  || 420;
    var h      = wrap.clientHeight || 380;
    var camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 3.2;

    var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h, false);

    var geo     = new THREE.IcosahedronGeometry(1, 1);
    var wireGeo = new THREE.WireframeGeometry(geo);
    var mat     = new THREE.LineBasicMaterial({ color: 0xb8743a, opacity: 0.55, transparent: true });
    var mesh    = new THREE.LineSegments(wireGeo, mat);
    scene.add(mesh);

    var mouseX = 0, mouseY = 0;
    var targetX = 0, targetY = 0;

    document.addEventListener('mousemove', function(e) {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 0.6;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.6;
    }, { passive: true });

    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(function() {
        var nw = wrap.clientWidth  || 420;
        var nh = wrap.clientHeight || 380;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh, false);
      }).observe(wrap);
    }

    function animate() {
      requestAnimationFrame(animate);
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      mesh.rotation.y += 0.003;
      mesh.rotation.x  = targetY * 0.5;
      mesh.rotation.z  = targetX * 0.3;
      renderer.render(scene, camera);
    }

    animate();
  })();
  </script>
</body>
```

- [ ] **Step 2: Visual check**

Reload `David.html`. The right column of the hero should show a rotating amber wireframe polyhedron. Move your mouse across the hero — the shape should tilt subtly toward the cursor. Resize the window — canvas should refit.

- [ ] **Step 3: Verify dark mode**

Toggle to dark mode. The wireframe should remain visible (amber on dark background — looks great). Toggle back to light. Still visible against cream.

- [ ] **Step 4: Verify WebGL fallback**

If WebGL is not available the canvas stays blank — acceptable. The rest of the page is unaffected.

- [ ] **Step 5: Commit**

```bash
git add David.html
git commit -m "feat: Three.js wireframe icosahedron in hero, mouse tilt, ResizeObserver"
```

---

## Task 7: Magic MCP — Card & Button Micro-Interactions

**Files:**
- Invoke: `mcp__magic__21st_magic_component_builder`
- Modify: `style.css` — append micro-interaction CSS

- [ ] **Step 1: Invoke Magic MCP for card shimmer inspiration**

Call `mcp__magic__21st_magic_component_builder` with:
```
prompt: "A premium card hover effect for a portfolio website. The card has a subtle shimmer/sweep highlight that moves from left to right on hover, revealing a soft warm amber glow along the top border. Light mode: white card, rgba(184,116,58,0.12) glow. No JS — pure CSS. The card class is .card-premium."
```

Take the CSS output (translate any React/CSS-module syntax to plain CSS with `.card-premium`). The shimmer uses a `::before` pseudo-element with a linear-gradient swept via `transform: translateX`.

- [ ] **Step 2: Add card shimmer CSS to style.css**

Append after the `.contact-dark` block:

```css
/* ============================================================
   CARD PREMIUM — shimmer micro-interaction
============================================================ */
.card-premium {
  isolation: isolate;
}
.card-premium::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(184, 116, 58, 0.07) 50%,
    transparent 60%
  );
  transform: translateX(-100%);
  transition: transform 0s;
  pointer-events: none;
  z-index: 0;
}
.card-premium:hover::before {
  transform: translateX(100%);
  transition: transform 0.55s ease;
}
/* Ensure card children sit above the shimmer layer */
.card-premium > * {
  position: relative;
  z-index: 1;
}
```

- [ ] **Step 3: Invoke Magic MCP for button glow pulse**

Call `mcp__magic__21st_magic_component_builder` with:
```
prompt: "A primary CTA button hover effect. On hover, the button emits a subtle glow pulse — a box-shadow that expands and fades like a ripple. Amber color: rgba(184,116,58,0.4). The button class is .btn-primary. Pure CSS, no JS."
```

- [ ] **Step 4: Add button glow CSS to style.css**

Append after the card shimmer block:

```css
/* ============================================================
   BTN-PRIMARY — glow pulse on hover
============================================================ */
.btn-primary {
  position: relative;
  overflow: hidden;
}
.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 0 rgba(184, 116, 58, 0.35);
  transition: box-shadow 0.4s ease;
  pointer-events: none;
}
.btn-primary:hover::after {
  box-shadow: 0 0 0 8px rgba(184, 116, 58, 0);
}
[data-theme="dark"] .btn-primary:hover::after {
  box-shadow: 0 0 0 10px rgba(184, 116, 58, 0);
}
```

- [ ] **Step 5: Visual check**

Reload. Hover over any `.card-premium` — a subtle shimmer should sweep right. Hover over "Visa Projekt" button — a glow pulse should radiate outward. Both effects should be visible in light and dark mode.

- [ ] **Step 6: Commit**

```bash
git add style.css
git commit -m "design: card shimmer + btn-primary glow pulse micro-interactions via Magic MCP"
```

---

## Task 8: Remove Hero Watermark

**Files:**
- Modify: `David.html` — remove `.hero-watermark` element (conflicts visually with 3D)

- [ ] **Step 1: Find and remove the watermark element**

Search David.html for `hero-watermark`. Find the element:
```html
    <!-- Decorative big watermark letter -->
```
followed by a `<div class="hero-watermark">` ... `</div>`.

Delete the comment and the entire `<div class="hero-watermark">...</div>`.

- [ ] **Step 2: Visual check**

Reload hero. No large faint letter behind the name. The 3D polyhedron has clean space.

- [ ] **Step 3: Commit**

```bash
git add David.html
git commit -m "design: remove hero watermark letter, conflicts with 3D polyhedron"
```

---

## Task 9: Full Cross-Browser Verification

- [ ] **Step 1: Light mode full scroll**

Open `David.html` in a browser. Start in light mode. Scroll from hero to footer. Check:
- Nav: deep navy ✓
- Hero: cream background, large name, ember accent line, rotating 3D polyhedron right column ✓
- Section dividers: centered labels in ember ✓
- About: white background contrasts with cream hero ✓
- Projects: cream background alternates with white about ✓
- Contact: deep navy, white text, legible links ✓
- Footer: deep navy, flows from contact ✓

- [ ] **Step 2: Dark mode full scroll**

Toggle dark mode. Repeat scroll check:
- Nav: navy (same as before, looks unified) ✓
- Hero: dark background, cream name ✓
- 3D polyhedron: amber on dark — visible ✓
- Section dividers: dark bg, ember text ✓
- About/Projects: dark card surfaces ✓
- Contact: dark navy on dark bg — check contrast with footer, should be distinguishable ✓

- [ ] **Step 3: Hover interactions**

In light mode: hover cards → shimmer sweep visible. Hover "Visa Projekt" → glow pulse. Hover nav links → turn ember.

- [ ] **Step 4: Language toggle**

Switch to English (EN flag). All text updates correctly. Switch back.

- [ ] **Step 5: Project detail pages**

Click "Detaljer →" on Hatmakarna. Detail overlay opens. Colors should match the updated theme (detail page inherits `--c-*` tokens). Close with back button.

- [ ] **Step 6: Mobile check (≤768px)**

Resize to mobile width. 3D canvas is `hidden lg:flex` so it disappears on mobile — expected and correct. Nav collapses to hamburger. Mobile menu opens dark. All sections readable.

- [ ] **Step 7: Final commit**

```bash
git add .
git commit -m "chore: post-redesign verification pass — Editorial Dev complete"
```

---

## Self-Review Notes

**Spec coverage:**
- ✅ Warm cream bg (#faf9f7) — Task 1
- ✅ Ink black text (#0d0f12) — Task 1
- ✅ Deep navy nav — Task 2
- ✅ Ember accent preserved (#b8743a) — Task 1
- ✅ Section dividers redesigned — Task 3
- ✅ Contact section dark navy — Task 4
- ✅ Three.js CDN + canvas — Task 5
- ✅ IcosahedronGeometry wireframe — Task 6
- ✅ Slow rotation + mouse tilt — Task 6
- ✅ ResizeObserver — Task 6
- ✅ Magic MCP micro-interactions — Task 7
- ✅ Dark mode preserved throughout — Tasks 1, 2, 4, 6
- ✅ All content unchanged — no translation/data edits in any task
- ✅ Hero watermark removed (conflicts with 3D) — Task 8

**No TBDs, no "implement X" without code, no placeholders.**
