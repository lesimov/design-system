import { useState, useRef, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import './autocomplete.css';

/* ---------- Types ---------- */

export type AutocompleteVariant = 'default' | 'highlighted' | 'advanced' | 'advanced-save' | 'categories' | 'user';

export interface AutocompleteProps {
  variant?: AutocompleteVariant;
  label?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  disabled?: boolean;
  className?: string;
}

/* ---------- Mock data ---------- */

interface AutocompleteOption {
  id: string;
  label: string;
  icon?: string;
  secondary?: string;
  shortcut?: string;
  category?: string;
  avatar?: string;
  name?: string;
  email?: string;
  highlighted?: boolean;
}

const MOCK_OPTIONS: AutocompleteOption[] = [
  { id: '1', label: 'Dashboard', icon: 'grid', shortcut: '⌘D' },
  { id: '2', label: 'Analytics', icon: 'chart', shortcut: '⌘A' },
  { id: '3', label: 'Reports', icon: 'file', shortcut: '⌘R' },
  { id: '4', label: 'Settings', icon: 'settings', shortcut: '⌘S' },
  { id: '5', label: 'Users', icon: 'users', shortcut: '⌘U' },
  { id: '6', label: 'Billing', icon: 'credit-card', shortcut: '⌘B' },
  { id: '7', label: 'Documentation', icon: 'book', shortcut: '⌘⇧D' },
  { id: '8', label: 'Support', icon: 'help-circle', shortcut: '⌘/' },
];

const MOCK_HIGHLIGHTED: AutocompleteOption[] = [
  { id: '1', label: 'Dashboard Settings', highlighted: true },
  { id: '2', label: 'Dashboard Analytics', highlighted: true },
  { id: '3', label: 'Reports Dashboard', highlighted: false },
  { id: '4', label: 'User Dashboard', highlighted: false },
  { id: '5', label: 'Dashboard Overview', highlighted: true },
  { id: '6', label: 'Analytics Dashboard', highlighted: false },
];

const MOCK_ADVANCED: AutocompleteOption[] = [
  { id: '1', label: 'Project Alpha', secondary: 'Last edited 2 hours ago' },
  { id: '2', label: 'Project Beta', secondary: 'Last edited yesterday' },
  { id: '3', label: 'Project Gamma', secondary: 'Last edited 3 days ago' },
  { id: '4', label: 'Project Delta', secondary: 'Last edited 1 week ago' },
  { id: '5', label: 'Project Epsilon', secondary: 'Last edited 2 weeks ago' },
];

const MOCK_CATEGORIES: AutocompleteOption[] = [
  { id: 'c1', label: 'Design System', category: 'Design' },
  { id: 'c2', label: 'UI Components', category: 'Design' },
  { id: 'c3', label: 'Integration Tests', category: 'Engineering' },
  { id: 'c4', label: 'API Documentation', category: 'Engineering' },
  { id: 'c5', label: 'Deployment Pipeline', category: 'DevOps' },
  { id: 'c6', label: 'Monitoring Setup', category: 'DevOps' },
  { id: 'c7', label: 'User Research', category: 'Product' },
  { id: 'c8', label: 'Roadmap Planning', category: 'Product' },
];

const MOCK_USERS: AutocompleteOption[] = [
  { id: 'u1', name: 'Jane Cooper', email: 'jane.cooper@example.com', label: 'Jane Cooper', avatar: '' },
  { id: 'u2', name: 'Wade Warren', email: 'wade.warren@example.com', label: 'Wade Warren', avatar: '' },
  { id: 'u3', name: 'Esther Howard', email: 'esther.howard@example.com', label: 'Esther Howard', avatar: '' },
  { id: 'u4', name: 'Cameron Williamson', email: 'cameron.williamson@example.com', label: 'Cameron Williamson', avatar: '' },
  { id: 'u5', name: 'Brooklyn Simmons', email: 'brooklyn.simmons@example.com', label: 'Brooklyn Simmons', avatar: '' },
];

/* ---------- Inline SVG icons ---------- */

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="9" r="4" />
    <path d="M13 13l3 3" />
  </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6l4 4 4-4" />
  </svg>
);

const GridIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="11" y="3" width="6" height="6" rx="1" />
    <rect x="3" y="11" width="6" height="6" rx="1" />
    <rect x="11" y="11" width="6" height="6" rx="1" />
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17V3" />
    <path d="M7 17V7" />
    <path d="M11 17V10" />
    <path d="M15 17v-4" />
    <path d="M19 17h-16" />
  </svg>
);

const FileIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 3H5a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V7l-3-4z" />
    <path d="M13 3v4h4" />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="2.5" />
    <path d="M10 1.5v2" />
    <path d="M10 16.5v2" />
    <path d="M18.5 10h-2" />
    <path d="M3.5 10h-2" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
    <path d="M3 17a7 7 0 0114 0" />
  </svg>
);

const CreditCardIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="18" height="12" rx="2" />
    <path d="M1 8h18" />
    <path d="M5 12h4" />
  </svg>
);

const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
    <path d="M8 3v14" />
  </svg>
);

const HelpCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="7" />
    <path d="M10 7.5a1.5 1.5 0 110 3" />
    <circle cx="10" cy="13" r="0.5" fill="currentColor" />
  </svg>
);

const SaveIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h7l3 3v7a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z" />
    <path d="M5 3v4h5V3" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l8 8" />
    <path d="M12 4l-8 8" />
  </svg>
);

const RemoveIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 5h10" />
    <path d="M5 5V3a1 1 0 011-1h4a1 1 0 011 1v2" />
    <path d="M12 5v8a1 1 0 01-1 1H5a1 1 0 01-1-1V5" />
  </svg>
);


/* ---------- Icon resolver ---------- */

const ICON_MAP: Record<string, (props: { className?: string }) => ReactNode> = {
  grid: GridIcon,
  chart: ChartIcon,
  file: FileIcon,
  settings: SettingsIcon,
  users: UsersIcon,
  'credit-card': CreditCardIcon,
  book: BookIcon,
  'help-circle': HelpCircleIcon,
};

/* ---------- useClickOutside hook ---------- */

const useClickOutside = (ref: React.RefObject<HTMLElement | null>, handler: () => void) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      handler();
    };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

/* ---------- Variant renderers ---------- */

const DefaultDropdown = ({
  options,
  query,
  onSelect,
}: {
  options: AutocompleteOption[];
  query: string;
  onSelect: (id: string) => void;
}) => {
  const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
  if (filtered.length === 0) {
    return <div className="flowbite-autocomplete__no-results">No results found</div>;
  }
  return (
    <>
      {filtered.map((option) => {
        const IconComp = option.icon ? ICON_MAP[option.icon] : null;
        return (
          <div
            key={option.id}
            className="flowbite-autocomplete__item flowbite-autocomplete__item--space-between"
            onClick={() => onSelect(option.id)}
          >
            <div className="flowbite-autocomplete__item-text" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {IconComp && <IconComp className="flowbite-autocomplete__item-icon" />}
              {option.label}
            </div>
            {option.shortcut && <span className="flowbite-autocomplete__item-shortcut">{option.shortcut}</span>}
          </div>
        );
      })}
    </>
  );
};

