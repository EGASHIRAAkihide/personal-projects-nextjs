import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    disabled: false,
    name: 'Primary',
    onClick: () => console.log('clicked'),
    status: 'primary',
    text: 'button',
    type: 'button',
    value: 'value',
  },
};

export const Secondary: Story = {
  args: {
    disabled: false,
    name: 'Secondary',
    onClick: () => console.log('clicked'),
    status: 'secondary',
    text: 'button',
    type: 'button',
    value: 'value',
  },
};

export const Tertiary: Story = {
  args: {
    disabled: false,
    name: 'Tertiary',
    onClick: () => console.log('clicked'),
    status: 'tertiary',
    text: 'button',
    type: 'button',
    value: 'value',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    name: 'Primary',
    onClick: () => console.log('clicked'),
    status: 'primary',
    text: 'button',
    type: 'button',
    value: 'value',
  },
};
