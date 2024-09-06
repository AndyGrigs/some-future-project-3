import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      shared: path.resolve(__dirname, '../src/shared'),
    };
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
