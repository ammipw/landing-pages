import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from '../Button';
import { Menu } from 'lucide-react';

const meta = {
  title: "UI Kit/Button/IconButton",
  component: IconButton
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const iconButton: Story = {
  args: {
    icon: <Menu size={16} />,
    colour: "filled",
    size: "small",
    shape: "round"
  },
  render: (args) => {
    return <IconButton {...args} />
  }
};