import type { Preview } from '@storybook/react-vite'
import '../src/global.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['UI Kit', '*', ['Docs', '*']],
      }
    }
  },
};

export default preview;