import { useState, useCallback, useRef } from 'react';
import './rangeslider.css';

/* ==================================================================
 * Types
 * ================================================================== */

export interface RangeSliderProps {
  /** Single thumb ('default') or dual thumb ('range'). */
  variant?: 'default' | 'range';
  min?: number;
  max?: number;
  step?: number;
  /** Controlled value — pair with `onChange`. */
  value?: number | [number, number];
  /** Uncontrolled initial value. */
  defaultValue?: number | [number, number];
  /** Show volume-down / volume-up icons outside the inline labels. */
  showIcons?: boolean;
  /** Show the min / max inline labels. */
  showLabels?: boolean;
  /** Show a tooltip above each thumb. */
  showTooltip?: boolean;
  /** Show evenly-spaced helper tick labels beneath the track. */
  showHelper?: boolean;
  disabled?: boolean;
  className?: string;
  /** Format a value for display in labels & tooltips. Default: `40%`. */
  formatValue?: (value: number) => string;
  onChange?: (value: number | [number, number]) => void;
}

/* ==================================================================
 * Inline SVG icons (Flowbite volume-down / volume-up)
 * ================================================================== */

const VolumeDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M8.66667 1.33334L4.66667 4.66668H1.33333V11.3333H4.66667L8.66667 14.6667V1.33334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.2933 5.33334C12.0333 6.29334 12.3333 7.33334 12.3333 8.00001C12.3333 8.66668 12.0333 9.70668 11.2933 10.6667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VolumeUpIcon = () => (
  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M8.66667 1.33334L4.66667 4.66668H1.33333V11.3333H4.66667L8.66667 14.6667V1.33334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3333 5.33334C12.6667 6.66668 12.6667 9.33334 11.3333 10.6667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 3.33334C15.3333 5.66668 15.3333 10.3333 13.3333 12.6667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ==================================================================
 * Helpers
 * ================================================================== */

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

const snapToStep = (value: number, step: number): number =>
  Math.round(value / step) * step;

const defaultFormat = (value: number): string => `${Math.round(value)}%`;

/** Which thumb is engaged: 'single' for the default variant, 'min'/'max' for range. */
type ThumbId = 'single' | 'min' | 'max' | null;

/* ==================================================================
 * RangeSlider Component
 * ================================================================== */

export const RangeSlider = ({
  variant = 'default',
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  defaultValue,
  showIcons = false,
  showLabels = true,
  showTooltip = false,
  showHelper = false,
  disabled = false,
  className = '',
  formatValue = defaultFormat,
  onChange,
}: RangeSliderProps) => {
  const isRange = variant === 'range';
  const initial = defaultValue ?? (isRange ? [25, 75] : 40);
  const [internalValue, setInternalValue] = useState<number | [number, number]>(initial);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const trackRef = useRef<HTMLDivElement>(null);
  const [activeThumb, setActiveThumb] = useState<ThumbId>(null);
  const dragRef = useRef<ThumbId>(null);

  /* ---- value <-> percent ---- */

  const toPercent = useCallback(
    (v: number) => ((v - min) / (max - min)) * 100,
    [min, max],
  );

  const valueFromPosition = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) return min;
      const rect = track.getBoundingClientRect();
      const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
      return clamp(snapToStep(min + ratio * (max - min), step), min, max);
    },
    [min, max, step],
  );

  /* ---- commit a new value ---- */

  const commit = useCallback(
    (next: number | [number, number]) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  /* ---- pointer drag ---- */

  const beginDrag = useCallback(
    (clientX: number, thumb?: 'single' | 'min' | 'max') => {
      if (disabled) return;
      let target: 'single' | 'min' | 'max' | undefined = thumb;

      if (isRange && !target) {
        const [low, high] = value as [number, number];
        const clickVal = valueFromPosition(clientX);
        target = Math.abs(clickVal - low) <= Math.abs(clickVal - high) ? 'min' : 'max';
      }
      if (!isRange && !target) target = 'single';

      dragRef.current = target ?? null;
      setActiveThumb(target ?? null);

      if (!isRange) {
        commit(valueFromPosition(clientX));
      } else if (target) {
        const [low, high] = value as [number, number];
        const v = valueFromPosition(clientX);
        if (target === 'min') commit([Math.min(v, high - step), high]);
        else commit([low, Math.max(v, low + step)]);
      }
    },
    [disabled, isRange, value, valueFromPosition, commit, step],
  );

  const moveDrag = useCallback(
    (clientX: number) => {
      if (disabled || !dragRef.current) return;
      const v = valueFromPosition(clientX);
      const thumb = dragRef.current;

      if (!isRange) {
        commit(v);
      } else {
        const [low, high] = value as [number, number];
        if (thumb === 'min') commit([Math.min(v, high - step), high]);
        else if (thumb === 'max') commit([low, Math.max(v, low + step)]);
      }
    },
    [disabled, isRange, value, valueFromPosition, commit, step],
  );

  const endDrag = useCallback(() => {
    dragRef.current = null;
    setActiveThumb(null);
  }, []);

  /* ---- mouse ---- */

  const onMouseDown = useCallback(
    (e: React.MouseEvent, thumb?: 'single' | 'min' | 'max') => {
      e.preventDefault();
      beginDrag(e.clientX, thumb);
      const onMove = (ev: MouseEvent) => moveDrag(ev.clientX);
      const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        endDrag();
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    },
    [beginDrag, moveDrag, endDrag],
  );

  /* ---- touch ---- */

  const onTouchStart = useCallback(
    (e: React.TouchEvent, thumb?: 'single' | 'min' | 'max') => {
      beginDrag(e.touches[0].clientX, thumb);
      const onMove = (ev: TouchEvent) => {
        ev.preventDefault();
        moveDrag(ev.touches[0].clientX);
      };
      const onEnd = () => {
        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('touchend', onEnd);
        endDrag();
      };
      document.addEventListener('touchmove', onMove, { passive: false });
      document.addEventListener('touchend', onEnd);
    },
    [beginDrag, moveDrag, endDrag],
  );

  /* click on the track (when not already dragging a thumb) */
  const onTrackPointerDown = useCallback(
    (e: React.MouseEvent) => {
      if (activeThumb) return;
      onMouseDown(e);
    },
    [activeThumb, onMouseDown],
  );

  /* ---- keyboard ---- */

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent, thumb?: 'min' | 'max') => {
      if (disabled) return;
      const isDown = e.key === 'ArrowLeft' || e.key === 'ArrowDown';
      const isUp = e.key === 'ArrowRight' || e.key === 'ArrowUp';
      if (!isDown && !isUp) return;
      e.preventDefault();
      const delta = isUp ? step : -step;

      if (!isRange) {
        commit(clamp((value as number) + delta, min, max));
      } else if (thumb) {
        const [low, high] = value as [number, number];
        if (thumb === 'min') commit([clamp(low + delta, min, high - step), high]);
        else commit([low, clamp(high + delta, low + step, max)]);
      }
    },
    [disabled, isRange, value, step, min, max, commit],
  );

  /* ---- derived render values ---- */

  const singleVal = value as number;
  const [rangeLow, rangeHigh] = isRange
    ? (value as [number, number])
    : [min, max];

  const pct = isRange ? 0 : toPercent(singleVal);
  const pctLow = isRange ? toPercent(rangeLow) : 0;
  const pctHigh = isRange ? toPercent(rangeHigh) : 100;

  const helperValues = Array.from({ length: 5 }, (_, i) =>
    Math.round(min + (i * (max - min)) / 4),
  );

  /* ---- class builders ---- */

  const rootClass = [
    'flowbite-rangeslider',
    `flowbite-rangeslider--${variant}`,
    disabled ? 'flowbite-rangeslider--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const thumbClass = (thumb: 'single' | 'min' | 'max') =>
    [
      'flowbite-rangeslider__thumb',
      activeThumb === thumb ? 'flowbite-rangeslider__thumb--active' : '',
    ]
      .filter(Boolean)
      .join(' ');

  /* ---- thumb renderer ---- */

  const renderThumb = (
    thumb: 'single' | 'min' | 'max',
    left: number,
    ariaLabel: string,
    ariaNow: number,
  ) => (
    <div
      className={thumbClass(thumb)}
      style={{ left: `${left}%` }}
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={Math.round(ariaNow)}
      aria-valuetext={formatValue(ariaNow)}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      onMouseDown={(e) => {
        e.stopPropagation();
        onMouseDown(e, thumb);
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
        onTouchStart(e, thumb);
      }}
      onKeyDown={(e) => onKeyDown(e, thumb === 'single' ? undefined : thumb)}
    />
  );

  return (
    <div className={rootClass}>
      <div className="flowbite-rangeslider__row">
        {showIcons && (
          <span className="flowbite-rangeslider__icon">
            <VolumeDownIcon />
          </span>
        )}

        {showLabels && (
          <span className="flowbite-rangeslider__label-inline">{formatValue(min)}</span>
        )}

        <div
          className="flowbite-rangeslider__track-wrapper"
          onMouseDown={onTrackPointerDown}
        >
          <div className="flowbite-rangeslider__track" ref={trackRef}>
            {/* filled bar */}
            {!isRange ? (
              <div className="flowbite-rangeslider__bar" style={{ left: 0, width: `${pct}%` }} />
            ) : (
              <div
                className="flowbite-rangeslider__bar"
                style={{ left: `${pctLow}%`, width: `${pctHigh - pctLow}%` }}
              />
            )}

            {/* tooltips */}
            {showTooltip && !isRange && (
              <div className="flowbite-rangeslider__tooltip" style={{ left: `${pct}%` }}>
                {formatValue(singleVal)}
              </div>
            )}
            {showTooltip && isRange && (
              <>
                <div className="flowbite-rangeslider__tooltip" style={{ left: `${pctLow}%` }}>
                  {formatValue(rangeLow)}
                </div>
                <div className="flowbite-rangeslider__tooltip" style={{ left: `${pctHigh}%` }}>
                  {formatValue(rangeHigh)}
                </div>
              </>
            )}

            {/* thumbs */}
            {!isRange
              ? renderThumb('single', pct, 'Slider value', singleVal)
              : (
                <>
                  {renderThumb('min', pctLow, 'Minimum value', rangeLow)}
                  {renderThumb('max', pctHigh, 'Maximum value', rangeHigh)}
                </>
              )}
          </div>
        </div>

        {showLabels && (
          <span className="flowbite-rangeslider__label-inline">{formatValue(max)}</span>
        )}

        {showIcons && (
          <span className="flowbite-rangeslider__icon">
            <VolumeUpIcon />
          </span>
        )}
      </div>

      {showHelper && (
        <div className="flowbite-rangeslider__helper">
          {helperValues.map((v) => (
            <span key={v} className="flowbite-rangeslider__helper-item">
              {v}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default RangeSlider;
