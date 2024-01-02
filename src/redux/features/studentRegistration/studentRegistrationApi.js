import { baseApi } from "../../api/baseApi";

export const StudentRegistrationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerStudent: builder.mutation({
      query: (registerStudentData) => ({
        url: "/register/register-student",
        method: "POST",
        body: registerStudentData,
      }),
      invalidatesTags: ["register-student"],
    }),
    getRegisterStudent: builder.query({
      query: () => "/register",
    }),
    updateRegisterStudent: builder.mutation({
      query: ({ studentId, registerStudentData }) => ({
        url: `/register/${studentId}`,
        method: "PATCH",
        body: registerStudentData,
      }),
      invalidatesTags: ["register-student"],
    }),
    deleteRegisterStudent: builder.mutation({
      query: (studentId) => ({
        url: `/register/${studentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["register-student"],
    }),
  }),
});

export const {
  useRegisterStudentMutation,
  useGetRegisterStudentQuery,
  useUpdateRegisterStudentMutation,
  useDeleteRegisterStudentMutation,
} = StudentRegistrationApi;
