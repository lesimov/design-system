import React from 'react';
import './typography.css';

export type TypographySection =
  | 'family'
  | 'weights'
  | 'sizes'
  | 'headings'
  | 'body'
  | 'all';

export interface TypographyProps {
  /** Which section(s) to render. Defaults to 'all'. */
  section?: TypographySection;
  /** Additional class names on the root container. */
  className?: string;
}

/* ------------------------------------------------------------------ *
 * Token data — transcribed from Figma node 2701-21012
 * (Flowbite Design System · Typography canvas).
 * ------------------------------------------------------------------ */

interface WeightItem {
  name: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  value: number;
  desc: string;
}

const WEIGHTS: WeightItem[] = [
  { name: 'normal', value: 400, desc: 'Paragraphs, helper texts, article body' },
  { name: 'medium', value: 500, desc: 'Button texts, labels, CTA texts' },
  { name: 'semibold', value: 600, desc: 'Main headings' },
  { name: 'bold', value: 700, desc: 'H1 headings in hero sections' },
  { name: 'extrabold', value: 800, desc: 'H1 headings in hero sections' },
];

interface SizeItem {
  /** Tailwind-style class name, e.g. text-2xl */
  className: string;
  /** Bare size token, e.g. 2xl (used to build the modifier class) */
  token: string;
  px: number;
  rem: string;
}

const SIZES: SizeItem[] = [
  { className: 'text-xxs', token: 'xxs', px: 8, rem: '0.5rem' },
  { className: 'text-xs', token: 'xs', px: 12, rem: '0.75rem' },
  { className: 'text-sm', token: 'sm', px: 14, rem: '0.875rem' },
  { className: 'text-base', token: 'base', px: 16, rem: '1rem' },
  { className: 'text-lg', token: 'lg', px: 18, rem: '1.125rem' },
  { className: 'text-xl', token: 'xl', px: 20, rem: '1.25rem' },
  { className: 'text-2xl', token: '2xl', px: 24, rem: '1.5rem' },
  { className: 'text-3xl', token: '3xl', px: 30, rem: '1.875rem' },
  { className: 'text-4xl', token: '4xl', px: 36, rem: '2.25rem' },
  { className: 'text-5xl', token: '5xl', px: 48, rem: '3rem' },
  { className: 'text-6xl', token: '6xl', px: 60, rem: '3.75rem' },
];

interface HeadingItem {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  px: number;
  weight: number;
  tracking?: 'tight';
  sample: string;
}

const HEADINGS: HeadingItem[] = [
  { level: 1, px: 48, weight: 700, tracking: 'tight', sample: 'Flowbite Design System' },
  { level: 2, px: 36, weight: 600, tracking: 'tight', sample: 'Typography' },
  { level: 3, px: 30, weight: 600, sample: 'Section Heading' },
  { level: 4, px: 24, weight: 600, sample: 'Subsection Heading' },
  { level: 5, px: 20, weight: 600, sample: 'Card Title' },
  { level: 6, px: 16, weight: 500, sample: 'Small Title' },
];

interface BodyItem {
  key: 'base' | 'small' | 'caption';
  name: string;
  px: number;
  weight: number;
  leading: string;
  sample: string;
}

const BODIES: BodyItem[] = [
  {
    key: 'base',
    name: 'Body base',
    px: 16,
    weight: 400,
    leading: 'leading-normal',
    sample:
      'Flowbite is an open-source UI component library built on top of Tailwind CSS, giving developers ready-made components to build modern web applications faster without sacrificing design consistency.',
  },
  {
    key: 'small',
    name: 'Body small',
    px: 14,
    weight: 400,
    leading: 'leading-normal',
    sample:
      'Use body small for secondary content, table cells, and dense interfaces where vertical space is constrained but readability still matters.',
  },
  {
    key: 'caption',
    name: 'Caption',
    px: 12,
    weight: 400,
    leading: 'leading-normal',
    sample:
      'Captions carry metadata, helper text, and small annotations beneath form fields, images, or data points.',
  },
];

/* ------------------------------------------------------------------ *
 * Section renderers
 * ------------------------------------------------------------------ */

const FontFamilySection = () => (
  <section className="flowbite-typography__section">
    <div className="flowbite-typography__section-head">
      <h2 className="flowbite-typography__section-title">Font Family</h2>
      <span className="flowbite-typography__section-hint">1 family · sans-serif</span>
    </div>
    <div className="flowbite-typography__family">
      <div className="flowbite-typography__family-name">Inter</div>
      <div className="flowbite-typography__family-sample">Flowbite UI</div>
      <p className="flowbite-typography__family-desc">
        Inter is the default sans-serif typeface of the Flowbite Design System.
        It is a variable font engineered for screen readability, with clear
        letterforms across every weight from 400 (normal) to 800 (extrabold).
      </p>
    </div>
  </section>
);

