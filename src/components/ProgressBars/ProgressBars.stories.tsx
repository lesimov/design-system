import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBars } from './ProgressBars';

const meta = {
  title: 'Flowbite/ProgressBars',
  component: ProgressBars,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    section: { control: 'select', options: ['bars', 'colors', 'labels', 'all'], description: 'Showcase section' },
    size: { control: 'select', options: ['base', 'lg'], description: 'Bar height' },
    color: {
      control: 'select',
      options: ['primary', 'success', 'gray', 'danger', 'warning', 'indigo', 'purple', 'cyan', 'pink', 'teal', 'lime'],
      description: 'Bar fill color',
    },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 }, description: 'Fill percentage' },
    label: { control: 'select', options: ['top', 'bottom', 'none'], description: 'Label position' },
    leftLabel: { control: 'text', description: 'Left label text' },
    rightLabel: { control: 'text', description: 'Right label text' },
    showPercent: { control: 'boolean', description: 'Show percentage in default labels' },
  },
  args: { section: 'all' },
} satisfies Meta<typeof ProgressBars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: { section: 'all' },
};

export const Bars: Story = {
  args: { section: 'bars' },
};

export const Colors: Story = {
  args: { section: 'colors' },
};

export const Labels: Story = {
  args: { section: 'labels' },
};
