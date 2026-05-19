import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';

const meta = {
  title: "UI Kit/Button",
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const button: Story = {
  args: {
    children: "Button",
    colour: "filled",
    size: "small",
    shape: "round",
  },
  parameters: {
    controls: { exclude: ['ref'] }
  },
  render: (args) => <Button {...args} />
};