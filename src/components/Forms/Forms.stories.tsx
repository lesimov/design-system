import type { Meta, StoryObj } from '@storybook/react-vite';
import { Forms } from './Forms';

const meta = {
  title: 'Flowbite/Forms',
  component: Forms,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['inputs', 'groups', 'all'],
      description: 'Showcase section to render',
    },
  },
  args: {
    section: 'all',
  },
} satisfies Meta<typeof Forms>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ========== Sections ========== */

export const Inputs: Story = {
  args: { section: 'inputs' },
};

export const Groups: Story = {
  args: { section: 'groups' },
};

/* ========== Kitchen sink ========== */

export const All: Story = {
  args: { section: 'all' },
};