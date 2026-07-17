import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatBubble } from './ChatBubble';

const AVATAR_A =
  'https://images.unsplash.com/photo-1633335756164-47c4e1c0b1c1?w=64&h=64&fit=crop&crop=face';
const AVATAR_B =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face';
const PHOTO =
  'https://images.unsplash.com/photo-1506744038136-46273834b3c3?w=512&h=320&fit=crop';
const LINK_IMG =
  'https://images.unsplash.com/photo-1551434677-e4d2f9f7c7ee?w=512&h=320&fit=crop';

const meta = {
  title: 'Flowbite/Chat Bubble',
  component: ChatBubble,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Bubble direction',
    },
    type: {
      control: 'select',
      options: ['text', 'file', 'image', 'link', 'audio'],
      description: 'Content type',
    },
    senderName: { control: 'text' },
    time: { control: 'text' },
    status: { control: 'text' },
    message: { control: 'text' },
  },
  args: {
    direction: 'left',
    senderName: 'Bonnie Green',
    time: '11:46',
  },
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

const wrapper: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: 24,
  width: 520,
  background: '#FFFFFF',
  borderRadius: 12,
};

/* ========== Text ========== */

export const TextLeft: Story = {
  args: {
    direction: 'left',
    type: 'text',
    senderName: 'Bonnie Green',
    time: '11:46',
    message: 'Hey, what do you think about the new design system?',
    avatarSrc: AVATAR_A,
    avatarAlt: 'Bonnie Green',
  },
};

export const TextRight: Story = {
  args: {
    direction: 'right',
    type: 'text',
    senderName: 'You',
    time: '11:47',
    message: 'It looks great! The components are really polished.',
    status: 'Delivered',
    avatarSrc: AVATAR_B,
    avatarAlt: 'You',
  },
};

/* ========== File ========== */

export const FileLeft: Story = {
  args: {
    direction: 'left',
    type: 'file',
    senderName: 'Bonnie Green',
    time: '11:46',
    fileName: 'Project_overview.pdf',
    filePages: '12 Pages',
    fileSize: '18 MB',
    fileFormat: 'PDF',
    avatarSrc: AVATAR_A,
    avatarAlt: 'Bonnie Green',
  },
};

export const FileRight: Story = {
  args: {
    direction: 'right',
    type: 'file',
    senderName: 'You',
    time: '11:47',
    fileName: 'quarterly_report.xlsx',
    filePages: '4 Sheets',
    fileSize: '6 MB',
    fileFormat: 'XLSX',
    status: 'Delivered',
    avatarSrc: AVATAR_B,
    avatarAlt: 'You',
  },
};

/* ========== Image ========== */

export const ImageLeft: Story = {
  args: {
    direction: 'left',
    type: 'image',
    senderName: 'Bonnie Green',
    time: '11:46',
    imageSrc: PHOTO,
    imageAlt: 'Mountain landscape',
    caption: 'Mountain landscape photo',
    imageDomain: 'unsplash.com',
    avatarSrc: AVATAR_A,
    avatarAlt: 'Bonnie Green',
  },
};

export const ImageRight: Story = {
  args: {
    direction: 'right',
    type: 'image',
    senderName: 'You',
    time: '11:47',
    imageSrc: PHOTO,
    imageAlt: 'Mountain landscape',
    caption: 'Shared from my trip',
    imageDomain: 'unsplash.com',
    status: 'Delivered',
    avatarSrc: AVATAR_B,
    avatarAlt: 'You',
  },
};

/* ========== Link ========== */

export const LinkLeft: Story = {
  args: {
    direction: 'left',
    type: 'link',
    senderName: 'Bonnie Green',
    time: '11:46',
    linkIntro: 'Check out this open-source UI component library based on:',
    linkUrl: 'https://flowbite.com',
    linkTitle: 'Flowbite — UI Component Library',
    linkDomain: 'flowbite.com',
    imageSrc: LINK_IMG,
    imageAlt: 'Flowbite preview',
    avatarSrc: AVATAR_A,
    avatarAlt: 'Bonnie Green',
  },
};

export const LinkRight: Story = {
  args: {
    direction: 'right',
    type: 'link',
    senderName: 'You',
    time: '11:47',
    linkIntro: 'Have a look at the docs here:',
    linkUrl: 'https://flowbite.com/docs',
    linkTitle: 'Flowbite Documentation',
    linkDomain: 'flowbite.com',
    imageSrc: LINK_IMG,
    imageAlt: 'Flowbite docs preview',
    status: 'Delivered',
    avatarSrc: AVATAR_B,
    avatarAlt: 'You',
  },
};

/* ========== Audio ========== */

export const AudioLeft: Story = {
  args: {
    direction: 'left',
    type: 'audio',
    senderName: 'Bonnie Green',
    time: '11:46',
    audioDuration: '0:34',
    avatarSrc: AVATAR_A,
    avatarAlt: 'Bonnie Green',
  },
};

export const AudioRight: Story = {
  args: {
    direction: 'right',
    type: 'audio',
    senderName: 'You',
    time: '11:47',
    audioDuration: '1:02',
    status: 'Delivered',
    avatarSrc: AVATAR_B,
    avatarAlt: 'You',
  },
};

/* ========== Conversation ========== */

export const Conversation: Story = {
  render: () => (
    <div style={wrapper}>
      <ChatBubble
        direction="left"
        senderName="Bonnie Green"
        time="11:46"
        avatarSrc={AVATAR_A}
        avatarAlt="Bonnie Green"
        message="Hey, what do you think about the new design system?"
      />
      <ChatBubble
        direction="right"
        senderName="You"
        time="11:47"
        avatarSrc={AVATAR_B}
        avatarAlt="You"
        message="It looks great! The components are really polished."
        status="Delivered"
      />
      <ChatBubble
        direction="left"
        senderName="Bonnie Green"
        time="11:48"
        avatarSrc={AVATAR_A}
        avatarAlt="Bonnie Green"
        type="file"
        fileName="Project_overview.pdf"
        filePages="12 Pages"
        fileSize="18 MB"
        fileFormat="PDF"
      />
      <ChatBubble
        direction="right"
        senderName="You"
        time="11:49"
        avatarSrc={AVATAR_B}
        avatarAlt="You"
        type="audio"
        audioDuration="0:24"
        status="Delivered"
      />
      <ChatBubble
        direction="left"
        senderName="Bonnie Green"
        time="11:50"
        avatarSrc={AVATAR_A}
        avatarAlt="Bonnie Green"
        type="link"
        linkIntro="Check out this open-source UI component library based on:"
        linkUrl="https://flowbite.com"
        linkTitle="Flowbite — UI Component Library"
        linkDomain="flowbite.com"
        imageSrc={LINK_IMG}
        imageAlt="Flowbite preview"
      />
    </div>
  ),
};
