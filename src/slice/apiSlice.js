import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
  endpoints: (builder) => ({ 
    getProductbyCategory: builder.query({
      query: () => `/category-list`,
    }),
    getSortProduct: builder.query({
      query: () => `/category/smartphones`,
    }),
  }),
});

export const {
  useGetProductbyCategoryQuery,
  useGetSortProductQuery
} = myApi;

console.log(myApi, "myApi>>>>>>>");
