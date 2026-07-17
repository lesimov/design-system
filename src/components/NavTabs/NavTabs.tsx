import React from 'react';
import './nav-tabs.css';

export type NavTabsSection = 'default' | 'pills' | 'border-bottom' | 'vertical-pills' | 'button' | 'all';

export interface NavTabsProps {
  section?: NavTabsSection;
  className?: string;
}

/* Inline SVG icons */
const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12L12 3L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M4 22C4 18.6863 7.58172 16 12 16C16.4183 16 20 18.6863 20 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 3V15M12 15L8 11M12 15L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface NavItemProps {
  text: string;
  icon: React.ReactNode;
  active?: boolean;
  variant?: 'default' | 'pill' | 'border-bottom' | 'vertical-pill' | 'button';
}

const NavItem = ({ text, icon, active = false, variant = 'default' }: NavItemProps) => {
  const variantClass = variant !== 'default' ? `flowbite-navtabs-item--${variant}` : '';
  const activeClass = active ? `flowbite-navtabs-item--${variant}-active` : '';
  return (
    <div className={`flowbite-navtabs-item ${variantClass} ${activeClass}`}>
      <span className="flowbite-navtabs-item__icon">{icon}</span>
      <span className="flowbite-navtabs-item__text">{text}</span>
    </div>
  );
};

/* Default tabs */
const DefaultSection = () => (
  <div className="flowbite-navtabs-section">
    <h2 className="flowbite-navtabs-section__title">Default</h2>
    <div className="flowbite-navtabs-tabbar">
      <NavItem text="Home" icon={<HomeIcon />} />
      <NavItem text="Settings" icon={<SettingsIcon />} active />
      <NavItem text="My account" icon={<UserIcon />} />
      <NavItem text="Downloads" icon={<DownloadIcon />} />
    </div>
  </div>
);

/* Pills */
const PillsSection = () => (
  <div className="flowbite-navtabs-section">
    <h2 className="flowbite-navtabs-section__title">Pills</h2>
    <div className="flowbite-navtabs-tabbar">
      <NavItem text="Home" icon={<HomeIcon />} variant="pill" />
      <NavItem text="Settings" icon={<SettingsIcon />} variant="pill" active />
      <NavItem text="My account" icon={<UserIcon />} variant="pill" />
      <NavItem text="Downloads" icon={<DownloadIcon />} variant="pill" />
    </div>
  </div>
);

/* Border bottom */
const BorderBottomSection = () => (
  <div className="flowbite-navtabs-section">
    <h2 className="flowbite-navtabs-section__title">Border bottom</h2>
    <div className="flowbite-navtabs-tabbar flowbite-navtabs-tabbar--border-bottom">
      <NavItem text="Home" icon={<HomeIcon />} variant="border-bottom" />
      <NavItem text="Settings" icon={<SettingsIcon />} variant="border-bottom" active />
      <NavItem text="My account" icon={<UserIcon />} variant="border-bottom" />
    </div>
  </div>
);

/* Vertical pills */
const VerticalPillsSection = () => (
  <div className="flowbite-navtabs-section">
    <h2 className="flowbite-navtabs-section__title">Vertical pills</h2>
    <div className="flowbite-navtabs-tabbar flowbite-navtabs-tabbar--vertical">
      <NavItem text="Home" icon={<HomeIcon />} variant="vertical-pill" />
      <NavItem text="Settings" icon={<SettingsIcon />} variant="vertical-pill" active />
      <NavItem text="My account" icon={<UserIcon />} variant="vertical-pill" />
      <NavItem text="Downloads" icon={<DownloadIcon />} variant="vertical-pill" />
    </div>
  </div>
);

/* Button tabs */
const ButtonSection = () => (
  <div className="flowbite-navtabs-section">
    <h2 className="flowbite-navtabs-section__title">Button</h2>
    <div className="flowbite-navtabs-tabbar flowbite-navtabs-tabbar--button">
      <NavItem text="Home" icon={<HomeIcon />} variant="button" />
      <NavItem text="Settings" icon={<SettingsIcon />} variant="button" active />
      <NavItem text="My account" icon={<UserIcon />} variant="button" />
    </div>
  </div>
);

const SECTION_DEFS: { key: Exclude<NavTabsSection, 'all'>; title: string; node: React.ReactNode }[] = [
  { key: 'default', title: 'Default', node: <DefaultSection /> },
  { key: 'pills', title: 'Pills', node: <PillsSection /> },
  { key: 'border-bottom', title: 'Border bottom', node: <BorderBottomSection /> },
  { key: 'vertical-pills', title: 'Vertical pills', node: <VerticalPillsSection /> },
  { key: 'button', title: 'Button', node: <ButtonSection /> },
];

export const NavTabs = ({ section = 'all', className = '' }: NavTabsProps) => {
  if (section === 'all') {
    return (
      <div className={`flowbite-navtabs-showcase ${className}`}>
        <DefaultSection />
        <PillsSection />
        <BorderBottomSection />
        <VerticalPillsSection />
        <ButtonSection />
      </div>
    );
  }
  const def = SECTION_DEFS.find((d) => d.key === section);
  if (!def) return null;
  return <div className={`flowbite-navtabs-showcase ${className}`}>{def.node}</div>;
};

export default NavTabs;