import type { Meta, StoryObj } from '@storybook/react-vite';

import Carousel from './Carousel';

const meta = {
  title: 'Rebuilds/Stripe/Carousel',
  component: Carousel,
  tags: ['!dev'],
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Carousel.Item key="1">item 1</Carousel.Item>,
      <Carousel.Item key="2" href="#">item 2</Carousel.Item>,
      <Carousel.Item key="3">item 3</Carousel.Item>,
      <Carousel.Item key="4">item 4</Carousel.Item>,
      <Carousel.Item key="5">item 5</Carousel.Item>,
      <Carousel.Item key="6">item 6</Carousel.Item>,
      <Carousel.Item key="7">item 7</Carousel.Item>,
      <Carousel.Item key="8">item 8</Carousel.Item>,
      <Carousel.Item key="9">item 9</Carousel.Item>,
      <Carousel.Item key="10">item 10</Carousel.Item>,
      <Carousel.Item key="11">item 11</Carousel.Item>,
      <Carousel.Item key="12">item 12</Carousel.Item>,
    ]
  },
};