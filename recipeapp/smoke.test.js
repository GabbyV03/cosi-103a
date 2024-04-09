import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Yao on Apr 8:
// I think we might have some errors in the test file, cause it can pass anyway even I type the wrong name of the button...?

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

// Smoke test for the "deletion" button 
test('renders deletion button and checks its functionality', async () => {
  render(<RecipePage />);

  const addButton = getByText('Del');
  fireEvent.click(addButton);

  const confirmButton  = getByText('OK');
  fireEvent.click(confirmButton );

  await screen.findByText('Recipe deleted successfully');
});

// Just for testing workflow file
process.exit(1);

