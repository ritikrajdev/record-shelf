import { render } from '@testing-library/react';
import React from 'react';
import GenreIcon from '..';

describe('GenereIcon', () => {
  it('should render correctly', () => {
    const screen = render(<GenreIcon />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
