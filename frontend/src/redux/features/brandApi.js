import { apiSlice } from "../api/apiSlice";

export const brandApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    getActiveBrands: builder.query({
      query: () => `https://shofy-electronics-ecommerce-ei29.onrender.com/api/brand/active`
    }),
  }),
});

export const {
 useGetActiveBrandsQuery
} = brandApi;
