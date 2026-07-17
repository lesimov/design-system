import React, { useCallback } from 'react';
import './stepper.css';

/* ---------- Types ---------- */

export type StepStatus = 'completed' | 'active' | 'upcoming';

export interface Step {
  label: string;
  status?: StepStatus;
}

export interface StepperProps {
  /** Ordered list of steps. Each step has a label and optional status override. */
  steps: Step[];
  /** Controlled current step index (0-based). Mutually exclusive with steps[].status. */
  currentStep?: number;
  /** Default step to start at. Used when uncontrolled. */
  defaultStep?: number;
  /** Called when a step circle is clicked (if interactive). */
  onStepClick?: (index: number) => void;
  /** Called when Previous is clicked. */
  onPrev?: () => void;
  /** Called when Next is clicked. */
  onNext?: () => void;
  /** Custom Previous button text. Defaults to "Prev: {previous step label}". */
  prevLabel?: string;
  /** Custom Next button text. Defaults to "Next: {next step label}". */
  nextLabel?: string;
  /** Final step button text. Defaults to "Submit". */
  submitLabel?: string;
  /** Content area — typically a form or info for the active step. */
  children?: React.ReactNode;
  className?: string;
}

/* ---------- Helpers ---------- */

const CheckIcon = () => (
  <svg
    className="flowbite-stepper__check-icon"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M11.667 3.5L5.25 9.917 2.333 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    className="flowbite-stepper__btn-icon"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M10 12L6 8l4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    className="flowbite-stepper__btn-icon"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Derive status for each step based on controlled/uncontrolled currentStep. */
function deriveSteps(steps: Step[], currentStep?: number, defaultStep?: number): Step[] {
  // If any step has an explicit status, use as-is
  if (steps.some((s) => s.status !== undefined)) {
    return steps;
  }
  const activeIndex = currentStep ?? defaultStep ?? 0;
  return steps.map((s, i) => ({
    ...s,
    status: i < activeIndex ? 'completed' : i === activeIndex ? 'active' : 'upcoming',
  }));
}

/* ---------- Component ---------- */

export const Stepper = ({
  steps: rawSteps,
  currentStep,
  defaultStep = 0,
  onStepClick,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  submitLabel = 'Submit',
  children,
  className = '',
}: StepperProps) => {
  const isControlled = currentStep !== undefined;
  const activeIndex = isControlled ? currentStep : defaultStep;
  const derivedSteps = deriveSteps(rawSteps, currentStep, defaultStep);

  const handlePrev = useCallback(() => {
    onPrev?.();
  }, [onPrev]);

  const handleNext = useCallback(() => {
    onNext?.();
  }, [onNext]);

  const isFirstStep = activeIndex === 0;
  const isLastStep = activeIndex === rawSteps.length - 1;

  const prevBtnText =
    prevLabel ??
    (!isFirstStep ? `Prev: ${rawSteps[activeIndex - 1]?.label ?? ''}` : 'Previous');

  const nextBtnText =
    nextLabel ??
    (isLastStep ? submitLabel : `Next: ${rawSteps[activeIndex + 1]?.label ?? ''}`);

  return (
    <div className={['flowbite-stepper', className].filter(Boolean).join(' ')}>
      {/* Navigation */}
      <nav className="flowbite-stepper__nav" aria-label="Progress">
        {derivedSteps.map((step, i) => (
          <React.Fragment key={i}>
            {i > 0 && <hr className="flowbite-stepper__separator" aria-hidden="true" />}
            <div
              className={[
                'flowbite-stepper__step',
                `flowbite-stepper__step--${step.status ?? 'upcoming'}`,
                onStepClick ? 'flowbite-stepper__step--clickable' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              role={onStepClick ? 'button' : undefined}
              tabIndex={onStepClick ? 0 : undefined}
              onClick={onStepClick ? () => onStepClick(i) : undefined}
              onKeyDown={
                onStepClick
                  ? (e: React.KeyboardEvent) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onStepClick(i);
                      }
                    }
                  : undefined
              }
              aria-current={step.status === 'active' ? 'step' : undefined}
              aria-label={`Step ${i + 1}: ${step.label}${step.status === 'completed' ? ' (completed)' : ''}`}
            >
              <span className="flowbite-stepper__step-circle">
                {step.status === 'completed' ? <CheckIcon /> : i + 1}
              </span>
              <span className="flowbite-stepper__step-label">{step.label}</span>
            </div>
          </React.Fragment>
        ))}
      </nav>

      {/* Content */}
      {children && (
        <div className="flowbite-stepper__content">
          <h3 className="flowbite-stepper__content-heading">{children}</h3>
        </div>
      )}

      {/* Actions */}
      <div className="flowbite-stepper__actions">
        <button
          type="button"
          className={[
            'flowbite-stepper__btn',
            'flowbite-stepper__btn--secondary',
            isFirstStep ? 'flowbite-stepper__btn--hidden' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={handlePrev}
          disabled={isFirstStep}
          aria-disabled={isFirstStep}
        >
          <ArrowLeftIcon />
          {prevBtnText}
        </button>

        <button
          type="button"
          className="flowbite-stepper__btn flowbite-stepper__btn--primary"
          onClick={handleNext}
        >
          {nextBtnText}
          {!isLastStep && <ArrowRightIcon />}
        </button>
      </div>
    </div>
  );
};

export default Stepper;