const HighlightedDropdown = ({
  options,
  query,
  onSelect,
}: {
  options: AutocompleteOption[];
  query: string;
  onSelect: (id: string) => void;
}) => {
  const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
  if (filtered.length === 0) {
    return <div className="flowbite-autocomplete__no-results">No results found</div>;
  }
  return (
    <>
      {filtered.map((option) => {
        const parts = option.label.split(/(Dashboard)/gi);
        return (
          <div
            key={option.id}
            className="flowbite-autocomplete__item"
            onClick={() => onSelect(option.id)}
          >
            <div className="flowbite-autocomplete__item-text">
              {parts.map((part, i) =>
                part.toLowerCase() === 'dashboard' ? (
                  <mark key={i}>{part}</mark>
                ) : (
                  <span key={i}>{part}</span>
                ),
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

const AdvancedDropdown = ({
  options,
  query,
  onSelect,
  showSave,
  selectedItems,
  onSave,
  onRemove,
}: {
  options: AutocompleteOption[];
  query: string;
  onSelect: (id: string) => void;
  showSave?: boolean;
  selectedItems: Set<string>;
  onSave: (id: string) => void;
  onRemove: (id: string) => void;
}) => {
  const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
  if (filtered.length === 0) {
    return <div className="flowbite-autocomplete__no-results">No results found</div>;
  }
  return (
    <>
      {filtered.map((option) => {
        const isSaved = selectedItems.has(option.id);
        return (
          <div
            key={option.id}
            className={`flowbite-autocomplete__item flowbite-autocomplete__item--space-between ${isSaved ? 'flowbite-autocomplete__item--selected' : ''}`}
            onClick={() => onSelect(option.id)}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: '1 1 auto', minWidth: 0 }}>
              <span className="flowbite-autocomplete__item-text">{option.label}</span>
              {option.secondary && <span className="flowbite-autocomplete__item-secondary">{option.secondary}</span>}
            </div>
            {showSave ? (
              <div className="flowbite-autocomplete__item-actions">
                {isSaved ? (
                  <button onClick={(e) => { e.stopPropagation(); onRemove(option.id); }} title="Remove">
                    <RemoveIcon />
                  </button>
                ) : (
                  <button onClick={(e) => { e.stopPropagation(); onSave(option.id); }} title="Save">
                    <SaveIcon />
                  </button>
                )}
              </div>
            ) : (
              <div className="flowbite-autocomplete__item-actions">
                <button onClick={(e) => { e.stopPropagation(); onSave(option.id); }} title="Save">
                  <SaveIcon />
                </button>
                <button onClick={(e) => { e.stopPropagation(); }} title="Close">
                  <CloseIcon />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

const CategoriesDropdown = ({
  options,
  query,
  onSelect,
}: {
  options: AutocompleteOption[];
  query: string;
  onSelect: (id: string) => void;
}) => {
  const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
  if (filtered.length === 0) {
    return <div className="flowbite-autocomplete__no-results">No results found</div>;
  }
  const grouped: Record<string, AutocompleteOption[]> = {};
  for (const opt of filtered) {
    const cat = opt.category || 'Other';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(opt);
  }
  const categories = Object.keys(grouped);
  return (
    <>
      {categories.map((cat, ci) => (
        <div key={cat}>
          {ci > 0 && <hr className="flowbite-autocomplete__divider" />}
          <div className="flowbite-autocomplete__category-header">{cat}</div>
          {grouped[cat].map((option) => (
            <div
              key={option.id}
              className="flowbite-autocomplete__item"
              onClick={() => onSelect(option.id)}
            >
              <span className="flowbite-autocomplete__item-text">{option.label}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

const UserDropdown = ({
  options,
  query,
  onSelect,
}: {
  options: AutocompleteOption[];
  query: string;
  onSelect: (id: string) => void;
}) => {
  const filtered = options.filter((o) => o.name!.toLowerCase().includes(query.toLowerCase()));
  if (filtered.length === 0) {
    return <div className="flowbite-autocomplete__no-results">No results found</div>;
  }
  return (
    <>
      {filtered.map((option) => (
        <div
          key={option.id}
          className="flowbite-autocomplete__item"
          onClick={() => onSelect(option.id)}
        >
          <div className="flowbite-autocomplete__avatar">
            <svg viewBox="0 0 32 32" fill="none" style={{ width: '100%', height: '100%' }}>
              <circle cx="16" cy="16" r="16" fill="var(--gray-200)" />
              <circle cx="16" cy="12" r="5" fill="var(--gray-400)" />
              <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="var(--gray-400)" />
            </svg>
          </div>
          <div className="flowbite-autocomplete__user-info">
            <span className="flowbite-autocomplete__user-name">{option.name}</span>
            <span className="flowbite-autocomplete__user-email">{option.email}</span>
          </div>
        </div>
      ))}
    </>
  );
};

/* ---------- Main component ---------- */

export const Autocomplete = ({
  variant = 'default',
  label,
  placeholder = 'Search...',
  required = false,
  helperText,
  disabled = false,
  className = '',
}: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useClickOutside(wrapperRef, handleClose);

  const handleInputClick = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (!isOpen && !disabled) setIsOpen(true);
  };

  const handleSelect = (_id: string) => {
    setIsOpen(false);
  };

  const handleSave = (id: string) => {
    setSelectedItems((prev) => new Set(prev).add(id));
  };

  const handleRemove = (id: string) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  let options: AutocompleteOption[];
  switch (variant) {
    case 'highlighted':
      options = MOCK_HIGHLIGHTED;
      break;
    case 'advanced':
    case 'advanced-save':
      options = MOCK_ADVANCED;
      break;
    case 'categories':
      options = MOCK_CATEGORIES;
      break;
    case 'user':
      options = MOCK_USERS;
      break;
    default:
      options = MOCK_OPTIONS;
  }

  const isWide = variant === 'advanced' || variant === 'advanced-save';

  const wrapperClasses = [
    'flowbite-autocomplete',
    disabled ? 'flowbite-autocomplete--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    'flowbite-autocomplete__input',
    isOpen ? 'flowbite-autocomplete__input--open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const iconClasses = [
    'flowbite-autocomplete__icon',
    isOpen ? 'flowbite-autocomplete__icon--open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const dropdownClasses = [
    'flowbite-autocomplete__dropdown',
    isWide ? 'flowbite-autocomplete__dropdown--wide' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses} ref={wrapperRef}>
      {label && (
        <label className={`flowbite-autocomplete__label ${required ? 'flowbite-autocomplete__label--required' : ''}`}>
          {label}
        </label>
      )}

      <div className="flowbite-autocomplete__input-container">
        <input
          type="text"
          className={inputClasses}
          placeholder={placeholder}
          value={query}
          onChange={handleQueryChange}
          onClick={handleInputClick}
          disabled={disabled}
          autoComplete="off"
        />
        {isOpen ? <ChevronIcon className={iconClasses} /> : <SearchIcon className={iconClasses} />}
      </div>

      {helperText && <div className="flowbite-autocomplete__helper">{helperText}</div>}

      {isOpen && !disabled && (
        <div className={dropdownClasses}>
          {variant === 'user' && (
            <UserDropdown options={options} query={query} onSelect={handleSelect} />
          )}
          {variant === 'categories' && (
            <CategoriesDropdown options={options} query={query} onSelect={handleSelect} />
          )}
          {variant === 'highlighted' && (
            <HighlightedDropdown options={options} query={query} onSelect={handleSelect} />
          )}
          {(variant === 'advanced' || variant === 'advanced-save') && (
            <AdvancedDropdown
              options={options}
              query={query}
              onSelect={handleSelect}
              showSave={variant === 'advanced-save'}
              selectedItems={selectedItems}
              onSave={handleSave}
              onRemove={handleRemove}
            />
          )}
          {variant === 'default' && (
            <DefaultDropdown options={options} query={query} onSelect={handleSelect} />
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;