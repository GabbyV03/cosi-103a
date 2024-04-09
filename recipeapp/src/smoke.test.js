import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

import Team from './Team';
import Landing_page from './Landing_page';

// Mock matchMedia
window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  };
};

test('renders the Landing Page without crashing', () => {
  // Mocking because the landing page uses props; see landing_page.test.js
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve({ url: 'https://example.com/details' }),
  });

  const mockProps = {
    glist: [],
    rtnGlist: jest.fn(),
  };

  render(<Landing_page {...mockProps} />);

  jest.restoreAllMocks();
});

test('renders Recipe Page without crashing', () => {
  render(<App />);
});

test('renders Team Page', () => {
  render(<Team />);
});

// Yao on Apr 8:
// I think we might have some errors in the test file, cause it can pass anyway even I type the wrong name of the button...?
// For now, it should NNNNOOOOOTTTTT pass the test.

// Smoke test for the "Add New Recipe" button  
// test('adds a new recipe into the list', async () => {
//   const { getByText, getByLabelText } = render(<App />);

//   const textarea = getByLabelText('New Recipe JSON');
//   fireEvent.change(textarea, { target: { value: '{"name": "New Recipe", "ingredients": ["Ingredient 1", "Ingredient 2"], "steps": ["Step 1", "Step 2"], "imageUrl": "https://example.com/image.jpg"}' } });

//   // Simulate clicking the "Add New Recipe" button
//   const addButton = getByText('Add New Recipe');
//   fireEvent.click(addButton);

//   await waitFor(() => {
//     expect(getByText('New Recipe')).toBeInTheDocument();
//   });
// });

// Smoke test for the "deletion" button 
// test('renders deletion button and checks its functionality', async () => {
//   render(<RecipePage />);

//   expect(getByText('Delete')).toBeInTheDocument();
//   const deleteButton = screen.getByText('Del');
//   expect(deleteButton).not.toBeNull();
//   userEvent.click(deleteButton);

//   expect(getByText('OK')).toBeInTheDocument();
//   const confirmButton  = screen.getByText('OK');
//   expect(confirmButton).not.toBeNull();
//   userEvent.click(confirmButton);

//   await screen.findByText('Recipe deleted successfully');
// });

// Just for testing workflow file
//process.exit(0);

