import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavTabs } from './NavTabs';

const meta = {
  title: 'Flowbite/NavTabs',
  component: NavTabs,
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
    docs: {
      description: {
        component: 'Navigation tab variants transcribed from the Flowbite Design System Figma ("---- Nav Tabs" canvas, node 3283-24214). Shows Default, Pills, Border bottom, Vertical pills, and Button tab types with Initial and Active states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    section: {
      control: 'select',
      options: ['default', 'pills', 'border-bottom', 'vertical-pills', 'button', 'all'],
      description: 'Which tab variant to render',
    },
  },
  args: {
    section: 'all',
  },
} satisfies Meta<typeof NavTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = { args: { section: 'all' } };
export const Default: Story = { args: { section: 'default' } };
export const Pills: Story = { args: { section: 'pills' } };
export const BorderBottom: Story = { args: { section: 'border-bottom' } };
export const VerticalPills: Story = { args: { section: 'vertical-pills' } };
export const Button: Story = { args: { section: 'button' } };