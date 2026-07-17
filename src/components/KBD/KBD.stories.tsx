import type { Meta, StoryObj } from '@storybook/react-vite';
import { KBD } from './KBD';

const meta = {
  title: 'Flowbite/KBD',
  component: KBD,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof KBD>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Default ==========

export const Default: Story = {
  args: {
    children: 'Ctrl',
  },
};

// ========== Size variants ==========

export const Medium: Story = {
  args: {
    children: 'Shift',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'Tab',
    size: 'sm',
  },
};

// ========== Key labels ==========

export const Shift: Story = {
  args: { children: 'Shift' },
};

export const Ctrl: Story = {
  args: { children: 'Ctrl' },
};

export const Tab: Story = {
  args: { children: 'Tab' },
};

export const CapsLock: Story = {
  args: { children: 'Caps Lock' },
};

export const Esc: Story = {
  args: { children: 'Esc' },
};

export const Spacebar: Story = {
  args: { children: 'Spacebar' },
  decorators: [
    (Story) => (
      <div style={{ minWidth: 120 }}>
        <Story />
      </div>
    ),
  ],
};

export const Enter: Story = {
  args: { children: 'Enter' },
};

export const ArrowKeys: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <KBD>&uarr;</KBD>
      <KBD>&darr;</KBD>
      <KBD>&larr;</KBD>
      <KBD>&rarr;</KBD>
    </div>
  ),
};

export const FunctionKeys: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 400 }}>
      <KBD>F1</KBD>
      <KBD>F2</KBD>
      <KBD>F3</KBD>
      <KBD>F4</KBD>
      <KBD>F5</KBD>
      <KBD>F6</KBD>
      <KBD>F7</KBD>
      <KBD>F8</KBD>
      <KBD>F9</KBD>
      <KBD>F10</KBD>
      <KBD>F11</KBD>
      <KBD>F12</KBD>
    </div>
  ),
};

export const SingleLetters: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 400 }}>
      <KBD>Q</KBD>
      <KBD>W</KBD>
      <KBD>E</KBD>
      <KBD>R</KBD>
      <KBD>T</KBD>
      <KBD>Y</KBD>
      <KBD>U</KBD>
      <KBD>I</KBD>
      <KBD>O</KBD>
      <KBD>P</KBD>
      <KBD>A</KBD>
      <KBD>S</KBD>
      <KBD>D</KBD>
      <KBD>F</KBD>
      <KBD>G</KBD>
      <KBD>H</KBD>
      <KBD>J</KBD>
      <KBD>K</KBD>
      <KBD>L</KBD>
      <KBD>Z</KBD>
      <KBD>X</KBD>
      <KBD>C</KBD>
      <KBD>V</KBD>
      <KBD>B</KBD>
      <KBD>N</KBD>
      <KBD>M</KBD>
    </div>
  ),
};

export const Shortcut: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <KBD>Ctrl</KBD>
      <span style={{ color: '#6A7282', fontSize: 14 }}>+</span>
      <KBD>C</KBD>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 12, color: '#6A7282' }}>sm</span>
        <KBD size="sm">Ctrl</KBD>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 12, color: '#6A7282' }}>md</span>
        <KBD size="md">Ctrl</KBD>
      </div>
    </div>
  ),
};