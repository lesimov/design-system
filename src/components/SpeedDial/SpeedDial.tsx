import { useState, type ReactNode } from 'react';
import './speed-dial.css';

/* ---------- Types ---------- */

export type SpeedDialPosition = 'top' | 'bottom' | 'left' | 'right';

export interface SpeedDialItem {
  icon: ReactNode;
  label?: string;
  onClick?: () => void;
}

export interface SpeedDialProps {
  items: SpeedDialItem[];
  position?: SpeedDialPosition;
  className?: string;
  ariaLabel?: string;
}

/* ---------- Inline SVG Icons ---------- */

const PlusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 4.167V15.833M4.167 10H15.833"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);




/* ---------- Speed Dial Component ---------- */

export const SpeedDial = ({
  items,
  position = 'top',
  className = '',
  ariaLabel = 'Speed dial actions',
}: SpeedDialProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const positionClass = `flowbite-speed-dial--${position}`;

  return (
    <div
      className={`flowbite-speed-dial ${positionClass}${className ? ' ' + className : ''}`}
      role="toolbar"
      aria-label={ariaLabel}
    >
      <ul
        className="flowbite-speed-dial__menu"
        role="menu"
        aria-hidden={!isOpen}
        style={{ display: isOpen ? undefined : 'none' }}
      >
        {items.map((item, index) => (
          <li key={index} className="flowbite-speed-dial__item-wrapper" role="none">
            {item.label && (
              <div className="flowbite-speed-dial__tooltip" role="tooltip">
                {item.label}
              </div>
            )}
            <button
              type="button"
              className="flowbite-speed-dial__item"
              onClick={item.onClick}
              aria-label={item.label ?? `Action ${index + 1}`}
              role="menuitem"
            >
              <span className="flowbite-speed-dial__item-icon">{item.icon}</span>
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`flowbite-speed-dial__toggle${isOpen ? ' flowbite-speed-dial__toggle--active' : ''}`}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls="speed-dial-menu"
        aria-label={isOpen ? 'Close speed dial' : 'Open speed dial'}
      >
        <span className={`flowbite-speed-dial__toggle-icon${isOpen ? ' flowbite-speed-dial__toggle-icon--rotated' : ''}`}>
          <PlusIcon />
        </span>
      </button>
    </div>
  );
};

export default SpeedDial;