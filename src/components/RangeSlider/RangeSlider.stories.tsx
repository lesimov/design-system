import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { RangeSlider } from './RangeSlider';

const meta = {
  title: 'Flowbite/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: 560 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: { control: 'select', options: ['default', 'range'] },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    showIcons: { control: 'boolean' },
    showLabels: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showHelper: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    min: 0,
    max: 100,
    step: 1,
    showIcons: false,
    showLabels: true,
    showTooltip: false,
    showHelper: false,
    disabled: false,
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Stories                                                           */
/* ------------------------------------------------------------------ */

export const Default: Story = {
  args: {
    defaultValue: 40,
    showLabels: true,
    showTooltip: true,
    showHelper: true,
  },
};

export const Range: Story = {
  args: {
    variant: 'range',
    defaultValue: [25, 75],
    showLabels: true,
    showHelper: true,
  },
};

export const WithIcons: Story = {
  args: {
    showIcons: true,
    showLabels: true,
    showTooltip: true,
    showHelper: true,
    defaultValue: 60,
  },
};

export const WithTooltip: Story = {
  args: {
    showTooltip: true,
    showLabels: true,
    defaultValue: 72,
  },
};

export const WithHelper: Story = {
  args: {
    showHelper: true,
    showLabels: true,
    defaultValue: 50,
  },
};

export const Minimal: Story = {
  args: {
    showLabels: false,
    showHelper: false,
    defaultValue: 30,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    showLabels: true,
    showHelper: true,
    defaultValue: 40,
  },
};

export const DisabledRange: Story = {
  args: {
    variant: 'range',
    disabled: true,
    defaultValue: [25, 75],
    showLabels: true,
    showHelper: true,
  },
};

export const CustomRange: Story = {
  args: {
    min: 0,
    max: 200,
    step: 10,
    defaultValue: 80,
    showLabels: true,
    showHelper: true,
    showTooltip: true,
  },
};

/** Mirrors the Figma "Range" example — currency tooltips ($300 / $2500). */
export const CurrencyRange: Story = {
  args: {
    variant: 'range',
    min: 0,
    max: 5000,
    step: 100,
    defaultValue: [300, 2500],
    showLabels: true,
    showTooltip: true,
    showHelper: true,
    formatValue: (v) => `$${Math.round(v)}`,
  },
};

export const Controlled: Story = {
  render: () => {
    const [val, setVal] = useState(40);
    return (
      <div>
        <RangeSlider
          value={val}
          onChange={(v) => setVal(Array.isArray(v) ? v[0] : v)}
          showLabels
          showTooltip
          showHelper
        />
        <p style={{ marginTop: 16, fontSize: 14, color: '#4A5565' }}>
          Current value: <strong>{val}%</strong>
        </p>
      </div>
    );
  },
};
