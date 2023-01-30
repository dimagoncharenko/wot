import { FetchArgs } from '@reduxjs/toolkit/dist/query';
import { Category } from '../constants';
import { wargamingApi } from './wargamingApi';

export const vehiclesApi = wargamingApi.injectEndpoints({
  endpoints: (builder) => ({
    getVehicles: builder.query<{ enc: string }, FetchArgs['params'] | void>({
      query: (params: FetchArgs['params']) => {
        return {
          url: `${Category.encyclopedia}/vehicles/`,
          params,
        };
      },
    }),
  }),
});

export const { useGetVehiclesQuery } = vehiclesApi;
