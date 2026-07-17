import type { Meta, StoryObj } from '@storybook/react-vite';
import { FloatingLabel } from './FloatingLabel';

const meta = {
  title: 'Flowbite/FloatingLabel',
  component: FloatingLabel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
    },
    state: {
      control: 'select',
      options: ['initial', 'focus', 'filled', 'success', 'error', 'disabled'],
    },
    clearable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FloatingLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Sizes ==========

export const Small: Story = {
  args: {
    label: 'Username',
    size: 'sm',
    defaultValue: 'johndoe',
  },
};

export const Base: Story = {
  args: {
    label: 'Username',
    size: 'base',
    defaultValue: 'johndoe',
  },
};

export const Large: Story = {
  args: {
    label: 'Username',
    size: 'lg',
    defaultValue: 'johndoe',
  },
};

// ========== States ==========

export const Initial: Story = {
  args: {
    label: 'Email address',
    placeholder: 'email@example.com',
    state: 'initial',
  },
};

export const Focus: Story = {
  args: {
    label: 'Email address',
    placeholder: 'email@example.com',
    state: 'focus',
    defaultValue: '',
    onChange: () => {},
    onFocus: () => {},
  },
};

export const Filled: Story = {
  args: {
    label: 'Email address',
    defaultValue: 'user@example.com',
    state: 'filled',
  },
};

export const Success: Story = {
  args: {
    label: 'Email address',
    defaultValue: 'user@example.com',
    state: 'success',
    successMessage: 'Looks good!',
  },
};

export const Error: Story = {
  args: {
    label: 'Email address',
    defaultValue: 'invalid-email',
    state: 'error',
    error: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    defaultValue: 'Cannot edit',
    state: 'disabled',
  },
};

// ========== With Icon ==========

export const WithIcon: Story = {
  args: {
    label: 'Username',
    defaultValue: 'johndoe',
    icon: null,
  },
  render: (args) => {
    const UserSvg = () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 10c2.21 0 4 1.79 4 4v1H2v-1c0-2.21 1.79-4 4-4h4ZM8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
    return <FloatingLabel {...args} icon={<UserSvg />} />;
  },
};

export const WithIconSuccess: Story = {
  args: {
    label: 'Email',
    defaultValue: 'user@example.com',
    state: 'success',
    successMessage: 'Verified email',
  },
  render: (args) => {
    const MailSvg = () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 4l7 4.5L15 4M2 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
    return <FloatingLabel {...args} icon={<MailSvg />} />;
  },
};

export const WithIconError: Story = {
  args: {
    label: 'Email',
    defaultValue: 'bad',
    state: 'error',
    error: 'Invalid email address.',
  },
  render: (args) => {
    const MailSvg = () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 4l7 4.5L15 4M2 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
    return <FloatingLabel {...args} icon={<MailSvg />} />;
  },
};

// ========== Clearable ==========

export const Clearable: Story = {
  args: {
    label: 'Search',
    defaultValue: 'query text',
    clearable: true,
  },
};

export const ClearableWithIcon: Story = {
  args: {
    label: 'Search',
    defaultValue: 'search term',
    clearable: true,
  },
  render: (args) => {
    const SearchSvg = () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM14 14l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
    return <FloatingLabel {...args} icon={<SearchSvg />} />;
  },
};

// ========== Required ==========

export const Required: Story = {
  args: {
    label: 'Full name',
    required: true,
    defaultValue: 'John Doe',
  },
};

// ========== Helper Text ==========

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    helperText: 'Must be at least 8 characters.',
    defaultValue: '',
  },
};

export const EmptyState: Story = {
  args: {
    label: 'Your name',
    placeholder: 'Enter your name',
  },
};

