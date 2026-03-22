# Design System Specification: High-End Editorial

## 1. Overview & Creative North Star: "The Curated Gallery"

This design system moves away from the cold, "tech-first" aesthetic of SaaS platforms, instead drawing inspiration from high-end editorial magazines and physical art galleries. Our Creative North Star is **The Curated Gallery**. 

In a gallery, the architecture (the UI) never competes with the art (the content). We achieve this through "Quiet Luxury": high-contrast typography scales, vast expanses of whitespace, and a complete rejection of traditional structural lines. We break the rigid, boxed-in "template" look by using intentional asymmetry and overlapping elements to create a sense of movement and organic flow.

## 2. Colors & Surface Philosophy

The color palette is rooted in earth-toned sophistication, moving away from "digital" blues and vibrating vibrants toward muted, organic hues.

### Tonal Hierarchy
- **Primary (`#5b6428`):** A sophisticated olive-sage. Use this for moments of intentional focus, not for every button.
- **Surface & Background:** The foundation is `surface` (`#f9f9f9`). We avoid a clinical `#FFFFFF` for the main canvas to prevent eye strain and add a "paper" quality. Reserve `surface_container_lowest` (`#ffffff`) for elevated floating cards.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts.
- To separate a header from a body, use `surface_container_low` on top of a `surface` background.
- If a section needs to feel "tucked in," use `surface_container_high`.

### The "Glass & Gradient" Rule
To ensure the UI feels premium rather than flat, use **Glassmorphism** for floating navigation or overlays. 
- **Recipe:** Use `surface_container_lowest` at 80% opacity with a `24px` backdrop-blur.
- **Signature Textures:** For primary CTAs, apply a subtle linear gradient from `primary` (`#5b6428`) to `primary_dim` (`#4f571d`) at a 145-degree angle. This adds "soul" and depth that a flat hex code cannot provide.

## 3. Typography: The Editorial Voice

We utilize a dual-font strategy to create a sophisticated hierarchy between high-impact messaging and functional utility.

- **Display & Headlines (Manrope):** Chosen for its geometric elegance and wide aperture. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero moments. This font carries the "Editorial" weight.
- **Body & UI (Inter):** A modern classic for readability. Use `body-md` (0.875rem) for most interface text to keep the UI feeling light and airy.
- **Intentional Asymmetry:** When pairing a `headline-lg` with `body-lg`, avoid center-aligning everything. Offset the body text to the right or left to create a "grid-break" that feels custom-designed.

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are often "dirty" and "heavy." In this system, we convey depth through light and material physics.

- **The Layering Principle:** Stack surfaces like sheets of fine paper. 
    - Base: `surface`
    - Section: `surface_container_low`
    - Card: `surface_container_lowest`
- **Ambient Shadows:** When a "floating" effect is required (e.g., a modal), use an extra-diffused shadow: `0px 24px 48px rgba(47, 51, 52, 0.06)`. Note the color: we use a tint of `on_surface` (`#2f3334`) rather than pure black to maintain a natural, atmospheric look.
- **The "Ghost Border" Fallback:** If accessibility requires a container edge, use the `outline_variant` token at **15% opacity**. A 100% opaque border is a failure of the design system's elegance.

## 5. Components: Softness & Intention

All components favor high roundedness to mimic organic, tactile objects.

### Buttons & Chips
- **Primary Button:** Pill-shaped (`rounded-full`), using the signature primary gradient. High horizontal padding (`spacing-8`) is required to maintain the "luxury" silhouette.
- **Secondary/Tertiary:** Use `surface_container_high` for the background with `on_surface` text. Never use a stroke.
- **Chips:** Always `rounded-full`. Use `secondary_container` for a subtle, sophisticated background that differentiates from buttons.

### Cards & Lists
- **The "No Divider" Rule:** Forbid the use of horizontal rules (`<hr>`). Separate list items using `spacing-4` (1.4rem) of vertical whitespace or by alternating background tones between `surface` and `surface_container_low`.
- **Nesting:** A card (`surface_container_lowest`) should never sit directly on white. It should sit on a slightly darker `surface_container_low` to allow the card's "whiteness" to pop as the point of interaction.

### Input Fields
- **Refined Inputs:** Use a `surface_container_low` background with a `rounded-md` (1.5rem) corner. The label should use `label-md` and be positioned 0.5rem above the input, never inside it, to maintain a clean, architectural look.

## 6. Do’s and Don’ts

### Do
- **Do use "Extreme" Whitespace:** Use `spacing-20` (7rem) or `spacing-24` (8.5rem) between major sections to allow the design to breathe.
- **Do use Tonal Transitions:** Shift background colors from `surface` to `surface_container_lowest` to guide the user's eye toward the most important content.
- **Do prioritize Manrope for numbers:** The geometric nature of Manrope makes price points and data look like high-end typography.

### Don’t
- **Don’t use 1px Borders:** This is the quickest way to make the design look like a standard "Bootstrap" template.
- **Don’t use pure Black (#000000):** Use `on_surface` (`#2f3334`) for text. It is softer, more natural, and feels more expensive.
- **Don’t crowd components:** If a component feels "tight," double the spacing. In this system, space is a feature, not a waste of screen real estate.