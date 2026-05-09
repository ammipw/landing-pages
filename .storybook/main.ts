import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/Introduction.mdx",
    "../src/projects/ui-kit/**/*.mdx",
    "../src/projects/ui-kit/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": ["@storybook/addon-docs"],
  "framework": "@storybook/react-vite"
};
export default config;