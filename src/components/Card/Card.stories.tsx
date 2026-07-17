import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Card } from './Card';

const meta = {
  title: 'Flowbite/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'withImage',
        'ecommerce',
        'pricing',
        'cta',
        'testimonial',
        'userProfile',
        'loginForm',
      ],
      description: 'Card layout variant',
    },
    heading: { control: 'text', description: 'Heading text' },
    body: { control: 'text', description: 'Body paragraph' },
    buttonText: { control: 'text', description: 'Button label' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Default ==========

export const Default: Story = {
  args: {
    variant: 'default',
    heading: 'Streamlining your design process with Flowbite.',
    body: "In today's fast-paced digital landscape, designers and developers need efficient tools that bridge the gap between ideation and implementation.",
    buttonText: 'Read more',
  },
};

// ========== With Image ==========

export const WithImage: Story = {
  args: {
    variant: 'withImage',
    heading: 'Streamlining your design process with Flowbite.',
    body: "In today's fast-paced digital landscape, designers and developers need efficient tools that bridge the gap between ideation and implementation.",
    buttonText: 'Read more',
  },
};

// ========== E-commerce ==========

export const Ecommerce: Story = {
  args: {
    variant: 'ecommerce',
    heading: 'Apple Watch Series 9 GPS Aluminum',
    rating: 4.8,
    price: '$599',
    buttonText: 'Add to cart',
  },
};

// ========== Pricing ==========

export const Pricing: Story = {
  args: {
    variant: 'pricing',
    planName: 'Standard plan',
    priceValue: '$49',
    pricePeriod: '/month',
    features: [
      '2 team members',
      '20GB Cloud storage',
      'Integration help',
      'Sketch files',
    ],
    disabledFeatures: [
      'API access',
      'Complete documentation',
      '24/7 support',
    ],
    buttonText: 'Add to cart',
  },
};

// ========== CTA ==========

export const CTA: Story = {
  args: {
    variant: 'cta',
    heading: 'Get started with Flowbite today',
    body: "Build modern, responsive web applications faster than ever. Join thousands of teams already shipping with Flowbite.",
    buttonText: 'Buy now',
  },
};

// ========== Testimonial ==========

export const Testimonial: Story = {
  args: {
    variant: 'testimonial',
    quote:
      "Flowbite has completely transformed the way our team ships UI. What used to take weeks now takes days, and everything stays perfectly on-brand.",
    authorName: 'Bonnie Green',
    authorRole: 'Developer at Flowbite',
  },
};

// ========== User Profile ==========

export const UserProfile: Story = {
  args: {
    variant: 'userProfile',
    heading: 'Bonnie Green',
    body: 'Product Designer',
    stats: [
      { label: 'Followers', value: '8.5k' },
      { label: 'Following', value: 248 },
      { label: 'Projects', value: 36 },
    ],
  },
};

// ========== Login Form ==========

export const LoginForm: Story = {
  args: {
    variant: 'loginForm',
    heading: 'Sign in to our platform',
    emailLabel: 'Your email',
    passwordLabel: 'Your password',
    buttonText: 'Sign in',
  },
};

// ========== Kitchen sink ==========

const sampleBody =
  "In today's fast-paced digital landscape, designers and developers need efficient tools that bridge the gap between ideation and implementation.";

export const KitchenSink: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: 24,
        maxWidth: 1200,
      }}
    >
      <Card
        variant="default"
        heading="Streamlining your design process with Flowbite."
        body={sampleBody}
        buttonText="Read more"
      />
      <Card
        variant="withImage"
        heading="Streamlining your design process with Flowbite."
        body={sampleBody}
        buttonText="Read more"
      />
      <Card
        variant="ecommerce"
        heading="Apple Watch Series 9 GPS Aluminum"
        rating={4.8}
        price="$599"
        buttonText="Add to cart"
      />
      <Card
        variant="pricing"
        planName="Standard plan"
        priceValue="$49"
        pricePeriod="/month"
        features={['2 team members', '20GB Cloud storage', 'Integration help', 'Sketch files']}
        disabledFeatures={['API access', 'Complete documentation', '24/7 support']}
        buttonText="Add to cart"
      />
      <Card
        variant="cta"
        heading="Get started with Flowbite today"
        body="Build modern, responsive web applications faster than ever."
        buttonText="Buy now"
      />
      <Card
        variant="testimonial"
        quote="Flowbite has completely transformed the way our team ships UI. What used to take weeks now takes days."
        authorName="Bonnie Green"
        authorRole="Developer at Flowbite"
      />
      <Card
        variant="userProfile"
        heading="Bonnie Green"
        body="Product Designer"
        stats={[
          { label: 'Followers', value: '8.5k' },
          { label: 'Following', value: 248 },
          { label: 'Projects', value: 36 },
        ]}
      />
      <Card
        variant="loginForm"
        heading="Sign in to our platform"
        emailLabel="Your email"
        passwordLabel="Your password"
        buttonText="Sign in"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
