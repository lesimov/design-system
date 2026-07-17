import './toasts.css';

export type ToastType = 'default' | 'warning' | 'error';

export interface ToastsProps {
  /** Visual variant */
  type?: ToastType;
  /** Heading text */
  title?: React.ReactNode;
  /** Body message */
  children?: React.ReactNode;
  /** Custom icon element */
  icon?: React.ReactNode;
  /** Avatar element (avatar variant) */
  avatar?: React.ReactNode;
  /** Action button / CTA */
  action?: React.ReactNode;
  /** Progress value 0–100 (progress bar variant) */
  progress?: number;
  /** Show close button */
  closable?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Additional class names */
  className?: string;
}

const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 4l8 8M12 4l-8 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Toasts = ({
  type = 'default',
  title,
  children,
  icon,
  avatar,
  action,
  progress,
  closable = false,
  onClose,
  className = '',
}: ToastsProps) => {
  const hasHeader = title || icon || avatar;

  return (
    <div
      className={`flowbite-toast flowbite-toast--${type}${className ? ' ' + className : ''}`}
      role="alert"
    >
      {/* Icon / Avatar column */}
      {(icon || avatar) && (
        <div className="flowbite-toast__icon-col">
          {icon && <span className="flowbite-toast__icon">{icon}</span>}
          {avatar && <span className="flowbite-toast__avatar">{avatar}</span>}
        </div>
      )}

      {/* Content area */}
      <div className="flowbite-toast__content">
        {hasHeader && (
          <div className="flowbite-toast__header">
            {title && <div className="flowbite-toast__title">{title}</div>}
            {closable && (
              <button
                type="button"
                className="flowbite-toast__close"
                onClick={onClose}
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        )}
        {children && <div className="flowbite-toast__message">{children}</div>}
        {action && <div className="flowbite-toast__action">{action}</div>}
        {progress !== undefined && (
          <div className="flowbite-toast__progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div
              className="flowbite-toast__progress-fill"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        )}
      </div>

      {/* Close button when no header */}
      {closable && !hasHeader && (
        <button
          type="button"
          className="flowbite-toast__close flowbite-toast__close--inline"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export default Toasts;