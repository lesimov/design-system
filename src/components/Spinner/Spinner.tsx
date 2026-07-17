import './spinner.css';

export type SpinnerColor = 'brand' | 'gray' | 'red' | 'green' | 'yellow' | 'purple' | 'blue' | 'white';
export type SpinnerSize = 'xs' | 'sm' | 'md' | 'base' | 'lg';

export interface SpinnerProps {
  /** Color theme */
  color?: SpinnerColor;
  /** Size variant: xs=12px, sm=24px, md=50px, base=75px, lg=100px */
  size?: SpinnerSize;
  /** Show background track ring */
  track?: boolean;
  /** Additional class names */
  className?: string;
}

const sizeMap: Record<SpinnerSize, number> = {
  xs: 12,
  sm: 24,
  md: 50,
  base: 75,
  lg: 100,
};

export const Spinner = ({
  color = 'brand',
  size = 'md',
  track = true,
  className = '',
}: SpinnerProps) => {
  const px = sizeMap[size];

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flowbite-spinner flowbite-spinner--${color} flowbite-spinner--${size}${className ? ' ' + className : ''}`}
      role="status"
      aria-label="Loading"
    >
      {track && (
        <circle
          cx="8"
          cy="8"
          r="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="flowbite-spinner__track"
        />
      )}
      <path
        d="M14 8a6 6 0 1 1-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        className="flowbite-spinner__arc"
      />
    </svg>
  );
};

export default Spinner;