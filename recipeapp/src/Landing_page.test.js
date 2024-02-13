import { render, screen } from '@testing-library/react';
import Landing_page from './Landing_page';

window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  };
};

describe('Landing_page', () => {
  test('renders Landing_page component without crashing', () => {
    const mockProps = {
      glist: [],
      rtnGlist: jest.fn(),
    };

    render(<Landing_page {...mockProps} />);
  });

  test('renders header', () => {
    const mockProps = {
      glist: [],
      rtnGlist: jest.fn(),
    };

    render(<Landing_page {...mockProps} />);
    const headerElement = screen.getByText(/Welcome to the COSI-103A Group T project page!/i);
    expect(headerElement).toBeInTheDocument();
  });

});