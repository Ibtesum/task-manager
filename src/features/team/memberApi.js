import { apiSlice } from "../api/apiSlice";

export const memberApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMembers: builder.query({
      query: () => () => "/team",
    }),
  }),
});

export const { useGetMembersQuery } = memberApi;
