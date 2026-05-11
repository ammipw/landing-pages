import type { Meta, StoryObj } from '@storybook/react-vite';

import Badge from './Badge';

const meta = {
  title: "UI Kit/Foundational/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "New"
  },
  render: (args) => (
    <button className="relative inline-block p-4 hover:bg-gray-100 rounded group">
      Notifications
      <Badge {...args} />
    </button>
  )
};