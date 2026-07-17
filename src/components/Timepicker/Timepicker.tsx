import React from 'react';
import './timepicker.css';

/* ==================================================================
 * Types
 * ================================================================== */

export type TimepickerSize = 'sm' | 'base' | 'lg';

export type TimepickerState = 'initial' | 'focus' | 'filled' | 'success' | 'error' | 'disabled';

export interface TimepickerProps {
  /** Size variant */
  size?: TimepickerSize;
  /** Visual state */
  state?: TimepickerState;
  /** Label text (renders above input) */
  label?: string;
  /** Show required asterisk */
  required?: boolean;
  /** Helper text (renders below input) */
  helperText?: string;
  /** Current value e.g. "22:45" */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Show the dropdown */
  open?: boolean;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Callback when input is clicked */
  onClick?: () => void;
  /** Additional class name */
  className?: string;
  /** Name attribute */
  name?: string;
}

export interface TimepickerDropdownProps {
  /** Size to match the input */
  size?: TimepickerSize;
  /** Current value e.g. "22:45" */
  value?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Called when AM/PM toggles */
  onPeriodChange?: (period: 'AM' | 'PM') => void;
  /** Current period */
  period?: 'AM' | 'PM';
  /** Whether the dropdown is open */
  open?: boolean;
  /** Additional class name */
  className?: string;
}

/* ==================================================================
 * Inline SVGs
 * ================================================================== */

const ClockIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM8 5v3l2 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AngleDownIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 10L8 6 4 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ==================================================================
 * Size definitions
 * ================================================================== */

interface SizeConfig {
  height: number;
  px: number;
  py: number;
  fontSize: number;
  iconSize: number;
}

const SIZE_MAP: Record<TimepickerSize, SizeConfig> = {
  sm: { height: 36, px: 8, py: 8, fontSize: 14, iconSize: 16 },
  base: { height: 40, px: 10, py: 10, fontSize: 14, iconSize: 16 },
  lg: { height: 48, px: 12, py: 12, fontSize: 16, iconSize: 20 },
};

/* ==================================================================
 * Timepicker Input Component
 * ================================================================== */

export const Timepicker = ({
  size = 'base',
  state = 'initial',
  label,
  required = false,
  helperText,
  value = '',
  placeholder = '-- : --',
  open: _open = false,
  onChange,
  onClick,
  className = '',
  name,
}: TimepickerProps) => {
  const sz = SIZE_MAP[size];
  const stateClass = state !== 'initial' ? ` flowbite-timepicker--${state}` : '';
  const filledClass = value && state === 'initial' ? ' flowbite-timepicker--filled' : '';
  const disabled = state === 'disabled';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={`flowbite-timepicker${stateClass}${filledClass} ${className}`.trim()}>
      {label && (
        <label className="flowbite-timepicker__label" htmlFor={name}>
          {label}
          {required && <span className="flowbite-timepicker__required">*</span>}
        </label>
      )}

      <div
        className={`flowbite-timepicker__input flowbite-timepicker__input--${size}`}
        onClick={disabled ? undefined : onClick}
      >
        <span className={`flowbite-timepicker__icon flowbite-timepicker__icon--${size}`}>
          <ClockIcon size={sz.iconSize} />
        </span>

        <input
          type="text"
          className="flowbite-timepicker__field"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={disabled ? undefined : handleChange}
          disabled={disabled}
          readOnly={true}
        />

        <span className={`flowbite-timepicker__dropdown-icon flowbite-timepicker__dropdown-icon--${size}`}>
          <AngleDownIcon size={sz.iconSize} />
        </span>
      </div>

      {helperText && <p className="flowbite-timepicker__helper">{helperText}</p>}
    </div>
  );
};

/* ==================================================================
 * Timepicker Dropdown Sub-Component
 * ================================================================== */

export const TimepickerDropdown = ({
  size = 'base',
  value = '',
  onChange,
  onPeriodChange,
  period = 'AM',
  open = true,
  className = '',
}: TimepickerDropdownProps) => {
  if (!open) return null;

  const [hoursStr = '', minutesStr = ''] = value.split(':');
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  const displayHours = isNaN(hours) ? 12 : hours;
  const displayMinutes = isNaN(minutes) ? 0 : minutes;

  const clampHours = (h: number) => Math.max(1, Math.min(12, h));
  const clampMinutes = (m: number) => Math.max(0, Math.min(59, m));

  const changeHours = (delta: number) => {
    const newH = clampHours(displayHours + delta);
    const newVal = `${String(newH).padStart(2, '0')}:${String(displayMinutes).padStart(2, '0')}`;
    onChange?.(newVal);
  };

  const changeMinutes = (delta: number) => {
    const newM = clampMinutes(displayMinutes + delta);
    const newVal = `${String(displayHours).padStart(2, '0')}:${String(newM).padStart(2, '0')}`;
    onChange?.(newVal);
  };

  const handleTimeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (/^\d{0,2}:?\d{0,2}$/.test(raw) || raw === '') {
      onChange?.(raw);
    }
  };

  return (
    <div className={`flowbite-timepicker__dropdown flowbite-timepicker__dropdown--${size} ${className}`.trim()}>
      {/* Header: time input + clock icon */}
      <div className="flowbite-timepicker__dropdown-header">
        <span className="flowbite-timepicker__dropdown-header-icon">
          <ClockIcon size={16} />
        </span>
        <input
          type="text"
          className="flowbite-timepicker__dropdown-time-input"
          value={value}
          onChange={handleTimeInputChange}
          placeholder="00:00"
        />
      </div>

      {/* AM/PM toggle */}
      <div className="flowbite-timepicker__ampm">
        <button
          className={`flowbite-timepicker__ampm-btn${period === 'AM' ? ' flowbite-timepicker__ampm-btn--active' : ''}`}
          onClick={() => onPeriodChange?.('AM')}
          type="button"
        >
          AM
        </button>
        <button
          className={`flowbite-timepicker__ampm-btn${period === 'PM' ? ' flowbite-timepicker__ampm-btn--active' : ''}`}
          onClick={() => onPeriodChange?.('PM')}
          type="button"
        >
          PM
        </button>
      </div>

      {/* Body: hours + minutes */}
      <div className="flowbite-timepicker__dropdown-body">
        {/* Hours */}
        <div className="flowbite-timepicker__time-section">
          <button
            className="flowbite-timepicker__arrow-btn"
            onClick={() => changeHours(1)}
            type="button"
            aria-label="Increase hours"
          >
            <ChevronUpIcon />
          </button>
          <span className="flowbite-timepicker__time-value">
            {String(displayHours).padStart(2, '0')}
          </span>
          <button
            className="flowbite-timepicker__arrow-btn"
            onClick={() => changeHours(-1)}
            type="button"
            aria-label="Decrease hours"
          >
            <ChevronDownIcon />
          </button>
        </div>

        {/* Separator */}
        <span className="flowbite-timepicker__time-separator">:</span>

        {/* Minutes */}
        <div className="flowbite-timepicker__time-section">
          <button
            className="flowbite-timepicker__arrow-btn"
            onClick={() => changeMinutes(1)}
            type="button"
            aria-label="Increase minutes"
          >
            <ChevronUpIcon />
          </button>
          <span className="flowbite-timepicker__time-value">
            {String(displayMinutes).padStart(2, '0')}
          </span>
          <button
            className="flowbite-timepicker__arrow-btn"
            onClick={() => changeMinutes(-1)}
            type="button"
            aria-label="Decrease minutes"
          >
            <ChevronDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timepicker;