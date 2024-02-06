import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicExamples from './Landing_page';
import Navigater from './Landing_page';

describe('BasicExamples', () => {
  test('renders BasicExamples component', () => {
    render(<BasicExamples />);
    expect(screen.getByText('Salty Crispy Chicken, Gyudon, Cheesecake, and more!')).toBeInTheDocument();
    expect(screen.getByText('Click the link below to view the recipes for these delicious dishes!')).toBeInTheDocument();
    expect(screen.getByText('View Recipe')).toBeInTheDocument();
  });
});

describe('Navigater', () => {
  test('renders Navigater component', () => {
    render(<Navigater />);
    expect(screen.getByText('Group T')).toBeInTheDocument();
  });
});