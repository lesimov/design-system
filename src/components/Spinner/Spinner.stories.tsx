import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';

const meta = {
  title: 'Flowbite/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['brand', 'gray', 'red', 'green', 'yellow', 'purple', 'blue', 'white'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'base', 'lg'],
    },
    track: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Default ==========

export const Default: Story = {
  args: {},
};

// ========== Colors ==========

export const Brand: Story = {
  args: { color: 'brand' },
};

export const Gray: Story = {
  args: { color: 'gray' },
};

export const Red: Story = {
  args: { color: 'red' },
};

export const Green: Story = {
  args: { color: 'green' },
};

export const Yellow: Story = {
  args: { color: 'yellow' },
};

export const Purple: Story = {
  args: { color: 'purple' },
};

export const Blue: Story = {
  args: { color: 'blue' },
};

export const White: Story = {
  args: { color: 'white' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// ========== Sizes ==========

export const SizeXs: Story = {
  args: { size: 'xs' },
};

export const SizeSm: Story = {
  args: { size: 'sm' },
};

export const SizeMd: Story = {
  args: { size: 'md' },
};

export const SizeBase: Story = {
  args: { size: 'base' },
};

export const SizeLg: Story = {
  args: { size: 'lg' },
};

// ========== Track variants ==========

export const TrackEnabled: Story = {
  args: { track: true },
};

export const TrackDisabled: Story = {
  args: { track: false },
};

// ========== Kitchen sink ==========

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Spinner color="brand" />
      <Spinner color="gray" />
      <Spinner color="red" />
      <Spinner color="green" />
      <Spinner color="yellow" />
      <Spinner color="purple" />
      <Spinner color="blue" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="base" />
      <Spinner size="lg" />
    </div>
  ),
};

export const TrackToggle: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 12, color: '#6A7282' }}>Track=True</span>
        <Spinner track={true} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 12, color: '#6A7282' }}>Track=False</span>
        <Spinner track={false} />
      </div>
    </div>
  ),
};