import React from 'react';
import './badge.css';

export type BadgeColor =
  | 'gray'
  | 'brand'
  | 'danger'
  | 'warning'
  | 'success'
  | 'white';
export type BadgeSize = 'sm' | 'lg';
export type BadgeType = 'default' | 'pill';

export interface BadgeProps {
  /** Color theme */
  color?: BadgeColor;
  /** Size variant */
  size?: BadgeSize;
  /** Visual type: default (rounded) or pill (fully rounded) */
  type?: BadgeType;
  /** Icon element shown before text */
  icon?: React.ReactNode;
  /** Show the dismiss/close button */
  closable?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Badge content */
  children?: React.ReactNode;
  /** Additional class names */
  className?: string;
}

const colorMap: Record<
  BadgeColor,
  { bg: string; border: string; text: string }
> = {
  gray:    { bg: '#f9fafb', border: '#e5e7eb', text: '#101828' },
  brand:   { bg: '#eef6ff', border: '#bedbff', text: '#1c398e' },
  danger:  { bg: '#fef0f2', border: '#ffccd3', text: '#8b0836' },
  warning: { bg: '#fff8f1', border: '#fcd9bd', text: '#771d1d' },
  success: { bg: '#ecfdf5', border: '#a4f4cf', text: '#006045' },
  white:   { bg: '#ffffff', border: '#e5e7eb', text: '#101828' },
};

const ClockIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 2.5v3l2.5 1.5M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 2L2 8M2 2l6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Badge = ({
  color = 'gray',
  size = 'sm',
  type = 'default',
  icon,
  closable = false,
  onClose,
  children,
  className = '',
}: BadgeProps) => {
  const palette = colorMap[color];

  const classNames = [
    'flowbite-badge',
    `flowbite-badge--${color}`,
    `flowbite-badge--${size}`,
    `flowbite-badge--${type}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {
    backgroundColor: palette.bg,
    borderColor: palette.border,
    color: palette.text,
  };

  return (
    <span className={classNames} style={style}>
      {icon !== undefined && (
        <span className="flowbite-badge__icon-wrapper">
          <ClockIcon />
        </span>
      )}
      {children && <span className="flowbite-badge__text">{children}</span>}
      {closable && (
        <button
          type="button"
          className="flowbite-badge__close"
          onClick={onClose}
          aria-label="Remove"
        >
          <CloseIcon />
        </button>
      )}
    </span>
  );
};

export default Badge;