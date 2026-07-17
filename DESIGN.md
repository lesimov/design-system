---
version: "alpha"
name: Dusa
description: "A clear, energetic React design system built on Flowbite foundations."
colors:
  brand-050: "#EFF6FF"
  brand-500: "#2B7FFF"
  brand-600: "#155DFC"
  brand-700: "#1447E6"
  brand-950: "#162455"
  slate-050: "#F8FAFC"
  slate-500: "#62748E"
  slate-700: "#314158"
  slate-900: "#0F172B"
  gray-200: "#E5E7EB"
  gray-500: "#6A7282"
  text-heading: "#101828"
  text-body: "#4A5565"
  text-body-subtle: "#6A7282"
  bg-neutral-primary: "#FFFFFF"
  bg-neutral-secondary: "#F9FAFB"
  bg-neutral-tertiary: "#F3F4F6"
  bg-brand: "#1447E6"
  bg-success: "#007A55"
  bg-danger: "#C70036"
  bg-warning: "#FF5A1F"
  border-base: "#E5E7EB"
  border-brand: "#1447E6"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.02em
  heading-2:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.02em
  heading-3:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.2
  heading-4:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.2
  heading-5:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.2
  heading-6:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-small:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  caption:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
  code:
    fontFamily: "ui-monospace, Consolas, monospace"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.35
rounded:
  xxs: 2px
  xs: 4px
  sm: 6px
  base: 12px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.bg-brand}"
    textColor: "#FFFFFF"
    rounded: "{rounded.base}"
    height: 40px
    padding: 10px 16px
  button-primary-hover:
    backgroundColor: "{colors.brand-700}"
  input:
    backgroundColor: "{colors.bg-neutral-primary}"
    textColor: "{colors.text-heading}"
    rounded: "{rounded.base}"
    height: 40px
    padding: 10px 16px
  card:
    backgroundColor: "{colors.bg-neutral-primary}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.base}"
    padding: 16px
---

## Overview

Dusa is a practical, bright, and trustworthy interface system for React products. It follows the values exposed by the Storybook Style Guide: Inter typography, Flowbite's 22-family color foundation, semantic text/background/border tokens, compact responsive type, and a measured radius and elevation scale.

**Design-system description:** We use Inter across the interface, a high-contrast blue and neutral palette, compact spacing, and a soft but precise shape language. Our brand voice is clear, energetic, and dependable—friendly in interaction, professional in execution. Components should be easy to scan, predictable to operate, and consistent across responsive layouts.

**Brand description — Dusa:** Dusa turns complex product work into a calmer, clearer daily experience. The brand is confident but approachable: blue signals momentum and trust, slate and gray create focus, and explicit interaction states make every action understandable. Dusa speaks plainly, helps users move forward, and makes useful tools feel welcoming rather than intimidating.

## Colors

The Style Guide exposes 22 color families—Brand, Slate, Gray, Zinc, Neutral, Stone, Red, Orange, Amber, Yellow, Lime, Green, Emerald, Teal, Cyan, Sky, Indigo, Violet, Purple, Fuchsia, Pink, and Rose—with shade steps from 050 through 950. Use semantic variables in product UI; use primitive families when defining or extending tokens.

- **Brand:** `brand-600` (`#155DFC`) is the primary action color. `bg-brand` and `border-brand` use `#1447E6`; `brand-700` is the darker interaction state.
- **Text:** use `text-heading` (`#101828`) for headings, `text-body` (`#4A5565`) for normal reading text, and `text-body-subtle` (`#6A7282`) for supporting content.
- **Backgrounds:** use `bg-neutral-primary` (`#FFFFFF`) for primary surfaces, `bg-neutral-secondary` (`#F9FAFB`) for secondary surfaces, and `bg-neutral-tertiary` (`#F3F4F6`) for tertiary surfaces.
- **Status:** use semantic success (`#007A55`), danger (`#C70036`), and warning (`#FF5A1F`) tokens. Pair color with text, icons, or another non-color cue.
- **Borders:** `border-base` (`#E5E7EB`) is the default neutral border. Use semantic status or brand borders only when the relationship is meaningful.

Do not use the complete palette decoratively in one view. A screen should have one dominant action color and a small number of semantic accents.

## Typography

The Storybook Typography guide names **Inter** as the single interface family. Use `Inter, system-ui, -apple-system, sans-serif`; do not substitute a branded display face or use Segoe UI. Inter spans five weights: normal 400, medium 500, semibold 600, bold 700, and extrabold 800.

