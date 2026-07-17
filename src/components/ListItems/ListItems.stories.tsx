import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItems } from './ListItems';

const meta = {
  title: 'Flowbite/ListItems',
  component: ListItems,
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
    docs: {
      description: {
        component:
          'List item variants transcribed from the Flowbite Design System Figma ("---- List" canvas, node 3284-24113). Shows all list item types (Default, Image & number, Transaction, With number, With badge, With right icon, With icons) in Initial, Hover/Active, and Disabled states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['default', 'image-number', 'transaction', 'number', 'badge', 'icon-right', 'icons', 'all'],
      description: 'Which section of the list items style guide to render',
    },
  },
  args: {
    section: 'all',
  },
} satisfies Meta<typeof ListItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: { section: 'all' },
};

export const Default: Story = {
  args: { section: 'default' },
};

export const ImageNumber: Story = {
  args: { section: 'image-number' },
};

export const Transaction: Story = {
  args: { section: 'transaction' },
};

export const WithNumber: Story = {
  args: { section: 'number' },
};

export const WithBadge: Story = {
  args: { section: 'badge' },
};

export const WithRightIcon: Story = {
  args: { section: 'icon-right' },
};

export const WithIcons: Story = {
  args: { section: 'icons' },
};