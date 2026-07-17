import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navbar } from './Navbar';

const meta = {
  title: 'Flowbite/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
    docs: {
      description: {
        component:
          'Nav link variants transcribed from the Flowbite Design System Figma ("---- Navbar" canvas, node 3279-21067). Shows Right icon and Bordered nav link types in Initial, Hover, and Active states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['right-icon', 'bordered', 'all'],
      description: 'Which section to render',
    },
  },
  args: {
    section: 'all',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: { section: 'all' },
};

export const RightIcon: Story = {
  args: { section: 'right-icon' },
};

export const Bordered: Story = {
  args: { section: 'bordered' },
};