import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './';

// Create a test case for the HomePage component
describe('<HomePage />', () => {
  // Render the component
  it('should render the HomePage component', () => {
    render(<HomePage />);
  });

  // Test the component's snapshot
  it('should match the HomePage component snapshot', () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Test the component's content
  it('should render the HomePage component with the correct content', () => {
    render(<HomePage />);
    expect(screen.getByText('Ariel Conti')).toBeInTheDocument();
  });

});
