import { baseApi } from "../../api/baseApi";

export const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCourse: builder.mutation({
      query: (courseData) => ({
        url: "/course/add-course",
        method: "POST",
        body: courseData,
      }),
      invalidatesTags: ["course"],
    }),
    getCourses: builder.query({
      query: () => "/course",
    }),
    updateCourse: builder.mutation({
      query: ({ courseId, courseData }) => ({
        url: `/course/${courseId}`,
        method: "PATCH",
        body: courseData,
      }),
      invalidatesTags: ["course"],
    }),
    deleteCourse: builder.mutation({
      query: (courseId) => ({
        url: `/course/${courseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["course"],
    }),
  }),
});

export const {
  useAddCourseMutation,
  useGetCoursesQuery,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseApi;
