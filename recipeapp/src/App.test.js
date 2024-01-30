import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RecipeFromAthena from './App';
import { render, screen } from '@testing-library/react';

// Basic "smoke test" to check if
// the <App /> component renders without throwing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// "Smoke test" to check if
// the <RecipeFromAthena /> component renders without throwing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecipeFromAthena />, div);
});

// Test that the <App /> component renders
// the heaing of the landing page "Best Recipes".
it('renders landing page title', () => {
  render(<App />);
  expect(screen.getByText('Best Recipes')).toBeInTheDocument();
});

// Test that the <RecipeFromAthena /> component
// renders the recipe name "Cheesecake".
it('renders recipe name', () => {
  render(<RecipeFromAthena />);
  expect(screen.getByText('Cheesecake')).toBeInTheDocument();
});

// Test that the <RecipeFromAthena /> component renders
// the image of the cheesecake 
it('renders recipe image', () => {
  render(<RecipeFromAthena />);
  expect(screen.getByText('Best Recipes')).toBeInTheDocument();
});