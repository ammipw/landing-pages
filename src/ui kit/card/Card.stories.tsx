import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './Card';

const meta = {
  title: "UI Kit/Card",
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="max-w-lg">
      <img src="https://placehold.co/200x100" alt="Placeholder Image" className="w-full" />
      <div className="p-4">
        <h3 className="mb-2 font-semibold text-xl">Card Title</h3>
        <p className="mb-2">This is a description of the card content. It can be a brief summary or additional information.</p>
      </div>
    </Card>
  )
};