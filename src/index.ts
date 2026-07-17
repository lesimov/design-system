// ── Design System — Public API ───────────────────────────────────
// Reusable UI components exported from src/components/index.ts.
// Storybook-only documentation components (Colors, LayoutGrid,
// ShadowsBorders, Typography) are intentionally excluded.

// Design tokens + Tailwind preflight — ensures `color-scheme: light`
// and all CSS custom properties are bundled into dist/index.css.
import './tokens.css';

export * from './components';
