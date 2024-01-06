import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apis = createApi({
  reducerPath: "apis",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
  }),
  tagTypes: ["Instagram"],
  keepUnusedDataFor: 0.01,
  endpoints: (builder) => ({
    getloginUser: builder.query({
      query: () => ({
        url: `login`,
        method: "GET",
        providesTags: ["Instagram"],
      }),
    }),
    postregisterUser: builder.mutation({
      query: (data) => ({
        url: `register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Instagram"],
    }),
  }),
});

export const { useGetloginUserQuery, usePostregisterUserMutation } = apis;
