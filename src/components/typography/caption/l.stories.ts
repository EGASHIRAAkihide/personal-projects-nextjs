import type { Meta, StoryObj } from '@storybook/react';
import { CaptionL } from './l';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CaptionL> = {
  title: 'Components/Typography/CaptionL',
  component: CaptionL,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CaptionL>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'SampleTextサンプルテキスト',
  },
};
