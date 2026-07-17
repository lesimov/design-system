import { useState, useId, type ReactNode, type ChangeEvent, type FocusEvent } from 'react';
import './floating-label.css';

export type FloatingLabelSize = 'sm' | 'base' | 'lg';
export type FloatingLabelState = 'initial' | 'focus' | 'filled' | 'success' | 'error' | 'disabled';

export interface FloatingLabelProps {
  /** Size variant */
  size?: FloatingLabelSize;
  /** Visual state */
  state?: FloatingLabelState;
  /** Input label (floats on focus/filled) */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Current value (controlled or default) */
  value?: string;
  /** Default value for uncontrolled usage */
  defaultValue?: string;
  /** Show left icon */
  icon?: ReactNode;
  /** Show clear/close button */
  clearable?: boolean;
  /** Clear handler */
  onClear?: () => void;
  /** Helper text below the input */
  helperText?: string;
  /** Input name attribute */
  name?: string;
  /** Input type */
  type?: string;
  /** Change handler */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** Focus handler */
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  /** Disabled state (overrides state='disabled') */
  disabled?: boolean;
  /** Additional class names */
  className?: string;
  /** Whether the input is required */
  required?: boolean;
  /** Error message (shown when state='error') */
  error?: string;
  /** Success message (shown when state='success') */
  successMessage?: string;
  /** aria-label for accessibility */
  'aria-label'?: string;
}


const CloseIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M11 3L3 11M3 3l8 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5.5 8l2 2 3-3.5M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const XCircleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 6l4 4M10 6l-4 4M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const sizeMap: Record<FloatingLabelSize, { height: number; py: number; fontSize: number }> = {
  sm:   { height: 36, py: 8,  fontSize: 14 },
  base: { height: 40, py: 10, fontSize: 14 },
  lg:   { height: 48, py: 12, fontSize: 16 },
};


export const FloatingLabel = ({
  size = 'base',
  state: stateProp = 'initial',
  label = 'Label',
  placeholder,
  value: controlledValue,
  defaultValue,
  icon,
  clearable = false,
  onClear,
  helperText,
  name,
  type = 'text',
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  className = '',
  required = false,
  error,
  successMessage,
  'aria-label': ariaLabel,
}: FloatingLabelProps) => {
  const isDisabled = disabled || stateProp === 'disabled';
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;
  const hasValue = currentValue.length > 0;
  const isExplicitlyFocusedOrFilled = stateProp === 'focus' || stateProp === 'filled';
  const labelFloats = focused || hasValue || isExplicitlyFocusedOrFilled;
  const effectiveState = isDisabled
    ? 'disabled'
    : stateProp === 'initial' && focused
      ? 'focus'
      : stateProp === 'initial' && hasValue
        ? 'filled'
        : stateProp;
  const genId = useId();
  const inputId = `fl-label-${genId}`;

  const classNames = [
    'flowbite-floating-label',
    `flowbite-floating-label--${size}`,
    effectiveState !== 'initial' && `flowbite-floating-label--${effectiveState}`,
    labelFloats && 'flowbite-floating-label--float',
    icon && 'flowbite-floating-label--has-icon',
    clearable && hasValue && 'flowbite-floating-label--has-clear',
    isDisabled && 'flowbite-floating-label--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const dims = sizeMap[size];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleClear = () => {
    if (!isControlled) {
      setInternalValue('');
    }
    onClear?.();
  };

  const displayHelperText = error || successMessage || helperText;
  const showStateIcon = effectiveState === 'success' || effectiveState === 'error';

  return (
    <div className={classNames}>
      <div
        className="flowbite-floating-label__wrapper"
        style={{
          borderRadius: 12,
          height: dims.height,
        }}
      >
        {icon && (
          <span className="flowbite-floating-label__icon" aria-hidden="true">
            {icon}
          </span>
        )}
        {isControlled ? (
          <input
            id={inputId}
            className="flowbite-floating-label__input"
            type={type}
            name={name}
            value={controlledValue}
            placeholder={placeholder ?? ' '}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isDisabled}
            required={required}
            aria-label={ariaLabel || label || undefined}
            aria-invalid={effectiveState === 'error'}
            aria-describedby={displayHelperText ? `${inputId}-helper` : undefined}
            style={{
              paddingTop: dims.py,
              paddingBottom: dims.py,
              paddingLeft: icon ? 36 : 12,
              paddingRight: (clearable || showStateIcon) ? 36 : 12,
              fontSize: dims.fontSize,
            }}
          />
        ) : (
          <input
            id={inputId}
            className="flowbite-floating-label__input"
            type={type}
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder ?? ' '}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isDisabled}
            required={required}
            aria-label={ariaLabel || label || undefined}
            aria-invalid={effectiveState === 'error'}
            aria-describedby={displayHelperText ? `${inputId}-helper` : undefined}
            style={{
              paddingTop: dims.py,
              paddingBottom: dims.py,
              paddingLeft: icon ? 36 : 12,
              paddingRight: (clearable || showStateIcon) ? 36 : 12,
              fontSize: dims.fontSize,
            }}
          />
        )}

        {label && (
          <label
            htmlFor={inputId}
            className="flowbite-floating-label__label"
            style={{
              left: icon ? 36 : 12,
              fontSize: dims.fontSize,
            }}
          >
            {label}
            {required && <span aria-hidden="true"> *</span>}
          </label>
        )}

        <span className="flowbite-floating-label__actions">
          {showStateIcon && (
            <span className="flowbite-floating-label__state-icon">
              {effectiveState === 'success' ? <CheckCircleIcon /> : <XCircleIcon />}
            </span>
          )}

          {clearable && hasValue && !isDisabled && (
            <button
              type="button"
              className="flowbite-floating-label__clear"
              onClick={handleClear}
              aria-label="Clear input"
              tabIndex={-1}
            >
              <CloseIcon />
            </button>
          )}
        </span>
      </div>

      {displayHelperText && (
        <p
          id={`${inputId}-helper`}
          className={`flowbite-floating-label__helper ${
            error ? 'flowbite-floating-label__helper--error' :
            successMessage ? 'flowbite-floating-label__helper--success' :
            ''
          }`}
        >
          {error || successMessage || helperText}
        </p>
      )}
    </div>
  );
};

export default FloatingLabel;