import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import Button from './Button';

const meta = {
  title: "UI Kit/Foundational/Button",
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
    variant: "default",
    colour: "filled",
    size: "medium",
    shape: "round",
    selected: false
  },
  render: (args) => {
    const [{ selected }, updateArgs] = useArgs()

    function toggleSelected() {
      if (args.variant === 'toggle') {
        updateArgs({ selected: !selected })
      }
    }

    return <Button {...args} onClick={toggleSelected} selected={selected} />
  }
};