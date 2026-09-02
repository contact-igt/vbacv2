# Design System: The Birth Wave

## 1. Visual Theme & Atmosphere

A warm, clinic-meets-boutique interface with restrained asymmetric layouts and gentle scroll-reveal motion. The atmosphere is nurturing yet professional — like a sunlit prenatal studio with polished wood accents. Earth-toned warmth dominates: cream surfaces, deep espresso text, dusty rose highlights. Every screen should feel unhurried, trustworthy, and deeply human — not sterile, not corporate.

**Calibration:**
- **Density:** 4 — Art Gallery Airy leaning toward Daily App Balanced. Generous whitespace between sections; content breathes.
- **Variance:** 6 — Offset Asymmetric. Hero uses left-aligned text with offset image. Sections alternate alignment. No centered symmetry.
- **Motion:** 4 — Fluid CSS. Scroll-reveal fades with `translateY`. Spring-eased hover states on buttons. No cinematic choreography — this is a medical practice, not a portfolio.

---

## 2. Color Palette & Roles

### Core Neutrals
- **Warm Cream** (`#FBF7F4`) — Primary page background. Every page sits on this warm canvas.
- **Pure Surface** (`#FFFFFF`) — Card fills, header background, overlay surfaces.
- **Espresso Ink** (`#2E2421`) — Primary text. Deep brown-black, never pure black. All headings, navigation, body text anchored here.
- **Walnut Muted** (`#6B5C57`) — Secondary text, descriptions, metadata, body paragraphs.
- **Biscuit Border** (`#E8D9D1`) — Structural borders, dividers, card outlines. Warm-tinted, never cold gray.

### Brand Accent (Single Accent)
- **Mahogany Brown** (`#613E37`) — Primary CTA fills, active states, logo badge, Patient Journey cards. The singular accent color. Saturation: ~52%.
- **Mahogany Hover** (`#52332D`) — Hover state for primary buttons.
- **Mahogany Active** (`#432A25`) — Active/pressed state for primary buttons.

### Supporting Tones
- **Dusty Rose** (`#CA9585`) — Eyebrow labels, subtle category markers, decorative dots. Never used as a CTA fill.
- **Living Coral** (`#F88379`) — Numbered step indicators, small accent dots, focus rings. Used sparingly for warmth.
- **Calm Blue** (`#5DAEDB`) — Brand blue for decorative circles, flourish accents. Never used for text.
- **Deep Teal** (`#225D78`) — Hyperlink text color ("Explore service →" links). Distinct from body text.

### Surface Tints (Section Backgrounds)
- **Blush** (`#F8ECE7`) — Hero section, CTA blocks, Pathway Card 01.
- **Sky** (`#EAF5FA`) — Doctor profile sections, Pathway Card 02.
- **Sand** (`#F5ECE3`) — Pathway Card 03, alternating content blocks.
- **Petal Pink** (`#F6EFF1`) — Pathway Card 04.
- **Linen Quote** (`#FDFBF9`) — Testimonial/quote block surfaces.

### Journey Cards
- **Journey Brown** (`#734D42`) — Patient Journey step card backgrounds.
- **Journey Eyebrow** (`#EBBFB0`) — Eyebrow text on Journey cards (light on dark).

### Footer
- **Footer Charcoal** (`#201A18`) — Footer background. Near-black with warm undertone.
- **Footer Secondary** (`#B8B0AB`) — Footer link and body text.
- **Footer Legal** (`#918A85`) — Legal text, copyright line.
- **Footer Divider** (`#423B38`) — Horizontal rule inside footer.

### Banned Colors
- Pure black (`#000000`) — Use Espresso Ink instead.
- Any purple, violet, or neon blue — strictly forbidden.
- Saturated neon gradients — forbidden.
- Cold grays (Slate, Cool Gray) — this is a warm palette. Use Walnut/Biscuit tones.

---

## 3. Typography Rules

