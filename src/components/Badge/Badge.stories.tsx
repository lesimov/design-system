import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Badge } from './Badge';

const meta = {
  title: 'Flowbite/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['gray', 'brand', 'danger', 'warning', 'success', 'white'],
      description: 'Badge color theme',
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
      description: 'Size variant',
    },
    type: {
      control: 'select',
      options: ['default', 'pill'],
      description: 'Visual type',
    },
    closable: {
      control: 'boolean',
      description: 'Show the dismiss button',
    },
    children: {
      control: 'text',
      description: 'Badge text content',
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Colors ==========

export const Gray: Story = {
  args: { children: 'Badge text', color: 'gray' },
};

export const Brand: Story = {
  args: { children: 'Badge text', color: 'brand' },
};

export const Danger: Story = {
  args: { children: 'Badge text', color: 'danger' },
};

export const Warning: Story = {
  args: { children: 'Badge text', color: 'warning' },
};

export const Success: Story = {
  args: { children: 'Badge text', color: 'success' },
};

export const White: Story = {
  args: { children: 'Badge text', color: 'white' },
};

// ========== Sizes ==========

export const Small: Story = {
  args: { children: 'Badge text', size: 'sm', color: 'brand' },
};

export const Large: Story = {
  args: { children: 'Badge text', size: 'lg', color: 'brand' },
};

// ========== Types ==========

export const DefaultType: Story = {
  args: { children: 'Badge text', type: 'default', color: 'brand' },
};

export const Pill: Story = {
  args: { children: 'Badge text', type: 'pill', color: 'brand' },
};

// ========== With Icon ==========

export const WithIcon: Story = {
  args: { children: 'Badge text', color: 'brand', icon: null },
};

// ========== Closable ==========

export const Closable: Story = {
  args: { children: 'Badge text', color: 'brand', closable: true },
};

export const IconAndClosable: Story = {
  args: {
    children: 'Badge text',
    color: 'danger',
    closable: true,
  },
};

// ========== Only Text (pill, number) ==========

export const OnlyText: Story = {
  args: { children: '1', type: 'pill', color: 'brand' },
};

// ========== Kitchen sink ==========

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Badge color="gray">Gray</Badge>
      <Badge color="brand">Brand</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="white">White</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Badge size="sm" color="brand">Small</Badge>
      <Badge size="lg" color="brand">Large</Badge>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Badge type="default" color="brand">Default</Badge>
      <Badge type="pill" color="brand">Pill</Badge>
    </div>
  ),
};

export const ClosableAllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Badge color="gray" closable>Gray</Badge>
      <Badge color="brand" closable>Brand</Badge>
      <Badge color="danger" closable>Danger</Badge>
      <Badge color="warning" closable>Warning</Badge>
      <Badge color="success" closable>Success</Badge>
    </div>
  ),
};

export const PillNumbers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Badge type="pill" color="gray">1</Badge>
      <Badge type="pill" color="brand">2</Badge>
      <Badge type="pill" color="danger">3</Badge>
      <Badge type="pill" color="warning">4</Badge>
      <Badge type="pill" color="success">5</Badge>
    </div>
  ),
};
