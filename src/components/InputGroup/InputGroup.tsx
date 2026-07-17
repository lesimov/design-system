import React from 'react';
import './inputgroup.css';

export type InputGroupSection = 'sizes' | 'colors' | 'types' | 'all';
export type InputGroupSize = 'xs' | 'sm' | 'base' | 'l';
export type InputGroupColor = 'gray' | 'white';
export type InputGroupIconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'chevron-down'
  | 'plus'
  | 'minus'
  | 'home';

export interface InputGroupItem {
  /** Button text content */
  text?: string;
  /** Icon shown before the text (or alone when iconOnly) */
  icon?: InputGroupIconName;
  /** Render the icon with no text */
  iconOnly?: boolean;
}

export interface InputGroupProps {
  /** Which section(s) to render. Defaults to 'all'. */
  section?: InputGroupSection;
  /** Button size. Defaults to 'sm'. */
  size?: InputGroupSize;
  /** Fill color. Defaults to 'gray'. */
  color?: InputGroupColor;
  /** Custom button configs — when provided, a single group is rendered. */
  items?: InputGroupItem[];
  /** Additional class names on the root container. */
  className?: string;
}

/* ------------------------------------------------------------------ *
 * Icon set — 16×16, outline, stroke=currentColor, strokeWidth=2.
 * ------------------------------------------------------------------ */

const ArrowLeftIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M13 8H3.5M6.5 5 3.5 8l3 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3 8h9.5M9.5 5l3 3-3 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 6.5 8 10.5l4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 3.5v9M3.5 8h9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3.5 8h9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HomeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2.5 8.5 8 3l5.5 5.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 7.5V13h7V7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 13v-3.5h3V13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ICONS: Record<InputGroupIconName, React.FC> = {
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'chevron-down': ChevronDownIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  home: HomeIcon,
};

/* ------------------------------------------------------------------ *
 * Token data — transcribed from Figma node 1149-31693
 * (Flowbite Design System · Button group canvas).
 * ------------------------------------------------------------------ */

interface SizeDef {
  key: InputGroupSize;
  label: string;
  height: string;
  pad: string;
}

const SIZES: SizeDef[] = [
  { key: 'xs', label: 'xs', height: '32px', pad: '6px / 10px' },
  { key: 'sm', label: 'sm', height: '36px', pad: '8px / 12px' },
  { key: 'base', label: 'base', height: '40px', pad: '10px / 16px' },
  { key: 'l', label: 'l', height: '48px', pad: '12px / 20px' },
];

interface ColorDef {
  key: InputGroupColor;
  label: string;
  fill: string;
}

const COLORS: ColorDef[] = [
  { key: 'gray', label: 'Gray', fill: '#F9FAFB' },
  { key: 'white', label: 'White', fill: '#FFFFFF' },
];

const fiveButtons: InputGroupItem[] = [
  { text: 'Button' },
  { text: 'Button' },
  { text: 'Button' },
  { text: 'Button' },
  { text: 'Button' },
];

interface TypeExample {
  key: string;
  label: string;
  hint: string;
  items: InputGroupItem[];
}

const TYPE_EXAMPLES: TypeExample[] = [
  {
    key: 'default',
    label: 'Default',
    hint: '5 buttons',
    items: [
      { text: 'Button text' },
      { text: 'Button' },
      { text: 'Button' },
      { text: 'Button' },
      { text: 'Button text' },
    ],
  },
  {
    key: 'numbers',
    label: 'Numbers',
    hint: '1 → 10',
    items: Array.from({ length: 10 }, (_, i) => ({ text: String(i + 1) })),
  },
  {
    key: 'dropdown',
    label: 'With dropdown',
    hint: 'chevron on last',
    items: [
      { text: 'Button' },
      { text: 'Button' },
      { text: 'Button' },
      { text: 'Button' },
      { text: 'Button text', icon: 'chevron-down' },
    ],
  },
  {
    key: 'plus-minus',
    label: 'Plus & minus',
    hint: '3 buttons',
    items: [
      { icon: 'plus', iconOnly: true },
      { text: 'Button text' },
      { icon: 'minus', iconOnly: true },
    ],
  },
  {
    key: 'only-icons',
    label: 'Only icons',
    hint: 'arrow · home · arrow',
    items: [
      { icon: 'arrow-left', iconOnly: true },
      { icon: 'home', iconOnly: true },
      { icon: 'arrow-right', iconOnly: true },
    ],
  },
  {
    key: 'two',
    label: '2 buttons',
    hint: 'pair',
    items: [{ text: 'Button' }, { text: 'Button' }],
  },
];

/* ------------------------------------------------------------------ *
 * Button group
 * ------------------------------------------------------------------ */

interface ButtonGroupProps {
  items: InputGroupItem[];
  size?: InputGroupSize;
  color?: InputGroupColor;
}

