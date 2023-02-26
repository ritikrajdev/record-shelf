export const mockRecordsGetResponse = {
  data: [
    {
      id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      name: 'Beautiful Mistakes (feat. Megan Thee Stallion)',
      genre: {
        id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
        name: 'Pop',
      },
      artist: {
        id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
        name: 'Maroon 5',
      },
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631',
      publishedAt: '2021-06-11T00:00:00',
    },
    {
      id: '45e1d753-2986-43cb-9b9d-30c370056319',
      name: 'This Love',
      genre: {
        id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
        name: 'Pop',
      },
      artist: {
        id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
        name: 'Maroon 5',
      },
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b27317b3850d758fff5a2301e537',
      publishedAt: '2002-06-25T00:00:00',
    },
    {
      id: '8266dac3-b2b1-4551-b2ec-91e260244a51',
      name: 'Payphone',
      genre: {
        id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
        name: 'Pop',
      },
      artist: {
        id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
        name: 'Maroon 5',
      },
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b2733119f490f02fcee6514e8604',
      publishedAt: '2012-01-01T00:00:00',
    },
    {
      id: '94af94a3-9d47-4dd8-9b45-1c51a9443e96',
      name: 'Maps',
      genre: {
        id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
        name: 'Pop',
      },
      artist: {
        id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
        name: 'Maroon 5',
      },
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c',
      publishedAt: '2014-09-02T00:00:00',
    },
    {
      id: 'cd3cc1e3-e1e0-4ccd-bc67-747648985838',
      name: 'Lost',
      genre: {
        id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
        name: 'Pop',
      },
      artist: {
        id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
        name: 'Maroon 5',
      },
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631',
      publishedAt: '2021-06-11T00:00:00',
    },
    {
      id: '0530d74c-5dbc-4f1b-b3e2-7ada4520fb4c',
      name: 'Magnetic',
      genre: {
        id: '305202d2-b598-4c1b-a2bb-ca08bb65bad3',
        name: 'Country',
      },
      artist: {
        id: '8150acae-62fd-491e-bac4-06d074b3c7b4',
        name: 'Phillip Phillips',
      },
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b27322d30dee7738733b99774f9b',
      publishedAt: '2018-01-19T00:00:00',
    },
  ],
};

export const mockLikeGetResponse = {
  data: {
    like: false,
    count: 0,
  },
};

export const mockLikePatchResponse = {
  data: {
    like: true,
    count: 1,
  },
};