### Font Stack
- **Display (Headings):** `Plus Jakarta Sans` — Weight 600–800, track-tight (`tracking-tight`). Used for all `h1`–`h6`. Confident, geometric-humanist with soft terminals that match the nurturing brand.
- **Body:** `Poppins` — Weight 300–500, relaxed leading (`leading-[1.58]`), max `65ch` line width. Geometric sans with open counters for readability in medical content.
- **Mono:** Not currently used. If needed for data tables or timestamps, use `JetBrains Mono`.

### Scale Hierarchy
| Element | Size | Weight | Color |
|---|---|---|---|
| Page Title (h1) | `52px` | 700 (Bold) | Espresso Ink |
| Section Heading (h2) | `40px` | 700 (Bold) | Espresso Ink |
| Sub-heading (h3) | `24px` | 600 (Semi) | Espresso Ink |
| Eyebrow Label | `10.5px` | 600, uppercase, `tracking-[0.16em]` | Dusty Rose |
| Body | `17px` | 400 | Walnut Muted |
| Caption / Legal | `13px` | 500 | Walnut Muted |
| Nav Links | `16px` | 500 | Espresso Ink / 80% opacity |

### Banned Fonts
- `Inter` — banned. Too generic for a premium medical brand.
- `Times New Roman`, `Georgia`, `Garamond`, `Palatino` — generic serifs banned.
- System default sans-serif without explicit font loading — banned.

---

## 4. Component Stylings

### Buttons
- **Primary CTA:** Mahogany Brown fill (`#613E37`), white text, `rounded-full`, `px-7 py-3.5`, `font-semibold`. Hover: `bg-brown-600`. Active: `scale-[0.98]` tactile push + `bg-brown-700`. No outer glow. No drop shadow.
- **Secondary CTA:** White fill, `border border-border`, Espresso Ink text. Hover: border and text transition to Mahogany Brown. Active: `scale-[0.98]`.
- **Ghost/Link:** Text-only with Deep Teal color. Hover: underline or color shift. No button shape.

### Cards
- **Standard Card:** White fill, `rounded-[20px]` to `rounded-[34px]`, `shadow-[0_8px_24px_rgba(46,36,33,0.1)]`. Warm-tinted shadow matching Espresso Ink. Used for overlay info panels, testimonials.
- **Pathway Cards:** Tinted surface backgrounds (Blush, Sky, Sand, Pink), `rounded-3xl`, no heavy shadow. Content-led hierarchy.
- **Journey Cards:** Mahogany-toned fills (`#734D42`), white text, `rounded-2xl`. Eyebrow in Journey Eyebrow tone.
- **Service Cards:** White fill on Cream background, `rounded-2xl`, border-bottom accent in Coral for numbering.

### Inputs / Forms
- Label above input, `text-sm font-medium`.
- Input: `rounded-xl`, `border border-border`, `px-4 py-3`.
- Focus ring: `2px solid` Living Coral (`#F88379`), `outline-offset: 3px`.
- Error text below input in red, `text-sm`.
- No floating labels.

### Loading / Empty States
- Skeletal loaders matching exact layout dimensions. No circular spinners.
- Empty states: composed illustration with guidance text.

---

## 5. Layout Principles

### Grid System
- **Max-width container:** `1280px` centered with `px-5 sm:px-8 xl:px-12` horizontal padding.
- **Hero:** Asymmetric 2-column split — `grid-cols-[1.02fr_0.98fr]` on desktop. Text-left, image-right. Never centered.
- **Feature Sections:** 2-column zig-zag or asymmetric grid. The "3 equal cards horizontally" pattern is **banned** — use 4-column grid with tinted cards or 2-column stagger.
- **CSS Grid over Flexbox math.** No `calc()` percentage hacks.

### Spacing Philosophy
- Section vertical gaps: `py-14 md:py-16` (56px–64px).
- Component internal gaps: `gap-8` to `gap-14` depending on hierarchy.
- Generous breathing room between text blocks: `mt-4` to `mt-8`.

### Responsive Rules
- **Mobile-first collapse (< 768px):** All multi-column layouts collapse to single column. No exceptions.
- **No horizontal scroll.** Horizontal overflow on mobile is a critical failure.
- **Typography scaling:** Headlines use responsive sizes. Body text minimum `1rem`.
- **Touch targets:** All interactive elements minimum `44px` tap area (`min-h-11`).
- **Navigation:** Desktop horizontal nav collapses to slide-down mobile menu with accordion sub-items.
- **Images:** Fill containers with `object-cover object-top`. Rounded corners maintained.

