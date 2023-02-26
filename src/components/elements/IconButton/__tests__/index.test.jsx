import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import IconButton from '..';

describe('IconButton', () => {
  it('should render correctly', () => {
    const screen = render(<IconButton iconSrc='test' />);
    expect(screen).toMatchSnapshot();
  });

  it('should render with text correctly', () => {
    const screen = render(<IconButton iconSrc='test'>yo</IconButton>);
    expect(screen.getByText('yo')).toBeTruthy();
  });

  it('should call on click when clicked', () => {
    const onClick = jest.fn();
    const screen = render(<IconButton iconSrc='test' onClick={onClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
