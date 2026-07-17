/* ===== Flowbite Icons – registry (auto-discovered via Vite glob) =====
 *
 * Loads every SVG shipped by the `flowbite-icons` package at build time and
 * indexes them by `style` + `name` so the `<Icon>` component (and the Storybook
 * gallery) can render any of the 750+ icons without manual registration.
 */

export type IconStyle = 'outline' | 'solid';

export interface IconEntry {
  /** kebab-case icon name, e.g. `adjustments-horizontal` */
  name: string;
  /** outline (stroke) or solid (fill) */
  style: IconStyle;
  /** source category folder, e.g. `general`, `brands`, `food & beverage` */
  category: string;
  /** inner markup of the source `<svg>` (paths/shapes only) */
  inner: string;
  /** whether the source uses stroke (outline) or fill (solid) */
  fill: 'none' | 'currentColor';
}

// Eager raw import of every icon SVG shipped by flowbite-icons.
const modules = import.meta.glob('/node_modules/flowbite-icons/src/**/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const SVG_INNER = /<svg\b[^>]*>([\s\S]*?)<\/svg>/i;
const SVG_FILL = /\bfill="([^"]*)"/i;

/** Parse a raw SVG string into just its inner markup. */
function extractInner(raw: string): string {
  const m = raw.match(SVG_INNER);
  return m ? m[1].trim() : '';
}

/** Extract the root fill attribute, falling back to "none". */
function extractFill(raw: string): 'none' | 'currentColor' {
  const m = raw.match(SVG_FILL);
  if (m && m[1] === 'currentColor') return 'currentColor';
  return 'none';
}

const REGISTRY = new Map<string, IconEntry>();
const CATEGORIES: Record<IconStyle, Set<string>> = {
  outline: new Set(),
  solid: new Set(),
};

for (const [path, raw] of Object.entries(modules)) {
  // path: /node_modules/flowbite-icons/src/{style}/{category}/{name}.svg
  const match = path.match(/\/src\/(outline|solid)\/(.+)\/([^/]+)\.svg$/);
  if (!match) continue;
  const [, style, category, name] = match;
  const s = style as IconStyle;
  const entry: IconEntry = {
    name,
    style: s,
    category,
    inner: extractInner(raw),
    fill: extractFill(raw),
  };
  REGISTRY.set(`${s}:${name}`, entry);
  CATEGORIES[s].add(category);
}

/** Look up an icon. Defaults to the outline style. */
export function getIcon(name: string, style: IconStyle = 'outline'): IconEntry | undefined {
  return REGISTRY.get(`${style}:${name}`) ?? REGISTRY.get(`outline:${name}`);
}

export const ICON_STYLES: IconStyle[] = ['outline', 'solid'];

/** Sorted list of categories for a given style (for the gallery filter UI). */
export function categories(style: IconStyle): string[] {
  return [...CATEGORIES[style]].sort((a, b) => a.localeCompare(b));
}

/** Total icon count per style (and combined) — handy for the gallery header. */
export const iconCount: Record<IconStyle | 'total', number> = {
  outline: [...REGISTRY.keys()].filter((k) => k.startsWith('outline:')).length,
  solid: [...REGISTRY.keys()].filter((k) => k.startsWith('solid:')).length,
  total: REGISTRY.size,
};

export interface IconGroup {
  category: string;
  icons: IconEntry[];
}

/**
 * Group every icon of a style by category, categories sorted alphabetically,
 * icons within a category sorted alphabetically. Used to render the gallery.
 */
export function groupedIcons(style: IconStyle): IconGroup[] {
  const byCat = new Map<string, IconEntry[]>();
  for (const entry of REGISTRY.values()) {
    if (entry.style !== style) continue;
    const arr = byCat.get(entry.category) ?? [];
    arr.push(entry);
    byCat.set(entry.category, arr);
  }
  return [...byCat.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([category, icons]) => ({
      category,
      icons: icons.sort((a, b) => a.name.localeCompare(b.name)),
    }));
}
