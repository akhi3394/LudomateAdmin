import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

if (!baseUrl) {
  console.error('VITE_API_BASE_URL is not defined in .env file');
  throw new Error('Missing VITE_API_BASE_URL environment variable');
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/admin/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: '/admin/registration',
        method: 'POST',
        body: userData,
      }),
    }),
    getDashboardStats: builder.query({
      query: () => '/admin/dashboard/stats',
    }),
    getMonthlySales: builder.query({
      query: ({ year, month }) => `/admin/dashboard/sales?year=${year}&month=${month}`,
    }),
    getWinners: builder.query({
      query: () => '/admin/dashboard/winners',
    }),
     getAllCoins: builder.query({
      query: () => '/user/Coin/allCoin',
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetDashboardStatsQuery,
  useGetMonthlySalesQuery,
  useGetWinnersQuery,
  useGetAllCoinsQuery
} = apiSlice;