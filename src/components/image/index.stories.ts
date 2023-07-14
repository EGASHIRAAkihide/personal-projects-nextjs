import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Image>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AspectRatioVideo: Story = {
  args: {
    src: '/jpg/dummy.jpg',
    alt: 'sample-aspect-ratio-video',
    aspectRatio: '16:9',
  },
};

export const AspectRatioImage: Story = {
  args: {
    src: '/jpg/dummy.jpg',
    alt: 'sample-aspect-ratio-image',
    aspectRatio: '4:3',
  },
}

export const AspectRatioSquare: Story = {
  args: {
    src: '/jpg/dummy.jpg',
    alt: 'sample-aspect-ratio-square',
    aspectRatio: '1:1',
  },
}

export const AspectRatioAuto: Story = {
  args: {
    src: '/jpg/dummy.jpg',
    alt: 'sample-aspect-ratio-auto',
    aspectRatio: 'auto',
  },
};