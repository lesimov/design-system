import type { ReactNode } from 'react';
import './dropdowns.css';

/* ---------- Types ---------- */

export type DropdownSection = 'items' | 'states' | 'all';

export interface DropdownsProps {
  /** Showcase section to render */
  section?: DropdownSection;
  /** Additional class names */
  className?: string;
}

/* ---------- Inline SVG icons (outline style) ---------- */

const UserAddIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M1 14c0-2.5 2.5-4 5-4s5 1.5 5 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12.5 5v5M15 7.5h-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const AngleRightIcon = ({ className }: { className?: string }) => (
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
      d="M6 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckboxCheckedIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="0.5"
      y="0.5"
      width="15"
      height="15"
      rx="3"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      d="M4.5 8l2.5 2.5 4.5-5"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RadioCheckedIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7.5" fill="currentColor" stroke="currentColor" />
    <circle cx="8" cy="8" r="2.5" fill="#FFFFFF" />
  </svg>
);

const ToggleOffIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="32"
    height="20"
    viewBox="0 0 32 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="0.5" y="0.5" width="31" height="19" rx="9.5" fill="#E5E7EB" stroke="#E5E7EB" />
    <circle cx="10" cy="10" r="7.5" fill="#FFFFFF" stroke="#FFFFFF" />
  </svg>
);

const ToggleOnIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="32"
    height="20"
    viewBox="0 0 32 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="0.5" y="0.5" width="31" height="19" rx="9.5" fill="#1447E6" stroke="#1447E6" />
    <circle cx="22" cy="10" r="7.5" fill="#FFFFFF" stroke="#FFFFFF" />
  </svg>
);

/* ---------- Menu item types ---------- */

type DropdownItemType =
  | 'default'
  | 'secondary-text'
  | 'two-icons'
  | 'left-form-checkbox'
  | 'left-form-radio'
  | 'divider'
  | 'with-toggle';


interface DropdownItemProps {
  type: DropdownItemType;
  state?: 'initial' | 'hover' | 'disabled';
  label?: string;
  secondaryText?: string;
  helperText?: string;
  toggled?: boolean;
}

/* ---------- Single dropdown item renderer ---------- */

