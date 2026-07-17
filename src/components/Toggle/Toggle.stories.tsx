import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './Toggle';

const meta = {
  title: 'Flowbite/Toggle',
  component: Toggle,
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Monthly',
    defaultChecked: true,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const LargeChecked: Story = {
  args: {
    size: 'lg',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const Focused: Story = {
  render: () => <Toggle defaultChecked />,
  play: ({ canvasElement }) => {
    const input = canvasElement.querySelector<HTMLInputElement>('.flowbite-toggle__input');
    input?.focus();
  },
};