import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import { groupedIcons, iconCount, ICON_STYLES, type IconStyle } from './iconRegistry';
import './icons-gallery.css';

/* ---------------------------------------------------------------- *
 * Interactive icon gallery — the "library browser" for Flowbite icons.
 * Search by name, filter by category, toggle outline/solid, click an
 * icon to copy a ready-to-use React snippet to the clipboard.
 * ---------------------------------------------------------------- */

const Gallery = () => {
  const [style, setStyle] = useState<IconStyle>('outline');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const groups = useMemo(() => groupedIcons(style), [style]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return groups
      .map((g) => ({
        ...g,
        icons: g.icons.filter((icon) => {
          const matchesQuery = q === '' || icon.name.includes(q);
          const matchesCat = category === null || icon.category === category;
          return matchesQuery && matchesCat;
        }),
      }))
      .filter((g) => g.icons.length > 0);
  }, [groups, query, category]);

  const allCategories = useMemo(
    () => [...new Set(groups.map((g) => g.category))].sort(),
    [groups],
  );

  const shown = filtered.reduce((sum, g) => sum + g.icons.length, 0);

  const copy = (name: string, s: IconStyle) => {
    const snippet = `import { Icon } from 'flowbite-design-system/Icon';\n\n<Icon name="${name}"${s === 'outline' ? '' : ` variant="${s}"`} />`;
    navigator.clipboard?.writeText(snippet);
    setToast(`Copied: <Icon name="${name}" />`);
    window.setTimeout(() => setToast(null), 1600);
  };

  return (
    <div className="fb-icons-gallery">
      <header className="fb-icons-gallery__header">
        <h1 className="fb-icons-gallery__title">Flowbite Icons</h1>
        <p className="fb-icons-gallery__subtitle">
          {iconCount.total} icons across {iconCount.outline} outline &amp;{' '}
          {iconCount.solid} solid — sourced from the official flowbite-icons
          package. Click any icon to copy its usage.
        </p>

        <div className="fb-icons-gallery__toolbar">
          <label className="fb-icons-gallery__search">
            <Icon name="search" size={16} aria-hidden />
            <input
              type="text"
              placeholder="Search icons by name…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search icons"
            />
          </label>

          <div className="fb-icons-gallery__style-toggle" role="group" aria-label="Icon style">
            {ICON_STYLES.map((s) => (
              <button
                key={s}
                aria-pressed={style === s}
                onClick={() => {
                  setStyle(s);
                  setCategory(null);
                }}
              >
                {s}
              </button>
            ))}
          </div>

          <span className="fb-icons-gallery__count">{shown} shown</span>
        </div>

        <div className="fb-icons-gallery__cats">
          <button
            className="fb-icons-gallery__cat"
            aria-pressed={category === null}
            onClick={() => setCategory(null)}
          >
            All
          </button>
          {allCategories.map((c) => (
            <button
              key={c}
              className="fb-icons-gallery__cat"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      {filtered.length === 0 ? (
        <p className="fb-icons-gallery__empty">No icons match “{query}”.</p>
      ) : (
        filtered.map((g) => (
          <section className="fb-icons-gallery__group" key={g.category}>
            <h2 className="fb-icons-gallery__group-title">{g.category}</h2>
            <div className="fb-icons-gallery__grid">
              {g.icons.map((icon) => (
                <button
                  key={icon.name}
                  className="fb-icons-gallery__cell"
                  title={`Click to copy: <Icon name="${icon.name}" />`}
                  onClick={() => copy(icon.name, style)}
                >
                  <Icon name={icon.name} variant={style} size={28} />
                  <span className="fb-icons-gallery__cell-name">{icon.name}</span>
                </button>
              ))}
            </div>
          </section>
        ))
      )}

      {toast && <div className="fb-icons-gallery__toast">{toast}</div>}
    </div>
  );
};

const meta = {
  title: 'Style Guide/Icons',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
    docs: {
      description: {
        component:
          'Browse all 750+ Flowbite icons. Search by name, filter by category, toggle outline/solid, and click an icon to copy a ready-to-use `<Icon>` snippet. Icons inherit color via `currentColor`.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Library: Story = {};

/** Single-icon playground — verify the `Icon` component API and sizing. */
export const Playground: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', padding: 24 }}>
      <Icon name="bell" size={48} />
      <Icon name="bell" variant="solid" size={48} title="Notifications" />
      <Icon name="adjustments-horizontal" size={32} />
      <Icon name="heart" variant="solid" size={32} />
      <span style={{ color: '#1c4ed8' }}>
        <Icon name="check-circle" size={32} />
      </span>
    </div>
  ),
  parameters: { layout: 'centered' },
};

/** A quick visual reference of common icons at default size. */
export const Common: Story = {
  render: () => {
    const names = [
      'home', 'search', 'bell', 'user', 'cart', 'gear', 'menu',
      'chevron-right', 'x-circle', 'check', 'info-circle', 'trash',
    ];
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, padding: 24 }}>
        {names.map((n) => (
          <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Icon name={n} size={28} />
            <span style={{ fontSize: 11, color: '#6b7280' }}>{n}</span>
          </div>
        ))}
      </div>
    );
  },
  parameters: { layout: 'centered' },
};
