import { baseApi } from "../../api/baseApi";

export const batchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBatch: builder.mutation({
      query: (batchData) => ({
        url: "/batch/add-batch",
        method: "POST",
        body: batchData,
      }),
      invalidatesTags: ["batch"],
    }),
    getAllBatch: builder.query({
      query: () => "/batch",
    }),
    updateBatch: builder.mutation({
      query: ({ batchId, batchData }) => ({
        url: `/batch/${batchId}`,
        method: "PATCH",
        body: batchData,
      }),
      invalidatesTags: ["batch"],
    }),
    deleteBatch: builder.mutation({
      query: (batchId) => ({
        url: `/batch/${batchId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["batch"],
    }),
  }),
});

export const {
  useAddBatchMutation,
  useGetAllBatchQuery,
  useUpdateBatchMutation,
  useDeleteBatchMutation,
} = batchApi;
