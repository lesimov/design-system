import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const sampleItems = [
  {
    title: 'Can I use Flowbite in open-source projects?',
    children: (
      <>
        <p>
          Generally, it is accepted to use Flowbite in open-source projects, as long as it is not a
          UI library, a theme, a template, a page-builder that would be considered as an alternative
          to Flowbite itself.
        </p>
        <p>With that being said, feel free to use this design kit for your open-source projects.</p>
        <p>Find out more information by reading the release.</p>
      </>
    ),
    defaultOpen: true,
  },
  {
    title: 'How can I get technical support for Flowbite?',
    children: (
      <p>
        You can get technical support by visiting the official Flowbite documentation, the GitHub
        repository, or by reaching out through the official community channels.
      </p>
    ),
  },
  {
    title: 'Where can I find Flowbite documentation and guides?',
    children: (
      <p>
        The official Flowbite documentation is available at flowbite.com with comprehensive guides,
        API references, and examples for all components.
      </p>
    ),
  },
  {
    title: 'Is Flowbite suitable for commercial projects?',
    children: (
      <p>
        Yes, Flowbite is suitable for commercial projects under the terms of its license.
      </p>
    ),
  },
  {
    title: 'How can I get support if I encounter issues with Flowbite?',
    children: (
      <p>
        Check the GitHub issues page, join the community Discord, or contact the support team
        for assistance.
      </p>
    ),
  },
];

const meta = {
  title: 'Flowbite/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'always-open', 'flush', 'arrow-style', 'borderless'],
      description: 'Accordion visual variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show the leading icon before headings',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Default ==========

export const Default: Story = {
  args: {
    items: sampleItems,
    variant: 'default',
  },
};

// ========== Always Open ==========

export const AlwaysOpen: Story = {
  args: {
    items: sampleItems,
    variant: 'always-open',
  },
};

// ========== Flush ==========

export const Flush: Story = {
  args: {
    items: sampleItems,
    variant: 'flush',
  },
};

// ========== Arrow Style ==========

export const ArrowStyle: Story = {
  args: {
    items: sampleItems,
    variant: 'arrow-style',
  },
};

// ========== Borderless ==========

export const Borderless: Story = {
  args: {
    items: sampleItems,
    variant: 'borderless',
  },
};

// ========== Sizes ==========

export const Small: Story = {
  args: {
    items: sampleItems.slice(0, 3),
    variant: 'default',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    items: sampleItems.slice(0, 3),
    variant: 'default',
    size: 'lg',
  },
};

// ========== Without Icons ==========

export const NoIcons: Story = {
  args: {
    items: sampleItems,
    variant: 'default',
    showIcon: false,
  },
};

// ========== Kitchen sink ==========

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, width: 480 }}>
      <div>
        <h3 style={{ marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>Default</h3>
        <Accordion items={sampleItems} variant="default" />
      </div>
      <div>
        <h3 style={{ marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>Always Open</h3>
        <Accordion items={sampleItems} variant="always-open" />
      </div>
      <div>
        <h3 style={{ marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>Flush</h3>
        <Accordion items={sampleItems} variant="flush" />
      </div>
      <div>
        <h3 style={{ marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>Arrow Style</h3>
        <Accordion items={sampleItems} variant="arrow-style" />
      </div>
      <div>
        <h3 style={{ marginBottom: 16, fontFamily: 'Inter, sans-serif' }}>Borderless</h3>
        <Accordion items={sampleItems} variant="borderless" />
      </div>
    </div>
  ),
};
