import qs from 'qs';

interface Params extends RequestInit {
  query?: {};
}

export const fetchData = (url: string, params?: Params) => {
  const queryParams = qs.stringify(params?.query);
  const startQueryParams = url.includes('?') ? '' : '?';

  fetch(`${url}${startQueryParams}${queryParams}`, {
    ...params,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};
