import type { ReactNode } from 'react';
import './popover.css';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';

export type PopoverContentType = 'text' | 'user-profile' | 'paragraphs' | 'password-checklist' | 'list' | 'notifications' | 'share';

export interface PopoverItem {
  icon?: ReactNode;
  label: string;
  status?: 'success' | 'error' | 'neutral';
}

export interface PopoverProps {
  /** Position of the arrow relative to content */
  position?: PopoverPosition;
  /** Title shown in the header bar */
  title?: string;
  /** Content type preset */
  type?: PopoverContentType;
  /** Custom body content (overrides type) */
  children?: ReactNode;
  /** Additional class name */
  className?: string;
  /** Whether to show the header */
  showHeader?: boolean;
  /** Items for list/notifications/share content types */
  items?: PopoverItem[];
  /** Width of the popover (defaults to 255px) */
  width?: number;
}

/* ------------------------------------------------------------------ */
/*  Inline SVGs                                                        */
/* ------------------------------------------------------------------ */

const UserIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#E5E7EB" />
    <path d="M16 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8 10c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#6A7282" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="#ECFDF5" />
    <path d="M5 8l2 2 4-4" stroke="#007A55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseSmallIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="#FEF2F2" />
    <path d="M5 5l6 6M11 5l-6 6" stroke="#C70036" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const NeutralIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="8" fill="#F3F4F6" />
    <path d="M5 8h6" stroke="#6A7282" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ArrowRightIcon = ({ color = '#1447E6' }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 3l5 5-5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Content presets                                                     */
/* ------------------------------------------------------------------ */

const TextContent = () => (
  <p className="flowbite-popover__text">
    And here's some amazing content. It's very engaging. Right?
  </p>
);

const UserProfileContent = () => (
  <div className="flowbite-popover__profile">
    <div className="flowbite-popover__profile-top">
      <div className="flowbite-popover__profile-info">
        <UserIcon />
        <div className="flowbite-popover__profile-names">
          <span className="flowbite-popover__profile-name">Roberta Casas</span>
          <span className="flowbite-popover__profile-username">@robecas</span>
        </div>
      </div>
      <button className="flowbite-popover__profile-btn" type="button">Follow</button>
    </div>
    <p className="flowbite-popover__text">Open-source contributor &amp; CEO. Building flowbite.com.</p>
    <div className="flowbite-popover__profile-stats">
      <span><strong>3,256</strong> Following</span>
      <span><strong>12.5K</strong> Followers</span>
    </div>
  </div>
);

const PasswordChecklistContent = ({ items }: { items?: PopoverItem[] }) => {
  const defaultItems: PopoverItem[] = [
    { label: 'Upper & lower case letters', status: 'success' },
    { label: 'A symbol (#$&)', status: 'error' },
    { label: 'A longer password', status: 'neutral' },
  ];
  const list = items ?? defaultItems;
  return (
    <div className="flowbite-popover__checklist">
      <p className="flowbite-popover__checklist-label">Password requirements:</p>
      <ul className="flowbite-popover__checklist-items">
        {list.map((item, i) => (
          <li key={i} className={`flowbite-popover__checklist-item flowbite-popover__checklist-item--${item.status ?? 'neutral'}`}>
            {item.status === 'success' ? <CheckIcon /> : item.status === 'error' ? <CloseSmallIcon /> : <NeutralIcon />}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ParagraphsContent = () => (
  <div className="flowbite-popover__paragraphs">
    <div className="flowbite-popover__para">
      <h4 className="flowbite-popover__para-heading">Activity growth - Incremental</h4>
      <p className="flowbite-popover__para-text">Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease.</p>
    </div>
    <div className="flowbite-popover__para">
      <h4 className="flowbite-popover__para-heading">Calculation</h4>
      <p className="flowbite-popover__para-text">For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period n.</p>
    </div>
    <a href="#" className="flowbite-popover__para-link">
      Read more <ArrowRightIcon />
    </a>
  </div>
);

const NotificationsContent = ({ items }: { items?: PopoverItem[] }) => {
  const defaultItems: PopoverItem[] = [
    { label: 'New user registered', status: 'success' },
    { label: 'Payment received', status: 'success' },
    { label: 'Task completed', status: 'neutral' },
  ];
  const list = items ?? defaultItems;
  return (
    <ul className="flowbite-popover__notifications">
      {list.map((item, i) => (
        <li key={i} className="flowbite-popover__notification-item">
          {item.status === 'success' ? <CheckIcon /> : <NeutralIcon />}
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

const ListContent = ({ items }: { items?: PopoverItem[] }) => {
  const defaultItems: PopoverItem[] = [
    { label: 'Upper & lower case letters', status: 'success' },
    { label: 'A symbol (#$&)', status: 'error' },
    { label: 'A longer password', status: 'neutral' },
  ];
  const list = items ?? defaultItems;
  return (
    <ul className="flowbite-popover__list">
      {list.map((item, i) => (
        <li key={i} className={`flowbite-popover__list-item flowbite-popover__list-item--${item.status ?? 'neutral'}`}>
          {item.status === 'success' ? <CheckIcon /> : item.status === 'error' ? <CloseSmallIcon /> : <NeutralIcon />}
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

const ShareContent = () => {
  const shareItems = [
    { icon: 'x', label: 'Tweet' },
    { icon: 'facebook', label: 'Share' },
    { icon: 'instagram', label: 'Like' },
    { icon: 'linkedin', label: 'Share' },
    { icon: 'youtube', label: 'Like' },
  ];
  return (
    <ul className="flowbite-popover__share">
      {shareItems.map((item, i) => (
        <li key={i} className="flowbite-popover__share-item">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            {item.icon === 'x' && <path d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM5 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5zM3.5 4.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9 7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V9c0-.5.5-1 1-1s1 .5 1 1v2.5zm0-4.5V4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v3.5h2z" fill="currentColor" />}
            {item.icon === 'facebook' && <path d="M8 0C3.58 0 0 3.58 0 8c0 3.94 2.78 7.25 6.5 8.07v-5.7H4.5V8h2V6.2c0-2 1.2-3.1 3-3.1.88 0 1.8.16 1.8.16v2h-1c-.98 0-1.3.62-1.3 1.26V8h2.2l-.36 2.37H8.5v5.7C13.22 15.25 16 11.94 16 8c0-4.42-3.58-8-8-8z" fill="currentColor" />}
            {item.icon === 'instagram' && <><rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="12" cy="4" r="1" fill="currentColor" /></>}
            {item.icon === 'linkedin' && <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.71-.52-1.248-1.342-1.248-.822 0-1.359.538-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill="currentColor" />}
            {item.icon === 'youtube' && <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122c0-.196.017-1.084.074-2.056l.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="currentColor" />}
          </svg>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

/* ------------------------------------------------------------------ */
/*  Content resolver                                                    */
/* ------------------------------------------------------------------ */

const renderContent = (type: PopoverContentType, items?: PopoverItem[]) => {
  switch (type) {
    case 'user-profile': return <UserProfileContent />;
    case 'password-checklist': return <PasswordChecklistContent items={items} />;
    case 'paragraphs': return <ParagraphsContent />;
    case 'list': return <ListContent items={items} />;
    case 'notifications': return <NotificationsContent items={items} />;
    case 'share': return <ShareContent />;
    case 'text':
    default: return <TextContent />;
  }
};

/* ------------------------------------------------------------------ */
/*  Arrow component                                                    */
/* ------------------------------------------------------------------ */

const Arrow = ({ position }: { position: PopoverPosition }) => (
  <div className={`flowbite-popover__arrow flowbite-popover__arrow--${position}`} aria-hidden="true" />
);

/* ------------------------------------------------------------------ */
/*  Main Popover component                                             */
/* ------------------------------------------------------------------ */

export const Popover = ({
  position = 'bottom',
  title,
  type = 'text',
  children,
  className = '',
  showHeader = false,
  items,
  width,
}: PopoverProps) => {
  const content = children ?? renderContent(type, items);

  const posClass = `flowbite-popover--${position}`;
  const headerClass = title || showHeader ? 'flowbite-popover--has-header' : '';

  return (
    <div
      className={`flowbite-popover ${posClass} ${headerClass} ${className}`.trim()}
      role="tooltip"
      style={width ? { width } : undefined}
    >
      {(title || showHeader) && (
        <div className="flowbite-popover__header">
          <span className="flowbite-popover__title">{title ?? 'Popover title'}</span>
        </div>
      )}
      <div className="flowbite-popover__body">
        {content}
      </div>
      <Arrow position={position} />
    </div>
  );
};

export default Popover;
