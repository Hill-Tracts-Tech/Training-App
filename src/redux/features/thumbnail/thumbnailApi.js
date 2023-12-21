import { baseApi } from "../../api/baseApi";

export const thumbnailApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addThumbnail: builder.mutation({
      query: (thumbnailData) => ({
        url: "/banner/add-banner",
        method: "POST",
        body: thumbnailData,
      }),
      invalidatesTags: ["banner"],
    }),
    getThumbnails: builder.query({
      query: () => "/banner",
    }),
    updateThumbnail: builder.mutation({
      query: ({ thumbnailId, thumbnailData }) => ({
        url: `/banner/${thumbnailId}`,
        method: "PATCH",
        body: thumbnailData,
      }),
      invalidatesTags: ["banner"],
    }),
    deleteThumbnails: builder.mutation({
      query: (thumbnailId) => ({
        url: `/banner/${thumbnailId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["banner"],
    }),
  }),
});

export const {
  useAddThumbnailMutation,
  useGetThumbnailsQuery,
  useDeleteThumbnailsMutation,
  useUpdateThumbnailMutation,
} = thumbnailApi;
