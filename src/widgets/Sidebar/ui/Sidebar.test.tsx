import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import {Sidebar} from './Sidebar'; 
import renderWithTranslation from 'shared/helpers/tests/renderWithTranslation';



test('renders Sidebar component', () => {
  renderWithTranslation(<Sidebar/>)
  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
});

test('renders Sidebar component', () => {
  renderWithTranslation(<Sidebar/>)
  const toggle = screen.getByTestId('sidebar-toggle')
  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  fireEvent.click(toggle)
  expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
});
