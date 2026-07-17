import { Icon } from '../Icon';
import './shadows-borders.css';
import './shadows-borders-display.css';

/**
 * Flowbite Shadows & Borders style guide.
 *
 * Visual reference for the four foundation token families transcribed from
 * the "🔲 Shadows & Borders" Figma canvas (node 3201-20979):
 * border-radius, border-width, border-style and box-shadow.
 */

interface Swatch {
  label: string;
  className: string;
}

const RADIUS: Swatch[] = [
  { label: '.rounded-xxs', className: 'fb-radius-xxs' },
  { label: '.rounded-xs', className: 'fb-radius-xs' },
  { label: '.rounded-sm', className: 'fb-radius-sm' },
  { label: '.rounded', className: 'fb-radius' },
  { label: '.rounded-base', className: 'fb-radius-base' },
  { label: '.rounded-lg', className: 'fb-radius-lg' },
  { label: '.rounded-xl', className: 'fb-radius-xl' },
  { label: '.rounded-full', className: 'fb-radius-full' },
];

const WIDTH: Swatch[] = [
  { label: '.border', className: 'fb-border' },
  { label: '.border-md', className: 'fb-border-md' },
  { label: '.border-lg', className: 'fb-border-lg' },
  { label: '.border-xl', className: 'fb-border-xl' },
];

const STYLE_: Swatch[] = [
  { label: 'solid', className: 'fb-border-solid' },
  { label: 'dashed', className: 'fb-border-dashed' },
];

const SHADOW: Swatch[] = [
  { label: '.shadow-xs', className: 'fb-shadow-xs' },
  { label: '.shadow-sm', className: 'fb-shadow-sm' },
  { label: '.shadow', className: 'fb-shadow' },
  { label: '.shadow-md', className: 'fb-shadow-md' },
  { label: '.shadow-lg', className: 'fb-shadow-lg' },
  { label: '.shadow-xl', className: 'fb-shadow-xl' },
  { label: '.shadow-2xl', className: 'fb-shadow-2xl' },
  { label: '.shadow-inner', className: 'fb-shadow-inner' },
  { label: '.shadow-top', className: 'fb-shadow-top' },
];

const RadiusSwatches = ({ items }: { items: Swatch[] }) => (
  <div className="fb-sb-row">
    {items.map((s) => (
      <div className="fb-sb-card" key={s.label}>
        <div className={`fb-sb-card__swatch fb-sb-card__swatch--radius ${s.className}`} />
        <span className="fb-sb-card__label">{s.label}</span>
      </div>
    ))}
  </div>
);

const WidthSwatches = ({ items }: { items: Swatch[] }) => (
  <div className="fb-sb-row">
    {items.map((s) => (
      <div className="fb-sb-card" key={s.label}>
        <div className={`fb-sb-card__swatch fb-sb-card__swatch--width ${s.className}`} />
        <span className="fb-sb-card__label">{s.label}</span>
      </div>
    ))}
  </div>
);

const StyleSwatches = ({ items }: { items: Swatch[] }) => (
  <div className="fb-sb-row">
    {items.map((s) => (
      <div className="fb-sb-card" key={s.label}>
        <div className={`fb-sb-card__swatch fb-sb-card__swatch--style ${s.className}`} />
        <span className="fb-sb-card__label fb-sb-card__label--neutral">{s.label}</span>
      </div>
    ))}
  </div>
);

const ShadowSwatches = ({ items }: { items: Swatch[] }) => (
  <div
    className="fb-sb-row"
    style={{ background: '#f9fafb', padding: 24, borderRadius: 16 }}
  >
    {items.map((s) => (
      <div className="fb-sb-card" key={s.label}>
        <div className={`fb-sb-card__swatch fb-sb-card__swatch--shadow ${s.className}`} />
        <span className="fb-sb-card__label">{s.label}</span>
      </div>
    ))}
  </div>
);

export const ShadowsBorders = () => (
  <div className="fb-sb-guide">
    <h1 className="fb-sb-guide__title">Shadows &amp; Borders</h1>
    <p className="fb-sb-guide__lede">
      Foundation tokens for radius, border width, border style and elevation.
      These underpin every Flowbite component and keep visual consistency across
      the system.
    </p>

    <section className="fb-sb-section">
      <div className="fb-sb-section__head">
        <h2 className="fb-sb-section__title">Border Radius</h2>
        <span className="fb-sb-section__hint">8 steps · 2px → 9999px</span>
      </div>
      <RadiusSwatches items={RADIUS} />
    </section>

    <section className="fb-sb-section">
      <div className="fb-sb-section__head">
        <h2 className="fb-sb-section__title">Border Width</h2>
        <span className="fb-sb-section__hint">4 steps · 1px → 8px</span>
      </div>
      <WidthSwatches items={WIDTH} />
    </section>

    <section className="fb-sb-section">
      <div className="fb-sb-section__head">
        <h2 className="fb-sb-section__title">Border Style</h2>
        <span className="fb-sb-section__hint">solid · dashed</span>
      </div>
      <StyleSwatches items={STYLE_} />
    </section>

    <section className="fb-sb-section">
      <div className="fb-sb-section__head">
        <h2 className="fb-sb-section__title">Box Shadow</h2>
        <span className="fb-sb-section__hint">9 steps · xs → 2xl + inner & top</span>
      </div>
      <ShadowSwatches items={SHADOW} />
      <p className="fb-sb-note">
        <Icon name="info-circle" size={18} aria-hidden />
        <span>
          <code>.rounded-base</code> is the default radius applied across most
          components to ensure visual uniformity.
        </span>
      </p>
    </section>
  </div>
);

export default ShadowsBorders;
