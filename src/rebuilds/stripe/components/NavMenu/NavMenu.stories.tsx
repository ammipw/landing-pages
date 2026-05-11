import type { Meta, StoryObj } from '@storybook/react-vite';

import NavMenu from './NavMenu';

const meta = {
  title: 'Rebuilds/Stripe/NavMenu',
  component: NavMenu,
} satisfies Meta<typeof NavMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <NavMenu.Link title="products" href="#">Products</NavMenu.Link>
        <NavMenu.Link title="solutions" href="#">Solutions</NavMenu.Link>
      </>
    )
  },
};