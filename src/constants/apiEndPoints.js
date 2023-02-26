export const DOMAIN = 'http://localhost:8080';

export const GET_ALL_RECORDS = {
  url: DOMAIN + '/api/records',
};

export const GET_LIKES = (recordId) => ({
  url: DOMAIN + `/api/records/${recordId}/likes`,
});

export const UPDATE_LIKES = (recordId, data) => ({
  url: DOMAIN + `/api/records/${recordId}/likes`,
  method: 'PATCH',
  data: data,
});
