import './icon-shape.css';

export type IconShapeColor = 'green' | 'red' | 'brand' | 'gray' | 'yellow' | 'purple' | 'teal' | 'pink';
export type IconShapeSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
export type IconShapeSection = 'green' | 'red' | 'brand' | 'gray' | 'all';

export interface IconShapeProps {
  /** Which color section(s) to render */
  section?: IconShapeSection;
  /** Additional class names */
  className?: string;
}

const SIZES: IconShapeSize[] = ['xs', 'sm', 'base', 'lg', 'xl', '2xl'];

const SIZE_DIMENSIONS: Record<IconShapeSize, { container: number; icon: number }> = {
  xs: { container: 16, icon: 10 },
  sm: { container: 24, icon: 16 },
  base: { container: 36, icon: 20 },
  lg: { container: 48, icon: 28 },
  xl: { container: 64, icon: 36 },
  '2xl': { container: 96, icon: 56 },
};

interface ColorDef {
  key: IconShapeColor;
  bgClass: string;
  label: string;
}

const COLORS: ColorDef[] = [
  { key: 'green', bgClass: 'flowbite-icon-shape-item__circle--green', label: 'Green' },
  { key: 'red', bgClass: 'flowbite-icon-shape-item__circle--red', label: 'Red' },
  { key: 'brand', bgClass: 'flowbite-icon-shape-item__circle--brand', label: 'Brand' },
  { key: 'gray', bgClass: 'flowbite-icon-shape-item__circle--gray', label: 'Gray' },
  { key: 'yellow', bgClass: 'flowbite-icon-shape-item__circle--yellow', label: 'Yellow' },
  { key: 'purple', bgClass: 'flowbite-icon-shape-item__circle--purple', label: 'Purple' },
  { key: 'teal', bgClass: 'flowbite-icon-shape-item__circle--teal', label: 'Teal' },
  { key: 'pink', bgClass: 'flowbite-icon-shape-item__circle--pink', label: 'Pink' },
];

/** Simple SVG fire icon. */
const FireIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 11.5 16.5 8.5 14.5 6C13.5 5 12.5 4 12 2C11.5 4 10.5 5 9.5 6C7.5 8.5 4.5 11.5 4.5 15.5C4.5 19.6421 7.85786 23 12 23Z"
      fill="currentColor"
    />
  </svg>
);

const ColorSection = ({ color }: { color: ColorDef }) => (
  <div className="flowbite-icon-shape-section">
    <h3 className="flowbite-icon-shape-color-label">{color.label}</h3>
    <div className="flowbite-icon-shape-size-row">
      {SIZES.map((size) => {
        const dims = SIZE_DIMENSIONS[size];
        return (
          <div className="flowbite-icon-shape-item" key={size}>
            <div className={`flowbite-icon-shape-item__circle flowbite-icon-shape-item__circle--${size} ${color.bgClass}`}>
              <FireIcon size={dims.icon} />
            </div>
            <span className="flowbite-icon-shape-item__label">{size}</span>
          </div>
        );
      })}
    </div>
  </div>
);



const greenRedBrandGray = COLORS.filter((c) => c.key === 'green' || c.key === 'red' || c.key === 'brand' || c.key === 'gray');

export const IconShape = ({ section = 'all', className = '' }: IconShapeProps) => {
  if (section === 'all') {
    return (
      <div className={`flowbite-icon-shape-showcase ${className}`}>
        {COLORS.map((color) => (
          <ColorSection color={color} key={color.key} />
        ))}
      </div>
    );
  }

  const color = COLORS.find((c) => c.key === section);
  if (!color) return null;

  return (
    <div className={`flowbite-icon-shape-showcase ${className}`}>
      {greenRedBrandGray.map((c) => (
        <ColorSection color={c} key={c.key} />
      ))}
    </div>
  );
};

export default IconShape;