import type { Meta, StoryObj } from '@storybook/react-vite';

import Header from './Header';

const meta = {
  component: Header,
  title: 'Rebuilds/Depop/Header',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};