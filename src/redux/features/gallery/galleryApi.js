import { baseApi } from "../../api/baseApi";

export const galleryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addImage: builder.mutation({
      query: (galleryData) => ({
        url: "/gallery/add-image",
        method: "POST",
        body: galleryData,
      }),
      invalidatesTags: ["gallery"],
    }),
    getImages: builder.query({
      query: () => "/gallery",
    }),
    deleteImage: builder.mutation({
      query: (imageId) => ({
        url: `/gallery/${imageId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["gallery"],
    }),
  }),
});

export const {
  useAddImageMutation,
  useGetImagesQuery,
  useDeleteImageMutation,
} = galleryApi;
