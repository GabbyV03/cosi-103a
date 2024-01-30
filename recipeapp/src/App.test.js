import React from 'react';
import ReactDOM from 'react-dom';
import recipesfromqipingzhang from './App';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders Mushroom soup header', () => {
    const headerElement = screen.getByText(/Mushroom soup/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders Lemon Drizzle Cake header', () => {
    const headerElement = screen.getByText(/Lemon Drizzle Cake/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders Chocolate Chip Cookies header', () => {
    const headerElement = screen.getByText(/Chocolate Chip Cookies/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders Lemon Drizzle Cake image', () => {
    const imageElement = screen.getByAltText('Lemon Drizzle Cake');
    expect(imageElement).toBeInTheDocument();
  });

  test('renders Chocolate Chip Cookies image', () => {
    const imageElement = screen.getByAltText('Chocolate Chip Cookies');
    expect(imageElement).toBeInTheDocument();
  });

  test('renders Grilled Salmon with Lemon-Dill Sauce header', () => {
    const headerElement = screen.getByText(/Grilled Salmon with Lemon-Dill Sauce/i);
    expect(headerElement).toBeInTheDocument();
  
    
    // Tests from Qiping
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
    expect(screen.getByText('Salty Crispy Chicken (Salted Fried Chicken)')).toBeInTheDocument();
  });

  it('renders recipe2 name', () => {
    expect(screen.getByText('Mushroom soup')).toBeInTheDocument();
  });
});


