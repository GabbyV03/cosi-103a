import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Test the recipe page
test('renders app without crashing', () => {
  render(<App />);
});

// Smoke test for adding recipes to the list  
test('adds a new recipe and displays it in the list', async () => {
  // Render the App component
  const { getByText, getByLabelText } = render(<App />);

  // Simulate entering a new recipe JSON in the textarea
  const textarea = getByLabelText('New Recipe JSON');
  fireEvent.change(textarea, { target: { value: '{"name": "New Recipe", "ingredients": ["Ingredient 1", "Ingredient 2"], "steps": ["Step 1", "Step 2"], "imageUrl": "https://example.com/image.jpg"}' } });

  // Simulate clicking the "Add New Recipe" button
  const addButton = getByText('Add New Recipe');
  fireEvent.click(addButton);

  // Wait for the new recipe to appear in the list
  await waitFor(() => {
    expect(getByText('New Recipe')).toBeInTheDocument();
  });
});

// Can do: test landing page and team page


// Just for testing workflow file
process.exit(1);

