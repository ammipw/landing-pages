import type { Meta, StoryObj } from '@storybook/react-vite';

import Tabs from './Tabs';

const meta = {
  title: "UI Kit/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};