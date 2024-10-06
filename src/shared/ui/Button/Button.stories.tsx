// src/components/Button.story.tsx or src/stories/Button.story.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {Button, ButtonProps, ThemeButton } from './Button'; // Adjust the path based on your component structure

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
  children: 'Text'
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR
};


export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE
};