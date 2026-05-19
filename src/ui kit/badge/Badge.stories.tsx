import type { Meta, StoryObj } from '@storybook/react-vite';

import Badge from './Badge';
import { Button } from '../button/Button';

const meta = {
  title: "UI Kit/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    ref: { table: { disable: true } },
    children: { control: false },
  }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Button shape='square'>Button</Button>,
  }
};