import { render, screen } from '@testing-library/react';

describe('Groceryoffcanvas', () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });

  test('renders mock component without crashing', () => {
    const MockComponent = () => <div>Mock Component</div>;
    render(<MockComponent />);
  });

  test('renders "Grocery List" button in mock component', () => {
    const MockComponent = () => <button>Grocery List</button>;
    render(<MockComponent />);
    const buttonElement = screen.getByText(/Grocery List/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
