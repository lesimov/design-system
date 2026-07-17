import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BottomNavigation } from './BottomNavigation';

const meta = {
  title: 'Flowbite/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: 'select',
      options: ['call', 'media-player'],
      description: 'Visual style variant',
    },
    mobile: {
      control: 'boolean',
      description: 'Mobile layout mode',
    },
    callDuration: {
      control: 'text',
      description: 'Call duration display (call style)',
    },
    songTitle: {
      control: 'text',
      description: 'Song title (media-player style)',
    },
    artist: {
      control: 'text',
      description: 'Artist name (media-player style)',
    },
    currentTime: {
      control: 'text',
      description: 'Current playback time (media-player style)',
    },
    totalDuration: {
      control: 'text',
      description: 'Total duration (media-player style)',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Progress percentage (media-player style, 0-100)',
    },
    playing: {
      control: 'boolean',
      description: 'Playing state (media-player style)',
    },
  },
  args: {
    onEndCall: fn(),
    onPlayPause: fn(),
    onPrevious: fn(),
    onNext: fn(),
  },
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Call Style ==========

export const CallDesktop: Story = {
  args: {
    style: 'call',
    mobile: false,
    callDuration: '12:43 AM',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const CallMobile: Story = {
  args: {
    style: 'call',
    mobile: true,
    callDuration: '12:43 AM',
  },
  parameters: {
    layout: 'padded',
  },
};

// ========== Media Player Style ==========

export const MediaPlayerDesktop: Story = {
  args: {
    style: 'media-player',
    mobile: false,
    songTitle: 'Song Title',
    artist: 'Artist Name',
    currentTime: '3:45',
    totalDuration: '5:00',
    progress: 68,
    playing: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const MediaPlayerPaused: Story = {
  args: {
    style: 'media-player',
    mobile: false,
    songTitle: 'Song Title',
    artist: 'Artist Name',
    currentTime: '1:23',
    totalDuration: '5:00',
    progress: 28,
    playing: false,
  },
};

export const MediaPlayerMobile: Story = {
  args: {
    style: 'media-player',
    mobile: true,
    songTitle: 'Song Title',
    artist: 'Artist Name',
    currentTime: '3:45',
    totalDuration: '5:00',
    progress: 68,
    playing: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const MediaPlayerMobilePaused: Story = {
  args: {
    style: 'media-player',
    mobile: true,
    songTitle: 'Song Title',
    artist: 'Artist Name',
    currentTime: '1:23',
    totalDuration: '5:00',
    progress: 28,
    playing: false,
  },
  parameters: {
    layout: 'padded',
  },
};

// ========== Kitchen sink ==========

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, width: '100%' }}>
      <div style={{ borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ padding: '4px 16px', fontSize: 12, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: 1, backgroundColor: '#F9FAFB' }}>
          Call — Desktop
        </div>
        <BottomNavigation style="call" callDuration="12:43 AM" />
      </div>

      <div style={{ borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ padding: '4px 16px', fontSize: 12, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: 1, backgroundColor: '#F9FAFB' }}>
          Call — Mobile
        </div>
        <BottomNavigation style="call" mobile callDuration="12:43 AM" />
      </div>

      <div style={{ borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ padding: '4px 16px', fontSize: 12, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: 1, backgroundColor: '#F9FAFB' }}>
          Media Player — Desktop
        </div>
        <BottomNavigation
          style="media-player"
          songTitle="Song Title"
          artist="Artist Name"
          currentTime="3:45"
          totalDuration="5:00"
          progress={68}
          playing
        />
      </div>

      <div>
        <div style={{ padding: '4px 16px', fontSize: 12, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: 1, backgroundColor: '#F9FAFB' }}>
          Media Player — Mobile
        </div>
        <BottomNavigation
          style="media-player"
          mobile
          songTitle="Song Title"
          artist="Artist Name"
          currentTime="3:45"
          totalDuration="5:00"
          progress={68}
          playing
        />
      </div>
    </div>
  ),
};