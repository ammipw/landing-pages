import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "..src/Introduction.mdx",
    "../src/projects/*.mdx",
    "../src/projects/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": ["@storybook/addon-docs"],
  "framework": "@storybook/react-vite"
};
export default config;