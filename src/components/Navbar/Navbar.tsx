import type { ReactNode } from 'react';
import './navbar.css';
import '../Dropdowns/dropdowns.css';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type NavbarSection = 'right-icon' | 'bordered' | 'all';

export interface NavbarProps {
  /** Which section to render */
  section?: NavbarSection;
  /** Additional class name */
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Inline SVG icons                                                   */
/* ------------------------------------------------------------------ */

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AngleDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

interface BorderedLinkProps {
  text?: string;
  hover?: boolean;
  active?: boolean;
}

const BorderedLink = ({ text = 'Nav link', hover = false, active = false }: BorderedLinkProps): ReactNode => (
  <div
    className={`flowbite-navbar-link flowbite-navbar-link--bordered${hover ? ' flowbite-navbar-link--hover' : ''}${active ? ' flowbite-navbar-link--active' : ''}`}
    role="button"
    tabIndex={0}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span className="flowbite-navbar-link__icon"><SearchIcon /></span>
      <span className="flowbite-navbar-link__text">{text}</span>
    </div>
    <span className="flowbite-navbar-link__icon"><AngleDownIcon /></span>
  </div>
);

interface RightIconLinkProps {
  text?: string;
}

const RightIconLink = ({ text = 'Nav link' }: RightIconLinkProps): ReactNode => (
  <div className="flowbite-navbar-link" role="button" tabIndex={0}>
    <span className="flowbite-navbar-link__text">{text}</span>
    <span className="flowbite-navbar-link__icon"><AngleDownIcon /></span>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Section components                                                 */
/* ------------------------------------------------------------------ */
const dropdownItems = (_text: string) => (
  <div className="flowbite-dropdown" role="menu" style={{ marginTop: 4, position: 'absolute', zIndex: 50 }}>
    <div className="flowbite-dropdown-item" role="menuitem">
      <span className="flowbite-dropdown-item__icon"><SearchIcon /></span>
      <span className="flowbite-dropdown-item__text">Action 1</span>
    </div>
    <div className="flowbite-dropdown-item flowbite-dropdown-item--hover" role="menuitem">
      <span className="flowbite-dropdown-item__icon"><SearchIcon /></span>
      <span className="flowbite-dropdown-item__text">Action 2</span>
    </div>
    <div className="flowbite-dropdown-divider" />
    <div className="flowbite-dropdown-item" role="menuitem">
      <span className="flowbite-dropdown-item__icon"><SearchIcon /></span>
      <span className="flowbite-dropdown-item__text">Action 3</span>
    </div>
  </div>
);

const RightIconSection = () => (
  <div className="flowbite-navbar-section">
    <h2 className="flowbite-navbar-section__title">Right icon</h2>
    <div className="flowbite-navbar-row" style={{ alignItems: 'flex-start' }}>
      <div style={{ position: 'relative' }}>
        <RightIconLink text="Nav link" />
        {dropdownItems('Nav link')}
      </div>
    </div>
  </div>
);

const BorderedSection = () => (
  <div className="flowbite-navbar-section">
    <h2 className="flowbite-navbar-section__title">Bordered</h2>
    <p className="flowbite-navbar-state-label">Initial</p>
    <div className="flowbite-navbar-row" style={{ alignItems: 'flex-start' }}>
      <div style={{ position: 'relative' }}>
        <BorderedLink text="Nav link" />
      </div>
      <div style={{ position: 'relative' }}>
        <BorderedLink text="Another link" />
      </div>
    </div>
    <p className="flowbite-navbar-state-label">Initial + Dropdown</p>
    <div className="flowbite-navbar-row" style={{ alignItems: 'flex-start' }}>
      <div style={{ position: 'relative' }}>
        <BorderedLink text="Nav link" />
        {dropdownItems('Nav link')}
      </div>
    </div>
    <p className="flowbite-navbar-state-label">Hover</p>
    <div className="flowbite-navbar-row">
      <BorderedLink text="Nav link" hover />
    </div>
    <p className="flowbite-navbar-state-label">Active</p>
    <div className="flowbite-navbar-row">
      <BorderedLink text="Nav link" active />
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Section definitions                                                */
/* ------------------------------------------------------------------ */

const SECTION_DEFS: { key: Exclude<NavbarSection, 'all'>; node: ReactNode }[] = [
  { key: 'right-icon', node: <RightIconSection /> },
  { key: 'bordered', node: <BorderedSection /> },
];

/* ------------------------------------------------------------------ */
/*  Navbar component                                                   */
/* ------------------------------------------------------------------ */

export const Navbar = ({ section = 'all', className = '' }: NavbarProps) => {
  if (section === 'all') {
    return (
      <div className={`flowbite-navbar-showcase ${className}`.trim()}>
        <RightIconSection />
        <BorderedSection />
      </div>
    );
  }
  const def = SECTION_DEFS.find((d) => d.key === section);
  if (!def) return null;
  return <div className={`flowbite-navbar-showcase ${className}`.trim()}>{def.node}</div>;
};

export default Navbar;
