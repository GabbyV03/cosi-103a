import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Landing_page from './Landing_page';

window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  };
};

describe('Landing_page', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ url: 'https://example.com/details' }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });


  test('renders Landing_page component without crashing', () => {
    const mockProps = {
      glist: [],
      rtnGlist: jest.fn(),
    };

    render(<Landing_page {...mockProps} />);
  });

  test('renders header', () => {
    const mockProps = {
      glist: [],
      rtnGlist: jest.fn(),
    };

    render(<Landing_page {...mockProps} />);
    const headerElement = screen.getByText(/Welcome to the COSI-103A Group T project page!/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders nutrition search bar', () => {
    const mockProps = {
      glist: [],
      rtnGlist: jest.fn(),
    };

    render(<Landing_page {...mockProps} />);
    const searchBarElement = screen.getByPlaceholderText('Search for ingredients');
    expect(searchBarElement).toBeInTheDocument();

    // You can simulate typing in the search bar and submitting a query
    fireEvent.change(searchBarElement, { target: { value: 'cheddar' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
  });

  test('displays details URL after fake API call', async () => {
    const mockProps = {
      glist: [],
      rtnGlist: jest.fn(),
    };

    render(<Landing_page {...mockProps} />);

    // Mock the fetch function to return a fake API response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ url: 'https://example.com/details' }),
    });

    // Trigger the action that fetches data
    fireEvent.click(screen.getByText('Search'));

    // Wait for the component to update
    await waitFor(() => expect(screen.getByText('View Nutrient Details')).toBeInTheDocument());

    // Assert that the details URL is displayed
    expect(screen.getByText('View Nutrient Details')).toHaveAttribute('href', 'https://example.com/details');
  });
});