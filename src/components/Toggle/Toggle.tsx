import { useState, useCallback, useId } from 'react';
import './toggle.css';

/* ---------- Types ---------- */

export interface ToggleProps {
  size?: 'base' | 'lg';
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  labelPosition?: 'left' | 'right';
  id?: string;
  className?: string;
  onChange?: (checked: boolean) => void;
}

/* ---------- Component ---------- */

export const Toggle = ({
  size = 'base',
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  label,
  labelPosition = 'right',
  id: externalId,
  className = '',
  onChange,
}: ToggleProps) => {
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : uncontrolledChecked;
  const generatedId = useId();
  const inputId = externalId || generatedId;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        if (!isControlled) {
          setUncontrolledChecked(e.target.checked);
        }
        onChange?.(e.target.checked);
      }
    },
    [disabled, isControlled, onChange],
  );

  const trackClasses = [
    'flowbite-toggle__track',
    `flowbite-toggle__track--${size}`,
    isChecked ? 'flowbite-toggle__track--checked' : 'flowbite-toggle__track--unchecked',
    disabled ? 'flowbite-toggle__track--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const thumbClasses = [
    'flowbite-toggle__thumb',
    `flowbite-toggle__thumb--${size}`,
  ]
    .filter(Boolean)
    .join(' ');

  const toggle = (
    <span className={trackClasses}>
      <span className={thumbClasses} />
    </span>
  );

  return (
    <label
      className="flowbite-toggle"
      role="switch"
      aria-checked={isChecked}
    >
      <input
        id={inputId}
        type="checkbox"
        className="flowbite-toggle__input"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      {label && labelPosition === 'left' && (
        <span className="flowbite-toggle__label">{label}</span>
      )}
      {toggle}
      {label && labelPosition === 'right' && (
        <span className="flowbite-toggle__label">{label}</span>
      )}
    </label>
  );
};

export default Toggle;