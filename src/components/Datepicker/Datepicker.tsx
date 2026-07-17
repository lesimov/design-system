import { useState, useMemo } from 'react';
import { Icon } from '../Icon';
import './datepicker.css';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type DatepickerCellType =
  | 'initial'
  | 'hover'
  | 'active'
  | 'active-start'
  | 'active-between'
  | 'active-end'
  | 'disabled'
  | 'outlined'
  | 'today'
  | 'selected';

export interface DatepickerProps {
  /** The currently selected date (value). */
  selectedDate?: Date;
  /** Callback when a day cell is clicked. */
  onDateSelect?: (date: Date) => void;
  /** Callback when "Clear" is clicked. */
  onClear?: () => void;
  /** Callback when "Today" is clicked. */
  onToday?: () => void;
  /** Whether to show the footer with Clear / Today buttons. Default true. */
  showFooter?: boolean;
  /** Optional CSS class on the root element. */
  className?: string;
  /** Month to display (0‑based). Defaults to current month. */
  displayMonth?: number;
  /** Year to display. Defaults to current year. */
  displayYear?: number;
  /** Minimum selectable date. */
  minDate?: Date;
  /** Maximum selectable date. */
  maxDate?: Date;
  /** The start of a highlighted range. */
  rangeStart?: Date;
  /** The end of a highlighted range. */
  rangeEnd?: Date;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function firstWeekday(year: number, month: number): number {
  // Returns 0=Mon … 6=Sun
  const d = new Date(year, month, 1);
  const jsDay = d.getDay(); // 0=Sun … 6=Sat
  return jsDay === 0 ? 6 : jsDay - 1;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isInRange(day: number, month: number, year: number, start?: Date, end?: Date): 'none' | 'start' | 'between' | 'end' {
  if (!start || !end) return 'none';
  const date = new Date(year, month, day);
  if (isSameDay(date, start) && isSameDay(date, end)) return 'start';
  if (isSameDay(date, start)) return 'start';
  if (isSameDay(date, end)) return 'end';
  if (date > start && date < end) return 'between';
  return 'none';
}

/* ------------------------------------------------------------------ */
/*  Day Cell                                                           */
/* ------------------------------------------------------------------ */

interface DayCellProps {
  day: number;
  type: DatepickerCellType;
  onClick?: () => void;
  disabled?: boolean;
}

const DayCell = ({ day, type, onClick, disabled }: DayCellProps) => {
  const cls = [
    'flowbite-datepicker__cell',
    type !== 'initial' ? `flowbite-datepicker__cell--${type}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={cls}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={`${day}`}
    >
      {day}
    </button>
  );
};

/* ------------------------------------------------------------------ */
/*  Chevron Nav Buttons                                               */
/* ------------------------------------------------------------------ */

const NavButton = ({
  direction,
  onClick,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
}) => {
  const iconName = direction === 'prev' ? 'chevron-left' : 'chevron-right';
  return (
    <button
      type="button"
      className="flowbite-datepicker__nav-btn"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous month' : 'Next month'}
    >
      <Icon name={iconName} size={16} />
    </button>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export const Datepicker = ({
  selectedDate,
  onDateSelect,
  onClear,
  onToday,
  showFooter = true,
  className = '',
  displayMonth,
  displayYear,
  minDate,
  maxDate,
  rangeStart,
  rangeEnd,
}: DatepickerProps) => {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewMonth, setViewMonth] = useState(
    displayMonth ?? (selectedDate ?? today).getMonth()
  );
  const [viewYear, setViewYear] = useState(
    displayYear ?? (selectedDate ?? today).getFullYear()
  );

  // Sync when controlled props change
  if (displayMonth !== undefined && displayMonth !== viewMonth) {
    setViewMonth(displayMonth);
  }
  if (displayYear !== undefined && displayYear !== viewYear) {
    setViewYear(displayYear);
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const days = daysInMonth(viewYear, viewMonth);
  const firstDow = firstWeekday(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const handleDayClick = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    if (minDate && date < minDate) return;
    if (maxDate && date > maxDate) return;
    onDateSelect?.(date);
  };

  const handleClear = () => {
    onClear?.();
  };

  const handleToday = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    setViewMonth(d.getMonth());
    setViewYear(d.getFullYear());
    onToday?.();
    onDateSelect?.(d);
  };

  const getCellType = (day: number): DatepickerCellType => {
    const date = new Date(viewYear, viewMonth, day);

    // Disabled check
    if (minDate && date < minDate) return 'disabled';
    if (maxDate && date > maxDate) return 'disabled';

    // Selected / active
    if (selectedDate && isSameDay(date, selectedDate)) return 'active';

    // Range
    const rangePos = isInRange(day, viewMonth, viewYear, rangeStart, rangeEnd);
    if (rangePos === 'start') return 'active-start';
    if (rangePos === 'between') return 'active-between';
    if (rangePos === 'end') return 'active-end';

    // Today
    if (isSameDay(date, today)) return 'today';

    return 'initial';
  };

  // Build calendar grid rows
  const calendarRows: { day: number; type: DatepickerCellType }[][] = [];
  let row: { day: number; type: DatepickerCellType }[] = [];

  // Empty cells before first day
  for (let i = 0; i < firstDow; i++) {
    row.push({ day: 0, type: 'initial' });
  }

  for (let d = 1; d <= days; d++) {
    const type = getCellType(d);
    row.push({ day: d, type });
    if (row.length === 7) {
      calendarRows.push(row);
      row = [];
    }
  }

  // Pad last row
  if (row.length > 0) {
    while (row.length < 7) {
      row.push({ day: 0, type: 'initial' });
    }
    calendarRows.push(row);
  }

  return (
    <div
      className={`flowbite-datepicker ${className}`.trim()}
      role="dialog"
      aria-label="Datepicker"
    >
      {/* ------ Header: Navigation ------ */}
      <div className="flowbite-datepicker__header">
        <NavButton direction="prev" onClick={prevMonth} />
        <span className="flowbite-datepicker__month-year">
          {monthNames[viewMonth]} {viewYear}
        </span>
        <NavButton direction="next" onClick={nextMonth} />
      </div>

      {/* ------ Weekday Row ------ */}
      <div className="flowbite-datepicker__weekdays">
        {WEEKDAYS.map((wd) => (
          <div key={wd} className="flowbite-datepicker__weekday">
            {wd}
          </div>
        ))}
      </div>

      {/* ------ Day Cells ------ */}
      <div className="flowbite-datepicker__days">
        {calendarRows.flat().map((cell, idx) =>
          cell.day === 0 ? (
            <div key={`empty-${idx}`} className="flowbite-datepicker__cell flowbite-datepicker__cell--empty" />
          ) : (
            <DayCell
              key={`${viewYear}-${viewMonth}-${cell.day}`}
              day={cell.day}
              type={cell.type}
              onClick={() => handleDayClick(cell.day)}
              disabled={cell.type === 'disabled'}
            />
          )
        )}
      </div>

      {/* ------ Footer ------ */}
      {showFooter && (
        <div className="flowbite-datepicker__footer">
          <button type="button" className="flowbite-datepicker__footer-btn flowbite-datepicker__footer-btn--clear" onClick={handleClear}>
            Clear
          </button>
          <button type="button" className="flowbite-datepicker__footer-btn flowbite-datepicker__footer-btn--today" onClick={handleToday}>
            Today
          </button>
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Showcase — all cell states displayed in a grid                     */
/* ------------------------------------------------------------------ */

export const DatepickerShowcase = () => {
  const cellTypes: { label: string; type: DatepickerCellType }[] = [
    { label: 'Initial', type: 'initial' },
    { label: 'Hover', type: 'hover' },
    { label: 'Active', type: 'active' },
    { label: 'Active Start', type: 'active-start' },
    { label: 'Active Between', type: 'active-between' },
    { label: 'Active End', type: 'active-end' },
    { label: 'Disabled', type: 'disabled' },
    { label: 'Outlined', type: 'outlined' },
    { label: 'Today', type: 'today' },
    { label: 'Selected', type: 'selected' },
  ];

  return (
    <div className="flowbite-datepicker-showcase">
      <h3 className="flowbite-datepicker-showcase__title">Datepicker Cell States</h3>
      <div className="flowbite-datepicker-showcase__grid">
        {cellTypes.map(({ label, type }) => (
          <div key={type} className="flowbite-datepicker-showcase__item">
            <DayCell day={15} type={type} />
            <span className="flowbite-datepicker-showcase__label">{label}</span>
          </div>
        ))}
      </div>

      <h3 className="flowbite-datepicker-showcase__title" style={{ marginTop: 32 }}>
        Full Calendar Example
      </h3>
      <Datepicker
        selectedDate={new Date(2025, 5, 15)}
        rangeStart={new Date(2025, 5, 10)}
        rangeEnd={new Date(2025, 5, 20)}
        displayMonth={5}
        displayYear={2025}
      />
    </div>
  );
};

export default Datepicker;