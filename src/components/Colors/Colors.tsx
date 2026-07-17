import React from 'react';
import './colors.css';

export type ColorsSection = 'palette' | 'text' | 'background' | 'border' | 'all';

export interface ColorsProps {
  /** Which section of the color style guide to render. Defaults to 'all'. */
  section?: ColorsSection;
  /** Additional class names for the root element. */
  className?: string;
}

/**
 * Shade steps rendered top → bottom (950 dark at the top, 050 light at the
 * bottom), matching the Flowbite Design System "🎨 Colors" Figma canvas.
 */
const SHADES = ['950', '900', '800', '700', '600', '500', '400', '300', '200', '100', '050'] as const;
type Shade = (typeof SHADES)[number];

interface Family {
  name: string;
  shades: Record<Shade, string>;
}

interface ColorVar {
  name: string;
  color: string;
}

/**
 * All 22 color families with shades 050–950. Hex values transcribed from the
 * Flowbite Design System (Community) Figma file, node 0-1.
 */
const FAMILIES: Family[] = [
  { name: 'Brand', shades: { '050': '#EFF6FF', '100': '#DBEAFE', '200': '#BEDBFF', '300': '#8EC5FF', '400': '#51A2FF', '500': '#2B7FFF', '600': '#155DFC', '700': '#1447E6', '800': '#193CB8', '900': '#1C398E', '950': '#162455' } },
  { name: 'Slate', shades: { '050': '#F8FAFC', '100': '#F1F5F9', '200': '#E2E8F0', '300': '#CAD5E2', '400': '#90A1B9', '500': '#62748E', '600': '#45556C', '700': '#314158', '800': '#1D293D', '900': '#0F172B', '950': '#020618' } },
  { name: 'Gray', shades: { '050': '#F9FAFB', '100': '#F3F4F6', '200': '#E5E7EB', '300': '#D1D5DC', '400': '#99A1AF', '500': '#6A7282', '600': '#4A5565', '700': '#364153', '800': '#1E2939', '900': '#101828', '950': '#030712' } },
  { name: 'Zinc', shades: { '050': '#FAFAFA', '100': '#F4F4F5', '200': '#E4E4E7', '300': '#D4D4D8', '400': '#9F9FA9', '500': '#71717B', '600': '#52525C', '700': '#3F3F46', '800': '#27272A', '900': '#18181B', '950': '#09090B' } },
  { name: 'Neutral', shades: { '050': '#FAFAFA', '100': '#F5F5F5', '200': '#E5E5E5', '300': '#D4D4D4', '400': '#A1A1A1', '500': '#737373', '600': '#525252', '700': '#404040', '800': '#262626', '900': '#171717', '950': '#0A0A0A' } },
  { name: 'Stone', shades: { '050': '#FAFAF9', '100': '#F5F5F4', '200': '#E7E5E4', '300': '#D6D3D1', '400': '#A6A09B', '500': '#79716B', '600': '#57534D', '700': '#44403B', '800': '#292524', '900': '#1C1917', '950': '#0C0A09' } },
  { name: 'Red', shades: { '050': '#FEF2F2', '100': '#FFE2E2', '200': '#FFC9C9', '300': '#FFA2A2', '400': '#FF6467', '500': '#FB2C36', '600': '#E7000B', '700': '#C10007', '800': '#9F0712', '900': '#82181A', '950': '#460809' } },
  { name: 'Orange', shades: { '050': '#FFF8F1', '100': '#FEECDC', '200': '#FCD9BD', '300': '#FDBA8C', '400': '#FF8A4C', '500': '#FF5A1F', '600': '#D03801', '700': '#B43403', '800': '#8A2C0D', '900': '#771D1D', '950': '#441306' } },
  { name: 'Amber', shades: { '050': '#FFFBEB', '100': '#FEF3C6', '200': '#FEE685', '300': '#FFD230', '400': '#FFB900', '500': '#FE9A00', '600': '#E17100', '700': '#BB4D00', '800': '#973C00', '900': '#7B3306', '950': '#461901' } },
  { name: 'Yellow', shades: { '050': '#FEFCE8', '100': '#FEF9C2', '200': '#FFF085', '300': '#FFDF20', '400': '#FDC700', '500': '#F0B100', '600': '#D08700', '700': '#A65F00', '800': '#894B00', '900': '#733E0A', '950': '#432004' } },
  { name: 'Lime', shades: { '050': '#F7FEE7', '100': '#ECFCCA', '200': '#D8F999', '300': '#BBF451', '400': '#9AE600', '500': '#7CCF00', '600': '#5EA500', '700': '#497D00', '800': '#3C6300', '900': '#35530E', '950': '#192E03' } },
  { name: 'Green', shades: { '050': '#F0FDF4', '100': '#DCFCE7', '200': '#B9F8CF', '300': '#7BF1A8', '400': '#05DF72', '500': '#00C950', '600': '#00A63E', '700': '#008236', '800': '#016630', '900': '#0D542B', '950': '#032E15' } },
  { name: 'Emerald', shades: { '050': '#ECFDF5', '100': '#D0FAE5', '200': '#A4F4CF', '300': '#5EE9B5', '400': '#00D492', '500': '#00BC7D', '600': '#009966', '700': '#007A55', '800': '#006045', '900': '#004F3B', '950': '#002C22' } },
  { name: 'Teal', shades: { '050': '#F0FDFA', '100': '#CBFBF1', '200': '#96F7E4', '300': '#46ECD5', '400': '#00D5BE', '500': '#00BBA7', '600': '#009689', '700': '#00786F', '800': '#005F59', '900': '#0D4E4A', '950': '#032F2E' } },
  { name: 'Cyan', shades: { '050': '#ECFEFF', '100': '#CEFAFE', '200': '#A2F4FD', '300': '#53EAFD', '400': '#00D3F2', '500': '#00B8DB', '600': '#0092B8', '700': '#007595', '800': '#005F78', '900': '#104E64', '950': '#053345' } },
  { name: 'Sky', shades: { '050': '#F0F9FF', '100': '#DFF2FE', '200': '#B8E6FE', '300': '#74D4FF', '400': '#00BCFF', '500': '#00A6F4', '600': '#0084D1', '700': '#0069A8', '800': '#00598A', '900': '#024A70', '950': '#052F4A' } },
  { name: 'Indigo', shades: { '050': '#EEF2FF', '100': '#E0E7FF', '200': '#C6D2FF', '300': '#A3B3FF', '400': '#7C86FF', '500': '#615FFF', '600': '#4F39F6', '700': '#432DD7', '800': '#372AAC', '900': '#312C85', '950': '#1E1A4D' } },
  { name: 'Violet', shades: { '050': '#F5F3FF', '100': '#EDE9FE', '200': '#DDD6FF', '300': '#C4B4FF', '400': '#A684FF', '500': '#8E51FF', '600': '#7F22FE', '700': '#7008E7', '800': '#5D0EC0', '900': '#4D179A', '950': '#2F0D68' } },
  { name: 'Purple', shades: { '050': '#FAF5FF', '100': '#F3E8FF', '200': '#E9D4FF', '300': '#DAB2FF', '400': '#C27AFF', '500': '#AD46FF', '600': '#9810FA', '700': '#8200DB', '800': '#6E11B0', '900': '#59168B', '950': '#3C0366' } },
  { name: 'Fuchsia', shades: { '050': '#FDF4FF', '100': '#FAE8FF', '200': '#F6CFFF', '300': '#F4A8FF', '400': '#ED6AFF', '500': '#E12AFB', '600': '#C800DE', '700': '#A800B7', '800': '#8A0194', '900': '#721378', '950': '#4B004F' } },
  { name: 'Pink', shades: { '050': '#FDF2F8', '100': '#FCE7F3', '200': '#FCCEE8', '300': '#FDA5D5', '400': '#FB64B6', '500': '#F6339A', '600': '#E60076', '700': '#C6005C', '800': '#A3004C', '900': '#861043', '950': '#510424' } },
  { name: 'Rose', shades: { '050': '#FFF1F2', '100': '#FFE4E6', '200': '#FFCCD3', '300': '#FFA1AD', '400': '#FF637E', '500': '#FF2056', '600': '#EC003F', '700': '#C70036', '800': '#A50036', '900': '#8B0836', '950': '#4D0218' } },
];

