import { baseApi } from "./baseApi";

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
  }),
});

export const { useAddTeacherMutation, useGetTeacherQuery } = teacherApi;
