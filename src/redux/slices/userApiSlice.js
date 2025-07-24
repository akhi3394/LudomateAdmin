import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

if (!baseUrl) {
  console.error('VITE_API_BASE_URL is not defined in .env file');
  throw new Error('Missing VITE_API_BASE_URL environment variable');
}

export const userApiSlice = createApi({
  reducerPath: 'userApi',
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
    getUserList: builder.query({
      query: () => ({
        url: '/admin/userList',
        method: 'GET',
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/admin/User/${id}`,
        method: 'GET',
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/admin/User/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetUserListQuery, useGetUserByIdQuery, useDeleteUserMutation } = userApiSlice;