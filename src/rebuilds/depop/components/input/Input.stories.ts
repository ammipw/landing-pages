import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta = {
  component: Input,
  title: 'Rebuilds/Depop/Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    ref: { table: { disable: true } },
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { },
};