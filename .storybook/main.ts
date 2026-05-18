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
  // .storybook/main.ts
  "typescript": {
    "reactDocgen": 'react-docgen-typescript',
    "reactDocgenTypescriptOptions": {
      "shouldExtractLiteralValuesFromEnum": true,
      "shouldRemoveUndefinedFromOptional": true,
      "shouldExtractValuesFromUnion": true,
      "compilerOptions": {
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true
      }
    }
  }
};
export default config;