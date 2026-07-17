import type { Meta, StoryObj } from '@storybook/react';
import { Table, StatusBadge, MoreHorizontalIcon } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Flowbite/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

interface Transaction {
  transaction: string;
  amount: string;
  status: string;
  date: string;
}

const columns = [
  { key: 'transaction', header: 'Transaction', width: 320, minWidth: 200 },
  { key: 'amount', header: 'Amount', width: 226, align: 'right' as const },
  { key: 'status', header: 'Status', width: 226 },
  { key: 'date', header: 'Date', width: 226 },
  { key: 'action', header: 'Action', width: 90, align: 'center' as const, render: () => <MoreHorizontalIcon /> },
];

const data: Transaction[] = [
  { transaction: 'Payment from Bonnie Green', amount: '$230,000', status: 'Completed', date: 'Apr 23, 2024' },
  { transaction: 'Payment from Jese Leos', amount: '$45,000', status: 'Processing', date: 'Apr 22, 2024' },
  { transaction: 'Payment from Lana Byrd', amount: '$120,000', status: 'Pending', date: 'Apr 21, 2024' },
  { transaction: 'Payment from Owen Christ', amount: '$98,000', status: 'Cancelled', date: 'Apr 20, 2024' },
  { transaction: 'Payment from Thomas Long', amount: '$15,000', status: 'Completed', date: 'Apr 19, 2024' },
  { transaction: 'Payment from Sara Wilson', amount: '$67,000', status: 'Completed', date: 'Apr 18, 2024' },
  { transaction: 'Payment from Michael Gough', amount: '$230,000', status: 'Processing', date: 'Apr 17, 2024' },
  { transaction: 'Payment from Robert Brown', amount: '$78,000', status: 'Shipped', date: 'Apr 16, 2024' },
];

const statusCell = (value: unknown) => <StatusBadge status={value as string} />;

export const Default: Story = {
  args: {
    columns: columns.map((c) => c.key === 'status' ? { ...c, render: statusCell } : c),
    data,
    searchable: true,
    searchPlaceholder: 'Search for transaction',
    totalItems: 1000,
    onPageChange: (page) => console.log('Page:', page),
  },
};

export const StripedColumns: Story = {
  args: {
    ...Default.args,
    variant: 'striped-columns',
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
    totalItems: 0,
    variant: 'striped-columns',
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    totalItems: 0,
    searchable: true,
  },
};