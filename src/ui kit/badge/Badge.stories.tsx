import type { Meta, StoryObj } from '@storybook/react-vite';

import Badge from './Badge';
import { Button } from '../button/Button';
import styles from './Badge.module.css';

const meta = {
  title: "UI Kit/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    ref: { table: { disable: true } }
  }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "New"
  }
};

export const WithValue: Story = {
  args: {
    value: 5,
  }
};

export const WithMaxValue: Story = {
  args: {
    value: 150,
    max_value: 99
  }
};

export const StyledBadge: Story = {
  args: {
    value: 150,
    max_value: 99
  },
  render: (args) => (
    <div className="relative inline-block">
      <Button shape="square">Button</Button>
      <Badge {...args} className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 bg-red-400 text-red-50 px-1.5 py-0.5 rounded-full text-xs" />
    </div>
  )
};