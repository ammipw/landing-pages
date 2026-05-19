import type { Meta, StoryObj } from '@storybook/react-vite';

import ButtonGroup from './ButtonGroup';
import {Button} from '../button/Button';

const meta = {
  title: "UI Kit/ButtonsGroup",
  component: ButtonGroup,
  tags: ['autodocs']
} satisfies Meta<typeof ButtonGroup>;

export default meta;

// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     children: (<>
//       <Button>Button 1</Button>
//       <Button>Button 2</Button>
//       <Button>Button 3</Button>
//     </>)
//   },
// };