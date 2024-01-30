import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Basic "smoke test" to check if
// the component renders without throwing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
