import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: "https://shofy-electronics-ecommerce-ei29.onrender.com/api/category/add",
        method: "POST",
        body: data,
      }),
    }),
    getShowCategory: builder.query({
      query: () => `https://shofy-electronics-ecommerce-ei29.onrender.com/api/category/show`
    }),
    getProductTypeCategory: builder.query({
      query: (type) => `https://shofy-electronics-ecommerce-ei29.onrender.com/api/category/show/${type}`
    }),
  }),
});

export const {
 useAddCategoryMutation,
 useGetProductTypeCategoryQuery,
 useGetShowCategoryQuery,
} = categoryApi;
