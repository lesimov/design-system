import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'Flowbite/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: 'text',
    lines: 3,
  },
};

export const TextFourLines: Story = {
  args: {
    variant: 'text',
    lines: 4,
  },
};

export const TextCustomWidths: Story = {
  args: {
    variant: 'text',
    lineWidths: ['100%', '75%', '50%', '25%'],
  },
};

export const Card: Story = {
  args: {
    variant: 'card',
  },
};

export const CardNoImage: Story = {
  args: {
    variant: 'card',
    showImage: false,
  },
};

export const CardNoAuthor: Story = {
  args: {
    variant: 'card',
    showAuthor: false,
  },
};

export const Widget: Story = {
  args: {
    variant: 'widget',
  },
};

export const Image: Story = {
  args: {
    variant: 'image',
    width: 352,
    height: 200,
  },
};

export const Avatar: Story = {
  args: {
    variant: 'avatar',
    width: 48,
  },
};