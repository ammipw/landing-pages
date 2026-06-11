import type { Meta, StoryObj } from '@storybook/react-vite';

import Badge from './Badge';
import { Button } from '../button/Button';
import styles from './Badge.module.css';

const meta = {
  title: "Primitives/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The `Badge` component is used to display a small badge with a value or custom content. It can be used to indicate notifications, status, or other contextual information. When a `value` is provided, it will display the value or a truncated version if it exceeds `max_value`. If no `value` is provided, it will display the `children` content."
      },
    },
    controls: {
      disable: true
    }
  },
  argTypes: {
    ref: { table: { disable: true } },
    children: { control: false, description: "The content to display inside the badge when no `value` is provided.", table: { type: { summary: "React.ReactNode" } } },
    value: { control: false, description: "The numeric value to display in the badge. If the value exceeds `max_value`, it will display as `max_value+`." },
    max_value: { control: false, description: "The maximum value to display before truncating with a `+`." },
    label: { control: false, description: "An accessible label for the badge, used by screen readers." },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "New"
  }
};

export const WithValue: Story = {
  args: {
    value: 5,
  }
};

export const WithMaxValue: Story = {
  args: {
    value: 150,
    max_value: 99
  }
};