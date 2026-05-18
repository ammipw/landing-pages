import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from '../Button';
import { Menu } from 'lucide-react';

const meta = {
  title: "UI Kit/Foundational/Buttons/IconButton",
  component: IconButton,
  tags: ['autodocs']
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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