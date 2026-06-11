import type { Meta, StoryObj } from '@storybook/react-vite';

import Theme from './Theme';

const meta = {
  title: "Primitives/Theme",
  component: Theme,
} satisfies Meta<typeof Theme>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};