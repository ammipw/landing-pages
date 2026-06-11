import type { Meta, StoryObj } from '@storybook/react-vite';

import Badge from './Badge';
import { Button } from '../../primitives';
import styles from './Badge.module.css';

const meta = {
  title: "Themes/Badge",
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
    // size: { control: false, description: "The size of the badge. Can be `small`, `medium`, or `large`." },
    // shape: { control: false, description: "The shape of the badge. Can be `round` or `square`." },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "New"
  },
  render: (args) => <Badge {...args} className={styles.badge} />
};

export const Empty: Story = {
  args: {},
  render: (args) => <Badge {...args} className={styles.badge} />
};

export const WithValue: Story = {
  args: {
    value: 150,
    max_value: 99
  },
  render: (args) => <Badge {...args} className={styles.badge} />
};

export const WithPosition: Story = {
  args: {},
  render: (args) => (
    <div className="relative inline-block">
      <Button>Messages</Button>
      <Badge {...args} value={5} className={`${styles.badge} absolute top-0 right-0 translate-x-1/3 -translate-y-1/3`} />
    </div>
  )
};