import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover } from './Popover';

const meta = {
  title: 'Flowbite/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Arrow position relative to the popover',
    },
    type: {
      control: 'select',
      options: ['text', 'user-profile', 'paragraphs', 'password-checklist', 'notifications', 'share'],
      description: 'Content type preset',
    },
    title: { control: 'text' },
  },
  args: {
    position: 'bottom',
    type: 'text',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Positions ==========

export const PositionTop: Story = {
  args: { position: 'top', title: 'Popover title' },
};

export const PositionBottom: Story = {
  args: { position: 'bottom', title: 'Popover title' },
};

export const PositionLeft: Story = {
  args: { position: 'left', title: 'Popover title' },
};

export const PositionRight: Story = {
  args: { position: 'right', title: 'Popover title' },
};

// ========== Content Types ==========

export const TextOnly: Story = {
  args: { type: 'text', title: 'Popover title' },
};

export const UserProfile: Story = {
  args: { type: 'user-profile', title: 'User details', width: 280 },
};

export const Paragraphs: Story = {
  args: { type: 'paragraphs', width: 350 },
};

export const PasswordChecklist: Story = {
  args: { type: 'password-checklist', title: 'Password requirements' },
};

export const Notifications: Story = {
  args: { type: 'notifications', title: 'Notifications' },
};

export const Share: Story = {
  args: { type: 'share' as const, width: 140 },
};

// ========== Without Header ==========

export const NoHeader: Story = {
  args: { type: 'text' },
};

// ========== All Positions ==========

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap', padding: 40 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#6A7282' }}>Top</span>
        <Popover position="top" title="Popover title" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#6A7282' }}>Bottom</span>
        <Popover position="bottom" title="Popover title" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#6A7282' }}>Left</span>
        <Popover position="left" title="Popover title" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#6A7282' }}>Right</span>
        <Popover position="right" title="Popover title" />
      </div>
    </div>
  ),
};

// ========== Content Type Gallery ==========

export const AllContentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap', padding: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#6A7282' }}>Text</span>
        <Popover type="text" title="Popover title" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#6A7282' }}>User Profile</span>
        <Popover type="user-profile" title="User details" width={280} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#6A7282' }}>Password Checklist</span>
        <Popover type="password-checklist" title="Password requirements" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#6A7282' }}>Paragraphs</span>
        <Popover type="paragraphs" width={350} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#6A7282' }}>Notifications</span>
        <Popover type="notifications" title="Notifications" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#6A7282' }}>Share</span>
        <Popover type="share" width={140} />
      </div>
    </div>
  ),
};

// ========== Kitchen Sink ==========

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap', padding: 40 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#101828' }}>Positions</div>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <Popover position="top" title="Top" />
          <Popover position="bottom" title="Bottom" />
          <Popover position="left" title="Left" />
          <Popover position="right" title="Right" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#101828' }}>Content Types</div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Popover type="text" title="Text" />
          <Popover type="user-profile" title="User details" width={280} />
          <Popover type="password-checklist" title="Password" />
          <Popover type="notifications" title="Notifications" />
          <Popover type="share" width={140} />
        </div>
      </div>
    </div>
  ),
};
