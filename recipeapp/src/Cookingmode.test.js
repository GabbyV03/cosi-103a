import React from 'react';
import { render, screen } from '@testing-library/react';
import CookingMode from './Cookingmode';

// Mock the onClose function
const onCloseMock = jest.fn();
const mockRecipe = {
  title: 'Mock Recipe',
  steps: ['Step 1', 'Step 2', 'Step 3'],
};

describe('CookingMode Component', () => {
  
  beforeEach(() => {
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve(mockRecipe),
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with initial state', async () => {
    render(<CookingMode recipe={mockRecipe} onClose={onCloseMock} />);
    
    // Wait for the API call to resolve
    await screen.findByText(mockRecipe.title);

    // Check if the title is rendered
    expect(screen.getByText(mockRecipe.title)).toBeInTheDocument();

    // Check if the "Close Cooking Mode" button is rendered
    expect(screen.getByText('Close Cooking Mode')).toBeInTheDocument();

    // Check if the progress bar is rendered
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveValue(1);

    // Check if the first instruction is rendered
    expect(screen.getByText(mockRecipe.steps[0])).toBeInTheDocument();
    // Check if the second instruction is rendered
    expect(screen.getByText(mockRecipe.steps[1])).toBeInTheDocument();
  });

  it('handles closing cooking mode', async () => {
    render(<CookingMode recipe={mockRecipe} onClose={onCloseMock} />);

    // Wait for the API call to resolve
    await screen.findByText(mockRecipe.title);

    // Click the "Close Cooking Mode" button
    screen.getByText('Close Cooking Mode').click();

    // Check if the onClose function is called
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

});
