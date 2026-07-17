import type { ReactNode } from 'react';
import './forms.css';

/* ---------- Types ---------- */

export type FormsSection = 'inputs' | 'groups' | 'all';

export interface FormsProps {
  /** Showcase section to render */
  section?: FormsSection;
  /** Additional class names */
  className?: string;
}

/* ---------- Inline SVG icons (16×16, outline, stroke=currentColor) ---------- */

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6667 11.5C10.6667 12.8807 9.47376 14 8 14C6.52624 14 5.33333 12.8807 5.33333 11.5C5.33333 10.1193 6.52624 9 8 9C9.47376 9 10.6667 10.1193 10.6667 11.5Z" stroke="currentColor" strokeWidth="1.33"/>
    <path d="M8 8C9.84096 8 11.3333 6.50761 11.3333 4.66667C11.3333 2.82572 9.84096 1.33333 8 1.33333C6.15905 1.33333 4.66667 2.82572 4.66667 4.66667C4.66667 6.50761 6.15905 8 8 8Z" stroke="currentColor" strokeWidth="1.33"/>
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round"/>
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 14L11.1333 11.1333" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 6.66667H14" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33333 1.33333V4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.6667 1.33333V4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FileIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.33333 1.33333H4C3.26362 1.33333 2.66667 1.93029 2.66667 2.66667V13.3333C2.66667 14.0697 3.26362 14.6667 4 14.6667H12C12.7364 14.6667 13.3333 14.0697 13.3333 13.3333V5.33333L9.33333 1.33333Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.33333 1.33333V5.33333H13.3333" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MinusIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33333 8H12.6667" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round"/>
  </svg>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3.33333V12.6667M3.33333 8H12.6667" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round"/>
  </svg>
);

const BedIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.33333 14V2.66667M14.6667 14V10.6667M14.6667 10.6667V8C14.6667 7.26362 14.0697 6.66667 13.3333 6.66667H6.66667C5.93029 6.66667 5.33333 7.26362 5.33333 8V10.6667M14.6667 10.6667H5.33333M5.33333 10.6667H1.33333M1.33333 10.6667V14" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.6667 4.66667C10.6667 5.40305 10.0697 6 9.33333 6C8.59695 6 8 5.40305 8 4.66667C8 3.93029 8.59695 3.33333 9.33333 3.33333C10.0697 3.33333 10.6667 3.93029 10.6667 4.66667Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.33333 8H14.6667" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 1.33333C9.66667 3.16667 10.6667 5.5 10.6667 8C10.6667 10.5 9.66667 12.8333 8 14.6667C6.33333 12.8333 5.33333 10.5 5.33333 8C5.33333 5.5 6.33333 3.16667 8 1.33333Z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ---------- Section shell ---------- */

const SectionShell = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="flowbite-forms-section">
    <h2 className="flowbite-forms-section__title">{title}</h2>
    <div className="flowbite-forms-showcase">{children}</div>
  </section>
);

/* ---------- Form group wrapper ---------- */

