import { baseApi } from "../../api/baseApi";

export const teacherApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTeacher: builder.mutation({
      query: (teacherData) => ({
        url: "/teacher/add-teacher",
        method: "POST",
        body: teacherData,
      }),
      invalidatesTags: ["teacher"],
    }),
    getTeacher: builder.query({
      query: () => "/teacher",
    }),
    updateTeacher: builder.mutation({
      query: ({ teacherId, teacherData }) => ({
        url: `/teacher/${teacherId}`,
        method: "PATCH",
        body: teacherData,
      }),
      invalidatesTags: ["teacher"],
    }),
    deleteTeacher: builder.mutation({
      query: (teacherId) => ({
        url: `/teacher/${teacherId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["teacher"],
    }),
  }),
});

export const {
  useAddTeacherMutation,
  useGetTeacherQuery,
  useDeleteTeacherMutation,
  useUpdateTeacherMutation,
} = teacherApi;