const ButtonGroup = ({
  items,
  size = 'sm',
  color = 'gray',
}: ButtonGroupProps) => (
  <div
    className={[
      'flowbite-input-group__group',
      `flowbite-input-group__group--${color}`,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {items.map((item, i) => {
      const Icon = item.icon ? ICONS[item.icon] : null;
      const classNames = [
        'flowbite-input-group__button',
        `flowbite-input-group__button--${size}`,
        item.iconOnly ? 'flowbite-input-group__button--icon-only' : '',
      ]
        .filter(Boolean)
        .join(' ');
      return (
        <button key={i} type="button" className={classNames}>
          {Icon && (
            <span className="flowbite-input-group__button-icon">
              <Icon />
            </span>
          )}
          {item.text && (
            <span className="flowbite-input-group__button-text">
              {item.text}
            </span>
          )}
        </button>
      );
    })}
  </div>
);

/* ------------------------------------------------------------------ *
 * Section renderers
 * ------------------------------------------------------------------ */

const SizesSection = () => (
  <section className="flowbite-input-group__section">
    <div className="flowbite-input-group__section-head">
      <h2 className="flowbite-input-group__section-title">Sizes</h2>
      <span className="flowbite-input-group__section-hint">
        4 sizes · 32 → 48px
      </span>
    </div>
    <div className="flowbite-input-group__rows">
      {SIZES.map((s) => (
        <div className="flowbite-input-group__row" key={s.key}>
          <span
            className="flowbite-input-group__row-label"
            title={`height ${s.height} · padding ${s.pad}`}
          >
            {s.label}
          </span>
          <ButtonGroup items={fiveButtons} size={s.key} color="gray" />
        </div>
      ))}
    </div>
  </section>
);

const ColorsSection = () => (
  <section className="flowbite-input-group__section">
    <div className="flowbite-input-group__section-head">
      <h2 className="flowbite-input-group__section-title">Colors</h2>
      <span className="flowbite-input-group__section-hint">
        2 fills · gray-50 · white
      </span>
    </div>
    <div className="flowbite-input-group__pair">
      {COLORS.map((c) => (
        <div className="flowbite-input-group__pair-item" key={c.key}>
          <span className="flowbite-input-group__row-label">{c.label}</span>
          <ButtonGroup items={fiveButtons} size="base" color={c.key} />
        </div>
      ))}
    </div>
  </section>
);

const TypesSection = () => (
  <section className="flowbite-input-group__section">
    <div className="flowbite-input-group__section-head">
      <h2 className="flowbite-input-group__section-title">Types</h2>
      <span className="flowbite-input-group__section-hint">
        6 examples · default size
      </span>
    </div>
    <div className="flowbite-input-group__rows">
      {TYPE_EXAMPLES.map((t) => (
        <div className="flowbite-input-group__row" key={t.key}>
          <span className="flowbite-input-group__row-label" title={t.hint}>
            {t.label}
          </span>
          <ButtonGroup items={t.items} size="sm" color="gray" />
        </div>
      ))}
    </div>
  </section>
);

const KitchenSinkSection = () => (
  <section className="flowbite-input-group__section">
    <div className="flowbite-input-group__section-head">
      <h2 className="flowbite-input-group__section-title">All Variants</h2>
      <span className="flowbite-input-group__section-hint">
        4 sizes × 2 colors
      </span>
    </div>
    <div className="flowbite-input-group__matrix">
      {COLORS.map((c) => (
        <div className="flowbite-input-group__matrix-col" key={c.key}>
          <span className="flowbite-input-group__matrix-col-title">
            {c.label}
          </span>
          {SIZES.map((s) => (
            <ButtonGroup
              items={fiveButtons}
              size={s.key}
              color={c.key}
              key={s.key}
            />
          ))}
        </div>
      ))}
    </div>
  </section>
);

/* ------------------------------------------------------------------ *
 * Component
 * ------------------------------------------------------------------ */

export const InputGroup = ({
  section = 'all',
  size = 'sm',
  color = 'gray',
  items,
  className = '',
}: InputGroupProps) => {
  const show = (s: InputGroupSection) => section === 'all' || section === s;

  const rootClass = ['flowbite-input-group', className]
    .filter(Boolean)
    .join(' ');

  // Custom group via the `items` prop — renders a single button group,
  // used by the Numbers / WithDropdown / OnlyIcons showcase stories.
  if (items) {
    return (
      <div className={rootClass}>
        <ButtonGroup items={items} size={size} color={color} />
      </div>
    );
  }

  return (
    <div className={rootClass}>
      {section === 'all' && (
        <>
          <h1 className="flowbite-input-group__title">Input Group</h1>
          <p className="flowbite-input-group__lede">
            Button group tokens for the Flowbite Design System. Inline-flex
            groups of medium-weight Inter buttons with 1px gray borders,
            overlapping at −1px and rounded only at the outer corners, across
            four sizes and two fills.
          </p>
        </>
      )}
      {show('sizes') && <SizesSection key="sizes" />}
      {show('colors') && <ColorsSection key="colors" />}
      {show('types') && <TypesSection key="types" />}
      {section === 'all' && <KitchenSinkSection key="kitchen-sink" />}
    </div>
  );
};

export default InputGroup;
