import { useState, type ReactNode } from 'react';
import './table.css';

/* ---------- Types ---------- */

export interface TableColumn<T = Record<string, unknown>> {
  key: string;
  header: string;
  width?: number | string;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
  render?: (value: unknown, row: T, index: number) => ReactNode;
}

export interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  variant?: 'default' | 'striped-columns' | 'striped-rows';
  searchable?: boolean;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearch?: (value: string) => void;
  className?: string;
  headerActions?: ReactNode;
  footer?: ReactNode;
  pageSize?: number;
  currentPage?: number;
  totalItems?: number;
  onPageChange?: (page: number) => void;
  onRowClick?: (row: T, index: number) => void;
  loading?: boolean;
  'aria-label'?: string;
}

/* ---------- Inline SVG Icons ---------- */

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AngleLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AngleRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MoreHorizontalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="8" cy="4" r="1.5" fill="currentColor"/>
    <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="8" cy="12" r="1.5" fill="currentColor"/>
  </svg>
);

/* ---------- Badge Status Component ---------- */

const statusColors: Record<string, { bg: string; text: string; dot: string }> = {
  Completed: { bg: '#ECFDF5', text: '#007A55', dot: '#00D492' },
  Processing: { bg: '#EEF6FF', text: '#1447E6', dot: '#51A2FF' },
  Pending: { bg: '#FFFBEB', text: '#A65F00', dot: '#FDC700' },
  Cancelled: { bg: '#FEF0F2', text: '#C70036', dot: '#FF637E' },
  Failed: { bg: '#FEF0F2', text: '#C70036', dot: '#FF637E' },
  Shipped: { bg: '#ECFDF5', text: '#007A55', dot: '#00D492' },
  Approved: { bg: '#ECFDF5', text: '#007A55', dot: '#00D492' },
  Rejected: { bg: '#FEF0F2', text: '#C70036', dot: '#FF637E' },
  Active: { bg: '#EEF6FF', text: '#1447E6', dot: '#51A2FF' },
  Inactive: { bg: '#F3F4F6', text: '#4A5565', dot: '#99A1AF' },
};

const StatusBadge = ({ status }: { status: string }) => {
  const colors = statusColors[status] ?? { bg: '#F3F4F6', text: '#4A5565', dot: '#99A1AF' };
  return (
    <span className="flowbite-table__status-badge" style={{ backgroundColor: colors.bg, color: colors.text }}>
      <span className="flowbite-table__status-dot" style={{ backgroundColor: colors.dot }} />
      {status}
    </span>
  );
};

