import { baseApi } from "../../api/baseApi";

export const noticeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addNotice: builder.mutation({
      query: (noticeData) => ({
        url: "/notice/add-notice",
        method: "POST",
        body: noticeData,
      }),
      invalidatesTags: ["notice"],
    }),
    getNotice: builder.query({
      query: () => "/notice",
    }),
    updateNotice: builder.mutation({
      query: ({ noticeId, noticeData }) => ({
        url: `/notice/${noticeId}`,
        method: "PATCH",
        body: noticeData,
      }),
    }),
    deleteNotice: builder.mutation({
      query: (noticeId) => ({
        url: `/notice/${noticeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["notice"],
    }),
  }),
});

export const {
  useAddNoticeMutation,
  useGetNoticeQuery,
  useDeleteNoticeMutation,
  useUpdateNoticeMutation,
} = noticeApi;
