import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Flowbite/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'brand', 'alternative', 'dark', 'light', 'green', 'red',
        'yellow', 'purple', 'blue', 'gray', 'ghost',
      ],
      description: 'Color scheme',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'l', 'xl', '2xl'],
      description: 'Size variant',
    },
    outline: {
      control: 'boolean',
      description: 'Outline style',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon-only square mode',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    focused: {
      control: 'boolean',
      description: 'Focus ring visible',
    },
    active: {
      control: 'boolean',
      description: 'Active/pressed state',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Icon position (when not iconOnly)',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button text',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 3.5C8 3.5 6.5 1 4 1S1 3.5 1 5.5 8 15 8 15s7-7.5 7-9.5S11.5 1 9 3.5 8 5.5 8 5.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// ========== Colors (base size) ==========

export const Brand: Story = {
  args: { color: 'brand' },
};

export const Alternative: Story = {
  args: { color: 'alternative' },
};

export const Dark: Story = {
  args: { color: 'dark' },
};

export const Light: Story = {
  args: { color: 'light' },
};

export const Green: Story = {
  args: { color: 'green' },
};

export const Red: Story = {
  args: { color: 'red' },
};

export const Yellow: Story = {
  args: { color: 'yellow' },
};

export const Purple: Story = {
  args: { color: 'purple' },
};

export const Blue: Story = {
  args: { color: 'blue' },
};

export const Gray: Story = {
  args: { color: 'gray' },
};

export const Ghost: Story = {
  args: { color: 'ghost' },
};

// ========== Sizes ==========

export const SizeXs: Story = {
  args: { size: 'xs' },
};

export const SizeSm: Story = {
  args: { size: 'sm' },
};

export const SizeBase: Story = {
  args: { size: 'base' },
};

export const SizeL: Story = {
  args: { size: 'l' },
};

export const SizeXl: Story = {
  args: { size: 'xl' },
};

export const Size2xl: Story = {
  args: { size: '2xl' },
};

// ========== States ==========

export const Disabled: Story = {
  args: { disabled: true },
};

export const Loading: Story = {
  args: { loading: true },
};

export const Focused: Story = {
  args: { focused: true },
};

export const Active: Story = {
  args: { active: true },
};

// ========== Variants ==========

export const Outline: Story = {
  args: { outline: true, color: 'brand' },
};

export const OutlineAlternative: Story = {
  args: { outline: true, color: 'alternative' },
};

export const OutlineDark: Story = {
  args: { outline: true, color: 'dark' },
};

export const IconLeft: Story = {
  args: { icon: <HeartIcon />, iconPosition: 'left', children: 'Like' },
};

export const IconRight: Story = {
  args: { icon: <HeartIcon />, iconPosition: 'right', children: 'Like' },
};

export const IconOnly: Story = {
  args: { iconOnly: true, icon: <HeartIcon />, 'aria-label': 'Like' },
};

export const IconOnlyBrand: Story = {
  args: { iconOnly: true, icon: <HeartIcon />, color: 'brand', 'aria-label': 'Like' },
};

export const IconOnlyRed: Story = {
  args: { iconOnly: true, icon: <HeartIcon />, color: 'red', 'aria-label': 'Like' },
};

// ========== All colors kitchen sink ==========

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button color="brand">Brand</Button>
      <Button color="alternative">Alternative</Button>
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button color="green">Green</Button>
      <Button color="red">Red</Button>
      <Button color="yellow">Yellow</Button>
      <Button color="purple">Purple</Button>
      <Button color="blue">Blue</Button>
      <Button color="gray">Gray</Button>
      <Button color="ghost">Ghost</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="base">Base</Button>
      <Button size="l">L</Button>
      <Button size="xl">XL</Button>
      <Button size="2xl">2XL</Button>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button>Normal</Button>
      <Button focused>Focused</Button>
      <Button active>Active</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  ),
};

export const IconVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button icon={<HeartIcon />} iconPosition="left">Left icon</Button>
      <Button icon={<HeartIcon />} iconPosition="right">Right icon</Button>
      <Button iconOnly icon={<HeartIcon />} aria-label="Like" />
      <Button iconOnly icon={<HeartIcon />} color="ghost" aria-label="Like" />
      <Button iconOnly icon={<HeartIcon />} color="alternative" aria-label="Like" />
      <Button iconOnly icon={<HeartIcon />} color="dark" aria-label="Like" />
    </div>
  ),
};

export const OutlineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      <Button outline color="brand">Brand</Button>
      <Button outline color="alternative">Alternative</Button>
      <Button outline color="dark">Dark</Button>
      <Button outline color="green">Green</Button>
      <Button outline color="red">Red</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 480 }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Colors (base)</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Button color="brand">Brand</Button>
          <Button color="alternative">Alternative</Button>
          <Button color="dark">Dark</Button>
          <Button color="light">Light</Button>
          <Button color="green">Green</Button>
          <Button color="red">Red</Button>
          <Button color="yellow">Yellow</Button>
          <Button color="purple">Purple</Button>
          <Button color="blue">Blue</Button>
          <Button color="gray">Gray</Button>
          <Button color="ghost">Ghost</Button>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Sizes</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="base">Base</Button>
          <Button size="l">L</Button>
          <Button size="xl">XL</Button>
          <Button size="2xl">2XL</Button>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>States</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Button>Normal</Button>
          <Button focused>Focused</Button>
          <Button active>Active</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Outline</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Button outline color="brand">Brand</Button>
          <Button outline color="alternative">Alternative</Button>
          <Button outline color="dark">Dark</Button>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Icons</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
          <Button icon={<HeartIcon />} iconPosition="left">Left</Button>
          <Button icon={<HeartIcon />} iconPosition="right">Right</Button>
          <Button iconOnly icon={<HeartIcon />} aria-label="Like" />
        </div>
      </div>
    </div>
  ),
};