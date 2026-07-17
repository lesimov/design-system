import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta = {
  title: 'Style Guide/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['family', 'weights', 'sizes', 'headings', 'body', 'all'],
      description: 'Which section(s) to render',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Sections ==========

export const FontFamily: Story = {
  args: { section: 'family' },
};

export const FontWeights: Story = {
  args: { section: 'weights' },
};

export const FontSizes: Story = {
  args: { section: 'sizes' },
};

export const Headings: Story = {
  args: { section: 'headings' },
};

export const BodyText: Story = {
  args: { section: 'body' },
};

// ========== Full gallery ==========

export const All: Story = {
  args: { section: 'all' },
};
