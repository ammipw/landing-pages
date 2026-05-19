import type { Meta, StoryObj } from '@storybook/react-vite';

import Badge from './Badge';

const meta = {
  title: "UI Kit/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // value: 10
  },
  render: (args) => (
    <button className="relative inline-block p-4 hover:bg-gray-100 rounded group">
      Notifications
      <Badge {...args} />
    </button>
  )
};