import type { ReactNode } from 'react';
import './avatars.css';

export type AvatarSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
export type AvatarStatus = 'online' | 'offline' | 'alternative';
export type AvatarSection =
  | 'sizes'
  | 'types'
  | 'status'
  | 'group'
  | 'all'
  | 'single';

export interface AvatarsProps {
  /** Showcase section to render */
  section?: AvatarSection;
  /** Avatar size (used for single avatar display) */
  size?: AvatarSize;
  /** Status dot type (used for single avatar display) */
  status?: AvatarStatus | null;
  /** Initials shown inside a single avatar */
  initials?: string;
  /** Additional class names */
  className?: string;
}

/* ---------- Design tokens ---------- */

const sizeMap: Record<AvatarSize, number> = {
  xs: 18,
  sm: 24,
  base: 32,
  lg: 44,
  xl: 56,
  '2xl': 64,
};

const initialsFontSizeMap: Record<AvatarSize, number> = {
  xs: 7,
  sm: 9,
  base: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
};

const statusDotForAvatar: Record<AvatarSize, number> = {
  xs: 6,
  sm: 8,
  base: 10,
  lg: 12,
  xl: 16,
  '2xl': 16,
};

const removeBtnForAvatar: Record<AvatarSize, number> = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 28,
};

const statusColors: Record<AvatarStatus, string> = {
  online: '#007A55',
  offline: '#C70036',
  alternative: '#D1D5DC',
};

const users = [
  { name: 'Bonnie Green', initials: 'BG', color: '#007A55' },
  { name: 'Jese Leos', initials: 'JL', color: '#1447E6' },
  { name: 'Roberta Casas', initials: 'RC', color: '#AD46FF' },
];

const groupUsers = [
  users[0],
  users[1],
  users[2],
  { name: 'Neil Sims', initials: 'NS', color: '#D97706' },
];

const dotSizeScale: { name: AvatarSize; px: number }[] = [
  { name: 'xs', px: 6 },
  { name: 'base', px: 8 },
  { name: 'sm', px: 10 },
  { name: 'lg', px: 12 },
  { name: 'xl', px: 16 },
];

const allSizes: AvatarSize[] = ['xs', 'sm', 'base', 'lg', 'xl', '2xl'];

const colorForInitials = (init: string): string =>
  users.find((u) => u.initials === init)?.color ?? '#007A55';

/* ---------- Icons ---------- */

const UserIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const CloseIcon = ({ size = 10 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M9 3L3 9M3 3l6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------- Atomic avatar ---------- */

interface AvatarCoreProps {
  initials?: string;
  color?: string;
  size: AvatarSize;
  status?: AvatarStatus | null;
  removable?: boolean;
  placeholder?: boolean;
  onRemove?: () => void;
}

const AvatarCore = ({
  initials,
  color,
  size,
  status = null,
  removable = false,
  placeholder = false,
  onRemove,
}: AvatarCoreProps) => {
  const px = sizeMap[size];
  const fontSize = initialsFontSizeMap[size];
  const dotPx = statusDotForAvatar[size];
  const btnPx = removeBtnForAvatar[size];

  const circleClass = [
    'flowbite-avatar',
    placeholder ? 'flowbite-avatar--placeholder' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className="flowbite-avatar-wrap" style={{ width: px, height: px }}>
      <span
        className={circleClass}
        style={placeholder ? undefined : { backgroundColor: color }}
      >
        {placeholder ? (
          <UserIcon size={Math.round(px * 0.55)} />
        ) : (
          <span className="flowbite-avatar__initials" style={{ fontSize }}>
            {initials}
          </span>
        )}
      </span>
      {status && (
        <span
          className="flowbite-avatar__status-dot"
          style={{ width: dotPx, height: dotPx, backgroundColor: statusColors[status] }}
        />
      )}
      {removable && (
        <button
          type="button"
          className="flowbite-avatar__remove-btn"
          style={{ width: btnPx, height: btnPx }}
          onClick={onRemove}
          aria-label="Remove avatar"
        >
          <CloseIcon size={Math.round(btnPx * 0.5)} />
        </button>
      )}
    </span>
  );
};

/* ---------- Section shell ---------- */

const SectionShell = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="flowbite-avatars-section">
    <h3 className="flowbite-avatars-section__title">{title}</h3>
    {children}
  </section>
);

const itemLabel = (size: AvatarSize) => `${size} · ${sizeMap[size]}px`;

/* ---------- Sections ---------- */

const SizesSection = () => (
  <SectionShell title="Sizes">
    <div className="flowbite-avatars-row">
      {allSizes.map((size, i) => {
        const user = users[i % users.length];
        return (
          <div className="flowbite-avatars-row__item" key={size}>
            <AvatarCore initials={user.initials} color={user.color} size={size} />
            <span className="flowbite-avatars-row__label">{itemLabel(size)}</span>
          </div>
        );
      })}
    </div>
  </SectionShell>
);

const TypesSection = () => {
  const user = users[0];
  return (
    <SectionShell title="Types">
      <div className="flowbite-avatars-row">
        <div className="flowbite-avatars-row__item">
          <AvatarCore initials={user.initials} color={user.color} size="lg" />
          <span className="flowbite-avatars-row__label">Default</span>
        </div>
        <div className="flowbite-avatars-row__item">
          <AvatarCore size="lg" placeholder />
          <span className="flowbite-avatars-row__label">Placeholder</span>
        </div>
        <div className="flowbite-avatars-row__item">
          <AvatarCore initials={user.initials} color={user.color} size="lg" status="online" />
          <span className="flowbite-avatars-row__label">With Status</span>
        </div>
        <div className="flowbite-avatars-row__item">
          <AvatarCore initials={user.initials} color={user.color} size="lg" removable />
          <span className="flowbite-avatars-row__label">With Remove</span>
        </div>
      </div>
    </SectionShell>
  );
};

const StatusDotsSection = () => {
  const statuses: { label: string; status: AvatarStatus }[] = [
    { label: 'Online', status: 'online' },
    { label: 'Offline', status: 'offline' },
    { label: 'Alternative', status: 'alternative' },
  ];
  return (
    <SectionShell title="Status Dots">
      <div className="flowbite-avatars-status">
        {statuses.map(({ label, status }) => (
          <div className="flowbite-avatars-status__row" key={status}>
            <span className="flowbite-avatars-status__label">{label}</span>
            <div className="flowbite-avatars-dots">
              {dotSizeScale.map(({ name, px }) => (
                <div className="flowbite-avatars-dots__item" key={name}>
                  <span
                    className="flowbite-status-dot"
                    style={{ width: px, height: px, backgroundColor: statusColors[status] }}
                  />
                  <span className="flowbite-avatars-dots__label">
                    {name} · {px}px
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

const renderGroupItems = (withCount: boolean) => (
  <>
    {groupUsers.map((u, i) => (
      <span
        className="flowbite-avatar flowbite-avatar-group__item"
        key={i}
        style={{ width: 32, height: 32, backgroundColor: u.color, zIndex: i + 1 }}
      >
        <span className="flowbite-avatar__initials" style={{ fontSize: 12 }}>
          {u.initials}
        </span>
      </span>
    ))}
    {withCount && (
      <span
        className="flowbite-avatar flowbite-avatar-group__item flowbite-avatar-group__count"
        style={{ width: 32, height: 32, zIndex: groupUsers.length + 1 }}
      >
        <span className="flowbite-avatar-group__count-text">+5</span>
      </span>
    )}
  </>
);

const AvatarGroupSection = () => (
  <SectionShell title="Avatar Group">
    <div className="flowbite-avatars-group-stack">
      <div className="flowbite-avatar-group">{renderGroupItems(false)}</div>
      <div className="flowbite-avatar-group">{renderGroupItems(true)}</div>
    </div>
  </SectionShell>
);

const AllSizesSection = () => (
  <SectionShell title="All Sizes">
    <div className="flowbite-avatars-row">
      <span className="flowbite-avatars-row__heading">Default</span>
      {allSizes.map((size, i) => {
        const user = users[i % users.length];
        return (
          <AvatarCore key={size} initials={user.initials} color={user.color} size={size} />
        );
      })}
    </div>
    <div className="flowbite-avatars-row">
      <span className="flowbite-avatars-row__heading">With Status</span>
      {allSizes.map((size, i) => {
        const user = users[i % users.length];
        return (
          <AvatarCore
            key={size}
            initials={user.initials}
            color={user.color}
            size={size}
            status="online"
          />
        );
      })}
    </div>
  </SectionShell>
);

/* ---------- Main component ---------- */

export const Avatars = ({
  section = 'all',
  size = 'base',
  status = null,
  initials = 'BG',
  className = '',
}: AvatarsProps) => {
  switch (section) {
    case 'sizes':
      return <SizesSection />;
    case 'types':
      return <TypesSection />;
    case 'status':
      return <StatusDotsSection />;
    case 'group':
      return <AvatarGroupSection />;
    case 'single':
      return (
        <AvatarCore
          initials={initials}
          color={colorForInitials(initials)}
          size={size}
          status={status}
        />
      );
    case 'all':
    default:
      return (
        <div className={['flowbite-avatars', className].filter(Boolean).join(' ')}>
          <SizesSection />
          <TypesSection />
          <StatusDotsSection />
          <AvatarGroupSection />
          <AllSizesSection />
        </div>
      );
  }
};

export default Avatars;