// ========== Kitchen Sink ==========

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flowbite-floating-label-showcase">
      <div className="flowbite-floating-label-showcase__group">
        <h3 className="flowbite-floating-label-showcase__title">Small (sm)</h3>
        <FloatingLabel label="Username" size="sm" defaultValue="johndoe" />
        <FloatingLabel label="Success" size="sm" state="success" defaultValue="good" successMessage="OK" />
        <FloatingLabel label="Error" size="sm" state="error" defaultValue="bad" error="Wrong" />
      </div>
      <div className="flowbite-floating-label-showcase__group">
        <h3 className="flowbite-floating-label-showcase__title">Base</h3>
        <FloatingLabel label="Username" size="base" defaultValue="johndoe" />
        <FloatingLabel label="Success" size="base" state="success" defaultValue="good" successMessage="OK" />
        <FloatingLabel label="Error" size="base" state="error" defaultValue="bad" error="Wrong" />
      </div>
      <div className="flowbite-floating-label-showcase__group">
        <h3 className="flowbite-floating-label-showcase__title">Large (lg)</h3>
        <FloatingLabel label="Username" size="lg" defaultValue="johndoe" />
        <FloatingLabel label="Success" size="lg" state="success" defaultValue="good" successMessage="OK" />
        <FloatingLabel label="Error" size="lg" state="error" defaultValue="bad" error="Wrong" />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="flowbite-floating-label-showcase">
      <div className="flowbite-floating-label-showcase__group">
        <h3 className="flowbite-floating-label-showcase__title">States</h3>
        <FloatingLabel label="Initial" placeholder="Type something" />
        <FloatingLabel label="Filled" defaultValue="Filled value" />
        <FloatingLabel label="Focus" state="focus" defaultValue="Focus value" />
        <FloatingLabel label="Success" state="success" defaultValue="Valid" successMessage="All good" />
        <FloatingLabel label="Error" state="error" defaultValue="Invalid" error="Something wrong" />
        <FloatingLabel label="Disabled" state="disabled" defaultValue="Disabled" />
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => {
    const UserSvg = () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 10c2.21 0 4 1.79 4 4v1H2v-1c0-2.21 1.79-4 4-4h4ZM8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
    const MailSvg = () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 4l7 4.5L15 4M2 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
    const LockSvg = () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 7V5a4 4 0 1 1 8 0v2M2 7h12v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
    return (
      <div className="flowbite-floating-label-showcase">
        <div className="flowbite-floating-label-showcase__group">
          <h3 className="flowbite-floating-label-showcase__title">With Icons</h3>
          <FloatingLabel label="Username" defaultValue="johndoe" icon={<UserSvg />} />
          <FloatingLabel label="Email" defaultValue="user@example.com" state="success" icon={<MailSvg />} successMessage="Verified" />
          <FloatingLabel label="Password" defaultValue="secret" state="error" icon={<LockSvg />} error="Too short" />
          <FloatingLabel label="Search" defaultValue="query" clearable icon={<UserSvg />} />
        </div>
      </div>
    );
  },
};

export const KitchenSink: Story = {
  name: 'All',
  render: () => {
    const UserSvg = () => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 10c2.21 0 4 1.79 4 4v1H2v-1c0-2.21 1.79-4 4-4h4ZM8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
    return (
      <div className="flowbite-floating-label-showcase">
        {/* Sizes */}
        <div className="flowbite-floating-label-showcase__group">
          <h3 className="flowbite-floating-label-showcase__title">Sizes</h3>
          <FloatingLabel label="Small" size="sm" defaultValue="sm value" />
          <FloatingLabel label="Base" size="base" defaultValue="base value" />
          <FloatingLabel label="Large" size="lg" defaultValue="lg value" />
        </div>

        {/* States */}
        <div className="flowbite-floating-label-showcase__group">
          <h3 className="flowbite-floating-label-showcase__title">States</h3>
          <FloatingLabel label="Initial" placeholder="Type..." />
          <FloatingLabel label="Focus" state="focus" defaultValue="Focus" />
          <FloatingLabel label="Filled" defaultValue="Filled in" />
          <FloatingLabel label="Success" state="success" defaultValue="Valid" successMessage="OK" />
          <FloatingLabel label="Error" state="error" defaultValue="Bad" error="Fix this" />
          <FloatingLabel label="Disabled" state="disabled" defaultValue="Disabled" />
        </div>

        {/* With Icons */}
        <div className="flowbite-floating-label-showcase__group">
          <h3 className="flowbite-floating-label-showcase__title">With Icons</h3>
          <FloatingLabel label="Username" defaultValue="johndoe" icon={<UserSvg />} />
          <FloatingLabel label="Success" state="success" defaultValue="good" icon={<UserSvg />} successMessage="Verified" />
          <FloatingLabel label="Error" state="error" defaultValue="bad" icon={<UserSvg />} error="Invalid" />
          <FloatingLabel label="Disabled" state="disabled" defaultValue="no" icon={<UserSvg />} />
        </div>

        {/* Clearable */}
        <div className="flowbite-floating-label-showcase__group">
          <h3 className="flowbite-floating-label-showcase__title">Clearable</h3>
          <FloatingLabel label="Search" defaultValue="term" clearable />
          <FloatingLabel label="With icon" defaultValue="query" clearable icon={<UserSvg />} />
          <FloatingLabel label="Required" defaultValue="required" required />
          <FloatingLabel label="Helper" defaultValue="" helperText="Some helper text" />
        </div>

        {/* Empty */}
        <div className="flowbite-floating-label-showcase__group">
          <h3 className="flowbite-floating-label-showcase__title">Empty / Placeholder</h3>
          <FloatingLabel label="Your name" placeholder="Enter your name" />
          <FloatingLabel label="With icon" placeholder="Search..." icon={<UserSvg />} />
        </div>
      </div>
    );
  },
};