import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxRadio } from './CheckboxRadio';

const meta = {
  title: 'Flowbite/CheckboxRadio',
  component: CheckboxRadio,
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
    docs: {
      description: {
        component:
          'Checkbox & radio input states transcribed from the Flowbite Design System Figma ("---- Checkbox & radio" canvas, node 1149-54696). Shows all variant combinations: status (Initial, Focus, Disabled) × checked state (True, False) for both checkbox and radio inputs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['checkbox', 'radio', 'all'],
      description: 'Which section of the checkbox & radio style guide to render',
    },
  },
  args: {
    section: 'all',
  },
} satisfies Meta<typeof CheckboxRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: { section: 'all' },
};

export const Checkbox: Story = {
  args: { section: 'checkbox' },
};

export const Radio: Story = {
  args: { section: 'radio' },
};