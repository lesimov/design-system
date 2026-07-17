import React from 'react';
import './alert.css';

export type AlertType = 'default' | 'complex' | 'small' | 'border-top';
export type AlertColor = 'success' | 'danger' | 'warning' | 'info' | 'default';

export interface AlertProps {
  /** Visual variant */
  type?: AlertType;
  /** Color scheme */
  color?: AlertColor;
  /** Heading text (complex type) */
  title?: string;
  /** Body text / description */
  children?: React.ReactNode;
  /** Action button rendered below content (complex type) */
  action?: React.ReactNode;
  /** Custom icon override */
  icon?: React.ReactNode;
  /** Show close button */
  closable?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Additional class names */
  className?: string;
}

const colorMap: Record<AlertColor, { bg: string; border: string; text: string; icon: string }> = {
  success: { bg: '#ecfdf5', border: '#a4f4cf', text: '#004f3b', icon: '#004f3b' },
  danger:  { bg: '#fef0f2', border: '#ffccd3', text: '#8b0836', icon: '#8b0836' },
  warning: { bg: '#fff8f1', border: '#fcd9bd', text: '#8b0836', icon: '#8b0836' },
  info:    { bg: '#eef6ff', border: '#bedbff', text: '#1c398e', icon: '#1c398e' },
  default: { bg: '#f9fafb', border: '#e5e7eb', text: '#101828', icon: '#101828' },
};

const InfoCircleIcon = ({ fill }: { fill: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM7.25 5a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0V5Zm0 2.5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0V7.5Z"
      fill={fill}
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708Z"
      fill="currentColor"
    />
  </svg>
);

export const Alert = ({
  type = 'default',
  color = 'default',
  title,
  children,
  action,
  icon,
  closable = false,
  onClose,
  className = '',
}: AlertProps) => {
  const palette = colorMap[color];
  const isComplex = type === 'complex';
  const isSmall = type === 'small';
  const isBorderTop = type === 'border-top';

  const classNames = [
    'flowbite-alert',
    `flowbite-alert--${type}`,
    `flowbite-alert--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {
    backgroundColor: palette.bg,
    borderColor: palette.border,
    color: palette.text,
  };

  if (isBorderTop) {
    style.borderTopWidth = 3;
    style.borderTopColor = palette.border;
    style.borderLeftWidth = 1;
    style.borderRightWidth = 1;
    style.borderBottomWidth = 1;
    style.borderStyle = 'solid';
  }

  const defaultIcon = <InfoCircleIcon fill={palette.icon} />;

  return (
    <div className={classNames} style={style} role="alert">
      {isSmall ? (
        /* Small variant */
        <>
          <span className="flowbite-alert__badge">New</span>
          <span className="flowbite-alert__icon-wrapper">
            {icon ?? defaultIcon}
          </span>
          <span className="flowbite-alert__text">{children}</span>
          {closable && (
            <button
              type="button"
              className="flowbite-alert__close"
              onClick={onClose}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          )}
        </>
      ) : isComplex ? (
        /* Complex variant */
        <>
          <div className="flowbite-alert__description">
            <div className="flowbite-alert__title-row">
              <span className="flowbite-alert__icon-wrapper">
                {icon ?? defaultIcon}
              </span>
              <span className="flowbite-alert__heading">{title || 'Alert heading'}</span>
              {closable && (
                <button
                  type="button"
                  className="flowbite-alert__close"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <CloseIcon />
                </button>
              )}
            </div>
            <div className="flowbite-alert__body">{children}</div>
          </div>
          {action && <div className="flowbite-alert__action">{action}</div>}
        </>
      ) : (
        /* Default and Border top variants */
        <>
          <span className="flowbite-alert__icon-wrapper">
            {icon ?? defaultIcon}
          </span>
          <span className="flowbite-alert__text">{children}</span>
          {closable && (
            <button
              type="button"
              className="flowbite-alert__close"
              onClick={onClose}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Alert;