import React from 'react';
import { render, screen } from '@testing-library/react';
import GroupExample from './Team';

describe('GroupExample', () => {
  beforeEach(() => {
    render(<GroupExample />);
  });

  test('renders four cards', () => {
    const cards = screen.getAllByRole('img');
    expect(cards).toHaveLength(4);
  });

  test('renders images with correct alt text', () => {
    expect(screen.getByAltText('Athena Bai')).toBeInTheDocument();
    expect(screen.getByAltText('Gabriella Vukomanovic')).toBeInTheDocument();
    expect(screen.getByAltText('Qiping Zhang')).toBeInTheDocument();
    expect(screen.getByAltText('Yao Sun')).toBeInTheDocument();
  });
});