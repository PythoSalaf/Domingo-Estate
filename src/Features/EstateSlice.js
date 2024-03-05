import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const estateApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-staging.domingoteamrealty.com/v1/",
  }),
  tagTypes: ["Property"],
  endpoints: (builder) => ({
    properties: builder.query({
      query: (page = 1) => ({
        url: `misc/properties?page=${page}`,
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }),
      providesTags: ["Property"],
    }),
    detail: builder.query({
      query: (name) => ({
        url: `misc/properties/${name}`,
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }),
      providesTags: ["Propertys"],
    }),
  }),
});

export const { usePropertiesQuery, useDetailQuery } = estateApi;