/** Text color variables (light mode). */
const TEXT_VARS: ColorVar[] = [
  { name: 'text-white', color: '#FFFFFF' },
  { name: 'text-black', color: '#101828' },
  { name: 'text-heading', color: '#101828' },
  { name: 'text-body', color: '#4A5565' },
  { name: 'text-body-subtle', color: '#6A7282' },
  { name: 'text-fg-brand-subtle', color: '#BEDBFF' },
  { name: 'text-fg-brand', color: '#1447E6' },
  { name: 'text-fg-brand-strong', color: '#1C398E' },
  { name: 'text-fg-success', color: '#007A55' },
  { name: 'text-fg-success-strong', color: '#004F3B' },
  { name: 'text-fg-danger', color: '#C70036' },
  { name: 'text-fg-danger-strong', color: '#8B0836' },
  { name: 'text-fg-warning-subtle', color: '#D03801' },
  { name: 'text-fg-warning', color: '#771D1D' },
  { name: 'text-fg-yellow', color: '#FDC700' },
  { name: 'text-fg-info', color: '#1C398E' },
  { name: 'text-fg-disabled', color: '#99A1AF' },
  { name: 'text-fg-purple', color: '#9810FA' },
  { name: 'text-fg-cyan', color: '#0092B8' },
  { name: 'text-fg-indigo', color: '#4F39F6' },
  { name: 'text-fg-pink', color: '#E60076' },
  { name: 'text-fg-lime', color: '#5EA500' },
];

