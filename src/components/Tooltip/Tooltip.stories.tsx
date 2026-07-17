import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Flowbite/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    label: { control: 'text' },
    visible: { control: 'boolean' },
  },
  args: {
    label: 'Tooltip text here',
    children: <button type="button" style={{
      padding: '10px 16px',
      borderRadius: 8,
      border: '1px solid #E5E7EB',
      background: '#F9FAFB',
      color: '#4A5565',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>Hover me</button>,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    position: 'top',
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
};

export const Left: Story = {
  args: {
    position: 'left',
  },
};

export const Right: Story = {
  args: {
    position: 'right',
  },
};

export const AlwaysVisible: Story = {
  args: {
    label: 'I am always visible',
    visible: true,
  },
};

export const LongText: Story = {
  args: {
    label: 'This is a longer tooltip with more text content',
    position: 'bottom',
  },
};