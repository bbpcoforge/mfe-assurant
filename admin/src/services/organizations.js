// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { accessControlAPI } from "../../../shared/constants";

// Define a service using a base URL and expected endpoints
export const organizationApi = createApi({
  reducerPath: "organizationApi",
  baseQuery: fetchBaseQuery({ baseUrl: accessControlAPI }),
  endpoints: (builder) => ({
    getOrganizations: builder.query({
      query: () => `organizations`,
    }),
    getOrganizationsByParantId: builder.query({
      query: (parentOrgId) => `organizations?parentOrgId=${parentOrgId}`,
    }),
    getOrganization: builder.query({
      query: (orgId) => `organizations/${orgId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetOrganizationsQuery,
  useGetOrganizationsByParantIdQuery,
  useGetOrganizationQuery,
} = organizationApi;
