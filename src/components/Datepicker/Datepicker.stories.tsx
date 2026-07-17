import type { Meta, StoryObj } from '@storybook/react-vite';
import { Datepicker, DatepickerShowcase } from './Datepicker';

const meta = {
  title: 'Flowbite/Datepicker',
  component: Datepicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showFooter: { control: 'boolean', description: 'Show Clear / Today buttons' },
    selectedDate: { control: 'date', description: 'Selected date' },
    minDate: { control: 'date', description: 'Minimum selectable date' },
    maxDate: { control: 'date', description: 'Maximum selectable date' },
  },
  args: {},
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Default ==========

export const Default: Story = {
  args: {
    selectedDate: new Date(2025, 5, 15),
    displayMonth: 5,
    displayYear: 2025,
  },
};

// ========== With Range Highlight ==========

export const WithRangeHighlight: Story = {
  args: {
    selectedDate: new Date(2025, 5, 15),
    rangeStart: new Date(2025, 5, 10),
    rangeEnd: new Date(2025, 5, 20),
    displayMonth: 5,
    displayYear: 2025,
  },
};

// ========== No Footer ==========

export const NoFooter: Story = {
  args: {
    selectedDate: new Date(2025, 5, 15),
    displayMonth: 5,
    displayYear: 2025,
    showFooter: false,
  },
};

// ========== With Min / Max Date ==========

export const WithMinMaxDate: Story = {
  args: {
    selectedDate: new Date(2025, 5, 15),
    minDate: new Date(2025, 5, 5),
    maxDate: new Date(2025, 5, 25),
    displayMonth: 5,
    displayYear: 2025,
  },
};

// ========== Different Month ==========

export const DifferentMonth: Story = {
  args: {
    selectedDate: new Date(2026, 0, 10),
    displayMonth: 0,
    displayYear: 2026,
  },
};

// ========== All Cell Types (Showcase) ==========

export const AllCellTypes: Story = {
  name: 'All Cell Types',
  render: () => <DatepickerShowcase />,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: `
<DatepickerShowcase />
        `,
      },
    },
  },
};

// ========== Full Calendar Example ==========

export const FullCalendar: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Datepicker
        selectedDate={new Date(2025, 5, 15)}
        rangeStart={new Date(2025, 5, 10)}
        rangeEnd={new Date(2025, 5, 20)}
        displayMonth={5}
        displayYear={2025}
      />
      <Datepicker
        selectedDate={new Date(2026, 0, 10)}
        displayMonth={0}
        displayYear={2026}
      />
      <Datepicker
        selectedDate={new Date(2025, 11, 25)}
        displayMonth={11}
        displayYear={2025}
      />
    </div>
  ),
};