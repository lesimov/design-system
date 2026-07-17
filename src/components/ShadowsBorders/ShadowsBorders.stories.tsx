import type { Meta, StoryObj } from '@storybook/react-vite';
import { ShadowsBorders } from './ShadowsBorders';

const meta = {
  title: 'Style Guide/Shadows & Borders',
  component: ShadowsBorders,
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
    docs: {
      description: {
        component:
          'Foundation tokens transcribed from the Flowbite Design System Figma ("🔲 Shadows & Borders" canvas): border-radius, border-width, border-style and box-shadow. These tokens underpin every component in the system.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShadowsBorders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

/** Border-radius steps only — handy for spot-checking radius values. */
export const BorderRadius: Story = {
  render: () => {
    const items = [
      { label: '.rounded-xxs', className: 'fb-radius-xxs' },
      { label: '.rounded-xs', className: 'fb-radius-xs' },
      { label: '.rounded-sm', className: 'fb-radius-sm' },
      { label: '.rounded', className: 'fb-radius' },
      { label: '.rounded-base', className: 'fb-radius-base' },
      { label: '.rounded-lg', className: 'fb-radius-lg' },
      { label: '.rounded-xl', className: 'fb-radius-xl' },
      { label: '.rounded-full', className: 'fb-radius-full' },
    ];
    return (
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 24, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {items.map((s) => (
          <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div className={s.className} style={{ width: 96, height: 96, background: '#1c4ed8' }} />
            <code style={{ fontSize: 13 }}>{s.label}</code>
          </div>
        ))}
      </div>
    );
  },
  parameters: { layout: 'centered' },
};

/** Box-shadow elevation scale on a neutral backdrop. */
export const BoxShadow: Story = {
  render: () => {
    const items = [
      { label: '.shadow-xs', className: 'fb-shadow-xs' },
      { label: '.shadow-sm', className: 'fb-shadow-sm' },
      { label: '.shadow', className: 'fb-shadow' },
      { label: '.shadow-md', className: 'fb-shadow-md' },
      { label: '.shadow-lg', className: 'fb-shadow-lg' },
      { label: '.shadow-xl', className: 'fb-shadow-xl' },
      { label: '.shadow-2xl', className: 'fb-shadow-2xl' },
      { label: '.shadow-inner', className: 'fb-shadow-inner' },
      { label: '.shadow-top', className: 'fb-shadow-top' },
    ];
    return (
      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 32, display: 'flex', flexWrap: 'wrap', gap: 32, background: '#f9fafb', borderRadius: 16 }}>
        {items.map((s) => (
          <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div className={s.className} style={{ width: 120, height: 120, background: '#fff', borderRadius: 2 }} />
            <code style={{ fontSize: 13, color: '#1c398e' }}>{s.label}</code>
          </div>
        ))}
      </div>
    );
  },
  parameters: { layout: 'centered' },
};
