import React from 'react';
import './modals.css';

export type ModalsSection = 'info' | 'sign-in' | 'share' | 'all';

export interface ModalsProps {
  /** Which modal variant to render */
  section?: ModalsSection;
  /** Additional class names */
  className?: string;
}

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InfoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 4H2v8h12V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="7" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M11 5V3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10a8 8 0 10-9.25 7.9v-5.59H6.72V10h2.03V7.96c0-2 .97-3.92 4.1-3.92 1.01 0 1.74.1 1.74.1v1.83h-.96c-.99 0-1.3.62-1.3 1.25V10h2.25l-.36 2.31h-1.89v5.59A8 8 0 0018 10z" fill="currentColor" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.17 4.18a3.73 3.73 0 011.3-1.44 7.5 7.5 0 01-1.88.5 2.94 2.94 0 00-2.14-.91c-1.62 0-2.93 1.29-2.93 2.89 0 .22.03.44.08.65A8.35 8.35 0 013 3.56a2.85 2.85 0 00-.4 1.45c0 1 .52 1.89 1.32 2.41a2.95 2.95 0 01-1.33-.36v.04a2.9 2.9 0 002.34 2.84 3 3 0 01-.77.1c-.19 0-.37-.02-.55-.05a2.94 2.94 0 002.74 2.01 5.94 5.94 0 01-3.63 1.23c-.24 0-.47-.01-.7-.04a8.34 8.34 0 004.5 1.3c5.37 0 8.32-4.38 8.32-8.18 0-.12-.01-.25-.02-.37a5.84 5.84 0 001.47-1.5z" fill="currentColor" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3a2 2 0 11-2 2 2 2 0 012-2zM1 7h3v10H1V7zm6 0h3v1.5A3.36 3.36 0 0113 7c2.2 0 3 1.4 3 3.5V17h-3v-5.5c0-1-.2-2-1.5-2S10 10.5 10 11.5V17H7V7z" fill="currentColor" />
  </svg>
);

const LinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.05 11.05a3.5 3.5 0 005.9 0m-5.9 0A3.5 3.5 0 0111.05 7.1m-4 3.95A3.5 3.5 0 008.95 12.9m5.1-5.95a3.5 3.5 0 00-4.05-.08m4.05.08a3.5 3.5 0 01-.08 4.05m-3.97-3.97l.07.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ModalHeader = ({ title }: { title: string }) => (
  <div className="flowbite-modal__header">
    <h3 className="flowbite-modal__header-title">{title}</h3>
    <button className="flowbite-modal__close" type="button" aria-label="Close">
      <CloseIcon />
    </button>
  </div>
);

const InfoModal = () => (
  <div className="flowbite-modal flowbite-modal--info">
    <ModalHeader title="Modal header" />
    <div className="flowbite-modal__body">
      <div className="flowbite-modal__body-icon">
        <InfoIcon />
      </div>
      <h4 className="flowbite-modal__body-title">Designed to accelerate your development process</h4>
      <p className="flowbite-modal__body-text">
        Our design system is built with a comprehensive library of UI components that are designed to be intuitive,
        accessible, and customizable. Every component is meticulously crafted to ensure a seamless and cohesive design
        language across your entire application, allowing you to build user interfaces faster and more efficiently than ever before.
      </p>
    </div>
    <div className="flowbite-modal__actions">
      <button className="flowbite-modal__btn flowbite-modal__btn--primary" type="button">
        Explore Flowbite UI Components
      </button>
      <a href="#" className="flowbite-modal__link" onClick={(e) => e.preventDefault()}>
        View Live Demos
      </a>
    </div>
  </div>
);

const SignInModal = () => (
  <div className="flowbite-modal flowbite-modal--sign-in">
    <ModalHeader title="Sign in to your account" />
    <div className="flowbite-modal__body">
      <div className="flowbite-modal__field">
        <label className="flowbite-modal__field-label" htmlFor="modal-email">Your email</label>
        <div className="flowbite-modal__field-input">
          <EmailIcon />
          <input type="email" id="modal-email" placeholder="name@company.com" />
        </div>
      </div>
      <div className="flowbite-modal__field">
        <label className="flowbite-modal__field-label" htmlFor="modal-password">Password</label>
        <div className="flowbite-modal__field-input">
          <LockIcon />
          <input type="password" id="modal-password" placeholder="••••••••" />
        </div>
      </div>
      <div className="flowbite-modal__row">
        <label className="flowbite-modal__checkbox">
          <input type="checkbox" defaultChecked />
          Remember me
        </label>
        <a href="#" className="flowbite-modal__link" onClick={(e) => e.preventDefault()}>
          Forgot password?
        </a>
      </div>
    </div>
    <div className="flowbite-modal__actions">
      <button className="flowbite-modal__btn flowbite-modal__btn--primary" type="button" style={{ width: '100%' }}>
        Sign in
      </button>
    </div>
    <p className="flowbite-modal__body-text" style={{ textAlign: 'center' }}>
      Not registered?{' '}
      <a href="#" className="flowbite-modal__link" onClick={(e) => e.preventDefault()}>
        Create account
      </a>
    </p>
  </div>
);

const ShareModal = () => (
  <div className="flowbite-modal flowbite-modal--share">
    <ModalHeader title="Share this page" />
    <div className="flowbite-modal__body">
      <div className="flowbite-modal__field">
        <label className="flowbite-modal__field-label" htmlFor="modal-share-url">Share link</label>
        <div className="flowbite-modal__field-input">
          <LinkIcon />
          <input type="text" id="modal-share-url" value="https://flowbite.com" readOnly />
          <button className="flowbite-modal__close" type="button" aria-label="Copy link" style={{ width: 32, height: 32, borderRadius: 8 }}>
            <CopyIcon />
          </button>
        </div>
      </div>
      <div className="flowbite-modal__field">
        <label className="flowbite-modal__field-label">Share on social media</label>
        <div className="flowbite-modal__social">
          <button className="flowbite-modal__social-btn" type="button" aria-label="Share on Facebook">
            <FacebookIcon />
          </button>
          <button className="flowbite-modal__social-btn" type="button" aria-label="Share on Twitter">
            <TwitterIcon />
          </button>
          <button className="flowbite-modal__social-btn" type="button" aria-label="Share on Linkedin">
            <LinkedinIcon />
          </button>
        </div>
      </div>
    </div>
    <div className="flowbite-modal__actions">
      <a href="#" className="flowbite-modal__link" onClick={(e) => e.preventDefault()}>
        Embed
      </a>
    </div>
  </div>
);

const SECTION_DEFS: { key: Exclude<ModalsSection, 'all'>; title: string; node: React.ReactNode }[] = [
  { key: 'info', title: 'Info Modal', node: <InfoModal /> },
  { key: 'sign-in', title: 'Sign In Modal', node: <SignInModal /> },
  { key: 'share', title: 'Share Modal', node: <ShareModal /> },
];

/** Modal variants from the Flowbite Design System Figma ("---- Modals" canvas, node 3284-23179). Shows Info, Sign In, and Share modal types. */
export const Modals = ({ section = 'all', className = '' }: ModalsProps) => {
  if (section === 'all') {
    return (
      <div className={`flowbite-modals-showcase ${className}`}>
        <InfoModal />
        <SignInModal />
        <ShareModal />
      </div>
    );
  }

  const def = SECTION_DEFS.find((d) => d.key === section);
  if (!def) return null;

  return (
    <div className={`flowbite-modals-showcase ${className}`}>
      {def.node}
    </div>
  );
};

export default Modals;
