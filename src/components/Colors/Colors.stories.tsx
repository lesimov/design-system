import type { Meta, StoryObj } from '@storybook/react-vite';
import { Colors } from './Colors';

const meta = {
  title: 'Style Guide/Colors',
  component: Colors,
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
    docs: {
      description: {
        component:
          'Color foundation tokens transcribed from the Flowbite Design System Figma ("🎨 Colors" canvas, node 0-1): the 22-family primitive palette (shades 050–950) plus the text, background and border semantic color variables (light mode).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['palette', 'text', 'background', 'border', 'all'],
      description: 'Which section of the color style guide to render',
    },
  },
  args: {
    section: 'all',
  },
} satisfies Meta<typeof Colors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: { section: 'all' },
};

export const Palette: Story = {
  args: { section: 'palette' },
};

export const TextVariables: Story = {
  args: { section: 'text' },
};

export const BackgroundVariables: Story = {
  args: { section: 'background' },
};

export const BorderVariables: Story = {
  args: { section: 'border' },
};
