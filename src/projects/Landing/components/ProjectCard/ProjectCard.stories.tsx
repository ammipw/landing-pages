import type { Meta, StoryObj } from '@storybook/react-vite';

import ProjectCard from './ProjectCard';

const meta = {
  title: 'Projects/Landing/ProjectCard',
  component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};