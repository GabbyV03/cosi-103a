import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Test recipe page
test('renders app without crashing', () => {
  render(<App />);
});

// Can do: test other pages 

// Just for testing workflow file
process.exit(1);

