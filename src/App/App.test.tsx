import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Banner Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chez vous, partout et ailleurs/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Header Menu Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Accueil/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Header Menu Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/À Propos/i);
  expect(linkElement).toBeInTheDocument();
});
