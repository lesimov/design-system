import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timepicker, TimepickerDropdown } from './Timepicker';
import React from 'react';

const meta = {
  title: 'Flowbite/Timepicker',
  component: Timepicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Timepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// ========== Input Sizes ==========

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
      <Timepicker size="sm" placeholder="-- : --" />
      <Timepicker size="base" placeholder="-- : --" />
      <Timepicker size="lg" placeholder="-- : --" />
    </div>
  ),
};

// ========== Input States ==========

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
      <Timepicker state="initial" placeholder="-- : --" />
      <Timepicker state="focus" placeholder="-- : --" />
      <Timepicker state="filled" value="22:45" />
      <Timepicker state="success" value="14:30" helperText="Time selected" />
      <Timepicker state="error" value="" helperText="Please select a valid time" />
      <Timepicker state="disabled" value="" />
    </div>
  ),
};

// ========== With Dropdown Open ==========

export const WithDropdown: Story = {
  render: () => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Timepicker size="base" value="22:45" />
      <TimepickerDropdown
        size="base"
        value="22:45"
        period="PM"
        open={true}
        onChange={(v) => console.log(v)}
        onPeriodChange={(p) => console.log(p)}
      />
    </div>
  ),
};

// ========== With Form Layout ==========

export const WithFormLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
      {/* Required with helper */}
      <Timepicker
        label="Choose a time"
        required
        value="22:45"
        helperText="Helper text"
        name="time-required"
      />
      {/* Error state */}
      <Timepicker
        label="End time"
        required
        state="error"
        value=""
        helperText="Please select a valid time"
        name="time-error"
      />
      {/* Without label */}
      <Timepicker
        value="14:30"
        helperText="24-hour format"
        name="time-simple"
      />
    </div>
  ),
};

// ========== Kitchen Sink ==========

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, maxWidth: 600 }}>
      {/* Section: States */}
      <section>
        <h3 style={{ margin: '0 0 16px', fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 600 }}>
          Input States
        </h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Timepicker size="base" state="initial" placeholder="-- : --" />
          <Timepicker size="base" state="focus" placeholder="-- : --" />
          <Timepicker size="base" state="filled" value="22:45" />
          <Timepicker size="base" state="success" value="14:30" helperText="Time selected" />
          <Timepicker size="base" state="error" value="" helperText="Please select a valid time" />
          <Timepicker size="base" state="disabled" value="" />
        </div>
      </section>

      {/* Section: Sizes */}
      <section>
        <h3 style={{ margin: '0 0 16px', fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 600 }}>
          Sizes
        </h3>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <Timepicker size="sm" placeholder="-- : --" />
          <Timepicker size="base" placeholder="-- : --" />
          <Timepicker size="lg" placeholder="-- : --" />
        </div>
      </section>

      {/* Section: With Dropdown */}
      <section>
        <h3 style={{ margin: '0 0 16px', fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 600 }}>
          Dropdown
        </h3>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Timepicker size="base" value="22:45" />
          <TimepickerDropdown
            size="base"
            value="22:45"
            period="PM"
            open={true}
            onChange={(v) => console.log('change', v)}
            onPeriodChange={(p) => console.log('period', p)}
          />
        </div>
      </section>

      {/* Section: Form Layout */}
      <section>
        <h3 style={{ margin: '0 0 16px', fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 600 }}>
          Form Layout
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Timepicker
            label="Choose a time"
            required
            value="22:45"
            helperText="Helper text"
            name="choose-time"
          />
          <Timepicker
            label="End time"
            required
            state="error"
            value=""
            helperText="Please select a valid time"
            name="end-time"
          />
          <Timepicker value="14:30" helperText="24-hour format" name="simple-time" />
        </div>
      </section>
    </div>
  ),
};