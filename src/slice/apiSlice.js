import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products' }),
  endpoints: (builder) => ({ 
    getProductbyCategory: builder.query({
      query: (category) => `/category-list/${category}`,
    }),
    getSortProduct: builder.query({
      query: (sort) => `?sortBy=title&order=${sort}`,
    }),
  }),
});

export const {
  useGetProductbyCategoryQuery,
  useGetSortProductQuery
} = myApi;

console.log(myApi, "myApi>>>>>>>");
