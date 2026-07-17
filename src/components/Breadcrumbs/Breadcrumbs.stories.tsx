import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs';

const meta = {
  title: 'Style Guide/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['types', 'states', 'all'],
      description: 'Showcase section to render (ignored when `items` is provided)',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'dropdown',
        'badge',
        'group-buttons',
        'only-buttons',
        'background',
      ],
      description: 'Breadcrumb variant (used for single-trail rendering)',
    },
  },
  args: {
    section: 'all',
    variant: 'default',
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ---------- Sample trail ---------- */

const defaultTrail: BreadcrumbItem[] = [
  { icon: 'home', text: 'Home' },
  { text: 'E-commerce' },
  { text: 'Users' },
  { text: 'All users', active: true },
];

/* ========== Single-trail variants ========== */

export const Default: Story = {
  args: { variant: 'default', items: defaultTrail },
};

export const WithDropdown: Story = {
  args: { variant: 'dropdown', items: defaultTrail },
};

export const WithBadge: Story = {
  args: { variant: 'badge', items: defaultTrail },
};

export const WithGroupButtons: Story = {
  args: { variant: 'group-buttons', items: defaultTrail },
};

export const OnlyButtons: Story = {
  args: { variant: 'only-buttons', items: defaultTrail },
};

export const Background: Story = {
  args: { variant: 'background', items: defaultTrail },
};

/* ========== Sections ========== */

export const ItemStates: Story = {
  args: { section: 'states' },
};

/* ========== Kitchen sink ========== */

export const All: Story = {
  args: { section: 'all' },
};
