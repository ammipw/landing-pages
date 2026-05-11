import type { Meta, StoryObj } from '@storybook/react-vite';

import Avatar from './Avatar';

const meta = {
  title: "UI Kit/Foundational/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: "John Doe",
      title: "Software Engineer",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    orientation: 'horizontal',
  }
};