import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers;
  },
  }),
  // refetchOnMountOrArgChange: true,
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact']
    }),
    addContact: builder.mutation ({
      query: (object) => ({
        url: '/contacts',
        method: 'POST',
        body: object,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation ({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
})

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

export default contactsApi;