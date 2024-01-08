import { baseApi } from "../../api/baseApi";

export const thumbnailApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStatistic: builder.query({
      query: () => ({
        url: "/statistic",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetStatisticQuery } = thumbnailApi;
