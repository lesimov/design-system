import type { Meta, StoryObj } from '@storybook/react';
import { SpeedDial } from './SpeedDial';

const meta: Meta<typeof SpeedDial> = {
  title: 'Flowbite/SpeedDial',
  component: SpeedDial,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SpeedDial>;

const defaultItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7.5 15C8.88071 15 10 13.8807 10 12.5C10 11.1193 8.88071 10 7.5 10C6.11929 10 5 11.1193 5 12.5C5 13.8807 6.11929 15 7.5 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 9C17.8807 9 19 7.88071 19 6.5C19 5.11929 17.8807 4 16.5 4C15.1193 4 14 5.11929 14 6.5C14 7.88071 15.1193 9 16.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 20C17.8807 20 19 18.8807 19 17.5C19 16.1193 17.8807 15 16.5 15C15.1193 15 14 16.1193 14 17.5C14 18.8807 15.1193 20 16.5 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 7L10 10M10 14L14.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Share',
    onClick: () => console.log('Share clicked'),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 9V4H18V9M6 18H4C3.44772 18 3 17.5523 3 17V11C3 10.4477 3.44772 10 4 10H20C20.5523 10 21 10.4477 21 11V17C21 17.5523 20.5523 18 20 18H18M6 14H18V21H6V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Print',
    onClick: () => console.log('Print clicked'),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 16C8 14.8954 8.89543 14 10 14H18C19.1046 14 20 14.8954 20 16V20C20 21.1046 19.1046 22 18 22H10C8.89543 22 8 21.1046 8 20V16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 18H6C4.89543 18 4 17.1046 4 16V12C4 10.8954 4.89543 10 6 10H14C15.1046 10 16 10.8954 16 12V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 6V4C16 2.89543 15.1046 2 14 2H6C4.89543 2 4 2.89543 4 4V8C4 9.10457 4.89543 10 6 10H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Copy',
    onClick: () => console.log('Copy clicked'),
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    position: 'top',
  },
};

export const PositionBottom: Story = {
  args: {
    items: defaultItems,
    position: 'bottom',
  },
};

export const PositionLeft: Story = {
  args: {
    items: defaultItems,
    position: 'left',
  },
};

export const PositionRight: Story = {
  args: {
    items: defaultItems,
    position: 'right',
  },
};