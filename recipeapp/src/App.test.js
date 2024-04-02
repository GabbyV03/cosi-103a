// App.test.js
import { render, screen, waitFor} from '@testing-library/react';
import App from './App';

// imported for testing the form
import React from 'react';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

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

// Test the form to add new recipe
test('adds a new recipe and makes API call', async () => {
  // Mock the fetch function to simulate the API call
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({ message: 'Recipe added successfully' }),
  });

  render(<App />);

  // Add a new recipe
  fireEvent.change(screen.getByRole('textbox'), { target: { value: '{"name": "New Recipe", "ingredients": ["Ingredient1", "Ingredient2"], "steps": ["Step1", "Step2"], "imageUrl": "example.com/image.jpg"}' } });
  fireEvent.click(screen.getByRole('button', { name: 'Add New Recipe' }));

  // Wait for the API call to be made
  await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('/api/recipes', expect.objectContaining({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{"name": "New Recipe", "ingredients": ["Ingredient1", "Ingredient2"], "steps": ["Step1", "Step2"], "imageUrl": "example.com/image.jpg"}',
  })));

  // Verify that the new recipe is added to the UI
  expect(screen.getByText('New Recipe')).toBeInTheDocument();
  expect(screen.getByText('Ingredient1')).toBeInTheDocument();
  expect(screen.getByText('Step1')).toBeInTheDocument();

  // Clean up
  global.fetch.mockClear();
});

