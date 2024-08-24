import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ThemeButton } from './Button';


test('renders the button with given text', () => {
  const buttonText = 'Click Me';
  render(<Button theme={ThemeButton.CLEAR}>TEXT</Button>);
  // Assuming you want to check if the rendered button contains the buttonText
  expect(screen.getByText('TEXT')).toBeInTheDocument();
}); 