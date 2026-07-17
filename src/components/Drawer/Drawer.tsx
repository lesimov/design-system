import type { ReactNode } from 'react';
import './drawer.css';

/* ---------- Types ---------- */

export type DrawerSection = 'default' | 'with-image' | 'with-list' | 'with-form' | 'all';

export interface DrawerProps {
  /** Showcase section to render */
  section?: DrawerSection;
  /** Additional class names */
  className?: string;
}

/* ---------- Inline SVG icons (outline style) ---------- */

const CloseIcon = ({ className }: { className?: string }) => (
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
      d="M12 4L4 12M4 4l8 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const InfoCircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 7.5v4M8 5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);


const ArrowRightIcon = ({ className }: { className?: string }) => (
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChartPieIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 2v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FileLinesIcon = ({ className }: { className?: string }) => (
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
      d="M4 1h5l4 4v9a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M5 7h6M5 9.5h6M5 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 1v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const ShoppingBagIcon = ({ className }: { className?: string }) => (
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
      d="M3 4.5h10l1 10H2l1-10z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M5.5 4.5V3a2.5 2.5 0 015 0v1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 8.5L7 10l3.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 14c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 4l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ---------- Drawer Panel ---------- */

interface DrawerPanelProps {
  children: ReactNode;
  className?: string;
  width?: number;
}

const DrawerPanel = ({ children, className = '', width = 384 }: DrawerPanelProps) => (
  <div
    className={`flowbite-drawer-panel ${className}`}
    style={{ width }}
  >
    {children}
  </div>
);

/* ---------- Variant: Default ---------- */

const DefaultDrawer = () => (
  <DrawerPanel width={384}>
    <div className="flowbite-drawer__header">
      <div className="flowbite-drawer__header-left">
        <InfoCircleIcon className="flowbite-drawer__icon" />
        <span className="flowbite-drawer__heading">Drawer heading</span>
      </div>
      <button className="flowbite-drawer__close" aria-label="Close drawer">
        <CloseIcon />
      </button>
    </div>
    <div className="flowbite-drawer__content">
      <p className="flowbite-drawer__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        condimentum, eros non fermentum vehicula, tortor neque ultricies.
      </p>
    </div>
    <div className="flowbite-drawer__actions">
      <button className="flowbite-drawer__btn flowbite-drawer__btn--secondary">
        Pricing &amp; FAQ
      </button>
      <button className="flowbite-drawer__btn flowbite-drawer__btn--primary">
        Get access
      </button>
    </div>
  </DrawerPanel>
);

/* ---------- Variant: With Image ---------- */

const WithImageDrawer = () => (
  <DrawerPanel width={320}>
    <div className="flowbite-drawer__header">
      <div className="flowbite-drawer__header-left">
        <span className="flowbite-drawer__logo">Logo</span>
      </div>
      <button className="flowbite-drawer__close" aria-label="Close drawer">
        <CloseIcon />
      </button>
    </div>
    <div className="flowbite-drawer__image-placeholder">
      <span className="flowbite-drawer__image-text">Image</span>
    </div>
    <ul className="flowbite-drawer__list">
      <li className="flowbite-drawer__list-item">
        <ChartPieIcon className="flowbite-drawer__list-icon" />
        <span className="flowbite-drawer__list-text">Overview</span>
      </li>
      <li className="flowbite-drawer__list-item">
        <FileLinesIcon className="flowbite-drawer__list-icon" />
        <span className="flowbite-drawer__list-text">Pages</span>
      </li>
      <li className="flowbite-drawer__list-item flowbite-drawer__list-item--nested">
        <ShoppingBagIcon className="flowbite-drawer__list-icon" />
        <span className="flowbite-drawer__list-text">Ecommerce</span>
        <ArrowRightIcon className="flowbite-drawer__list-arrow" />
        <ul className="flowbite-drawer__sublist">
          <li className="flowbite-drawer__sublist-item">Overview</li>
          <li className="flowbite-drawer__sublist-item">Orders</li>
          <li className="flowbite-drawer__sublist-item">Products</li>
        </ul>
      </li>
    </ul>
  </DrawerPanel>
);

/* ---------- Variant: With List ---------- */

const WithListDrawer = () => (
  <DrawerPanel width={280}>
    <div className="flowbite-drawer__header">
      <span className="flowbite-drawer__heading">Drawer heading</span>
    </div>
    <ul className="flowbite-drawer__list">
      <li className="flowbite-drawer__list-item">
        <CheckCircleIcon className="flowbite-drawer__list-icon" />
        <span className="flowbite-drawer__list-text">List item 1</span>
      </li>
      <li className="flowbite-drawer__list-item">
        <UserIcon className="flowbite-drawer__list-icon" />
        <span className="flowbite-drawer__list-text">List item 2</span>
      </li>
      <li className="flowbite-drawer__list-item">
        <MailIcon className="flowbite-drawer__list-icon" />
        <span className="flowbite-drawer__list-text">List item 3</span>
      </li>
      <li className="flowbite-drawer__list-item">
        <SearchIcon className="flowbite-drawer__list-icon" />
        <span className="flowbite-drawer__list-text">List item 4</span>
      </li>
    </ul>
    <button className="flowbite-drawer__btn flowbite-drawer__btn--primary flowbite-drawer__btn--full">
      Get started
    </button>
  </DrawerPanel>
);

/* ---------- Variant: With Form ---------- */

const WithFormDrawer = () => (
  <DrawerPanel width={384}>
    <div className="flowbite-drawer__header">
      <div className="flowbite-drawer__header-left">
        <InfoCircleIcon className="flowbite-drawer__icon" />
        <span className="flowbite-drawer__heading">Drawer heading</span>
      </div>
      <button className="flowbite-drawer__close" aria-label="Close drawer">
        <CloseIcon />
      </button>
    </div>
    <div className="flowbite-drawer__form">
      <div className="flowbite-drawer__form-group">
        <label className="flowbite-drawer__form-label" htmlFor="drawer-email">
          Your email
        </label>
        <input
          id="drawer-email"
          className="flowbite-drawer__form-input"
          type="email"
          placeholder="name@flowbite.com"
        />
      </div>
      <div className="flowbite-drawer__form-group">
        <label className="flowbite-drawer__form-label" htmlFor="drawer-subject">
          Subject
        </label>
        <textarea
          id="drawer-subject"
          className="flowbite-drawer__form-textarea"
          placeholder="Write your message here..."
          rows={4}
        />
      </div>
      <button className="flowbite-drawer__btn flowbite-drawer__btn--primary flowbite-drawer__btn--full">
        Send message
      </button>
    </div>
  </DrawerPanel>
);

/* ---------- Section shell ---------- */

const SectionShell = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="flowbite-drawer-section">
    <h2 className="flowbite-drawer-section__title">{title}</h2>
    <div className="flowbite-drawer-showcase">{children}</div>
  </section>
);

/* ---------- Section definitions ---------- */

const DefaultSection = () => (
  <SectionShell title="Default Drawer">
    <DefaultDrawer />
  </SectionShell>
);

const WithImageSection = () => (
  <SectionShell title="Drawer with Image">
    <WithImageDrawer />
  </SectionShell>
);

const WithListSection = () => (
  <SectionShell title="Drawer with List">
    <WithListDrawer />
  </SectionShell>
);

const WithFormSection = () => (
  <SectionShell title="Drawer with Form">
    <WithFormDrawer />
  </SectionShell>
);

/* ---------- Main component ---------- */

export const Drawer = ({
  section = 'all',
  className = '',
}: DrawerProps) => {
  const renderSection = () => {
    switch (section) {
      case 'default':
        return <DefaultSection />;
      case 'with-image':
        return <WithImageSection />;
      case 'with-list':
        return <WithListSection />;
      case 'with-form':
        return <WithFormSection />;
      case 'all':
      default:
        return (
          <>
            <DefaultSection />
            <WithImageSection />
            <WithListSection />
            <WithFormSection />
          </>
        );
    }
  };

  return (
    <div className={`flowbite-drawer ${className}`}>
      {renderSection()}
    </div>
  );
};

export default Drawer;