/** Background color variables (light mode). */
const BG_VARS: ColorVar[] = [
  { name: 'bg-white', color: '#FFFFFF' },
  { name: 'bg-neutral-primary-soft', color: '#FFFFFF' },
  { name: 'bg-neutral-primary', color: '#FFFFFF' },
  { name: 'bg-neutral-primary-medium', color: '#FFFFFF' },
  { name: 'bg-neutral-primary-strong', color: '#FFFFFF' },
  { name: 'bg-neutral-secondary-soft', color: '#F9FAFB' },
  { name: 'bg-neutral-secondary', color: '#F9FAFB' },
  { name: 'bg-neutral-secondary-medium', color: '#F9FAFB' },
  { name: 'bg-neutral-secondary-strong', color: '#F9FAFB' },
  { name: 'bg-neutral-tertiary-soft', color: '#F3F4F6' },
  { name: 'bg-neutral-tertiary', color: '#F3F4F6' },
  { name: 'bg-neutral-tertiary-medium', color: '#F3F4F6' },
  { name: 'bg-neutral-quaternary', color: '#E5E7EB' },
  { name: 'bg-neutral-quaternary-medium', color: '#E5E7EB' },
  { name: 'bg-gray', color: '#D1D5DC' },
  { name: 'bg-brand-softer', color: '#EEF6FF' },
  { name: 'bg-brand-soft', color: '#DBEAFE' },
  { name: 'bg-brand-medium', color: '#BEDBFF' },
  { name: 'bg-brand', color: '#1447E6' },
  { name: 'bg-brand-strong', color: '#193CB8' },
  { name: 'bg-success-soft', color: '#ECFDF5' },
  { name: 'bg-success-medium', color: '#D0FAE5' },
  { name: 'bg-success', color: '#007A55' },
  { name: 'bg-success-strong', color: '#006045' },
  { name: 'bg-danger-soft', color: '#FEF0F2' },
  { name: 'bg-danger-medium', color: '#FFE4E6' },
  { name: 'bg-danger', color: '#C70036' },
  { name: 'bg-danger-strong', color: '#A50036' },
  { name: 'bg-warning-soft', color: '#FFF8F1' },
  { name: 'bg-warning-medium', color: '#FEECDC' },
  { name: 'bg-warning', color: '#FF5A1F' },
  { name: 'bg-warning-strong', color: '#B43403' },
  { name: 'bg-dark-strong', color: '#101828' },
  { name: 'bg-dark', color: '#1E2939' },
  { name: 'bg-disabled', color: '#F3F4F6' },
  { name: 'bg-purple', color: '#AD46FF' },
  { name: 'bg-sky', color: '#00A6F4' },
  { name: 'bg-teal', color: '#009689' },
  { name: 'bg-pink', color: '#E60076' },
  { name: 'bg-cyan', color: '#00B8DB' },
  { name: 'bg-fuchsia', color: '#C800DE' },
  { name: 'bg-indigo', color: '#4F39F6' },
  { name: 'bg-orange', color: '#FF8A4C' },
];

/** Border color variables (light mode). */
const BORDER_VARS: ColorVar[] = [
  { name: 'border-dark', color: '#4A5565' },
  { name: 'border-buffer', color: '#FFFFFF' },
  { name: 'border-buffer-medium', color: '#FFFFFF' },
  { name: 'border-buffer-strong', color: '#FFFFFF' },
  { name: 'border-muted', color: '#F9FAFB' },
  { name: 'border-light-subtle', color: '#F3F4F6' },
  { name: 'border-light', color: '#F3F4F6' },
  { name: 'border-light-medium', color: '#F3F4F6' },
  { name: 'border-base-soft', color: '#E5E7EB' },
  { name: 'border-base', color: '#E5E7EB' },
  { name: 'border-base-medium', color: '#E5E7EB' },
  { name: 'border-base-strong', color: '#E5E7EB' },
  { name: 'border-success-subtle', color: '#A4F4CF' },
  { name: 'border-success', color: '#007A55' },
  { name: 'border-danger-subtle', color: '#FFCCD3' },
  { name: 'border-danger', color: '#C70036' },
  { name: 'border-warning-subtle', color: '#FCD9BD' },
  { name: 'border-warning', color: '#D03801' },
  { name: 'border-brand-subtle', color: '#BEDBFF' },
  { name: 'border-brand-light', color: '#155DFC' },
  { name: 'border-brand', color: '#1447E6' },
  { name: 'border-purple', color: '#AD46FF' },
  { name: 'border-orange', color: '#FF8A4C' },
  { name: 'border-dark-subtle', color: '#1E2939' },
];

