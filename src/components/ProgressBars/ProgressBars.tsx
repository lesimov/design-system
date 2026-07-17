import './progressbars.css';

/* ---------- Types ---------- */

export type ProgressBarColor =
  | 'primary'
  | 'success'
  | 'gray'
  | 'danger'
  | 'warning'
  | 'indigo'
  | 'purple'
  | 'cyan'
  | 'pink'
  | 'teal'
  | 'lime';

export type ProgressBarSize = 'base' | 'lg';

export type ProgressLabelPos = 'top' | 'bottom' | 'none';

export type ProgressSection = 'bars' | 'colors' | 'labels' | 'all';

export interface ProgressBarsProps {
  section?: ProgressSection;
  value?: number;
  size?: ProgressBarSize;
  color?: ProgressBarColor;
  label?: ProgressLabelPos;
  showPercent?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
}

/* ---------- Color Map ---------- */


/* ---------- SingleProgressBar (internal) ---------- */

interface SingleProgressBarProps {
  value: number;
  size?: ProgressBarSize;
  color?: ProgressBarColor;
  label?: ProgressLabelPos;
  showPercent?: boolean;
  leftLabel?: string;
  rightLabel?: string;
}

const SingleProgressBar = ({
  value,
  size = 'base',
  color = 'primary',
  label = 'none',
  showPercent = true,
  leftLabel,
  rightLabel,
}: SingleProgressBarProps) => {
  const clampedValue = Math.max(0, Math.min(100, value));
  const displayLeft = leftLabel ?? (showPercent ? `${clampedValue}%` : '');
  const displayRight = rightLabel ?? (showPercent ? `${clampedValue}%` : '');

  const trackClass = [
    'flowbite-progress__track',
    `flowbite-progress__track--${size}`,
  ].join(' ');

  const fillClass = [
    'flowbite-progress__fill',
    `flowbite-progress__fill--${color}`,
  ].join(' ');

  const bar = (
    <div
      className={trackClass}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={fillClass} style={{ width: `${clampedValue}%` }} />
    </div>
  );

  if (label === 'none') {
    return bar;
  }

  const wrapperClass = [
    'flowbite-progress__labeled',
    label === 'bottom' ? 'flowbite-progress__labeled--bottom' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass} style={{ gap: '6px' }}>
      <div className="flowbite-progress__label-row">
        <span>{displayLeft}</span>
        <span>{displayRight}</span>
      </div>
      {bar}
    </div>
  );
};

/* ---------- BarsSection ---------- */

const BarsSection = () => {
  const values = [25, 50, 75, 100];

  return (
    <div className="flowbite-progress-section">
      <h3 className="flowbite-progress-section__title">Bar Sizes</h3>

      {/* Base size */}
      <div className="flowbite-progress-row">
        <span className="flowbite-progress-row__label">Size: base (6px)</span>
        {values.map((v) => (
          <SingleProgressBar
            key={`base-${v}`}
            value={v}
            size="base"
            color="primary"
            label="top"
          />
        ))}
      </div>

      {/* Large size */}
      <div className="flowbite-progress-row">
        <span className="flowbite-progress-row__label">Size: lg (10px)</span>
        {values.map((v) => (
          <SingleProgressBar
            key={`lg-${v}`}
            value={v}
            size="lg"
            color="primary"
            label="top"
          />
        ))}
      </div>
    </div>
  );
};

/* ---------- ColorsSection ---------- */

const ColorsSection = () => {
  const colorNames: { key: ProgressBarColor; name: string }[] = [
    { key: 'primary', name: 'Primary' },
    { key: 'success', name: 'Success' },
    { key: 'gray', name: 'Gray' },
    { key: 'danger', name: 'Danger' },
    { key: 'warning', name: 'Warning' },
    { key: 'indigo', name: 'Indigo' },
    { key: 'purple', name: 'Purple' },
    { key: 'cyan', name: 'Cyan' },
    { key: 'pink', name: 'Pink' },
    { key: 'teal', name: 'Teal' },
    { key: 'lime', name: 'Lime' },
  ];

  return (
    <div className="flowbite-progress-section">
      <h3 className="flowbite-progress-section__title">Progress Bar Colors</h3>
      {colorNames.map(({ key, name }) => (
        <div key={key} className="flowbite-progress-color-row">
          <SingleProgressBar value={66} size="base" color={key} />
          <span className="flowbite-progress-color-row__label">{name}</span>
        </div>
      ))}
    </div>
  );
};

/* ---------- LabelsSection ---------- */

const LabelsSection = () => {
  return (
    <div className="flowbite-progress-section">
      <h3 className="flowbite-progress-section__title">Label Positions</h3>

      <div className="flowbite-progress-row">
        <span className="flowbite-progress-row__label">Top label</span>
        <SingleProgressBar
          value={75}
          size="base"
          color="primary"
          label="top"
          leftLabel="Progress"
          rightLabel="75%"
        />
      </div>

      <div className="flowbite-progress-row">
        <span className="flowbite-progress-row__label">Bottom label</span>
        <SingleProgressBar
          value={50}
          size="base"
          color="success"
          label="bottom"
          leftLabel="Progress"
          rightLabel="50%"
        />
      </div>

      <div className="flowbite-progress-row">
        <span className="flowbite-progress-row__label">No label</span>
        <SingleProgressBar
          value={100}
          size="base"
          color="warning"
          label="none"
        />
      </div>
    </div>
  );
};

/* ---------- Main Component ---------- */

export const ProgressBars = ({
  section = 'all',
  className = '',
}: ProgressBarsProps) => {
  const showAll = section === 'all';

  return (
    <div className={`flowbite-progress${className ? ` ${className}` : ''}`}>
      {showAll && <BarsSection />}
      {section === 'bars' && <BarsSection />}

      {showAll && <ColorsSection />}
      {section === 'colors' && <ColorsSection />}

      {showAll && <LabelsSection />}
      {section === 'labels' && <LabelsSection />}
    </div>
  );
};

export default ProgressBars;
