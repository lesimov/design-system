import React from 'react';
import './button.css';

export type ButtonColor =
  | 'brand'
  | 'alternative'
  | 'dark'
  | 'light'
  | 'green'
  | 'red'
  | 'yellow'
  | 'purple'
  | 'blue'
  | 'gray'
  | 'ghost';

export type ButtonSize = 'xs' | 'sm' | 'base' | 'l' | 'xl' | '2xl';

export interface ButtonProps {
  /** Color scheme */
  color?: ButtonColor;
  /** Size variant */
  size?: ButtonSize;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Focus ring visible */
  focused?: boolean;
  /** Active/pressed state */
  active?: boolean;
  /** Outline style */
  outline?: boolean;
  /** Icon-only mode (square) */
  iconOnly?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
  /** Icon position (only when not iconOnly) */
  iconPosition?: 'left' | 'right';
  /** Button content */
  children?: React.ReactNode;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional class names */
  className?: string;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** aria-label for accessibility */
  'aria-label'?: string;
}

const sizeMap: Record<ButtonSize, { height: number; px: number; py: number; fontSize: number; lineHeight: number; gap: number; iconSize: number }> = {
  xs:   { height: 32, px: 10, py: 0, fontSize: 12, lineHeight: 16, gap: 4,  iconSize: 14 },
  sm:   { height: 36, px: 12, py: 0, fontSize: 13, lineHeight: 18, gap: 4,  iconSize: 16 },
  base: { height: 40, px: 16, py: 10, fontSize: 14, lineHeight: 20, gap: 6,  iconSize: 16 },
  l:    { height: 48, px: 20, py: 12, fontSize: 16, lineHeight: 24, gap: 6,  iconSize: 20 },
  xl:   { height: 56, px: 24, py: 14, fontSize: 16, lineHeight: 24, gap: 8,  iconSize: 20 },
  '2xl': { height: 64, px: 28, py: 16, fontSize: 18, lineHeight: 28, gap: 8, iconSize: 24 },
};

// Color styling is handled via CSS classes in button.css

const LoadingSpinner = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flowbite-btn__spinner"
    aria-hidden="true"
  >
    <path
      d="M14 8a6 6 0 1 1-6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const Button = ({
  color = 'brand',
  size = 'base',
  disabled = false,
  loading = false,
  focused = false,
  active = false,
  outline = false,
  iconOnly = false,
  icon,
  iconPosition = 'left',
  children,
  onClick,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) => {
  const dims = sizeMap[size];
  const isDisabled = disabled || loading;

  const classNames = [
    'flowbite-btn',
    `flowbite-btn--${color}`,
    `flowbite-btn--${size}`,
    outline && 'flowbite-btn--outline',
    iconOnly && 'flowbite-btn--icon-only',
    isDisabled && 'flowbite-btn--disabled',
    loading && 'flowbite-btn--loading',
    active && 'flowbite-btn--active',
    focused && 'flowbite-btn--focused',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {
    height: dims.height,
    padding: outline ? `${dims.py - 1}px ${dims.px - 1}px` : `${dims.py}px ${dims.px}px`,
    gap: dims.gap,
    fontSize: dims.fontSize,
    lineHeight: `${dims.lineHeight}px`,
    borderRadius: 12,
  };

  if (iconOnly) {
    style.width = dims.height;
    style.padding = '0';
  }

  const iconElement = loading ? (
    <LoadingSpinner size={dims.iconSize} />
  ) : icon ? (
    <span className="flowbite-btn__icon" style={{ width: dims.iconSize, height: dims.iconSize }}>
      {icon}
    </span>
  ) : null;

  const label = ariaLabel || (typeof children === 'string' ? children : undefined);

  return (
    <button
      type={type}
      className={classNames}
      style={style}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={label}
      aria-busy={loading || undefined}
    >
      {iconElement && iconPosition === 'left' && iconElement}
      {children && !iconOnly && <span className="flowbite-btn__text">{children}</span>}
      {iconElement && iconPosition === 'right' && !iconOnly && iconElement}
    </button>
  );
};

export default Button;