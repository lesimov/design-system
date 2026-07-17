import React from 'react';
import './skeleton.css';

/* ---------- Types ---------- */

export type SkeletonVariant = 'card' | 'widget' | 'text' | 'image' | 'avatar';

export interface SkeletonProps {
  /** Visual variant. Defaults to 'text'. */
  variant?: SkeletonVariant;
  className?: string;
  /** Number of text lines (text variant). Defaults to 3. */
  lines?: number;
  /** Per-line widths as percentages (text variant). Overrides lines. */
  lineWidths?: string[];
  /** Explicit width for single-shape variants (image, avatar). */
  width?: string | number;
  /** Explicit height for single-shape variants (image). */
  height?: string | number;
  /** Show image placeholder (card variant). Defaults to true. */
  showImage?: boolean;
  /** Show author row (card variant). Defaults to true. */
  showAuthor?: boolean;
}

/* ---------- Image icon (inline SVG) ---------- */

const ImageIcon = () => (
  <svg
    className="flowbite-skeleton__image-icon"
    viewBox="0 0 45 31"
    fill="none"
    aria-hidden="true"
  >
    <rect x="5.5" y="1.5" width="34" height="28" rx="1" stroke="currentColor" strokeWidth="2" />
    <rect x="13.5" y="9.5" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="10" r="2" fill="currentColor" />
  </svg>
);

/* ---------- Internal renderers ---------- */

interface InternalProps {
  showImage?: boolean;
  showAuthor?: boolean;
  lines?: number;
  lineWidths?: string[];
  width?: string | number;
  height?: string | number;
}

const DEFAULT_LINE_WIDTHS = ['100%', '100%', '60%'];
const BAR_PATTERN = ['strong', 'light', 'strong', 'light', 'strong', 'light', 'strong'] as const;

const renderCard = ({ showImage = true, showAuthor = true }: InternalProps) => (
  <>
    {showImage && (
      <div className="flowbite-skeleton__image">
        <ImageIcon />
      </div>
    )}
    <div className="flowbite-skeleton__body">
      <div className="flowbite-skeleton__text-block">
        <div className="flowbite-skeleton__shape flowbite-skeleton__shape--w-40" />
      </div>
      <div className="flowbite-skeleton__text-block">
        <div className="flowbite-skeleton__shape flowbite-skeleton__shape--sm flowbite-skeleton__shape--w-full" />
        <div className="flowbite-skeleton__shape flowbite-skeleton__shape--sm flowbite-skeleton__shape--w-full" />
        <div className="flowbite-skeleton__shape flowbite-skeleton__shape--sm flowbite-skeleton__shape--w-60" />
      </div>
    </div>
    {showAuthor && (
      <div className="flowbite-skeleton__author">
        <div className="flowbite-skeleton__avatar" />
        <div className="flowbite-skeleton__shape flowbite-skeleton__shape--sm flowbite-skeleton__shape--w-25" />
      </div>
    )}
  </>
);

const renderWidget = () => (
  <>
    <div className="flowbite-skeleton__widget-header">
      <div className="flowbite-skeleton__shape flowbite-skeleton__shape--w-40" />
      <div className="flowbite-skeleton__shape flowbite-skeleton__shape--sm flowbite-skeleton__shape--w-25" />
    </div>
    <div className="flowbite-skeleton__widget-bars">
      {BAR_PATTERN.map((tone, i) => (
        <div
          key={i}
          className={`flowbite-skeleton__widget-bar flowbite-skeleton__widget-bar--${tone}`}
        />
      ))}
    </div>
  </>
);

const renderText = ({ lines = 3, lineWidths }: InternalProps) => {
  const widths = lineWidths ?? DEFAULT_LINE_WIDTHS;
  const count = Math.max(lines, widths.length);
  return (
    <div className="flowbite-skeleton__text-block" style={{ gap: '10px' }}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="flowbite-skeleton__shape flowbite-skeleton__shape--sm"
          style={{ width: widths[i] ?? widths[widths.length - 1] }}
        />
      ))}
    </div>
  );
};

const renderImage = ({ width = '100%', height = 192 }: InternalProps) => (
  <div
    className="flowbite-skeleton__image"
    style={{
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
    }}
  >
    <ImageIcon />
  </div>
);

const renderAvatar = ({ width = 40 }: InternalProps) => (
  <div
    className="flowbite-skeleton__avatar"
    style={{
      width: typeof width === 'number' ? width : width,
      height: typeof width === 'number' ? width : width,
    }}
  />
);

/* ---------- Variant class map ---------- */

const VARIANT_CLASSES: Record<SkeletonVariant, string> = {
  card: 'flowbite-skeleton--card',
  widget: 'flowbite-skeleton--widget',
  text: '',
  image: '',
  avatar: '',
};

/* ---------- Main Component ---------- */

export const Skeleton = ({
  variant = 'text',
  className = '',
  lines = 3,
  lineWidths,
  width,
  height,
  showImage = true,
  showAuthor = true,
}: SkeletonProps) => {
  const variantClass = VARIANT_CLASSES[variant];
  const wrapperClass = [
    'flowbite-skeleton',
    variantClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const props: InternalProps = { showImage, showAuthor, lines, lineWidths, width, height };

  const renderers: Record<SkeletonVariant, (p: InternalProps) => React.ReactNode> = {
    card: renderCard,
    widget: renderWidget,
    text: renderText,
    image: renderImage,
    avatar: renderAvatar,
  };

  return (
    <div className={wrapperClass} role="status" aria-label="Loading">
      {renderers[variant](props)}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;