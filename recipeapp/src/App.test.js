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
  });
});
