import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Record from '..';
import { mockRecordsData } from '../../../../mocks/records';

describe('Record', () => {
  it('should render correctly with gray heart when not liked', () => {
    const screen = render(<Record recordData={mockRecordsData[0]} />);
    expect(screen.asFragment()).toMatchSnapshot();
    expect(screen.getByRole('button').style.background).toContain('heart-gray');
  });

  it('should render red heart when liked', () => {
    const screen = render(
      <Record recordData={{ ...mockRecordsData[1], isLiked: true }} />
    );
    expect(screen.getByRole('button').style.background).toContain('heart-red');
  });

  it('should call onClick when like button is clicked', () => {
    const onClick = jest.fn();
    const screen = render(
      <Record recordData={mockRecordsData[0]} onLikeClick={onClick} />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
