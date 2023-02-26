import { render } from '@testing-library/react';
import React from 'react';
import Header from '..';

describe('Header', () => {
  it('renders correctly', () => {
    const screen = render(<Header />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
