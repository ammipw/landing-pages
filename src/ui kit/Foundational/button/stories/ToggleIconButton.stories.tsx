import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

import { ToggleIconButton } from '../Button';
import { Check } from 'lucide-react';

const meta = {
  title: "UI Kit/Foundational/Buttons/ToggleIconButton",
  component: ToggleIconButton,
  tags: ['autodocs']
} satisfies Meta<typeof ToggleIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Check size={16} />,
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

    return <ToggleIconButton {...args} onClick={toggleSelected} selected={selected} />
  }
};