import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react';
import { APPLICATION_ID, BASE_URL } from '../constants';
import generalModule from 'modules/general';
import { RootState } from 'store';

const getAuthQuery = () => {
  return {
    application_id: APPLICATION_ID,
  };
};

export const rawWargamingQuery = (url: string) =>
  fetchBaseQuery({
    baseUrl: url,
  });

const dynamicBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const state = api.getState() as RootState;
  const project = generalModule.selectors.project(state);
  const region = generalModule.selectors.region(state);

  if (!project || !region) {
    console.warn('No project or region received');
  }

  const adjustedArgs =
    typeof args === 'string'
      ? { url: args, params: getAuthQuery() }
      : { ...args, url: args.url, params: { ...getAuthQuery(), ...args.params } };

  return rawWargamingQuery(`${BASE_URL}.${region}/${project}`)(
    adjustedArgs,
    api,
    extraOptions
  );
};

export const wargamingApi = createApi({
  reducerPath: 'wargamingApi',
  baseQuery: dynamicBaseQuery,
  endpoints: () => ({}),
});
