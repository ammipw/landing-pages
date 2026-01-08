import type { Meta, StoryObj } from '@storybook/react-vite';

import SearchBox from './SearchBox';

const meta = {
  title: 'Projects/Dribbble/SearchBox',
  component: SearchBox,
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};