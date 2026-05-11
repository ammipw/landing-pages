import type { Meta, StoryObj } from '@storybook/react-vite';

import Input from './Input';

const meta = {
  title: "UI Kit/Foundational/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};