const FontWeightsSection = () => (
  <section className="flowbite-typography__section">
    <div className="flowbite-typography__section-head">
      <h2 className="flowbite-typography__section-title">Font Weights</h2>
      <span className="flowbite-typography__section-hint">5 steps · 400 → 800</span>
    </div>
    <div className="flowbite-typography__rows">
      {WEIGHTS.map((w) => (
        <div className="flowbite-typography__row" key={w.name}>
          <span className="flowbite-typography__row-label" title={w.desc}>
            {w.name}
          </span>
          <span className="flowbite-typography__row-value">{w.value}</span>
          <span
            className={`flowbite-typography__row-sample flowbite-typography__sample--w-${w.name}`}
          >
            Flowbite UI
          </span>
        </div>
      ))}
    </div>
  </section>
);

const FontSizesSection = () => (
  <section className="flowbite-typography__section">
    <div className="flowbite-typography__section-head">
      <h2 className="flowbite-typography__section-title">Font Sizes</h2>
      <span className="flowbite-typography__section-hint">11 steps · 8px → 60px · semibold</span>
    </div>
    <div className="flowbite-typography__rows">
      {SIZES.map((s) => (
        <div className="flowbite-typography__row" key={s.className}>
          <span className="flowbite-typography__row-label">.{s.className}</span>
          <span className="flowbite-typography__row-value">
            {s.px}px · {s.rem}
          </span>
          <span
            className={`flowbite-typography__row-sample flowbite-typography__sample--w-semibold flowbite-typography__sample--s-${s.token}`}
          >
            Flowbite UI
          </span>
        </div>
      ))}
    </div>
  </section>
);

const HeadingsSection = () => (
  <section className="flowbite-typography__section">
    <div className="flowbite-typography__section-head">
      <h2 className="flowbite-typography__section-title">Headings</h2>
      <span className="flowbite-typography__section-hint">H1 → H6 · Inter</span>
    </div>
    <div className="flowbite-typography__headings-list">
      {HEADINGS.map((h) => {
        const Tag = `h${h.level}` as React.ElementType;
        const meta = [
          `H${h.level}`,
          `${h.px}px`,
          String(h.weight),
          h.tracking ?? null,
        ]
          .filter(Boolean)
          .join(' · ');
        return (
          <div className="flowbite-typography__heading-item" key={h.level}>
            <span className="flowbite-typography__heading-meta">{meta}</span>
            <Tag className={`flowbite-typography__heading--h${h.level}`}>{h.sample}</Tag>
          </div>
        );
      })}
    </div>
  </section>
);

const BodyTextSection = () => (
  <section className="flowbite-typography__section">
    <div className="flowbite-typography__section-head">
      <h2 className="flowbite-typography__section-title">Body Text</h2>
      <span className="flowbite-typography__section-hint">base · small · caption</span>
    </div>
    <div className="flowbite-typography__body-list">
      {BODIES.map((b) => (
        <div className="flowbite-typography__body-item" key={b.key}>
          <span className="flowbite-typography__body-meta">
            {b.name} · {b.px}px · {b.weight} · {b.leading}
          </span>
          <p className={`flowbite-typography__body--${b.key}`}>{b.sample}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ------------------------------------------------------------------ *
 * Component
 * ------------------------------------------------------------------ */

export const Typography = ({
  section = 'all',
  className = '',
}: TypographyProps) => {
  const show = (s: TypographySection) => section === 'all' || section === s;

  const rootClass = ['flowbite-typography', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClass}>
      {section === 'all' && (
        <>
          <h1 className="flowbite-typography__title">Typography</h1>
          <p className="flowbite-typography__lede">
            Type tokens for the Flowbite Design System. Inter drives every
            interface, from 8px captions to 60px display headings, across five
            weights from normal to extrabold.
          </p>
        </>
      )}
      {show('family') && <FontFamilySection key="family" />}
      {show('weights') && <FontWeightsSection key="weights" />}
      {show('sizes') && <FontSizesSection key="sizes" />}
      {show('headings') && <HeadingsSection key="headings" />}
      {show('body') && <BodyTextSection key="body" />}
    </div>
  );
};

export default Typography;
