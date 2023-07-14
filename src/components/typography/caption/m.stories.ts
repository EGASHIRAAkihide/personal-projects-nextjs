import type { Meta, StoryObj } from '@storybook/react';
import { CaptionM } from './m';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CaptionM> = {
  title: 'Components/Typography/CaptionM',
  component: CaptionM,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CaptionM>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'SampleTextサンプルテキスト',
  },
};