const DropdownItem = ({
  type,
  state = 'initial',
  label = 'First Action',
  secondaryText,
  helperText,
  toggled = false,
}: DropdownItemProps) => {
  if (type === 'divider') {
    return <div className="flowbite-dropdown-divider" />;
  }

  const itemClass = [
    'flowbite-dropdown-item',
    type === 'secondary-text' && 'flowbite-dropdown-item--space-between',
    state === 'hover' && 'flowbite-dropdown-item--hover',
    state === 'disabled' && 'flowbite-dropdown-item--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  const renderIcon = () => {
    if (type === 'left-form-checkbox') {
      return (
        <span className="flowbite-dropdown-item__checkbox">
          <CheckboxCheckedIcon />
        </span>
      );
    }
    if (type === 'left-form-radio') {
      return (
        <span className="flowbite-dropdown-item__radio">
          <RadioCheckedIcon />
        </span>
      );
    }
    return (
      <span className="flowbite-dropdown-item__icon">
        <UserAddIcon />
      </span>
    );
  };

  const renderEndIcon = () => {
    if (type === 'two-icons') {
      return (
        <span className="flowbite-dropdown-item__end-icon">
          <AngleRightIcon />
        </span>
      );
    }
    return null;
  };

  const renderToggle = () => {
    if (type !== 'with-toggle') return null;
    return (
      <span
        className={[
          'flowbite-dropdown-item__toggle',
          toggled && 'flowbite-dropdown-item__toggle--active',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {toggled ? <ToggleOnIcon /> : <ToggleOffIcon />}
      </span>
    );
  };

  if (type === 'with-toggle') {
    return (
      <div className={itemClass}>
        <div className="flowbite-dropdown-item__content-block">
          <span className="flowbite-dropdown-item__text">{label}</span>
          {helperText && (
            <span className="flowbite-dropdown-item__helper-text">{helperText}</span>
          )}
        </div>
        {renderToggle()}
      </div>
    );
  }

  return (
    <div className={itemClass}>
      {renderIcon()}
      <span
        className={[
          'flowbite-dropdown-item__text',
          type === 'secondary-text' && 'flowbite-dropdown-item__text--grow',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {label}
      </span>
      {secondaryText && (
        <span className="flowbite-dropdown-item__secondary-text">{secondaryText}</span>
      )}
      {renderEndIcon()}
    </div>
  );
};

/* ---------- Dropdown menu shell ---------- */

interface DropdownMenuProps {
  children: ReactNode;
  wide?: boolean;
  className?: string;
}

const DropdownMenu = ({ children, wide, className = '' }: DropdownMenuProps) => (
  <div
    className={[
      'flowbite-dropdown',
      wide && 'flowbite-dropdown--wide',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    role="menu"
  >
    {children}
  </div>
);

/* ---------- Section shell ---------- */

const SectionShell = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="flowbite-dropdown-section">
    <h3 className="flowbite-dropdown-section__title">{title}</h3>
    {children}
  </section>
);

/* ---------- Section definitions ---------- */

const TYPE_DEFS: {
  type: DropdownItemType;
  label: string;
  hint: string;
  wide?: boolean;
  items?: { label: string; secondaryText?: string; helperText?: string; toggled?: boolean }[];
}[] = [
  {
    type: 'default',
    label: 'Default',
    hint: 'Icon + text · 208px · 32px item',
    items: [
      { label: 'First Action' },
      { label: 'Second Action' },
      { label: 'Third Action' },
    ],
  },
  {
    type: 'secondary-text',
    label: 'Secondary text',
    hint: 'Icon + text + count · space-between',
    items: [
      { label: 'Messages', secondaryText: '(456)' },
      { label: 'Notifications', secondaryText: '(12)' },
      { label: 'Tasks', secondaryText: '(89)' },
    ],
  },
  {
    type: 'two-icons',
    label: 'Two icons',
    hint: 'Icon + text + angle-right',
    items: [
      { label: 'Profile' },
      { label: 'Settings' },
      { label: 'Help' },
    ],
  },
  {
    type: 'left-form-checkbox',
    label: 'Left form (checkbox)',
    hint: 'Checkbox + text + count',
    items: [
      { label: 'Select all', secondaryText: '(456)' },
      { label: 'Selected', secondaryText: '(12)' },
      { label: 'Drafts', secondaryText: '(89)' },
    ],
  },
  {
    type: 'left-form-radio',
    label: 'Left form (radio)',
    hint: 'Radio + text + count',
    items: [
      { label: 'Option A', secondaryText: '(456)' },
      { label: 'Option B', secondaryText: '(12)' },
      { label: 'Option C', secondaryText: '(89)' },
    ],
  },
  {
    type: 'divider',
    label: 'Divider',
    hint: 'Horizontal line separator',
    items: [],
  },
  {
    type: 'with-toggle',
    label: 'With toggle',
    hint: 'Toggle + label + helper · 304px · shadow-md',
    wide: true,
    items: [
      { label: 'Dark mode', helperText: 'Switch to dark theme', toggled: true },
      { label: 'Notifications', helperText: 'Enable push alerts', toggled: false },
      { label: 'Auto-save', helperText: 'Save changes automatically', toggled: true },
    ],
  },
];

const STATE_DEFS: {
  type: DropdownItemType;
  state: 'initial' | 'hover' | 'disabled';
  label: string;
  color: string;
}[] = [
  { type: 'default', state: 'initial', label: 'Initial', color: '#4A5565' },
  { type: 'default', state: 'hover', label: 'Hover', color: '#101828 · bg #F3F4F6' },
  { type: 'default', state: 'disabled', label: 'Disabled', color: '#99A1AF' },
];

/* ---------- Sections ---------- */

const ItemsSection = () => (
  <SectionShell title="Dropdown Item Types">
    <div className="flowbite-dropdown-row">
      {TYPE_DEFS.map((def) => (
        <div className="flowbite-dropdown-row__item" key={def.type}>
          <span className="flowbite-dropdown-row__label">
            {def.label} — {def.hint}
          </span>
          <DropdownMenu wide={def.wide}>
            {def.type === 'divider' ? (
              <DropdownItem type="divider" />
            ) : (
              def.items?.map((item, idx) => (
                <DropdownItem
                  key={idx}
                  type={def.type}
                  label={item.label}
                  secondaryText={item.secondaryText}
                  helperText={item.helperText}
                  toggled={item.toggled}
                />
              ))
            )}
          </DropdownMenu>
        </div>
      ))}
    </div>
  </SectionShell>
);

const StatesSection = () => (
  <SectionShell title="Dropdown Item States">
    <div className="flowbite-dropdown-row">
      {STATE_DEFS.map((def) => (
        <div className="flowbite-dropdown-row__item" key={def.state}>
          <span className="flowbite-dropdown-row__label">
            {def.label} · {def.color}
          </span>
          <DropdownMenu>
            <DropdownItem type="default" state={def.state} label="First Action" />
            <DropdownItem type="default" state={def.state} label="Second Action" />
            <DropdownItem type="default" state={def.state} label="Third Action" />
          </DropdownMenu>
        </div>
      ))}
    </div>
  </SectionShell>
);

/* ---------- Main component ---------- */

export const Dropdowns = ({
  section = 'all',
  className = '',
}: DropdownsProps) => {
  switch (section) {
    case 'items':
      return <ItemsSection />;
    case 'states':
      return <StatesSection />;
    case 'all':
    default:
      return (
        <div
          className={['flowbite-dropdown-showcase', className]
            .filter(Boolean)
            .join(' ')}
        >
          <ItemsSection />
          <StatesSection />
        </div>
      );
  }
};

export default Dropdowns;