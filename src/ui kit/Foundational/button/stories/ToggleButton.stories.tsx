import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import { ToggleButton } from '../Button';

const meta = {
  title: "UI Kit/Foundational/Button/ToggleButton",
  component: ToggleButton,
  // tags: ['autodocs']
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const toggleButton: Story = {
  args: {
    children: "Toggle",
    colour: "filled",
    size: "small",
    shape: "round",
    defaultSelected: false,
    selected: false
  },
  render: (args) => {
    const [{selected}, updateArgs] = useArgs()

    function toggleSelected() {
      updateArgs({selected: !selected})
    }

    return <ToggleButton {...args} onClick={toggleSelected} selected={selected} />
  }
};