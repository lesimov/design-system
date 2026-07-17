import type { Meta, StoryObj } from '@storybook/react-vite';
import { Autocomplete } from './Autocomplete';

const meta = {
  title: 'Flowbite/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'highlighted', 'advanced', 'advanced-save', 'categories', 'user'],
      description: 'Autocomplete variant',
    },
    label: { control: 'text', description: 'Input label text' },
    placeholder: { control: 'text', description: 'Input placeholder' },
    required: { control: 'boolean', description: 'Show required indicator' },
    helperText: { control: 'text', description: 'Helper text below input' },
    disabled: { control: 'boolean', description: 'Disable the input' },
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Search pages',
    placeholder: 'Search pages...',
    helperText: 'Type to search through available pages',
  },
};

export const Highlighted: Story = {
  args: {
    variant: 'highlighted',
    label: 'Search dashboards',
    placeholder: 'Search...',
  },
};

export const Advanced: Story = {
  args: {
    variant: 'advanced',
    label: 'Select project',
    placeholder: 'Search projects...',
    helperText: 'Each item includes save and close actions',
  },
};

export const AdvancedWithSave: Story = {
  args: {
    variant: 'advanced-save',
    label: 'Saved projects',
    placeholder: 'Search projects...',
    helperText: 'Click save to pin items to your favorites',
  },
};

export const Categories: Story = {
  args: {
    variant: 'categories',
    label: 'Search resources',
    placeholder: 'Search by resource name...',
  },
};

export const User: Story = {
  args: {
    variant: 'user',
    label: 'Team members',
    placeholder: 'Search team members...',
    helperText: 'Search by name or email',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    label: 'Disabled search',
    placeholder: 'Search...',
    disabled: true,
    helperText: 'This field is currently disabled',
  },
};