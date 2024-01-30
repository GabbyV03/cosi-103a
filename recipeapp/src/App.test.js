import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Grilled Salmon with Lemon-Dill Sauce header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Grilled Salmon with Lemon-Dill Sauce/i);
  expect(headerElement).toBeInTheDocument();
});
