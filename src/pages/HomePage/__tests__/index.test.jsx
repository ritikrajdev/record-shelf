import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '..';
import {
  mockLikeGetResponse,
  mockLikePatchResponse,
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

  it('should group records by genre when groupBy query param is set', async () => {
    makeRequest
      .mockResolvedValueOnce(mockRecordsGetResponse)
      .mockResolvedValue(mockLikeGetResponse);
    const screen = render(
      <MemoryRouter initialEntries={['/?groupBy=genre']}>
        <HomePage />
      </MemoryRouter>
    );
    const syncButton = screen.getByText('Sync');
    fireEvent.click(syncButton);
    await waitFor(() => {
      expect(screen.getByTestId('container')).toBeTruthy();
      expect(
        screen.getByAltText(
          mockRecordsGetResponse.data[0].genre.name.toLowerCase()
        )
      ).toBeTruthy();
    });
  });

  // FIXME: add inside act ?
  it('should toggle group records by genre when groupBy button is clicked', async () => {
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

    const groupByButton = screen.getByRole('button', {
      name: '',
    });
    fireEvent.click(groupByButton);
    await waitFor(() => {
      expect(
        screen.getByAltText(
          mockRecordsGetResponse.data[0].genre.name.toLowerCase()
        )
      ).toBeTruthy;
    });

    fireEvent.click(groupByButton);
    await waitFor(() => {
      expect(
        screen.queryByAltText(
          mockRecordsGetResponse.data[0].genre.name.toLowerCase()
        )
      ).toBeFalsy;
    });
  });

  it('should render only n records when api returns n reposnses', async () => {
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
      expect(screen.getByTestId('records').childNodes).toHaveLength(
        mockRecordsGetResponse.data.length
      );
    });
  });

  it('should toggle like icon when like button is clicked', async () => {
    makeRequest
      .mockResolvedValueOnce(mockRecordsGetResponse)
      .mockResolvedValueOnce(mockLikeGetResponse)
      .mockResolvedValueOnce(mockLikeGetResponse)
      .mockResolvedValueOnce(mockLikeGetResponse)
      .mockResolvedValueOnce(mockLikeGetResponse)
      .mockResolvedValueOnce(mockLikeGetResponse)
      .mockResolvedValueOnce(mockLikeGetResponse)
      .mockResolvedValueOnce(mockLikePatchResponse)
      .mockResolvedValueOnce({
        data: {
          like: false,
          count: 0,
        },
      });

    const screen = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const syncButton = screen.getByText('Sync');
    fireEvent.click(syncButton);
    await waitFor(() => {
      expect(
        screen.getAllByRole('button', {
          name: String(mockLikeGetResponse.data.count),
        })
      ).toHaveLength(mockRecordsGetResponse.data.length);
    });

    const likeButton = screen.getAllByRole('button', {
      name: String(mockLikeGetResponse.data.count),
    })[0];
    fireEvent.click(likeButton);
    await waitFor(() => {
      expect(
        screen.getByRole('button', {
          name: '1',
        })
      ).toBeTruthy();
    });

    fireEvent.click(likeButton);
    await waitFor(() => {
      expect(
        screen.getAllByRole('button', {
          name: String(mockLikeGetResponse.data.count),
        })
      ).toHaveLength(mockRecordsGetResponse.data.length);
    });
  });
});
