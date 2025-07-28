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
    getSalesStats: builder.query({
      query: ({ mode, year }) => `/admin/report/sales-stats?mode=${mode}&year=${year}`,
    }),
    getCustomerStats: builder.query({
      query: () => '/admin/report/customer-stats',
    }),
    getRevenueStats: builder.query({
      query: () => '/admin/report/revenue-stats',
    }),
    getEarningsStats: builder.query({
      query: () => '/admin/report/earnings-stats',
    }),
    getNotifications: builder.query({
      query: () => '/admin/notification',
    }),
    sendNotification: builder.mutation({
      query: (body) => ({
        url: '/admin/notification/send',
        method: 'POST',
        body,
      }),
    }),
    updateNotificationStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/admin/notification/${id}/status`,
        method: 'PATCH',
        body: { status },
      }),
    }),
    getAllBoards: builder.query({
      query: () => '/admin/Board/allBoard',
    }),
    getAllAvatars: builder.query({
      query: () => '/admin/Avatar/allAvatar',
    }),
    getAllDice: builder.query({
      query: () => '/admin/Dice/allDice',
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetDashboardStatsQuery,
  useGetMonthlySalesQuery,
  useGetWinnersQuery,
  useGetAllCoinsQuery,
  useGetSalesStatsQuery,
  useGetCustomerStatsQuery,
  useGetRevenueStatsQuery,
  useGetEarningsStatsQuery,
  useGetNotificationsQuery,
  useSendNotificationMutation,
  useUpdateNotificationStatusMutation,
  useGetAllBoardsQuery,
  useGetAllAvatarsQuery,
  useGetAllDiceQuery,

} = apiSlice;