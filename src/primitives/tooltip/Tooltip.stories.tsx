import type { Meta, StoryObj } from '@storybook/react-vite';

import Tooltip from './Tooltip';

const meta = {
  title: "Primitives/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};