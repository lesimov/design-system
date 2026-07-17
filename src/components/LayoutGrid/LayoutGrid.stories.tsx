import type { Meta, StoryObj } from '@storybook/react-vite';
import { LayoutGrid } from './LayoutGrid';

const meta = {
  title: 'Style Guide/LayoutGrid',
  component: LayoutGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['columns', 'rows', 'containers', 'all'],
      description: 'Which section(s) to render (ignored in individual mode)',
    },
    columns: {
      control: { type: 'number', min: 1, max: 12, step: 1 },
      description: 'Single column count to display (1-12). Overrides section.',
    },
    gap: {
      control: 'select',
      options: ['gap-4', 'gap-8', 'gap-16'],
      description: 'Restrict displayed grids to this gap',
    },
    rows: {
      control: { type: 'number', min: 1, max: 6, step: 1 },
      description: 'Single row count to display (1-6). Overrides section.',
    },
  },
} satisfies Meta<typeof LayoutGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Overview ==========

export const All: Story = {
  args: { section: 'all' },
};

// ========== Sections ==========

export const Columns: Story = {
  args: { section: 'columns' },
};

export const Rows: Story = {
  args: { section: 'rows' },
};

export const Containers: Story = {
  args: { section: 'containers' },
};

// ========== Individual column grids ==========

export const ColumnGrid12: Story = {
  args: { columns: 12 },
};

export const ColumnGrid6: Story = {
  args: { columns: 6 },
};

// ========== Individual row grids ==========

export const RowGrid4: Story = {
  args: { rows: 4 },
};