/* ---------- Main Table Component ---------- */

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  variant = 'default',
  searchable = false,
  searchPlaceholder = 'Search...',
  searchValue = '',
  onSearch,
  className = '',
  headerActions,
  footer,
  pageSize = 10,
  currentPage = 1,
  totalItems = 0,
  onPageChange,
  onRowClick,
  loading = false,
  'aria-label': ariaLabel = 'Table',
}: TableProps<T>) {
  const [internalSearch, setInternalSearch] = useState(searchValue);
  const isControlled = searchValue !== undefined;
  const displaySearch = isControlled ? searchValue : internalSearch;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  const handleSearch = (value: string) => {
    if (!isControlled) setInternalSearch(value);
    onSearch?.(value);
  };

  const striped = variant === 'striped-columns' || variant === 'striped-rows';

  return (
    <div
      className={`flowbite-table${className ? ' ' + className : ''}`}
      role="region"
      aria-label={ariaLabel}
    >
      {/* Table Header */}
      <div className="flowbite-table__header">
        <div className="flowbite-table__header-left">
          {searchable && (
            <div className="flowbite-table__search">
              <span className="flowbite-table__search-icon">
                <SearchIcon />
              </span>
              <input
                type="text"
                className="flowbite-table__search-input"
                placeholder={searchPlaceholder}
                value={displaySearch}
                onChange={(e) => handleSearch(e.target.value)}
                aria-label={searchPlaceholder}
              />
            </div>
          )}
        </div>
        {headerActions && (
          <div className="flowbite-table__header-actions">
            {headerActions}
          </div>
        )}
      </div>

      {/* Table Content */}
      <div className="flowbite-table__content" role="table" aria-label={ariaLabel}>
        {/* Column Headers */}
        <div className="flowbite-table__column-headers" role="row">
          {columns.map((col, _ci) => (
            <div
              key={col.key}
              className={`flowbite-table__column-header${striped && _ci % 2 === 1 ? ' flowbite-table__column-header--striped' : ''}`}
              role="columnheader"
              style={{
                width: col.width || '1fr',
                minWidth: col.minWidth,
                textAlign: col.align || 'left',
              }}
            >
              {col.header}
            </div>
          ))}
        </div>

        {/* Data Rows */}
        {loading ? (
          Array.from({ length: 5 }).map((_, ri) => (
            <div key={`skeleton-${ri}`} className="flowbite-table__row flowbite-table__row--skeleton" role="row">
              {columns.map((col, _ci) => (
                <div
                  key={col.key}
                  className="flowbite-table__cell"
                  style={{
                    width: col.width || '1fr',
                    minWidth: col.minWidth,
                    textAlign: col.align || 'left',
                  }}
                >
                  <div className="flowbite-table__skeleton-bar" />
                </div>
              ))}
            </div>
          ))
        ) : data.length === 0 ? (
          <div className="flowbite-table__empty">
            <p className="flowbite-table__empty-text">No results found</p>
          </div>
        ) : (
          data.map((row, ri) => (
            <div
              key={ri}
              className={`flowbite-table__row${onRowClick ? ' flowbite-table__row--clickable' : ''}`}
              role="row"
              onClick={() => onRowClick?.(row, ri)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onRowClick?.(row, ri); } }}
              tabIndex={onRowClick ? 0 : undefined}
            >
              {columns.map((col, ci) => {
                const value = row[col.key];
                return (
                  <div
                    key={col.key}
                    className={`flowbite-table__cell${striped && ci % 2 === 1 ? ' flowbite-table__cell--striped' : ''}`}
                    role="cell"
                    style={{
                      width: col.width || '1fr',
                      minWidth: col.minWidth,
                      textAlign: col.align || 'left',
                    }}
                  >
                    {col.render ? col.render(value, row, ri) : (value as ReactNode)}
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {footer !== undefined ? (
        <div className="flowbite-table__footer">{footer}</div>
      ) : totalItems > 0 ? (
        <div className="flowbite-table__footer">
          <span className="flowbite-table__footer-info">
            Showing {((currentPage - 1) * pageSize) + 1}-{Math.min(currentPage * pageSize, totalItems)} of {totalItems}
          </span>
          <div className="flowbite-table__pagination" role="navigation" aria-label="Pagination">
            <button
              type="button"
              className="flowbite-table__page-btn"
              disabled={currentPage <= 1}
              onClick={() => onPageChange?.(currentPage - 1)}
              aria-label="Previous page"
            >
              <AngleLeftIcon />
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
              const page = i + 1;
              const isActive = page === currentPage;
              return (
                <button
                  key={page}
                  type="button"
                  className={`flowbite-table__page-btn${isActive ? ' flowbite-table__page-btn--active' : ''}`}
                  onClick={() => onPageChange?.(page)}
                  aria-label={`Page ${page}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {page}
                </button>
              );
            })}
            <button
              type="button"
              className="flowbite-table__page-btn flowbite-table__page-btn--last"
              disabled={currentPage >= totalPages}
              onClick={() => onPageChange?.(currentPage + 1)}
              aria-label="Next page"
            >
              <AngleRightIcon />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

/* ---------- Re-exported helpers ---------- */

export { StatusBadge, MoreHorizontalIcon };

export default Table;