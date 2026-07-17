import type { ReactNode } from 'react';
import './breadcrumbs.css';

/* ---------- Types ---------- */

export type BreadcrumbVariant =
  | 'default'
  | 'dropdown'
  | 'badge'
  | 'group-buttons'
  | 'only-buttons'
  | 'background';

export type BreadcrumbItemState = 'initial' | 'hover' | 'active';

export type BreadcrumbsSection = 'types' | 'states' | 'all';

export interface BreadcrumbItem {
  /** Item text label */
  text: string;
  /** Optional leading icon name (currently supports 'home') */
  icon?: string;
  /** Whether this is the active/current item (renders in the active color) */
  active?: boolean;
}

export interface BreadcrumbsProps {
  /** Showcase section to render (ignored when `items` is provided) */
  section?: BreadcrumbsSection;
  /** Custom breadcrumb trail — when provided, renders a single breadcrumb */
  items?: BreadcrumbItem[];
  /** Breadcrumb variant */
  variant?: BreadcrumbVariant;
  /** Additional class names */
  className?: string;
}

/* ---------- Inline SVG icons (outline style) ---------- */

const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2.5 7.5L8 3l5.5 4.5V13a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V7.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 13.5V10h3v3.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AngleRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------- Sample data ---------- */

const defaultTrail: BreadcrumbItem[] = [
  { icon: 'home', text: 'Home' },
  { text: 'E-commerce' },
  { text: 'Users' },
  { text: 'All users', active: true },
];

/* ---------- Core breadcrumb trail ---------- */

interface BreadcrumbTrailProps {
  items: BreadcrumbItem[];
  variant?: BreadcrumbVariant;
  className?: string;
}

const BreadcrumbTrail = ({
  items,
  variant = 'default',
  className = '',
}: BreadcrumbTrailProps) => {
  const isOnlyButtons = variant === 'only-buttons';

  const navClass = [
    'flowbite-breadcrumbs',
    variant !== 'default' && `flowbite-breadcrumbs--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClass} aria-label="Breadcrumb">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        const itemClass = [
          'flowbite-breadcrumbs__item',
          isLast && 'flowbite-breadcrumbs__item--active',
          isOnlyButtons && 'flowbite-breadcrumbs__item--button',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <span className={itemClass} key={idx}>
            {item.icon === 'home' && (
              <HomeIcon className="flowbite-breadcrumbs__icon" />
            )}
            <span className="flowbite-breadcrumbs__text">{item.text}</span>
            {!isLast && !isOnlyButtons && (
              <AngleRightIcon className="flowbite-breadcrumbs__separator" />
            )}
            {isLast && variant === 'dropdown' && (
              <button
                type="button"
                className="flowbite-breadcrumbs__dropdown"
                aria-label="Show options"
              >
                <ChevronDownIcon />
              </button>
            )}
            {isLast && variant === 'badge' && (
              <span className="flowbite-breadcrumbs__badge">New</span>
            )}
          </span>
        );
      })}
      {variant === 'group-buttons' && (
        <span className="flowbite-breadcrumbs__group">
          <button type="button" className="flowbite-breadcrumbs__group-btn">
            Edit
          </button>
          <button type="button" className="flowbite-breadcrumbs__group-btn">
            Delete
          </button>
        </span>
      )}
    </nav>
  );
};

/* ---------- Section shell ---------- */

const SectionShell = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="flowbite-breadcrumbs-section">
    <h3 className="flowbite-breadcrumbs-section__title">{title}</h3>
    {children}
  </section>
);

/* ---------- Section definitions ---------- */

const TYPE_DEFS: { variant: BreadcrumbVariant; label: string; hint: string }[] = [
  {
    variant: 'default',
    label: 'Default',
    hint: 'Simple trail with angle-right separators',
  },
  {
    variant: 'dropdown',
    label: 'With Dropdown',
    hint: 'Last item has a chevron-down dropdown button',
  },
  {
    variant: 'badge',
    label: 'With Badge',
    hint: 'Last item has a pill badge',
  },
  {
    variant: 'group-buttons',
    label: 'With Group Buttons',
    hint: 'Trail followed by a 2-button group',
  },
  {
    variant: 'only-buttons',
    label: 'Only Buttons',
    hint: 'Items styled as buttons · 4px gap',
  },
  {
    variant: 'background',
    label: 'Background',
    hint: 'Container with gray-50 bg · 12px radius',
  },
];

const STATE_DEFS: { state: BreadcrumbItemState; label: string; color: string }[] = [
  { state: 'initial', label: 'Initial', color: '#4A5565' },
  { state: 'hover', label: 'Hover', color: '#1447E6' },
  { state: 'active', label: 'Active', color: '#6A7282' },
];

/* ---------- Sections ---------- */

const TypesSection = () => (
  <SectionShell title="Breadcrumb Types">
    <div className="flowbite-breadcrumbs-row">
      {TYPE_DEFS.map((def) => (
        <div className="flowbite-breadcrumbs-row__item" key={def.variant}>
          <span className="flowbite-breadcrumbs-row__label">
            {def.label} — {def.hint}
          </span>
          <BreadcrumbTrail items={defaultTrail} variant={def.variant} />
        </div>
      ))}
    </div>
  </SectionShell>
);

const StatesSection = () => (
  <SectionShell title="Breadcrumb Item States">
    <div className="flowbite-breadcrumbs-row">
      {STATE_DEFS.map((def) => (
        <div className="flowbite-breadcrumbs-row__item" key={def.state}>
          <span className="flowbite-breadcrumbs-row__label">
            {def.label} · {def.color}
          </span>
          <span
            className={[
              'flowbite-breadcrumbs__item',
              `flowbite-breadcrumbs__item--${def.state}`,
            ].join(' ')}
          >
            <HomeIcon className="flowbite-breadcrumbs__icon" />
            <span className="flowbite-breadcrumbs__text">Home</span>
            <AngleRightIcon className="flowbite-breadcrumbs__separator" />
          </span>
        </div>
      ))}
    </div>
  </SectionShell>
);

/* ---------- Main component ---------- */

export const Breadcrumbs = ({
  section = 'all',
  items,
  variant = 'default',
  className = '',
}: BreadcrumbsProps) => {
  // Custom single trail: when items are provided, render one breadcrumb.
  if (items && items.length > 0) {
    return <BreadcrumbTrail items={items} variant={variant} className={className} />;
  }

  switch (section) {
    case 'types':
      return <TypesSection />;
    case 'states':
      return <StatesSection />;
    case 'all':
    default:
      return (
        <div
          className={['flowbite-breadcrumbs-showcase', className]
            .filter(Boolean)
            .join(' ')}
        >
          <TypesSection />
          <StatesSection />
        </div>
      );
  }
};

export default Breadcrumbs;
