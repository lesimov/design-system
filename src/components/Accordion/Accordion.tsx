import React, { useState, useCallback } from 'react';
import './accordion.css';

export type AccordionVariant =
  | 'default'
  | 'always-open'
  | 'flush'
  | 'arrow-style'
  | 'borderless';
export type AccordionSize = 'sm' | 'md' | 'lg';

export interface AccordionItemData {
  /** Heading text */
  title: string;
  /** Body content */
  children?: React.ReactNode;
  /** Custom icon override (shown before the heading) */
  icon?: React.ReactNode;
  /** Whether this item is initially open */
  defaultOpen?: boolean;
}

export interface AccordionProps {
  /** Array of accordion items */
  items: AccordionItemData[];
  /** Visual variant */
  variant?: AccordionVariant;
  /** Size variant */
  size?: AccordionSize;
  /** Show the leading icon before each heading */
  showIcon?: boolean;
  /** Additional class names */
  className?: string;
}

const QuestionCircleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-1.5 2-2.5 3v2m0 2.5h.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 7.5l5 5 5-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M15 12.5l-5-5-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDownIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 5v10m0 0l-4 4m4-4l4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 15V5m0 0l-4 4m4-4l4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Accordion = ({
  items,
  variant = 'default',
  size = 'md',
  showIcon = true,
  className = '',
}: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => {
    const initial = new Set<number>();
    items.forEach((item, i) => {
      if (item.defaultOpen) initial.add(i);
    });
    return initial;
  });

  const isAlwaysOpen = variant === 'always-open';
  const isArrowStyle = variant === 'arrow-style';

  const toggle = useCallback(
    (index: number) => {
      setOpenIndexes((prev) => {
        const next = new Set(prev);
        if (next.has(index)) {
          next.delete(index);
        } else {
          if (!isAlwaysOpen) next.clear();
          next.add(index);
        }
        return next;
      });
    },
    [isAlwaysOpen],
  );

  const classNames = [
    'flowbite-accordion',
    `flowbite-accordion--${variant}`,
    `flowbite-accordion--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      {items.map((item, index) => {
        const open = openIndexes.has(index);
        const buttonId = `flowlite-acc-trigger-${index}`;
        const panelId = `flowlite-acc-panel-${index}`;
        const defaultIcon = <QuestionCircleIcon />;

        return (
          <div
            key={index}
            className={[
              'flowbite-accordion__item',
              open ? 'flowbite-accordion__item--open' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <h3 className="flowbite-accordion__heading">
              <button
                id={buttonId}
                type="button"
                className="flowbite-accordion__button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span className="flowbite-accordion__button-content">
                  {showIcon && (item.icon ?? defaultIcon)}
                  <span className="flowbite-accordion__button-text">
                    {item.title}
                  </span>
                </span>
                {isArrowStyle
                  ? open
                    ? <ArrowUpIcon />
                    : <ArrowDownIcon />
                  : open
                    ? <ChevronUpIcon />
                    : <ChevronDownIcon />}
              </button>
            </h3>
            <div
              id={panelId}
              className="flowbite-accordion__panel"
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
            >
              <div className="flowbite-accordion__content">
                {item.children}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;