import { baseApi } from "../../api/baseApi";

export const resultApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addResult: builder.mutation({
      query: (galleryData) => ({
        url: "/result/add-result",
        method: "POST",
        body: galleryData,
      }),
      invalidatesTags: ["result"],
    }),
    getResult: builder.query({
      query: () => "/result",
    }),
    deleteResult: builder.mutation({
      query: (imageId) => ({
        url: `/result/${imageId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["result"],
    }),
  }),
});

export const {
  useAddResultMutation,
  useGetResultQuery,
  useDeleteResultMutation,
} = resultApi;
