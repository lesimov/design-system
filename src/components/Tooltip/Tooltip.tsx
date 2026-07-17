import React, { useId } from 'react';
import './tooltip.css';

/* ---------- Types ---------- */

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** Tooltip content text. */
  label: string;
  /** Position relative to trigger element. Defaults to 'top'. */
  position?: TooltipPosition;
  /** Whether to show the tooltip (controlled). When omitted, hover/focus controls visibility. */
  visible?: boolean;
  /** Unique ID for aria-describedby. Auto-generated if omitted. */
  id?: string;
  /** The trigger element. */
  children: React.ReactNode;
  className?: string;
}

/* ---------- Component ---------- */

export const Tooltip = ({
  label,
  position = 'top',
  visible,
  id: externalId,
  children,
  className = '',
}: TooltipProps) => {
  const generatedId = useId();
  const tooltipId = externalId || generatedId;
  const isControlled = visible !== undefined;

  const wrapperClass = [
    'flowbite-tooltip',
    `flowbite-tooltip--${position}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const popupClass = [
    'flowbite-tooltip__popup',
    isControlled && visible ? 'flowbite-tooltip__popup--visible' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={wrapperClass}
      aria-describedby={tooltipId}
      tabIndex={0}
    >
      {children}
      <div
        id={tooltipId}
        className={popupClass}
        role="tooltip"
        aria-hidden={isControlled ? !visible : undefined}
      >
        <span className="flowbite-tooltip__bubble">{label}</span>
      </div>
    </div>
  );
};

export default Tooltip;