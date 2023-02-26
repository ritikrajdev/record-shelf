import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '..';
import {
  mockLikeGetResponse,
  mockRecordsGetResponse,
} from '../../../mocks/recordsResponse';
import { makeRequest } from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest');

describe('HomePage', () => {
  it('renders', async () => {
    const screen = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.asFragment()).toMatchSnapshot();
  });

  it('should call makeRequest on sync button click and update data in container', async () => {
    makeRequest
      .mockResolvedValueOnce(mockRecordsGetResponse)
      .mockResolvedValue(mockLikeGetResponse);
    const screen = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const syncButton = screen.getByText('Sync');
    fireEvent.click(syncButton);
    await waitFor(() => {
      expect(screen.getByTestId('container')).toBeTruthy();
    });
  });
});
