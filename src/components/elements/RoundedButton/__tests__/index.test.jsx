import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import RoundedButton from '..';

describe('RoundedButton', () => {
  it('should render correctly', () => {
    const screen = render(<RoundedButton>Click me</RoundedButton>);
    expect(screen.getByText('Click me')).toBeTruthy();
    expect(screen.asFragment()).toMatchSnapshot();
  });

  it('should render correctly with no input', () => {
    const screen = render(<RoundedButton />);
    expect(screen.queryByText('Click me')).toBeFalsy();
    expect(screen.asFragment()).toMatchSnapshot();
  });

  it('should render correctly with style', () => {
    const screen = render(
      <RoundedButton style={{ backgroundColor: 'red' }}>Click me</RoundedButton>
    );
    expect(screen.getByText('Click me')).toBeTruthy();
    expect(screen.asFragment()).toMatchSnapshot();
  });

  it('should call onClick when clicked', () => {
    const onClick = jest.fn();
    const screen = render(
      <RoundedButton onClick={onClick}>Click me</RoundedButton>
    );
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
