import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'Flowbite/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'with-alert', 'contracted', 'double'],
    },
    headerType: {
      control: 'select',
      options: ['logo', 'user'],
    },
    logoText: { control: 'text' },
    showAlert: { control: 'boolean' },
    alertTitle: { control: 'text' },
    alertBody: { control: 'text' },
    alertLinkText: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', minHeight: '600px' }}>
        <Story />
        <div style={{ flex: 1, padding: 24, background: '#F9FAFB' }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#101828', fontFamily: 'Inter, system-ui, sans-serif' }}>Main Content</h2>
          <p style={{ fontSize: 16, color: '#4A5565', marginTop: 8, fontFamily: 'Inter, system-ui, sans-serif' }}>
            Sidebar content area with main application content.
          </p>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerType: 'logo',
    logoText: 'Flowbite',
  },
};

export const WithTreeExpanded: Story = {
  name: 'Tree Expanded',
  args: {
    headerType: 'logo',
    logoText: 'Flowbite',
    navItems: [
      {
        id: 'overview',
        label: 'Overview',
        icon: 'chart-pie',
        active: true,
        defaultExpanded: true,
        children: [
          { id: 'overview-main', label: 'Main dashboard', icon: 'layout' },
          { id: 'overview-analytics', label: 'Analytics', icon: 'chart-pie', badge: 'New' },
        ],
      },
      {
        id: 'products',
        label: 'Products',
        icon: 'products',
        defaultExpanded: true,
        children: [
          { id: 'products-all', label: 'All products', icon: 'products' },
          { id: 'products-add', label: 'Add product', icon: 'file' },
        ],
      },
      { id: 'users', label: 'Users', icon: 'users-group' },
      { id: 'support', label: 'Support', icon: 'user-headset', disabled: true },
    ],
  },
};

export const WithUser: Story = {
  args: {
    headerType: 'user',
    user: {
      name: 'Jese Leos',
      email: 'name@flowbite.com',
    },
  },
};

export const WithAlert: Story = {
  name: 'With Alert',
  args: {
    variant: 'with-alert',
    showAlert: true,
    headerType: 'user',
    user: {
      name: 'Jese Leos',
      email: 'name@flowbite.com',
    },
    alertTitle: 'New dashboard!',
    alertBody: 'Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.',
    alertLinkText: 'Preview',
  },
};

export const Contracted: Story = {
  args: {
    variant: 'contracted',
    headerType: 'logo',
  },
};

export const ContractedWithUser: Story = {
  name: 'Contracted With User',
  args: {
    variant: 'contracted',
    headerType: 'user',
    user: {
      name: 'Jese Leos',
      email: 'name@flowbite.com',
    },
  },
};

export const WithActiveItem: Story = {
  name: 'Active Item & Badge',
  args: {
    headerType: 'logo',
    logoText: 'Flowbite',
    navItems: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'layout',
        active: true,
        defaultExpanded: true,
        children: [
          { id: 'dashboard-main', label: 'Main', icon: 'chart-pie' },
          { id: 'dashboard-analytics', label: 'Analytics', icon: 'chart-pie', badge: 'New' },
        ],
      },
      {
        id: 'inbox',
        label: 'Inbox',
        icon: 'inbox',
        badge: 12,
        children: [
          { id: 'inbox-all', label: 'All messages', icon: 'mailbox' },
          { id: 'inbox-flagged', label: 'Flagged', icon: 'file', badge: 3 },
        ],
      },
      {
        id: 'calendar',
        label: 'Calendar',
        icon: 'calendar',
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: 'settings',
        disabled: true,
      },
    ],
  },
};