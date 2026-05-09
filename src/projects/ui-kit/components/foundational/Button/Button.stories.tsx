import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';

const meta = {
  title: 'UI Kit/Button',
  component: Button,
  // tags: ['!dev']
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};