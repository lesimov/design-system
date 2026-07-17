import { type ReactNode } from 'react';
import './list-items.css';

export type ListItemsSection = 'default' | 'image-number' | 'transaction' | 'number' | 'badge' | 'icon-right' | 'icons' | 'all';

export interface ListItemsProps {
  /** Which section(s) to render */
  section?: ListItemsSection;
  /** Additional class names */
  className?: string;
}

/** Simple SVG check-circle icon. */
const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor" strokeWidth="2"
    />
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Simple SVG arrow-right icon. */
const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Simple SVG cart icon. */
const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="currentColor"
    />
  </svg>
);

/** Simple SVG settings icon. */
const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

/* ========== Default list item ========== */

const DefaultItem = ({ text = 'List item 1', hover = false, disabled = false }) => (
  <div className={`flowbite-list-item ${hover ? 'flowbite-list-item--hover' : ''} ${disabled ? 'flowbite-list-item--disabled' : ''}`}>
    <span className="flowbite-list-item__icon"><CheckCircleIcon /></span>
    <span className="flowbite-list-item__primary">{text}</span>
  </div>
);

/* ========== Image & number ========== */

const ImageNumberItem = ({ name = 'List item 1', helper = 'Helper text here', price = '$599', hover = false }) => (
  <div className={`flowbite-list-item flowbite-list-item--space-between ${hover ? 'flowbite-list-item--hover' : ''}`}>
    <div className="flowbite-list-item__text" style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <div className="flowbite-list-item__avatar">PH</div>
      <div className="flowbite-list-item__text">
        <span className="flowbite-list-item__primary flowbite-list-item__primary--medium">{name}</span>
        <span className="flowbite-list-item__secondary">{helper}</span>
      </div>
    </div>
    <span className="flowbite-list-item__end">{price}</span>
  </div>
);

/* ========== Transaction list item ========== */

const TransactionItem = ({ name = 'Apple Inc.', category = 'Shopping', amount = '+$599', status = 'Completed', statusType = 'success', hover = false, disabled = false }) => (
  <div className={`flowbite-list-item flowbite-list-item--space-between ${hover ? 'flowbite-list-item--hover' : ''} ${disabled ? 'flowbite-list-item--disabled' : ''}`}>
    <div className="flowbite-list-item__text" style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <div className="flowbite-list-item__icon-shape">
        <CartIcon />
      </div>
      <div className="flowbite-list-item__text">
        <span className="flowbite-list-item__primary flowbite-list-item__primary--medium">{name}</span>
        <span className="flowbite-list-item__secondary">{category}</span>
      </div>
    </div>
    <div className="flowbite-list-item__text" style={{ alignItems: 'flex-end', flex: 'none' }}>
      <span className="flowbite-list-item__primary flowbite-list-item__primary--medium">{amount}</span>
      <span className={`flowbite-list-item__status ${statusType === 'danger' ? 'flowbite-list-item__status--danger' : ''}`}>{status}</span>
    </div>
  </div>
);

/* ========== With number ========== */

const WithNumberItem = ({ text = 'List item 1', number = '128', hover = false }) => (
  <div className={`flowbite-list-item flowbite-list-item--space-between ${hover ? 'flowbite-list-item--hover' : ''}`}>
    <span className="flowbite-list-item__primary">{text}</span>
    <span className="flowbite-list-item__end">{number}</span>
  </div>
);

/* ========== With badge ========== */

const WithBadgeItem = ({ text = 'List item 1', badge = '3', hover = false }) => (
  <div className={`flowbite-list-item flowbite-list-item--space-between ${hover ? 'flowbite-list-item--hover' : ''}`}>
    <span className="flowbite-list-item__primary">{text}</span>
    <span className="flowbite-list-item__badge">{badge}</span>
  </div>
);

/* ========== With right icon ========== */

const WithRightIconItem = ({ text = 'List item 1', hover = false }) => (
  <div className={`flowbite-list-item flowbite-list-item--space-between ${hover ? 'flowbite-list-item--hover' : ''}`}>
    <span className="flowbite-list-item__primary">{text}</span>
    <span className="flowbite-list-item__icon"><ArrowRightIcon /></span>
  </div>
);

/* ========== With icons (left + right) ========== */

const WithIconsItem = ({ text = 'List item 1', hover = false }) => (
  <div className={`flowbite-list-item flowbite-list-item--space-between ${hover ? 'flowbite-list-item--hover' : ''}`}>
    <div className="flowbite-list-item__text" style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      <span className="flowbite-list-item__icon"><StarIcon /></span>
      <span className="flowbite-list-item__primary">{text}</span>
    </div>
    <span className="flowbite-list-item__icon"><SettingsIcon /></span>
  </div>
);

/* ========== Sections ========== */

const DefaultSection = () => (
  <div className="flowbite-list-items-section">
    <h2 className="flowbite-list-items-section__title">Default</h2>
    <p className="flowbite-list-items-state-label">Initial</p>
    <DefaultItem text="List item 1" />
    <DefaultItem text="List item 2" />
    <DefaultItem text="List item 3" />
    <p className="flowbite-list-items-state-label" style={{ marginTop: 8 }}>Hover / Active</p>
    <DefaultItem text="List item 1" hover />
    <DefaultItem text="List item 2" hover />
    <DefaultItem text="List item 3" hover />
  </div>
);

