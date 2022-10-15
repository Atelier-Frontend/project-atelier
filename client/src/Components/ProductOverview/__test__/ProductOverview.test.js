import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductOverview from '../ProductOverview.jsx';
import App from '/Users/chuck/project-atelier/client/src/index.jsx';

test('renders App component', async () => {
  // ARRANGE
  render(<App />)

  // ACT
  await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Project Atelier')
})