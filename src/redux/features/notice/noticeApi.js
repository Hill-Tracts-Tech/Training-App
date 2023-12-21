import { baseApi } from "../../api/baseApi";

export const noticeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addNotice: builder.mutation({
      query: (teacherData) => ({
        url: "/notice/add-notice",
        method: "POST",
        body: teacherData,
      }),
      invalidatesTags: ["notice"],
    }),
    getNotice: builder.query({
      query: () => "/notice",
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
} = noticeApi;
