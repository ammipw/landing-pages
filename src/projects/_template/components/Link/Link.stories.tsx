import type { Meta, StoryObj } from '@storybook/react-vite';

import Link from './Link';

const meta = {
  title: 'Template/Link',
  component: Link
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};