const FormGroup = ({
  label,
  required,
  wide,
  full,
  children,
}: {
  label?: string;
  required?: boolean;
  wide?: boolean;
  full?: boolean;
  children: ReactNode;
}) => {
  const cls = [
    'flowbite-forms__group',
    wide && 'flowbite-forms__group--wide',
    full && 'flowbite-forms__group--full',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cls}>
      {label && (
        <label className={`flowbite-forms__label${required ? ' flowbite-forms__label--required' : ''}`}>
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

/* ---------- Inputs section ---------- */

const InputsSection = () => (
  <SectionShell title="Inputs">
    {/* Default */}
    <FormGroup label="Your email" required>
      <input
        type="email"
        className="flowbite-forms__input"
        placeholder="name@flowbite.com"
      />
      <span className="flowbite-forms__helper">We'll never share your email. Read our privacy policy.</span>
    </FormGroup>

    {/* With icon */}
    <FormGroup label="Username" required>
      <div className="flowbite-forms__input-wrap">
        <UserIcon className="flowbite-forms__input-icon flowbite-forms__input-icon--left" />
        <input
          type="text"
          className="flowbite-forms__input flowbite-forms__input--with-icon"
          placeholder="Enter your username"
        />
        <CloseIcon className="flowbite-forms__input-icon flowbite-forms__input-icon--right" />
      </div>
    </FormGroup>

    {/* With helper */}
    <FormGroup label="Password" required>
      <input
        type="password"
        className="flowbite-forms__input"
        placeholder="Enter your password"
      />
      <span className="flowbite-forms__helper">Must be at least 8 characters long.</span>
    </FormGroup>

    {/* With button */}
    <FormGroup label="Subscribe to newsletter">
      <div className="flowbite-forms__input-row">
        <input
          type="email"
          className="flowbite-forms__input"
          placeholder="Enter your email"
        />
        <button className="flowbite-forms__btn" type="button">Subscribe</button>
      </div>
    </FormGroup>

    {/* Textarea */}
    <FormGroup label="Your message" required>
      <div className="flowbite-forms__textarea">
        <textarea
          className="flowbite-forms__textarea-field"
          placeholder="Write your message..."
          defaultValue=""
        />
        <span className="flowbite-forms__textarea-helper">0/500</span>
      </div>
    </FormGroup>

    {/* Prefix */}
    <FormGroup label="Price">
      <div className="flowbite-forms__affix">
        <span className="flowbite-forms__affix-addon flowbite-forms__affix-addon--prefix">$</span>
        <input
          type="text"
          className="flowbite-forms__affix-input flowbite-forms__affix-input--prefix"
          placeholder="0.00"
        />
      </div>
    </FormGroup>

    {/* Suffix */}
    <FormGroup label="Email">
      <div className="flowbite-forms__affix">
        <input
          type="text"
          className="flowbite-forms__affix-input flowbite-forms__affix-input--suffix"
          placeholder="yourname"
        />
        <span className="flowbite-forms__affix-addon flowbite-forms__affix-addon--suffix">@domain.com</span>
      </div>
    </FormGroup>

    {/* Select */}
    <FormGroup label="Choose a country">
      <div className="flowbite-forms__select-wrap">
        <select className="flowbite-forms__select" defaultValue="">
          <option value="" disabled>Select country...</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="de">Germany</option>
          <option value="fr">France</option>
        </select>
        <ArrowDownIcon className="flowbite-forms__select-arrow" />
      </div>
    </FormGroup>

    {/* File input */}
    <FormGroup label="Upload file">
      <label className="flowbite-forms__file-input">
        <FileIcon className="flowbite-forms__file-input-icon" />
        <span className="flowbite-forms__file-input-text">Choose file</span>
        <input type="file" />
      </label>
    </FormGroup>
  </SectionShell>
);

/* ---------- Groups section ---------- */

const GroupsSection = () => (
  <SectionShell title="Groups">
    {/* 2 inputs */}
    <FormGroup label="Full name" wide>
      <div className="flowbite-forms__row">
        <div className="flowbite-forms__row-item">
          <input
            type="text"
            className="flowbite-forms__input"
            placeholder="First name"
          />
        </div>
        <div className="flowbite-forms__row-item">
          <input
            type="text"
            className="flowbite-forms__input"
            placeholder="Last name"
          />
        </div>
      </div>
    </FormGroup>

    {/* 2 buttons */}
    <FormGroup label="Search" wide>
      <div className="flowbite-forms__row-group">
        <div className="flowbite-forms__row">
          <div className="flowbite-forms__row-item">
            <SearchIcon className="flowbite-forms__input-icon flowbite-forms__input-icon--left" />
            <input
              type="text"
              className="flowbite-forms__input"
              placeholder="Search..."
            />
          </div>
          <div className="flowbite-forms__row-item">
            <CalendarIcon className="flowbite-forms__input-icon flowbite-forms__input-icon--left" />
            <input
              type="text"
              className="flowbite-forms__input"
              placeholder="Select date"
            />
          </div>
        </div>
        <div className="flowbite-forms__row-actions">
          <button className="flowbite-forms__btn" type="button">Search</button>
          <button className="flowbite-forms__btn flowbite-forms__btn--secondary" type="button">Reset</button>
        </div>
      </div>
    </FormGroup>

    {/* Staked left/right */}
    <FormGroup label="Quantity">
      <div className="flowbite-forms__staked">
        <button className="flowbite-forms__staked-btn flowbite-forms__staked-btn--left" type="button">
          <MinusIcon />
        </button>
        <input
          type="text"
          className="flowbite-forms__staked-input"
          defaultValue="1"
          readOnly
        />
        <button className="flowbite-forms__staked-btn flowbite-forms__staked-btn--right" type="button">
          <PlusIcon />
        </button>
      </div>
    </FormGroup>

    {/* Staked full */}
    <FormGroup label="Booking details">
      <div className="flowbite-forms__staked-full">
        <button className="flowbite-forms__staked-btn" type="button">
          <BedIcon />
        </button>
        <input
          type="text"
          className="flowbite-forms__staked-input"
          placeholder="Check in"
        />
        <input
          type="text"
          className="flowbite-forms__staked-input"
          placeholder="Check out"
        />
        <button className="flowbite-forms__staked-btn" type="button">
          <GlobeIcon />
        </button>
      </div>
    </FormGroup>

    {/* Phone input */}
    <FormGroup label="Phone number">
      <div className="flowbite-forms__phone">
        <select className="flowbite-forms__phone-select" defaultValue="us">
          <option value="us">US +1</option>
          <option value="uk">UK +44</option>
          <option value="de">DE +49</option>
          <option value="fr">FR +33</option>
        </select>
        <input
          type="tel"
          className="flowbite-forms__phone-input"
          placeholder="(123) 456-7890"
        />
        <button className="flowbite-forms__phone-btn" type="button">Send code</button>
      </div>
    </FormGroup>
  </SectionShell>
);

/* ---------- Main component ---------- */

export const Forms = ({
  section = 'all',
  className = '',
}: FormsProps) => {
  const showInputs = section === 'inputs' || section === 'all';
  const showGroups = section === 'groups' || section === 'all';

  return (
    <div className={`flowbite-forms ${className}`.trim()}>
      {showInputs && <InputsSection />}
      {showGroups && <GroupsSection />}
    </div>
  );
};

export default Forms;