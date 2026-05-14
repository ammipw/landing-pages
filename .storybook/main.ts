import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/Introduction.mdx",
    "../src/ui kit/**/*.mdx",
    "../src/ui kit/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/rebuilds/stripe/**/*.mdx",
    "../src/rebuilds/stripe/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": ["@storybook/addon-docs"],
  "framework": "@storybook/react-vite"
};
export default config;