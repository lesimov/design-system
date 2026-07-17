import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Alert } from './Alert';

const meta = {
  title: 'Flowbite/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'complex', 'small', 'border-top'],
      description: 'Alert visual variant',
    },
    color: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'info', 'default'],
      description: 'Color scheme',
    },
    title: {
      control: 'text',
      description: 'Heading text (complex type)',
    },
    children: {
      control: 'text',
      description: 'Alert body content',
    },
    closable: {
      control: 'boolean',
      description: 'Show close button',
    },
    action: {
      control: 'text',
      description: 'Action button text (complex type)',
    },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Default type ==========

export const Default: Story = {
  args: {
    type: 'default',
    color: 'default',
    children: "Great job! You've acknowledged this significant alert message.",
  },
};

export const DefaultSuccess: Story = {
  args: {
    type: 'default',
    color: 'success',
    children: "Great job! You've acknowledged this significant alert message.",
  },
};

export const DefaultDanger: Story = {
  args: {
    type: 'default',
    color: 'danger',
    children: "Great job! You've acknowledged this significant alert message.",
  },
};

export const DefaultWarning: Story = {
  args: {
    type: 'default',
    color: 'warning',
    children: "Great job! You've acknowledged this significant alert message.",
  },
};

export const DefaultInfo: Story = {
  args: {
    type: 'default',
    color: 'info',
    children: "Great job! You've acknowledged this significant alert message.",
  },
};

export const DefaultClosable: Story = {
  args: {
    type: 'default',
    color: 'default',
    children: "Great job! You've acknowledged this significant alert message.",
    closable: true,
  },
};

// ========== Complex type ==========

export const Complex: Story = {
  args: {
    type: 'complex',
    color: 'default',
    title: 'Alert heading',
    children:
      "Great job! You've acknowledged this significant alert message. We're adding extra text to illustrate how longer notifications are displayed. By doing this, you can see how text wrapping and spacing are managed.",
    action: <button className="flowbite-alert__action-btn">Learn more</button>,
    closable: true,
  },
};

export const ComplexSuccess: Story = {
  args: {
    type: 'complex',
    color: 'success',
    title: 'Alert heading',
    children:
      "Great job! You've acknowledged this significant alert message. We're adding extra text to illustrate how longer notifications are displayed. By doing this, you can see how text wrapping and spacing are managed.",
    action: <button className="flowbite-alert__action-btn">Learn more</button>,
    closable: true,
  },
};

export const ComplexDanger: Story = {
  args: {
    type: 'complex',
    color: 'danger',
    title: 'Alert heading',
    children:
      "Great job! You've acknowledged this significant alert message. We're adding extra text to illustrate how longer notifications are displayed. By doing this, you can see how text wrapping and spacing are managed.",
    action: <button className="flowbite-alert__action-btn">Learn more</button>,
    closable: true,
  },
};

export const ComplexWarning: Story = {
  args: {
    type: 'complex',
    color: 'warning',
    title: 'Alert heading',
    children:
      "Great job! You've acknowledged this significant alert message. We're adding extra text to illustrate how longer notifications are displayed. By doing this, you can see how text wrapping and spacing are managed.",
    action: <button className="flowbite-alert__action-btn">Learn more</button>,
    closable: true,
  },
};

export const ComplexInfo: Story = {
  args: {
    type: 'complex',
    color: 'info',
    title: 'Alert heading',
    children:
      "Great job! You've acknowledged this significant alert message. We're adding extra text to illustrate how longer notifications are displayed. By doing this, you can see how text wrapping and spacing are managed.",
    action: <button className="flowbite-alert__action-btn">Learn more</button>,
    closable: true,
  },
};

// ========== Small type ==========

export const Small: Story = {
  args: {
    type: 'small',
    color: 'default',
    children: 'New update available',
  },
};

export const SmallSuccess: Story = {
  args: {
    type: 'small',
    color: 'success',
    children: 'New update available',
  },
};

export const SmallClosable: Story = {
  args: {
    type: 'small',
    color: 'success',
    children: 'New update available',
    closable: true,
  },
};

// ========== Border top type ==========

export const BorderTop: Story = {
  args: {
    type: 'border-top',
    color: 'default',
    children: "Great job! You've acknowledged this significant alert message.",
  },
};

export const BorderTopSuccess: Story = {
  args: {
    type: 'border-top',
    color: 'success',
    children: "Great job! You've acknowledged this significant alert message.",
  },
};

export const BorderTopDanger: Story = {
  args: {
    type: 'border-top',
    color: 'danger',
    children: "Great job! You've acknowledged this significant alert message.",
  },
};

export const BorderTopWarning: Story = {
  args: {
    type: 'border-top',
    color: 'warning',
    children: "Great job! You've acknowledged this significant alert message.",
  },
};

export const BorderTopInfo: Story = {
  args: {
    type: 'border-top',
    color: 'info',
    children: "Great job! You've acknowledged this significant alert message.",
  },
};

export const BorderTopClosable: Story = {
  args: {
    type: 'border-top',
    color: 'success',
    children: "Great job! You've acknowledged this significant alert message.",
    closable: true,
  },
};

// ========== Kitchen sink ==========

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 768 }}>
      <Alert type="default" color="success">
        This is a success alert — make it pop!
      </Alert>
      <Alert type="default" color="danger">
        This is a danger alert — something went wrong.
      </Alert>
      <Alert type="default" color="warning">
        This is a warning alert — proceed with caution.
      </Alert>
      <Alert type="default" color="info">
        This is an info alert — here's some information.
      </Alert>
      <Alert type="default" color="default">
        This is a default alert — just letting you know.
      </Alert>
    </div>
  ),
};