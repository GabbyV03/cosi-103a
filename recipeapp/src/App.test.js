import React from 'react';
import ReactDOM from 'react-dom';
import recipesfromqipingzhang from './App';
import { render, screen } from '@testing-library/react';
import App from './App';

"jest"; {
  // ...
  "setupFilesAfterEnv"; ["<rootDir>/src/setupTests.js"]
 }

 const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<recipesfromqipingzhang />, div);
});


it('renders recipe1 name', () => {
  render(<App/>);
  expect(screen.getByText('Salty Crispy Chicken (Salted Fried Chicken)')).toBeInTheDocument();
});


it('renders recipe2 name', () => {
  render(<App />);
  expect(screen.getByText('Mushroom soup')).toBeInTheDocument();
});


