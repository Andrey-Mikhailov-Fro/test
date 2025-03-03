import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://test2.sionic.ru/api/" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "Categories",
    }),
    getProducts: builder.query({
      query: () => "Products",
    }),
    getProductImages: builder.query({
      query: () => "ProductImages",
    }),
    getProductVariations: builder.query({
      query: () => "ProductVariations",
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductImagesQuery,
  useLazyGetProductVariationsQuery,
} = api;
