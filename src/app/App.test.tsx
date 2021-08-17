import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders bbirthday-ffringe', () => {
  render(<App />);
  const linkElement = screen.getByText(/bbirthda/i);
  expect(linkElement).toBeInTheDocument();
});
