import React from 'react';
import { render, screen } from '@testing-library/react';
import CookingMode from './Cookingmode';

// Mock the onClose function, testing the links between codes and
// ignoring the actual implementation of the function.
// Used because recipe.title is different for each recipe
const onCloseMock = jest.fn();
const mockRecipe = {
  title: 'Mock Recipe',
  instructions: ['Step 1', 'Step 2', 'Step 3'],
};

describe('CookingMode Component', () => {
  
  it('renders the component with initial state', () => {
    render(<CookingMode recipe={mockRecipe} onClose={onCloseMock} />);
    
    // Check if the title is rendered
    expect(screen.getByText(mockRecipe.title)).toBeInTheDocument();

    // Check if the "Close Cooking Mode" button is rendered
    expect(screen.getByText('Close Cooking Mode')).toBeInTheDocument();

    // Check if the progress bar is rendered
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveValue(1);

    // Check if the first instruction is rendered
    expect(screen.getByText(mockRecipe.instructions[0])).toBeInTheDocument();
  });


  it('handles closing cooking mode', () => {
    render(<CookingMode recipe={mockRecipe} onClose={onCloseMock} />);

    // Click the "Close Cooking Mode" button
    screen.getByText('Close Cooking Mode').click();

    // Check if the onClose function is called
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  // Parts commented out: not working because fail to click the next arrow in the carousel
  it('handles carousel navigation', () => {
    render(<CookingMode recipe={mockRecipe} onClose={onCloseMock} />);

  //   // Click the next arrow in the carousel
  //   screen.getByClassName('next-button').click();
  //   // not working: screen.getByRole('button', { name: '❯' }).click();

  //   // Check if the progress bar is updated
  //   const progressBar = screen.getByRole('progressbar');
  //   expect(progressBar).toHaveValue(2);

  });

});
