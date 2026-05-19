import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import { SplitButton } from '../Button';

const meta = {
  title: "UI Kit/Buttons/SplitButton",
  component: SplitButton,
  // tags: ['autodocs']
} satisfies Meta<typeof SplitButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const splitButton: Story = {
  args: {
    children: "Split",
    colour: "filled",
    size: "small",
    shape: "round",
    defaultSelected: false,
    selected: false
  },
  parameters: {
    controls: { exclude: ['ref'] }
  },
  render: (args) => {
    const [{selected}, updateArgs] = useArgs()

    function toggleSelected() {
      updateArgs({selected: !selected})
    }

    return <SplitButton {...args} />
  }
};