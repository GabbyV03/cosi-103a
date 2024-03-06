// App.test.js
import { render, screen, waitFor,} from '@testing-library/react';
import App from './App';

beforeEach(() => {
  // Mock fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        {
          name: 'Test Recipe',
          ingredients: ['Ingredient 1', 'Ingredient 2'],
          steps: ['Step 1', 'Step 2'],
          imageUrl: 'test.jpg'
        }
      ]),
    })
  );
  
  fetch.mockClear();
});

test('renders recipes correctly', async () => {
  render(<App />);

  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

  await waitFor(() => {
    expect(screen.getByText('Test Recipe')).toBeInTheDocument();
    expect(screen.getByText('Ingredient 1')).toBeInTheDocument();
    expect(screen.getByText('Ingredient 2')).toBeInTheDocument();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });
});
