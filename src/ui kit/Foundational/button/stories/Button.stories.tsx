import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button, type ButtonProps } from '../Button';

const meta = {
  title: "UI Kit/Foundational/Buttons/Button",
  component: Button,
  tags: ['autodocs']
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    colour: "filled",
    size: "small",
    shape: "round"
  },
  render: (args) => <Button {...args} />
};