/**
 * Swatch number label color: white on the darker shades (500–950), the
 * family's own 950 tint on the lighter shades (050–400). Mirrors the Flowbite
 * Figma canvas while keeping consistent, readable contrast across all families.
 */
function shadeLabelColor(family950: string, shade: Shade): string {
  return Number(shade) >= 500 ? '#FFFFFF' : family950;
}

/** Relative luminance of a #RRGGBB hex string (WCAG sRGB). */
function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const f = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

const PaletteSection = () => (
  <div className="flowbite-colors__palette">
    {FAMILIES.map((family) => (
      <div className="flowbite-colors__family" key={family.name}>
        <div className="flowbite-colors__family-name">{family.name}</div>
        <div className="flowbite-colors__swatches">
          {SHADES.map((shade, index) => (
            <div
              className={[
                'flowbite-colors__swatch',
                index === 0 ? 'flowbite-colors__swatch--first' : '',
                index === SHADES.length - 1 ? 'flowbite-colors__swatch--last' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ backgroundColor: family.shades[shade] }}
              key={shade}
            >
              <span
                className="flowbite-colors__swatch-label"
                style={{ color: shadeLabelColor(family.shades['950'], shade) }}
              >
                {shade}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const TextSection = () => (
  <div className="flowbite-colors__vars">
    {TEXT_VARS.map((v) => {
      const dark = luminance(v.color) < 0.5;
      const background = dark ? '#FFFFFF' : '#1F2A37';
      const secondary = dark ? '#6A7282' : '#9CA3AF';
      return (
        <div
          className="flowbite-colors__var flowbite-colors__var--text"
          style={{ backgroundColor: background }}
          key={v.name}
        >
          <span
            className="flowbite-colors__var-name flowbite-colors__var-name--text"
            style={{ color: v.color }}
          >
            {v.name}
          </span>
          <span className="flowbite-colors__var-hex" style={{ color: secondary }}>
            {v.color}
          </span>
        </div>
      );
    })}
  </div>
);

const BackgroundSection = () => (
  <div className="flowbite-colors__vars">
    {BG_VARS.map((v) => (
      <div className="flowbite-colors__var flowbite-colors__var--bg" key={v.name}>
        <div
          className="flowbite-colors__var-swatch flowbite-colors__var-swatch--bg"
          style={{ backgroundColor: v.color }}
        />
        <div className="flowbite-colors__var-meta">
          <span className="flowbite-colors__var-name">{v.name}</span>
          <span className="flowbite-colors__var-hex flowbite-colors__var-hex--muted">{v.color}</span>
        </div>
      </div>
    ))}
  </div>
);

const BorderSection = () => (
  <div className="flowbite-colors__vars">
    {BORDER_VARS.map((v) => (
      <div className="flowbite-colors__var flowbite-colors__var--border" key={v.name}>
        <div
          className="flowbite-colors__var-box"
          style={{ border: `4px solid ${v.color}` }}
        />
        <div className="flowbite-colors__var-meta">
          <span className="flowbite-colors__var-name">{v.name}</span>
          <span className="flowbite-colors__var-hex flowbite-colors__var-hex--muted">{v.color}</span>
        </div>
      </div>
    ))}
  </div>
);

const SECTION_DEFS: { key: Exclude<ColorsSection, 'all'>; title: string; hint: string; node: React.ReactNode }[] = [
  {
    key: 'palette',
    title: 'Color Palette',
    hint: '22 color families · shades 050–950 · swatches 100×100',
    node: <PaletteSection />,
  },
  {
    key: 'text',
    title: 'Text Color Variables',
    hint: 'Foreground tokens applied as text color (light mode)',
    node: <TextSection />,
  },
  {
    key: 'background',
    title: 'Background Color Variables',
    hint: 'Surface tokens applied as background color (light mode)',
    node: <BackgroundSection />,
  },
  {
    key: 'border',
    title: 'Border Color Variables',
    hint: 'Outline tokens applied as box borders (light mode)',
    node: <BorderSection />,
  },
];

export const Colors = ({ section = 'all', className = '' }: ColorsProps) => {
  const visible =
    section === 'all' ? SECTION_DEFS : SECTION_DEFS.filter((s) => s.key === section);

  return (
    <div className={['flowbite-colors', className].filter(Boolean).join(' ')}>
      {visible.map((s) => (
        <section className="flowbite-colors__section" key={s.key}>
          <h2 className="flowbite-colors__section-title">{s.title}</h2>
          <p className="flowbite-colors__section-hint">{s.hint}</p>
          {s.node}
        </section>
      ))}
    </div>
  );
};

export default Colors;
