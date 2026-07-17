import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from './Stepper';

const meta = {
  title: 'Flowbite/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    currentStep: { control: { type: 'number', min: 0, max: 3 } },
    defaultStep: { control: { type: 'number', min: 0, max: 3 } },
    prevLabel: { control: 'text' },
    nextLabel: { control: 'text' },
    submitLabel: { control: 'text' },
  },
  args: {
    steps: [
      { label: 'Personal Info' },
      { label: 'Account Info' },
      { label: 'Payment Info' },
      { label: 'Review' },
    ],
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultStep: 1,
  },
};

export const FirstStep: Story = {
  args: {
    defaultStep: 0,
  },
};

export const SecondStep: Story = {
  args: {
    defaultStep: 1,
  },
};

export const ThirdStep: Story = {
  args: {
    defaultStep: 2,
  },
};

export const LastStep: Story = {
  args: {
    defaultStep: 3,
  },
};

export const CustomLabels: Story = {
  args: {
    defaultStep: 1,
    prevLabel: '← Back',
    nextLabel: 'Continue →',
    submitLabel: 'Finish',
  },
};

export const WithContent: Story = {
  args: {
    defaultStep: 1,
  },
  render: (args) => (
    <Stepper {...args}>
      Account information form goes here.
    </Stepper>
  ),
};