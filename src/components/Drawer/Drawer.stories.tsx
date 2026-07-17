import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './Drawer';

const meta = {
  title: 'Flowbite/Drawer',
  component: Drawer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['default', 'with-image', 'with-list', 'with-form', 'all'],
      description: 'Drawer variant section to render',
    },
  },
  args: {
    section: 'all',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========== Single variant stories ========== */

export const Default: Story = {
  args: { section: 'default' },
};

export const WithImage: Story = {
  args: { section: 'with-image' },
};

export const WithList: Story = {
  args: { section: 'with-list' },
};

export const WithForm: Story = {
  args: { section: 'with-form' },
};

/* ========== Kitchen sink ========== */

export const All: Story = {
  args: { section: 'all' },
};