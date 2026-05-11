import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';

const meta = {
  title: 'Rebuilds/Stripe/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    "children": "Button",
    "fill": "light",
    "arrow": false,
    "outline": false,
  },
};

const themes = ['brand', 'danger', 'neutral'];
const fills = ['light', 'dark', 'none'];
const arrows = [false, true];
const outlines = [false, true];

export const AllVariants = {
  render: () => (
    <div>
      <h2>All Button Variants</h2>
    </div>
  ),
};