import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatars } from './Avatars';

const meta = {
  title: 'Style Guide/Avatars',
  component: Avatars,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['sizes', 'types', 'status', 'group', 'all', 'single'],
      description: 'Which showcase section to render',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
      description: 'Avatar size (used for single avatar display)',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'alternative'],
      description: 'Status dot type (used for single avatar display)',
    },
    initials: {
      control: 'text',
      description: 'Initials shown inside a single avatar',
    },
  },
} satisfies Meta<typeof Avatars>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Sections ==========

export const Sizes: Story = {
  args: { section: 'sizes' },
};

export const Types: Story = {
  args: { section: 'types' },
};

export const StatusDots: Story = {
  args: { section: 'status' },
};

export const AvatarGroup: Story = {
  args: { section: 'group' },
};

// ========== Kitchen sink ==========

export const All: Story = {
  args: { section: 'all' },
};

// ========== Single avatar ==========

export const SingleAvatar: Story = {
  args: {
    section: 'single',
    size: 'lg',
    status: 'online',
    initials: 'BG',
  },
};
