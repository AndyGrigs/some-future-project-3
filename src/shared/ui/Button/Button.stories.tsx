// src/components/Button.story.tsx or src/stories/Button.story.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {Button, ButtonProps } from './Button'; // Adjust the path based on your component structure

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

// Template for stories
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Export different button variants as individual stories
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  variant: 'primary',
  disabled: true,
};
