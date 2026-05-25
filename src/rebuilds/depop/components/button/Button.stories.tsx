import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
  component: Button,
  title: 'Rebuilds/Depop/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    ref: { table: { disable: true } },
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Button' },
};