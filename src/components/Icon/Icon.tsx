import { getIcon } from './iconRegistry';
import './icon.css';

export type IconVariant = 'outline' | 'solid';

export interface IconProps {
  /** kebab-case icon name, e.g. `adjustments-horizontal` */
  name: string;
  /** Outline (stroke) or solid (fill). Defaults to `outline`. */
  variant?: IconVariant;
  /** Pixel size for both width and height. Defaults to 24. */
  size?: number;
  /**
   * Accessible label. When provided the icon is exposed to assistive tech
   * (`role="img"` + `<title>`). Omit for purely decorative icons, which are
   * then hidden from the accessibility tree.
   */
  title?: string;
  /** Extra classes applied to the `<svg>` element. */
  className?: string;
}

/**
 * Flowbite Icon — renders any of the 750+ icons shipped by `flowbite-icons`.
 *
 * Inherits its color from the surrounding text via `currentColor`, so tint it
 * with a `color` / `text-*` utility on the element or an ancestor.
 *
 * @example
 * <Icon name="adjustments-horizontal" />
 * <Icon name="bell" variant="solid" size={20} title="Notifications" />
 */
export const Icon = ({
  name,
  variant = 'outline',
  size = 24,
  title,
  className = '',
}: IconProps) => {
  const entry = getIcon(name, variant);

  if (!entry) {
    if (import.meta.env.DEV) {
      console.warn(`[Icon] Unknown icon "${name}" (${variant})`);
    }
    return null;
  }

  const a11y = title
    ? { role: 'img' as const, 'aria-label': title }
    : { 'aria-hidden': true as const };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={entry.fill}
      className={`flowbite-icon ${className}`.trim()}
      {...a11y}
      dangerouslySetInnerHTML={{ __html: title ? `<title>${title}</title>${entry.inner}` : entry.inner }}
    />
  );
};

export default Icon;
