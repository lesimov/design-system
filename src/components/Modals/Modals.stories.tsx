import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modals } from './Modals';

const meta = {
  title: 'Flowbite/Modals',
  component: Modals,
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
    docs: {
      description: {
        component: 'Modal variants transcribed from the Flowbite Design System Figma ("---- Modals" canvas, node 3284-23179). Shows Info, Sign In, and Share modal types with all internal elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['info', 'sign-in', 'share', 'all'],
      description: 'Which modal variant to render',
    },
  },
  args: {
    section: 'all',
  },
} satisfies Meta<typeof Modals>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = { args: { section: 'all' } };
export const Info: Story = { args: { section: 'info' } };
export const SignIn: Story = { args: { section: 'sign-in' } };
export const Share: Story = { args: { section: 'share' } };