The size scale is: 8px (`xxs`), 12px (`xs`), 14px (`sm`), 16px (`base`), 18px (`lg`), 20px (`xl`), 24px (`2xl`), 30px (`3xl`), 36px (`4xl`), 48px (`5xl`), and 60px (`6xl`). Use the documented heading and body roles rather than inventing arbitrary sizes.

- H1: 48px, 700, tight tracking.
- H2: 36px, 600, tight tracking.
- H3: 30px, 600.
- H4: 24px, 600.
- H5: 20px, 600.
- H6: 16px, 500.
- Body base: 16px, 400, normal leading.
- Body small: 14px, 400, normal leading.
- Caption: 12px, 400, normal leading.

Use monospace only for code, identifiers, and technical values. Keep labels and CTA text at medium weight. Use semibold for main headings and bold or extrabold only where the hierarchy calls for strong hero emphasis.

## Layout

Build with a compact rhythm based on the existing spacing tokens: 4px, 8px, 12px, 16px, 24px, 32px, and 48px. Prefer flex and grid for structure, preserve a readable content width, and keep controls aligned to a shared baseline.

On narrow screens, reduce display type and section spacing before reducing touch-target size. Responsive layouts must remain usable at zoom and must not rely on hover to expose essential information.

## Elevation & Depth

The Style Guide defines nine shadow steps: `shadow-xs`, `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`, and `shadow-top`. Use borders and surface changes for ordinary grouping; reserve shadows for floating or layered content.

The default shadow family uses restrained slate-tinted values. For example, `shadow-sm` is `0 1px 2px rgba(29, 41, 61, 0.05)` and `shadow-md` is `0 4px 6px rgba(29, 41, 61, 0.1), 0 2px 4px rgba(29, 41, 61, 0.1)`. Do not stack strong shadows or add depth to every card.

## Shapes

The Style Guide defines eight radius steps: `rounded-xxs` 2px, `rounded-xs` 4px, `rounded-sm` 6px, `rounded` 8px, `rounded-base` 12px, `rounded-lg` 16px, `rounded-xl` 24px, and `rounded-full` 9999px. `rounded-base` is the default radius across most components. Use full rounding only for pills, badges, avatars, and circular controls.

Border foundations include 1px, 2px, 4px, and 8px widths, with solid and dashed styles. Use 1px solid borders by default; larger widths and dashed borders require a clear semantic or interaction reason.

## Components

Use the existing React components and their documented variants before composing one-off controls. The library includes actions, forms, navigation, feedback, overlays, data display, icons, and loading states.

- **Buttons:** default to the `brand` color and `base` size for primary actions. Use outline, ghost, or neutral variants for secondary actions. Preserve layout while communicating disabled and loading states.
- **Forms:** pair every input with a visible label or equivalent accessible name. Keep validation close to the field and explain recovery.
- **Navigation:** maintain a clear current-location state in nav tabs, breadcrumbs, sidebars, and bottom navigation. Do not rely on color alone.
- **Feedback:** alerts, toasts, progress bars, skeletons, and spinners should communicate status without unnecessarily blocking the next useful action.
- **Overlays:** popovers, dropdowns, drawers, and modals need visible focus treatment, predictable dismissal, and correct layering.
- **Icons:** use icons to reinforce meaning, not replace essential labels. Icon-only controls require an accessible name.

## Accessibility

Design and implement to WCAG 2.2 AA intent. Check contrast for text, controls, borders that convey meaning, and focus indicators. Preserve keyboard navigation and visible focus states. Respect reduced-motion preferences and ensure responsive layouts remain usable at zoom and narrow widths.

## Do's and Don'ts

### Do

- Use Inter and the Style Guide's semantic tokens.
- Use existing component variants and the documented radius, border, shadow, spacing, and type scales.
- Keep copy direct, reassuring, and action-oriented.
- Make the primary action visually obvious without making every action loud.
- Test hover, focus, active, disabled, loading, error, and responsive states.

### Don't

- Do not introduce Segoe UI, a second visual language, unrelated font stacks, or arbitrary type sizes.
- Do not introduce a new radius or shadow scale beside the Style Guide foundations.
- Do not use gradients, excessive decoration, or saturated colors as default surface treatments.
- Do not make essential information depend on hover alone.
- Do not communicate status only through red, green, amber, or blue.
