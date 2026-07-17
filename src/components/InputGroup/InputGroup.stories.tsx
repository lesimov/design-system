import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputGroup } from './InputGroup';

const meta = {
  title: 'Style Guide/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['sizes', 'colors', 'types', 'all'],
      description: 'Which section(s) to render',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'l'],
      description: 'Button size (applies to custom groups)',
    },
    color: {
      control: 'select',
      options: ['gray', 'white'],
      description: 'Button fill color (applies to custom groups)',
    },
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Sections ==========

export const Sizes: Story = {
  args: { section: 'sizes' },
};

export const Colors: Story = {
  args: { section: 'colors' },
};

export const Types: Story = {
  args: { section: 'types' },
};

// ========== Full gallery ==========

export const All: Story = {
  args: { section: 'all' },
};

// ========== Single custom groups ==========

export const Numbers: Story = {
  args: {
    size: 'sm',
    color: 'gray',
    items: Array.from({ length: 10 }, (_, i) => ({ text: String(i + 1) })),
  },
};

export const WithDropdown: Story = {
  args: {
    size: 'sm',
    color: 'gray',
    items: [
      { text: 'Button' },
      { text: 'Button' },
      { text: 'Button' },
      { text: 'Button' },
      { text: 'Button text', icon: 'chevron-down' },
    ],
  },
};

export const OnlyIcons: Story = {
  args: {
    size: 'sm',
    color: 'gray',
    items: [
      { icon: 'arrow-left', iconOnly: true },
      { icon: 'home', iconOnly: true },
      { icon: 'arrow-right', iconOnly: true },
    ],
  },
};

export const PlusMinus: Story = {
  args: {
    size: 'sm',
    color: 'gray',
    items: [
      { icon: 'plus', iconOnly: true },
      { text: 'Button text' },
      { icon: 'minus', iconOnly: true },
    ],
  },
};

export const TwoButtons: Story = {
  args: {
    size: 'sm',
    color: 'gray',
    items: [{ text: 'Button' }, { text: 'Button' }],
  },
};

export const WhiteLarge: Story = {
  args: {
    size: 'l',
    color: 'white',
    items: [
      { text: 'Button text' },
      { text: 'Button' },
      { text: 'Button' },
      { text: 'Button' },
      { text: 'Button text' },
    ],
  },
};