const ImageNumberSection = () => (
  <div className="flowbite-list-items-section">
    <h2 className="flowbite-list-items-section__title">Image & number</h2>
    <p className="flowbite-list-items-state-label">Initial</p>
    <ImageNumberItem name="List item 1" helper="Helper text here" price="$599" />
    <ImageNumberItem name="List item 2" helper="Another helper" price="$1,299" />
    <p className="flowbite-list-items-state-label" style={{ marginTop: 8 }}>Hover / Active</p>
    <ImageNumberItem name="List item 1" helper="Helper text here" price="$599" hover />
    <ImageNumberItem name="List item 2" helper="Another helper" price="$1,299" hover />
  </div>
);

const TransactionSection = () => (
  <div className="flowbite-list-items-section">
    <h2 className="flowbite-list-items-section__title">Transaction</h2>
    <p className="flowbite-list-items-state-label">Initial</p>
    <TransactionItem name="Apple Inc." category="Shopping" amount="+$599" status="Completed" />
    <TransactionItem name="Netflix" category="Subscription" amount="-$15.99" status="Completed" />
    <TransactionItem name="Uber Eats" category="Food & Drink" amount="-$32.50" status="Pending" statusType="danger" />
    <p className="flowbite-list-items-state-label" style={{ marginTop: 8 }}>Hover / Active</p>
    <TransactionItem name="Apple Inc." category="Shopping" amount="+$599" status="Completed" hover />
    <p className="flowbite-list-items-state-label" style={{ marginTop: 8 }}>Disabled</p>
    <TransactionItem name="Apple Inc." category="Shopping" amount="+$599" status="Completed" disabled />
  </div>
);

const NumberSection = () => (
  <div className="flowbite-list-items-section">
    <h2 className="flowbite-list-items-section__title">With number</h2>
    <p className="flowbite-list-items-state-label">Initial</p>
    <WithNumberItem text="List item 1" number="128" />
    <WithNumberItem text="List item 2" number="256" />
    <p className="flowbite-list-items-state-label" style={{ marginTop: 8 }}>Hover / Active</p>
    <WithNumberItem text="List item 1" number="128" hover />
    <WithNumberItem text="List item 2" number="256" hover />
  </div>
);

const BadgeSection = () => (
  <div className="flowbite-list-items-section">
    <h2 className="flowbite-list-items-section__title">With badge</h2>
    <p className="flowbite-list-items-state-label">Initial</p>
    <WithBadgeItem text="List item 1" badge="3" />
    <WithBadgeItem text="List item 2" badge="12" />
    <p className="flowbite-list-items-state-label" style={{ marginTop: 8 }}>Hover / Active</p>
    <WithBadgeItem text="List item 1" badge="3" hover />
    <WithBadgeItem text="List item 2" badge="12" hover />
  </div>
);

const IconRightSection = () => (
  <div className="flowbite-list-items-section">
    <h2 className="flowbite-list-items-section__title">With right icon</h2>
    <p className="flowbite-list-items-state-label">Initial</p>
    <WithRightIconItem text="List item 1" />
    <WithRightIconItem text="List item 2" />
    <p className="flowbite-list-items-state-label" style={{ marginTop: 8 }}>Hover / Active</p>
    <WithRightIconItem text="List item 1" hover />
    <WithRightIconItem text="List item 2" hover />
  </div>
);

const IconsSection = () => (
  <div className="flowbite-list-items-section">
    <h2 className="flowbite-list-items-section__title">With icons</h2>
    <p className="flowbite-list-items-state-label">Initial</p>
    <WithIconsItem text="List item 1" />
    <WithIconsItem text="List item 2" />
    <p className="flowbite-list-items-state-label" style={{ marginTop: 8 }}>Hover / Active</p>
    <WithIconsItem text="List item 1" hover />
    <WithIconsItem text="List item 2" hover />
  </div>
);

const SECTION_DEFS: { key: Exclude<ListItemsSection, 'all'>; title: string; node: ReactNode }[] = [
  { key: 'default', title: 'Default', node: <DefaultSection /> },
  { key: 'image-number', title: 'Image & number', node: <ImageNumberSection /> },
  { key: 'transaction', title: 'Transaction', node: <TransactionSection /> },
  { key: 'number', title: 'With number', node: <NumberSection /> },
  { key: 'badge', title: 'With badge', node: <BadgeSection /> },
  { key: 'icon-right', title: 'With right icon', node: <IconRightSection /> },
  { key: 'icons', title: 'With icons', node: <IconsSection /> },
];

export const ListItems = ({ section = 'all', className = '' }: ListItemsProps) => {
  if (section === 'all') {
    return (
      <div className={`flowbite-list-items-showcase ${className}`}>
        <DefaultSection />
        <ImageNumberSection />
        <TransactionSection />
        <NumberSection />
        <BadgeSection />
        <IconRightSection />
        <IconsSection />
      </div>
    );
  }

  const def = SECTION_DEFS.find((d) => d.key === section);
  if (!def) return null;

  return (
    <div className={`flowbite-list-items-showcase ${className}`}>
      {def.node}
    </div>
  );
};

export default ListItems;