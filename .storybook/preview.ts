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
        order: ['Introduction', 'UI Kit', ['Docs', 'Foundational', 'Layout', 'Data', 'Overlays', 'Forms'], 'Originals', ['*', ['Docs']], '*', ['*', ['Docs']], '*'],
      }
    }
  },
};

export default preview;