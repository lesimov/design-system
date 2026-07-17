import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconShape } from './IconShape';

const meta = {
  title: 'Flowbite/IconShape',
  component: IconShape,
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
    docs: {
      description: {
        component:
          'Icon shape (circle) variants transcribed from the Flowbite Design System Figma ("---- Icon shape" canvas, node 1149-56577). Shows all color × size combinations: Green, Red, Brand, Gray, Yellow, Purple, Teal, and Pink in sizes xs through 2xl.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['green', 'red', 'brand', 'gray', 'all'],
      description: 'Which color section(s) to render',
    },
  },
  args: {
    section: 'all',
  },
} satisfies Meta<typeof IconShape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: { section: 'all' },
};

export const Green: Story = {
  args: { section: 'green' },
};

export const Red: Story = {
  args: { section: 'red' },
};

export const Brand: Story = {
  args: { section: 'brand' },
};

export const Gray: Story = {
  args: { section: 'gray' },
};