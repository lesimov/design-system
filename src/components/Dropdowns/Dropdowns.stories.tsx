import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdowns } from './Dropdowns';

const meta = {
  title: 'Flowbite/Dropdowns',
  component: Dropdowns,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['items', 'states', 'all'],
      description: 'Showcase section to render',
    },
  },
  args: {
    section: 'all',
  },
} satisfies Meta<typeof Dropdowns>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========== Sections ========== */

export const Default: Story = {
  args: { section: 'items' },
};

export const All: Story = {
  args: { section: 'all' },
};