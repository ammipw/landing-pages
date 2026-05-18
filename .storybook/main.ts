import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/Introduction.mdx",
    "../src/ui kit/**/*.mdx",
    "../src/ui kit/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/rebuilds/stripe/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": ["@storybook/addon-docs"],
  "framework": "@storybook/react-vite",
  "core": {
    "disableTelemetry": true
  },
  "typescript": {
    "reactDocgen": 'react-docgen-typescript',
    "reactDocgenTypescriptOptions": {
      "shouldExtractLiteralValuesFromEnum": true,
      "shouldExtractValuesFromUnion": true,
      "savePropValueAsString": false,
    },
  },
};
export default config;