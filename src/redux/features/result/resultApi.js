import { baseApi } from "../../api/baseApi";

export const resultApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addResult: builder.mutation({
      query: (resultData) => ({
        url: "/result/add-result",
        method: "POST",
        body: resultData,
      }),
      invalidatesTags: ["result"],
    }),
    getResult: builder.query({
      query: () => "/result",
    }),
    updateResult: builder.mutation({
      query: ({ resultId, resultData }) => ({
        url: `/result/${resultId}`,
        method: "PATCH",
        body: resultData,
      }),
      invalidatesTags: ["result"],
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
  useUpdateResultMutation,
} = resultApi;
