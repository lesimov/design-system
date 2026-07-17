import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Toasts } from './Toasts';
import { toast } from './toast';
import { ToastContainer } from './ToastContainer';

const meta = {
  title: 'Flowbite/Toasts',
  component: Toasts,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'warning', 'error'],
    },
    closable: { control: 'boolean' },
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Toasts>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Type variants ==========

export const Default: Story = {
  args: {
    title: 'Bonnie Green',
    children: '"Hi Bonnie, I appreciate you sharing your insights on Flowbite."',
    action: <button style={{ padding: '6px 12px', fontSize: 14, background: '#1447E6', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Reply</button>,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    children: 'Your subscription is about to expire. Renew now to avoid service interruption.',
    action: <button style={{ padding: '6px 12px', fontSize: 14, background: '#1447E6', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Renew</button>,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again later.',
    action: <button style={{ padding: '6px 12px', fontSize: 14, background: '#1447E6', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Retry</button>,
  },
};

// ========== Content variants ==========

export const IconAndText: Story = {
  args: {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="9" stroke="#1447E6" strokeWidth="1.5" />
        <path d="M14 8l-4 4-4-4" stroke="#1447E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    children: 'Changes saved successfully.',
  },
};

export const WithAvatar: Story = {
  args: {
    avatar: (
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1447E6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600 }}>BG</div>
    ),
    title: 'Bonnie Green',
    children: '"Hi Bonnie, I appreciate you sharing your insights on Flowbite."',
    action: <button style={{ padding: '6px 12px', fontSize: 14, background: '#1447E6', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Reply</button>,
  },
};

export const WithProgressBar: Story = {
  args: {
    title: 'Uploading...',
    children: 'Your file is being uploaded to the server.',
    progress: 65,
  },
};

export const WithHeader: Story = {
  args: {
    title: 'New message',
    children: 'You have received a new message from your team.',
    closable: true,
  },
};

// ========== Closable ==========

export const Closable: Story = {
  args: {
    children: 'This toast can be dismissed.',
    closable: true,
  },
};

// ========== All types ==========

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 400 }}>
      <Toasts title="Default" children="This is a default toast notification." />
      <Toasts type="warning" title="Warning" children="This is a warning toast notification." />
      <Toasts type="error" title="Error" children="This is an error toast notification." />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 400 }}>
      <Toasts
        avatar={
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1447E6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600 }}>BG</div>
        }
        title="Bonnie Green"
        children='"Hi Bonnie, I appreciate you sharing your insights on Flowbite."'
        action={<button style={{ padding: '6px 12px', fontSize: 14, background: '#1447E6', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Reply</button>}
      />
      <Toasts
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="#1447E6" strokeWidth="1.5" />
            <path d="M10 6v4M10 13v1" stroke="#1447E6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        }
        children="Changes saved successfully."
      />
      <Toasts
        title="Uploading..."
        children="Your file is being uploaded to the server."
        progress={42}
      />
      <Toasts
        title="New message"
        children="You have received a new message from your team."
        closable={true}
      />
    </div>
  ),
};

// ========== Toast notification system ==========

export const NotificationSystem: Story = {
  name: 'Toast Notification System',
  parameters: { layout: 'padded' },
  render: () => {
    const undoBtn = <button style={{ padding: '4px 10px', fontSize: 12, background: '#1447E6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Undo</button>;
    return (
      <div>
        <ToastContainer />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 300 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              style={{ flex: 1, padding: '8px 16px', background: '#1447E6', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}
              onClick={() => toast.show('Changes saved successfully.')}
            >
              Show
            </button>
            <button
              style={{ flex: 1, padding: '8px 16px', background: '#FFF8F1', color: '#A65F00', border: '1px solid #FCD9BD', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}
              onClick={() => toast.warning('Your session will expire in 5 minutes.')}
            >
              Warning
            </button>
            <button
              style={{ flex: 1, padding: '8px 16px', background: '#FEF0F2', color: '#C10007', border: '1px solid #FFCCD3', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}
              onClick={() => toast.error('Something went wrong. Please try again.')}
            >
              Error
            </button>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              style={{ flex: 1, padding: '8px 16px', background: '#F3F4F6', color: '#4A5565', border: '1px solid #E5E7EB', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}
              onClick={() => toast.show('This toast has a title.', { title: 'Notification' })}
            >
              With Title
            </button>
            <button
              style={{ flex: 1, padding: '8px 16px', background: '#F3F4F6', color: '#4A5565', border: '1px solid #E5E7EB', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}
              onClick={() => toast.show('This toast has an action button.', { action: undoBtn })}
            >
              With Action
            </button>
            <button
              style={{ flex: 1, padding: '8px 16px', background: '#F3F4F6', color: '#4A5565', border: '1px solid #E5E7EB', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}
              onClick={() => toast.clear()}
            >
              Clear All
            </button>
          </div>
          <p style={{ margin: 0, fontSize: 12, color: '#99A1AF' }}>
            Toasts auto-dismiss after 4 seconds with slide animation.
          </p>
        </div>
      </div>
    );
  },
};