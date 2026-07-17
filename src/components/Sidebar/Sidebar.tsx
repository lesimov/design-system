import { useState, useCallback, type ReactNode } from 'react';
import './sidebar.css';

/* ---------- Types ---------- */

export type SidebarVariant = 'default' | 'with-alert' | 'contracted' | 'double';
export type NavItemType = 'with-icon' | 'with-badge';

export interface NavItem {
  id: string;
  label: string;
  icon?: 'chart-pie' | 'shopping-cart' | 'credit-card' | 'users-group' | 'user-headset' | 'layout' | 'inbox' | 'file' | 'settings' | 'kanban' | 'calendar' | 'mailbox' | 'products';
  badge?: string | number;
  badgeColor?: 'danger' | 'brand';
  disabled?: boolean;
  active?: boolean;
  defaultExpanded?: boolean;
  children?: NavItem[];
}

export interface SidebarProps {
  variant?: SidebarVariant;
  headerType?: 'logo' | 'user';
  logoText?: string;
  user?: {
    name: string;
    email: string;
    avatarUrl?: string;
  };
  navItems?: NavItem[];
  showAlert?: boolean;
  alertTitle?: string;
  alertBody?: string;
  alertLinkText?: string;
  onAlertClose?: () => void;
  contracted?: boolean;
  className?: string;
}

/* ---------- Inline SVG Icons ---------- */

const ChartPieIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 1a9 9 0 119 9M10 1a9 9 0 00-9 9m9-9v9h9" />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 1h2l1.68 8.27a2 2 0 002 1.73H16a2 2 0 002-1.73L19 5H5" />
    <circle cx="7" cy="17" r="1.5" />
    <circle cx="16" cy="17" r="1.5" />
  </svg>
);

const CreditCardIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="18" height="14" rx="2" />
    <path d="M1 7h18" />
  </svg>
);

const UsersGroupIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 17v-1a3 3 0 00-3-3H5a3 3 0 00-3 3v1" />
    <circle cx="8" cy="6" r="3" />
    <path d="M19 17v-1a3 3 0 00-2-2.87M14 3.13a3 3 0 010 5.74" />
  </svg>
);

const UserHeadsetIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 14v1a2 2 0 01-2 2h-1M18 10V9a8 8 0 00-16 0v1" />
    <path d="M2 14a2 2 0 012-2h1a1 1 0 011 1v3a1 1 0 01-1 1H4a2 2 0 01-2-2v-2zM16 14a2 2 0 012 2v2a2 2 0 01-2 2h-1a1 1 0 01-1-1v-3a1 1 0 011-1h1z" />
  </svg>
);

const LayoutIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="14" height="14" rx="2" />
    <path d="M3 9h14" />
    <path d="M9 3v14" />
  </svg>
);

const InboxIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 11h-4l-2 3H7l-2-3H1l1.76-6.58A1 1 0 013.75 3h12.5a1 1 0 01.99.84L19 11z" />
    <path d="M1 11v4a1 1 0 001 1h16a1 1 0 001-1v-4" />
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2z" />
    <path d="M10 2v6l2-2 2 2V2" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="2.5" />
    <path d="M10 1v2M10 17v2M1 10h2M17 10h2M3.93 3.93l1.41 1.41M14.66 14.66l1.41 1.41M3.93 16.07l1.41-1.41M14.66 5.34l1.41-1.41" />
  </svg>
);

const KanbanIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="5" height="16" rx="1" />
    <rect x="8" y="6" width="5" height="12" rx="1" />
    <rect x="14" y="2" width="5" height="16" rx="1" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="14" height="14" rx="2" />
    <path d="M3 8h14" />
    <path d="M7 2v3M13 2v3" />
  </svg>
);

const MailboxIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
    <path d="M4 6l6 5 6-5" />
  </svg>
);

const ProductsIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1z" />
    <path d="M7 8h6M7 11h4" />
  </svg>
);


const ChevronSortIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7l3-3 3 3M7 13l3 3 3-3" />
  </svg>
);

const FlowbiteLogoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-label="Flowbite">
    <rect x="0.5" y="0.5" width="23" height="23" rx="6" fill="url(#logo-gradient)" />
    <defs>
      <linearGradient id="logo-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1447E6" />
        <stop offset="1" stopColor="#2B7FFF" />
      </linearGradient>
    </defs>
    <path d="M7 8h2v8H7V8zm4 0h2v8h-2V8zm4 3h2v5h-2v-5z" fill="white" />
  </svg>
);

const InfoCircleIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="8" />
    <path d="M10 8v4M10 6v.01" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l8 8M12 4l-8 8" />
  </svg>
);

/* ---------- Icon resolver ---------- */

const ICON_MAP: Record<string, () => ReactNode> = {
  'chart-pie': ChartPieIcon,
  'shopping-cart': ShoppingCartIcon,
  'credit-card': CreditCardIcon,
  'users-group': UsersGroupIcon,
  'user-headset': UserHeadsetIcon,
  'layout': LayoutIcon,
  'inbox': InboxIcon,
  'file': FileIcon,
  'settings': SettingsIcon,
  'kanban': KanbanIcon,
  'calendar': CalendarIcon,
  'mailbox': MailboxIcon,
  'products': ProductsIcon,
};

/* ---------- Tree View: Recursive Nav Item ---------- */

interface NavItemProps {
  item: NavItem;
  contracted?: boolean;
  depth?: number;
  expandedIds: Set<string>;
  onToggle: (id: string) => void;
}

const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <svg
    className={`flowbite-sidebar__item-chevron-icon ${expanded ? 'flowbite-sidebar__item-chevron-icon--expanded' : ''}`}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 4l4 4-4 4" />
  </svg>
);

