import React from 'react';
import './checkbox-radio.css';

export type CheckboxRadioSection = 'checkbox' | 'radio' | 'all';

export interface CheckboxRadioProps {
  /** Which section(s) to render */
  section?: CheckboxRadioSection;
  /** Additional class names */
  className?: string;
}

/** Checkbox & radio input states from the Flowbite Design System Figma ("---- Checkbox & radio" canvas, node 1149-54696). */
const CheckboxInputs = () => (
  <div className="flowbite-checkbox-radio-section">
    <h2 className="flowbite-checkbox-radio-section__title">Checkbox — base</h2>
    <div className="flowbite-checkbox-radio-row">
      <label className="flowbite-checkbox-radio-item">
        <input type="checkbox" className="flowbite-checkbox-radio-input" defaultChecked={false} />
        <span className="flowbite-checkbox-radio-item__label">Initial</span>
      </label>
      <label className="flowbite-checkbox-radio-item">
        <input type="checkbox" className="flowbite-checkbox-radio-input" defaultChecked />
        <span className="flowbite-checkbox-radio-item__label">Checked</span>
      </label>
      <label className="flowbite-checkbox-radio-item flowbite-checkbox-radio-item--disabled">
        <input type="checkbox" className="flowbite-checkbox-radio-input" disabled defaultChecked={false} />
        <span className="flowbite-checkbox-radio-item__label">Disabled</span>
      </label>
      <label className="flowbite-checkbox-radio-item flowbite-checkbox-radio-item--disabled">
        <input type="checkbox" className="flowbite-checkbox-radio-input" disabled defaultChecked />
        <span className="flowbite-checkbox-radio-item__label">Disabled + Checked</span>
      </label>
    </div>
    <div className="flowbite-checkbox-radio-row">
      <label className="flowbite-checkbox-radio-item">
        <input type="checkbox" className="flowbite-checkbox-radio-input" defaultChecked={false} id="focus-cb" />
        <span className="flowbite-checkbox-radio-item__label">Focus (unchecked)</span>
      </label>
      <label className="flowbite-checkbox-radio-item">
        <input type="checkbox" className="flowbite-checkbox-radio-input" defaultChecked id="focus-cb-checked" />
        <span className="flowbite-checkbox-radio-item__label">Focus (checked)</span>
      </label>
    </div>
  </div>
);

const RadioInputs = () => (
  <div className="flowbite-checkbox-radio-section">
    <h2 className="flowbite-checkbox-radio-section__title">Radio — default</h2>
    <div className="flowbite-checkbox-radio-row">
      <label className="flowbite-checkbox-radio-item">
        <input type="radio" name="radio-demo" className="flowbite-checkbox-radio-input flowbite-checkbox-radio-input--radio" defaultChecked={false} />
        <span className="flowbite-checkbox-radio-item__label">Initial</span>
      </label>
      <label className="flowbite-checkbox-radio-item">
        <input type="radio" name="radio-demo" className="flowbite-checkbox-radio-input flowbite-checkbox-radio-input--radio" defaultChecked />
        <span className="flowbite-checkbox-radio-item__label">Checked</span>
      </label>
      <label className="flowbite-checkbox-radio-item flowbite-checkbox-radio-item--disabled">
        <input type="radio" name="radio-disabled" className="flowbite-checkbox-radio-input flowbite-checkbox-radio-input--radio" disabled defaultChecked={false} />
        <span className="flowbite-checkbox-radio-item__label">Disabled</span>
      </label>
      <label className="flowbite-checkbox-radio-item flowbite-checkbox-radio-item--disabled">
        <input type="radio" name="radio-disabled-checked" className="flowbite-checkbox-radio-input flowbite-checkbox-radio-input--radio" disabled defaultChecked />
        <span className="flowbite-checkbox-radio-item__label">Disabled + Checked</span>
      </label>
    </div>
    <div className="flowbite-checkbox-radio-row">
      <label className="flowbite-checkbox-radio-item">
        <input type="radio" name="radio-focus" className="flowbite-checkbox-radio-input flowbite-checkbox-radio-input--radio" defaultChecked={false} id="focus-radio" />
        <span className="flowbite-checkbox-radio-item__label">Focus (unchecked)</span>
      </label>
      <label className="flowbite-checkbox-radio-item">
        <input type="radio" name="radio-focus-checked" className="flowbite-checkbox-radio-input flowbite-checkbox-radio-input--radio" defaultChecked id="focus-radio-checked" />
        <span className="flowbite-checkbox-radio-item__label">Focus (checked)</span>
      </label>
    </div>
  </div>
);

const SECTION_DEFS: { key: Exclude<CheckboxRadioSection, 'all'>; title: string; node: React.ReactNode }[] = [
  { key: 'checkbox', title: 'Checkbox', node: <CheckboxInputs /> },
  { key: 'radio', title: 'Radio', node: <RadioInputs /> },
];

export const CheckboxRadio = ({ section = 'all', className = '' }: CheckboxRadioProps) => {
  if (section === 'all') {
    return (
      <div className={`flowbite-checkbox-radio-showcase ${className}`}>
        <CheckboxInputs />
        <RadioInputs />
      </div>
    );
  }

  const def = SECTION_DEFS.find((d) => d.key === section);
  if (!def) return null;

  return (
    <div className={`flowbite-checkbox-radio-showcase ${className}`}>
      {def.node}
    </div>
  );
};

export default CheckboxRadio;