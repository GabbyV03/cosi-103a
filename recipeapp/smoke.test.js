import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Smoke test for the Landing Page
test('renders app without crashing', () => {
  render(<App />);
});

// Smoke test for the Team Page
test('renders Team Page', () => {
  render(<TeamPage />);
  const headerElement = screen.getByRole('heading');
  expect(headerElement).toBeInTheDocument();
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


// and/or edition/deletion buttons on the recipe page
test('renders deletion button and checks its functionality', async () => {
  render(<RecipePage />);
  const deleteButton = screen.getByRole('button', { name: /delete/i });
  userEvent.click(deleteButton);

  // Confirm the deletion
  const confirmButton = screen.getByRole('button', { name: /OK/i });
  userEvent.click(confirmButton);

  // Wait for the recipes to be updated
  await screen.findByText('Recipe deleted successfully');
});

// Just for testing workflow file
process.exit(1);