const NavItemComponent = ({ item, contracted, depth = 0, expandedIds, onToggle }: NavItemProps) => {
  const IconComponent = item.icon ? ICON_MAP[item.icon] : null;
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedIds.has(item.id);

  const classNames = [
    'flowbite-sidebar__item',
    item.active ? 'flowbite-sidebar__item--active' : '',
    item.disabled ? 'flowbite-sidebar__item--disabled' : '',
    depth > 0 ? `flowbite-sidebar__item--depth-${depth}` : '',
    isExpanded ? 'flowbite-sidebar__item--expanded' : '',
  ].filter(Boolean).join(' ');

  return (
    <li className="flowbite-sidebar__nav-item">
      <button
        className={classNames}
        disabled={item.disabled}
        aria-current={item.active ? 'page' : undefined}
        aria-expanded={hasChildren ? isExpanded : undefined}
        onClick={() => hasChildren && onToggle(item.id)}
        type="button"
      >
        <span className="flowbite-sidebar__item-left">
          {IconComponent && (
            <span className="flowbite-sidebar__item-icon">
              <IconComponent />
            </span>
          )}
          {!contracted && <span className="flowbite-sidebar__item-text">{item.label}</span>}
        </span>
        {!contracted && item.badge && (
          <span className="flowbite-sidebar__item-badge">{item.badge}</span>
        )}
        {!contracted && hasChildren && (
          <span className="flowbite-sidebar__item-chevron">
            <ChevronIcon expanded={isExpanded} />
          </span>
        )}
      </button>

      {/* Tree children */}
      {hasChildren && !contracted && (
        <div
          className={`flowbite-sidebar__subnav ${isExpanded ? 'flowbite-sidebar__subnav--open' : ''}`}
        >
          <ul className="flowbite-sidebar__subnav-list">
            {item.children!.map((child) => (
              <NavItemComponent
                key={child.id}
                item={child}
                contracted={contracted}
                depth={depth + 1}
                expandedIds={expandedIds}
                onToggle={onToggle}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

/* ---------- Default Nav Items (with tree) ---------- */

const DEFAULT_NAV_ITEMS: NavItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: 'chart-pie',
    active: true,
    defaultExpanded: true,
    children: [
      { id: 'overview-main', label: 'Main dashboard', icon: 'layout' },
      { id: 'overview-analytics', label: 'Analytics', icon: 'chart-pie', badge: 'New' },
    ],
  },
  {
    id: 'products',
    label: 'Products',
    icon: 'products',
    children: [
      { id: 'products-all', label: 'All products', icon: 'products' },
      { id: 'products-add', label: 'Add product', icon: 'file' },
      { id: 'products-categories', label: 'Categories', icon: 'layout' },
    ],
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: 'credit-card',
    badge: 4,
    children: [
      { id: 'billing-overview', label: 'Overview', icon: 'chart-pie' },
      { id: 'billing-invoices', label: 'Invoices', icon: 'file' },
      { id: 'billing-payments', label: 'Payments', icon: 'credit-card' },
    ],
  },
  {
    id: 'users',
    label: 'Users',
    icon: 'users-group',
    children: [
      { id: 'users-all', label: 'All users', icon: 'users-group' },
      { id: 'users-roles', label: 'Roles & permissions', icon: 'settings' },
    ],
  },
  { id: 'support', label: 'Support', icon: 'user-headset', disabled: true },
];

/* ---------- Main Sidebar Component ---------- */

export const Sidebar = ({
  variant = 'default',
  headerType = 'logo',
  logoText = 'Flowbite',
  user,
  navItems = DEFAULT_NAV_ITEMS,
  showAlert = false,
  alertTitle = 'New dashboard!',
  alertBody = 'Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.',
  alertLinkText,
  onAlertClose,
  contracted = false,
  className = '',
}: SidebarProps) => {
  const [alertVisible, setAlertVisible] = useState(showAlert);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    navItems.forEach((item) => {
      if (item.defaultExpanded && item.children) {
        initial.add(item.id);
      }
    });
    return initial;
  });

  const isContracted = variant === 'contracted' || contracted;

  const handleToggle = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleAlertClose = () => {
    setAlertVisible(false);
    onAlertClose?.();
  };

  const containerClass = [
    'flowbite-sidebar',
    isContracted ? 'flowbite-sidebar--contracted' : '',
    variant === 'double' ? 'flowbite-sidebar--double' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <aside className={containerClass} role="navigation" aria-label="Sidebar">
      {/* Header */}
      {headerType === 'logo' && (
        <div className="flowbite-sidebar__header flowbite-sidebar__header--logo">
          <span className="flowbite-sidebar__logo-icon">
            <FlowbiteLogoIcon />
          </span>
          {!isContracted && <span className="flowbite-sidebar__logo-text">{logoText}</span>}
        </div>
      )}

      {headerType === 'user' && user && (
        <div className="flowbite-sidebar__header flowbite-sidebar__header--user">
          <div className="flowbite-sidebar__user-left">
            <div className="flowbite-sidebar__user-avatar">
              {user.avatarUrl ? (
                <img src={user.avatarUrl} alt={`${user.name}'s avatar`} />
              ) : (
                <span className="flowbite-sidebar__user-avatar-initials">
                  {user.name.charAt(0)}
                </span>
              )}
            </div>
            {!isContracted && (
              <div className="flowbite-sidebar__user-info">
                <span className="flowbite-sidebar__user-name">{user.name}</span>
                <span className="flowbite-sidebar__user-email">{user.email}</span>
              </div>
            )}
          </div>
          {!isContracted && (
            <span className="flowbite-sidebar__user-chevron">
              <ChevronSortIcon />
            </span>
          )}
        </div>
      )}

      {/* Navigation with tree view */}
      <nav className="flowbite-sidebar__nav">
        <ul className="flowbite-sidebar__nav-list">
          {navItems.map((item) => (
            <NavItemComponent
              key={item.id}
              item={item}
              contracted={isContracted}
              expandedIds={expandedIds}
              onToggle={handleToggle}
            />
          ))}
        </ul>
      </nav>

      {/* Alert */}
      {!isContracted && alertVisible && (
        <div className="flowbite-sidebar__alert" role="alert">
          <div className="flowbite-sidebar__alert-header">
            <span className="flowbite-sidebar__alert-icon">
              <InfoCircleIcon />
            </span>
            <span className="flowbite-sidebar__alert-title">{alertTitle}</span>
            <button
              className="flowbite-sidebar__alert-close"
              onClick={handleAlertClose}
              aria-label="Close alert"
              type="button"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flowbite-sidebar__alert-body">
            {alertBody}
            {alertLinkText && (
              <> <span className="flowbite-sidebar__alert-link">{alertLinkText}</span></>
            )}
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;