import type { Preview } from "@storybook/react";
import styleDecorator from './decorators/styleDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],
  
  decorators: [
    styleDecorator
  ]
};

export default preview;