---

## 6. Motion & Interaction

### Scroll Reveal (Primary Animation)
- `Reveal` component: IntersectionObserver-triggered, fires once.
- Transition: `opacity-0 → opacity-100` + `translateY(1rem) → translateY(0)`.
- Duration: `700ms`, `ease-out`.
- Optional `delay` prop for staggering sibling rows (cascade reveals).
- Optional `scaleFrom` prop for subtle scale-in (e.g., `0.97`).

### Hover & Active States
- Buttons: `transition-all duration-150`. Active: `scale-[0.98]` tactile push.
- Nav links: `transition-colors` on hover, `text-ink/80 → text-brown`.
- Cards: No hover animation unless interactive. If clickable, subtle `shadow` elevation on hover.
- Dropdown menus: `opacity-0 → opacity-100` + `translateY(4px → 8px)`, `duration-200 ease-out`.

### Header
- Sticky with scroll-shadow: `shadow-[0_2px_12px_rgba(46,36,33,0.06)]` appears after `scrollY > 4`.
- `transition-shadow duration-200`.

### Performance Rules
- Animate exclusively via `transform` and `opacity`. Never animate `top`, `left`, `width`, `height`.
- `prefers-reduced-motion: reduce` zeroes all animation/transition durations globally (handled in `globals.css`).
- No animation library dependencies (no Framer Motion, no GSAP). Pure CSS transitions + IntersectionObserver.

---

## 7. Anti-Patterns (Banned)

### Visual
- ❌ No emojis anywhere in the UI.
- ❌ No pure black (`#000000`) — use Espresso Ink (`#2E2421`).
- ❌ No neon/outer-glow shadows.
- ❌ No oversaturated accent colors (saturation must stay below 80%).
- ❌ No gradient text on headers.
- ❌ No custom mouse cursors.
- ❌ No overlapping elements — clean spatial separation always.
- ❌ No purple/violet/neon blue anywhere.

### Layout
- ❌ No centered Hero sections — always left-aligned or asymmetric split.
- ❌ No "3 equal cards in a row" feature grid — use zig-zag, asymmetric, or 4-column tinted cards.
- ❌ No `h-screen` — use `min-h-[100dvh]` for full-height sections.
- ❌ No horizontal scroll on mobile.

### Typography
- ❌ No `Inter` font.
- ❌ No generic serif fonts.
- ❌ No system default fonts without explicit loading.

### Copy
- ❌ No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Cutting-edge".
- ❌ No filler UI text: "Scroll to explore", "Swipe down", scroll arrows, bouncing chevrons.
- ❌ No generic placeholder names ("John Doe", "Acme", "Lorem ipsum" in production).
- ❌ No fake round numbers (`99.99%`, `50%`).

### Technical
- ❌ No Framer Motion, GSAP, or heavy animation libraries — pure CSS transitions.
- ❌ No broken image links — all images must be verified assets from `/public/images/`.
- ❌ No `calc()` percentage layout hacks — use CSS Grid.

---

## 8. Image & Media Guidelines

### Logo
- Primary logo: `/images/logo.PNG` — dark calligraphy on transparent canvas. Includes "By Dr. Santoshi Nandigam" sub-text.
- White variant: `/images/birthwave/birthwave-logo-white.png` — for dark backgrounds (footer).
- Logo rendering uses overflow-clip zoom technique due to large transparent padding in the PNG.

### Photography Style
- Warm, natural lighting. Candid clinic/workshop moments.
- Color-graded to match the warm cream/brown palette.
- Rounded corners (`rounded-[34px]`) on hero images.
- Bottom gradient overlays (`from-ink/50 to-transparent`) for text readability.

### Icons
- No icon library. Custom SVG inline icons for navigation chevrons, close buttons.
- Minimal line-style, `strokeWidth: 1.4–2`, `strokeLinecap: round`.
