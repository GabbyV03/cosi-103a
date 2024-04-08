import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Test the recipe page
test('renders app without crashing', () => {
  render(<App />);
});

// Smoke test for the "Add New Recipe" button  
test('adds a new recipe into the list', async () => {
  const { getByText, getByLabelText } = render(<App />);

  const textarea = getByLabelText('New Recipe JSON');
  fireEvent.change(textarea, { target: { value: '{"name": "New Recipe", "ingredients": ["Ingredient 1", "Ingredient 2"], "steps": ["Step 1", "Step 2"], "imageUrl": "https://example.com/image.jpg"}' } });

  // Simulate clicking the "Add New Recipe" button
  const addButton = getByText('Add New Recipe');
  fireEvent.click(addButton);

  await waitFor(() => {
    expect(getByText('New Recipe')).toBeInTheDocument();
  });
});

// Can do: test landing page, team page,
// and/or edition/deletion buttons on the recipe page


// Just for testing workflow file
process.exit(1);

