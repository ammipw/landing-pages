import type { Preview } from '@storybook/react-vite'

import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/zalando-sans-semiexpanded/wght.css';
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
        order: ['Introduction', 'UI Kit', '*', ['Docs', '*']],
      }
    }
  },
};

export default preview;